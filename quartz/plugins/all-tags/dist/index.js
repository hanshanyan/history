import { h } from "preact"
import { resolveRelative } from "@quartz-community/utils"

// 左侧栏「全局标签」模块（AllTags）
// Quartz v5 的插件组件必须是一个「构造函数」：(opts) => QuartzComponent，
// 返回的组件函数需带 displayName 与 css 静态属性。
// 该模块收集站内所有笔记的 tags，渲染为可点击链接，跳转至
// Quartz 自动生成的 /tags/<tag> 页面。
export const AllTags = (opts) => {
  const title = (opts && opts.title) || "标签"

  const AllTagsComponent = ({ allFiles, fileData, displayClass }) => {
    if (!allFiles) return null

    const tagSet = new Set()
    for (const file of allFiles) {
      const tags = file.frontmatter?.tags
      if (tags) {
        const arr = Array.isArray(tags) ? tags : [tags]
        for (const t of arr) tagSet.add(t)
      }
    }

    const tags = [...tagSet].sort((a, b) => a.localeCompare(b, "zh-Hans-CN"))
    if (tags.length === 0) return null

    const cls = [displayClass, "all-tags"].filter(Boolean).join(" ")

    return h(
      "div",
      { class: cls },
      h("h3", {}, title),
      h(
        "ul",
        { class: "tags" },
        tags.map((tag) => {
          const linkDest = resolveRelative(fileData.slug, `tags/${tag}`)
          return h(
            "li",
            {},
            h("a", { href: linkDest, class: "internal tag-link" }, tag),
          )
        }),
      ),
    )
  }

  AllTagsComponent.displayName = "AllTags"
  AllTagsComponent.css = `
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
.all-tags .tags {
  list-style: none;
  display: flex;
  padding-left: 0;
  gap: 0.4rem;
  margin: 0;
  flex-wrap: wrap;
}
.all-tags .tags > li {
  display: inline-block;
  white-space: nowrap;
  margin: 0;
}
`

  return AllTagsComponent
}
