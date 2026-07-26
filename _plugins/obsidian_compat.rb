# Obsidian 兼容插件：转换 wikilink 与 ==高亮==，对代码块安全，自动带 baseurl
require 'jekyll'

module ObsidianCompat
  @index = {}

  # 扫描仓库内所有 .md，建立「笔记名 -> 站点 URL」映射
  def self.build_index(site)
    @index = {}
    root = site.source
    Dir.glob(File.join(root, '**', '*.md')).each do |f|
      rel = f.sub(root + File::SEPARATOR, '').sub(File::SEPARATOR, '/')
      next if rel.start_with?('_') || rel.include?('.obsidian')
      base = File.basename(rel, '.md')
      url  = '/' + rel.sub(/\.md$/, '.html')
      @index[base]       = url
      @index[base.downcase] ||= url   # 大小写不敏感兜底
    end
  end

  def self.lookup(name)
    name = name.strip
    @index[name] || @index[name.downcase]
  end
end

Jekyll::Hooks.register :site, :post_read do |site|
  ObsidianCompat.build_index(site)
end

Jekyll::Hooks.register [:pages, :posts, :documents], :pre_render do |doc, _payload|
  content = doc.content.to_s
  base    = (doc.site.config['baseurl'] || '').to_s

  # 1) 暂存代码块（围栏 ``` 与行内 `），避免误替换
  code_blocks = []
  content = content.gsub(/```.*?```/m) { |m| code_blocks << m; "\u0000#{code_blocks.size - 1}\u0000" }
  content = content.gsub(/`[^`\n]*`/)  { |m| code_blocks << m; "\u0000#{code_blocks.size - 1}\u0000" }

  # 2) Wikilink：[[目标]] 或 [[目标|别名]] -> <a>
  content = content.gsub(/\[\[([^\]\n]+)\]\]/) do
    inner  = $1.strip
    target, alias = inner.include?('|') ? inner.split('|', 2).map(&:strip) : [inner, inner]
    url = ObsidianCompat.lookup(target)
    if url
      %(<a href="#{base}#{url}" class="wikilink">#{alias}</a>)
    else
      %(<a href="#" class="wikilink missing">#{alias}</a>)
    end
  end

  # 3) 高亮：==文本== -> <mark>（排除数学等号 ===）
  content = content.gsub(/(?<!=)==([^=\n]+)==(?!=)/) do
    %(<mark>#{$1}</mark>)
  end

  # 4) 还原代码块
  content = content.gsub(/\u0000(\d+)\u0000/) { code_blocks[$1.to_i] }

  doc.content = content
end
