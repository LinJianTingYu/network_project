webpackJsonp([30],{"1pjG":function(e,t,r){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var s=r("4YfN"),n=r.n(s),a=r("R4Sj"),i={computed:n()({},Object(a.e)({prom:function(e){return e.prom},user:function(e){return e.user}})),data:function(){return{headers:{},form:{name:"",createTime:new Date,recentlyTime:new Date,remarks:""},isShow:!0}},created:function(){console.log(" 创建工程 created"),console.log(document.cookie),this.headers={headers:{username:JSON.parse(sessionStorage.user).username}},console.log(this.headers)},methods:{onSubmit:function(){var e=this;if(/^[a-zA-Z0-9\u4e00-\u9fa5]{2,20}$/.test(this.form.name))if("default"!==this.form.name){var t=this.$createElement,r={id:"1",name:this.form.name,createTime:this.form.createTime,remarks:this.form.remarks,recentlyTime:this.form.recentlyTime};""!==this.form.name?this.$http.post(this.user.httppath+"/api/ProManage/CreateProject",r,this.headers).then(function(t){"success"===t?e.$notify({title:"成功",message:"创建项目成功: "+e.form.name,type:"success"}):e.$notify({title:"警告",message:"项目名称已经存在",type:"warning"})}).catch(function(e){console.log(e)}):this.$notify.info({title:"提示",message:t("i",{style:"color: teal"},"请填写项目名名称")})}else this.$notify({title:"警告",message:"与公有项目的项目名称重复",type:"warning"});else this.$notify({title:"警告",message:"项目名称设置错误",type:"warning"})}}},o={render:function(){var e=this,t=e.$createElement,r=e._self._c||t;return r("el-container",[r("el-form",{ref:"form",attrs:{model:e.form,"label-width":"100px"}},[r("h2",{staticStyle:{"text-align":"center"}},[e._v(" 创建项目")]),e._v(" "),r("el-form-item",{attrs:{label:"项目名称"}},[r("el-input",{staticClass:"el-input",attrs:{type:"textarea"},model:{value:e.form.name,callback:function(t){e.$set(e.form,"name",t)},expression:"form.name"}})],1),e._v(" "),r("el-form-item",{attrs:{label:"备注"}},[r("el-input",{staticClass:"el-input",attrs:{type:"textarea"},model:{value:e.form.remarks,callback:function(t){e.$set(e.form,"remarks",t)},expression:"form.remarks"}})],1),e._v(" "),r("el-button",{staticStyle:{"margin-left":"41%"},attrs:{type:"primary",size:"mini"},on:{click:e.onSubmit}},[e._v("立即创建")])],1)],1)},staticRenderFns:[]};var m=r("C7Lr")(i,o,!1,function(e){r("3jou")},null,null);t.default=m.exports},"3jou":function(e,t){}});
//# sourceMappingURL=30.5507882bdf893be70073.js.map