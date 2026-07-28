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

// styles (fixed top bar + layout offsets so nothing is hidden behind it)
var sectionNav_css = `.section-nav{position:fixed;top:0;left:0;right:0;z-index:1000;height:48px;display:flex;align-items:center;gap:.4rem;padding:0 1rem;background:var(--light);border-bottom:1px solid #C8E6C9;font-size:.95rem}
.section-nav-link{text-decoration:none;color:var(--darkgray);padding:.35rem .9rem;border-radius:999px;border:1px solid transparent;white-space:nowrap}
.section-nav-link:hover{background:#C8E6C9}
.section-nav-link.active{color:#1B5E20;background:#A5D6A7}
body{padding-top:48px !important}
header,.page-header{margin-top:1.5rem !important}
.sidebar{top:48px !important;padding-top:calc(48px + 1.5rem) !important}
@media (max-width:800px){header,.page-header{margin-top:.25rem !important}.sidebar{padding-top:calc(48px + .25rem) !important}.section-nav{height:44px;font-size:.9rem;padding:0 .75rem}.section-nav-link{padding:.3rem .7rem}.explorer .mobile-explorer.hide-until-loaded{display:flex !important}.mobile-toc{margin-top:1rem;padding:0 .75rem}.mobile-toc h3{font-size:1rem;margin:.5rem 0;color:var(--darkgray)}.mobile-toc ul{list-style:none;padding:0;margin:0}.mobile-toc li{margin:.35rem 0}.mobile-toc a{display:block;color:var(--darkgray);text-decoration:none}.mobile-toc a:hover{color:var(--secondary)}.mobile-toc li.depth-0>a{font-size:1.05rem;font-weight:600}.mobile-toc li.depth-1>a{font-size:.98rem;padding-left:.5rem}.mobile-toc li.depth-2>a{font-size:.92rem;padding-left:1rem}.mobile-toc li.depth-3>a{font-size:.87rem;padding-left:1.5rem}.mobile-toc li.depth-4>a{font-size:.83rem;padding-left:2rem}.mobile-toc li.depth-5>a{font-size:.8rem;padding-left:2.5rem}}`;

// client script: keep the active item in sync on SPA navigation
var sectionNav_inline = `(function(){
  function update(){
    var nav = document.querySelector('.section-nav');
    if(!nav) return;
    var slug = (document.body.getAttribute('data-slug')||'').replace(/\\/index$/,'');
    var links = nav.querySelectorAll('a.section-nav-link');
    for (var i=0;i<links.length;i++){
      var t = links[i].getAttribute('data-target')||'';
      var active = (slug===t || slug.indexOf(t+'/')===0);
      if(active) links[i].classList.add('active'); else links[i].classList.remove('active');
    }
  }
  if(document.readyState!=='loading') update(); else document.addEventListener('DOMContentLoaded', update);
  document.addEventListener('nav', update);
  function setupMobileToc(){
    if(window.innerWidth>800) return;
    var toc=document.querySelector('.left.sidebar > .toc');
    var explorer=document.querySelector('.explorer-content');
    if(!toc||!explorer) return;
    if(explorer.querySelector('.mobile-toc')) return;
    var content=toc.querySelector('.toc-content');
    if(!content) return;
    var wrap=document.createElement('div');
    wrap.className='mobile-toc';
    var heading=document.createElement('h3');
    heading.textContent='目录';
    wrap.appendChild(heading);
    var clone=content.cloneNode(true);
    clone.removeAttribute('id');
    clone.classList.remove('collapsed');
    wrap.appendChild(clone);
    explorer.appendChild(wrap);
    wrap.addEventListener('click',function(e){
      var a=e.target.closest('a');
      if(!a) return;
      var exp=document.querySelector('.explorer');
      if(exp){ exp.classList.add('collapsed'); exp.setAttribute('aria-expanded','false'); document.documentElement.classList.remove('mobile-no-scroll'); }
    });
  }
  if(document.readyState!=='loading') setTimeout(setupMobileToc,0); else document.addEventListener('DOMContentLoaded',function(){ setTimeout(setupMobileToc,0); });
  document.addEventListener('nav',function(){ setTimeout(setupMobileToc,0); });
})();`;

var ITEMS = [
  { key: "timeline", label: "年谱", target: "timeline" },
  { key: "sources", label: "史料", target: "sources" },
  { key: "analysis", label: "史论", target: "analysis" },
];

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

var SectionNav_default = ((opts) => {
  const SectionNav = ({ fileData, cfg }) => {
    const slug = (fileData?.slug ?? "").replace(/\/index$/, "");
    let activeKey = "";
    for (const it of ITEMS) {
      if (slug === it.target || slug.indexOf(it.target + "/") === 0) { activeKey = it.key; break; }
    }
    const cur = fileData?.slug ?? "";
    const basePath = siteBasePath(cfg);
    const links = ITEMS.map((it) =>
      u2("a", {
        class: "section-nav-link" + (it.key === activeKey ? " active" : ""),
        href: basePath + "/" + it.target,
        "data-target": it.target,
        children: [it.label],
      })
    );
    return u2("nav", { class: "section-nav", children: links });
  };
  SectionNav.css = sectionNav_css;
  SectionNav.afterDOMLoaded = sectionNav_inline;
  return SectionNav;
});

export { SectionNav_default as SectionNav };
//# sourceMappingURL=index.js.map
