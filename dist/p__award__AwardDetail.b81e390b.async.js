(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([[12],{"13u6":function(a,t,e){"use strict";e.r(t);var n=e("oBTY"),i=(e("RGTZ"),e("q1tI")),c=e("9kvl"),o=e("4+0c"),r=e("uw4f"),l=e("nKUr"),d=function(a,t,e){var i,c=a||{},d=c.Id,u=c.AwardDesc,s=void 0===u?"":u,p=c.OrgName,f=void 0===p?"":p,v=c.Introduction,b=void 0===v?"":v,h=c.RelatedId,w=c.OrgId,g=c.RelatedName,j=void 0===g?"":g,m=c.ContactName,O=void 0===m?"":m,x=c.ContactPhone,z=void 0===x?"":x,y=c.Files,k=void 0===y?[]:y,A=[{label:"\u673a\u6784\u7b80\u4ecb",value:b}],D=[{label:"\u4ea7\u54c1\u540d\u79f0",value:Object(l["jsx"])(o["q"],{to:r["a"].product(h),children:j})},{label:"\u4ea7\u54c1\u7b80\u4ecb",value:b}],I=[{label:"\u4e13\u5bb6\u59d3\u540d",value:Object(l["jsx"])(o["q"],{to:r["a"].expert(h),children:j})},{label:"\u4e2a\u4eba\u7b80\u4ecb",value:b}];return i=-1!==s.indexOf("\u4ea7\u54c1")?D:-1!==s.indexOf("\u673a\u6784")?A:I,[{label:"\u7533\u62a5\u5956\u9879",value:s},{label:"\u673a\u6784\u540d\u79f0",value:Object(l["jsx"])(o["q"],{to:r["a"].organization(w),children:f})}].concat(Object(n["a"])(i),[{label:"\u9644\u4ef6",value:Array.isArray(k)&&k.length?Object(l["jsx"])(o["q"],{to:"#",onClick:function(){return t({type:"award/getAwardFile",payload:{id:d,contact:O,conference_id:e}})},children:"\u4e0b\u8f7d\u9644\u4ef6"}):"--"},{label:"\u8054\u7cfb\u4eba",value:O},{label:"\u8054\u7cfb\u7535\u8bdd",value:z}])},u=function(a){var t=a||{},e=t.dispatch,n=t.awardDetail,r=t.location,u=r.state||{},s=u.params,p=void 0===s?{}:s,f=p.id,v=void 0===f?0:f,b=p.conferenceId,h=void 0===b?0:b;return Object(i["useEffect"])((function(){e({type:"award/getAwardDetail",payload:{id:v,conference_id:h}})}),[]),Object(l["jsx"])(o["v"],{className:"award-detail",children:Object(l["jsxs"])(o["w"],{title:"\u7533\u62a5\u4fe1\u606f",children:[Object(l["jsx"])(o["o"],{data:d(n,e,h)}),Object(l["jsx"])(o["b"],{type:"primary",block:!0,onClick:function(){return c["c"].goBack()},children:"\u8fd4\u56de"})]})})},s=function(a){var t=a.award,e=t||{},n=e.awardDetail;return{awardDetail:n}};t["default"]=Object(c["a"])(s)(u)},RGTZ:function(a,t,e){},uw4f:function(a,t,e){"use strict";e.d(t,"a",(function(){return i}));var n=e("fWQN"),i=function a(){Object(n["a"])(this,a)};i.home="/home",i.userSetting="/api/user/setting",i.apiAuthorize="/api/apilist/authorize",i.awardDetail="/award/list/detail",i.vipAuthorizeCreate="/vip/authorize/create",i.product=function(a){return"".concat("http://192.168.15.221:10000/app","/product.html#/detail/basic-info?deal_id=").concat(a)},i.organization=function(a){return"".concat("http://192.168.15.221:10000/app","/organization.html#/detail/info?organization_id=").concat(a)},i.expert=function(a){return"".concat("http://192.168.15.221:10000/app","/expert.html#/resume?id=").concat(a)},i.accountLog=function(a,t){return"/account/list/log?id=".concat(a,"&name=").concat(t)},i.realNameDetail=function(a,t){return"/account/realname/detail?id=".concat(a,"&name=").concat(t)},i.orgLog=function(a,t){return"/organization/list/log?id=".concat(a,"&name=").concat(t)},i.orgRelateUser=function(a,t){return"/organization/list/user?id=".concat(a,"&name=").concat(t)}}}]);