(this["webpackJsonpts-quiz"]=this["webpackJsonpts-quiz"]||[]).push([[0],{60:function(t,n,e){"use strict";e.r(n);var r,a=e(0),c=e.n(a),s=e(20),o=e.n(s),i=e(7),u=e(8),d=e.n(u),l=e(13),p=e(5),b=e(4),x=e(23),f=e(2),j=e(18);!function(t){t.EASY="easy",t.MEDIUM="medium",t.HARD="hard"}(r||(r={}));var g,h,m,O,w,v=function(){var t=Object(l.a)(d.a.mark((function t(n,e){var r,a;return d.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return r="https://opentdb.com/api.php?amount=".concat(n,"&difficulty=").concat(e,"&category=15&type=multiple"),t.next=3,fetch(r);case 3:return t.next=5,t.sent.json();case 5:return a=t.sent,t.abrupt("return",a.results.map((function(t){return Object(j.a)(Object(j.a)({},t),{},{answers:(n=[].concat(Object(i.a)(t.incorrect_answers),[t.correct_answer]),Object(i.a)(n).sort((function(){return Math.random()-.5})))});var n})));case 7:case"end":return t.stop()}}),t)})));return function(n,e){return t.apply(this,arguments)}}(),k=e(9),y=k.b.div(g||(g=Object(b.a)(["\n\tmax-width: 1100px;\n\tbackground: #ebfeff;\n\tborder-radius: 10px;\n\tborder: 2px solid #0085a3;\n\tpadding: 20px;\n\tbox-shadow: 0px 5px 10px rgba(0, 0, 0, 0.25);\n\ttext-align: center;\n\n\tp {\n\t\tfont-size: 1rem;\n\t}\n"]))),S=k.b.div(h||(h=Object(b.a)(["\n\ttransition: all 0.3s ease;\n\n\t:hover {\n\t\topacity: 0.8;\n\t}\n\n\tbutton {\n\t\tcursor: pointer;\n\t\tuser-select: none;\n\t\tfont-size: 0.8rem;\n\t\twidth: 100%;\n\t\theight: 40px;\n\t\tmargin: 5px 0;\n\t\tbackground: ",";\n\t\tborder: 3px solid #fff;\n\t\tbox-shadow: 1px 2px 0px rgba(0, 0, 0, 0.25);\n\t\tborder-radius: 10px;\n\t\tcolor: #fff;\n\t\ttext-shadow: 0px 1px 0px rgba(0, 0, 0, 0.25);\n\t}\n"])),(function(t){var n=t.correct,e=t.userClicked;return n?"linear-gradient(90deg, #56ffa4, #59bc86)":!n&&e?"linear-gradient(90deg, #ff5656, #c16868)":"linear-gradient(90deg, #56ccff, #6eafb4)"})),z=e(1),q=function(t){var n=t.question,e=t.answers,r=t.callback,a=t.userAnswer,c=t.questionNum,s=t.totalQuestions;return Object(z.jsxs)(y,{children:[Object(z.jsxs)("p",{className:"number",children:["Question: ",c," / ",s]}),Object(z.jsx)("p",{dangerouslySetInnerHTML:{__html:n}}),Object(z.jsx)("div",{children:e.map((function(t){return Object(z.jsx)(S,{correct:(null===a||void 0===a?void 0:a.correctAnswer)===t,userClicked:(null===a||void 0===a?void 0:a.answer)===t,children:Object(z.jsx)("button",{disabled:!!a,value:t,onClick:r,children:Object(z.jsx)("span",{dangerouslySetInnerHTML:{__html:t}})})},t)}))})]})},N=e.p+"static/media/BGImage1.8f782414.jpg",_=Object(k.a)(m||(m=Object(b.a)(["\n    html{\n        height: 100%;\n    }\n\n    body{\n        background-image: url(",");\n        background-size: cover;\n        margin: 0;\n        padding: 0 20px;\n        display: flex;\n        justify-content: center;\n    }\n\n    * {\n        box-sizing: border-box;\n        font-family: 'Catamaran', sans-serif;\n    }\n"])),N),A=k.b.div(O||(O=Object(b.a)(['\n\tdisplay: flex;\n\tflex-direction: column;\n\talign-items: center;\n\n\t> p {\n\t\tcolor: #fff;\n\t}\n\n\t.score {\n\t\tcolor: black;\n\t\tfont-size: 2rem;\n\t\tmargin: 0;\n\t\tbackground-color: #ebfeff;\n\t\tmargin-bottom: 20px;\n\t\tborder-radius: 10px;\n\t\tborder: 2px solid #0085a3;\n\t\tpadding: 5px 25px;\n        filter: drop-shadow(4px 2px #3ba0f2);\n\t}\n\n\th1 {\n\t\tfont-family: "Staatliches", sans serif;\n\t\tbackground-color: #fff;\n\t\tborder-radius: 20px;\n\t\tbackground-size: 100%;\n\t\tpadding: 5px 25px;\n\t\tfilter: drop-shadow(4px 2px #3ba0f2);\n\t\tfont-size: 70px;\n\t\ttext-align: center;\n\t\tmargin: 20px;\n\t}\n\n\t.start,\n\t.next {\n\t\tcursor: pointer;\n\t\tborder: 2px solid #fff;\n\t\tbox-shadow: 0px 5px 10px rgba(0, 0, 0, 0.35);\n\t\tborder-radius: 10px;\n\t\theight: 40px;\n\t\tmargin: 20px 0;\n\t\tpadding: 0 40px;\n\t\tbackground-color: #00c0f6;\n\t\tcolor: #fff;\n\t\ttext-shadow: 1px 1px #003443;\n\t}\n\n\t.start {\n\t\tmax-width: 200px;\n\t\tfont-size: 1.3rem;\n\t}\n\n\t.loadingText {\n\t\tfont-family: "Press Start 2p";\n\t\tfont-size: 2rem;\n\t\tmargin-top: 50px;\n\t\ttext-shadow: 2px 2px black;\n\t}\n']))),C=Object(f.css)(w||(w=Object(b.a)(["\n\tdisplay: block;\n  margin-top: 100px;\n  margin-right: 80px;\n"]))),I=function(){var t=Object(a.useState)(!1),n=Object(p.a)(t,2),e=n[0],c=n[1],s=Object(a.useState)([]),o=Object(p.a)(s,2),u=o[0],b=o[1],f=Object(a.useState)(0),j=Object(p.a)(f,2),g=j[0],h=j[1],m=Object(a.useState)([]),O=Object(p.a)(m,2),w=O[0],k=O[1],y=Object(a.useState)(0),S=Object(p.a)(y,2),N=S[0],I=S[1],M=Object(a.useState)(!0),T=Object(p.a)(M,2),E=T[0],Q=T[1],L=function(){var t=Object(l.a)(d.a.mark((function t(){var n;return d.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return c(!0),Q(!1),t.prev=2,t.next=5,v(20,r.EASY);case 5:n=t.sent,b(n),I(0),k([]),h(0),setTimeout((function(){return c(!1)}),4e3),t.next=16;break;case 13:t.prev=13,t.t0=t.catch(2),console.log("Oops, looks like I caught an error: ",t.t0);case 16:case"end":return t.stop()}}),t,null,[[2,13]])})));return function(){return t.apply(this,arguments)}}();return Object(z.jsxs)(z.Fragment,{children:[Object(z.jsx)(_,{}),Object(z.jsxs)(A,{children:[Object(z.jsx)("h1",{children:"Video Game Quiz"}),E||20===w.length?Object(z.jsx)("button",{className:"start",onClick:L,children:"Start"}):null,E?null:Object(z.jsxs)("p",{className:"score",children:["Score: ",N]}),e&&Object(z.jsx)(x.PacmanLoader,{css:C,size:35,color:"#35E6DB",loading:!0}),e&&Object(z.jsx)("p",{className:"loadingText",children:"Loading"}),!e&&!E&&Object(z.jsx)(q,{questionNum:g+1,totalQuestions:20,question:u[g].question,answers:u[g].answers,userAnswer:w?w[g]:void 0,callback:function(t){if(!E){var n=t.currentTarget.value,e=u[g].correct_answer===n;e&&I((function(t){return t+1}));var r={question:u[g].question,answer:n,correct:e,correctAnswer:u[g].correct_answer};k((function(t){return[].concat(Object(i.a)(t),[r])}))}}}),E||e||w.length!==g+1||19===g?null:Object(z.jsx)("button",{className:"next",onClick:function(){var t=g+1;20===t?Q(!0):h(t)},children:"Next Question"})]})]})};o.a.render(Object(z.jsx)(c.a.StrictMode,{children:Object(z.jsx)(I,{})}),document.getElementById("root"))}},[[60,1,2]]]);
//# sourceMappingURL=main.60ef2b5e.chunk.js.map