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
var folderFilter_css = `.folder-table{width:100%;border-collapse:collapse;margin:1.2rem 0;font-size:.95rem;table-layout:auto}.folder-filter{overflow-x:auto}
.folder-table th:nth-child(2){width:90px}
.folder-table th:nth-child(3){width:250px}
.folder-table th:nth-child(4){width:110px}
.folder-table th:nth-child(5){width:75px}.folder-table th:nth-child(1),.folder-table td:nth-child(1){min-width:200px}
@media (max-width:800px){.folder-filter{overflow-x:auto;-webkit-overflow-scrolling:touch}.folder-table{table-layout:fixed;width:calc(100% + 270px)}.folder-table th{font-size:.85rem}.folder-table th:nth-child(1),.folder-table td:nth-child(1){width:242px;min-width:0;font-size:.85rem;white-space:normal;word-break:break-word}.folder-table th:nth-child(2),.folder-table td:nth-child(2){width:90px;white-space:nowrap}.folder-table th:nth-child(3),.folder-table td:nth-child(3){width:122px;min-width:0;white-space:normal;word-break:break-word}.folder-table th:nth-child(4),.folder-table td:nth-child(4){width:110px;word-break:break-word}.folder-table th:nth-child(5),.folder-table td:nth-child(5){width:70px;white-space:nowrap}.folder-table th input{display:none}.folder-table th .date-controls{display:block}.folder-table th .date-controls select{width:100%}}
.folder-table td:nth-child(3){white-space:nowrap;font-variant-numeric:tabular-nums}
.folder-table td:nth-child(1),.folder-table td:nth-child(2),.folder-table td:nth-child(4){word-break:break-word}
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
.folder-table .tag-pill a{padding:.1rem .35rem;background:var(--lightgray);border-radius:4px;color:inherit}.folder-table th select.date-mode{display:block;width:100%;margin-top:.25rem;padding:.25rem .35rem;font:inherit;font-weight:400;border:1px solid var(--lightgray);border-radius:4px;background:var(--light);color:var(--dark)}.folder-table th .date-controls{display:flex;gap:.2rem;margin-top:.25rem;align-items:center}.folder-table th .date-controls select{width:auto;flex:0 0 auto;margin-top:0;padding:.15rem .25rem;font-size:.78rem}.folder-table th .date-controls input{flex:1 1 auto;min-width:0;margin-top:0;padding:.15rem .25rem;font-size:.78rem}.folder-table th input[data-date-year]:disabled{opacity:.5;cursor:not-allowed}`;

