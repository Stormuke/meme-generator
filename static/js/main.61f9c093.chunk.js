(this["webpackJsonpmeme-generator"]=this["webpackJsonpmeme-generator"]||[]).push([[0],{11:function(e,t,n){},13:function(e,t,n){"use strict";n.r(t);var r=n(1),a=n.n(r),c=n(3),s=n.n(c),i=(n(11),n(6)),o=n(0);var l=function(){return Object(o.jsx)("header",{className:"header",children:Object(o.jsx)("h1",{className:"header__title",children:"Meme generator"})})};var u=function(){return Object(o.jsx)("footer",{className:"footer",children:Object(o.jsx)("h2",{className:"footer__title",children:"Created by Alexey Kazakov 2021"})})};var h=function(e){return Object(o.jsxs)("div",{className:"generator__card",children:[Object(o.jsx)("img",{src:e.picture,alt:"",className:"generator__image"}),Object(o.jsx)("button",{type:"button",className:"generator__button",onClick:e.click,children:"\u041d\u0430\u0436\u043c\u0438 \u043c\u0435\u043d\u044f"})]})};var j=function(e){return Object(o.jsx)("section",{className:"generator",children:Object(o.jsx)(h,{picture:e.url,click:e.click})})},b=n(4),d=n(5),g=new(function(){function e(t){Object(b.a)(this,e),this._baseUrl=t.baseUrl,this._headers=t.headers}return Object(d.a)(e,[{key:"_handleRes",value:function(e){return e.ok?e.json():Promise.reject("\u041e\u0448\u0438\u0431\u043a\u0430: ".concat(e.status))}},{key:"getImages",value:function(){var e=this;return fetch("".concat(this._baseUrl),{headers:this._headers}).then((function(t){return e._handleRes(t)}))}}]),e}())({baseUrl:"https://api.memegen.link/images",headers:{"Content-Type":"application/json"}});var m=function(){var e=a.a.useState("https://99px.ru/sstorage/86/2019/09/image_862209192214338119696.gif"),t=Object(i.a)(e,2),n=t[0],r=t[1];return Object(o.jsx)(o.Fragment,{children:Object(o.jsxs)("div",{className:"page",children:[Object(o.jsx)(l,{}),Object(o.jsx)(j,{url:n,click:function(){g.getImages().then((function(e){r(e[Math.floor(Math.random()*e.length)].url)}))}}),Object(o.jsx)(u,{})]})})},f=function(e){e&&e instanceof Function&&n.e(3).then(n.bind(null,14)).then((function(t){var n=t.getCLS,r=t.getFID,a=t.getFCP,c=t.getLCP,s=t.getTTFB;n(e),r(e),a(e),c(e),s(e)}))};s.a.render(Object(o.jsx)(a.a.StrictMode,{children:Object(o.jsx)(m,{})}),document.getElementById("root")),f()}},[[13,1,2]]]);
//# sourceMappingURL=main.61f9c093.chunk.js.map