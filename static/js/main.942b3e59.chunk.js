(this["webpackJsonppersonal-website"]=this["webpackJsonppersonal-website"]||[]).push([[0],{34:function(e,t,n){},35:function(e,t,n){},51:function(e,t,n){"use strict";n.r(t);var a=n(1),c=n.n(a),s=n(17),r=n.n(s),o=(n(34),n(11)),i=n(12),l=n(14),j=n(13),b=(n.p,n(35),n(4)),u=n(18),m=n(52),h=n(53),f=n(54),O=n(55),p=n(15),d=n(2);function x(){return Object(d.jsx)(p.b,{to:"home",children:Object(d.jsx)("img",{src:"/sean-mussack-initials-final.svg",alt:"My personal logo: the letters S M",className:"logo"})})}function g(e){return Object(d.jsx)(a.Fragment,{children:e.map((function(e){return t=e,Object(d.jsx)(m.a,{className:"col-6 col-sm-3",children:Object(d.jsx)(p.b,{to:t.href,className:"nav-link py-1 py-sm-3",children:t.name})});var t}))})}var v=function(e){Object(l.a)(n,e);var t=Object(j.a)(n);function n(e){var a;return Object(o.a)(this,n),(a=t.call(this,e)).props={pages:null},a}return Object(i.a)(n,[{key:"render",value:function(){return Object(d.jsxs)(h.a,{className:"row-flex px-3",children:[Object(d.jsx)(f.a,{xs:6,sm:4,children:Object(d.jsx)(x,{})}),Object(d.jsx)(O.a,{className:"col-6 col-sm-8",children:g(this.props.pages)})]})}}]),n}(a.Component),y=n(56),N=n(57),w=n(16),T=function(e){Object(l.a)(n,e);var t=Object(j.a)(n);function n(e){var a;return Object(o.a)(this,n),(a=t.call(this,e)).props={pages:null},a}return Object(i.a)(n,[{key:"render",value:function(){return Object(d.jsx)(w.Stagger,{in:!0,className:"stagger mt-3",children:this.props.pages.map((function(e){return Object(d.jsx)(w.FadeTransform,{transformProps:{enterTransform:"translateX(0px)",exitTransform:"translateX(-20%)"},children:Object(d.jsx)("div",{className:"page-button-row row justify-content-center",children:Object(d.jsx)(p.b,{to:e.href,className:"page-button d-inline-flex justify-content-center btn color-"+e.color,children:Object(d.jsxs)(y.a,{className:"",children:[Object(d.jsx)(f.a,{className:"col-1 offset-3",children:Object(d.jsx)("i",{className:"fas fa-sm fa-"+e.icon,"aria-hidden":"true"})}),Object(d.jsx)(f.a,{className:"col-4 offset-0",children:e.name}),Object(d.jsx)(f.a,{className:"col-1 offset-0",children:Object(d.jsx)("i",{className:"fas fa-lg fa-angle-right","aria-hidden":"true"})})]})})})},e.name)}))})}}]),n}(a.Component),k=function(e){Object(l.a)(n,e);var t=Object(j.a)(n);function n(e){var a;return Object(o.a)(this,n),(a=t.call(this,e)).props={pages:null},a}return Object(i.a)(n,[{key:"render",value:function(){return Object(d.jsx)(N.a,{className:"home-page-container",children:Object(d.jsx)(T,{pages:this.props.pages})})}}]),n}(a.Component);function C(){return Object(d.jsx)("div",{className:"d-flex justify-content-center",children:Object(d.jsx)("img",{className:"avatar",src:"/avatar_small.jpeg",alt:"My avatar"})})}function F(){return Object(d.jsx)("p",{children:"Hello worlds!"})}function P(){return Object(d.jsx)("div",{className:"d-flex justify-content-center",children:Object(d.jsx)("img",{className:"lily",src:"/lily.jpg",alt:"My rabbit, Lily, who has white fur with black ears and eyes"})})}var S=function(e){Object(l.a)(n,e);var t=Object(j.a)(n);function n(){return Object(o.a)(this,n),t.apply(this,arguments)}return Object(i.a)(n,[{key:"render",value:function(){return Object(d.jsx)(N.a,{fluid:!0,className:"about-page-container",children:Object(d.jsxs)(y.a,{children:[Object(d.jsx)(f.a,{xs:12,sm:3,className:"offset-sm-1",children:Object(d.jsx)(w.FadeTransform,{in:!0,transformProps:{enterTransform:"translateX(0px)",exitTransform:"translateX(-20%)"},children:Object(d.jsx)(C,{})},"About")}),Object(d.jsx)(f.a,{xs:12,sm:4,children:Object(d.jsx)(w.Fade,{in:!0,children:Object(d.jsx)(F,{})})}),Object(d.jsx)(f.a,{children:Object(d.jsx)(w.FadeTransform,{in:!0,transformProps:{enterTransform:"translateX(0px)",exitTransform:"translateX(20%)"},children:Object(d.jsx)(P,{})},"About")})]})})}}]),n}(a.Component),X=[{name:"About",href:"about",color:"cyan",icon:"user"},{name:"Resume",href:"resume",color:"magenta",icon:"file"},{name:"Projects",href:"projects",color:"yellow",icon:"star"},{name:"Contact",href:"contact",color:"white",icon:"paper-plane"}],M=function(e){Object(l.a)(n,e);var t=Object(j.a)(n);function n(e){return Object(o.a)(this,n),t.call(this,e)}return Object(i.a)(n,[{key:"render",value:function(){return Object(d.jsxs)(a.Fragment,{children:[Object(d.jsx)(v,{pages:X}),Object(d.jsx)(u.TransitionGroup,{className:"transition-group",children:Object(d.jsx)(u.CSSTransition,{classNames:"page",timeout:0,children:Object(d.jsxs)(b.d,{className:"switch",children:[Object(d.jsx)(b.b,{path:"/home",render:function(){return Object(d.jsx)(k,{pages:X})}}),Object(d.jsx)(b.b,{path:"/about",component:S}),Object(d.jsx)(b.a,{to:"/home"})]})},this.props.location.key)})]})}}]),n}(a.Component),A=Object(b.g)(M),L=function(e){Object(l.a)(n,e);var t=Object(j.a)(n);function n(){return Object(o.a)(this,n),t.apply(this,arguments)}return Object(i.a)(n,[{key:"render",value:function(){return Object(d.jsx)(p.a,{children:Object(d.jsx)("div",{className:"App",children:Object(d.jsx)(A,{})})})}}]),n}(a.Component),B=function(e){e&&e instanceof Function&&n.e(3).then(n.bind(null,58)).then((function(t){var n=t.getCLS,a=t.getFID,c=t.getFCP,s=t.getLCP,r=t.getTTFB;n(e),a(e),c(e),s(e),r(e)}))};n(49),n(50);r.a.render(Object(d.jsx)(c.a.StrictMode,{children:Object(d.jsx)(L,{})}),document.getElementById("root")),B()}},[[51,1,2]]]);
//# sourceMappingURL=main.942b3e59.chunk.js.map