// client script (runs via afterDOMLoaded)
var folderFilter_inline = `(function(){
  function apply(){
    var table = document.querySelector('.folder-table');
    if (!table) return;
    if (table.dataset.ffBound) return;
    table.dataset.ffBound = '1';
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
      var idx = {title:0, date:1, tags:2, source:3, author:4}[col];
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
        if (e.target && (e.target.tagName === 'INPUT' || e.target.tagName === 'SELECT' || e.target.tagName === 'OPTION')) return;
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
      var dateTh = table.querySelector('th[data-col="date"]');
      var dateSel = dateTh ? dateTh.querySelector('select[data-date-mode]') : null;
      var dateYearInp = dateTh ? dateTh.querySelector('input[data-date-year]') : null;
      var dateMode = dateSel ? dateSel.value : '';
      var rawYear = dateYearInp ? (dateYearInp.value || '').trim() : '';
      var fullDateMatch = rawYear.match(/^(\d{4})[-/](\d{1,2})[-/](\d{1,2})$/);
      var dateTs = NaN;
      var dateYearNum = NaN;
      if (fullDateMatch) {
        dateTs = new Date(Number(fullDateMatch[1]), Number(fullDateMatch[2]) - 1, Number(fullDateMatch[3])).getTime();
      } else {
        dateYearNum = parseInt(rawYear, 10);
        if (isNaN(dateYearNum) || dateYearNum <= 0) dateYearNum = NaN;
      }
      var dateActive = !!dateMode && dateMode !== 'all' && (dateMode === 'empty' ? true : (!isNaN(dateYearNum) || !isNaN(dateTs)));
      getRows().forEach(function(row){
        var ok = true;
        for (var k in filters){
          if (!filters[k]) continue;
          if (k === 'tags'){
            var reqs = filters[k].split(/\s+/).filter(Boolean);
            var rowTags = (row.getAttribute('data-tags') || '').toLowerCase().split(/\s+/);
            var tagOk = true;
            for (var ri=0; ri<reqs.length; ri++){
              var req = reqs[ri];
              var hit = false;
              for (var ti=0; ti<rowTags.length; ti++){
                if (rowTags[ti].indexOf(req) !== -1){ hit = true; break; }
              }
              if (!hit){ tagOk = false; break; }
            }
            if (!tagOk){ ok = false; break; }
            continue;
          }
          var idx = {title:0, date:1, tags:2, source:3, author:4}[k];
          var text = (row.children[idx] ? row.children[idx].textContent : '').trim().toLowerCase();
          if (text.indexOf(filters[k]) === -1){ ok = false; break; }
        }
        if (ok && dateActive){
          var ts = parseInt(row.getAttribute('data-ts') || '0', 10);
          var hasDate = ts !== 0 && !isNaN(ts);
          var dateOk = false;
          if (dateMode === 'empty') {
            dateOk = !hasDate;
          } else if (!hasDate) {
            dateOk = false;
          } else if (dateMode === 'after') {
            dateOk = !isNaN(dateTs) ? ts >= dateTs : new Date(ts).getFullYear() >= dateYearNum;
          } else if (dateMode === 'before') {
            dateOk = !isNaN(dateTs) ? ts <= dateTs : new Date(ts).getFullYear() <= dateYearNum;
          } else if (dateMode === 'equal') {
            if (!isNaN(dateTs)) {
              var dt = new Date(ts), tt = new Date(dateTs);
              dateOk = dt.getFullYear() === tt.getFullYear() && dt.getMonth() === tt.getMonth() && dt.getDate() === tt.getDate();
            } else {
              dateOk = new Date(ts).getFullYear() === dateYearNum;
            }
          }
          if (!dateOk) ok = false;
        }
        row.style.display = ok ? '' : 'none';
      });
    }
    var inputs = Array.prototype.slice.call(table.querySelectorAll('th input[data-filter]'));
    inputs.forEach(function(inp){
      inp.addEventListener('input', filter);
      inp.addEventListener('keydown', function(e){ e.stopPropagation(); });
    });
    var dateThBind = table.querySelector('th[data-col="date"]');
    if (dateThBind){
      var ds = dateThBind.querySelector('select[data-date-mode]');
      var dy = dateThBind.querySelector('input[data-date-year]');
      if (ds){
        ds.addEventListener('change', function(){
          if (dy){ dy.disabled = (ds.value === 'empty' || ds.value === 'all'); if (ds.value === 'empty' || ds.value === 'all') dy.value = ''; }
          filter();
        });
      }
      if (dy){
        dy.addEventListener('input', filter);
        dy.addEventListener('keydown', function(e){ e.stopPropagation(); });
      }
    }
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
function formatDate(value) {
  if (!value) return "";
  var s = String(value).trim();
  var m = s.match(/^(\d{4})-(\d{1,2})-(\d{1,2})/);
  if (m) {
    var mo = String(Number(m[2])).padStart(2, "0");
    var da = String(Number(m[3])).padStart(2, "0");
    return m[1] + "/" + mo + "/" + da;
  }
  var d = new Date(value);
  if (isNaN(d.getTime())) return s;
  var y = d.getFullYear();
  var mm = String(d.getMonth() + 1).padStart(2, "0");
  var dd = String(d.getDate()).padStart(2, "0");
  return y + "/" + mm + "/" + dd;
}
function getTimestamp(value) {
  if (!value) return 0;
  var s = String(value).trim();
  var m = s.match(/^(\d{4})-(\d{1,2})-(\d{1,2})/);
  var d;
  if (m) d = new Date(Number(m[1]), Number(m[2]) - 1, Number(m[3]));
  else d = new Date(value);
  return isNaN(d.getTime()) ? 0 : d.getTime();
}
function siteBasePath(cfg) {
  var raw = cfg?.baseUrl ?? "";
  if (!raw) return "";
  try {
    var url = new URL("https://" + raw);
    return url.pathname.replace(/\/$/, "") || "";
  } catch (e) {
    return "";
  }
}

var FolderFilter_default = ((opts) => {
  const FolderFilter = ({ displayClass, cfg, fileData, allFiles }) => {
    let current = (fileData?.slug ?? "");
    if (current.endsWith("/index")) current = current.slice(0, -"/index".length);
    if (current === "" || current === "index") return null;
    if (current === "people") return null;
    if (current === "tags") return null;
    const isTagPage = current.startsWith("tags/");
    const allSlugs = new Set((allFiles ?? []).map((f) => f.slug ?? ""));
    const isFolder = (slug) => {
      for (const other of allSlugs) {
        if (other !== slug && other.startsWith(slug + "/")) return true;
      }
      return false;
    };
    let children;
    if (isTagPage) {
      let tagName = current.slice("tags/".length);
      try { tagName = decodeURIComponent(tagName); } catch (e) {}
      children = (allFiles ?? []).filter((f) => {
        const s = (f.slug ?? "");
        if (!s || s.endsWith("/index")) return false;
        const fm = f.frontmatter ?? {};
        const tags = (fm.tags ?? []).map(String);
        return tags.includes(tagName);
      });
    } else {
      children = (allFiles ?? []).filter((f) => {
        const s = (f.slug ?? "");
        if (!s) return false;
        if (!s.startsWith(current + "/")) return false;
        if (s.endsWith("/index")) return false;       // skip folder index pages
        if (isFolder(s)) return false;                 // skip folder pages, keep only leaf md
        return true;                                   // include all descendant levels (penetrate subfolders)
      });
    }
    if (children.length === 0) return null;

    const locale = cfg?.locale ?? "zh-CN";
    const basePath = siteBasePath(cfg);
    const fileSlug = fileData?.slug ?? "";

    // Build author -> people page slug map (match by title or aliases)
    const peopleMap = {};
    for (const f of (allFiles ?? [])) {
      const s = (f.slug ?? "");
      if (!s.startsWith("people/")) continue;
      const fm = f.frontmatter ?? {};
      const t = fm.title;
      if (t) peopleMap[String(t)] = s;
      const aliases = fm.aliases ?? fm.alias ?? [];
      const aliasArr = Array.isArray(aliases) ? aliases : [aliases];
      for (const a of aliasArr) if (a) peopleMap[String(a)] = s;
    }
    const authorLink = (name) => {
      const single = (n) => {
        const slug = n ? peopleMap[n] : undefined;
        if (!slug) return u2("span", { children: [n || ""] });
        return u2("a", { href: basePath + "/" + slug, class: "internal", children: [n] });
      };
      if (Array.isArray(name)) {
        const parts = [];
        name.forEach((n, i) => { if (i > 0) parts.push(", "); parts.push(single(String(n))); });
        return u2("span", { children: parts });
      }
      return single(name);
    };

    const rows = children.map((c) => {
      const fm = c.frontmatter ?? {};
      const title = fm.title || c.slug;
      const author = fm.author || "";
      const rawSource = fm.origin ?? fm["来源"] ?? fm.source ?? fm["source"];
      const source = Array.isArray(rawSource) ? rawSource.join("、") : (rawSource || "");
      const tags = (fm.tags ?? []).filter(Boolean);
      const dateVal = fm.publish;
      const dateStr = formatDate(dateVal);
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

    const colHeader = (key, label, sortClass = "", placeholder = "包含") => u2("th", {
      class: "sortable" + (sortClass ? " " + sortClass : ""),
      "data-col": key,
      children: [label, u2("span", { class: "sort-indicator" }), u2("input", { type: "text", "data-filter": key, placeholder: placeholder })]
    });
    const dateHeader = u2("th", {
      class: "sortable desc",
      "data-col": "date",
      children: [
        "发表时间",
        u2("span", { class: "sort-indicator" }),
        u2("div", { class: "date-controls", children: [
          u2("select", {
            "data-date-mode": "all",
            class: "date-mode",
            children: [
              u2("option", { value: "all", children: ["全部"] }),
              u2("option", { value: "after", children: ["晚于"] }),
              u2("option", { value: "before", children: ["早于"] }),
              u2("option", { value: "equal", children: ["等于"] }),
              u2("option", { value: "empty", children: ["为空"] }),
            ]
          }),
          u2("input", { type: "text", "data-date-year": "", placeholder: "年/日", inputmode: "numeric" })
        ]})
      ]
    });

    const tagLink = (tag) => u2("span", { class: "tag-pill", children: [
      u2("a", { href: basePath + "/tags/" + tag, class: "internal tag-link", children: [tag] })
    ] });

    const table = u2("table", {
      class: "folder-table" + (displayClass ? " " + displayClass : ""),
      "data-sort-col": "date",
      "data-sort-dir": "desc",
      children: [
        u2("thead", { children: [u2("tr", { children: [
          colHeader("title", "标题"),
          dateHeader,
          colHeader("tags", "标签", "", "空格分隔可多选"),
          colHeader("source", "来源"),
          colHeader("author", "作者"),
        ] })] }),
        u2("tbody", { children: rows.map((r) => u2("tr", {
          "data-title": r.title,
          "data-author": r.author,
          "data-ts": String(r.ts),
          "data-source": r.source,
          "data-tags": r.tags.join(" "),
          children: [
            u2("td", { children: [u2("a", { href: basePath + "/" + r.slug, class: "internal", children: [r.title] })] }),
            u2("td", { children: [r.dateStr] }),
            u2("td", { children: r.tags.map(tagLink) }),
            u2("td", { children: [r.source] }),
            u2("td", { children: [authorLink(r.author)] }),
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
