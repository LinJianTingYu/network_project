webpackJsonp([9],{QbMZ:function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var i=n("4YfN"),o=n.n(i),s=n("R4Sj"),a={computed:o()({},Object(s.e)({prom:function(e){return e.prom},user:function(e){return e.user},pm:function(e){return e.pm}}),{gethead:function(){return{projectname:this.prom.prom_pname,username:JSON.parse(sessionStorage.user).username,filetype:this.getpmtype}},getuploadHead:function(){return{projectname:this.prom.prom_pname,username:JSON.parse(sessionStorage.user).username,filetype:this.getpmtype,Authorization:"bearer "+sessionStorage.getItem("token")}},getpmtype:function(){return console.log(this.pm.pm_typeNow),"3g rbs"===this.pm.pm_typeNow?"PM_3G_RBS":"3g rnc"===this.pm.pm_typeNow?"PM_3G_RNC":"4g"===this.pm.pm_typeNow?"PM_4G":"PM_NBIoT"}}),data:function(){return{processNum:70,fileList:[],uploadAction:"",isloading:!1}},created:function(){sessionStorage.getItem("pname")&&this.setpname_prom(sessionStorage.getItem("pname")),window.addEventListener("beforeunload",function(){sessionStorage.setItem("pname",sessionStorage.getItem("pname"))}),this.uploadAction=this.user.httppath+"/api/Pm/Upload"},methods:o()({},Object(s.d)(["setpname_prom"]),{analysis:function(){console.log(this.getpmtype),"default"!==this.prom.prom_pname?this.dbInput():this.$notify({title:"警告",message:"没有权限对公有工程进行数据入库",type:"warning"})},send:function(){console.log("这是send 函数")},dbInput:function(){var e=this;this.isloading=!0,this.$http.post(this.user.httppath+"/api/Pm/Parse",{},{headers:this.gethead}).then(function(t){e.isloading=!1,e.$notify({title:"成功",message:"解析完成",type:"success"})}).catch(function(t){e.isloading=!1,e.$notify({title:"警告",message:t,type:"warning"})})},submitUpload:function(){"default"===this.prom.prom_pname?this.$notify({title:"警告",message:"没有权限对公共工程进行操作",type:"warning"}):this.$refs.upload.submit()},handleRemove:function(e,t){console.log("这是函数 handleRemove"),console.log(e),console.log(t)},handlePreview:function(e){console.log("这是函数 handlePreview"),console.log(e)}})},r={render:function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("el-container",[n("el-main",[n("br"),e._v(" "),n("br"),e._v(" "),n("el-upload",{ref:"upload",staticClass:"elmro",attrs:{action:e.uploadAction,headers:e.getuploadHead,"on-preview":e.handlePreview,"on-remove":e.handleRemove,"file-list":e.fileList,"auto-upload":!1,limit:1e3,multiple:!0,accept:".xml, .zip"}},[n("el-button",{attrs:{slot:"trigger",size:"mini",type:"primary"},slot:"trigger"},[e._v("选取文件")]),e._v(" "),n("div",{staticClass:"el-upload__tip",attrs:{slot:"tip"},slot:"tip"},[e._v("支持zip,xml格式的文件")]),e._v(" "),n("el-button",{staticStyle:{"margin-left":"10px"},attrs:{size:"mini",type:"success"},on:{click:e.submitUpload}},[e._v("上传到服务器")])],1),e._v(" "),n("br"),e._v(" "),n("hr"),e._v(" "),n("el-button",{staticStyle:{width:"80px","margin-left":"2px"},attrs:{size:"mini",loading:e.isloading,type:"primary"},on:{click:e.analysis}},[e._v("解析")])],1)],1)},staticRenderFns:[]};var p=n("C7Lr")(a,r,!1,function(e){n("R8/K")},null,null);t.default=p.exports},"R8/K":function(e,t){}});
//# sourceMappingURL=9.a8b9a98fc5002d1b0b39.js.map