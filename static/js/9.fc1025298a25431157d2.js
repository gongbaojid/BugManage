webpackJsonp([9],{IwMv:function(a,t,o){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var e=o("3cXf"),n=o.n(e),m={name:"company-info",data:function(){return{baseUrl:this.$intfcUrl,CompamyInfoData:{}}},beforeMount:function(){this.GetCompamyInfo()},methods:{submitForm:function(a){var t=this;t.$refs[a].validate(function(a){if(!a)return!1;var o={ID:t.CompamyInfoData.ID,CompanyCode:t.CompamyInfoData.CompanyCode,CompanyName:t.CompamyInfoData.CompanyName,CompanyContacts:t.CompamyInfoData.CompanyContacts,CompanyAddress:t.CompamyInfoData.CompanyAddress,CompanyTelephone:t.CompamyInfoData.CompanyTelephone};t.ModifyCompanyInfo(o)})},GetCompamyInfo:function(){var a=this;a.$http.get(a.baseUrl+"/Services/BugManageServices.ashx?method=GetCompamyInfo",{}).then(function(t){t.data.code>0?a.CompamyInfoData=t.data.data[0]:a.CompamyInfoData={}}).catch(function(a){})},ModifyCompanyInfo:function(a){var t=this;t.$http.post(t.baseUrl+"/Services/BugManageServices.ashx",{method:"ModifyCompanyInfo",jsondata:n()(a)}).then(function(a){t.GetCompamyInfo(),a.data.code>0?t.$message({message:"修改成功",type:"success"}):t.$message({message:"修改失败",type:"error"})}).catch(function(a){t.$message({message:"修改失败",type:"error"})})}}},p={render:function(){var a=this,t=a.$createElement,o=a._self._c||t;return o("div",{staticStyle:{padding:"30px 10px 10px 10px"}},[o("el-card",[o("div",{staticStyle:{height:"40px","font-weight":"600"}},[a._v("企业信息")]),a._v(" "),o("el-form",{ref:"CompamyInfoData",staticClass:"demo-ruleForm",staticStyle:{width:"370px"},attrs:{model:a.CompamyInfoData,"status-icon":"","label-width":"100px"}},[o("el-form-item",{attrs:{label:"公司名称",prop:"CompanyName",rules:[{required:!0,message:"请输入公司名称",trigger:"blur"}]}},[o("el-input",{attrs:{type:"text","auto-complete":"off"},model:{value:a.CompamyInfoData.CompanyName,callback:function(t){a.$set(a.CompamyInfoData,"CompanyName",t)},expression:"CompamyInfoData.CompanyName"}})],1),a._v(" "),o("el-form-item",{attrs:{label:"联系人",prop:"CompanyContacts"}},[o("el-input",{attrs:{type:"text","auto-complete":"off"},model:{value:a.CompamyInfoData.CompanyContacts,callback:function(t){a.$set(a.CompamyInfoData,"CompanyContacts",t)},expression:"CompamyInfoData.CompanyContacts"}})],1),a._v(" "),o("el-form-item",{attrs:{label:"地址",prop:"CompanyAddress"}},[o("el-input",{attrs:{type:"text","auto-complete":"off"},model:{value:a.CompamyInfoData.CompanyAddress,callback:function(t){a.$set(a.CompamyInfoData,"CompanyAddress",t)},expression:"CompamyInfoData.CompanyAddress"}})],1),a._v(" "),o("el-form-item",{attrs:{label:"电话",prop:"CompanyTelephone"}},[o("el-input",{attrs:{type:"text","auto-complete":"off"},model:{value:a.CompamyInfoData.CompanyTelephone,callback:function(t){a.$set(a.CompamyInfoData,"CompanyTelephone",t)},expression:"CompamyInfoData.CompanyTelephone"}})],1),a._v(" "),o("el-form-item",[o("el-button",{attrs:{type:"primary"},on:{click:function(t){a.submitForm("CompamyInfoData")}}},[a._v("提交")])],1)],1)],1)],1)},staticRenderFns:[]};var s=o("C7Lr")(m,p,!1,function(a){o("aRZ5")},"data-v-9830164a",null);t.default=s.exports},aRZ5:function(a,t){}});
//# sourceMappingURL=9.fc1025298a25431157d2.js.map