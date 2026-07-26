# Wikilink 插件：把 Obsidian 的 [[标题]] 语法转换为站内链接。
# - 匹配：[[七溪岭战斗]] 或 [[七溪岭战斗|显示文字]]
# - 解析顺序：先按笔记的 title 匹配，再按文件名（不含扩展名）匹配
# - 找不到目标时渲染为 <span class="wikilink-missing">，方便发现断链
# 注意：此插件在 GitHub Actions 模式下运行（Deploy from branch 模式不会执行 _plugins）。
module Jekyll
  Jekyll::Hooks.register [:documents, :pages], :pre_render do |doc, _payload|
    content = doc.content.to_s
    next if content.empty?

    site = doc.site
    base = (site.config['baseurl'] || '').to_s

    # 建立 标题/文件名 -> 网址 的全局映射
    map = {}
    if site.respond_to?(:collections)
      site.collections.values.each do |coll|
        next unless coll.respond_to?(:docs)
        coll.docs.each do |d|
          url = d.url
          next if url.nil? || url.empty?
          map[d.data['title'].to_s] = url if d.data && d.data['title']
          bn = File.basename(d.basename, '.*')
          map[bn] = url unless map[bn]
        end
      end
    end
    if site.respond_to?(:pages)
      site.pages.each do |p|
        url = p.url
        next if url.nil? || url.empty?
        map[p.data['title'].to_s] = url if p.data && p.data['title']
        bn = File.basename(p.basename, '.*')
        map[bn] = url unless map[bn]
      end
    end

    content = content.gsub(/\[\[([^\]]+)\]\]/) do |_m|
      inner   = $1.strip
      target, display = inner.split('|', 2)
      target  = target.strip
      display = (display || target).strip
      url = map[target] || map[target.gsub(/\s+/, '-')]
      if url
        "<a href=\"#{base}#{url}\">#{display}</a>"
      else
        "<span class=\"wikilink-missing\">#{display}</span>"
      end
    end

    doc.content = content
  rescue StandardError => e
    Jekyll.logger.warn 'wikilink:', "跳过 #{doc.path}: #{e.message}"
  end
end
