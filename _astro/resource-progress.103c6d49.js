import{a as A,T as q}from"./jwt.f0e0aa9c.js";import{h as $,a as L}from"./http.6d2b195c.js";async function R(t){const{topicId:e,resourceType:o,resourceId:s}=t,{done:a=[]}=await g(o,s)||{};return a?.includes(e)}async function I(t){const{topicId:e,resourceType:o,resourceId:s}=t,a=await g(o,s);return a?.done?.includes(e)?"done":a?.learning?.includes(e)?"learning":a?.skipped?.includes(e)?"skipped":"pending"}async function M(t,e){const{topicId:o,resourceType:s,resourceId:a}=t,{response:r,error:n}=await $("https://api.roadmap.sh/v1-update-resource-progress",{topicId:o,resourceType:s,resourceId:a,progress:e});if(n||!r?.done||!r?.learning)throw new Error(n?.message||"Something went wrong");return y(s,a,r.done,r.learning,r.skipped),r}async function g(t,e){if(!A.get(q))return{done:[],learning:[],skipped:[]};const o=`${t}-${e}-progress`,s=`${t}-${e}-favorite`,a=localStorage.getItem(s),r=JSON.parse(a||"0")===1,n=localStorage.getItem(o),i=JSON.parse(n||"null"),l=i?.timestamp,d=new Date().getTime()-parseInt(l||"0",10)>15*60*1e3;return!i||d?C(t,e):(window.dispatchEvent(new CustomEvent("mark-favorite",{detail:{resourceType:t,resourceId:e,isFavorite:r}})),i)}async function C(t,e){const{response:o,error:s}=await L("https://api.roadmap.sh/v1-get-user-resource-progress",{resourceType:t,resourceId:e});return s||!o?(console.error(s),{done:[],learning:[],skipped:[]}):(y(t,e,o?.done||[],o?.learning||[],o?.skipped||[]),window.dispatchEvent(new CustomEvent("mark-favorite",{detail:{resourceType:t,resourceId:e,isFavorite:o.isFavorite}})),o)}function y(t,e,o,s,a){localStorage.setItem(`${t}-${e}-progress`,JSON.stringify({done:o,learning:s,skipped:a,timestamp:new Date().getTime()}))}function u(t,e){const o=e==="learning",s=e==="skipped",a=e==="done",r=[];document.querySelectorAll(`[data-group-id$="-${t}"]`).forEach(n=>{const i=n?.dataset?.groupId||"";new RegExp(`^\\d+-${t}$`).test(i)&&r.push(n)}),document.querySelectorAll(`[data-group-id="${t}"]`).forEach(n=>{r.push(n)}),document.querySelectorAll(`[data-group-id="check:${t}"]`).forEach(n=>{r.push(n)}),r.forEach(n=>{a?(n.classList.add("done"),n.classList.remove("learning","skipped")):o?(n.classList.add("learning"),n.classList.remove("done","skipped")):s?(n.classList.add("skipped"),n.classList.remove("done","learning")):n.classList.remove("done","skipped","learning")})}async function N(t,e){const{done:o=[],learning:s=[],skipped:a=[]}=await g(t,e)||{};o.forEach(r=>{u(r,"done")}),s.forEach(r=>{u(r,"learning")}),a.forEach(r=>{u(r,"skipped")}),x()}function x(){const t=document.querySelectorAll("[data-progress-nums-container]"),e=document.querySelectorAll("[data-progress-nums]");if(t.length===0||e.length===0)return;const o=document.querySelectorAll(".clickable-group").length,s=document.querySelectorAll('[data-group-id^="ext_link:"]').length,a=document.querySelectorAll('[data-group-id^="json:"]').length,r=document.querySelectorAll('[data-group-id^="check:"]').length,n=document.querySelectorAll('[data-group-id^="check:"].done').length,i=document.querySelectorAll('[data-group-id^="check:"].learning').length,l=document.querySelectorAll('[data-group-id^="check:"].skipped').length,p=o-s-a-r,d=document.querySelectorAll(".clickable-group.done").length-n,v=document.querySelectorAll(".clickable-group.learning").length-i,h=document.querySelectorAll(".clickable-group.skipped").length-l,f=document.querySelectorAll("[data-progress-done]");f.length>0&&f.forEach(c=>c.innerHTML=`${d}`);const m=document.querySelectorAll("[data-progress-learning]");m.length>0&&m.forEach(c=>c.innerHTML=`${v}`);const k=document.querySelectorAll("[data-progress-skipped]");k.length>0&&k.forEach(c=>c.innerHTML=`${h}`);const S=document.querySelectorAll("[data-progress-total]");S.length>0&&S.forEach(c=>c.innerHTML=`${p}`);const w=Math.round((d+h)/p*100),E=document.querySelectorAll("[data-progress-percentage]");E.length>0&&E.forEach(c=>c.innerHTML=`${w}`),t.forEach(c=>c.classList.remove("striped-loader")),e.forEach(c=>{c.classList.remove("opacity-0")})}export{x as a,N as b,I as g,R as i,u as r,M as u};
