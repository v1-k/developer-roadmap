import{u as n}from"./index.c54070cf.js";import{S as o}from"./spinner.164b1eeb.js";import{p as l}from"./page.e7291a86.js";import{h as m,p as c}from"./hooks.module.7cc4e70a.js";import{o as e}from"./jsxRuntime.module.afbf92fe.js";import"./preact.module.7b19fc78.js";function x(i){const{initialMessage:t}=i,[r,a]=m(t),s=n(l);return c(()=>{s!==void 0&&a(s)},[s]),r?e("div",{children:e("div",{className:"fixed left-0 top-0 z-50 flex h-full w-full items-center justify-center bg-white bg-opacity-75",children:e("div",{class:"flex  items-center justify-center rounded-md border bg-white px-4 py-2 ",children:[e("img",{src:o,alt:"Loading",className:"h-4 w-4 animate-spin fill-blue-600 text-gray-200 sm:h-4 sm:w-4"}),e("h1",{className:"ml-2",children:[r,e("span",{className:"animate-pulse",children:"..."})]})]})})}):null}export{x as PageProgress};
