(window.webpackJsonp=window.webpackJsonp||[]).push([[9],{fmEo:function(l,n,u){"use strict";u.r(n);var e=u("8Y7J");class t{}var o=u("pMnS"),i=u("SVse"),s=u("quSY"),a=u("AytR"),r=u("mCNh"),c=u("pLZG"),p=u("lJxs"),b=u("vkgz"),d=u("IheW");class f{constructor(l){this.uploadService=l,this.fileNames=[],this.uploading=!1,this.progress=0}ngOnInit(){this.subscription$=new s.a}ngOnDestroy(){this.subscription$.unsubscribe()}onChange(l){console.log(l),this.fileNames=[],this.uploading=!1,this.progress=0;const n=l.srcElement.files,u=document.getElementById("labelCustomFile");this.files=new Set;for(let e=0;e<n.length;e++)this.fileNames.push(n.item(e).name),this.files.add(n.item(e));u.innerHTML=this.fileNames.length>1?"M\xfaltiplos arquivos...":1==this.fileNames.length?"Um arquivo apenas...":"Selecionar Arquivo"}onUpload(){var l;this.files&&this.files.size>=1&&(this.uploading=!0,this.subscription$=this.uploadService.upload(this.files,a.a.BASE_URL+"/upload").pipe((l=l=>{this.progress=l},Object(b.a)(n=>{if(n.type===d.f.UploadProgress){const u=Math.round(100*n.loaded/n.total);l(u)}})),Object(r.a)(Object(c.a)(l=>l.type===d.f.Response),Object(p.a)(l=>l.body))).subscribe(l=>console.log("Upload Conclu\xeddo")))}onDownloadExcel(){this.uploadService.download(a.a.BASE_URL+"/downloadExcel").subscribe(l=>{this.uploadService.handleFile(l,"teste.xlsx")})}onDownloadPdf(){this.uploadService.download(a.a.BASE_URL+"/downloadPDF").subscribe(l=>{this.uploadService.handleFile(l,"teste.pdf")})}}let m=(()=>{class l{constructor(l){this.httpClient=l}upload(l,n){const u=new FormData;return l.forEach(l=>{u.append("file",l,l.name)}),this.httpClient.post(n,u,{observe:"events",reportProgress:!0})}download(l){return this.httpClient.get(l,{responseType:"blob"})}handleFile(l,n){const u=new Blob([l],{type:l.type});if(window.navigator&&window.navigator.msSaveOrOpenBlob)return void window.navigator.msSaveOrOpenBlob(u);const e=window.URL.createObjectURL(u),t=document.createElement("a");t.href=e,t.download=n,t.dispatchEvent(new MouseEvent("click",{bubbles:!0,cancelable:!0,view:window})),setTimeout(()=>{window.URL.revokeObjectURL(e),t.remove()},100)}}return l.ngInjectableDef=e.Ob({factory:function(){return new l(e.Pb(d.c))},token:l,providedIn:"root"}),l})();var h=e.nb({encapsulation:0,styles:[[""]],data:{}});function v(l){return e.Kb(0,[(l()(),e.pb(0,0,null,null,2,"div",[["class","card"]],null,null,null,null,null)),(l()(),e.pb(1,0,null,null,1,"div",[["class","card-body"]],null,null,null,null,null)),(l()(),e.Ib(2,null,[" "," "]))],null,(function(l,n){l(n,2,0,n.context.$implicit)}))}function g(l){return e.Kb(0,[(l()(),e.pb(0,0,null,null,2,"div",[["class","mt-1"]],null,null,null,null,null)),(l()(),e.eb(16777216,null,null,1,null,v)),e.ob(2,278528,null,0,i.j,[e.M,e.J,e.q],{ngForOf:[0,"ngForOf"]},null)],(function(l,n){l(n,2,0,n.component.fileNames)}),null)}function w(l){return e.Kb(0,[(l()(),e.pb(0,0,null,null,3,"div",[["class","mt-1"]],null,null,null,null,null)),(l()(),e.pb(1,0,null,null,2,"div",[["class","progress"]],null,null,null,null,null)),(l()(),e.pb(2,0,null,null,1,"div",[["class","progress-bar"],["role","progressbar"]],[[4,"width",null]],null,null,null,null)),(l()(),e.Ib(3,null,[" "," % "]))],null,(function(l,n){var u=n.component;l(n,2,0,u.progress+"%"),l(n,3,0,u.progress)}))}function y(l){return e.Kb(0,[(l()(),e.pb(0,0,null,null,4,"div",[["style","margin-top: 10px;"]],null,null,null,null,null)),(l()(),e.pb(1,0,null,null,3,"div",[["class","custom-file"]],null,null,null,null,null)),(l()(),e.pb(2,0,null,null,0,"input",[["class","custom-file-input"],["id","inputCustomFile"],["multiple",""],["type","file"]],null,[[null,"change"]],(function(l,n,u){var e=!0;return"change"===n&&(e=!1!==l.component.onChange(u)&&e),e}),null,null)),(l()(),e.pb(3,0,null,null,1,"label",[["class","custom-file-label"],["for","inputCustomFile"],["id","labelCustomFile"]],null,null,null,null,null)),(l()(),e.Ib(-1,null,[" Selecionar Arquivo "])),(l()(),e.eb(16777216,null,null,1,null,g)),e.ob(6,16384,null,0,i.k,[e.M,e.J],{ngIf:[0,"ngIf"]},null),(l()(),e.eb(16777216,null,null,1,null,w)),e.ob(8,16384,null,0,i.k,[e.M,e.J],{ngIf:[0,"ngIf"]},null),(l()(),e.pb(9,0,null,null,2,"div",[["style","margin-top: 10px;"]],null,null,null,null,null)),(l()(),e.pb(10,0,null,null,1,"button",[["class","btn btn-primary"],["type","button"]],[[8,"disabled",0]],[[null,"click"]],(function(l,n,u){var e=!0;return"click"===n&&(e=!1!==l.component.onUpload()&&e),e}),null,null)),(l()(),e.Ib(-1,null,[" Upload "])),(l()(),e.pb(12,0,null,null,2,"div",[["style","margin-top: 10px;"]],null,null,null,null,null)),(l()(),e.pb(13,0,null,null,1,"button",[["class","btn btn-primary"],["type","button"]],null,[[null,"click"]],(function(l,n,u){var e=!0;return"click"===n&&(e=!1!==l.component.onDownloadExcel()&&e),e}),null,null)),(l()(),e.Ib(-1,null,[" Download Excel "])),(l()(),e.pb(15,0,null,null,2,"div",[["style","margin-top: 10px;"]],null,null,null,null,null)),(l()(),e.pb(16,0,null,null,1,"button",[["class","btn btn-primary"],["type","button"]],null,[[null,"click"]],(function(l,n,u){var e=!0;return"click"===n&&(e=!1!==l.component.onDownloadPdf()&&e),e}),null,null)),(l()(),e.Ib(-1,null,[" Download PDF "]))],(function(l,n){var u=n.component;l(n,6,0,u.files),l(n,8,0,u.uploading)}),(function(l,n){l(n,10,0,!n.component.files)}))}function S(l){return e.Kb(0,[(l()(),e.pb(0,0,null,null,1,"app-upload-file",[],null,null,null,y,h)),e.ob(1,245760,null,0,f,[m],null,null)],(function(l,n){l(n,1,0)}),null)}var I=e.lb("app-upload-file",f,S,{},{},[]),k=u("iInd");class O{}u.d(n,"UploadFileModuleNgFactory",(function(){return E}));var E=e.mb(t,[],(function(l){return e.yb([e.zb(512,e.j,e.X,[[8,[o.a,I]],[3,e.j],e.v]),e.zb(4608,i.m,i.l,[e.s,[2,i.v]]),e.zb(1073742336,i.c,i.c,[]),e.zb(1073742336,k.o,k.o,[[2,k.t],[2,k.k]]),e.zb(1073742336,O,O,[]),e.zb(1073742336,t,t,[]),e.zb(1024,k.i,(function(){return[[{path:"",component:f}]]}),[])])}))}}]);