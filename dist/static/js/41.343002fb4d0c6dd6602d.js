webpackJsonp([41],{"5uhS":function(e,t,a){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var r=a("HzJ8"),n=a.n(r),i=a("4YfN"),s=a.n(i),o=a("R4Sj"),m={computed:s()({},Object(o.e)({prom:function(e){return e.prom},user:function(e){return e.user}}),Object(o.c)(["getHeaderDate"])),data:function(){return{data_list:[],data_list2:[{id:"1",name:"duhanxu"},{id:"2",name:"hedajuan"},{id:"3",name:"duhanxu"},{id:"4",name:"hedajuan"}],headerData:[],headerData2:[{id:10,label:"工程1"}],defaultProps:{children:"id",label:"label"},form:{id:0,name:"",createTime:new Date,recentlyTime:new Date,remarks:""}}},created:function(){this.load()},methods:s()({},Object(o.d)(["setData_prom","updateData_prom","deleteDate_prom","setpname_prom","updataStateProm"]),Object(o.b)(["acSetData_prom","acSetpname_prom"]),{handleNodeClick:function(e){var t=!0,a=!1,r=void 0;try{for(var i,s=n()(this.prom.prom_data_list);!(t=(i=s.next()).done);t=!0){var o=i.value;e.id===parseInt(o.id)&&(this.form.id=o.id,this.form.name=o.name,this.form.createTime=o.createTime,this.form.recentlyTime=o.recentlyTime,this.form.remarks=o.remarks,this.acSetpname_prom(this.form.name),sessionStorage.setItem("pname",this.form.name))}}catch(e){a=!0,r=e}finally{try{!t&&s.return&&s.return()}finally{if(a)throw r}}this.$notify({title:"成功",message:"选中项目: "+this.form.name,type:"success"})},filterNode:function(e,t){return!e||(console.log(e),console.log(t),-1!==t.label.indexOf(e))},update:function(){var e=this;if("default"!==this.form.name){var t=!0,a=!1,r=void 0;try{for(var i,s=n()(this.prom.prom_data_list);!(t=(i=s.next()).done);t=!0){var o=i.value;if(o.name===this.form.name&&o.id!==this.form.id)return void this.$notify({title:"警告",message:"项目名称已经存在",type:"warning"})}}catch(e){a=!0,r=e}finally{try{!t&&s.return&&s.return()}finally{if(a)throw r}}var m={headers:{username:this.user.user.username}},l={id:this.form.id,name:this.form.name,createTime:this.form.createTime,remarks:this.form.remarks,recentlyTime:this.form.recentlyTime};this.$http.post(this.user.httppath+"/api/ProManage/UpdateProject",l,m).then(function(t){"success"===t&&(e.updateData_prom(l),e.setpname_prom(e.form.name),sessionStorage.setItem("pname",e.form.name),e.$notify({title:"成功",message:"修改项目成功: "+e.form.name,type:"success"}))}).catch(function(t){e.$notify({title:"警告",message:t,type:"warning"})})}else this.$notify({title:"警告",message:"公共工程不能修改",type:"warning"})},deletepro:function(){var e=this;if(console.log("这是删除函数"),"default"!==this.form.name){var t={id:this.form.id},a=this.form.id.toString(),r={projectname:this.prom.prom_pname,username:JSON.parse(sessionStorage.user).username};this.$http.post(this.user.httppath+"/api/ProManage/DeleteProject",t,{headers:r}).then(function(t){"success"===t&&(e.deleteDate_prom(a),e.setpname_prom(""),e.$notify({title:"成功",message:"项目删除成功: "+e.form.name,type:"success"}),e.acSetpname_prom("default"),e.form.id="-1",e.form.name="default",sessionStorage.setItem("pname","default"))}).catch(function(t){e.$notify({title:"警告",message:t,type:"warning"})})}else this.$notify({title:"警告",message:"不能删除公有工程",type:"warning"})},load:function(){var e=this,t={headers:{username:JSON.parse(sessionStorage.user).username}};this.$http.post(this.user.httppath+"/api/ProManage/GetALlProject",{},t).then(function(t){e.acSetData_prom(t),e.form.id="-1",e.form.name="default"}).catch(function(t){e.$notify.info({title:"提示",message:"没有相关工程"}),console.log(t)})}})},l={render:function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("div",[a("el-container",[a("el-container",[a("el-aside",{attrs:{width:"200px"}},[a("el-tree",{staticClass:"filter-tree",attrs:{data:e.getHeaderDate,props:e.defaultProps,"default-expand-all":"","filter-node-method":e.filterNode},on:{"node-click":e.handleNodeClick}})],1),e._v(" "),a("el-container",[a("el-form",{ref:"form",attrs:{model:e.form,"label-width":"100px"}},[a("h2",{staticStyle:{"text-align":"center"}},[e._v("编辑")]),e._v(" "),a("el-form-item",{attrs:{label:"项目名称"}},[a("el-input",{staticClass:"el-input",attrs:{type:"textarea"},model:{value:e.form.name,callback:function(t){e.$set(e.form,"name",t)},expression:"form.name"}})],1),e._v(" "),a("el-form-item",{attrs:{label:"备注"}},[a("el-input",{staticClass:"el-input",attrs:{type:"textarea"},model:{value:e.form.remarks,callback:function(t){e.$set(e.form,"remarks",t)},expression:"form.remarks"}})],1),e._v(" "),a("el-button",{staticStyle:{"margin-left":"38%"},attrs:{type:"primary",size:"mini"},on:{click:e.update}},[e._v("修改")]),e._v(" "),a("el-button",{attrs:{type:"primary",size:"mini"},on:{click:e.deletepro}},[e._v("删除")])],1)],1)],1)],1)],1)},staticRenderFns:[]};var f=a("C7Lr")(m,l,!1,function(e){a("OR4K")},null,null);t.default=f.exports},OR4K:function(e,t){}});
//# sourceMappingURL=41.343002fb4d0c6dd6602d.js.map