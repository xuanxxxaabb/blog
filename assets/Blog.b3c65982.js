var l=Object.defineProperty;var n=Object.getOwnPropertySymbols;var i=Object.prototype.hasOwnProperty,m=Object.prototype.propertyIsEnumerable;var r=(s,a,e)=>a in s?l(s,a,{enumerable:!0,configurable:!0,writable:!0,value:e}):s[a]=e,t=(s,a)=>{for(var e in a||(a={}))i.call(a,e)&&r(s,e,a[e]);if(n)for(var e of n(a))m.call(a,e)&&r(s,e,a[e]);return s};import{g as p,p as g,q as f,h as o,B as d,A as u,D as B,I as b,E as c,G as v,r as I}from"./app.6cdc6a19.js";import{S as C}from"./SkipLink.15b1d157.js";var k=p({name:"Blog",setup(){const s=g(),a=f();return()=>[o(C),o(I("CommonWrapper"),{sidebar:!1},t({default:()=>s.value.home?o(d):o("main",{class:"page blog",id:"main-content"},o("div",{class:"blog-page-wrapper"},[o(u),o(B,{delay:.16},()=>o(b))])),navScreenBottom:()=>o(c)},a.value?{sidebar:()=>o(v)}:{}))]}});export{k as default};
