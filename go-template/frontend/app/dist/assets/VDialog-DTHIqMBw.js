import{m as P,u as y,V as f}from"./VOverlay-BHaGYlG-.js";import{f as h}from"./forwardRefs-C-GTDzx5.js";import{a7 as D,ae as w,aw as x,r as S,b5 as B,w as v,ax as F,s as m,al as I,aE as R,b as g,bh as T,b6 as O}from"./index-DykNzqLW.js";import{V as A}from"./dialog-transition-CqAkjWGR.js";const C=D({fullscreen:Boolean,retainFocus:{type:Boolean,default:!0},scrollable:Boolean,...P({origin:"center center",scrollStrategy:"block",transition:{component:A},zIndex:2400})},"VDialog"),M=w()({name:"VDialog",props:C(),emits:{"update:modelValue":a=>!0},setup(a,p){let{slots:c}=p;const n=x(a,"modelValue"),{scopeId:V}=y(),o=S();function i(l){var r,s;const e=l.relatedTarget,t=l.target;if(e!==t&&((r=o.value)!=null&&r.contentEl)&&((s=o.value)!=null&&s.globalTop)&&![document,o.value.contentEl].includes(t)&&!o.value.contentEl.contains(t)){const u=O(o.value.contentEl);if(!u.length)return;const d=u[0],E=u[u.length-1];e===d?E.focus():d.focus()}}B&&v(()=>n.value&&a.retainFocus,l=>{l?document.addEventListener("focusin",i):document.removeEventListener("focusin",i)},{immediate:!0}),v(n,async l=>{var e,t;await R(),l?(e=o.value.contentEl)==null||e.focus({preventScroll:!0}):(t=o.value.activatorEl)==null||t.focus({preventScroll:!0})});const b=F(()=>m({"aria-haspopup":"dialog","aria-expanded":String(n.value)},a.activatorProps));return I(()=>{const l=f.filterProps(a);return g(f,m({ref:o,class:["v-dialog",{"v-dialog--fullscreen":a.fullscreen,"v-dialog--scrollable":a.scrollable},a.class],style:a.style},l,{modelValue:n.value,"onUpdate:modelValue":e=>n.value=e,"aria-modal":"true",activatorProps:b.value,role:"dialog"},V),{activator:c.activator,default:function(){for(var e=arguments.length,t=new Array(e),r=0;r<e;r++)t[r]=arguments[r];return g(T,{root:"VDialog"},{default:()=>{var s;return[(s=c.default)==null?void 0:s.call(c,...t)]}})}})}),h({},o)}});export{M as V};
