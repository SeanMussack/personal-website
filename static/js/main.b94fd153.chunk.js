(this["webpackJsonppersonal-website"]=this["webpackJsonppersonal-website"]||[]).push([[0],{34:function(e,t,s){},35:function(e,t,s){},51:function(e,t,s){"use strict";s.r(t);var a=s(2),n=s.n(a),c=s(18),r=s.n(c),i=(s(34),s(8)),l=s(9),j=s(11),o=s(10),b=(s(35),s(4)),m=s(19),d=s(52),h=s(53),x=s(54),u=s(55),O=s(16),f=s(7),p=s(0);function g(){return Object(p.jsx)(O.b,{to:"home",children:Object(p.jsx)("img",{src:"/sean-mussack-initials-final.svg",alt:"My personal logo: the letters S M",className:"logo"})})}function y(e){return window.location.pathname==="/"+e}function N(){return Object(p.jsx)(f.Fade,{in:!0,duration:"200",children:Object(p.jsx)("i",{className:"header-arrow fas fa-lg fa-caret-down"})})}function v(e){return Object(p.jsx)(a.Fragment,{children:e.map((function(e){return t=e,Object(p.jsxs)(d.a,{className:"col-6 col-sm-3",children:[Object(p.jsx)(O.b,{to:t.href,className:"nav-link py-1 py-sm-3"+(y(t.href)?" nav-link-active":""),children:t.name}),y(t.href)?Object(p.jsx)(N,{}):Object(p.jsx)(a.Fragment,{})]},t.name);var t}))})}var w=function(e){Object(j.a)(s,e);var t=Object(o.a)(s);function s(){return Object(i.a)(this,s),t.apply(this,arguments)}return Object(l.a)(s,[{key:"render",value:function(){return Object(p.jsxs)(h.a,{className:"row-flex px-3",children:[Object(p.jsx)(x.a,{xs:6,sm:4,children:Object(p.jsx)(g,{})}),Object(p.jsx)(u.a,{className:"col-6 col-sm-8",children:v(this.props.pages)})]})}}]),s}(a.Component);w.defaultProps={pages:null};var k=w,T=s(56),P=s(57);var F=function(e){Object(j.a)(s,e);var t=Object(o.a)(s);function s(){return Object(i.a)(this,s),t.apply(this,arguments)}return Object(l.a)(s,[{key:"render",value:function(){return Object(p.jsx)(P.a,{className:"home-page-container",children:(e=this.props.pages,Object(p.jsx)(f.Stagger,{in:!0,className:"stagger",children:e.map((function(e){return Object(p.jsx)(f.FadeTransform,{transformProps:{enterTransform:"translateX(0px)",exitTransform:"translateX(-20%)"},children:Object(p.jsx)("div",{className:"page-button-row row justify-content-center",children:Object(p.jsx)(O.b,{to:e.href,className:"page-button d-inline-flex justify-content-center btn color-"+e.color,children:Object(p.jsxs)(T.a,{className:"",children:[Object(p.jsx)(x.a,{className:"col-1 offset-3",children:Object(p.jsx)("i",{className:"fas fa-sm fa-"+e.icon,"aria-hidden":"true"})}),Object(p.jsx)(x.a,{className:"col-4 offset-0",children:e.name}),Object(p.jsx)(x.a,{className:"col-1 offset-0",children:Object(p.jsx)("i",{className:"fas fa-lg fa-angle-right","aria-hidden":"true"})})]})})})},e.name)}))}))});var e}}]),s}(a.Component);F.defaultProps={pages:null};var C=F,M="/avatar_md.jpg",S="/lily_md.jpg";function X(){return Object(p.jsxs)(a.Fragment,{children:[Object(p.jsx)("div",{className:"justify-content-center d-flex d-lg-none",children:Object(p.jsx)("img",{className:"avatar",src:M,alt:"My avatar"})}),Object(p.jsx)("div",{className:"justify-content-center d-none d-lg-flex",children:Object(p.jsx)("img",{className:"avatar",src:M,alt:"My avatar"})})]})}function A(){return Object(p.jsxs)("div",{className:"about-text",children:[Object(p.jsx)("h3",{children:"Hello world!"}),Object(p.jsxs)("ul",{children:[Object(p.jsxs)("h5",{children:["Sean Mussack ",Object(p.jsx)("span",{className:"text-nowrap",children:"at a glance:"})]}),Object(p.jsxs)("li",{children:[Object(p.jsx)("b",{children:"Location:"})," ",Object(p.jsx)("span",{className:"text-nowrap",children:"Minneapolis, MN, USA"})]}),Object(p.jsxs)("li",{children:[Object(p.jsx)("b",{children:"Pronouns:"})," ",Object(p.jsx)("span",{className:"text-nowrap",children:"they/them"})]}),Object(p.jsxs)("li",{children:[Object(p.jsx)("b",{children:"Pet:"})," ",Object(p.jsx)("span",{className:"text-nowrap",children:"Lily the rabbit"})]})]}),Object(p.jsxs)("ul",{children:[Object(p.jsx)("h5",{children:"Things I Love:"}),Object(p.jsx)("li",{children:"Coding"}),Object(p.jsx)("li",{children:"Animals"}),Object(p.jsx)("li",{children:"Pixel Art"}),Object(p.jsx)("li",{children:"World History"})]})]})}function L(){return Object(p.jsxs)(a.Fragment,{children:[Object(p.jsx)("div",{className:"d-none d-sm-flex justify-content-center",children:Object(p.jsx)("img",{className:"lily",src:S,alt:"My rabbit, Lily, who has white fur with black ears and eyes"})}),Object(p.jsx)("div",{className:"d-flex d-sm-none",children:Object(p.jsx)("img",{className:"lily position-absolute bottom-0 end-0 mb-5",src:S,alt:"My rabbit, Lily, who has white fur with black ears and eyes"})})]})}var J=function(e){Object(j.a)(s,e);var t=Object(o.a)(s);function s(){return Object(i.a)(this,s),t.apply(this,arguments)}return Object(l.a)(s,[{key:"render",value:function(){return Object(p.jsx)(P.a,{className:"about-page-container",children:Object(p.jsxs)(T.a,{children:[Object(p.jsx)(x.a,{xs:12,lg:3,className:"offset-lg-1",children:Object(p.jsx)(f.FadeTransform,{in:!0,transformProps:{enterTransform:"translateX(0px)",exitTransform:"translateX(-20%)"},children:Object(p.jsx)(X,{})},"About")}),Object(p.jsx)(x.a,{xs:12,md:6,lg:4,className:"offset-md-1 offset-lg-0",children:Object(p.jsx)(f.Fade,{in:!0,children:Object(p.jsx)(A,{})})}),Object(p.jsx)(x.a,{children:Object(p.jsx)(f.FadeTransform,{in:!0,transformProps:{enterTransform:"translateX(0px)",exitTransform:"translateX(20%)"},children:Object(p.jsx)(L,{})},"About")})]})})}}]),s}(a.Component);function _(){return Object(p.jsxs)("a",{href:"/Sean Mussack's resume.pdf",download:!0,className:"btn btn-warning download-button",children:[Object(p.jsx)("i",{className:"fas fa-download","aria-hidden":"true"}),"Download"]})}var W=function(e){Object(j.a)(s,e);var t=Object(o.a)(s);function s(){return Object(i.a)(this,s),t.apply(this,arguments)}return Object(l.a)(s,[{key:"render",value:function(){return Object(p.jsx)(P.a,{className:"resume-container",children:Object(p.jsxs)(T.a,{children:[Object(p.jsx)(x.a,{xs:12,sm:6,className:"resume-left-col",children:Object(p.jsxs)(f.FadeTransform,{in:!0,transformProps:{enterTransform:"translateX(0px)",exitTransform:"translateX(-20%)"},children:[Object(p.jsx)("p",{children:"PDF version of my resume:"}),Object(p.jsx)("p",{children:Object(p.jsx)(_,{})})]})}),Object(p.jsx)(x.a,{xs:12,sm:6,className:"px-4 px-md-5 mt-sm-5",children:Object(p.jsx)(f.FadeTransform,{in:!0,transformProps:{enterTransform:"translateX(0px)",exitTransform:"translateX(20%)"},children:Object(p.jsx)("img",{className:"resume-img img-fluid",src:"/Sean Mussack's resume-1.jpg",alt:"My resume in .pdf format"})},"About")})]})})}}]),s}(a.Component),B=function(e){Object(j.a)(s,e);var t=Object(o.a)(s);function s(){return Object(i.a)(this,s),t.apply(this,arguments)}return Object(l.a)(s,[{key:"render",value:function(){return Object(p.jsx)(P.a,{className:"contact-container",children:Object(p.jsxs)(f.Fade,{in:!0,children:[Object(p.jsx)("h2",{children:"Contact Me"}),Object(p.jsx)(T.a,{children:Object(p.jsx)(x.a,{xs:12,md:6,className:"offset-md-3",children:Object(p.jsxs)("ul",{children:[Object(p.jsxs)("li",{children:[Object(p.jsx)("i",{className:"fas fa-lg fa-envelope","aria-hidden":"true"}),Object(p.jsx)("a",{href:"mailto:seanmussack@gmail.com",children:"seanmussack@gmail.com"}),Object(p.jsx)("span",{children:" (preferred)"})]}),Object(p.jsxs)("li",{children:[Object(p.jsx)("i",{className:"fas fa-lg fa-phone","aria-hidden":"true"}),"+1 (612) 978-3144"]}),Object(p.jsxs)("li",{children:[Object(p.jsx)("i",{className:"fab fa-lg fa-github","aria-hidden":"true"}),Object(p.jsx)("a",{href:"https://github.com/SeanMussack",children:"github.com/SeanMussack"})]}),Object(p.jsxs)("li",{children:[Object(p.jsx)("i",{className:"fab fa-lg fa-linkedin","aria-hidden":"true"}),Object(p.jsx)("a",{href:"https://www.linkedin.com/in/sean-mussack-316330211/",children:"linkedin.com/in/sean-mussack-316330211/"})]})]})})})]})})}}]),s}(a.Component),D={name:"Jurassic Park",color:"yellow",href:"https://jurassic-park-reactstrap.netlify.app/",text:"Made with React and Bootstrap, the park from the original movie comes to life as a modern mobile-first single-page app.",isPicOnLeft:!0,imgSrc:"/Jurassic_Park_logo_no_words.png",imgWidth:"150px",altText:"The Jurassic Park logo",imgClass:"jurassic-park-img"},I={name:"Pixtronauts",color:"cyan",href:"https://pixtronauts.netlify.app/",text:"A continual work-in-progess, this JavaScript-based experience allows you to explore the planets of this cute pixel universe.",isPicOnLeft:!1,imgSrc:"/planemo-12px-cloudy.png",imgWidth:"100px",altText:"A pixel-art planet with yellow clouds",imgClass:"pixtronauts-img"};function H(e){return e=e.proj,Object(p.jsx)("a",{href:e.href,children:Object(p.jsxs)("div",{className:"project my-4 my-lg-5 project-"+e.color,children:[Object(p.jsx)("h4",{children:e.name}),Object(p.jsxs)(T.a,{children:[Object(p.jsxs)(x.a,{xs:7,sm:8,md:7,lg:8,children:[Object(p.jsx)("p",{className:"project-text d-block d-sm-none",children:e.text}),Object(p.jsx)("p",{className:"project-text d-none d-sm-block",children:e.text})]}),Object(p.jsx)(x.a,{xs:5,sm:4,md:5,lg:4,className:e.isPicOnLeft?"order-first":"order-last",children:Object(p.jsx)("img",{className:"project-img mx-0 mx-md-4 my-auto "+e.imgClass,src:e.imgSrc,alt:e.altText,style:{width:e.imgWidth}})})]})]})})}var R=function(e){Object(j.a)(s,e);var t=Object(o.a)(s);function s(){return Object(i.a)(this,s),t.apply(this,arguments)}return Object(l.a)(s,[{key:"render",value:function(){return Object(p.jsx)(P.a,{fluid:!0,className:"projects-container",children:Object(p.jsxs)(T.a,{children:[Object(p.jsx)(x.a,{xs:12,lg:6,children:Object(p.jsx)(f.FadeTransform,{in:!0,transformProps:{enterTransform:"translateX(0px)",exitTransform:"translateX(-20%)"},children:Object(p.jsx)(H,{proj:D})},"About")}),Object(p.jsx)(x.a,{xs:12,lg:6,children:Object(p.jsx)(f.FadeTransform,{in:!0,transformProps:{enterTransform:"translateX(0px)",exitTransform:"translateX(20%)"},children:Object(p.jsx)(H,{proj:I})},"About")})]})})}}]),s}(a.Component),E=[{name:"About",href:"about",color:"cyan",icon:"user"},{name:"Resume",href:"resume",color:"magenta",icon:"file"},{name:"Projects",href:"projects",color:"yellow",icon:"star"},{name:"Contact",href:"contact",color:"white",icon:"paper-plane"}],G=function(e){Object(j.a)(s,e);var t=Object(o.a)(s);function s(){return Object(i.a)(this,s),t.apply(this,arguments)}return Object(l.a)(s,[{key:"render",value:function(){return Object(p.jsxs)(a.Fragment,{children:[Object(p.jsx)(k,{pages:E}),Object(p.jsx)(m.TransitionGroup,{className:"transition-group",children:Object(p.jsx)(m.CSSTransition,{classNames:"page",timeout:300,children:Object(p.jsxs)(b.d,{className:"switch",children:[Object(p.jsx)(b.b,{path:"/home",render:function(){return Object(p.jsx)(C,{pages:E})}}),Object(p.jsx)(b.b,{path:"/about",component:J}),Object(p.jsx)(b.b,{path:"/resume",component:W}),Object(p.jsx)(b.b,{path:"/contact",component:B}),Object(p.jsx)(b.b,{path:"/projects",component:R}),Object(p.jsx)(b.a,{to:"/home"})]})},this.props.location.key)})]})}}]),s}(a.Component),U=Object(b.g)(G),q=function(e){Object(j.a)(s,e);var t=Object(o.a)(s);function s(){return Object(i.a)(this,s),t.apply(this,arguments)}return Object(l.a)(s,[{key:"render",value:function(){return Object(p.jsx)(O.a,{children:Object(p.jsx)("div",{className:"App",children:Object(p.jsx)(U,{})})})}}]),s}(a.Component),z=function(e){e&&e instanceof Function&&s.e(3).then(s.bind(null,58)).then((function(t){var s=t.getCLS,a=t.getFID,n=t.getFCP,c=t.getLCP,r=t.getTTFB;s(e),a(e),n(e),c(e),r(e)}))};s(49),s(50);r.a.render(Object(p.jsx)(n.a.StrictMode,{children:Object(p.jsx)(q,{})}),document.getElementById("root")),z()}},[[51,1,2]]]);
//# sourceMappingURL=main.b94fd153.chunk.js.map