(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([[20],{JdD0:function(e,t,n){"use strict";n.r(t);var o=n("tJVT"),r=n("9og8"),c=n("WmNS"),i=n.n(c),a=n("q1tI"),l=n("9kvl"),s=n("4+0c"),u=n("Ymrs"),m={type:"object",properties:{input:{type:"string",title:"\u4eba\u5458\u540d\u79f0","x-decorator":"FormItem","x-component":"Input","x-validator":[{required:!0,message:"\u4e0d\u80fd\u7a7a"},{format:"phone"}]},textArea:{type:"string",title:"\u63cf\u8ff0","x-decorator":"FormItem","x-component":"Input.TextArea",default:"\u5907\u6ce8\u54c8\u54c8\u54c8\u54c8"},select:{type:"string",title:"\u6027\u522b","x-decorator":"FormItem","x-component":"Select",enum:[{value:1,label:"\u7537"},{value:2,label:"\u5973"}],required:!0},selectMultiple:{type:"Array<string>",title:"\u6027\u522b","x-decorator":"FormItem","x-component":"Select",enum:[{value:1,label:"\u7537"},{value:2,label:"\u5973"},{value:3,label:"\u4eba\u5996"}],required:!0,default:[1],"x-component-props":{mode:"multiple"}},datePicker:{type:"string",title:"\u51fa\u751f\u5e74\u6708","x-decorator":"FormItem","x-component":"DatePicker",default:"2020-10-02"},upload:{type:"Array<object>",title:"\u9644\u4ef6","x-decorator":"FormItem","x-component":"ABSUpload","x-component-props":{contentText:"\u4e0a\u4f20\u6587\u4ef6",limitSize:1},required:!0},previewText:{type:"string",title:"\u6587\u672c","x-decorator":"FormItem","x-component":"PreviewText.Input",default:"\u6d4b\u8bd5\u4fe1\u606f"},search:{type:"array",title:"\u641c\u7d22","x-decorator":"FormItem","x-component":"ABSSearch","x-component-props":{type:u["d"].expert,mode:"multiple",multipleMaxNum:3}}}},p={type:"object",properties:{name:{type:"string",title:"\u63a5\u53e3\u540d\u79f0","x-decorator":"FormItem","x-component":"Input","x-validator":[{required:!0,message:"\u4e0d\u80fd\u7a7a"}]},is_hidden:{type:"string",title:"\u663e\u793a\u72b6\u6001","x-decorator":"FormItem","x-component":"Select",enum:[{value:!1,label:"\u663e\u793a"},{value:!0,label:"\u9690\u85cf"}],required:!0},create_time:{type:"string",title:"\u4e0a\u67b6\u65f6\u95f4","x-decorator":"FormItem","x-component":"DatePicker",required:!0}}},d=n("pn+7"),h=n("uw4f"),x=n("Ytw1"),b=[{name:"\u4ea7\u54c1\u8bc1\u5238\u7b80\u7565\u4fe1\u606f(\u591a\u4ea7\u54c1)",category:"\u4ea7\u54c1",create_time:"2021-11-02",is_hidden:!0},{name:"\u8bc1\u5238\u8ba1\u7b97",category:"\u503a\u5238\u8ba1\u7b97\u5668",create_time:"2021-10-27",is_hidden:!1},{name:"\t\u6279\u91cf\u83b7\u53d6\u903e\u671f\u8868\u73b0\u6570\u636e",category:"\u8d44\u4ea7",create_time:"2021-07-13",is_hidden:!0},{name:"\u83b7\u53d6\u8d44\u4ea7\u6c60\u5386\u53f2\u6574\u4f53\u60c5\u51b5",category:"\u8bc1\u5238",create_time:"2021-07-08",is_hidden:!1}];function j(){var e=[{title:"\u63a5\u53e3\u540d\u79f0",dataIndex:"name",valueType:"textarea"},{title:"\u63a5\u53e3\u5206\u7c7b",dataIndex:"category",valueType:"select",fieldProps:{options:f(b)}},{title:"\u4e0a\u67b6\u65f6\u95f4",dataIndex:"create_time",render:function(e){return x["a"].formatDate(e)},hideInSearch:!0},{title:"\u663e\u793a\u72b6\u6001",dataIndex:"is_hidden",hideInForm:!0,valueEnum:{false:{text:"\u663e\u793a"},true:{text:"\u9690\u85cf"}},filters:[],hideInSearch:!0},{title:"\u64cd\u4f5c",dataIndex:"option",valueType:"option"}];return e}function f(e){var t=[];return e&&e.length>0&&e.forEach((function(e){var n=e.category;t.push({label:n,value:n})})),t}var g={type:"Object",properties:{user_name:{type:"string",title:"\u7528\u6237\u540d","x-decorator":"FormItem","x-component":"Input","x-validator":[{required:!0,message:"\u8bf7\u8f93\u5165\u7528\u6237\u540d"}],"x-reactions":{target:"email_content",fulfill:{state:{value:'{{`\u60a8\u597d\uff0c\u73b0\u5df2\u4e3a\u60a8\u5f00\u901aCNABS\u8d26\u53f7\uff0c\u5177\u4f53\u4fe1\u606f\u5982\u4e0b\\n\\n\u7f51\u5740\uff1ahttps://www.cn-abs.com/\\n\u7528\u6237\u540d\uff1a`+ ($self.value?$self.value:"(\u5c40\u90e8\u8868\u8fbe\u5f0f\u8054\u52a8)") + "\\n\u5bc6\u7801\uff1awelcome\\n\\n\u6b22\u8fce\u60a8\u767b\u5f55\u4f7f\u7528\u5e76\u63d0\u51fa\u5b9d\u8d35\u610f\u89c1\uff01"}}'}}}},email_content:{type:"string",title:"\u90ae\u4ef6",default:"\u60a8\u597d\uff0c\n\u73b0\u5df2\u4e3a\u60a8\u5f00\u901aCNABS\u8d26\u53f7\uff0c\u5177\u4f53\u4fe1\u606f\u5982\u4e0b\n\u7f51\u5740\uff1ahttps://www.cn-abs.com/\n",required:!0,"x-decorator":"FormItem","x-component":"Input.TextArea","x-component-props":{rows:8}}}},y={type:"Object",properties:{user_name:{type:"string",title:"\u7528\u6237\u540d","x-decorator":"FormItem","x-component":"Input","x-validator":[{required:!0,message:"\u8bf7\u8f93\u5165\u7528\u6237\u540d"}],"x-reactions":{fulfill:{run:"$form.setFieldState('email_content',state=>{state.value = `${state.initialValue}\n\u7528\u6237\u540d\uff1a ${$self.value}\n\u5bc6\u7801\uff1awelcome\n\n\u6b22\u8fce\u60a8\u767b\u5f55\u4f7f\u7528\u5e76\u63d0\u51fa\u5b9d\u8d35\u610f\u89c1\uff01`})"}}},email_content:{type:"string",title:"\u90ae\u4ef6",default:"\u60a8\u597d\uff0c\n\u73b0\u5df2\u4e3a\u60a8\u5f00\u901aCNABS\u8d26\u53f7\uff0c\u5177\u4f53\u4fe1\u606f\u5982\u4e0b\n\u7f51\u5740\uff1ahttps://www.cn-abs.com/\n",required:!0,"x-decorator":"FormItem","x-component":"Input.TextArea","x-component-props":{rows:8}}}},O={type:"Object",properties:{user_name:{type:"string",title:"\u7528\u6237\u540d","x-decorator":"FormItem","x-component":"Input","x-validator":[{required:!0,message:"\u8bf7\u8f93\u5165\u7528\u6237\u540d"}]},email_content:{type:"string",title:"\u90ae\u4ef6",default:"\u60a8\u597d\uff0c\n\u73b0\u5df2\u4e3a\u60a8\u5f00\u901aCNABS\u8d26\u53f7\uff0c\u5177\u4f53\u4fe1\u606f\u5982\u4e0b\n\u7f51\u5740\uff1ahttps://www.cn-abs.com/\n",required:!0,"x-decorator":"FormItem","x-component":"Input.TextArea","x-component-props":{rows:8}}}},v={type:"Object",properties:{user_name:{type:"string",title:"\u7528\u6237\u540d","x-decorator":"FormItem","x-component":"Input","x-validator":[{required:!0,message:"\u8bf7\u8f93\u5165\u7528\u6237\u540d"}]},email_content:{type:"string",title:"\u90ae\u4ef6",default:"\u60a8\u597d\uff0c\n\u73b0\u5df2\u4e3a\u60a8\u5f00\u901aCNABS\u8d26\u53f7\uff0c\u5177\u4f53\u4fe1\u606f\u5982\u4e0b\n\u7f51\u5740\uff1ahttps://www.cn-abs.com/\n",required:!0,"x-decorator":"FormItem","x-component":"Input.TextArea","x-component-props":{rows:8},"x-reactions":"{{updateEmailContent}}"}}},w={type:"Object",properties:{user_name:{type:"string",title:"\u7528\u6237\u540d","x-decorator":"FormItem","x-component":"Input","x-validator":[{required:!0,message:"\u8bf7\u8f93\u5165\u7528\u6237\u540d"}]},email_content:{type:"string",title:"\u90ae\u4ef6",default:"\u60a8\u597d\uff0c\n\u73b0\u5df2\u4e3a\u60a8\u5f00\u901aCNABS\u8d26\u53f7\uff0c\u5177\u4f53\u4fe1\u606f\u5982\u4e0b\n\u7f51\u5740\uff1ahttps://www.cn-abs.com/\n",required:!0,"x-decorator":"FormItem","x-component":"Input.TextArea","x-component-props":{rows:8},"x-reactions":{dependencies:["user_name"],fulfill:{state:{value:'{{ `\u60a8\u597d\uff0c\n\u73b0\u5df2\u4e3a\u60a8\u5f00\u901aCNABS\u8d26\u53f7\uff0c\u5177\u4f53\u4fe1\u606f\u5982\u4e0b\n\n\u7f51\u5740\uff1ahttps://www.cn-abs.com/\n\u7528\u6237\u540d\uff1a`+ ($deps[0]?$deps[0]:"") + "\\n\u5bc6\u7801\uff1awelcome\\n\\n\u6b22\u8fce\u60a8\u767b\u5f55\u4f7f\u7528\u5e76\u63d0\u51fa\u5b9d\u8d35\u610f\u89c1\uff01"}}'}}}}}},I=n("C9Mp"),F=(n("LbN8"),n("nKUr")),S=function(e){var t=Object(a["useRef"])(null),n=function(){var t=Object(r["a"])(i.a.mark((function t(n){var o,r,c,a,l,s,u,m;return i.a.wrap((function(t){while(1)switch(t.prev=t.next){case 0:return t.next=2,e.dispatch({type:"apiList/getApiList",payload:n});case 2:return o=t.sent,r=o||{},c=r.items,a=void 0===c?[]:c,l=r.current_page,s=void 0===l?1:l,u=r.total_items,m=void 0===u?0:u,t.abrupt("return",{data:a,current:s,total:m});case 5:case"end":return t.stop()}}),t)})));return function(e){return t.apply(this,arguments)}}(),c=function(){t.current.show(!0)},l=function(){t.current.show(!1,(function(){s["d"].success({title:"\u6210\u529f\u4e86\uff01",content:"hhhhhhhhhhhh"})}))};function x(e){return Object(F["jsx"])(s["j"],{schema:p,type:"link",title:"yyyyyy",onConfirm:function(e,t){console.log(e.values),t()},onOpen:function(t,n){n({initialValues:e})},children:"FormDialog"})}function b(){s["d"].confirm({title:"\u6210\u529f\u4e86\uff01",content:"hhhhhhhhhhhh"})}var f=Object(a["useRef"])(null);function S(){f.current.show(!0)}var _=Object(s["E"])({validateFirst:!0,values:{},effects:function(){Object(I["g"])("user_name",(function(e){void 0!==e.value&&_.setFieldState("email_content",(function(e){var t=_.values.user_name;t&&(e.value="".concat(e.initialValue,"\n\u7528\u6237\u540d\uff1a ").concat(t,"\n\u5bc6\u7801\uff1awelcome\n\n\u6b22\u8fce\u60a8\u767b\u5f55\u4f7f\u7528\u5e76\u63d0\u51fa\u5b9d\u8d35\u610f\u89c1\uff01"))}))}))}}),k=function(e){var t=e.query("user_name").take();if(t){var n=t.value||"";e.value="".concat(e.initialValue,"\n\u7528\u6237\u540d\uff1a ").concat(n,"\n\u5bc6\u7801\uff1awelcome\n\n\u6b22\u8fce\u60a8\u767b\u5f55\u4f7f\u7528\u5e76\u63d0\u51fa\u5b9d\u8d35\u610f\u89c1\uff01")}},C=Object(a["useState"])(0),A=Object(o["a"])(C,2),q=A[0],T=A[1],B=function(e){T(e)};return Object(F["jsxs"])(s["v"],{className:"test",children:[Object(F["jsx"])(s["b"],{onClick:c,children:"Modal\u5f39\u6846"}),Object(F["jsx"])(s["t"],{ref:t,title:"\u5f39\u6846",content:Object(F["jsx"])("div",{children:"hahahhah"}),width:420,onConfirm:l}),Object(F["jsx"])(s["y"],{children:Object(F["jsx"])(s["m"],{schema:m,renderButton:function(e){return Object(F["jsxs"])(F["Fragment"],{children:[Object(F["jsx"])(s["b"],{onClick:function(){return e.reset()},children:"\u91cd\u7f6e"}),Object(F["jsx"])(s["b"],{onClick:function(){return e.submit(console.log)},children:"\u786e\u8ba4\u8f93\u5165"})]})},initialValues:{input:"125"}})}),Object(F["jsxs"])(s["y"],{children:[Object(F["jsx"])(s["j"],{schema:m,formOptions:{initialValues:{input:"354"}},title:"button\u5f39\u7a97",onConfirm:function(e){return console.log(e.values)},children:"\u70b9\u51fb\u6253\u5f00\u5f39\u7a97"}),Object(F["jsx"])(s["j"],{schema:m,formOptions:{initialValues:{input:"256"}},type:"link",title:"link\u5f39\u7a97",onConfirm:function(e,t){"12345678912"===e.values.input?(s["s"].error("\u62a5\u9519\u4e86\uff01"),d["a"].throw()):(s["s"].error("\u6210\u529f\u4e86\uff01"),console.log(e.values),t(e))},children:"\u70b9\u51fb\u6253\u5f00\u5f39\u7a97"})]}),Object(F["jsxs"])(s["y"],{children:[Object(F["jsx"])(s["b"],{color:"blue",children:"\u70b9\u51fb\u5f39\u6846"}),Object(F["jsx"])(s["b"],{color:"green",children:"\u70b9\u51fb\u5f39\u6846"}),Object(F["jsx"])(s["b"],{color:"red",children:"\u70b9\u51fb\u5f39\u6846"}),Object(F["jsx"])(s["b"],{color:"white",children:"\u70b9\u51fb\u5f39\u6846"}),Object(F["jsx"])(s["b"],{color:"yellow",children:"\u70b9\u51fb\u5f39\u6846"})]}),Object(F["jsx"])(s["y"],{children:Object(F["jsx"])(s["r"],{itemSource:[{text:"\u7f16\u8f91",onClick:function(){return s["s"].success("hhh")}},{text:"\u65b0\u9875\u9762\u6253\u5f00",to:h["a"].home,target:"_blank"},{text:"\u672c\u9875\u9762\u6253\u5f00",to:h["a"].home}]})}),Object(F["jsx"])(s["y"],{children:Object(F["jsx"])(s["z"],{type:u["d"].organization})}),Object(F["jsxs"])(s["y"],{children:[Object(F["jsx"])(s["u"],{title:"\u67e5\u8be2\u8868\u683c",portType:"",request:n,columns:j(),operations:function(e){var t=e.onDelete,n=e.onUpdate,o=e.toGo;return[{name:"\u914d\u7f6e",action:o,pathname:h["a"].apiAuthorize},{name:"\u7f16\u8f91",action:n,selfTrigger:!0},{name:"\u5220\u9664",action:t},{name:"FormDialog",action:x,selfTrigger:!0},{name:"Confirm",action:b},{name:"Modal",action:S}]},defaultSchema:p,pagination:{pageSize:10}}),Object(F["jsx"])(s["t"],{ref:f,title:"\u5f39\u6846",content:Object(F["jsx"])("div",{children:"hahahhah"}),width:420,onConfirm:console.log})]}),Object(F["jsx"])("br",{}),Object(F["jsx"])("h1",{children:"Formily \u8868\u5355\u8054\u52a8\u7684\u4e94\u79cd\u5b9e\u73b0\u65b9\u6848:"}),Object(F["jsx"])("small",{children:"\u9700\u6c42\uff1a\u7528\u6237\u540d\u662f\u90ae\u4ef6\u5185\u5bb9\u7684\u4e00\u90e8\u5206\uff0c\u90ae\u4ef6\u663e\u793a\u9ed8\u8ba4\u5185\u5bb9\u4e0e\u7528\u6237\u540d\u8054\u52a8\u62fc\u63a5"}),Object(F["jsx"])("h3",{children:"\u4e3b\u52a8\u8054\u52a8"}),Object(F["jsxs"])(s["y"],{children:[Object(F["jsx"])(s["b"],{block:!0,type:"link",onClick:function(){return B(0)},children:"1.\u5c40\u90e8\u8868\u8fbe\u5f0f"}),Object(F["jsx"])(s["b"],{block:!0,type:"link",onClick:function(){return B(1)},children:"2.\u57fa\u4e8e run \u8bed\u53e5"}),Object(F["jsx"])(s["b"],{block:!0,type:"link",onClick:function(){return B(2)},children:"3.\u57fa\u4e8e\u751f\u547d\u5468\u671f\u94a9\u5b50"})]}),Object(F["jsx"])("h3",{children:"\u88ab\u52a8\u8054\u52a8"}),Object(F["jsxs"])(s["y"],{children:[Object(F["jsx"])(s["b"],{block:!0,type:"link",onClick:function(){return B(3)},children:"4.\u51fd\u6570\u5f0f\u5199\u6cd5"}),Object(F["jsx"])(s["b"],{block:!0,type:"link",onClick:function(){return B(4)},children:"5. \u5c40\u90e8\u8868\u8fbe\u5f0f"})]}),0===q&&Object(F["jsx"])(s["m"],{form:_,schema:g,renderButton:function(){return Object(F["jsx"])(s["C"],{onSubmit:console.log,onSubmitFailed:console.log,children:"\u63d0\u4ea4"})}}),1===q&&Object(F["jsx"])(s["m"],{form:_,schema:y,renderButton:function(){return Object(F["jsx"])(s["C"],{onSubmit:console.log,onSubmitFailed:console.log,children:"\u63d0\u4ea4"})}}),2===q&&Object(F["jsx"])(s["m"],{form:_,schema:O,renderButton:function(){return Object(F["jsx"])(s["C"],{onSubmit:console.log,onSubmitFailed:console.log,children:"\u63d0\u4ea4"})}}),3===q&&Object(F["jsx"])(s["m"],{form:_,scope:{updateEmailContent:k},schema:v,renderButton:function(){return Object(F["jsx"])(s["C"],{onSubmit:console.log,onSubmitFailed:console.log,children:"\u63d0\u4ea4"})}}),4===q&&Object(F["jsx"])(s["m"],{form:_,schema:w,renderButton:function(){return Object(F["jsx"])(s["C"],{onSubmit:console.log,onSubmitFailed:console.log,children:"\u63d0\u4ea4"})}})]})},_=function(){};t["default"]=Object(l["a"])(_)(S)},LbN8:function(e,t,n){},uw4f:function(e,t,n){"use strict";n.d(t,"a",(function(){return r}));var o=n("fWQN"),r=function e(){Object(o["a"])(this,e)};r.home="/home",r.userSetting="/api/user/setting",r.apiAuthorize="/api/apilist/authorize",r.awardDetail="/award/list/detail",r.vipAuthorizeCreate="/vip/authorize/create",r.product=function(e){return"".concat("http://192.168.15.221:10000/app","/product.html#/detail/basic-info?deal_id=").concat(e)},r.organization=function(e){return"".concat("http://192.168.15.221:10000/app","/organization.html#/detail/info?organization_id=").concat(e)},r.expert=function(e){return"".concat("http://192.168.15.221:10000/app","/expert.html#/resume?id=").concat(e)},r.accountLog=function(e,t){return"/account/list/log?id=".concat(e,"&name=").concat(t)},r.realNameDetail=function(e,t){return"/account/realname/detail?id=".concat(e,"&name=").concat(t)},r.orgLog=function(e,t){return"/organization/list/log?id=".concat(e,"&name=").concat(t)},r.orgRelateUser=function(e,t){return"/organization/list/user?id=".concat(e,"&name=").concat(t)}}}]);