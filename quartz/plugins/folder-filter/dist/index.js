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
var folderFilter_css = `.folder-table{width:100%;border-collapse:collapse;margin:1.2rem 0;font-size:.95rem}
.folder-table th,.folder-table td{padding:.5rem .6rem;text-align:left;border-bottom:1px solid var(--lightgray)}
.folder-table th{font-weight:600;vertical-align:bottom;background:transparent}
.folder-table th.sortable{cursor:pointer;user-select:none}
.folder-table th .sort-indicator{margin-left:.25rem;opacity:.6}
.folder-table th.asc .sort-indicator::after{content:"↑"}
.folder-table th.desc .sort-indicator::after{content:"↓"}
.folder-table th:not(.asc):not(.desc) .sort-indicator::after{content:"↕"}
.folder-table th input{display:block;width:100%;margin-top:.25rem;padding:.25rem .35rem;font:inherit;font-weight:400;border:1px solid var(--lightgray);border-radius:4px;background:var(--light);color:var(--dark)}
.folder-table td{vertical-align:top}
.folder-table td a.internal{text-decoration:none}
.folder-table td a.internal:hover{text-decoration:underline}
.folder-table .tag-pill{display:inline-block;margin:0 .35rem .25rem 0;font-size:.85rem}
.folder-table .tag-pill a{padding:.1rem .35rem;background:var(--lightgray);border-radius:4px;color:inherit}`;

// client script (runs via afterDOMLoaded)
var folderFilter_inline = `(function(){
  function apply(){
    var table = document.querySelector('.folder-table');
    if (!table) return;
    var tbody = table.querySelector('tbody');
    if (!tbody) return;
    var slug = document.body.getAttribute('data-slug') || '';
    var styleId = 'ft-hide-' + slug.replace(/[^a-zA-Z0-9]/g,'-');
    if (!document.getElementById(styleId)) {
      var s = document.createElement('style');
      s.id = styleId;
      s.textContent = 'body[data-slug="' + slug + '"] .page-listing{display:none !important;}';
      document.head.appendChild(s);
    }
    function getRows(){ return Array.prototype.slice.call(tbody.querySelectorAll('tr[data-title]')); }
    function sortBy(col, dir){
      var rows = getRows();
      var idx = {title:0, author:1, date:2, source:3, tags:4}[col];
      if (idx == null) return;
      rows.sort(function(a,b){
        var av, bv;
        if (col === 'date'){
          av = parseInt(a.getAttribute('data-ts') || '0', 10);
          bv = parseInt(b.getAttribute('data-ts') || '0', 10);
        } else {
          av = (a.children[idx] ? a.children[idx].textContent : '').trim().toLowerCase();
          bv = (b.children[idx] ? b.children[idx].textContent : '').trim().toLowerCase();
        }
        if (av < bv) return dir === 'asc' ? -1 : 1;
        if (av > bv) return dir === 'asc' ? 1 : -1;
        return 0;
      });
      rows.forEach(function(r){ tbody.appendChild(r); });
    }
    var headers = Array.prototype.slice.call(table.querySelectorAll('th[data-col]'));
    headers.forEach(function(th){
      th.addEventListener('click', function(e){
        if (e.target && e.target.tagName === 'INPUT') return;
        var col = th.getAttribute('data-col');
        var cur = table.getAttribute('data-sort-col');
        var dir = 'asc';
        if (cur === col) dir = table.getAttribute('data-sort-dir') === 'asc' ? 'desc' : 'asc';
        table.setAttribute('data-sort-col', col);
        table.setAttribute('data-sort-dir', dir);
        headers.forEach(function(h){ h.classList.remove('asc','desc'); });
        th.classList.add(dir);
        sortBy(col, dir);
      });
    });
    function filter(){
      var inputs = table.querySelectorAll('th input[data-filter]');
      var filters = {};
      for (var i=0;i<inputs.length;i++){
        var k = inputs[i].getAttribute('data-filter');
        filters[k] = (inputs[i].value || '').trim().toLowerCase();
      }
      getRows().forEach(function(row){
        var ok = true;
        for (var k in filters){
          if (!filters[k]) continue;
          var idx = {title:0, author:1, date:2, source:3, tags:4}[k];
          var text = (row.children[idx] ? row.children[idx].textContent : '').trim().toLowerCase();
          if (text.indexOf(filters[k]) === -1){ ok = false; break; }
        }
        row.style.display = ok ? '' : 'none';
      });
    }
    var inputs = Array.prototype.slice.call(table.querySelectorAll('th input[data-filter]'));
    inputs.forEach(function(inp){
      inp.addEventListener('input', filter);
      inp.addEventListener('keydown', function(e){ e.stopPropagation(); });
    });
    var curCol = table.getAttribute('data-sort-col');
    var curDir = table.getAttribute('data-sort-dir');
    if (curCol && curDir) sortBy(curCol, curDir);
    filter();
  }
  if(document.readyState!=='loading') apply(); else document.addEventListener('DOMContentLoaded', apply);
  document.addEventListener('nav', apply);
})();`;

