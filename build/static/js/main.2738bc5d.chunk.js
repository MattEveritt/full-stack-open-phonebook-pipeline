(this["webpackJsonpthe-phonebook"]=this["webpackJsonpthe-phonebook"]||[]).push([[0],{40:function(e,n,t){},41:function(e,n,t){"use strict";t.r(n);var c=t(15),u=t.n(c),a=t(3),r=t(1),s=t(0),i=function(e){return Object(s.jsxs)("div",{children:["filter shown with:"," ",Object(s.jsx)("input",{value:e.value,onChange:e.onChange})]})},o=function(e){return Object(s.jsxs)("form",{onSubmit:e.onSubmit,children:[Object(s.jsxs)("div",{children:["name:"," ",Object(s.jsx)("input",{value:e.valueName,onChange:e.onChangeName})]}),Object(s.jsxs)("div",{children:["number:"," ",Object(s.jsx)("input",{value:e.valueNumber,onChange:e.onChangeNumber})]}),Object(s.jsx)("div",{children:Object(s.jsx)("button",{type:"submit",children:"add"})})]})},l=function(e){return Object(s.jsx)("div",{children:e.persons.filter((function(n){return-1!==n.name.toLocaleLowerCase().indexOf(e.newSearch.toLowerCase())})).map((function(n){return Object(s.jsxs)("h3",{children:[n.name,n.number,Object(s.jsx)("button",{value:n.id,onClick:e.handleDeletePerson,children:"delete"})]},n.id)}))})},j=function(e){var n=e.successMessage,t=e.failureMessage;return null===n&&null===t?null:Object(s.jsx)(s.Fragment,{children:null===n?Object(s.jsx)("div",{className:"failure",children:t}):Object(s.jsx)("div",{className:"success",children:n})})},b=t(4),d=t.n(b),h="/api/persons",f=function(){return d.a.get(h).then((function(e){return e.data}))},O=function(e){return d.a.post(h,e)},m=function(e){return d.a.delete("".concat(h,"/").concat(e))},v=function(){var e=Object(r.useState)([]),n=Object(a.a)(e,2),t=n[0],c=n[1],u=Object(r.useState)(""),b=Object(a.a)(u,2),d=b[0],h=b[1],v=Object(r.useState)(""),x=Object(a.a)(v,2),g=x[0],p=x[1],C=Object(r.useState)(""),w=Object(a.a)(C,2),N=w[0],S=w[1],k=Object(r.useState)(null),D=Object(a.a)(k,2),M=D[0],L=D[1],P=Object(r.useState)(null),y=Object(a.a)(P,2),A=y[0],E=y[1];Object(r.useEffect)((function(){f().then((function(e){c(e)}))}),[]);return Object(s.jsxs)("div",{children:[Object(s.jsx)("h1",{children:"Phonebook"}),Object(s.jsx)(j,{successMessage:M,failureMessage:A}),Object(s.jsx)(i,{value:N,onChange:function(e){S(e.target.value)}}),Object(s.jsx)("h2",{children:"Add new"}),Object(s.jsx)(o,{onSubmit:function(e){e.preventDefault(),O({name:d,number:g}).then((function(e){c(t.concat(e.data)),L("Added ".concat(d)),setTimeout((function(){L(null)}),5e3)})).catch((function(e){E(e.response.data.error),setTimeout((function(){E(null)}),5e3)})),h(""),p("")},valueName:d,onChangeName:function(e){h(e.target.value)},valueNumber:g,onChangeNumber:function(e){p(e.target.value)}}),Object(s.jsx)("h2",{children:"Numbers"}),Object(s.jsx)(l,{persons:t,newSearch:N,handleDeletePerson:function(e){var n=e.target.value,u=t.filter((function(e){return e.id===n})),r=Object(a.a)(u,1)[0];window.confirm("Delete ".concat(r.name," ? "))&&(m(n),c(t.filter((function(e){return e.id!==n}))))}})]})};t(40);u.a.render(Object(s.jsx)(v,{}),document.getElementById("root"))}},[[41,1,2]]]);
//# sourceMappingURL=main.2738bc5d.chunk.js.map