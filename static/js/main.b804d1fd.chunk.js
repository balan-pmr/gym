(this.webpackJsonpgymmetrics=this.webpackJsonpgymmetrics||[]).push([[0],{192:function(e,t,a){e.exports=a(405)},394:function(e,t,a){},395:function(e,t,a){},405:function(e,t,a){"use strict";a.r(t);a(193),a(202),a(385);var l=a(0),n=a.n(l),r=a(190),c=a.n(r),m=(a(394),a(395),a(11)),s={isLogged:!1,user:{uid:""},onAuthentication:function(e){this.isLogged=!0,this.user.uid=e},getLogginStatus:function(){return this.isLogged},onLogout:function(){this.isLogged=!1,this.user.uid=""}},u=a(15),o=function(e){var t=e.uid,a=e.headerRef,l=Object(u.g)();return n.a.createElement("div",{style:{display:"inline-flex"}},n.a.createElement("span",{style:{marginTop:"28px"}},t),n.a.createElement("span",{style:{marginTop:"60px",marginLeft:"15px"}},n.a.createElement("a",{href:"/",onClick:function(e){return e.preventDefault(),console.log("Removing user session...."),s.onLogout(),a.current.updateLogged(""),void l.push("/")},className:"ml-link",style:{backgroundColor:"black"}},"\xa0Cerrar Sesi\xf3n\xa0")))},i=a(31),E=(a(92),a(24)),d=Object(l.forwardRef)((function(e,t){var a=Object(l.useState)(!1),r=Object(m.a)(a,2),c=r[0],u=r[1],d=Object(l.useState)(""),g=Object(m.a)(d,2),p=g[0],b=g[1];return Object(l.useImperativeHandle)(t,(function(){return{updateLogged:function(e){u(s.getLogginStatus()),b(e)}}})),n.a.createElement(i.Row,{gutter:40,style:{backgroundColor:"#45b39d"}},n.a.createElement(i.Col,{span:4,style:{textAlign:"center"}},n.a.createElement(E.b,{to:"/ref"},n.a.createElement("img",{src:"/gym/assets/images/gym/gym.png",alt:"Home Icon",style:{width:"80px",margin:"15px 0 0px 0"}})),n.a.createElement("p",{style:{fontSize:"11px"}}," nosotros bien gorditos jiji  ")),n.a.createElement(i.Col,{span:4,style:{textAlign:"left"}},n.a.createElement("nav",null,n.a.createElement("ul",null,n.a.createElement("li",null,n.a.createElement(E.b,{to:"/ref"},n.a.createElement("span",{className:"ml-link"},"Referencias"))),s.getLogginStatus()&&n.a.createElement("li",null,n.a.createElement(E.b,{to:"/metrics/ale"},n.a.createElement("span",{className:"ml-link"},"Ale"))),s.getLogginStatus()&&n.a.createElement("li",null,n.a.createElement(E.b,{to:"/metrics/balan"},n.a.createElement("span",{className:"ml-link"},"Balan")))))),c?n.a.createElement(i.Col,{span:4,style:{display:"flex",justifyContent:"center"}},n.a.createElement(o,{uid:p,headerRef:t})):n.a.createElement(i.Col,{span:4},n.a.createElement(E.b,{to:"/"},n.a.createElement("span",{className:"ml-link",style:{marginTop:"60px",backgroundColor:"black"}},"\xa0Iniciar\xa0"))))})),g=function(){return n.a.createElement("div",null,n.a.createElement(i.Row,{gutter:4},n.a.createElement(i.Col,{span:12},"Home content goes here ",n.a.createElement("br",null))))},p=a(38),b=a.n(p),f=a(57),h=function(e){var t={display:void 0!==e.display?e.display:"flex",justifyContent:void 0!==e.justify?e.justify:"center",padding:"10px"};return n.a.createElement("div",{style:t},n.a.createElement("div",{style:{backgroundColor:"white",maxHeight:"auto",maxWidth:"auto",boxShadow:"1px 3px 5px 0 darkcyan",padding:"20px"}},""===e.children?"Box content goes here..":e.children))},y=function(e){var t=Object(u.g)(),a=Object(l.useState)(""),r=Object(m.a)(a,2),c=r[0],o=r[1],i=Object(l.useState)(!1),E=Object(m.a)(i,2),d=E[0],g=E[1],p=Object(l.useState)(""),y=Object(m.a)(p,2),x=y[0],v=y[1],O=function(){var e=Object(f.a)(b.a.mark((function e(t){return b.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:t.preventDefault(),g(!0),j(),g(!1);case 4:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}();function j(){return w.apply(this,arguments)}function w(){return(w=Object(f.a)(b.a.mark((function a(){var l;return b.a.wrap((function(a){for(;;)switch(a.prev=a.next){case 0:return console.log("Fetching data from  ","https://script.google.com/macros/s/AKfycbx0qaT99GKzvBnKA_ZfRKtSJuuvypzmFb6ESyrflZCa6Hir4LZw/exec?action=pwd"),l={password:c},a.next=4,fetch("https://script.google.com/macros/s/AKfycbx0qaT99GKzvBnKA_ZfRKtSJuuvypzmFb6ESyrflZCa6Hir4LZw/exec?action=pwd",{method:"POST",body:JSON.stringify(l)}).then((function(e){return e.json()})).then((function(a){if(null!==a)if(console.log("Result is ",a),"true"===a.result){s.onAuthentication(""),e.headerRef.current.updateLogged("");var l=parseInt("30");setTimeout((function(){e.modalSessionRef.current.showModal(),s.onLogout()}),6e4*l),t.push("/ref")}else v("password invalido.")}),(function(e){console.log(e),v("Error inesperado: "+e)}));case 4:case"end":return a.stop()}}),a)})))).apply(this,arguments)}return n.a.createElement("div",{style:{paddingBottom:"400px"}},n.a.createElement(h,null,n.a.createElement("div",{style:{textAlign:"center",display:"grid"}},n.a.createElement("img",{src:"/gym/assets/images/gym/gym-login.png",alt:"Login Icon",style:{width:"200px",margin:"5px"}}),n.a.createElement("input",{type:"password",onChange:function(e){return o(e.target.value)},value:c,style:{margin:"10px"}}),d?n.a.createElement("span",{className:"ml-button-disabled"},"INGRESAR"):n.a.createElement("a",{href:"/",className:"ml-button-primary",onClick:function(e){return O(e)}}," INGRESAR"),n.a.createElement("br",null),""!==x?n.a.createElement("p",null,x):"")))},x=function(e){return n.a.createElement(u.b,{path:e.path,render:function(t){return s.getLogginStatus()?n.a.createElement(e.component,t):n.a.createElement(u.a,{to:{pathname:"/"}})}})},v=Object(l.forwardRef)((function(e,t){var a=Object(l.useState)(!1),r=Object(m.a)(a,2),c=r[0],o=r[1],i=Object(u.g)();Object(l.useImperativeHandle)(t,(function(){return{getAlert:function(){console.log("getAlert from Child")},showModal:function(){console.log("Showing modal for expired session..."),o(!0)}}}));return c&&n.a.createElement("div",{className:"modal",style:{zIndex:"3000"}},n.a.createElement("div",{className:"ml-lightbox-container-session modal-main"},n.a.createElement("div",{style:{display:"flex"}}),n.a.createElement("br",null),n.a.createElement("br",null),n.a.createElement("br",null),n.a.createElement("br",null),n.a.createElement("div",{style:{textAlign:"center"}},n.a.createElement("img",{src:"./assets/images/session_timeout.png",alt:"Session Timeout",style:{width:"130px"}})),n.a.createElement("h1",{className:"header-small align-center"},"Lo sentimos."),n.a.createElement("h2",{className:"header-small align-center"},"El tiempo de tu sesi\xf3n ha expirado. Por favor ingresa nuevamente."),n.a.createElement("br",null),n.a.createElement("div",{style:{display:"flex"}},n.a.createElement("div",{style:{margin:"auto"}},n.a.createElement("a",{href:"/",rel:"modal:close",className:"ml-button-primary",onClick:function(t){return t.preventDefault(),console.log("Removing user session...."),s.onLogout(),e.headerRef.current.updateLogged(s.getLogginStatus(),""),o(!1),void i.push("/")}},"INGRESAR")))," ",n.a.createElement("br",null),n.a.createElement("br",null),n.a.createElement("br",null),n.a.createElement("br",null),n.a.createElement("br",null),n.a.createElement("br",null)))})),O=function(){return n.a.createElement("div",{style:{}},n.a.createElement("div",{style:{textAlign:"center"}},n.a.createElement("img",{src:"./assets/images/page_not_found.png",alt:"Page not found",style:{width:"130px",marginTop:"150px"}})),n.a.createElement("h1",{className:"header-small align-center"},"Oops!"),n.a.createElement("h2",{className:"header-small align-center"},"No se logr\xf3 encontrar esta pagina."))},j=function(e){return n.a.createElement("div",{style:{}},n.a.createElement(h,{display:"table-cell"},n.a.createElement(h,{display:"table-cell"},n.a.createElement("h2",null,"Body Fat Percentege"),n.a.createElement("table",{style:{width:"100%",textAlign:"center"},className:"greyGridTable"},n.a.createElement("thead",null,n.a.createElement("tr",null,n.a.createElement("th",null,"Gender"),n.a.createElement("th",null,"Age"),n.a.createElement("th",null,"-(Low)"),n.a.createElement("th",null,"0 (Normal)"),n.a.createElement("th",null,"+ (High)"),n.a.createElement("th",null,"++ (Very High)"))),n.a.createElement("tbody",null,n.a.createElement("tr",null,n.a.createElement("td",null,"Female"),n.a.createElement("td",null,n.a.createElement("b",null,"20-29")),n.a.createElement("td",null,"< 21.0"),n.a.createElement("td",null,"21.0 - 32.9"),n.a.createElement("td",null,"33.0 - 38.9"),n.a.createElement("td",null,">= 39.0")),n.a.createElement("tr",null,n.a.createElement("td",null,"Female"),n.a.createElement("td",null,n.a.createElement("b",null,"40-59")),n.a.createElement("td",null,"< 23.0"),n.a.createElement("td",null,"23.0 - 33.9"),n.a.createElement("td",null,"34.0 - 39.9"),n.a.createElement("td",null,">= 40.0")),n.a.createElement("tr",null,n.a.createElement("td",null,"Female"),n.a.createElement("td",null,n.a.createElement("b",null,"60-79")),n.a.createElement("td",null,"< 24.0"),n.a.createElement("td",null,"24.0 - 35.9"),n.a.createElement("td",null,"36.0 - 41.9"),n.a.createElement("td",null,">= 42.0")),n.a.createElement("tr",null,n.a.createElement("td",null,"Male"),n.a.createElement("td",null,n.a.createElement("b",null,"20-29")),n.a.createElement("td",null,"< 8.0"),n.a.createElement("td",null,"8.0 - 19.9"),n.a.createElement("td",null,"20.0 - 24.9"),n.a.createElement("td",null,">= 25.0")),n.a.createElement("tr",null,n.a.createElement("td",null,"Male"),n.a.createElement("td",null,n.a.createElement("b",null,"40-59")),n.a.createElement("td",null,"< 11.0"),n.a.createElement("td",null,"11.0 - 21.9"),n.a.createElement("td",null,"22.0 - 27.9"),n.a.createElement("td",null,">= 28.0")),n.a.createElement("tr",null,n.a.createElement("td",null,"Male"),n.a.createElement("td",null,n.a.createElement("b",null,"60-79")),n.a.createElement("td",null,"< 13.0"),n.a.createElement("td",null,"13.0 - 24.9"),n.a.createElement("td",null,"25.0 - 29.9"),n.a.createElement("td",null,">= 30.0"))))),n.a.createElement(h,{display:"table-cell"},n.a.createElement("h2",null,"Viceral Fat Level"),n.a.createElement("table",{style:{width:"100%",textAlign:"center"},className:"greyGridTable"},n.a.createElement("thead",null,n.a.createElement("tr",null,n.a.createElement("th",null,"Viceral Fat Level"),n.a.createElement("th",null,"Viceral Fat Level Classification"))),n.a.createElement("tbody",null,n.a.createElement("tr",null,n.a.createElement("td",null," <= 9 "),n.a.createElement("td",null,"0 (Normal)")),n.a.createElement("tr",null,n.a.createElement("td",null,"10 - 14 "),n.a.createElement("td",null,"+ (High) ")),n.a.createElement("tr",null,n.a.createElement("td",null," >= 15 "),n.a.createElement("td",null,"++(Very High)"))))),n.a.createElement(h,{display:"table-cell"},n.a.createElement("h2",null,"Skeletal Muscle Percentege "),n.a.createElement("table",{style:{width:"100%",textAlign:"center"},className:"greyGridTable"},n.a.createElement("thead",null,n.a.createElement("tr",null,n.a.createElement("th",null,"Gender"),n.a.createElement("th",null,"Age"),n.a.createElement("th",null,"-(Low)"),n.a.createElement("th",null,"0 (Normal)"),n.a.createElement("th",null,"+ (High)"),n.a.createElement("th",null,"++ (Very High)"))),n.a.createElement("tbody",null,n.a.createElement("tr",null,n.a.createElement("td",null,"Female"),n.a.createElement("td",null,n.a.createElement("b",null,"18-34")),n.a.createElement("td",null,"< 24.3"),n.a.createElement("td",null,"24.3 - 30.3"),n.a.createElement("td",null,"30.4 - 35.3"),n.a.createElement("td",null,">= 35.4")),n.a.createElement("tr",null,n.a.createElement("td",null,"Female"),n.a.createElement("td",null,n.a.createElement("b",null,"40-59")),n.a.createElement("td",null,"< 24.1"),n.a.createElement("td",null,"24.1 - 30.1"),n.a.createElement("td",null,"30.2 - 35.1"),n.a.createElement("td",null,">= 35.2")),n.a.createElement("tr",null,n.a.createElement("td",null,"Female"),n.a.createElement("td",null,n.a.createElement("b",null,"60-80")),n.a.createElement("td",null,"< 23.9"),n.a.createElement("td",null,"23.9 - 29.9"),n.a.createElement("td",null,"30.0 - 34.9"),n.a.createElement("td",null,">= 35.0")),n.a.createElement("tr",null,n.a.createElement("td",null,"Male"),n.a.createElement("td",null,n.a.createElement("b",null,"18-39")),n.a.createElement("td",null,"< 33.3"),n.a.createElement("td",null,"33.3 - 39.3"),n.a.createElement("td",null,"39.4 - 44.0"),n.a.createElement("td",null,">= 44.1")),n.a.createElement("tr",null,n.a.createElement("td",null,"Male"),n.a.createElement("td",null,n.a.createElement("b",null,"40-59")),n.a.createElement("td",null,"< 33.1"),n.a.createElement("td",null,"33.1 - 39.1"),n.a.createElement("td",null,"39.2 - 43.8"),n.a.createElement("td",null,">= 43.9")),n.a.createElement("tr",null,n.a.createElement("td",null,"Male"),n.a.createElement("td",null,n.a.createElement("b",null,"60-80")),n.a.createElement("td",null,"< 32.9"),n.a.createElement("td",null,"32.9 - 38.9"),n.a.createElement("td",null,"39.0 - 43.6"),n.a.createElement("td",null,">= 43.7"))))),n.a.createElement(h,{display:"table-cell"},n.a.createElement("h2",null,"BMI"),n.a.createElement("table",{style:{width:"100%",textAlign:"center"},className:"greyGridTable"},n.a.createElement("thead",null,n.a.createElement("tr",null,n.a.createElement("th",null,"BMI"),n.a.createElement("th",null,"BMI (DESIGNNATION BY WHO)"))),n.a.createElement("tbody",null,n.a.createElement("tr",null,n.a.createElement("td",null,"less than 18.5"),n.a.createElement("td",null,"- (Underweight)")),n.a.createElement("tr",null,n.a.createElement("td",null,"18.5 or more and less than 25"),n.a.createElement("td",null,"0 (Normal)")),n.a.createElement("tr",null,n.a.createElement("td",null,"25 or more and less than 30 "),n.a.createElement("td",null,"+ (Overweight) ")),n.a.createElement("tr",null,n.a.createElement("td",null," 30 or more "),n.a.createElement("td",null,"++(Obess)")))))))},w=a(44),A=a(45),S=Object(l.forwardRef)((function(e,t){var a=Object(l.useState)(!1),r=Object(m.a)(a,2),c=r[0],s=r[1],u=Object(l.useState)([]),o=Object(m.a)(u,2),i=o[0],E=o[1];Object(l.useImperativeHandle)(t,(function(){return{getAlert:function(){},showMessage:function(e){var t=i.slice();t.push(e),E(t),s(!0)},hideMessage:function(){s(!1),E([])}}}));return c?n.a.createElement("div",{style:{display:"flex",justifyContent:"center"}},n.a.createElement("div",{className:"info"===e.typeMessage?"ml-msg ml-msg-msg":"ml-msg ml-msg-error",style:{position:"sticky",zIndex:"10",top:"0"}},n.a.createElement("span",{className:"ml-msg-txt"},n.a.createElement("span",{className:"ml-msg-error-text"},i.map((function(t,a){return n.a.createElement("span",{key:a},"info"===e.typeMessage?n.a.createElement(w.a,{icon:A.a,className:"svg-blue"}):n.a.createElement(w.a,{icon:A.b,className:"svg-red"}),"\xa0",t,"\xa0","info"===e.typeMessage?n.a.createElement(w.a,{icon:A.a,className:"svg-blue"}):n.a.createElement(w.a,{icon:A.b,className:"svg-red"}),n.a.createElement("br",null))}))),c?n.a.createElement("span",null):n.a.createElement("span",{className:"ml-msg-close",onClick:function(){s(!1),E([])}},n.a.createElement("img",{src:"./assets/patterns/close-icon.svg",alt:"Close Icon"})),"\xa0\xa0\xa0"))):n.a.createElement("span",null)})),N=Object(l.forwardRef)((function(e,t){var a=Object(l.useState)(!1),r=Object(m.a)(a,2),c=r[0],s=r[1];Object(l.useImperativeHandle)(t,(function(){return{getAlert:function(){console.log("getAlert from Child")},showModal:function(){console.log("Showing modal for expired session..."),s(!0)}}}));var o=function(e){s(!1)},i=Object(l.useState)(""),E=Object(m.a)(i,2),d=E[0],g=E[1],p=Object(l.useState)(""),h=Object(m.a)(p,2),y=h[0],x=h[1],v=Object(l.useState)(""),O=Object(m.a)(v,2),j=O[0],N=O[1],R=Object(l.useState)(""),C=Object(m.a)(R,2),M=C[0],k=C[1],L=Object(l.useState)(""),I=Object(m.a)(L,2),T=I[0],G=I[1],H=Object(l.useState)(""),K=Object(m.a)(H,2),B=K[0],F=K[1],z=Object(l.useState)(""),Z=Object(m.a)(z,2),J=Z[0],P=Z[1],V=Object(l.useState)(!1),_=Object(m.a)(V,2),D=_[0],q=_[1],W=Object(l.useRef)(),U=Object(l.useRef)(),Y=Object(u.g)(),$=function(){var t=Object(f.a)(b.a.mark((function t(a){var l;return b.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:if(q(!0),W.current.hideMessage(),U.current.hideMessage(),""!==d&&""!==y&&""!==j&&""!==M&&""!==T){t.next=8;break}U.current.showMessage("Todos los datos son obligatorios"),q(!1),t.next=14;break;case 8:return W.current.showMessage("Guardando Datos..."),l={peso:d,ibm:y,muscle:j,viseral:M,metabolicAge:T,fat:B,restMetabol:J},console.log(JSON.stringify(l)),console.log("Fetching data from  ","https://script.google.com/macros/s/AKfycbx0qaT99GKzvBnKA_ZfRKtSJuuvypzmFb6ESyrflZCa6Hir4LZw/exec?action=save&sheetName="+e.id),t.next=14,fetch("https://script.google.com/macros/s/AKfycbx0qaT99GKzvBnKA_ZfRKtSJuuvypzmFb6ESyrflZCa6Hir4LZw/exec?action=save&sheetName="+e.id,{method:"POST",body:JSON.stringify(l)}).then((function(e){return e.json()})).then((function(e){null!==e&&(console.log("Result is ",e),"true"===e.result?(W.current.showMessage("Registros guardados exitosamente."),g(""),x(""),N(""),k(""),G(""),F(""),Y.push("/ref")):U.current.showMessage("Error: "+JSON.stringify(e)))}),(function(e){console.log(e),U.current.showMessage(JSON.stringify(e))}));case 14:case"end":return t.stop()}}),t)})));return function(e){return t.apply(this,arguments)}}();return c&&n.a.createElement("div",{className:"modal",style:{zIndex:"2"}},n.a.createElement(S,{ref:U,typeMessage:"error"}),n.a.createElement(S,{ref:W,typeMessage:"info"}),n.a.createElement("div",{className:"ml-lightbox-container modal-main",id:"ex1"},n.a.createElement("div",{style:{display:"flex"}},n.a.createElement("div",{style:{margin:"auto 0 0 auto"},onClick:function(e){return o()}}," ",n.a.createElement(w.a,{icon:A.d})," ")),n.a.createElement("h1",{className:"header-small align-center"},"  Agregar Registro "),n.a.createElement("table",{style:{width:"100%",textAlign:"center"},className:"greyGridTable"},n.a.createElement("tbody",null,n.a.createElement("tr",null,n.a.createElement("td",null,n.a.createElement("b",null,"PESO:")),n.a.createElement("td",null,n.a.createElement("input",{type:"text",onChange:function(e){return g(e.target.value)},value:d,style:{margin:"10px"}}))),n.a.createElement("tr",null,n.a.createElement("td",null,n.a.createElement("b",null,"GRASA")),n.a.createElement("td",null,n.a.createElement("input",{type:"text",onChange:function(e){return F(e.target.value)},value:B,style:{margin:"10px"}}))),n.a.createElement("tr",null,n.a.createElement("td",null,n.a.createElement("b",null,"BMI")),n.a.createElement("td",null,"  ",n.a.createElement("input",{type:"text",onChange:function(e){return x(e.target.value)},value:y,style:{margin:"10px"}})," ")),n.a.createElement("tr",null,n.a.createElement("td",null,n.a.createElement("b",null,"MUSCLE")),n.a.createElement("td",null," ",n.a.createElement("input",{type:"text",onChange:function(e){return N(e.target.value)},value:j,style:{margin:"10px"}}),"  ")),n.a.createElement("tr",null,n.a.createElement("td",null,n.a.createElement("b",null,"VISERAL")),n.a.createElement("td",null," ",n.a.createElement("input",{type:"text",onChange:function(e){return k(e.target.value)},value:M,style:{margin:"10px"}})," ")),n.a.createElement("tr",null,n.a.createElement("td",null,n.a.createElement("b",null,"EDAD METABOLICA")),n.a.createElement("td",null," ",n.a.createElement("input",{type:"text",onChange:function(e){return G(e.target.value)},value:T,style:{margin:"10px"}})," ")),n.a.createElement("tr",null,n.a.createElement("td",null,n.a.createElement("b",null,"RESTING METABOLISM")),n.a.createElement("td",null,n.a.createElement("input",{type:"text",onChange:function(e){return P(e.target.value)},value:J,style:{margin:"10px"}}))))),n.a.createElement("br",null),n.a.createElement("div",{style:{display:"flex",justifyContent:"center"}},n.a.createElement("div",null,D?n.a.createElement("span",{style:{margin:"auto 30px 0 auto"},className:"ml-button-disabled"},"Guardar"):n.a.createElement("span",{style:{margin:"auto 30px 0 auto"},rel:"modal:close",className:"ml-button-primary",onClick:function(e){return $(e)}},"Guardar"),n.a.createElement("span",{style:{margin:"auto 0 0 auto"},rel:"modal:close",className:"ml-button-primary",onClick:function(e){return o()}},"Cerrar"))),n.a.createElement("br",null)))})),R=a(122),C=a.n(R),M=(a(404),function(e){var t=Object(l.useState)([]),a=Object(m.a)(t,2),r=a[0],c=a[1],s=Object(l.useRef)(),u=Object(l.useRef)(null),o=Object(l.useState)(!1),i=Object(m.a)(o,2),E=i[0],d=i[1];Object(l.useEffect)((function(){function t(){return(t=Object(f.a)(b.a.mark((function t(){return b.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return d(!1),console.log("Getting information for "+e.match.params.id+" gym records"),s.current.showMessage("Consultado Registros"),t.next=5,fetch("https://script.google.com/macros/s/AKfycbx0qaT99GKzvBnKA_ZfRKtSJuuvypzmFb6ESyrflZCa6Hir4LZw/exec?sheetName="+e.match.params.id).then((function(e){return e.json()})).then((function(e){console.log("result is",e),c(e),d(!0)}),(function(e){var t=String(e);console.log("error is ",t)}));case 5:s.current.hideMessage();case 6:case"end":return t.stop()}}),t)})))).apply(this,arguments)}!function(){t.apply(this,arguments)}()}),[c,e.match.params.id]);var g={backgroundColor:"ghostwhite",margin:"-7px 5px 15px",borderRadius:"5px",padding:"5px",color:"black",textAlign:"center",fontWeight:"bold",boxShadow:"1px 3px 5px 0 darkcyan"};return n.a.createElement("div",null,n.a.createElement(N,{ref:u,id:e.match.params.id}),n.a.createElement(S,{ref:s,typeMessage:"info"}),n.a.createElement(h,{display:"table-cell"},n.a.createElement("div",{style:{textAlign:"center"}},"ale"===e.match.params.id?n.a.createElement("img",{style:{borderRadius:"50px",width:"100px"},src:"/gym/assets/images/profiles/ale.png",alt:"Avatar"}):n.a.createElement("img",{style:{borderRadius:"50px",width:"100px"},src:"/gym/assets/images/profiles/balan.PNG",alt:"Avatar"}),n.a.createElement("br",null),r.length>0&&E?n.a.createElement("div",null,n.a.createElement("span",{style:{marginRight:"6px"},className:"ml-button-primary",onClick:function(e){u.current.showModal()}}," Nuevo registro ")):n.a.createElement("span",null)),E&&r.map((function(e,t){return n.a.createElement(h,{display:"table-cell",key:t},n.a.createElement("div",{style:g}," ",C()(e.date.substring(0,10)).locale("es").format("LL"),"  "),n.a.createElement("table",{style:{width:"100%",textAlign:"center"},className:"greyGridTable"},n.a.createElement("thead",null,n.a.createElement("tr",null,n.a.createElement("th",{style:{textAlign:"right"}},"edad"),n.a.createElement("th",{style:{textAlign:"left"}},e.age))),n.a.createElement("tbody",null,n.a.createElement("tr",null,n.a.createElement("td",{style:{textAlign:"right"}},n.a.createElement("b",null,"altura")),n.a.createElement("td",{style:{textAlign:"left"}},n.a.createElement("b",null,e.height))),n.a.createElement("tr",null,n.a.createElement("td",{style:{textAlign:"right"}},n.a.createElement("b",null,"peso")),n.a.createElement("td",{style:{textAlign:"left"}},n.a.createElement("b",null,e.weight))),n.a.createElement("tr",null,n.a.createElement("td",{style:{textAlign:"right"}},n.a.createElement("b",null,"grasa")),n.a.createElement("td",{style:{textAlign:"left"}},n.a.createElement("b",null,e.fat))),n.a.createElement("tr",null,n.a.createElement("td",{style:{textAlign:"right"}},n.a.createElement("b",null,"bmi")),n.a.createElement("td",{style:{textAlign:"left"}},n.a.createElement("b",null,e.ibm))),n.a.createElement("tr",null,n.a.createElement("td",{style:{textAlign:"right"}},n.a.createElement("b",null,"muscle")),n.a.createElement("td",{style:{textAlign:"left"}},n.a.createElement("b",null,e.muscle))),n.a.createElement("tr",null,n.a.createElement("td",{style:{textAlign:"right"}},n.a.createElement("b",null,"metabolic age")),n.a.createElement("td",{style:{textAlign:"left"}},n.a.createElement("b",null,e.ageMetabol))),n.a.createElement("tr",null,n.a.createElement("td",{style:{textAlign:"right"}},n.a.createElement("b",null,"resting metabolism")),n.a.createElement("td",{style:{textAlign:"left"}},n.a.createElement("b",null,e.restMetabol))),n.a.createElement("tr",null,n.a.createElement("td",{style:{textAlign:"right"}},n.a.createElement("b",null,"Viseral")),n.a.createElement("td",{style:{textAlign:"left"}},n.a.createElement("b",null,e.viseral))))))}))),n.a.createElement("br",null),E&&n.a.createElement(j,null))}),k=function(e){var t=Object(l.useRef)();return n.a.createElement("div",{style:{backgroundColor:"#c2d1ce",display:"auto",overflow:"auto",padding:"20px 0 20px 0"}},n.a.createElement(v,{ref:t,headerRef:e.headerRef}),n.a.createElement(u.d,null,n.a.createElement(u.b,{exact:!0,path:"/",render:function(a){return n.a.createElement(y,Object.assign({},a,{headerRef:e.headerRef,modalSessionRef:t}))}}),n.a.createElement(x,{exact:!0,path:"/home",component:g}),n.a.createElement(u.b,{exact:!0,path:"/ref",component:j}),n.a.createElement(x,{exact:!0,path:"/metrics/:id",component:M}),n.a.createElement(u.b,{component:O})))},L=function(e){e.copyright;return n.a.createElement(i.Row,{gutter:40,style:{backgroundColor:"#45b39d",textAlign:"right"}},n.a.createElement(i.Col,{span:2},n.a.createElement("img",{src:"/gym/assets/images/gym/gym.png",alt:"Home Icon",style:{width:"40px",margin:"5px"}})),n.a.createElement(i.Col,{span:10,style:{textAlign:"left"}},n.a.createElement("p",{style:{fontStyle:"italic",fontSize:"15px"}}," made with ",n.a.createElement(w.a,{icon:A.c,className:"svg-blue"})," to Ale.  ")))};L.defaultProps={copyright:"Todos los derechos reservados."};var I=L;var T=function(){var e=Object(l.useRef)();return n.a.createElement("span",null,n.a.createElement(E.a,{basename:"/gym"},n.a.createElement(d,{ref:e}),n.a.createElement(k,{headerRef:e}),n.a.createElement(I,null)))};Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));c.a.render(n.a.createElement(n.a.StrictMode,null,n.a.createElement(T,null)),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(e){e.unregister()})).catch((function(e){console.error(e.message)}))}},[[192,1,2]]]);
//# sourceMappingURL=main.b804d1fd.chunk.js.map