(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[592],{9066:function(e,r,t){(window.__NEXT_P=window.__NEXT_P||[]).push(["/services/add-service",function(){return t(7977)}])},7977:function(e,r,t){"use strict";t.r(r),t.d(r,{default:function(){return k}});var s=t(4051),l=t.n(s),n=t(5893),i=t(7536),a=t(5496),o=t(3400),u=t(2296),c=t(5524),d=t(7294),v=t(3272),f=t(1534),m=t(8152),x=t(5538),p=t(1163),g=t(4574),h=t(7313),b=t(4231),w=t(7674),j=t(9220),y=t(5761),U=function(e){var r=e.defaultIndex,t=void 0===r?0:r,s=e.valueSelected,l=(0,p.useRouter)(),i=[(0,g.K)("service.register.type.website",l.locale),(0,g.K)("service.register.type.mobile",l.locale),(0,g.K)("service.register.type.desktop",l.locale)];return(0,n.jsxs)("div",{className:"flex flex-row justify-between items-center",children:[(0,n.jsx)("label",{className:"ml-2",children:(0,g.K)("service.register.type",l.locale)}),(0,n.jsxs)(j.Z,{defaultValue:i[t],optionSelected:s,children:[(0,n.jsx)(y.Z,{value:i[0],index:0,children:i[0]}),(0,n.jsx)(y.Z,{value:i[1],index:1,children:i[1]}),(0,n.jsx)(y.Z,{value:i[2],index:2,children:i[2]})]})]})},N=t(8822);function Z(e,r,t,s,l,n,i){try{var a=e[n](i),o=a.value}catch(u){return void t(u)}a.done?r(o):Promise.resolve(o).then(s,l)}function _(e){return function(){var r=this,t=arguments;return new Promise((function(s,l){var n=e.apply(r,t);function i(e){Z(n,s,l,i,a,"next",e)}function a(e){Z(n,s,l,i,a,"throw",e)}i(void 0)}))}}var k=(0,h.H)((function(){var e,r,t,s,h,j=(0,d.useState)(0),y=j[0],Z=j[1],k=(0,d.useState)(0),K=k[0],S=k[1],W=new f.x3,H=(0,p.useRouter)(),R=(0,d.useRef)(new AbortController),z=function(e,r){var t=function(e){return(0,m.Og)(r)!==f.UW.Website||!!e&&(0,m.Og)(r)===f.UW.Website&&""!=e};return b.Ry({serviceName:b.Z_().required((0,g.K)("error.empty",e.locale)),description:b.Z_().max(100,(0,g.K)("error.max",e.locale).replace("{X}","100")),authorizeUrl:b.Z_().test("test-service-type-authorize",(0,g.K)("error.empty",e.locale),(function(e){return t(e)})),url:b.Z_().test("test-service-type-url",(0,g.K)("error.empty",e.locale),(function(e){return t(e)})),logoutHookUrl:b.Z_()}).required()}(H,K),E=(0,i.cI)({resolver:(0,a.X)(z)}),V=E.register,q=E.handleSubmit,O=E.formState.errors;(0,d.useEffect)((function(){return function(){R.current.abort()}}),[]);var P=function(){var e=_(l().mark((function e(r){var t,s,n;return l().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return t=(0,m.Og)(K),s=(0,m.iF)(y),n={url:t===f.UW.Website?r.url:null,serviceName:r.serviceName,description:r.description,logoutHookURL:r.logoutHookUrl,authorizeURL:t===f.UW.Website?r.authorizeUrl:null,serviceType:t,minimumAuthMethod:t===f.UW.Website?s:f.Hi.Password},e.next=5,C(n);case 5:case"end":return e.stop()}}),e)})));return function(r){return e.apply(this,arguments)}}(),C=function(){var e=_(l().mark((function e(r){var t;return l().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,e.next=3,W.servicesManagerCreateService(r,{signal:R.current.signal});case 3:t=e.sent,(0,x.Am)(t.data.message),H.back(),e.next=11;break;case 8:e.prev=8,e.t0=e.catch(0),(0,N.U)(e.t0);case 11:case"end":return e.stop()}}),e,null,[[0,8]])})));return function(r){return e.apply(this,arguments)}}();return(0,n.jsxs)("section",{className:"pt-3 px-8 sm:h-screen",children:[(0,n.jsx)(v.Z,{title:(0,g.K)("service.register",H.locale)}),(0,n.jsxs)("form",{onSubmit:q(P),className:"flex flex-col items-center justify-center sm:h-90pr mt-20 sm:mt-0",children:[(0,n.jsxs)("div",{className:"flex sm:flex-row flex-col w-full justify-center",children:[(0,n.jsxs)("div",{className:"flex flex-col gap-5 sm:w-1/3 w-full sm:px-8",children:[(0,n.jsx)(U,{defaultIndex:K,valueSelected:function(e){S(e)}}),(0,n.jsx)(o.Z,{name:"serviceName",labelValue:(0,g.K)("service.register.name",H.locale),type:"text",required:!0,error:null===(e=O.serviceName)||void 0===e?void 0:e.message,register:V}),(0,n.jsx)(u.Z,{name:"description",labelValue:(0,g.K)("service.register.desc",H.locale),type:"text",error:null===(r=O.description)||void 0===r?void 0:r.message,register:V}),0==K&&(0,n.jsx)(w.Z,{defaultIndex:y,valueSelected:function(e){Z(e)}})]}),0==K&&(0,n.jsxs)("div",{className:"flex flex-col gap-5 sm:w-1/3 w-full sm:px-8 sm:mt-0 mt-4",children:[(0,n.jsx)(o.Z,{name:"url",labelValue:"URL",required:!0,type:"text",error:null===(t=O.url)||void 0===t?void 0:t.message,register:V}),(0,n.jsx)(o.Z,{name:"authorizeUrl",labelValue:(0,g.K)("service.register.authUrl",H.locale),type:"text",required:!0,error:null===(s=O.authorizeUrl)||void 0===s?void 0:s.message,register:V}),(0,n.jsx)(o.Z,{name:"logoutHookUrl",labelValue:(0,g.K)("service.register.logoutUrl",H.locale),type:"text",error:null===(h=O.logoutHookUrl)||void 0===h?void 0:h.message,register:V})]})]}),(0,n.jsx)(c.Z,{label:(0,g.K)("general.register",H.locale),className:"btn bg-dark mt-20",submit:!0})]})]})}))}},function(e){e.O(0,[978,567,774,888,179],(function(){return r=9066,e(e.s=r);var r}));var r=e.O();_N_E=r}]);