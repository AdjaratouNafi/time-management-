(window.webpackJsonp=window.webpackJsonp||[]).push([[6],{"5EGp":function(e,t,a){"use strict";var r=a("63Ad");t.__esModule=!0,t.default=void 0;var n,l=r(a("T1e2")),i=r(a("QKC2")),d=r(a("PE9J")),s=r(a("8VmE")),c=r(a("mXGw")),o=r(a("W0B4")),u=function(e){var t=(0,s.default)({},e),a=t.resolutions,r=t.sizes,n=t.critical;return a&&(t.fixed=a,delete t.resolutions),r&&(t.fluid=r,delete t.sizes),n&&(t.loading="eager"),t.fluid&&(t.fluid=y([].concat(t.fluid))),t.fixed&&(t.fixed=y([].concat(t.fixed))),t},f=function(e){var t=e.media;return!!t&&(b&&!!window.matchMedia(t).matches)},m=function(e){var t=e.fluid,a=e.fixed,r=g(t||a||[]);return r&&r.src},g=function(e){if(b&&function(e){return!!e&&Array.isArray(e)&&e.some((function(e){return void 0!==e.media}))}(e)){var t=e.findIndex(f);if(-1!==t)return e[t];var a=e.findIndex((function(e){return void 0===e.media}));if(-1!==a)return e[a]}return e[0]},h=Object.create({}),p=function(e){var t=u(e),a=m(t);return h[a]||!1},E="undefined"!=typeof HTMLImageElement&&"loading"in HTMLImageElement.prototype,b="undefined"!=typeof window,v=b&&window.IntersectionObserver,S=new WeakMap;function w(e){return e.map((function(e){var t=e.src,a=e.srcSet,r=e.srcSetWebp,n=e.media,l=e.sizes;return c.default.createElement(c.default.Fragment,{key:t},r&&c.default.createElement("source",{type:"image/webp",media:n,srcSet:r,sizes:l}),c.default.createElement("source",{media:n,srcSet:a,sizes:l}))}))}function y(e){var t=[],a=[];return e.forEach((function(e){return(e.media?t:a).push(e)})),[].concat(t,a)}function k(e){return e.map((function(e){var t=e.src,a=e.media,r=e.tracedSVG;return c.default.createElement("source",{key:t,media:a,srcSet:r})}))}function L(e){return e.map((function(e){var t=e.src,a=e.media,r=e.base64;return c.default.createElement("source",{key:t,media:a,srcSet:r})}))}function I(e,t){var a=e.srcSet,r=e.srcSetWebp,n=e.media,l=e.sizes;return"<source "+(t?"type='image/webp' ":"")+(n?'media="'+n+'" ':"")+'srcset="'+(t?r:a)+'" '+(l?'sizes="'+l+'" ':"")+"/>"}var O=function(e,t){var a=(void 0===n&&"undefined"!=typeof window&&window.IntersectionObserver&&(n=new window.IntersectionObserver((function(e){e.forEach((function(e){if(S.has(e.target)){var t=S.get(e.target);(e.isIntersecting||e.intersectionRatio>0)&&(n.unobserve(e.target),S.delete(e.target),t())}}))}),{rootMargin:"200px"})),n);return a&&(a.observe(e),S.set(e,t)),function(){a.unobserve(e),S.delete(e)}},R=function(e){var t=e.src?'src="'+e.src+'" ':'src="" ',a=e.sizes?'sizes="'+e.sizes+'" ':"",r=e.srcSet?'srcset="'+e.srcSet+'" ':"",n=e.title?'title="'+e.title+'" ':"",l=e.alt?'alt="'+e.alt+'" ':'alt="" ',i=e.width?'width="'+e.width+'" ':"",d=e.height?'height="'+e.height+'" ':"",s=e.crossOrigin?'crossorigin="'+e.crossOrigin+'" ':"",c=e.loading?'loading="'+e.loading+'" ':"",o=e.draggable?'draggable="'+e.draggable+'" ':"";return"<picture>"+e.imageVariants.map((function(e){return(e.srcSetWebp?I(e,!0):"")+I(e)})).join("")+"<img "+c+i+d+a+r+t+l+n+s+o+'style="position:absolute;top:0;left:0;opacity:1;width:100%;height:100%;object-fit:cover;object-position:center"/></picture>'},j=c.default.forwardRef((function(e,t){var a=e.src,r=e.imageVariants,n=e.generateSources,l=e.spreadProps,i=e.ariaHidden,d=c.default.createElement(P,(0,s.default)({ref:t,src:a},l,{ariaHidden:i}));return r.length>1?c.default.createElement("picture",null,n(r),d):d})),P=c.default.forwardRef((function(e,t){var a=e.sizes,r=e.srcSet,n=e.src,l=e.style,i=e.onLoad,o=e.onError,u=e.loading,f=e.draggable,m=e.ariaHidden,g=(0,d.default)(e,["sizes","srcSet","src","style","onLoad","onError","loading","draggable","ariaHidden"]);return c.default.createElement("img",(0,s.default)({"aria-hidden":m,sizes:a,srcSet:r,src:n},g,{onLoad:i,onError:o,ref:t,loading:u,draggable:f,style:(0,s.default)({position:"absolute",top:0,left:0,width:"100%",height:"100%",objectFit:"cover",objectPosition:"center"},l)}))}));P.propTypes={style:o.default.object,onError:o.default.func,onLoad:o.default.func};var x=function(e){function t(t){var a;(a=e.call(this,t)||this).seenBefore=b&&p(t),a.isCritical="eager"===t.loading||t.critical,a.addNoScript=!(a.isCritical&&!t.fadeIn),a.useIOSupport=!E&&v&&!a.isCritical&&!a.seenBefore;var r=a.isCritical||b&&(E||!a.useIOSupport);return a.state={isVisible:r,imgLoaded:!1,imgCached:!1,fadeIn:!a.seenBefore&&t.fadeIn},a.imageRef=c.default.createRef(),a.placeholderRef=t.placeholderRef||c.default.createRef(),a.handleImageLoaded=a.handleImageLoaded.bind((0,l.default)(a)),a.handleRef=a.handleRef.bind((0,l.default)(a)),a}(0,i.default)(t,e);var a=t.prototype;return a.componentDidMount=function(){if(this.state.isVisible&&"function"==typeof this.props.onStartLoad&&this.props.onStartLoad({wasCached:p(this.props)}),this.isCritical){var e=this.imageRef.current;e&&e.complete&&this.handleImageLoaded()}},a.componentWillUnmount=function(){this.cleanUpListeners&&this.cleanUpListeners()},a.handleRef=function(e){var t=this;this.useIOSupport&&e&&(this.cleanUpListeners=O(e,(function(){var e=p(t.props);t.state.isVisible||"function"!=typeof t.props.onStartLoad||t.props.onStartLoad({wasCached:e}),t.setState({isVisible:!0},(function(){t.setState({imgLoaded:e,imgCached:!(!t.imageRef.current||!t.imageRef.current.currentSrc)})}))})))},a.handleImageLoaded=function(){var e,t,a;e=this.props,t=u(e),(a=m(t))&&(h[a]=!0),this.setState({imgLoaded:!0}),this.props.onLoad&&this.props.onLoad()},a.render=function(){var e=u(this.props),t=e.title,a=e.alt,r=e.className,n=e.style,l=void 0===n?{}:n,i=e.imgStyle,d=void 0===i?{}:i,o=e.placeholderStyle,f=void 0===o?{}:o,m=e.placeholderClassName,h=e.fluid,p=e.fixed,E=e.backgroundColor,b=e.durationFadeIn,v=e.Tag,S=e.itemProp,y=e.loading,I=e.draggable,O=!1===this.state.fadeIn||this.state.imgLoaded,x=!0===this.state.fadeIn&&!this.state.imgCached,T=(0,s.default)({opacity:O?1:0,transition:x?"opacity "+b+"ms":"none"},d),z="boolean"==typeof E?"lightgray":E,M={transitionDelay:b+"ms"},C=(0,s.default)({opacity:this.state.imgLoaded?0:1},x&&M,d,f),V={title:t,alt:this.state.isVisible?"":a,style:C,className:m,itemProp:S};if(h){var N=h,W=g(h);return c.default.createElement(v,{className:(r||"")+" gatsby-image-wrapper",style:(0,s.default)({position:"relative",overflow:"hidden",maxWidth:W.maxWidth?W.maxWidth+"px":null,maxHeight:W.maxHeight?W.maxHeight+"px":null},l),ref:this.handleRef,key:"fluid-"+JSON.stringify(W.srcSet)},c.default.createElement(v,{"aria-hidden":!0,style:{width:"100%",paddingBottom:100/W.aspectRatio+"%"}}),z&&c.default.createElement(v,{"aria-hidden":!0,title:t,style:(0,s.default)({backgroundColor:z,position:"absolute",top:0,bottom:0,opacity:this.state.imgLoaded?0:1,right:0,left:0},x&&M)}),W.base64&&c.default.createElement(j,{ariaHidden:!0,ref:this.placeholderRef,src:W.base64,spreadProps:V,imageVariants:N,generateSources:L}),W.tracedSVG&&c.default.createElement(j,{ariaHidden:!0,ref:this.placeholderRef,src:W.tracedSVG,spreadProps:V,imageVariants:N,generateSources:k}),this.state.isVisible&&c.default.createElement("picture",null,w(N),c.default.createElement(P,{alt:a,title:t,sizes:W.sizes,src:W.src,crossOrigin:this.props.crossOrigin,srcSet:W.srcSet,style:T,ref:this.imageRef,onLoad:this.handleImageLoaded,onError:this.props.onError,itemProp:S,loading:y,draggable:I})),this.addNoScript&&c.default.createElement("noscript",{dangerouslySetInnerHTML:{__html:R((0,s.default)({alt:a,title:t,loading:y},W,{imageVariants:N}))}}))}if(p){var D=p,B=g(p),H=(0,s.default)({position:"relative",overflow:"hidden",display:"inline-block",width:B.width,height:B.height},l);return"inherit"===l.display&&delete H.display,c.default.createElement(v,{className:(r||"")+" gatsby-image-wrapper",style:H,ref:this.handleRef,key:"fixed-"+JSON.stringify(B.srcSet)},z&&c.default.createElement(v,{"aria-hidden":!0,title:t,style:(0,s.default)({backgroundColor:z,width:B.width,opacity:this.state.imgLoaded?0:1,height:B.height},x&&M)}),B.base64&&c.default.createElement(j,{ariaHidden:!0,ref:this.placeholderRef,src:B.base64,spreadProps:V,imageVariants:D,generateSources:L}),B.tracedSVG&&c.default.createElement(j,{ariaHidden:!0,ref:this.placeholderRef,src:B.tracedSVG,spreadProps:V,imageVariants:D,generateSources:k}),this.state.isVisible&&c.default.createElement("picture",null,w(D),c.default.createElement(P,{alt:a,title:t,width:B.width,height:B.height,sizes:B.sizes,src:B.src,crossOrigin:this.props.crossOrigin,srcSet:B.srcSet,style:T,ref:this.imageRef,onLoad:this.handleImageLoaded,onError:this.props.onError,itemProp:S,loading:y,draggable:I})),this.addNoScript&&c.default.createElement("noscript",{dangerouslySetInnerHTML:{__html:R((0,s.default)({alt:a,title:t,loading:y},B,{imageVariants:D}))}}))}return null},t}(c.default.Component);x.defaultProps={fadeIn:!0,durationFadeIn:500,alt:"",Tag:"div",loading:"lazy"};var T=o.default.shape({width:o.default.number.isRequired,height:o.default.number.isRequired,src:o.default.string.isRequired,srcSet:o.default.string.isRequired,base64:o.default.string,tracedSVG:o.default.string,srcWebp:o.default.string,srcSetWebp:o.default.string,media:o.default.string}),z=o.default.shape({aspectRatio:o.default.number.isRequired,src:o.default.string.isRequired,srcSet:o.default.string.isRequired,sizes:o.default.string.isRequired,base64:o.default.string,tracedSVG:o.default.string,srcWebp:o.default.string,srcSetWebp:o.default.string,media:o.default.string,maxWidth:o.default.number,maxHeight:o.default.number});function M(e){return function(t,a,r){var n;if(!t.fixed&&!t.fluid)throw new Error("The prop `fluid` or `fixed` is marked as required in `"+r+"`, but their values are both `undefined`.");o.default.checkPropTypes(((n={})[a]=e,n),t,"prop",r)}}x.propTypes={resolutions:T,sizes:z,fixed:M(o.default.oneOfType([T,o.default.arrayOf(T)])),fluid:M(o.default.oneOfType([z,o.default.arrayOf(z)])),fadeIn:o.default.bool,durationFadeIn:o.default.number,title:o.default.string,alt:o.default.string,className:o.default.oneOfType([o.default.string,o.default.object]),critical:o.default.bool,crossOrigin:o.default.oneOfType([o.default.string,o.default.bool]),style:o.default.object,imgStyle:o.default.object,placeholderStyle:o.default.object,placeholderClassName:o.default.string,backgroundColor:o.default.oneOfType([o.default.string,o.default.bool]),onLoad:o.default.func,onError:o.default.func,onStartLoad:o.default.func,Tag:o.default.string,itemProp:o.default.string,loading:o.default.oneOf(["auto","lazy","eager"]),draggable:o.default.bool};var C=x;t.default=C},QeBL:function(e,t,a){"use strict";a.r(t);var r=a("mXGw"),n=a.n(r),l=a("Nhdc"),i=a("BVxp"),d=a("5EGp"),s=a.n(d),c=a("bFe0"),o=a("20nU"),u=a("0lfv"),f=a("sqT6"),m=a("Wbzz"),g=function(){var e=Object(m.useStaticQuery)("1560457519"),t=e.allMarkdownRemark,a=e.workTimePreviewLight,d=e.workTimePreviewDark,g=e.shortBreakPreviewLight,h=e.shortBreakPreviewDark,p=e.longBreakPreviewLight,E=e.longBreakPreviewDark,b=e.configPreviewLight,v=e.configPreviewDark,S=e.settingsPreviewLight,w=e.settingsPreviewDark,y=e.tasksPreviewLight,k=e.tasksPreviewDark,L=t.edges[0].node.frontmatter,I=Object(r.useState)("Mobile"),O=I[0],R=I[1],j=Object(r.useContext)(f.c).isDarkMode;Object(r.useLayoutEffect)((function(){R(Object(u.a)())}),[]);return n.a.createElement(c.L,{id:"landing"},n.a.createElement(c.O,null,n.a.createElement(c.wb,null,n.a.createElement(c.ub,null),n.a.createElement(c.vb,null)),n.a.createElement(c.M,null,n.a.createElement(c.Q,null,n.a.createElement(c.R,null,L.title),n.a.createElement(c.P,null,L.subTitle)),n.a.createElement(c.N,null,function(){switch(O){case"Windows":return n.a.createElement(c.k,null,n.a.createElement("a",{href:o.WINDOWS_INSTALLER},n.a.createElement(l.d,{name:"windows"}),"for Windows"));case"MacOS":return n.a.createElement(c.k,null,n.a.createElement("a",{href:o.MAC_INSTALLER},n.a.createElement(l.d,{name:"apple"}),"for Mac OS"));case"Linux":return n.a.createElement(c.k,null,n.a.createElement(i.Link,{href:"/",to:"installers",offset:-24,duration:420,smooth:!0},n.a.createElement(l.d,{name:"tux"}),"for Linux OS"));default:return n.a.createElement(c.k,null,n.a.createElement(i.Link,{href:"/",to:"installers",offset:-24,duration:420,smooth:!0},n.a.createElement(l.d,{name:"download"}),"See Installers"))}}(),n.a.createElement(c.I,{as:"a",href:"https://github.com/roldanjr/pomatez",target:"_blank",rel:"noopener noreferrer"},n.a.createElement(l.d,{name:"github"}),"GitHub Repo"))),n.a.createElement(c.hb,null,n.a.createElement(c.gb,null,n.a.createElement(s.a,{fluid:j?k.childImageSharp.fluid:y.childImageSharp.fluid,alt:"tasks preview"})),n.a.createElement(c.gb,null,n.a.createElement(s.a,{fluid:j?w.childImageSharp.fluid:S.childImageSharp.fluid,alt:"settings preview"})),n.a.createElement(c.gb,null,n.a.createElement(s.a,{fluid:j?v.childImageSharp.fluid:b.childImageSharp.fluid,alt:"config preview"})),n.a.createElement(c.gb,null,n.a.createElement(s.a,{fluid:j?d.childImageSharp.fluid:a.childImageSharp.fluid,alt:"work time preview"})),n.a.createElement(c.gb,null,n.a.createElement(s.a,{fluid:j?h.childImageSharp.fluid:g.childImageSharp.fluid,alt:"short break preview"})),n.a.createElement(c.gb,null,n.a.createElement(s.a,{fluid:j?E.childImageSharp.fluid:p.childImageSharp.fluid,alt:"long break preview"})))))},h=a("SUdF"),p=a("2peb"),E=function(){var e,t=Object(m.useStaticQuery)("2772759684"),a=t.allMarkdownRemark,i=t.tasksPreviewLight,d=t.tasksPreviewDark,o=t.configPreviewLight,u=t.configPreviewDark,g=Object(r.useContext)(f.c).isDarkMode,E=Object(h.a)({triggerOnce:!0}),b=E[0],v=E[1],S=Object(p.b)();Object(r.useEffect)((function(){v&&S.start("animate")}),[S,v]);var w=a.edges[0].node;return n.a.createElement(c.E,{id:"features"},n.a.createElement(c.z,null,n.a.createElement(l.a,{node:w}),n.a.createElement(c.y,{ref:b,animate:S},n.a.createElement(c.sb,null,n.a.createElement(c.D,null,n.a.createElement(c.C,null,n.a.createElement(s.a,{fluid:g?d.childImageSharp.fluid:i.childImageSharp.fluid,alt:"tasks preview"})),n.a.createElement(c.C,null,n.a.createElement(s.a,{fluid:g?u.childImageSharp.fluid:o.childImageSharp.fluid,alt:"config preview"})))),n.a.createElement(c.B,null,null===(e=w.frontmatter.features)||void 0===e?void 0:e.map((function(e,t){return n.a.createElement(c.A,{key:t},n.a.createElement("h5",null,e.heading),n.a.createElement("p",null,e.description))}))))))},b=function(){var e,t,a=Object(m.useStaticQuery)("207954612").allMarkdownRemark,i=Object(h.a)({triggerOnce:!0}),d=i[0],o=i[1],u=Object(h.a)({triggerOnce:!0}),f=u[0],g=u[1],E=Object(p.b)(),b=Object(p.b)();Object(r.useEffect)((function(){o&&E.start("animate"),g&&b.start("animate")}),[E,o,b,g]);var v=a.edges[0].node;return n.a.createElement(c.j,{id:"boosters"},n.a.createElement(c.z,null,n.a.createElement(l.a,{node:v}),n.a.createElement(c.i,{ref:d,animate:E},null===(e=v.frontmatter.boosters)||void 0===e?void 0:e.map((function(e,t){return n.a.createElement(c.h,{key:t},n.a.createElement(c.g,null,n.a.createElement(s.a,{fixed:e.image.childImageSharp.fixed,alt:e.heading})),n.a.createElement(c.f,null,n.a.createElement("h5",null,e.heading),n.a.createElement("p",null,e.description),n.a.createElement("a",{href:e.link,rel:"noopener noreferrer",target:"_blank"},"See Details")))}))),n.a.createElement(c.n,{ref:f,animate:b},n.a.createElement(c.l,null,v.frontmatter.headline),n.a.createElement("div",null,null===(t=v.frontmatter.companies)||void 0===t?void 0:t.map((function(e,t){return n.a.createElement(c.m,{key:t},n.a.createElement(s.a,{fluid:e.logo.childImageSharp.fluid,alt:e.name}))}))))))},v=function(){var e,t=Object(m.useStaticQuery)("3776110879"),a=t.allMarkdownRemark,i=t.shortBreakPreviewLight,d=t.shortBreakPreviewDark,o=t.longBreakPreviewLight,u=t.longBreakPreviewDark,g=Object(r.useContext)(f.c).isDarkMode,E=Object(h.a)({triggerOnce:!0}),b=E[0],v=E[1],S=Object(p.b)();Object(r.useEffect)((function(){v&&S.start("animate")}),[S,v]);var w=a.edges[0].node;return n.a.createElement(c.ib,{id:"roadmap"},n.a.createElement(c.kb,null,n.a.createElement(l.a,{node:w}),n.a.createElement(c.jb,{ref:b,animate:S},n.a.createElement(c.sb,null,n.a.createElement(c.mb,null,n.a.createElement(c.lb,null,n.a.createElement(s.a,{fluid:g?d.childImageSharp.fluid:i.childImageSharp.fluid,alt:"short break preview"})),n.a.createElement(c.lb,null,n.a.createElement(s.a,{fluid:g?u.childImageSharp.fluid:o.childImageSharp.fluid,alt:"long break preview"})))),n.a.createElement(c.ob,null,null===(e=w.frontmatter.features)||void 0===e?void 0:e.map((function(e,t){return n.a.createElement(c.nb,{key:t},n.a.createElement("h5",null,e.heading),n.a.createElement("p",null,e.description))}))))))},S=function(){var e=Object(m.useStaticQuery)("2952297972").allMarkdownRemark,t=Object(h.a)({triggerOnce:!0}),a=t[0],i=t[1],d=Object(p.b)();Object(r.useEffect)((function(){i&&d.start("animate")}),[d,i]);var s=e.edges[0].node;return n.a.createElement(c.q,{id:"installers"},n.a.createElement(c.t,null,n.a.createElement(l.a,{node:s}),n.a.createElement(c.s,{ref:a,animate:d},n.a.createElement(c.w,null,n.a.createElement(c.x,null,n.a.createElement(l.d,{name:"windows"})),n.a.createElement(c.r,null,n.a.createElement("a",{href:o.WINDOWS_INSTALLER},n.a.createElement(l.d,{name:"download"}),"Windows 7, 8 and 10"))),n.a.createElement(c.u,null,n.a.createElement(c.x,null,n.a.createElement(l.d,{name:"linux"})),n.a.createElement(c.T,null,n.a.createElement(c.r,null,n.a.createElement("a",{href:o.DEB_INSTALLER,id:"deb"},n.a.createElement(l.d,{name:"download"}),".deb")),n.a.createElement(c.r,null,n.a.createElement("a",{href:o.APP_IMAGE_INSTALLER,id:"app-image"},n.a.createElement(l.d,{name:"download"}),".AppImage")),n.a.createElement(c.r,{id:"rpm"},n.a.createElement("a",{href:o.RPM_INSTALLER},n.a.createElement(l.d,{name:"download"}),".rpm")),n.a.createElement(c.U,null,"Or"),n.a.createElement(c.r,{id:"snap-store-btn"},n.a.createElement("a",{href:"https://snapcraft.io/pomatez",target:"_blank",rel:"noopener noreferrer"},n.a.createElement("span",null,"Get it from Snap Store"),n.a.createElement(l.d,{name:"snap-store"}))))),n.a.createElement(c.v,null,n.a.createElement(c.x,null,n.a.createElement(l.d,{name:"apple"})),n.a.createElement(c.r,null,n.a.createElement("a",{href:o.MAC_INSTALLER},n.a.createElement(l.d,{name:"download"}),"Mac OS 10.10+"))))))};t.default=function(){return n.a.createElement(l.b,null,n.a.createElement(l.c,null),n.a.createElement(g,null),n.a.createElement(E,null),n.a.createElement(b,null),n.a.createElement(v,null),n.a.createElement(S,null))}}}]);
//# sourceMappingURL=component---src-pages-index-tsx-68ce321dcdf4b0c39a6b.js.map