"use strict";(self["webpackChunkvideo_uploader"]=self["webpackChunkvideo_uploader"]||[]).push([[844],{3844:(e,l,a)=>{a.r(l),a.d(l,{default:()=>S});var o=a(3673),t=a(8880);const u=e=>((0,o.dD)("data-v-9f58bcba"),e=e(),(0,o.Cn)(),e),n={class:"upload-panel"},d=u((()=>(0,o._)("div",{class:"text-h6"},"Upload a file from your device",-1))),i={class:"upload-box"},c=(0,o.Uk)(" Field hint "),p={class:"upload-panel"},s=u((()=>(0,o._)("div",{class:"text-h6"},"Upload a file from your device",-1))),b={class:"youtube-upload-box"};function m(e,l,a,u,m,r){const f=(0,o.up)("q-tab"),v=(0,o.up)("q-tabs"),k=(0,o.up)("q-icon"),h=(0,o.up)("q-file"),w=(0,o.up)("q-tab-panel"),_=(0,o.up)("q-input"),V=(0,o.up)("q-btn"),y=(0,o.up)("q-tab-panels");return(0,o.wg)(),(0,o.iD)(o.HY,null,[(0,o.Wm)(v,{modelValue:u.tabState,"onUpdate:modelValue":l[0]||(l[0]=e=>u.tabState=e),"inline-label":"",class:"bg-primary text-white shadow-2"},{default:(0,o.w5)((()=>[(0,o.Wm)(f,{name:"upload",icon:"ion-cloud-upload",label:"Upload"}),(0,o.Wm)(f,{name:"youtube",icon:"ion-logo-youtube",label:"Youtube"})])),_:1},8,["modelValue"]),(0,o.Wm)(y,{modelValue:u.tabState,"onUpdate:modelValue":l[6]||(l[6]=e=>u.tabState=e),animated:""},{default:(0,o.w5)((()=>[(0,o.Wm)(w,{name:"upload"},{default:(0,o.w5)((()=>[(0,o._)("div",n,[d,(0,o._)("div",i,[(0,o.Wm)(h,{"onUpdate:modelValue":[u.uploadFile,l[3]||(l[3]=e=>u.data.file=e)],filled:"","bottom-slots":"",accept:"video/*",modelValue:u.data.file,label:"Choose File",counter:""},{prepend:(0,o.w5)((()=>[(0,o.Wm)(k,{name:"cloud_upload",onClick:l[1]||(l[1]=(0,t.iM)((()=>{}),["stop"]))})])),append:(0,o.w5)((()=>[(0,o.Wm)(k,{name:"close",onClick:l[2]||(l[2]=(0,t.iM)((e=>u.data.file=null),["stop"])),class:"cursor-pointer"})])),hint:(0,o.w5)((()=>[c])),_:1},8,["onUpdate:modelValue","modelValue"])])])])),_:1}),(0,o.Wm)(w,{name:"youtube"},{default:(0,o.w5)((()=>[(0,o._)("div",p,[s,(0,o._)("div",b,[(0,o.Wm)(_,{type:"url",outlined:"",modelValue:u.data.link,"onUpdate:modelValue":l[4]||(l[4]=e=>u.data.link=e),label:"YouTube Link",class:"full-width","bottom-slots":""},{prepend:(0,o.w5)((()=>[(0,o.Wm)(k,{name:"link"})])),_:1},8,["modelValue"]),(0,o.Wm)(V,{onClick:l[5]||(l[5]=e=>u.getFile("youtube")),label:"Collect Video"})])])])),_:1})])),_:1},8,["modelValue"])],64)}var r=a(1959),f=a(52),v=a.n(f),k=a(8825),h=a(9582);const w={setup(){const e=(0,k.Z)(),l=(0,h.tv)(),a=(0,r.iH)("upload"),o=(0,r.iH)(),t=(0,r.iH)({type:"local",link:"",file:null}),u=(a="local")=>{if("local"===a){const e=o.value;e.click()}else if("youtube"===a){const a={type:"youtube",link:t.value.link};e.cookies.set("newVideo",a),l.replace("/dashboard/create").catch((e=>console.log(e))),console.log(t.value.link)}},n=a=>{const o="https://mvu.herokuapp.com/video/upload",t=new FormData;t.append("file",a),v().post(o,t).then((a=>{const o=a.data,t={type:"local",link:o};e.cookies.set("newVideo",t),l.replace("/dashboard/create").catch((e=>console.log(e)))})).catch((e=>console.log(e)))};return{tabState:a,fileInput:o,data:t,getFile:u,uploadFile:n}}};var _=a(4260),V=a(7547),y=a(3269),W=a(5906),Z=a(6602),g=a(1052),U=a(4554),q=a(4689),C=a(4607),F=a(7518),Q=a.n(F);const x=(0,_.Z)(w,[["render",m],["__scopeId","data-v-9f58bcba"]]),S=x;Q()(w,"components",{QTabs:V.Z,QTab:y.Z,QTabPanels:W.Z,QTabPanel:Z.Z,QFile:g.Z,QIcon:U.Z,QInput:q.Z,QBtn:C.Z})}}]);