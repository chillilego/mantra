if(!self.define){const e=e=>{"require"!==e&&(e+=".js");let r=Promise.resolve();return i[e]||(r=new Promise(async r=>{if("document"in self){const i=document.createElement("script");i.src=e,document.head.appendChild(i),i.onload=r}else importScripts(e),r()})),r.then(()=>{if(!i[e])throw new Error(`Module ${e} didn’t register its module`);return i[e]})},r=(r,i)=>{Promise.all(r.map(e)).then(e=>i(1===e.length?e[0]:e))},i={require:Promise.resolve(r)};self.define=(r,a,n)=>{i[r]||(i[r]=Promise.resolve().then(()=>{let i={};const c={uri:location.origin+r.slice(1)};return Promise.all(a.map(r=>{switch(r){case"exports":return i;case"module":return c;default:return e(r)}})).then(e=>{const r=n(...e);return i.default||(i.default=r),i})}))}}define("./service-worker.js",["./workbox-69b5a3b7"],(function(e){"use strict";self.addEventListener("message",e=>{e.data&&"SKIP_WAITING"===e.data.type&&self.skipWaiting()}),e.precacheAndRoute([{url:"32941d6330044744c02493835b799e90.svg",revision:"32941d6330044744c02493835b799e90"},{url:"68ed1dac06bf0409c18ae7bc62889170.woff",revision:"68ed1dac06bf0409c18ae7bc62889170"},{url:"7867d31daa065fc809baa719ea18320d.png",revision:"7867d31daa065fc809baa719ea18320d"},{url:"7ad17c6085dee9a33787bac28fb23d46.eot",revision:"7ad17c6085dee9a33787bac28fb23d46"},{url:"e49d52e74b7689a0727def99da31f3eb.ttf",revision:"e49d52e74b7689a0727def99da31f3eb"},{url:"img/.DS_Store",revision:"49a2415a0316cbc566f63e671e7917b2"},{url:"img/bg_grid.png",revision:"7867d31daa065fc809baa719ea18320d"},{url:"img/circle.png",revision:"3b21561d6d21643d2979446c53300b8b"},{url:"img/detail_panel.png",revision:"9ae846526f647f2853acab79b1b79c9c"},{url:"img/export_panel.png",revision:"60ade15edf4e2a6df71ff333b974a789"},{url:"img/mantra-logo-192.png",revision:"a43fdcf9409844644c31883384e46e90"},{url:"img/mantra-logo-512.png",revision:"561b67e7cff0af030e59e8cdc360ebc2"},{url:"img/mantra-logo.xcf",revision:"f7c43323fb56550f08ce8787a1f964a3"},{url:"img/motion_panel.png",revision:"ff7a8707fc13f4b267657841f0c63eb0"},{url:"img/new_property_select.png",revision:"9f6176dc2f4a1b05daba9ebea9ac1812"},{url:"img/rekapi_export.png",revision:"c90aad8920379c6b9a62580199df2343"},{url:"img/save_load.png",revision:"6050f4d817362fffd73c018870c3e0bb"},{url:"img/screenshot.png",revision:"c61ba3869827d80c7707b272dffd2acc"},{url:"img/timeline.png",revision:"a04408218cc483db1ada74f7cda7765e"},{url:"img/tween-editor.png",revision:"96d5e6021e84465bdcafc06896d3b224"},{url:"index.html",revision:"de2897826f52dc92fcc11802cf85c189"},{url:"main.js",revision:"70408aa95b0055b32492df3c9ff6b7e9"},{url:"manifest.json",revision:"b9add1ae470df220f0177676141ad71a"}],{})}));
//# sourceMappingURL=service-worker.js.map
