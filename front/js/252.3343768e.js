"use strict";(self["webpackChunkvideo_uploader"]=self["webpackChunkvideo_uploader"]||[]).push([[252],{6252:(e,t,o)=>{o.r(t),o.d(t,{default:()=>ve});var l=o(3673),a=o(2323),i=o(8880);const s=e=>((0,l.dD)("data-v-3f006424"),e=e(),(0,l.Cn)(),e),n={class:"edit-row"},d={class:"text-h3 title"},c=s((()=>(0,l._)("p",{class:"text-subtitle2"},"Start editing your video for publishing. You can change template and add descriptive information as you want.",-1))),u={class:"column1"},r={class:"video-container"},m={id:"my-video",class:"video-js",controls:"",preload:"auto",width:"640",height:"264","data-setup":"{}"},p=s((()=>(0,l._)("source",{type:"video/mp4"},null,-1))),h=s((()=>(0,l._)("p",{class:"vjs-no-js"},[(0,l.Uk)(" To view this video please enable JavaScript, and consider upgrading to a web browser that "),(0,l._)("a",{href:"https://videojs.com/html5-video-support/",target:"_blank"},"supports HTML5 video")],-1))),v=[p,h],b={class:"y-embed"},_=s((()=>(0,l._)("iframe",{width:"420",height:"345",src:"https://www.youtube.com/embed/tgbNymZ7vqY"},null,-1))),g=[_],w={class:"theme-customizer"},f=s((()=>(0,l._)("div",{class:"text-h6 preview-header"},"Choose page template",-1))),y={class:"column2"},k=s((()=>(0,l._)("div",{class:"text-h6 fieldset-header"},"Video Information",-1))),V=(0,l.Uk)(" Enter your video "),x=s((()=>(0,l._)("b",null,"Title",-1))),U=(0,l.Uk)(". Make it catchy! "),T=(0,l.Uk)(" Share a summary of what's in the video. Pick important details that can capture your audience. "),D=(0,l.Uk)(" What should we put in the browser after "),W=s((()=>(0,l._)("b",null,"https://appclick.com/",-1))),q=(0,l.Uk)("? Ok, you tell us or we give you whatever. "),C={ref:"formTheme",class:"text-h6 fieldset-header"},Z=(0,l.Uk)(" Choose a color you want us to use for text on your video page. "),L=(0,l.Uk)(" Choose a color you want us to use for the background of your video page. "),B=(0,l.Uk)(" Where should we place your video? "),j=(0,l.Uk)(" What time "),P=s((()=>(0,l._)("b",null,"(in seconds)",-1))),S=(0,l.Uk)(" should the signup form come up? "),N={class:"form-footer"},Q={style:{width:"50%"}},I={key:0,class:"text-h6 success"},E=(0,l.Uk)("Updated! "),z=["href"];function F(e,t,o,s,p,h){const _=(0,l.up)("q-select"),F=(0,l.up)("ThemePreview"),H=(0,l.up)("q-btn"),O=(0,l.up)("q-input"),M=(0,l.up)("q-color"),R=(0,l.up)("q-popup-proxy"),A=(0,l.up)("q-icon"),G=(0,l.up)("q-toggle"),Y=(0,l.up)("q-form");return(0,l.wg)(),(0,l.iD)("div",n,[(0,l._)("div",d,"Editing "+(0,a.zw)(s.data.title),1),c,(0,l._)("div",u,[(0,l._)("div",r,[(0,l.wy)((0,l._)("video",m,v,512),[[i.F8,"local"===s.data.type]])]),(0,l.wy)((0,l._)("div",b,g,512),[[i.F8,"youtube"===s.data.type]]),(0,l._)("div",w,[f,(0,l.Wm)(_,{outlined:"",modelValue:s.data.theme.name,"onUpdate:modelValue":[t[0]||(t[0]=e=>s.data.theme.name=e),t[1]||(t[1]=t=>s.changeTheme(e.value))],options:s.themeNames,class:"theme-select",label:"Theme","bottom-slots":""},null,8,["modelValue","options"]),((0,l.wg)(),(0,l.j4)(F,{themeData:s.data.theme,key:s.data.theme},null,8,["themeData"])),(0,l.Wm)(H,{color:"primary",icon:"settings",class:"tc-btn",label:"Customize",onClick:s.stc},null,8,["onClick"])])]),(0,l._)("div",y,[(0,l.Wm)(Y,null,{default:(0,l.w5)((()=>[k,(0,l.Wm)(O,{outlined:"",modelValue:s.data.title,"onUpdate:modelValue":t[2]||(t[2]=e=>s.data.title=e),label:"Title","bottom-slots":"",class:"form-input"},{hint:(0,l.w5)((()=>[V,x,U])),_:1},8,["modelValue"]),(0,l.Wm)(O,{outlined:"",type:"textarea",modelValue:s.data.description,"onUpdate:modelValue":t[3]||(t[3]=e=>s.data.description=e),label:"Description","bottom-slots":"",class:"form-input"},{hint:(0,l.w5)((()=>[T])),_:1},8,["modelValue"]),(0,l.Wm)(O,{outlined:"",modelValue:s.data.slug,"onUpdate:modelValue":t[4]||(t[4]=e=>s.data.slug=e),label:"Slug","bottom-slots":"",class:"form-input"},{hint:(0,l.w5)((()=>[D,W,q])),_:1},8,["modelValue"]),(0,l._)("div",C,"Video Theme",512),(0,l.Wm)(O,{outlined:"",modelValue:s.data.theme.text_color,"onUpdate:modelValue":t[6]||(t[6]=e=>s.data.theme.text_color=e),class:"my-input form-input",label:"Text Color","bottom-slots":""},{append:(0,l.w5)((()=>[(0,l.Wm)(A,{name:"colorize",class:"cursor-pointer"},{default:(0,l.w5)((()=>[(0,l.Wm)(R,{cover:"","transition-show":"scale","transition-hide":"scale"},{default:(0,l.w5)((()=>[(0,l.Wm)(M,{modelValue:s.data.theme.text_color,"onUpdate:modelValue":t[5]||(t[5]=e=>s.data.theme.text_color=e)},null,8,["modelValue"])])),_:1})])),_:1})])),hint:(0,l.w5)((()=>[Z])),_:1},8,["modelValue"]),(0,l.Wm)(O,{outlined:"",modelValue:s.data.theme.bg_color,"onUpdate:modelValue":t[8]||(t[8]=e=>s.data.theme.bg_color=e),class:"my-input form-input",label:"Background Color","bottom-slots":""},{append:(0,l.w5)((()=>[(0,l.Wm)(A,{name:"colorize",class:"cursor-pointer"},{default:(0,l.w5)((()=>[(0,l.Wm)(R,{cover:"","transition-show":"scale","transition-hide":"scale"},{default:(0,l.w5)((()=>[(0,l.Wm)(M,{modelValue:s.data.theme.bg_color,"onUpdate:modelValue":t[7]||(t[7]=e=>s.data.theme.bg_color=e)},null,8,["modelValue"])])),_:1})])),_:1})])),hint:(0,l.w5)((()=>[L])),_:1},8,["modelValue"]),(0,l.Wm)(_,{outlined:"",modelValue:s.data.theme.video_position,"onUpdate:modelValue":t[9]||(t[9]=e=>s.data.theme.video_position=e),options:s.posOptions,class:"my-input form-input",label:"Video Position","bottom-slots":""},{hint:(0,l.w5)((()=>[B])),_:1},8,["modelValue","options"]),(0,l.Wm)(G,{modelValue:s.data.show_popup,"onUpdate:modelValue":t[10]||(t[10]=e=>s.data.show_popup=e),label:"Show sign up form"},null,8,["modelValue"]),s.data.show_popup?((0,l.wg)(),(0,l.j4)(O,{key:0,outlined:"",modelValue:s.data.popup_time,"onUpdate:modelValue":t[11]||(t[11]=e=>s.data.popup_time=e),class:"my-input form-input",label:"Popup Time","bottom-slots":"",type:"number"},{hint:(0,l.w5)((()=>[j,P,S])),_:1},8,["modelValue"])):(0,l.kq)("",!0),(0,l._)("div",N,[(0,l._)("div",Q,[(0,l.Wm)(H,{color:"primary",icon:"save",label:"Publish Video",onClick:s.saveVideo},null,8,["onClick"]),Boolean(s.pubLink)?((0,l.wg)(),(0,l.iD)("div",I,[E,(0,l._)("a",{href:s.pubLink,target:"_blank"},"View It Here",8,z)])):(0,l.kq)("",!0)])])])),_:1})])])}o(1070);var H=o(52),O=o.n(H),M=o(1959);const R={id:"theme-preview",class:"theme-preview"},A=(0,l.uE)('<div class="col1 col" data-v-2b993511><div class="tp-box tp-title text-subtitle2" data-v-2b993511><p data-v-2b993511>Title</p></div><div class="tp-box tp-decription text-subtitle2" data-v-2b993511><p data-v-2b993511>Description</p></div></div><div class="col2 col" data-v-2b993511><div class="tp-box tp-video text-subtitle2" data-v-2b993511><p data-v-2b993511>Video</p></div></div>',2),G=[A];function Y(e,t,o,a,i,s){return(0,l.wg)(),(0,l.iD)("div",R,G)}var J=o(5369);const K=(0,l.aZ)({name:"ThemePreview",props:{themeData:Object},setup(e){(0,l.m0)((()=>{const t=e.themeData;if(t){const e=t.bg_color,o=t.text_color,l=t.video_position;(0,J.nextTick)((()=>{const t=document.getElementById("theme-preview");if(t){t.style.backgroundColor=e;const a=t.getElementsByClassName("tp-box");if(a.length)for(let e=0;e<a.length;e++){const t=a.item(e);t.style.color=o}t.style.flexDirection="row";const i=["Top","Bottom"];if(i.includes(l)){"Bottom"===l?t.style.flexDirection="column":"Top"===l&&(t.style.flexDirection="column-reverse");const e=t.querySelectorAll(".col");if(e.length)for(let t=0;t<e.length;t++){const o=e.item(t);o.style.width="100%"}}else"Left"===l&&(t.style.flexDirection="row-reverse")}}))}}))}});var X=o(4260);const $=(0,X.Z)(K,[["render",Y],["__scopeId","data-v-2b993511"]]),ee=$;var te=o(8825);const oe={components:{ThemePreview:ee},setup(){const e=(0,te.Z)();let t={email:""};const o=(0,M.iH)("");t=e.cookies.get("currentUser");const a=(0,M.iH)({title:"New Video",type:"",show_popup:!1,popup_time:30,theme:{name:"Default",bg_color:"#1976D2",text_color:"#808080",video_position:"Right"},user:t.email,link:"",slug:""}),i=["Top","Left","Right","Bottom"],s=["Default","Dark Ninja","Green Field","Left Me"],n=()=>{const e=a.value.theme;let t={bg_color:"#1976D2",text_color:"#808080",video_position:"Right"};"Dark Ninja"===e.name?t={bg_color:"#0d1133",text_color:"#0d1133",video_position:"Bottom"}:"Green Field"===e.name?t={bg_color:"#0f4d39",text_color:"#0f4d39",video_position:"Top"}:"Left Me"===e.name&&(t={bg_color:"#d1196c",text_color:"#89118f",video_position:"Left"}),a.value.theme=Object.assign({name:e.name},t)},d=(0,M.iH)(null),c=()=>{const e=d.value;e&&e.scrollIntoView()};let u={type:"",link:""};(0,l.bv)((()=>{const t=document.querySelector(".page-content"),o=document.querySelector(".q-page");if(o&&o.classList.remove("items-center"),t&&(t.classList.contains("create-page")||t.classList.add("create-page")),u=e.cookies.get("newVideo"),a.value.type=u.type,a.value.link=u.link,"youtube"===u.type){const e=document.getElementsByTagName("iframe")[0];e.src=u.link}else{const e=document.querySelector("#my-video"),t=e.getElementsByTagName("source")[0];t.setAttribute("src",u.link)}}));const r="https://mvu.herokuapp.com",m=()=>{const e=r+"/video/save";console.log(a.value),O().post(e,a.value).then((e=>{console.log(e.data),o.value=r+"/view/"+a.value.slug})).catch((e=>console.log(e)))};return{data:a,posOptions:i,themeNames:s,changeTheme:n,formTheme:d,stc:c,saveVideo:m,pubLink:o}}};var le=o(7336),ae=o(4607),ie=o(8689),se=o(4689),ne=o(4554),de=o(3944),ce=o(5203),ue=o(2582),re=o(4379),me=o(7518),pe=o.n(me);const he=(0,X.Z)(oe,[["render",F],["__scopeId","data-v-3f006424"]]),ve=he;pe()(oe,"components",{QSelect:le.Z,QBtn:ae.Z,QForm:ie.Z,QInput:se.Z,QIcon:ne.Z,QPopupProxy:de.Z,QColor:ce.Z,QToggle:ue.Z,QPage:re.Z})}}]);