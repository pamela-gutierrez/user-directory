(this["webpackJsonpuser-directory"]=this["webpackJsonpuser-directory"]||[]).push([[0],{20:function(e,t,n){},21:function(e,t,n){},23:function(e,t,n){},42:function(e,t,n){"use strict";n.r(t);var r=n(2),c=n.n(r),a=n(13),i=n.n(a),l=(n(20),n(3)),o=n(15),s=(n(21),n(0));var j=function(){return Object(s.jsxs)("div",{className:"header",children:[Object(s.jsx)("h1",{children:"Employee Directory"}),Object(s.jsx)("p",{children:'Click "name" to sort employees in alphabetical order.'})]})};n(23);var d=function(e){return Object(s.jsx)("form",{children:Object(s.jsxs)("div",{className:"mb-3",children:[Object(s.jsx)("label",{for:"exampleInputEmail1",className:"form-label"}),Object(s.jsx)("input",{type:"email",className:"form-control",id:"exampleInputEmail1","aria-describedby":"emailHelp",placeholder:"Search",onChange:e.handleSearch})]})})};var b=function(e){return Object(s.jsxs)("tr",{children:[Object(s.jsx)("td",{children:Object(s.jsx)("img",{alt:"employee",src:e.image})}),Object(s.jsx)("td",{children:e.name}),Object(s.jsx)("td",{children:e.phone}),Object(s.jsx)("td",{children:e.email}),Object(s.jsx)("td",{children:e.dob.date})]})},u=n(14),h=n.n(u),m=function(){return new Promise((function(e,t){h.a.get("https://randomuser.me/api/?results=15").then((function(t){var n=t.data.results.map((function(e){return console.log(e),{firstname:e.name.first,lastname:e.name.last,email:e.email,phone:e.phone,image:e.picture.large,dob:e.dob}}));e(n)})).catch((function(e){return t(e)}))}))};var f=function(){var e=Object(r.useState)({originalArr:[],filteredArr:[]}),t=Object(o.a)(e,2),n=t[0],c=t[1];function a(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:"";return e.charAt(0).toUpperCase()+e.slice(1)}return Object(r.useEffect)((function(){m().then((function(e){console.log(e),c(Object(l.a)(Object(l.a)({},e),{},{originalArr:e,filteredArr:e}))}))}),[]),Object(s.jsxs)("div",{children:[Object(s.jsx)(j,{}),Object(s.jsx)(d,{handleSearch:function(e){return function(e){e.target.value;var t=n.originalArr.filter((function(t){return-1!==t.firstname.indexOf(e.target.value)}));c(Object(l.a)(Object(l.a)({},n),{},{filteredArr:t}))}(e)}}),Object(s.jsxs)("table",{className:"table table-striped",children:[Object(s.jsx)("thead",{children:Object(s.jsxs)("tr",{children:[Object(s.jsx)("th",{scope:"col",children:"Image"}),Object(s.jsx)("th",{scope:"col",onClick:function(){return function(){var e=n.originalArr.sort((function(e,t){var n=e.firstname.toUpperCase(),r=t.firstname.toUpperCase();return n<r?-1:n>r?1:0}));console.log(e),c(Object(l.a)(Object(l.a)({},n),{},{filteredArr:e}))}()},children:"Name"}),Object(s.jsx)("th",{scope:"col",children:"Phone"}),Object(s.jsx)("th",{scope:"col",children:"Email"}),Object(s.jsx)("th",{scope:"col",children:"DOB"})]})}),Object(s.jsx)("tbody",{children:n.filteredArr.map((function(e,t){return Object(s.jsx)(b,{name:a(e.firstname)+" "+a(e.lastname),email:e.email,phone:e.phone,image:e.image,dob:e.dob},t)}))})]})]})},p=function(e){e&&e instanceof Function&&n.e(3).then(n.bind(null,43)).then((function(t){var n=t.getCLS,r=t.getFID,c=t.getFCP,a=t.getLCP,i=t.getTTFB;n(e),r(e),c(e),a(e),i(e)}))};i.a.render(Object(s.jsx)(c.a.StrictMode,{children:Object(s.jsx)(f,{})}),document.getElementById("root")),p()}},[[42,1,2]]]);
//# sourceMappingURL=main.d4679c63.chunk.js.map