(this.webpackJsonpimc=this.webpackJsonpimc||[]).push([[0],{10:function(e,t,n){},12:function(e,t,n){"use strict";n.r(t);var c=n(1),i=n.n(c),r=n(5),a=n.n(r),s=(n(10),n(2)),o=n(4),u=n.n(o),j=n(0);function h(e){var t=e.setParentHeight,n=e.setParentWeight,i=e.IMC,r=Object(c.useState)(),a=Object(s.a)(r,2),o=a[0],u=a[1],h=Object(c.useState)(),l=Object(s.a)(h,2),b=l[0],d=l[1];function O(){t(o),n(b),i(b/Math.pow(o/100,2))}return Object(j.jsxs)(j.Fragment,{children:[Object(j.jsx)("span",{children:"Height (cm)"}),Object(j.jsx)("input",{type:"text",onChange:function(e){return u(e.target.value)},onKeyDown:function(e){"Enter"===e.key&&O()}}),Object(j.jsx)("span",{children:"Weight (Kg)"}),Object(j.jsx)("input",{type:"text",onChange:function(e){return d(e.target.value)},onKeyDown:function(e){"Enter"===e.key&&O()}}),Object(j.jsx)("button",{onClick:O,children:"Calculate"})]})}function l(e){var t=e.userIMC;return Object(j.jsx)(j.Fragment,{children:t<18?Object(j.jsxs)("h2",{children:["You're underweight, take care of your health! (IMC : ",t.toFixed(2),")"]}):t>18&&t<=25?Object(j.jsxs)("h2",{children:["You're health, congratulations! (IMC : ",t.toFixed(2),")"]}):t>25&&t<=30?Object(j.jsxs)("h2",{children:["You're overweight, should i call McDonald? (IMC : ",t.toFixed(2),")"]}):t>30&&t<=40?Object(j.jsxs)("h2",{children:["You're obese, take care of your health! (IMC : ",t.toFixed(2),")"]}):t>40?Object(j.jsxs)("h2",{children:[" You're severely obese, take care of your health! (IMC : ",t.toFixed(2),")"]}):void 0})}function b(){var e=Object(c.useState)(),t=Object(s.a)(e,2),n=(t[0],t[1]),i=Object(c.useState)(),r=Object(s.a)(i,2),a=(r[0],r[1]),o=Object(c.useState)(1),b=Object(s.a)(o,2),d=b[0],O=b[1];return Object(j.jsxs)("div",{className:u.a.main_conteiner,children:[Object(j.jsx)("h1",{children:"IMC Calculator"}),Object(j.jsx)("div",{className:u.a.input_section,children:Object(j.jsx)(h,{setParentHeight:n,setParentWeight:a,IMC:O})}),!0===isNaN(d)||0===d?Object(j.jsx)("h2",{children:"Please, enter a valid number"}):1===d?"":Object(j.jsx)(l,{userIMC:d})]})}var d=function(e){e&&e instanceof Function&&n.e(3).then(n.bind(null,13)).then((function(t){var n=t.getCLS,c=t.getFID,i=t.getFCP,r=t.getLCP,a=t.getTTFB;n(e),c(e),i(e),r(e),a(e)}))};a.a.render(Object(j.jsx)(i.a.StrictMode,{children:Object(j.jsx)(b,{})}),document.getElementById("root")),d()},4:function(e,t,n){e.exports={main_conteiner:"App_main_conteiner__2Baxi",input_section:"App_input_section__3SnEG"}}},[[12,1,2]]]);
//# sourceMappingURL=main.197b8181.chunk.js.map