import{a7 as p,a9 as b,ae as v,r as F,al as V,b as y}from"./index-DykNzqLW.js";import{i as h,j as R}from"./VTextField-BYP5qumX.js";import{f as P}from"./forwardRefs-C-GTDzx5.js";const k=p({...b(),...h()},"VForm"),g=v()({name:"VForm",props:k(),emits:{"update:modelValue":o=>!0,submit:o=>!0},setup(o,i){let{slots:n,emit:f}=i;const r=R(o),s=F();function l(t){t.preventDefault(),r.reset()}function u(t){const a=t,e=r.validate();a.then=e.then.bind(e),a.catch=e.catch.bind(e),a.finally=e.finally.bind(e),f("submit",a),a.defaultPrevented||e.then(c=>{var m;let{valid:d}=c;d&&((m=s.value)==null||m.submit())}),a.preventDefault()}return V(()=>{var t;return y("form",{ref:s,class:["v-form",o.class],style:o.style,novalidate:!0,onReset:l,onSubmit:u},[(t=n.default)==null?void 0:t.call(n,r)])}),P(r,s)}});export{g as V};
