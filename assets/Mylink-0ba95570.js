import{h as u,o as t,c as o,u as l,F as k,i as h,a as m,j as v,d as n,t as i,_ as f}from"./app-96147d23.js";const g={class:"vp-project-panel"},y=["href"],j=["src"],b={class:"vp-project-name"},x={class:"vp-project-desc"},C=u({__name:"Mylink",props:{type:String,links:Object},setup(_){const a=_;let s;console.log(a.links),s=a.links;const p=r=>`project${r%9}`;return(r,d)=>(t(),o("div",g,[l(s).length>0?(t(!0),o(k,{key:0},h(l(s),(e,c)=>(t(),o("a",{key:c,class:v(["item vp-project-card",p(c)]),href:e.link,target:"_blank"},[n("img",{class:"vp-project-image",src:e.ico,alt:"",onerror:'this.onerror=null,this.src=this.srcset="/assets/default/loading.webp"'},null,8,j),n("div",b,i(e.name),1),n("div",x,i(e.desc),1)],10,y))),128)):m("v-if",!0)]))}});const B=f(C,[["__scopeId","data-v-1689b763"],["__file","Mylink.vue"]]);export{B as M};