function pathToRoot(slug) {
  var depth = slug.split("/").filter(Boolean).length - 1;
  if (depth <= 0) return ".";
  return new Array(depth).fill("..").join("/");
}
function simplifySlug(target) {
  return target.replace(/^\/+/, "").replace(/\/index$/, "");
}
function resolveRelative(current, target) {
  var root = pathToRoot(current);
  var simple = simplifySlug(target);
  if (root === ".") return simple;
  return root + "/" + simple;
}
function formatDate(value, locale) {
  if (!value) return "";
  var d = value instanceof Date ? value : new Date(value);
  if (isNaN(d.getTime())) return String(value);
  return d.toLocaleDateString(locale || "zh-CN", { year: "numeric", month: "2-digit", day: "2-digit" });
}
function getTimestamp(value) {
  if (!value) return 0;
  var d = value instanceof Date ? value : new Date(value);
  return isNaN(d.getTime()) ? 0 : d.getTime();
}

var FolderFilter_default = ((opts) => {
  const FolderFilter = ({ displayClass, cfg, fileData, allFiles }) => {
    let current = (fileData?.slug ?? "");
    if (current.endsWith("/index")) current = current.slice(0, -"/index".length);
    if (current === "" || current === "index") return null;
    const depth = current.split("/").filter(Boolean).length;
    const children = (allFiles ?? []).filter((f) => {
      const s = (f.slug ?? "");
      if (!s) return false;
      if (!s.startsWith(current + "/")) return false;
      if (s === current + "/index") return false;
      return s.split("/").filter(Boolean).length === depth + 1;
    });
    if (children.length === 0) return null;

    const locale = cfg?.locale ?? "zh-CN";
    const fileSlug = fileData?.slug ?? "";

    const rows = children.map((c) => {
      const fm = c.frontmatter ?? {};
      const title = fm.title || c.slug;
      const author = fm.author || "";
      const rawSource = fm.source ?? fm["来源"] ?? fm["source"];
      const source = Array.isArray(rawSource) ? rawSource.join("、") : (rawSource || "");
      const tags = (fm.tags ?? []).filter(Boolean);
      const dateVal = fm.publish;
      const dateStr = formatDate(dateVal, locale);
      const ts = getTimestamp(dateVal);
      return {
        slug: c.slug,
        title,
        author,
        source,
        tags,
        dateStr,
        ts,
      };
    });

    // default sort: date desc, then title asc
    rows.sort((a, b) => {
      if (b.ts !== a.ts) return b.ts - a.ts;
      return String(a.title).localeCompare(String(b.title), locale);
    });

    const colHeader = (key, label) => u2("th", {
      class: "sortable",
      "data-col": key,
      children: [label, u2("span", { class: "sort-indicator" }), u2("input", { type: "text", "data-filter": key, placeholder: "包含" })]
    });

    const tagLink = (tag) => u2("span", { class: "tag-pill", children: [
      u2("a", { href: resolveRelative(fileSlug, "tags/" + tag), class: "internal tag-link", children: [tag] })
    ] });

    const table = u2("table", {
      class: "folder-table" + (displayClass ? " " + displayClass : ""),
      "data-sort-col": "date",
      "data-sort-dir": "desc",
      children: [
        u2("thead", { children: [u2("tr", { children: [
          colHeader("title", "标题"),
          colHeader("author", "作者"),
          colHeader("date", "时间"),
          colHeader("source", "来源"),
          colHeader("tags", "标签"),
        ] })] }),
        u2("tbody", { children: rows.map((r) => u2("tr", {
          "data-title": r.title,
          "data-author": r.author,
          "data-ts": String(r.ts),
          "data-source": r.source,
          "data-tags": r.tags.join(" "),
          children: [
            u2("td", { children: [u2("a", { href: resolveRelative(fileSlug, r.slug), class: "internal", children: [r.title] })] }),
            u2("td", { children: [r.author] }),
            u2("td", { children: [r.dateStr] }),
            u2("td", { children: [r.source] }),
            u2("td", { children: r.tags.map(tagLink) }),
          ]
        })) }),
      ]
    });

    // Hide the default Quartz folder listing for this specific page only
    const hideStyle = u2("style", {
      dangerouslySetInnerHTML: { __html: `body[data-slug="${fileSlug}"] .page-listing{display:none !important;}` }
    });

    return u2("div", { class: "folder-filter" + (displayClass ? " " + displayClass : ""), children: [hideStyle, table] });
  };
  FolderFilter.css = folderFilter_css;
  FolderFilter.afterDOMLoaded = folderFilter_inline;
  return FolderFilter;
});

export { FolderFilter_default as FolderFilter };
//# sourceMappingURL=index.js.map
