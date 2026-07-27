// src/components/FolderFilter.tsx (precompiled)

// preact jsx-runtime shim (mirrors footer/dist)
var l;
l = { __e: function (n2, l2, u3, t2) {
  for (var i2, r2, o2; l2 = l2.__; ) if ((i2 = l2.__c) && !i2.__) try {
    if ((r2 = i2.constructor) && null != r2.getDerivedStateFromError && (i2.setState(r2.getDerivedStateFromError(n2)), o2 = i2.__d), null != i2.componentDidCatch && (i2.componentDidCatch(n2, t2 || {}), o2 = i2.__d), o2) return i2.__E = i2;
  } catch (l3) {
    n2 = l3;
  }
  throw n2;
} }, "function" == typeof Promise ? Promise.prototype.then.bind(Promise.resolve()) : setTimeout, Math.random().toString(8);

function u2(e2, t2, n2, o2, i2, u3) {
  t2 || (t2 = {});
  var a2, c2, p2 = t2;
  if ("ref" in p2) for (c2 in p2 = {}, t2) "ref" == c2 ? a2 = t2[c2] : p2[c2] = t2[c2];
  var l2 = { type: e2, props: p2, key: n2, ref: a2, __k: null, __: null, __b: 0, __e: null, __c: null, constructor: void 0, __v: --f2, __i: -1, __u: 0, __source: i2, __self: u3 };
  if ("function" == typeof e2 && (a2 = e2.defaultProps)) for (c2 in a2) void 0 === p2[c2] && (p2[c2] = a2[c2]);
  return l.vnode && l.vnode(l2), l2;
}
var f2 = 0;

// styles
var folderFilter_css = ".folder-filter{display:flex;gap:1rem;margin:1rem 0;flex-wrap:wrap;align-items:center}\n.folder-filter .ff-label{font-size:.85rem;display:inline-flex;gap:.3rem;align-items:center}\n.folder-filter .ff-select{padding:.2rem .4rem}";

// client script (runs via afterDOMLoaded)
// Matches each list item by its link title against the embedded JSON map.
var folderFilter_inline = "(function(){\n  function apply(){\n    var wrap = document.querySelector('.folder-filter');\n    if(!wrap) return;\n    var dataEl = document.getElementById('ff-data');\n    if(!dataEl) return;\n    var data = {};\n    try { data = JSON.parse(dataEl.textContent || '{}'); } catch(e) { return; }\n    var aSel = wrap.querySelector('select[data-filter=\"author\"]');\n    var ySel = wrap.querySelector('select[data-filter=\"year\"]');\n    function update(){\n      var av = aSel ? aSel.value : '';\n      var yv = ySel ? ySel.value : '';\n      var items = document.querySelectorAll('li.section-li');\n      for (var i=0;i<items.length;i++){\n        var li = items[i];\n        var a = li.querySelector('a.internal-link') || li.querySelector('a.internal');\n        if(!a) continue;\n        var title = (a.textContent || '').trim();\n        var info = data[title];\n        if(!info) continue; /* folder / no-data item: always visible */\n        var ok = true;\n        if(av && info.author !== av) ok = false;\n        if(yv && info.year !== yv) ok = false;\n        li.style.display = ok ? '' : 'none';\n      }\n    }\n    if(aSel) aSel.addEventListener('change', update);\n    if(ySel) ySel.addEventListener('change', update);\n    update();\n  }\n  if(document.readyState!=='loading') apply(); else document.addEventListener('DOMContentLoaded', apply);\n  document.addEventListener('nav', apply);\n})();";

var FolderFilter_default = ((opts) => {
  const FolderFilter = ({ displayClass, cfg, fileData, allFiles }) => {
    const current = (fileData?.slug ?? "");
    if (current === "") return null;
    const depth = current.split("/").length;
    const children = (allFiles ?? []).filter((f) => {
      const s = (f.slug ?? "");
      if (!s) return false;
      if (!s.startsWith(current + "/")) return false;
      return s.split("/").length === depth + 1;
    });
    if (children.length === 0) return null;
    const getYear = (p) => p ? (p instanceof Date ? String(p.getFullYear()) : String(p).slice(0, 4)) : "";
    const authors = [...new Set(children.map((c) => c.frontmatter?.author).filter(Boolean))].sort();
    const years = [...new Set(children.map((c) => getYear(c.frontmatter?.publish)).filter(Boolean))].sort();
    if (authors.length === 0 && years.length === 0) return null;
    const data = {};
    children.forEach((c) => {
      const t = c.frontmatter?.title;
      if (t) data[t] = { author: c.frontmatter?.author || "", year: getYear(c.frontmatter?.publish) || "" };
    });
    const mkSel = (label, key, vals) => u2("label", { class: "ff-label" }, [
      label + " ",
      u2("select", { class: "ff-select", "data-filter": key }, [
        u2("option", { value: "" }, "全部"),
        ...vals.map((v) => u2("option", { value: v }, v)),
      ]),
    ]);
    return u2("div", { class: "folder-filter" + (displayClass ? " " + displayClass : "") }, [
      authors.length ? mkSel("作者", "author", authors) : null,
      years.length ? mkSel("发表年份", "year", years) : null,
      u2("script", { type: "application/json", id: "ff-data" }, JSON.stringify(data)),
    ]);
  };
  FolderFilter.css = folderFilter_css;
  FolderFilter.afterDOMLoaded = folderFilter_inline;
  return FolderFilter;
});

export { FolderFilter_default as FolderFilter };
//# sourceMappingURL=index.js.map
