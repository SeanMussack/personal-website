(this["webpackJsonppersonal-website"]=this["webpackJsonppersonal-website"]||[]).push([[0],{34:function(e,t,n){},35:function(e,t,n){},51:function(e,t,n){"use strict";n.r(t);var s=n(2),a=n.n(s),c=n(18),r=n.n(c),i=(n(34),n(7)),l=n(8),j=n(10),o=n(9),b=(n.p,n(35),n(4)),h=n(19),d=n(52),m=n(53),u=n(54),O=n(55),x=n(16),f=n(11),p=n(0);function g(){return Object(p.jsx)(x.b,{to:"home",children:Object(p.jsx)("img",{src:"/sean-mussack-initials-final.svg",alt:"My personal logo: the letters S M",className:"logo"})})}function N(e){var t=window.location.pathname,n=t=="/"+e;return console.log("currentPathName: "+t),console.log("href: "+e),console.log("isCurrentPageBool: "+n),n}function v(){return Object(p.jsx)(f.Fade,{in:!0,duration:"200",children:Object(p.jsx)("i",{className:"header-arrow fas fa-lg fa-caret-down"})})}function y(e){return Object(p.jsx)(s.Fragment,{children:e.map((function(e){return t=e,Object(p.jsxs)(d.a,{className:"col-6 col-sm-3",children:[Object(p.jsx)(x.b,{to:t.href,className:"nav-link py-1 py-sm-3"+(N(t.href)?" nav-link-active":""),children:t.name}),N(t.href)?Object(p.jsx)(v,{}):Object(p.jsx)(s.Fragment,{})]});var t}))})}var w=function(e){Object(j.a)(n,e);var t=Object(o.a)(n);function n(e){var s;return Object(i.a)(this,n),(s=t.call(this,e)).props={pages:null},s}return Object(l.a)(n,[{key:"render",value:function(){return Object(p.jsxs)(m.a,{className:"row-flex px-3",children:[Object(p.jsx)(u.a,{xs:6,sm:4,children:Object(p.jsx)(g,{})}),Object(p.jsx)(O.a,{className:"col-6 col-sm-8",children:y(this.props.pages)})]})}}]),n}(s.Component),k=n(56),T=n(57),F=function(e){Object(j.a)(n,e);var t=Object(o.a)(n);function n(e){var s;return Object(i.a)(this,n),(s=t.call(this,e)).props={pages:null},s}return Object(l.a)(n,[{key:"render",value:function(){return Object(p.jsx)(f.Stagger,{in:!0,className:"stagger",children:this.props.pages.map((function(e){return Object(p.jsx)(f.FadeTransform,{transformProps:{enterTransform:"translateX(0px)",exitTransform:"translateX(-20%)"},children:Object(p.jsx)("div",{className:"page-button-row row justify-content-center",children:Object(p.jsx)(x.b,{to:e.href,className:"page-button d-inline-flex justify-content-center btn color-"+e.color,children:Object(p.jsxs)(k.a,{className:"",children:[Object(p.jsx)(u.a,{className:"col-1 offset-3",children:Object(p.jsx)("i",{className:"fas fa-sm fa-"+e.icon,"aria-hidden":"true"})}),Object(p.jsx)(u.a,{className:"col-4 offset-0",children:e.name}),Object(p.jsx)(u.a,{className:"col-1 offset-0",children:Object(p.jsx)("i",{className:"fas fa-lg fa-angle-right","aria-hidden":"true"})})]})})})},e.name)}))})}}]),n}(s.Component),C=function(e){Object(j.a)(n,e);var t=Object(o.a)(n);function n(e){var s;return Object(i.a)(this,n),(s=t.call(this,e)).props={pages:null},s}return Object(l.a)(n,[{key:"render",value:function(){return Object(p.jsx)(T.a,{className:"home-page-container",children:Object(p.jsx)(F,{pages:this.props.pages})})}}]),n}(s.Component),M="/lily_md.jpg";function P(){return Object(p.jsx)("div",{className:"d-flex justify-content-center",children:Object(p.jsx)("img",{className:"avatar",src:"/avatar_md.jpg",alt:"My avatar"})})}function S(){return Object(p.jsx)(s.Fragment,{children:Object(p.jsxs)("p",{children:[Object(p.jsx)("h3",{children:"Hello world!"}),Object(p.jsxs)("ul",{children:[Object(p.jsxs)("h5",{children:["Sean Mussack ",Object(p.jsx)("span",{className:"text-nowrap",children:"at a glance:"})]}),Object(p.jsxs)("li",{children:[Object(p.jsx)("b",{children:"Location:"})," ",Object(p.jsx)("span",{className:"text-nowrap",children:"Minneapolis, MN, USA"})]}),Object(p.jsxs)("li",{children:[Object(p.jsx)("b",{children:"Pronouns:"})," ",Object(p.jsx)("span",{className:"text-nowrap",children:"they/them or she/her"})]}),Object(p.jsxs)("li",{children:[Object(p.jsx)("b",{children:"Pet:"})," ",Object(p.jsx)("span",{className:"text-nowrap",children:"Lily the rabbit"})]})]}),Object(p.jsxs)("ul",{children:[Object(p.jsx)("h5",{children:"Things I Love:"}),Object(p.jsx)("li",{children:"Coding"}),Object(p.jsx)("li",{children:"Animals"}),Object(p.jsx)("li",{children:"Pixel Art"}),Object(p.jsx)("li",{children:"World History"})]})]})})}function X(){return Object(p.jsxs)(s.Fragment,{children:[Object(p.jsx)("div",{className:"d-none d-sm-flex justify-content-center",children:Object(p.jsx)("img",{className:"lily",src:M,alt:"My rabbit, Lily, who has white fur with black ears and eyes"})}),Object(p.jsx)("div",{className:"d-flex d-sm-none",children:Object(p.jsx)("img",{className:"lily position-absolute bottom-0 end-0 mb-5",src:M,alt:"My rabbit, Lily, who has white fur with black ears and eyes"})})]})}var A=function(e){Object(j.a)(n,e);var t=Object(o.a)(n);function n(){return Object(i.a)(this,n),t.apply(this,arguments)}return Object(l.a)(n,[{key:"render",value:function(){return Object(p.jsx)(T.a,{fluid:!0,className:"about-page-container",children:Object(p.jsxs)(k.a,{children:[Object(p.jsx)(u.a,{xs:12,sm:3,className:"offset-sm-1",children:Object(p.jsx)(f.FadeTransform,{in:!0,transformProps:{enterTransform:"translateX(0px)",exitTransform:"translateX(-20%)"},children:Object(p.jsx)(P,{})},"About")}),Object(p.jsx)(u.a,{xs:12,sm:4,children:Object(p.jsx)(f.Fade,{in:!0,children:Object(p.jsx)(S,{})})}),Object(p.jsx)(u.a,{children:Object(p.jsx)(f.FadeTransform,{in:!0,transformProps:{enterTransform:"translateX(0px)",exitTransform:"translateX(20%)"},children:Object(p.jsx)(X,{})},"About")})]})})}}]),n}(s.Component);function L(){return Object(p.jsxs)("a",{href:"/Sean Mussack's resume.pdf",download:!0,className:"btn btn-warning download-button",children:[Object(p.jsx)("i",{className:"fas fa-download","aria-hidden":"true"}),"Download"]})}var B=function(e){Object(j.a)(n,e);var t=Object(o.a)(n);function n(){return Object(i.a)(this,n),t.apply(this,arguments)}return Object(l.a)(n,[{key:"render",value:function(){return Object(p.jsx)(T.a,{fluid:!0,className:"resume-container",children:Object(p.jsxs)(k.a,{children:[Object(p.jsx)(u.a,{xs:12,sm:6,className:"resume-left-col",children:Object(p.jsxs)(f.FadeTransform,{in:!0,transformProps:{enterTransform:"translateX(0px)",exitTransform:"translateX(-20%)"},children:[Object(p.jsx)("p",{children:"PDF version of my resume:"}),Object(p.jsx)("p",{children:Object(p.jsx)(L,{})})]})}),Object(p.jsx)(u.a,{xs:12,sm:6,className:"px-4 px-md-5 mt-sm-5",children:Object(p.jsx)(f.FadeTransform,{in:!0,transformProps:{enterTransform:"translateX(0px)",exitTransform:"translateX(20%)"},children:Object(p.jsx)("img",{className:"resume-img img-fluid",src:"/Sean Mussack's resume-1.jpg",alt:"My resume in .pdf format"})},"About")})]})})}}]),n}(s.Component),D=function(e){Object(j.a)(n,e);var t=Object(o.a)(n);function n(){return Object(i.a)(this,n),t.apply(this,arguments)}return Object(l.a)(n,[{key:"render",value:function(){return Object(p.jsx)(T.a,{className:"contact-container",children:Object(p.jsxs)(f.Fade,{in:!0,children:[Object(p.jsx)("h2",{children:"Contact Me"}),Object(p.jsx)(k.a,{children:Object(p.jsx)(u.a,{xs:12,md:6,className:"offset-md-3",children:Object(p.jsxs)("ul",{children:[Object(p.jsxs)("li",{children:[Object(p.jsx)("i",{className:"fas fa-lg fa-envelope","aria-hidden":"true"}),Object(p.jsx)("a",{href:"mailto:seanmussack@gmail.com",children:"seanmussack@gmail.com"})]}),Object(p.jsxs)("li",{children:[Object(p.jsx)("i",{className:"fas fa-lg fa-phone","aria-hidden":"true"}),"+1 (612) 978-3144"]}),Object(p.jsxs)("li",{children:[Object(p.jsx)("i",{className:"fab fa-lg fa-github","aria-hidden":"true"}),Object(p.jsx)("a",{href:"https://github.com/SeanMussack",children:"github.com/SeanMussack"})]}),Object(p.jsxs)("li",{children:[Object(p.jsx)("i",{className:"fab fa-lg fa-linkedin","aria-hidden":"true"}),Object(p.jsx)("a",{href:"https://www.linkedin.com/in/sean-mussack-316330211/",children:"linkedin.com/in/sean-mussack-316330211/"})]})]})})})]})})}}]),n}(s.Component),I=[{name:"About",href:"about",color:"cyan",icon:"user"},{name:"Resume",href:"resume",color:"magenta",icon:"file"},{name:"Projects",href:"projects",color:"yellow",icon:"star"},{name:"Contact",href:"contact",color:"white",icon:"paper-plane"}],H=function(e){Object(j.a)(n,e);var t=Object(o.a)(n);function n(e){return Object(i.a)(this,n),t.call(this,e)}return Object(l.a)(n,[{key:"render",value:function(){return Object(p.jsxs)(s.Fragment,{children:[Object(p.jsx)(w,{pages:I}),Object(p.jsx)(h.TransitionGroup,{className:"transition-group",children:Object(p.jsx)(h.CSSTransition,{classNames:"page",timeout:300,children:Object(p.jsxs)(b.d,{className:"switch",children:[Object(p.jsx)(b.b,{path:"/home",render:function(){return Object(p.jsx)(C,{pages:I})}}),Object(p.jsx)(b.b,{path:"/about",component:A}),Object(p.jsx)(b.b,{path:"/resume",component:B}),Object(p.jsx)(b.b,{path:"/contact",component:D}),Object(p.jsx)(b.a,{to:"/home"})]})},this.props.location.key)})]})}}]),n}(s.Component),J=Object(b.g)(H),_=function(e){Object(j.a)(n,e);var t=Object(o.a)(n);function n(){return Object(i.a)(this,n),t.apply(this,arguments)}return Object(l.a)(n,[{key:"render",value:function(){return Object(p.jsx)(x.a,{children:Object(p.jsx)("div",{className:"App",children:Object(p.jsx)(J,{})})})}}]),n}(s.Component),E=function(e){e&&e instanceof Function&&n.e(3).then(n.bind(null,58)).then((function(t){var n=t.getCLS,s=t.getFID,a=t.getFCP,c=t.getLCP,r=t.getTTFB;n(e),s(e),a(e),c(e),r(e)}))};n(49),n(50);r.a.render(Object(p.jsx)(a.a.StrictMode,{children:Object(p.jsx)(_,{})}),document.getElementById("root")),E()}},[[51,1,2]]]);
//# sourceMappingURL=main.f510370b.chunk.js.map