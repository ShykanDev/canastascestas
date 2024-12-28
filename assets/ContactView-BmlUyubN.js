import{d as T,r as f,o as S,c as V,w as R,_ as H,a as s,b,v as g,e as B}from"./index-eNpSO09C.js";class p{constructor(t=0,o="Network Error"){this.status=t,this.text=o}}const C=()=>{if(!(typeof localStorage>"u"))return{get:e=>Promise.resolve(localStorage.getItem(e)),set:(e,t)=>Promise.resolve(localStorage.setItem(e,t)),remove:e=>Promise.resolve(localStorage.removeItem(e))}},r={origin:"https://api.emailjs.com",blockHeadless:!1,storageProvider:C()},h=e=>e?typeof e=="string"?{publicKey:e}:e.toString()==="[object Object]"?e:{}:{},E=(e,t="https://api.emailjs.com")=>{if(!e)return;const o=h(e);r.publicKey=o.publicKey,r.blockHeadless=o.blockHeadless,r.storageProvider=o.storageProvider,r.blockList=o.blockList,r.limitRate=o.limitRate,r.origin=o.origin||t},y=async(e,t,o={})=>{const l=await fetch(r.origin+e,{method:"POST",headers:o,body:t}),a=await l.text(),n=new p(l.status,a);if(l.ok)return n;throw n},x=(e,t,o)=>{if(!e||typeof e!="string")throw"The public key is required. Visit https://dashboard.emailjs.com/admin/account";if(!t||typeof t!="string")throw"The service ID is required. Visit https://dashboard.emailjs.com/admin";if(!o||typeof o!="string")throw"The template ID is required. Visit https://dashboard.emailjs.com/admin/templates"},F=e=>{if(e&&e.toString()!=="[object Object]")throw"The template params have to be the object. Visit https://www.emailjs.com/docs/sdk/send/"},w=e=>e.webdriver||!e.languages||e.languages.length===0,k=()=>new p(451,"Unavailable For Headless Browser"),N=(e,t)=>{if(!Array.isArray(e))throw"The BlockList list has to be an array";if(typeof t!="string")throw"The BlockList watchVariable has to be a string"},K=e=>{var t;return!((t=e.list)!=null&&t.length)||!e.watchVariable},M=(e,t)=>e instanceof FormData?e.get(t):e[t],P=(e,t)=>{if(K(e))return!1;N(e.list,e.watchVariable);const o=M(t,e.watchVariable);return typeof o!="string"?!1:e.list.includes(o)},j=()=>new p(403,"Forbidden"),O=(e,t)=>{if(typeof e!="number"||e<0)throw"The LimitRate throttle has to be a positive number";if(t&&typeof t!="string")throw"The LimitRate ID has to be a non-empty string"},U=async(e,t,o)=>{const l=Number(await o.get(e)||0);return t-Date.now()+l},_=async(e,t,o)=>{if(!t.throttle||!o)return!1;O(t.throttle,t.id);const l=t.id||e;return await U(l,t.throttle,o)>0?!0:(await o.set(l,Date.now().toString()),!1)},L=()=>new p(429,"Too Many Requests"),q=async(e,t,o,l)=>{const a=h(l),n=a.publicKey||r.publicKey,m=a.blockHeadless||r.blockHeadless,u=a.storageProvider||r.storageProvider,i={...r.blockList,...a.blockList},c={...r.limitRate,...a.limitRate};return m&&w(navigator)?Promise.reject(k()):(x(n,e,t),F(o),o&&P(i,o)?Promise.reject(j()):await _(location.pathname,c,u)?Promise.reject(L()):y("/api/v1.0/email/send",JSON.stringify({lib_version:"4.4.1",user_id:n,service_id:e,template_id:t,template_params:o}),{"Content-type":"application/json"}))},z=e=>{if(!e||e.nodeName!=="FORM")throw"The 3rd parameter is expected to be the HTML form element or the style selector of the form"},D=e=>typeof e=="string"?document.querySelector(e):e,A=async(e,t,o,l)=>{const a=h(l),n=a.publicKey||r.publicKey,m=a.blockHeadless||r.blockHeadless,u=r.storageProvider||a.storageProvider,i={...r.blockList,...a.blockList},c={...r.limitRate,...a.limitRate};if(m&&w(navigator))return Promise.reject(k());const v=D(o);x(n,e,t),z(v);const d=new FormData(v);return P(i,d)?Promise.reject(j()):await _(location.pathname,c,u)?Promise.reject(L()):(d.append("lib_version","4.4.1"),d.append("service_id",e),d.append("template_id",t),d.append("user_id",n),y("/api/v1.0/email/send-form",d))},I={init:E,send:q,sendForm:A,EmailJSResponseStatus:p},J={class:"px-6 py-10 bg-white isolate sm:py-4 lg:px-8 animate-fade animate-duration-1000"},X={action:"#",method:"POST",class:"max-w-xl mx-auto mt-16 sm:mt-20"},G={class:"grid grid-cols-1 gap-x-8 gap-y-6 sm:grid-cols-2"},W={class:"mt-2.5"},Z={class:"sm:col-span-2"},$={class:"mt-2.5"},Q={class:"sm:col-span-2"},Y={class:"mt-2.5"},ee={class:"flex rounded-md bg-white outline outline-1 -outline-offset-1 outline-gray-300 has-[input:focus-within]:outline has-[input:focus-within]:outline-2 has-[input:focus-within]:-outline-offset-2 has-[input:focus-within]:outline-indigo-600"},te={class:"sm:col-span-2"},oe={class:"mt-2.5"},ie=T({__name:"ContactView",setup(e){const t=f(""),o=f(""),l=f(""),a=f(""),n=f(),m=async()=>{if(!t.value||!l.value||!a.value){alert("Por favor, complete todos los campos.");return}n.value||(n.value="No se proporciono un número de teléfono"),o.value||(o.value="Sin asunto proporcionado");const u={name:t.value,subject:o.value,email:l.value,phone:n.value,message:a.value,reply_to:l.value};try{await I.send("service_3nl9wkf.","template_2q2mc52",u,"fXlbInB-wrOGPiUbH"),t.value="",o.value="",l.value="",a.value=""}catch(i){console.error("Error al enviar el correo:",i)}};return(u,i)=>(S(),V(H,null,{main:R(()=>[s("div",J,[i[9]||(i[9]=s("div",{class:"absolute inset-x-0 top-[-10rem] -z-10 transform-gpu overflow-hidden blur-3xl sm:top-[-20rem]","aria-hidden":"true"},[s("div",{class:"relative left-1/2 -z-10 aspect-[1155/678] w-[36.125rem] max-w-none -translate-x-1/2 rotate-[30deg] bg-gradient-to-tr from-[#ff80b5] to-[#9089fc] opacity-30 sm:left-[calc(50%-40rem)] sm:w-[72.1875rem]",style:{"clip-path":"polygon(74.1% 44.1%, 100% 61.6%, 97.5% 26.9%, 85.5% 0.1%, 80.7% 2%, 72.5% 32.5%, 60.2% 62.4%, 52.4% 68.1%, 47.5% 58.3%, 45.2% 34.5%, 27.5% 76.7%, 0.1% 64.9%, 17.9% 100%, 27.6% 76.8%, 76.1% 97.7%, 74.1% 44.1%)"}})],-1)),i[10]||(i[10]=s("div",{class:"max-w-5xl mx-auto text-center"},[s("h2",{class:"text-4xl font-semibold tracking-tight text-gray-900 text-balance sm:text-5xl"},"Contacto de ventas "),s("p",{class:"mt-2 text-lg text-gray-600 font-Poppins"},"Envíenos un mensaje, y nosotros nos pondremos en contacto con usted a la brevedad.")],-1)),s("form",X,[s("div",G,[s("div",null,[i[4]||(i[4]=s("label",{for:"first-name",class:"block font-semibold text-gray-900 text-sm/6"},"Nombre",-1)),s("div",W,[b(s("input",{type:"text","onUpdate:modelValue":i[0]||(i[0]=c=>t.value=c),name:"first-name",id:"first-name",autocomplete:"given-name",class:"block w-full rounded-md bg-white px-3.5 py-2 text-base text-gray-900 outline outline-1 -outline-offset-1 outline-gray-300 placeholder:text-gray-400 focus:outline focus:outline-2 focus:-outline-offset-2 focus:outline-indigo-600"},null,512),[[g,t.value]])])]),s("div",Z,[i[5]||(i[5]=s("label",{for:"email",class:"block font-semibold text-gray-900 text-sm/6"},"Correo electrónico",-1)),s("div",$,[b(s("input",{type:"email","onUpdate:modelValue":i[1]||(i[1]=c=>l.value=c),name:"email",id:"email",autocomplete:"email",class:"block w-full rounded-md bg-white px-3.5 py-2 text-base text-gray-900 outline outline-1 -outline-offset-1 outline-gray-300 placeholder:text-gray-400 focus:outline focus:outline-2 focus:-outline-offset-2 focus:outline-indigo-600"},null,512),[[g,l.value]])])]),s("div",Q,[i[7]||(i[7]=s("label",{for:"phone-number",class:"block font-semibold text-gray-900 text-sm/6"},[B("Número de teléfono "),s("span",{class:"text-xs text-slate-600"},"(opcional)")],-1)),s("div",Y,[s("div",ee,[i[6]||(i[6]=s("div",{class:"grid grid-cols-1 shrink-0 focus-within:relative"},[s("select",{id:"country",name:"country",autocomplete:"country","aria-label":"País",class:"col-start-1 row-start-1 w-full appearance-none rounded-md py-2 pl-3.5 pr-7 text-base text-gray-500 placeholder:text-gray-400 focus:outline focus:outline-2 focus:-outline-offset-2 focus:outline-indigo-600 sm:text-sm/6"},[s("option",null,"MX"),s("option",null,"US")]),s("svg",{class:"self-center col-start-1 row-start-1 mr-2 text-gray-500 pointer-events-none size-5 justify-self-end sm:size-4",viewBox:"0 0 16 16",fill:"currentColor","aria-hidden":"true","data-slot":"icon"},[s("path",{"fill-rule":"evenodd",d:"M4.22 6.22a.75.75 0 0 1 1.06 0L8 8.94l2.72-2.72a.75.75 0 1 1 1.06 1.06l-3.25 3.25a.75.75 0 0 1-1.06 0L4.22 7.28a.75.75 0 0 1 0-1.06Z","clip-rule":"evenodd"})])],-1)),b(s("input",{type:"text","onUpdate:modelValue":i[2]||(i[2]=c=>n.value=c),name:"phone-number",id:"phone-number",class:"block min-w-0 grow py-1.5 pl-1 pr-3 text-base text-gray-900 placeholder:text-gray-400 focus:outline focus:outline-0 sm:text-sm/6",placeholder:"+52 123456789"},null,512),[[g,n.value]])])])]),s("div",te,[i[8]||(i[8]=s("label",{for:"message",class:"block font-semibold text-gray-900 text-sm/6"},"Mensaje",-1)),s("div",oe,[b(s("textarea",{name:"message","onUpdate:modelValue":i[3]||(i[3]=c=>a.value=c),id:"message",rows:"4",class:"block w-full rounded-md bg-white px-3.5 py-2 text-base text-gray-900 outline outline-1 -outline-offset-1 outline-gray-300 placeholder:text-gray-400 focus:outline focus:outline-2 focus:-outline-offset-2 focus:outline-indigo-600"},null,512),[[g,a.value]])])])]),s("div",{class:"mt-10"},[s("button",{onClick:m,type:"button",class:"block w-full rounded-md bg-indigo-600 px-3.5 py-2.5 text-center text-sm font-semibold text-white shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"},"Contactar")])])])]),_:1}))}});export{ie as default};