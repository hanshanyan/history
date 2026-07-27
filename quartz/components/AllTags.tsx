import { FullSlug, resolveRelative } from "../util/path"
import { QuartzComponent, QuartzComponentConstructor, QuartzComponentProps } from "./types"
import { classNames } from "../util/lang"

// 左侧栏「全局标签」模块：收集站内所有笔记的 tags，渲染为可点击链接，
// 点击后跳转到 Quartz 自动生成的 /tags/<tag> 页面，列出带该标签的全部文章。
const AllTags: QuartzComponent = ({ allFiles, fileData, displayClass }: QuartzComponentProps) => {
  if (!allFiles) return null

  const tagSet = new Set<string>()
  for (const file of allFiles) {
    const tags = file.frontmatter?.tags
    if (tags) {
      const arr = Array.isArray(tags) ? tags : [tags]
      for (const t of arr) tagSet.add(t)
    }
  }

  const tags = [...tagSet].sort((a, b) => a.localeCompare(b, "zh-Hans-CN"))
  if (tags.length === 0) return null

  return (
    <div class={classNames(displayClass, "all-tags")}>
      <h3>标签</h3>
      <ul class="tags">
        {tags.map((tag) => {
          const linkDest = resolveRelative(fileData.slug!, `tags/${tag}` as FullSlug)
          return (
            <li>
              <a href={linkDest} class="internal tag-link">
                {tag}
              </a>
            </li>
          )
        })}
      </ul>
    </div>
  )
}

AllTags.css = `
.all-tags {
  margin: 1rem 0;
}
.all-tags h3 {
  font-size: 0.8rem;
  text-transform: uppercase;
  letter-spacing: 0.05em;
  color: var(--gray);
  margin: 0 0 0.5rem;
}
`

export default (() => AllTags) satisfies QuartzComponentConstructor
