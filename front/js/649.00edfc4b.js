"use strict";(self["webpackChunkvideo_uploader"]=self["webpackChunkvideo_uploader"]||[]).push([[649],{4649:(e,l,a)=>{a.r(l),a.d(l,{default:()=>S});var o=a(3673),t=a(8880);const n=e=>((0,o.dD)("data-v-7c27a548"),e=e(),(0,o.Cn)(),e),d={class:"upload-panel"},u=n((()=>(0,o._)("div",{class:"text-h6"},"Upload a file from your device",-1))),i={class:"upload-box"},c=(0,o.Uk)(" Field hint "),p={class:"upload-panel"},s=n((()=>(0,o._)("div",{class:"text-h6"},"Upload a file from your device",-1))),m={class:"youtube-upload-box"};function b(e,l,a,n,b,r){const f=(0,o.up)("q-tab"),v=(0,o.up)("q-tabs"),k=(0,o.up)("q-icon"),h=(0,o.up)("q-file"),w=(0,o.up)("q-tab-panel"),_=(0,o.up)("q-input"),V=(0,o.up)("q-btn"),y=(0,o.up)("q-tab-panels");return(0,o.wg)(),(0,o.iD)(o.HY,null,[(0,o.Wm)(v,{modelValue:n.tabState,"onUpdate:modelValue":l[0]||(l[0]=e=>n.tabState=e),"inline-label":"",class:"bg-primary text-white shadow-2"},{default:(0,o.w5)((()=>[(0,o.Wm)(f,{name:"upload",icon:"ion-cloud-upload",label:"Upload"}),(0,o.Wm)(f,{name:"youtube",icon:"ion-logo-youtube",label:"Youtube"})])),_:1},8,["modelValue"]),(0,o.Wm)(y,{modelValue:n.tabState,"onUpdate:modelValue":l[6]||(l[6]=e=>n.tabState=e),animated:""},{default:(0,o.w5)((()=>[(0,o.Wm)(w,{name:"upload"},{default:(0,o.w5)((()=>[(0,o._)("div",d,[u,(0,o._)("div",i,[(0,o.Wm)(h,{"onUpdate:modelValue":[n.uploadFile,l[3]||(l[3]=e=>n.data.file=e)],filled:"","bottom-slots":"",accept:"video/*",modelValue:n.data.file,label:"Choose File",counter:""},{prepend:(0,o.w5)((()=>[(0,o.Wm)(k,{name:"cloud_upload",onClick:l[1]||(l[1]=(0,t.iM)((()=>{}),["stop"]))})])),append:(0,o.w5)((()=>[(0,o.Wm)(k,{name:"close",onClick:l[2]||(l[2]=(0,t.iM)((e=>n.data.file=null),["stop"])),class:"cursor-pointer"})])),hint:(0,o.w5)((()=>[c])),_:1},8,["onUpdate:modelValue","modelValue"])])])])),_:1}),(0,o.Wm)(w,{name:"youtube"},{default:(0,o.w5)((()=>[(0,o._)("div",p,[s,(0,o._)("div",m,[(0,o.Wm)(_,{type:"url",outlined:"",modelValue:n.data.link,"onUpdate:modelValue":l[4]||(l[4]=e=>n.data.link=e),label:"YouTube Link",class:"full-width","bottom-slots":""},{prepend:(0,o.w5)((()=>[(0,o.Wm)(k,{name:"link"})])),_:1},8,["modelValue"]),(0,o.Wm)(V,{onClick:l[5]||(l[5]=e=>n.getFile("youtube")),label:"Collect Video"})])])])),_:1})])),_:1},8,["modelValue"])],64)}var r=a(1959),f=a(52),v=a.n(f),k=a(8825),h=a(9582);const w={setup(){const e=(0,k.Z)(),l=(0,h.tv)(),a=(0,r.iH)("upload"),o=(0,r.iH)(),t=(0,r.iH)({type:"local",link:"",file:null}),n=(a="local")=>{if("local"===a){const e=o.value;e.click()}else if("youtube"===a){const a={type:"youtube",link:t.value.link};e.cookies.set("newVideo",a),l.replace("/dashboard/create").catch((e=>console.log(e))),console.log(t.value.link)}},d=a=>{const o="http://127.0.0.1:3000/video/upload",t=new FormData;t.append("file",a),v().post(o,t).then((a=>{const o=a.data,t={type:"local",link:o};e.cookies.set("newVideo",t),l.replace("/dashboard/create").catch((e=>console.log(e)))})).catch((e=>console.log(e)))};return{tabState:a,fileInput:o,data:t,getFile:n,uploadFile:d}}};var _=a(4260),V=a(7547),y=a(3269),W=a(5906),Z=a(6602),g=a(1052),U=a(4554),q=a(4689),C=a(4607),F=a(7518),Q=a.n(F);const x=(0,_.Z)(w,[["render",b],["__scopeId","data-v-7c27a548"]]),S=x;Q()(w,"components",{QTabs:V.Z,QTab:y.Z,QTabPanels:W.Z,QTabPanel:Z.Z,QFile:g.Z,QIcon:U.Z,QInput:q.Z,QBtn:C.Z})}}]);