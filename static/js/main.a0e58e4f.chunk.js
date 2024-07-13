(this["webpackJsonpshopping-cart"]=this["webpackJsonpshopping-cart"]||[]).push([[0],{183:function(e,t,a){e.exports=a(337)},192:function(e,t,a){},193:function(e,t,a){},194:function(e,t,a){},195:function(e,t,a){},196:function(e,t,a){},197:function(e,t,a){},198:function(e,t,a){},337:function(e,t,a){"use strict";a.r(t);var r=a(0),n=a.n(r),c=a(15),o=a.n(c);Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));var i=a(22),s=(a(135),a(192),a(193),a(194),a(195),a(196),a(197),a(198),a(199),a(44)),l=a(179),u=a(7),d=a.n(u),p=a(6),m=a(48),f={loginModal:{isVisible:!1},error:{message:null},user:{data:null,loading:!1},products:{data:[],loading:!0},cart:{data:[],loading:!1},orders:{data:[],loading:!0},categories:{data:[],loading:!0}},g=f.products,b=Object(m.a)({name:"products",initialState:g,reducers:{fetchProductsRequest:function(e){e.loading=!0},fetchProductsFailure:function(e){e.loading=!1},fetchProductsSuccess:function(e,t){e.data=t.payload,e.loading=!1},resetProducts:function(e){e.data=[]}}}),E=f.error,O=Object(m.a)({name:"error",initialState:E,reducers:{setErrorMsg:function(e,t){console.log({state:e,action:t}),e.message=t.payload},resetErrorMsg:function(e){e.message=null}}}),v=function(e){var t;return((null===(t=e.response)||void 0===t?void 0:t.data)||{status:!1,message:"Unexpected error",errors:[]}).message},h=a(56),j=a(45),y=a(162),x=a.n(y).a.create({baseURL:"https://shopping-cart-server-production-6923.up.railway.app/v1"});x.interceptors.request.use(function(){var e=Object(j.a)(d.a.mark((function e(t){var a;return d.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(!(a=localStorage.getItem("token"))){e.next=3;break}return e.abrupt("return",Object(h.a)(Object(h.a)({},t),{},{headers:{Authorization:a}}));case 3:return e.abrupt("return",t);case 4:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}(),(function(e){return Promise.reject(e)}));var C={categories:function(){return x.get("/categories")},products:function(e){return x.get("/products",{params:e})},getCart:function(){return x.get("/cart")},addToCart:function(e){return x.post("/cart",e)},removeFromCart:function(e){return x.put("/cart",e)},register:function(e){return x.post("/register",e)}};C.login=function(){var e=Object(j.a)(d.a.mark((function e(t){return d.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.abrupt("return",x.post("/login",t));case 1:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}(),C.profile=function(){return x.get("/profile")},C.getMyOrders=function(){return x.get("/order")},C.placeOrder=function(e){return x.post("/order",e)};var w=C,k=d.a.mark(q),S=d.a.mark(M);function q(){return d.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,Object(p.d)(b.actions.fetchProductsRequest,M);case 2:case"end":return e.stop()}}),k)}function M(e){var t,a;return d.a.wrap((function(r){for(;;)switch(r.prev=r.next){case 0:return r.prev=0,r.next=3,Object(p.b)(w.products,e.payload);case 3:return t=r.sent,r.next=6,Object(p.c)(b.actions.fetchProductsSuccess(t.data.data));case 6:r.next=13;break;case 8:return r.prev=8,r.t0=r.catch(0),a=v(r.t0),r.next=13,Object(p.a)([Object(p.c)(b.actions.fetchProductsFailure(a)),Object(p.c)(O.actions.setErrorMsg(a))]);case 13:case"end":return r.stop()}}),S,null,[[0,8]])}var R=f.categories,P=Object(m.a)({name:"categories",initialState:R,reducers:{fetchCategoriesRequest:function(e){e.loading=!0},fetchCategoriesFailure:function(e,t){e.loading=!1},fetchCategoriesSuccess:function(e,t){e.data=t.payload,e.loading=!1},resetCategories:function(e){e.data=[]}}}),I=d.a.mark(T),U=d.a.mark(F);function T(){return d.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,Object(p.d)(P.actions.fetchCategoriesRequest,F);case 2:case"end":return e.stop()}}),I)}function F(){var e,t;return d.a.wrap((function(a){for(;;)switch(a.prev=a.next){case 0:return a.prev=0,a.next=3,Object(p.b)(w.categories);case 3:return e=a.sent,a.next=6,Object(p.c)(P.actions.fetchCategoriesSuccess(e.data.data));case 6:a.next=13;break;case 8:return a.prev=8,a.t0=a.catch(0),t=v(a.t0),a.next=13,Object(p.a)([Object(p.c)(P.actions.fetchCategoriesFailure(t)),Object(p.c)(O.actions.setErrorMsg(t))]);case 13:case"end":return a.stop()}}),U,null,[[0,8]])}var D=f.user,L=Object(m.a)({name:"user",initialState:D,reducers:{fetchUserRequest:function(e){e.loading=!0},fetchUserFailure:function(e,t){e.loading=!1},fetchUserSuccess:function(e,t){e.data=t.payload,e.loading=!1},registerUserRequest:function(e,t){e.loading=!0},registerUserFailure:function(e,t){e.loading=!1},registerUserSuccess:function(e,t){localStorage.setItem("token",t.payload.token),e.data=t.payload.user,e.loading=!1},loginUserRequest:function(e,t){e.loading=!0},loginUserFailure:function(e,t){e.loading=!1},loginUserSuccess:function(e,t){localStorage.setItem("token",t.payload.token),e.data=t.payload.user,e.loading=!1},resetUser:function(e){e.data=null}}}),V=f.cart,z=Object(m.a)({name:"cart",initialState:V,reducers:{fetchCartRequest:function(e){e.loading=!0},fetchCartFailure:function(e,t){e.loading=!1},fetchCartSuccess:function(e,t){e.data=t.payload,e.loading=!1},addToCartRequest:function(e){e.loading=!0},addToCartFailure:function(e){e.loading=!1},addToCartSuccess:function(e,t){e.loading=!1},removeFromCartRequest:function(e){e.loading=!0},removeFromCartFailure:function(e){e.loading=!1},removeFromCartSuccess:function(e){e.loading=!1},updateCartRequest:function(e){e.loading=!0},updateCartFailure:function(e,t){e.loading=!1},updateCartSuccess:function(e,t){e.loading=!1},resetCart:function(e){e.data=[]}}}),A=f.loginModal,_=Object(m.a)({name:"loginModal",initialState:A,reducers:{setLoginModalVisible:function(e){e.isVisible=!e.isVisible}}}),B=d.a.mark(G),W=d.a.mark(Y),N=d.a.mark(J),H=d.a.mark(X);function G(){return d.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,Object(p.d)(L.actions.fetchUserRequest,Y);case 2:return e.next=4,Object(p.d)(L.actions.registerUserRequest,J);case 4:return e.next=6,Object(p.d)(L.actions.loginUserRequest,X);case 6:case"end":return e.stop()}}),B)}function Y(){var e,t;return d.a.wrap((function(a){for(;;)switch(a.prev=a.next){case 0:return a.prev=0,a.next=3,Object(p.b)(w.profile);case 3:return e=a.sent,a.next=6,Object(p.a)([Object(p.c)(L.actions.fetchUserSuccess(e.data.data)),Object(p.c)(z.actions.fetchCartRequest())]);case 6:a.next=13;break;case 8:return a.prev=8,a.t0=a.catch(0),t=v(a.t0),a.next=13,Object(p.a)([Object(p.c)(L.actions.fetchUserFailure(t)),Object(p.c)(O.actions.setErrorMsg(t))]);case 13:case"end":return a.stop()}}),W,null,[[0,8]])}function J(e){var t,a;return d.a.wrap((function(r){for(;;)switch(r.prev=r.next){case 0:return r.prev=0,r.next=3,Object(p.b)(w.register,e.payload);case 3:return t=r.sent,r.next=6,Object(p.a)([Object(p.c)(L.actions.registerUserSuccess(t.data.data)),Object(p.c)(z.actions.fetchCartRequest()),Object(p.c)(_.actions.setLoginModalVisible())]);case 6:r.next=13;break;case 8:return r.prev=8,r.t0=r.catch(0),a=v(r.t0),r.next=13,Object(p.a)([Object(p.c)(L.actions.registerUserFailure(a)),Object(p.c)(O.actions.setErrorMsg(a))]);case 13:case"end":return r.stop()}}),N,null,[[0,8]])}function X(e){var t,a;return d.a.wrap((function(r){for(;;)switch(r.prev=r.next){case 0:return r.prev=0,r.next=3,Object(p.b)(w.login,e.payload);case 3:return t=r.sent,r.next=6,Object(p.a)([Object(p.c)(L.actions.loginUserSuccess(t.data.data)),Object(p.c)(z.actions.fetchCartRequest()),Object(p.c)(_.actions.setLoginModalVisible())]);case 6:r.next=13;break;case 8:return r.prev=8,r.t0=r.catch(0),a=v(r.t0),r.next=13,Object(p.a)([Object(p.c)(L.actions.loginUserFailure(a)),Object(p.c)(O.actions.setErrorMsg(a))]);case 13:case"end":return r.stop()}}),H,null,[[0,8]])}var K=d.a.mark(ee),Q=d.a.mark(te),$=d.a.mark(ae),Z=d.a.mark(re);function ee(){return d.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,Object(p.d)(z.actions.fetchCartRequest,te);case 2:return e.next=4,Object(p.d)(z.actions.addToCartRequest,ae);case 4:return e.next=6,Object(p.d)(z.actions.removeFromCartRequest,re);case 6:case"end":return e.stop()}}),K)}function te(){var e,t;return d.a.wrap((function(a){for(;;)switch(a.prev=a.next){case 0:return a.prev=0,a.next=3,Object(p.b)(w.getCart);case 3:return e=a.sent,a.next=6,Object(p.c)(z.actions.fetchCartSuccess(e.data.data));case 6:a.next=13;break;case 8:return a.prev=8,a.t0=a.catch(0),t=v(a.t0),a.next=13,Object(p.a)([Object(p.c)(z.actions.fetchCartFailure(t)),Object(p.c)(O.actions.setErrorMsg(t))]);case 13:case"end":return a.stop()}}),Q,null,[[0,8]])}function ae(e){var t,a;return d.a.wrap((function(r){for(;;)switch(r.prev=r.next){case 0:return r.prev=0,r.next=3,Object(p.b)(w.addToCart,e.payload);case 3:return t=r.sent,r.next=6,Object(p.a)([Object(p.c)(z.actions.addToCartSuccess(t.data.data)),Object(p.c)(z.actions.fetchCartRequest())]);case 6:r.next=13;break;case 8:return r.prev=8,r.t0=r.catch(0),a=v(r.t0),r.next=13,Object(p.a)([Object(p.c)(z.actions.addToCartFailure(a)),Object(p.c)(O.actions.setErrorMsg(a))]);case 13:case"end":return r.stop()}}),$,null,[[0,8]])}function re(e){var t,a;return d.a.wrap((function(r){for(;;)switch(r.prev=r.next){case 0:return r.prev=0,r.next=3,Object(p.b)(w.removeFromCart,e.payload);case 3:return t=r.sent,r.next=6,Object(p.a)([Object(p.c)(z.actions.removeFromCartSuccess(t.data.data)),Object(p.c)(z.actions.fetchCartRequest())]);case 6:r.next=13;break;case 8:return r.prev=8,r.t0=r.catch(0),a=v(r.t0),r.next=13,Object(p.a)([Object(p.c)(z.actions.removeFromCartFailure(a)),Object(p.c)(O.actions.setErrorMsg(a))]);case 13:case"end":return r.stop()}}),Z,null,[[0,8]])}var ne=f.orders,ce=Object(m.a)({name:"orders",initialState:ne,reducers:{fetchOrdersRequest:function(e){e.loading=!0},fetchOrdersFailure:function(e){e.loading=!1},fetchOrdersSuccess:function(e,t){e.data=t.payload,e.loading=!1},placeOrderRequest:function(e){e.loading=!0},placeOrderFailure:function(e){e.loading=!1},placeOrderSuccess:function(e){e.loading=!1},resetOrders:function(e){e.data=[]}}}),oe=d.a.mark(le),ie=d.a.mark(ue),se=d.a.mark(de);function le(){return d.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,Object(p.d)(ce.actions.fetchOrdersRequest,ue);case 2:return e.next=4,Object(p.d)(ce.actions.placeOrderRequest,de);case 4:case"end":return e.stop()}}),oe)}function ue(){var e,t;return d.a.wrap((function(a){for(;;)switch(a.prev=a.next){case 0:return a.prev=0,a.next=3,Object(p.b)(w.getMyOrders);case 3:return e=a.sent,a.next=6,Object(p.a)([Object(p.c)(ce.actions.fetchOrdersSuccess(e.data.data)),Object(p.c)(z.actions.fetchCartRequest())]);case 6:a.next=13;break;case 8:return a.prev=8,a.t0=a.catch(0),t=v(a.t0),a.next=13,Object(p.a)([Object(p.c)(ce.actions.fetchOrdersFailure(t)),Object(p.c)(O.actions.setErrorMsg(t))]);case 13:case"end":return a.stop()}}),ie,null,[[0,8]])}function de(e){var t,a,r,n,c,o;return d.a.wrap((function(i){for(;;)switch(i.prev=i.next){case 0:return console.log({order:e.payload}),t=e.payload,a=t.resolve,r=t.reject,n=t.payload,i.prev=2,i.next=5,Object(p.b)(w.placeOrder,n);case 5:return c=i.sent,a(),i.next=9,Object(p.a)([Object(p.c)(ce.actions.placeOrderSuccess(c.data.data)),Object(p.c)(z.actions.fetchCartRequest())]);case 9:i.next=17;break;case 11:return i.prev=11,i.t0=i.catch(2),r(),o=v(i.t0),i.next=17,Object(p.a)([Object(p.c)(ce.actions.placeOrderFailure(o)),Object(p.c)(O.actions.setErrorMsg(o))]);case 17:case"end":return i.stop()}}),se,null,[[2,11]])}var pe=d.a.mark(me);function me(){return d.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,Object(p.a)([T(),G(),ee(),q(),le()]);case 2:case"end":return e.stop()}}),pe)}var fe=Object(s.c)({products:b.reducer,categories:P.reducer,user:L.reducer,cart:z.reducer,error:O.reducer,loginModal:_.reducer,orders:ce.reducer}),ge=Object(l.a)(),be=window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__||s.d,Ee=[];Ee.push(ge);var Oe=[];Oe.push(s.a.apply(void 0,Ee));var ve=Object(s.e)(fe,be.apply(void 0,Oe));ge.run(me);var he=ve,je=a(38),ye=a(47),xe=a(55),Ce=a(346),we=a(19),ke=a(338),Se=a(342),qe=a(345),Me=a(176),Re=a(348),Pe=a(349),Ie=a(350),Ue=a(351),Te=ke.a.Header,Fe=Se.a.Search;var De={fetchUser:L.actions.fetchUserRequest,resetUser:L.actions.resetUser,setLoginModalVisible:_.actions.setLoginModalVisible},Le=Object(i.b)((function(e){return{}}),De)((function(e){var t=e.fetchUser,a=e.resetUser,c=e.setLoginModalVisible,o=Object(r.useState)(!1),s=Object(we.a)(o,2),l=s[0],u=s[1],p=Object(i.d)((function(e){return e})),m=p.user.data,f=p.cart.data,g=Object(je.g)(),b=Object(je.f)();Object(r.useEffect)((function(){localStorage.getItem("token")&&t()}),[t]);var E=function(){var e=Object(j.a)(d.a.mark((function e(){return d.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:u(!0),localStorage.removeItem("token"),setTimeout((function(){a(),u(!1),b.push("/")}),1e3);case 3:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}}();return n.a.createElement(Te,{style:{background:"white",padding:"0 20%",fontSize:"25px"}},n.a.createElement(ye.b,{to:"/"},n.a.createElement("div",{id:"logo"},n.a.createElement(Re.a,null),n.a.createElement("span",null,"\xa0SHOP"))),n.a.createElement(Fe,{style:{width:"50%","justify-content":"center",margin:"0 20px"},placeholder:"input search text",onSearch:function(e){var t=g.pathname.startsWith("/shopping-cart")?"/shopping-cart":"";window.location=g.pathname.startsWith("".concat(t,"/products"))?"".concat(g.pathname,"?search=").concat(e):"".concat(t,"/products?search=").concat(e)},enterButton:!0}),m&&n.a.createElement(ye.b,{to:"/cart"},n.a.createElement(qe.a,{count:f.length},n.a.createElement(Me.a,{title:"Cart"},n.a.createElement(Pe.a,{style:{fontSize:"30px",lineHeight:"100%"}})))),m&&n.a.createElement(ye.b,{to:"/orders"},n.a.createElement(Me.a,{title:"Orders"},n.a.createElement(Ie.a,{style:{fontSize:"28px",lineHeight:"100%"}}))),m?n.a.createElement(Me.a,{title:m.email},n.a.createElement(xe.a,{icon:n.a.createElement(Ue.a,null),onClick:E,style:{marginLeft:3},loading:l},"LOGOUT")):n.a.createElement(xe.a,{icon:n.a.createElement(Ue.a,null),onClick:c},"LOGIN / SIGNUP"))}));var Ve=function(e){var t=e.data;return n.a.createElement("div",{id:"image-wrapper"},n.a.createElement("img",{src:t.image,alt:t.name||"Category"}),n.a.createElement("div",{style:{position:"relative"},id:"category-wrapper"},n.a.createElement("span",{id:"category"},t.name||"category")))};var ze=function(e){var t=e.categories;return n.a.createElement("div",{id:"images-wrapper"},t.map((function(e){return n.a.createElement(ye.b,{to:"/products/".concat(e._id),key:e._id},n.a.createElement(Ve,{data:e,key:e._id}))})))},Ae=a(352);var _e=function(e){var t=e.isLoading,a=Object(r.useState)("flex"),c=Object(we.a)(a,2),o=c[0],i=c[1];return Object(r.useEffect)((function(){!t&&setTimeout((function(){return i("None")}),600)}),[t]),n.a.createElement("div",{id:"wrapper",style:{opacity:t?1:0,display:o,position:"absolute",zIndex:999,background:"rgba(0,0,0,0.8)",transition:"all 500ms"}},n.a.createElement(Ae.a,null))},Be=a(132),We=a(339),Ne=a(340),He=Be.a.TabPane,Ge={labelCol:{span:8},wrapperCol:{span:16}},Ye={wrapperCol:{offset:8,span:16}};function Je(e){var t=e.currentTab,a=e.registerUser,r=e.loginUser,c=e.isLoading,o=function(){var e=Object(j.a)(d.a.mark((function e(n){return d.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:2===parseInt(t)?a(Object(h.a)({},n)):r(Object(h.a)({},n));case 1:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}();return n.a.createElement(We.a,Object.assign({},Ge,{name:"basic",initialValues:{remember:!0},onFinish:o}),n.a.createElement(We.a.Item,{label:"Email",name:"email",rules:[{required:!0,message:"Please input your email!"}]},n.a.createElement(Se.a,null)),n.a.createElement(We.a.Item,{label:"Password",name:"password",rules:[{required:!0,message:"Please input your password!"}]},n.a.createElement(Se.a.Password,null)),n.a.createElement(We.a.Item,Ye,n.a.createElement(xe.a,{type:"primary",htmlType:"submit",disabled:c},c?n.a.createElement(Ae.a,{style:{color:"black"}}):"Submit")))}var Xe={registerUser:L.actions.registerUserRequest,loginUser:L.actions.loginUserRequest,setLoginModalVisible:_.actions.setLoginModalVisible},Ke=Object(i.b)((function(e){return{}}),Xe)((function(e){var t=e.registerUser,a=e.loginUser,c=e.setLoginModalVisible,o=Object(r.useState)(1),s=Object(we.a)(o,2),l=s[0],u=s[1],d=Object(i.d)((function(e){return e})),p=d.user.loading,m=d.loginModal.isVisible;return n.a.createElement("div",{id:"wrapper"},n.a.createElement(Ne.a,{centered:!0,visible:m,onOk:c,onCancel:c,footer:null},n.a.createElement(Be.a,{defaultActiveKey:"1",onChange:function(e){return u(e)}},["Login","Sign Up"].map((function(e,r){return n.a.createElement(He,{tab:e,key:r+1},n.a.createElement(Je,{currentTab:l,registerUser:t,loginUser:a,isLoading:p}))})))))}));var Qe=function(){var e=Object(i.c)(),t=Object(i.d)((function(e){return e})),a=t.categories,c=a.data,o=a.loading,s=t.error.message;return Object(r.useEffect)((function(){return e(P.actions.fetchCategoriesRequest()),function(){return e(P.actions.resetCategories())}}),[e]),n.a.createElement("div",null,n.a.createElement(_e,{isLoading:o}),n.a.createElement(Le,null),n.a.createElement("div",{id:"body"},n.a.createElement("div",{style:{display:"flex",flexDirection:"row-reverse",margin:"10px 0"}},n.a.createElement(ye.b,{to:"/products"},n.a.createElement(xe.a,{type:"primary",size:"medium"},"View All"))),n.a.createElement(ze,{categories:c})),n.a.createElement("div",{style:{position:"absolute",zIndex:10}},n.a.createElement(Ke,null)),s&&n.a.createElement("div",{id:"alert"},n.a.createElement(Ce.a,{message:"Error",description:s,type:"error",closable:!0})))},$e=a(89),Ze=a(95),et=a(87),tt=a.n(et),at=a(343),rt=a(347),nt=a(344),ct=a(353);var ot=function(e){var t=e.product;return n.a.createElement("div",null,n.a.createElement("h3",{style:{cursor:"default"}},t.name),n.a.createElement("div",null,n.a.createElement("span",{style:{fontWeight:"bold"}},"\u20b9",t.discountedPrice,"  "),t.discountedPrice!==t.actualPrice&&n.a.createElement("span",null,n.a.createElement("span",{style:{fontSize:11,color:"gray",textDecoration:"line-through",display:"inline-block",margin:"0 5px"}},"\u20b9",t.actualPrice),n.a.createElement("span",{style:{fontSize:10,color:"green",fontWeight:"bold",display:"inline-block",marginRight:10}},Math.round((t.actualPrice-t.discountedPrice)/t.actualPrice*100),"% OFF")),n.a.createElement("span",null,"(",t.stockCount," Left)")))};var it={addToCartRequest:z.actions.addToCartRequest,setErrorMsg:O.actions.setErrorMsg,resetErrorMsg:O.actions.resetErrorMsg},st=Object(i.b)((function(e){return{}}),it)((function(e){var t=e.product,a=e.isProductModalVisible,c=e.setIsProductModalVisible,o=e.addToCartRequest,s=e.setErrorMsg,l=e.resetErrorMsg,u=Object(r.useState)(0),p=Object(we.a)(u,2),m=p[0],f=p[1],g=Object(r.useState)(!1),b=Object(we.a)(g,2),E=b[0],O=b[1],v=Object(r.useState)(!1),h=Object(we.a)(v,2),y=h[0],x=h[1],C=Object(r.useState)(null),w=Object(we.a)(C,2),k=w[0],S=w[1],q=Object(i.d)((function(e){return e})),M=q.cart.data,R=q.user.data;Object(r.useEffect)((function(){"buy"===k?x(!0):"cart"===k&&O(!0)}),[k]);var P=Object(je.f)(),I=function(){var e=Object(j.a)(d.a.mark((function e(a){return d.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(R){e.next=2;break}return e.abrupt("return",(s("You need to login first"),setTimeout((function(){return l()}),2e3)));case 2:S("buy"===a?"buy":"cart"),o({productId:t._id,quantity:1}),O(!1),x(!1),"buy"===a&&P.push("/cart");case 7:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}();return n.a.createElement("div",null,n.a.createElement("div",null,n.a.createElement(Ne.a,{centered:!0,visible:a,onOk:function(){c(),f(0)},onCancel:function(){c(),f(0)},footer:null},t&&n.a.createElement("div",null,n.a.createElement("div",null,n.a.createElement("div",{style:{padding:10}},n.a.createElement(tt.a,{value:m,slides:Object(Ze.a)(t.images.map((function(e){return n.a.createElement("div",{id:"image",style:{backgroundImage:"url(".concat(e,")")}})}))),onChange:function(e){return f(e)}}),n.a.createElement(et.Dots,{value:m,onChange:function(e){return f(e)},number:t.images.length,thumbnails:Object(Ze.a)(t.images.map((function(e){return n.a.createElement("div",{id:"image",style:{backgroundImage:"url(".concat(e,")"),width:30,height:30,padding:0}})})))}))),n.a.createElement("div",null,n.a.createElement(ot,{product:t}),n.a.createElement("div",null,n.a.createElement("h4",{style:{marginTop:10}},"Highlights"),n.a.createElement("ul",{style:{fontSize:10,marginLeft:20}},t.features.map((function(e){return n.a.createElement("li",null,e)}))))),n.a.createElement("div",{style:{width:"65%",margin:"0 auto",display:"flex",justifyContent:"space-evenly"}},-1!==M.findIndex((function(e){return e.productId===t._id}))?n.a.createElement(ye.b,{to:"/cart"},n.a.createElement(xe.a,{type:"primary",onClick:function(){return!0}},"GO TO CART")):n.a.createElement(xe.a,{type:"primary",loading:E,onClick:I},"ADD TO CART"),n.a.createElement(xe.a,{type:"danger",loading:y,onClick:function(){return I("buy")}},"BUY NOW"))))))})),lt=at.a.Meta;var ut=function(){var e=Object(r.useState)(!1),t=Object(we.a)(e,2),a=t[0],c=t[1],o=Object(r.useState)(null),s=Object(we.a)(o,2),l=s[0],u=s[1],p=Object(r.useState)({}),m=Object(we.a)(p,2),f=m[0],g=m[1],E=Object(r.useState)(0),O=Object(we.a)(E,2),v=O[0],y=O[1],x=Object(je.g)(),C=Object(i.c)(),w=Object(i.d)((function(e){return e})),k=w.products,S=k.data,q=k.loading,M=w.error.message;Object(r.useEffect)((function(){return R(),function(){return C(b.actions.resetProducts())}}),[]),Object(r.useEffect)((function(){var e={};S.forEach((function(t,a){return e[a]=0})),g(Object(h.a)({},e))}),[S]);var R=function(){var e=Object(j.a)(d.a.mark((function e(){var t,a,r,n,c,o=arguments;return d.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:t=o.length>0&&void 0!==o[0]?o[0]:{},a=x.pathname,r=x.search,n=a.split("/"),c=n[n.length-1],n.length>2&&Object.assign(t,{categoryId:c}),r.replace("?","").split("&").forEach((function(e){var a=e.split("="),r=Object(we.a)(a,2),n=r[0],c=r[1];t[n]=c})),S&&(S.length&&!Object.keys(t).length||C(b.actions.fetchProductsRequest(t)));case 7:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}}();return n.a.createElement("div",null,n.a.createElement(_e,{isLoading:q}),n.a.createElement(Le,null),n.a.createElement("div",{id:"body"},n.a.createElement("div",{style:{display:"flex",flexDirection:"row",justifyContent:"space-between",padding:"0 20px 10px 0"}},n.a.createElement("div",null,n.a.createElement("h4",null,x.search?n.a.createElement("span",null,n.a.createElement("span",null,"Search results for "),n.a.createElement("span",{style:{fontWeight:"bold",display:"inline-block",marginRight:15}},x.search?x.search.replace("?","").split("&").filter((function(e){return e.startsWith("search")}))[0].split("=")[1]:""),n.a.createElement(xe.a,{type:"dashed",size:"small",onClick:function(){return window.location="/products"}},"Clear")):"")),n.a.createElement(rt.a,{overlay:n.a.createElement(nt.a,{onClick:function(e){y(e.key),R({sort:e.item.props.value})}},Object.entries({newest:"Newest","p-lth":"Price Low to High","p-htl":"Price High to Low"}).map((function(e,t){var a=Object(we.a)(e,2),r=a[0],c=a[1];return n.a.createElement(nt.a.Item,{key:t,value:r},n.a.createElement("span",{style:{color:parseInt(t)===parseInt(v)?"red":"black"}},c))})))},n.a.createElement("span",null,n.a.createElement("span",null,"Sort By "),n.a.createElement("span",null,q&&S.length?n.a.createElement(Ae.a,null):n.a.createElement(ct.a,null))))),n.a.createElement("div",{style:{display:"flex",flexWrap:"wrap",justifyContent:"space-evenly"}},S.map((function(e,t){return n.a.createElement(at.a,{hoverable:!0,style:{width:240,marginBottom:20},productId:e._id},n.a.createElement("div",{style:{padding:10}},n.a.createElement(tt.a,{value:f[t],slides:Object(Ze.a)(e.images.map((function(t){return n.a.createElement("div",{onClick:function(t){c(!0),u(e)},id:"image",style:{backgroundImage:"url(".concat(t,")")}})}))),onChange:function(e){return g(Object(h.a)(Object(h.a)({},f),{},Object($e.a)({},t,e)))}}),n.a.createElement(et.Dots,{value:f[t],onChange:function(e){return g(Object(h.a)(Object(h.a)({},f),{},Object($e.a)({},t,e)))},number:e.images.length})),n.a.createElement("div",{style:{textAlign:"center"}},n.a.createElement(ot,{product:e})),n.a.createElement(lt,{onClick:function(t){c(!0),u(e)},description:e.description,style:{textAlign:"center",padding:10,fontSize:12}}))})))),n.a.createElement("div",{style:{position:"absolute",zIndex:10}},n.a.createElement(Ke,null),n.a.createElement(st,{product:l,isProductModalVisible:a,setIsProductModalVisible:function(){return c(!a)}})),M&&n.a.createElement("div",{id:"alert"},n.a.createElement(Ce.a,{message:"Error",description:M,type:"error",closable:!0})))},dt=a(357),pt=a(356),mt=a(354),ft=a(355);var gt={addToCart:z.actions.addToCartRequest,removeFromCart:z.actions.removeFromCartRequest,setErrorMsg:O.actions.setErrorMsg},bt=Object(i.b)((function(e){return{}}),gt)((function(e){var t=e.quantity,a=e.stockCount,c=e.productId,o=e.setErrorMsg,s=e.addToCart,l=e.removeFromCart,u=Object(r.useState)(t||1),p=Object(we.a)(u,2),m=p[0],f=p[1],g=Object(r.useState)(!1),b=Object(we.a)(g,2),E=b[0],O=b[1],v=Object(r.useState)(!1),h=Object(we.a)(v,2),y=h[0],x=h[1],C=Object(r.useState)(null),w=Object(we.a)(C,2),k=w[0],S=w[1],q=Object(i.d)((function(e){return e})).cart.loading,M=function(){var e=Object(j.a)(d.a.mark((function e(){return d.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:S("inc"),a>0&&m+1?s({productId:c,quantity:1}):o("Out of stock");case 3:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}}(),R=function(){var e=Object(j.a)(d.a.mark((function e(){return d.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:S("dec"),m>1&&m-1?l({productId:c,quantity:1}):o("Out of stock");case 3:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}}();return Object(r.useEffect)((function(){f(t)}),[t]),Object(r.useEffect)((function(){"inc"===k?O(q):"dec"===k&&x(q)}),[q,k]),n.a.createElement("div",{style:{display:"grid",gridTemplateColumns:"1fr 1fr 1fr"}},n.a.createElement(xe.a,{type:"primary",icon:n.a.createElement(mt.a,null),size:"small",loading:y,onClick:R}),n.a.createElement("div",{style:{textAlign:"center",padding:2}},m),n.a.createElement(xe.a,{type:"primary",icon:n.a.createElement(ft.a,null),size:"small",loading:E,onClick:M}))}));var Et={removeFromCart:z.actions.removeFromCartRequest},Ot=Object(i.b)((function(e){return{}}),Et)((function(e){var t=e.item,a=e.setCurrentProduct,c=e.setIsProductModalVisible,o=e.removeFromCart,s=Object(r.useState)(!1),l=Object(we.a)(s,2),u=l[0],d=l[1],p=Object(i.d)((function(e){return e.cart.loading})),m=new Date;return m.setDate(m.getDate()+3),Object(r.useEffect)((function(){u&&u!==p&&d(p)}),[p]),n.a.createElement("div",{style:{display:"flex",padding:10,borderBottom:"1px solid #ccc"}},n.a.createElement("div",null,n.a.createElement("div",{onClick:function(){a(t.product),c(!0)},id:"image",style:{backgroundImage:"url(".concat(t.product.images?t.product.images[0]:"",")"),height:70,width:40,backgroundPosition:"left",padding:0}}),n.a.createElement("div",null,n.a.createElement(bt,{quantity:t.quantity,stockCount:t.product.stockCount,productId:t.productId}))),n.a.createElement("div",{style:{display:"grid",gridTemplateColumns:"65% 30% 5%",width:"100%"}},n.a.createElement("div",{onClick:function(){a(t.product),c(!0)}},n.a.createElement(ot,{product:t.product})),n.a.createElement("div",{style:{fontSize:11}},n.a.createElement("span",null,"Delivery by ",m.toDateString())),n.a.createElement("div",null,n.a.createElement(xe.a,{shape:"circle",icon:n.a.createElement(pt.a,null),size:"small",loading:u,onClick:function(){d(!0),o({productId:t.productId,quantity:t.quantity})}}))))}));var vt={fetchCart:z.actions.fetchCartRequest,resetCart:z.actions.resetCart,placeOrderRequest:ce.actions.placeOrderRequest},ht=Object(i.b)((function(e){return{}}),vt)((function(e){var t=e.fetchCart,a=e.resetCart,c=e.placeOrderRequest,o=Object(r.useState)(!1),s=Object(we.a)(o,2),l=s[0],u=s[1],p=Object(r.useState)(!1),m=Object(we.a)(p,2),f=m[0],g=m[1],b=Object(r.useState)(!1),E=Object(we.a)(b,2),O=E[0],v=E[1],h=Object(r.useState)(null),y=Object(we.a)(h,2),x=y[0],C=y[1],w=Object(je.f)(),k=Object(i.d)((function(e){return e})),S=k.cart,q=S.data,M=S.loading,R=k.error.message,P=new Date;P.setDate(P.getDate()+3),Object(r.useEffect)((function(){return t(),function(){return a()}}),[t,a]);var I=function(){var e=Object(j.a)(d.a.mark((function e(){var t;return d.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:g(!0),t={products:q.map((function(e){return{productId:e.productId,quantity:e.quantity}}))},new Promise((function(e,a){console.log({payload:t}),c({resolve:e,reject:a,payload:t})})).then((function(){return u(!0)})).finally((function(){return g(!1)}));case 3:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}}(),U=function(){return u(!1),w.push("/")};return n.a.createElement("div",null,n.a.createElement(_e,{isLoading:M}),n.a.createElement(Le,null),n.a.createElement("div",{style:{margin:"10px 20%",display:"grid",gridTemplateColumns:"70% 30%",gridGap:10}},n.a.createElement("div",{style:{border:"1px solid #ccc"}},n.a.createElement("h3",{style:{borderBottom:"1px solid #ccc",paddingLeft:10}},"My Cart (",q.length,")"),q.map((function(e){return n.a.createElement(Ot,{item:e,setCurrentProduct:function(e){return C(e)},setIsProductModalVisible:function(){return v(!0)}})}))),n.a.createElement("div",{style:{border:"1px solid #ccc"}},n.a.createElement("h3",{style:{borderBottom:"1px solid #ccc",paddingLeft:10}},"Price Details"),n.a.createElement("div",{style:{margin:"0 10px"}},n.a.createElement("div",{style:{display:"flex",justifyContent:"space-between",paddingBottom:10}},n.a.createElement("span",null,"Price (",q.length," ",q.length>1?"items":"item",")"),n.a.createElement("span",{style:{textAlign:"right"}},"\u20b9",q.reduce((function(e,t){return{total:e.total+t.quantity*t.product.discountedPrice}}),{total:0}).total)),n.a.createElement("div",{style:{display:"flex",justifyContent:"space-between",paddingBottom:10,borderBottom:"1px dashed #ccc"}},n.a.createElement("span",null,"Delivery Charges"),n.a.createElement("span",{style:{color:"green"}},"FREE")),n.a.createElement("div",{style:{fontSize:11,padding:"10px 0",textAlign:"center"}},"You will save"," ",n.a.createElement("span",{style:{color:"green"}},"\u20b9",q.reduce((function(e,t){return{total:e.total+t.quantity*(t.product.actualPrice-t.product.discountedPrice)}}),{total:0}).total)," on this order"),!!q.length&&n.a.createElement("div",{style:{display:"flex",justifyContent:"center",marginBottom:15}},n.a.createElement(xe.a,{type:"danger",loading:f,onClick:I},"PLACE ORDER"))))),n.a.createElement(Ne.a,{centered:!0,visible:l,onOk:U,onCancel:U,footer:null},n.a.createElement("div",{style:{textAlign:"center",paddingTop:24}},n.a.createElement(dt.a,{twoToneColor:"#52c41a",style:{fontSize:100,textAlign:"center"}}),n.a.createElement("h3",{style:{marginTop:20}},"Order Placed Successfully"))),n.a.createElement("div",{style:{position:"absolute",zIndex:10}},n.a.createElement(Ke,null),n.a.createElement(st,{product:x,isProductModalVisible:O,setIsProductModalVisible:function(){return v(!O)}})),R&&n.a.createElement("div",{id:"alert"},n.a.createElement(Ce.a,{message:"Error",description:R,type:"error",closable:!0})))})),jt=a(341),yt=a(358),xt=jt.a.Panel;var Ct={fetchOrders:ce.actions.fetchOrdersRequest,resetOrders:ce.actions.resetOrders},wt=Object(i.b)((function(e){return{}}),Ct)((function(e){var t=e.fetchOrders,a=e.resetOrders,c=Object(r.useState)(!1),o=Object(we.a)(c,2),s=o[0],l=o[1],u=Object(r.useState)(!1),d=Object(we.a)(u,2),p=d[0],m=d[1],f=Object(r.useState)(null),g=Object(we.a)(f,2),b=g[0],E=g[1],O=Object(je.f)(),v=Object(i.d)((function(e){return e})),h=v.orders,j=h.data,y=h.loading,x=v.error.message,C=new Date;C.setDate(C.getDate()+3),Object(r.useEffect)((function(){return t(),function(){return a()}}),[t,a]);var w=function(e){var t=new Date(e.createdAt);return t.setDate(t.getDate()+3),(t>new Date?"To be delivered by ":"Delivered on ")+t.toDateString()},k=function(){return l(!1),O.push("/")};return n.a.createElement("div",null,n.a.createElement(_e,{isLoading:y}),n.a.createElement(Le,null),n.a.createElement("div",{style:{margin:"10px 20%"}},n.a.createElement("h2",null,"My Orders"),n.a.createElement(jt.a,null,j.map((function(e){return n.a.createElement(xt,{header:"Order No : "+e._id,key:e._id,extra:n.a.createElement("div",null,n.a.createElement(yt.a,{style:{color:"#52c41a"}}),n.a.createElement("span",null," ",w(e)))},e.products.map((function(t){var a=t.product,r=t.quantity;return n.a.createElement("div",{style:{display:"grid",gridTemplateColumns:"10% 50% 20% 20%",borderBottom:"1px solid #ccc",padding:"0 10px"}},n.a.createElement("div",{onClick:function(){E(a),m(!0)},id:"image",style:{backgroundImage:"url(".concat((null===a||void 0===a?void 0:a.images[0])||"",")"),height:100,width:60,backgroundPosition:"left",padding:0}}),n.a.createElement("div",{style:{alignSelf:"center"}},n.a.createElement("h3",{style:{cursor:"default"},onClick:function(){E(a),m(!0)}},a.name),n.a.createElement("h4",null,"Quantity - ",r)),n.a.createElement("h3",{style:{alignSelf:"center"}},"\u20b9",a.discountedPrice),n.a.createElement("h4",{style:{alignSelf:"center"}},w(e)))})))})))),n.a.createElement(Ne.a,{centered:!0,visible:s,onOk:k,onCancel:k,footer:null},n.a.createElement("div",{style:{textAlign:"center",paddingTop:24}},n.a.createElement(dt.a,{twoToneColor:"#52c41a",style:{fontSize:100,textAlign:"center"}}),n.a.createElement("h3",{style:{marginTop:20}},"Order Placed Successfully"))),n.a.createElement("div",{style:{position:"absolute",zIndex:10}},n.a.createElement(Ke,null),n.a.createElement(st,{product:b,isProductModalVisible:p,setIsProductModalVisible:function(){return m(!p)}})),x&&n.a.createElement("div",{id:"alert"},n.a.createElement(Ce.a,{message:"Error",description:x,type:"error",closable:!0})))}));function kt(){var e=Object(je.g)();return n.a.createElement("div",null,n.a.createElement("h3",null,"No match for ",n.a.createElement("code",null,e.pathname)))}var St={resetErrorMsg:O.actions.resetErrorMsg},qt=Object(i.b)((function(e){return{errorMsg:e.error.message}}),St)((function(e){var t=e.errorMsg,a=e.resetErrorMsg;return Object(r.useEffect)((function(){t&&setTimeout(a,2e3)}),[t,a]),n.a.createElement(ye.a,{basename:"/shopping-cart"},n.a.createElement(je.c,null,n.a.createElement(je.a,{exact:!0,path:"/"},n.a.createElement(Qe,null)),n.a.createElement(je.a,{path:"/products"},n.a.createElement(ut,null)),n.a.createElement(je.a,{path:"/cart"},n.a.createElement(ht,null)),n.a.createElement(je.a,{path:"/orders"},n.a.createElement(wt,null)),n.a.createElement(je.a,{path:"*"},n.a.createElement(kt,null))))}));o.a.render(n.a.createElement(i.a,{store:he},n.a.createElement(n.a.StrictMode,null,n.a.createElement(qt,null))),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(e){e.unregister()})).catch((function(e){console.error(e.message)}))}},[[183,1,2]]]);
//# sourceMappingURL=main.a0e58e4f.chunk.js.map