if(!self.define){let e,s={};const i=(i,n)=>(i=new URL(i+".js",n).href,s[i]||new Promise((s=>{if("document"in self){const e=document.createElement("script");e.src=i,e.onload=s,document.head.appendChild(e)}else e=i,importScripts(i),s()})).then((()=>{let e=s[i];if(!e)throw new Error(`Module ${i} didn’t register its module`);return e})));self.define=(n,r)=>{const t=e||("document"in self?document.currentScript.src:"")||location.href;if(s[t])return;let c={};const o=e=>i(e,t),d={module:{uri:t},exports:c,require:o};s[t]=Promise.all(n.map((e=>d[e]||o(e)))).then((e=>(r(...e),c)))}}define(["./workbox-3625d7b0"],(function(e){"use strict";self.skipWaiting(),e.clientsClaim(),e.precacheAndRoute([{url:"assets/index-8d6b083c.css",revision:null},{url:"assets/index-fbbd2a4d.js",revision:null},{url:"index.html",revision:"1cc68047b2b7ec6c93c46b9cfa58f97e"},{url:"registerSW.js",revision:"1872c500de691dce40960bb85481de07"},{url:"manifest.webmanifest",revision:"9a0d8ecfcdb020a0842d5d6cbf03ecf5"}],{}),e.cleanupOutdatedCaches(),e.registerRoute(new e.NavigationRoute(e.createHandlerBoundToURL("index.html")))}));