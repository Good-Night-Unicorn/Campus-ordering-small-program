(global["webpackJsonp"]=global["webpackJsonp"]||[]).push([["pages/shangjia/add-or-update"],{"2adb":function(e,n,a){"use strict";var t=a("810d"),r=a.n(t);r.a},"6a4b":function(e,n,a){"use strict";(function(e){Object.defineProperty(n,"__esModule",{value:!0}),n.default=void 0;var t=r(a("a34a"));function r(e){return e&&e.__esModule?e:{default:e}}function i(e,n,a,t,r,i,u){try{var o=e[i](u),s=o.value}catch(c){return void a(c)}o.done?n(s):Promise.resolve(s).then(t,r)}function u(e){return function(){var n=this,a=arguments;return new Promise((function(t,r){var u=e.apply(n,a);function o(e){i(u,t,r,o,s,"next",e)}function s(e){i(u,t,r,o,s,"throw",e)}o(void 0)}))}}var o=function(){Promise.all([a.e("common/vendor"),a.e("components/w-picker/w-picker")]).then(function(){return resolve(a("fe79"))}.bind(null,a)).catch(a.oe)},s={data:function(){return{cross:"",ruleForm:{shangjiazhanghao:"",mima:"",shangjiaxingming:"",xingbie:"",nianling:"",lianxidianhua:"",touxiang:"",money:""},xingbieOptions:[],xingbieIndex:0,user:{},ro:{shangjiazhanghao:!1,mima:!1,shangjiaxingming:!1,xingbie:!1,nianling:!1,lianxidianhua:!1,touxiang:!1,money:!1}}},components:{wPicker:o},computed:{baseUrl:function(){return this.$base.url}},onLoad:function(n){var a=this;return u(t.default.mark((function r(){var i,u,o,s;return t.default.wrap((function(r){while(1)switch(r.prev=r.next){case 0:return i=e.getStorageSync("nowTable"),r.next=3,a.$api.session(i);case 3:if(u=r.sent,a.user=u.data,a.xingbieOptions="男,女".split(","),a.ruleForm.userid=e.getStorageSync("userid"),n.refid&&(a.ruleForm.refid=n.refid,a.ruleForm.nickname=e.getStorageSync("nickname")),!n.id){r.next=14;break}return a.ruleForm.id=n.id,r.next=12,a.$api.info("shangjia",a.ruleForm.id);case 12:u=r.sent,a.ruleForm=u.data;case 14:if(a.cross=n.cross,!n.cross){r.next=54;break}o=e.getStorageSync("crossObj"),r.t0=t.default.keys(o);case 18:if((r.t1=r.t0()).done){r.next=54;break}if(s=r.t1.value,"shangjiazhanghao"!=s){r.next=24;break}return a.ruleForm.shangjiazhanghao=o[s],a.ro.shangjiazhanghao=!0,r.abrupt("continue",18);case 24:if("mima"!=s){r.next=28;break}return a.ruleForm.mima=o[s],a.ro.mima=!0,r.abrupt("continue",18);case 28:if("shangjiaxingming"!=s){r.next=32;break}return a.ruleForm.shangjiaxingming=o[s],a.ro.shangjiaxingming=!0,r.abrupt("continue",18);case 32:if("xingbie"!=s){r.next=36;break}return a.ruleForm.xingbie=o[s],a.ro.xingbie=!0,r.abrupt("continue",18);case 36:if("nianling"!=s){r.next=40;break}return a.ruleForm.nianling=o[s],a.ro.nianling=!0,r.abrupt("continue",18);case 40:if("lianxidianhua"!=s){r.next=44;break}return a.ruleForm.lianxidianhua=o[s],a.ro.lianxidianhua=!0,r.abrupt("continue",18);case 44:if("touxiang"!=s){r.next=48;break}return a.ruleForm.touxiang=o[s],a.ro.touxiang=!0,r.abrupt("continue",18);case 48:if("money"!=s){r.next=52;break}return a.ruleForm.money=o[s],a.ro.money=!0,r.abrupt("continue",18);case 52:r.next=18;break;case 54:a.styleChange();case 55:case"end":return r.stop()}}),r)})))()},methods:{styleChange:function(){this.$nextTick((function(){}))},xingbieChange:function(e){this.xingbieIndex=e.target.value,this.ruleForm.xingbie=this.xingbieOptions[this.xingbieIndex]},touxiangTap:function(){var e=this;this.$api.upload((function(n){e.ruleForm.touxiang="upload/"+n.file,e.$forceUpdate(),e.$nextTick((function(){e.styleChange()}))}))},getUUID:function(){return(new Date).getTime()},onSubmitTap:function(){var n=this;return u(t.default.mark((function a(){var r,i,u,o,s,c,l,g,f,d;return t.default.wrap((function(a){while(1)switch(a.prev=a.next){case 0:if(n.ruleForm.shangjiazhanghao){a.next=3;break}return n.$utils.msg("商家账号不能为空"),a.abrupt("return");case 3:if(n.ruleForm.mima){a.next=6;break}return n.$utils.msg("密码不能为空"),a.abrupt("return");case 6:if(n.ruleForm.shangjiaxingming){a.next=9;break}return n.$utils.msg("商家姓名不能为空"),a.abrupt("return");case 9:if(!n.ruleForm.nianling||n.$validate.isIntNumer(n.ruleForm.nianling)){a.next=12;break}return n.$utils.msg("年龄应输入整数"),a.abrupt("return");case 12:if(!n.ruleForm.lianxidianhua||n.$validate.isMobile(n.ruleForm.lianxidianhua)){a.next=15;break}return n.$utils.msg("联系电话应输入手机格式"),a.abrupt("return");case 15:if(!n.ruleForm.money||n.$validate.isNumber(n.ruleForm.money)){a.next=18;break}return n.$utils.msg("余额应输入数字"),a.abrupt("return");case 18:if(!n.cross){a.next=34;break}if(o=e.getStorageSync("statusColumnName"),s=e.getStorageSync("statusColumnValue"),""==o){a.next=34;break}if(c=e.getStorageSync("crossObj"),o.startsWith("[")){a.next=30;break}for(l in c)l==o&&(c[l]=s);return g=e.getStorageSync("crossTable"),a.next=28,n.$api.update("".concat(g),c);case 28:a.next=34;break;case 30:r=Number(e.getStorageSync("userid")),i=c["id"],u=e.getStorageSync("statusColumnName"),u=u.replace(/\[/,"").replace(/\]/,"");case 34:if(!i||!r){a.next=56;break}return n.ruleForm.crossuserid=r,n.ruleForm.crossrefid=i,f={page:1,limit:10,crossuserid:r,crossrefid:i},a.next=40,n.$api.list("shangjia",f);case 40:if(d=a.sent,!(d.data.total>=u)){a.next=46;break}return n.$utils.msg(e.getStorageSync("tips")),a.abrupt("return",!1);case 46:if(!n.ruleForm.id){a.next=51;break}return a.next=49,n.$api.update("shangjia",n.ruleForm);case 49:a.next=53;break;case 51:return a.next=53,n.$api.add("shangjia",n.ruleForm);case 53:n.$utils.msgBack("提交成功");case 54:a.next=64;break;case 56:if(!n.ruleForm.id){a.next=61;break}return a.next=59,n.$api.update("shangjia",n.ruleForm);case 59:a.next=63;break;case 61:return a.next=63,n.$api.add("shangjia",n.ruleForm);case 63:n.$utils.msgBack("提交成功");case 64:case"end":return a.stop()}}),a)})))()},optionsChange:function(e){this.index=e.target.value},bindDateChange:function(e){this.date=e.target.value},getDate:function(e){var n=new Date,a=n.getFullYear(),t=n.getMonth()+1,r=n.getDate();return"start"===e?a-=60:"end"===e&&(a+=2),t=t>9?t:"0"+t,r=r>9?r:"0"+r,"".concat(a,"-").concat(t,"-").concat(r)},toggleTab:function(e){this.$refs[e].show()}}};n.default=s}).call(this,a("543d")["default"])},"810d":function(e,n,a){},"8e3e":function(e,n,a){"use strict";a.r(n);var t=a("6a4b"),r=a.n(t);for(var i in t)"default"!==i&&function(e){a.d(n,e,(function(){return t[e]}))}(i);n["default"]=r.a},d9cb:function(e,n,a){"use strict";var t;a.d(n,"b",(function(){return r})),a.d(n,"c",(function(){return i})),a.d(n,"a",(function(){return t}));var r=function(){var e=this,n=e.$createElement;e._self._c},i=[]},e983:function(e,n,a){"use strict";a.r(n);var t=a("d9cb"),r=a("8e3e");for(var i in r)"default"!==i&&function(e){a.d(n,e,(function(){return r[e]}))}(i);a("2adb");var u,o=a("f0c5"),s=Object(o["a"])(r["default"],t["b"],t["c"],!1,null,"2a328815",null,!1,t["a"],u);n["default"]=s.exports},ed00:function(e,n,a){"use strict";(function(e){a("26aa");t(a("66fd"));var n=t(a("e983"));function t(e){return e&&e.__esModule?e:{default:e}}e(n.default)}).call(this,a("543d")["createPage"])}},[["ed00","common/runtime","common/vendor"]]]);