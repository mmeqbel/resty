(this.webpackJsonpsrc=this.webpackJsonpsrc||[]).push([[0],[,,,,,,,,,,,,,,function(e,t,n){},function(e,t,n){},,function(e,t,n){},,function(e,t,n){},function(e,t,n){},function(e,t,n){},function(e,t,n){"use strict";n.r(t);var r=n(1),c=n.n(r),a=n(8),s=n.n(a),u=(n(14),n(2)),l=n(3),i=n(5),o=n(4),j=(n(15),n(0));var h=function(){return Object(j.jsx)("header",{children:"RESTy"})};n(17);var d=function(){return Object(j.jsx)("footer",{children:"\xa9 2021"})},b=n(7),O=n.n(b),p=n(9),f=(n(19),function(e){Object(i.a)(n,e);var t=Object(o.a)(n);function n(e){var r;return Object(u.a)(this,n),(r=t.call(this,e)).formHandler=function(e){e.preventDefault();try{var t=e.target.url.value;e.target.method.value;r.getData(t)}catch(n){}},r.getData=function(){var e=Object(p.a)(O.a.mark((function e(t){var n,c;return O.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,e.next=3,fetch(t);case 3:return n=e.sent,e.next=6,n.json();case 6:c=e.sent,r.state.handler(c.results),e.next=12;break;case 10:e.prev=10,e.t0=e.catch(0);case 12:case"end":return e.stop()}}),e,null,[[0,10]])})));return function(t){return e.apply(this,arguments)}}(),r.state={handler:e.handler},r}return Object(l.a)(n,[{key:"render",value:function(){return Object(j.jsx)(j.Fragment,{children:Object(j.jsxs)("form",{onSubmit:this.formHandler,children:[Object(j.jsx)("label",{htmlFor:"url",children:"URL"}),Object(j.jsx)("input",{type:"text",name:"url"}),Object(j.jsx)("input",{type:"submit",value:"Go"}),Object(j.jsx)("br",{}),Object(j.jsx)("label",{htmlFor:"method",children:"Get"}),Object(j.jsx)("input",{type:"radio",name:"method",value:"get"}),Object(j.jsx)("label",{htmlFor:"method",children:"Post"}),Object(j.jsx)("input",{type:"radio",name:"method",value:"post"}),Object(j.jsx)("label",{htmlFor:"method",children:"Put"}),Object(j.jsx)("input",{type:"radio",name:"method",value:"put"}),Object(j.jsx)("label",{htmlFor:"method",children:"delete"}),Object(j.jsx)("input",{type:"radio",name:"method",value:"delete"})]})})}}]),n}(c.a.Component));n(20);var m=function(e){var t=e.result;return Object(j.jsx)("div",{className:"json",children:Object(j.jsx)("pre",{children:JSON.stringify(t,null,4)})})},x=(n(21),function(e){Object(i.a)(n,e);var t=Object(o.a)(n);function n(e){var r;return Object(u.a)(this,n),(r=t.call(this,e)).handler=function(e){r.setState({result:e})},r.state={result:[]},r}return Object(l.a)(n,[{key:"render",value:function(){return Object(j.jsxs)("div",{className:"App",children:[Object(j.jsx)(h,{}),Object(j.jsx)(f,{prompt:"get result",handler:this.handler}),Object(j.jsx)(m,{result:this.state.result}),Object(j.jsx)(d,{})]})}}]),n}(r.Component)),v=function(e){e&&e instanceof Function&&n.e(3).then(n.bind(null,23)).then((function(t){var n=t.getCLS,r=t.getFID,c=t.getFCP,a=t.getLCP,s=t.getTTFB;n(e),r(e),c(e),a(e),s(e)}))};s.a.render(Object(j.jsx)(c.a.StrictMode,{children:Object(j.jsx)(x,{})}),document.getElementById("root")),v()}],[[22,1,2]]]);
//# sourceMappingURL=main.99012867.chunk.js.map