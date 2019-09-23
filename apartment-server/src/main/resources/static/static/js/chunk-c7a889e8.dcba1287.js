(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-c7a889e8"],{2017:function(e,t,n){"use strict";var s=n("3b76"),o=n.n(s);o.a},"3b76":function(e,t,n){},"51c5":function(e,t,n){},"9ed6":function(e,t,n){"use strict";n.r(t);var s=function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("div",{staticClass:"login-container"},[n("el-form",{ref:"loginForm",staticClass:"login-form",attrs:{model:e.loginForm,rules:e.loginRules,"auto-complete":"on","label-position":"left"}},[n("div",{staticClass:"title-container"},[n("h3",{staticClass:"title"},[e._v("登录")])]),e._v(" "),n("el-form-item",{attrs:{prop:"username"}},[n("span",{staticClass:"svg-container"},[n("svg-icon",{attrs:{"icon-class":"user"}})],1),e._v(" "),n("el-input",{ref:"username",attrs:{placeholder:"用户名",name:"username",type:"text",tabindex:"1","auto-complete":"on"},model:{value:e.loginForm.username,callback:function(t){e.$set(e.loginForm,"username",t)},expression:"loginForm.username"}})],1),e._v(" "),n("el-form-item",{attrs:{prop:"password"}},[n("span",{staticClass:"svg-container"},[n("svg-icon",{attrs:{"icon-class":"password"}})],1),e._v(" "),n("el-input",{key:e.passwordType,ref:"password",attrs:{type:e.passwordType,placeholder:"密码",name:"password",tabindex:"2","auto-complete":"on"},nativeOn:{keyup:function(t){return!t.type.indexOf("key")&&e._k(t.keyCode,"enter",13,t.key,"Enter")?null:e.handleLogin(t)}},model:{value:e.loginForm.password,callback:function(t){e.$set(e.loginForm,"password",t)},expression:"loginForm.password"}}),e._v(" "),n("span",{staticClass:"show-pwd",on:{click:e.showPwd}},[n("svg-icon",{attrs:{"icon-class":"password"===e.passwordType?"eye":"eye-open"}})],1)],1),e._v(" "),n("el-button",{staticStyle:{width:"100%","margin-bottom":"30px"},attrs:{loading:e.loading,type:"primary"},nativeOn:{click:function(t){return t.preventDefault(),e.handleLogin(t)}}},[e._v("登录")]),e._v(" "),n("div",{staticClass:"tips"},[n("span",[e._v("如果您不是管理员，您首次登陆的密码是您的身份证号后六位")])])],1)],1)},o=[],r=n("61f7"),a=n("c24f"),i=n("5c96"),c={name:"Login",data:function(){var e=function(e,t,n){Object(r["c"])(t)?n():n(new Error("请输入正确的用户名"))},t=function(e,t,n){t.length<6?n(new Error("密码不能少于6位数")):n()};return{loginForm:{username:"admin",password:"123456"},loginRules:{username:[{required:!0,trigger:"blur",validator:e}],password:[{required:!0,trigger:"blur",validator:t}]},loading:!1,passwordType:"password",redirect:void 0}},watch:{$route:{handler:function(e){this.redirect=e.query&&e.query.redirect},immediate:!0}},methods:{showPwd:function(){var e=this;"password"===this.passwordType?this.passwordType="":this.passwordType="password",this.$nextTick(function(){e.$refs.password.focus()})},handleLogin:function(){var e=this;this.$refs.loginForm.validate(function(t){if(!t)return console.log("error submit!!"),!1;e.loading=!0,Object(a["f"])(e.loginForm.username).then(function(t){var n=t.data;n?e.$store.dispatch("user/login",e.loginForm).then(function(){e.$router.push({path:e.redirect||"/"}),e.loading=!1}).catch(function(){e.loading=!1}):(Object(i["Message"])({message:"用户名不存在，请检查用户名！",type:"error",duration:5e3}),e.loading=!1)}).catch(function(){e.loading=!1})})}}},l=c,u=(n("2017"),n("a3ec"),n("2877")),d=Object(u["a"])(l,s,o,!1,null,"234659c6",null);t["default"]=d.exports},a3ec:function(e,t,n){"use strict";var s=n("51c5"),o=n.n(s);o.a}}]);