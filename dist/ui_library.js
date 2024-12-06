(function(s){typeof define=="function"&&define.amd?define(s):s()})(function(){"use strict";const[...s]=[document==null?void 0:document.querySelectorAll("body"),document==null?void 0:document.querySelectorAll("header"),document==null?void 0:document.querySelectorAll("nav"),document==null?void 0:document.querySelectorAll("ul"),document==null?void 0:document.querySelectorAll("ol"),document==null?void 0:document.querySelectorAll("footer"),document==null?void 0:document.querySelectorAll("main"),document==null?void 0:document.querySelectorAll("aside"),document==null?void 0:document.querySelectorAll("section"),document==null?void 0:document.querySelectorAll("div"),document==null?void 0:document.querySelectorAll("h1"),document==null?void 0:document.querySelectorAll("h2"),document==null?void 0:document.querySelectorAll("h3"),document==null?void 0:document.querySelectorAll("h4"),document==null?void 0:document.querySelectorAll("h5"),document==null?void 0:document.querySelectorAll("h6"),document==null?void 0:document.querySelectorAll("p"),document==null?void 0:document.querySelectorAll("span"),document==null?void 0:document.querySelectorAll("em"),document==null?void 0:document.querySelectorAll("code"),document==null?void 0:document.querySelectorAll("article"),document==null?void 0:document.querySelectorAll("a"),document==null?void 0:document.querySelectorAll("form"),document==null?void 0:document.querySelectorAll("input"),document==null?void 0:document.querySelectorAll("select"),document==null?void 0:document.querySelectorAll("textarea"),document==null?void 0:document.querySelectorAll("button"),document==null?void 0:document.querySelectorAll("ul"),document==null?void 0:document.querySelectorAll("ol"),document==null?void 0:document.querySelectorAll("li"),document==null?void 0:document.querySelectorAll("img")];let n=[];s.map(o=>{o.forEach(t=>n.push(t))});const d=o=>o.split("-"),u=(o,t,e)=>{if(e===2)o.style.padding=`${t[1]}`;else if(e===3)switch(t[1]){case"left":o.style.paddingLeft=`${t[2]}`;break;case"right":o.style.paddingRight=`${t[2]}`;break;case"top":o.style.paddingTop=`${t[2]}`;break;case"bottom":o.style.paddingBottom=`${t[2]}`;break;case"x":o.style.paddingLeft=`${t[2]}`,o.style.paddingRight=`${t[2]}`;break;case"y":o.style.paddingTop=`${t[2]}`,o.style.paddingBottom=`${t[2]}`;break;default:throw Error("Could not apply padding to element")}},h=o=>{try{let t=[];o.classList.forEach(e=>{e.includes("padding")&&t.push(e)}),t.forEach(e=>{let r=d(e);if(r.length<2||r.length>3)throw Error("Out of bounds");u(o,r,r.length)})}catch(t){console.error(`Error while applying padding to: ${o}
${t}`)}},p=o=>o.split("-"),y=(o,t,e)=>{if(e===2)o.style.margin=`${t[1]}`;else if(e===3)switch(t[1]){case"left":o.style.marginLeft=`${t[2]}`;break;case"right":o.style.marginRight=`${t[2]}`;break;case"top":o.style.marginTop=`${t[2]}`;break;case"bottom":o.style.marginBottom=`${t[2]}`;break;case"x":o.style.marginLeft=`${t[2]}`,o.style.marginRight=`${t[2]}`;break;case"y":o.style.marginTop=`${t[2]}`,o.style.marginBottom=`${t[2]}`;break;default:throw Error("Could not apply margin to element")}},f=o=>{try{let t=[];o.classList.forEach(e=>{e.includes("margin")&&t.push(e)}),t.forEach(e=>{let r=p(e);if(r.length<2||r.length>3)throw Error("Out of bounds");y(o,r,r.length)})}catch(t){console.error(`Error while applying margin to: ${o}
${t}`)}},g=o=>o.split("-"),$=(o,t,e)=>{if(e===3)o.style.gridGap=`${t[2]}`;else if(e===4)switch(t[2]){case"row":o.style.gridRowGap=`${t[3]}`;break;case"col":o.style.gridColumnGap=`${t[3]}`;break;case"tab":window.screen.width<=1080&&(o.style.gridGap=`${t[3]}`);break;case"mob":window.screen.width<=600&&(o.style.gridGap=`${t[3]}`);break;default:throw Error("Could not apply padding to element")}},m=o=>{try{let t=[];o.classList.forEach(e=>{e.includes("grid-gap")&&t.push(e)}),t.forEach(e=>{let r=g(e);if(r.length<3||r.length>4)throw Error("Out of bounds");$(o,r,r.length)})}catch(t){console.error(`Error while applying grid gap to: ${o}
${t}`)}},E=o=>o.split("-"),b=(o,t,e)=>{e===2?o.style.color=`${t[1]}`:e===3&&(t[0]==="bg"||t[0]==="fill"?o.style.backgroundColor=`${t[2]}`:t[0]==="border"&&(o.style.borderColor=`${t[2]}`))},w=o=>{try{let t=[];o.classList.forEach(e=>{e.includes("color")&&t.push(e)}),t.forEach(e=>{let r=E(e);if(r.length<2||r.length>3)throw Error("Out of bounds");b(o,r,r.length)})}catch(t){console.error(`Error while applying color to: ${o}
${t}`)}},C=o=>o.split("-"),N=(o,t)=>{t[1]==="tab"&&window.screen.width<=1080&&(t[2]!=="min"||t[2]!=="med"||t[2]!=="max")&&(o.style.width=`${t[2]}`),t[1]=="mob"&&window.screen.width<=600&&(t[2]!=="min"||t[2]!=="med"||t[2]!=="max")&&(o.style.width=`${t[2]}`),(t[1]!=="min"||t[1]!=="med"||t[1]!=="max")&&(o.style.width=`${t[1]}`)},S=o=>{try{let t=[];o.classList.forEach(e=>{e.includes("width")&&!e.includes("border-width")&&t.push(e)}),t.forEach(e=>{let r=C(e);if(r.length<2||r.length>3)throw Error("Out of bounds");N(o,r)})}catch(t){console.error(`Error while applying width to: ${o}
${t}`)}},k=o=>o.split("-"),q=(o,t,e)=>{o.style.display="grid",e===2?o.style.gridTemplateColumns=`repeat(${t[1]}, 1fr)`:e===3&&(t[1]==="tab"&&window.screen.width<=1080&&(o.style.gridTemplateColumns=`repeat(${t[2]}, 1fr)`),t[1]=="mob"&&window.screen.width<=600&&(o.style.gridTemplateColumns=`repeat(${t[2]}, 1fr)`))};console.log();const R=o=>{try{let t=[];o.classList.forEach(e=>{e.includes("grid")&&!e.includes("grid-gap")&&!e.includes("grid-auto")&&t.push(e)}),t.forEach(e=>{let r=k(e);if(r.length<2||r.length>3)throw Error("Out of bounds");q(o,r,r.length)})}catch(t){console.error(`Error while applying grid gap to: ${o}
${t}`)}},T=o=>o.split("-"),L=(o,t)=>{t[2]==="tab"&&window.screen.width<=1080&&t[3]!=="min"&&t[3]!=="med"&&t[3]!=="max"&&(o.style.fontSize=`${t[3]}`),t[2]==="mob"&&window.screen.width<=600&&t[3]!=="min"&&t[3]!=="med"&&t[3]!=="max"&&(o.style.fontSize=`${t[3]}`),t[2]!=="min"&&t[2]!=="med"&&t[2]!=="max"&&(o.style.fontSize=`${t[2]}`)},v=o=>{try{let t=[];o.classList.forEach(e=>{e.includes("font-size")&&t.push(e)}),t.forEach(e=>{let r=T(e);if(r.length<3||r>4)throw Error("Out of bounds");L(o,r)})}catch(t){console.error(`Error while applying font size to: ${o}
${t}`)}},B=o=>o.split("-"),x=(o,t)=>{o.style.lineHeight=`${t[2]}`},O=o=>{try{let t=[];o.classList.forEach(e=>{e.includes("line-height")&&t.push(e)}),t.forEach(e=>{let r=B(e);if(r.length!==3)throw Error("Out of bounds");x(o,r)})}catch(t){console.error(`Error while applying line height to: ${o}
${t}`)}},G=o=>o.split("-"),z=(o,t)=>{o.style.borderWidth=`${t[2]}`},_=o=>{try{let t=[];o.classList.forEach(e=>{e.includes("border-width")&&t.push(e)}),t.forEach(e=>{let r=G(e);if(r.length!==3)throw Error("Out of bounds");z(o,r)})}catch(t){console.error(`Error while applying border width to: ${o}
${t}`)}},H=o=>o.split("-"),I=(o,t,e)=>{if(e===3)o.style.borderRadius=`${t[2]}`;else if(e===4)switch(t[2]){case"top":o.style.borderTopLeftRadius=`${t[3]}`,o.style.borderTopRightRadius=`${t[3]}`;break;case"bottom":o.style.borderBottomLeftRadius=`${t[3]}`,o.style.borderBottomRightRadius=`${t[3]}`;break;case"left":o.style.borderTopLeftRadius=`${t[3]}`,o.style.borderBottomLeftRadius=`${t[3]}`;break;case"right":o.style.borderTopRightRadius=`${t[3]}`,o.style.borderBottomRightRadius=`${t[3]}`;break;default:throw Error("Could not apply border radius")}else if(e===5)switch(`${t[2]}-${t[3]}`){case"top-left":o.style.borderTopLeftRadius=`${t[4]}`;break;case"bottom-left":o.style.borderBottomLeftRadius=`${t[4]}`;break;case"top-right":o.style.borderTopRightRadius=`${t[4]}`;break;case"bottom-right":o.style.borderBottomRightRadius=`${t[4]}`;break;default:throw Error("Could not apply border radius")}},F=o=>{try{let t=[];o.classList.forEach(e=>{e.includes("round-corner")&&t.push(e)}),t.forEach(e=>{let r=H(e);if(r.length<3||r.length>5)throw Error("Out of bounds");I(o,r,r.length)})}catch(t){console.error(`Error while applying border radius to: ${o}
${t}`)}},W=o=>o.split("-"),P=(o,t)=>{(t[1]!=="min"||t[1]!=="med"||t[1]!=="max")&&(o.style.height=`${t[1]}`)},M=o=>{try{let t=[];o.classList.forEach(e=>{e.includes("height")&&t.push(e)}),t.forEach(e=>{let r=W(e);if(r.length!==2)throw Error("Out of bounds");P(o,r)})}catch(t){console.error(`Error while applying height to: ${o}
${t}`)}},j=o=>o.split("-image-"),D=(o,t)=>{o.style.backgroundImage=`url("${t[1]}")`,o.style.backgroundPosition="center center",o.style.backgroundRepeat="no-repeat",o.style.backgroundSize="cover"},J=o=>{try{let t=[];o.classList.forEach(e=>{e.includes("bg-image")&&t.push(e)}),t.forEach(e=>{let r=j(e);if(r.length!==2)throw Error("Out of bounds");D(o,r)})}catch(t){console.error(`Error while applying background image to: ${o}
${t}`)}},K=o=>o.split("-"),Q=(o,t,e)=>{if(o.classList.includes(` ${t[1]} `)){let r=t[2].split(":");o.style.styleArr[0]=r[1]}};console.log();const U=o=>{try{let t=[];o.classList.forEach(e=>{e.includes("if-")&&t.push(e)}),t.forEach(e=>{let r=K(e);if(r.length!==3)throw Error("Out of bounds");Q(o,r,r.length)})}catch(t){console.error(`Error while applying conditional style to: ${o}
${t}`)}},V=()=>{try{let t=function(e){o.raf(e*.8),requestAnimationFrame(t)};const o=new Lenis;requestAnimationFrame(t)}catch(o){console.warn(o)}},a=o=>o.split("-"),c=()=>{let o=document.querySelector("style");return o||(o=document.createElement("style"),document.head.appendChild(o)),o},X=(o,t)=>{let e=c();t.forEach(r=>{let l=a(r);l[1]=="scale"&&(e.textContent+=`
            ._hover-scale-${l[2].replace(".","\\.")}:hover {
                transform: scale(${l[2]}) !important;
            }
        `),l[1]=="bg"&&l[2]=="color"&&(e.textContent+=`
            ._hover-bg-color-\\${l[3]}:hover {
                background-color: ${l[3]} !important;
            }
            `),l[1]=="color"&&(e.textContent+=`
            ._hover-color-\\${l[2]}:hover {
                color: ${l[2]} !important;
            }
            `)})},Y=(o,t)=>{let e=c();t.forEach(r=>{let l=a(r);l[1]=="scale"&&(e.textContent+=`
              ._active-scale-${l[2].replace(".","\\.")}:active {
                  transform: scale(${l[2]}) !important;
              }
          `),l[1]=="bg"&&l[2]=="color"&&(e.textContent+=`
              ._active-bg-color-\\${l[3]}:active {
                  background-color: ${l[3]} !important;
              }
              `),l[1]=="color"&&(e.textContent+=`
              ._active-color-\\${l[2]}:active {
                  color: ${l[2]} !important;
              }
              `)})},Z=(o,t)=>{},A=o=>{try{o.style.transition="all 0.3s ease";let t=[],e=[],r=[];o.classList.forEach(l=>{l.includes("_hover")&&t.push(l),l.includes("_active")&&e.push(l),l.includes("_focus")&&r.push(l)}),t.forEach(l=>{let i=a(l);if(i.length<2||i.length>4)throw Error("Out of bounds");X(o,t)}),e.forEach(l=>{let i=a(l);if(i.length<2||i.length>4)throw Error("Out of bounds");Y(o,e)}),r.forEach(l=>{let i=a(l);if(i.length<2||i.length>4)throw Error("Out of bounds");Z(o,r)})}catch(t){console.error(`Error while applying interaction to: ${o}
${t}`)}};window.addEventListener("load",V),n.forEach(o=>{o.className.includes("padding")&&h(o),o.className.includes("margin")&&f(o),o.className.includes("grid")&&R(o),o.className.includes("grid-gap")&&m(o),o.className.includes("color")&&w(o),o.className.includes("width")&&S(o),o.className.includes("height")&&M(o),o.className.includes("font-size")&&v(o),o.className.includes("line-height")&&O(o),o.className.includes("border-width")&&_(o),o.className.includes("round-corner")&&F(o),o.className.includes("bg-image")&&J(o),o.className.includes("if-")&&U(o),o.className.includes("_")&&A(o)})});
