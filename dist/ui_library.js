(function(i,n){typeof exports=="object"&&typeof module<"u"?module.exports=n():typeof define=="function"&&define.amd?define(n):(i=typeof globalThis<"u"?globalThis:i||self,i.ui_library_js=n())})(this,function(){"use strict";const i=(o,t="-")=>o.split(t),n=(o,t,e)=>{if(e===2)o.style.padding=`${t[1]}`;else if(e===3)switch(t[1]){case"left":o.style.paddingLeft=`${t[2]}`;break;case"right":o.style.paddingRight=`${t[2]}`;break;case"top":o.style.paddingTop=`${t[2]}`;break;case"bottom":o.style.paddingBottom=`${t[2]}`;break;case"x":o.style.paddingLeft=`${t[2]}`,o.style.paddingRight=`${t[2]}`;break;case"y":o.style.paddingTop=`${t[2]}`,o.style.paddingBottom=`${t[2]}`;break;default:throw Error("Could not apply padding to element")}},u=(o,t)=>{try{let e=i(t,"-");if(e.length<2||e.length>3)throw Error("Out of bounds");n(o,e,e.length)}catch(e){console.error(`Error while applying padding to: ${o}
${e}`)}},h=(o,t,e)=>{if(e===2)o.style.margin=`${t[1]}`;else if(e===3)switch(t[1]){case"left":o.style.marginLeft=`${t[2]}`;break;case"right":o.style.marginRight=`${t[2]}`;break;case"top":o.style.marginTop=`${t[2]}`;break;case"bottom":o.style.marginBottom=`${t[2]}`;break;case"x":o.style.marginLeft=`${t[2]}`,o.style.marginRight=`${t[2]}`;break;case"y":o.style.marginTop=`${t[2]}`,o.style.marginBottom=`${t[2]}`;break;default:throw Error("Could not apply margin to element")}},y=(o,t)=>{try{let e=i(t,"-");if(e.length<2||e.length>3)throw Error("Out of bounds");h(o,e,e.length)}catch(e){console.error(`Error while applying margin to: ${o}
${e}`)}},a=(o,t,e)=>{if(e===3)o.style.gridGap=`${t[2]}`;else if(e===4)switch(t[2]){case"row":o.style.gridRowGap=`${t[3]}`;break;case"col":o.style.gridColumnGap=`${t[3]}`;break;case"tab":window.screen.width<=1080&&(o.style.gridGap=`${t[3]}`);break;case"mob":window.screen.width<=600&&(o.style.gridGap=`${t[3]}`);break;default:throw Error("Could not apply padding to element")}},g=(o,t)=>{try{let e=i(t,"-");if(e.length<3||e.length>4)throw Error("Out of bounds");a(o,e,e.length)}catch(e){console.error(`Error while applying grid gap to: ${o}
${e}`)}},f=(o,t,e)=>{e===2?o.style.color=`${t[1]}`:e===3&&(t[0]==="bg"||t[0]==="fill"?o.style.backgroundColor=`${t[2]}`:t[0]==="border"&&(o.style.borderColor=`${t[2]}`))},b=(o,t)=>{try{let e=i(t,"-");if(e.length<2||e.length>3)throw Error("Out of bounds");f(o,e,e.length)}catch(e){console.error(`Error while applying color to: ${o}
${e}`)}},$=(o,t)=>{(t[1]!=="min"||t[1]!=="med"||t[1]!=="max")&&(o.style.width=`${t[1]}`)},s=(o,t)=>{try{let e=i(t,"-");if(e.length<2||e.length>3)throw Error("Out of bounds");$(o,e)}catch(e){console.error(`Error while applying width to: ${o}
${e}`)}},w=(o,t)=>{o.style.display="grid",o.style.gridTemplateColumns=`repeat(${t[1]}, 1fr)`},E=(o,t)=>{try{if(!t.includes("grid-gap")&&!t.includes("grid-auto")){let e=i(t,"-");if(e.length<2||e.length>3)throw Error("Out of bounds");w(o,e)}}catch(e){console.error(`Error while applying grid gap to: ${o}
${e}`)}},S=(o,t)=>{t[2]==="tab"&&window.screen.width<=1080&&t[3]!=="min"&&t[3]!=="med"&&t[3]!=="max"&&(o.style.fontSize=`${t[3]}`),t[2]==="mob"&&window.screen.width<=600&&t[3]!=="min"&&t[3]!=="med"&&t[3]!=="max"&&(o.style.fontSize=`${t[3]}`),t[2]!=="min"&&t[2]!=="med"&&t[2]!=="max"&&(o.style.fontSize=`${t[2]}`)},m=(o,t)=>{try{let e=i(t,"-");if(e.length<3||e>4)throw Error("Out of bounds");S(o,e)}catch(e){console.error(`Error while applying font size to: ${o}
${e}`)}},k=(o,t)=>{o.style.lineHeight=`${t[2]}`},R=(o,t)=>{try{let e=i(t,"-");if(e.length!==3)throw Error("Out of bounds");k(o,e)}catch(e){console.error(`Error while applying line height to: ${o}
${e}`)}},T=(o,t)=>{o.style.borderWidth=`${t[2]}`},W=(o,t)=>{try{let e=i(t,"-");if(e.length!==3)throw Error("Out of bounds");T(o,e)}catch(e){console.error(`Error while applying border width to: ${o}
${e}`)}},q=(o,t,e)=>{if(e===3)o.style.borderRadius=`${t[2]}`;else if(e===4)switch(t[2]){case"top":o.style.borderTopLeftRadius=`${t[3]}`,o.style.borderTopRightRadius=`${t[3]}`;break;case"bottom":o.style.borderBottomLeftRadius=`${t[3]}`,o.style.borderBottomRightRadius=`${t[3]}`;break;case"left":o.style.borderTopLeftRadius=`${t[3]}`,o.style.borderBottomLeftRadius=`${t[3]}`;break;case"right":o.style.borderTopRightRadius=`${t[3]}`,o.style.borderBottomRightRadius=`${t[3]}`;break;default:throw Error("Could not apply border radius")}else if(e===5)switch(`${t[2]}-${t[3]}`){case"top-left":o.style.borderTopLeftRadius=`${t[4]}`;break;case"bottom-left":o.style.borderBottomLeftRadius=`${t[4]}`;break;case"top-right":o.style.borderTopRightRadius=`${t[4]}`;break;case"bottom-right":o.style.borderBottomRightRadius=`${t[4]}`;break;default:throw Error("Could not apply border radius")}},x=(o,t)=>{try{let e=i(t,"-");if(e.length<3||e.length>5)throw Error("Out of bounds");q(o,e,e.length)}catch(e){console.error(`Error while applying border radius to: ${o}
${e}`)}},v=(o,t)=>{(t[1]!=="min"||t[1]!=="med"||t[1]!=="max")&&(o.style.height=`${t[1]}`)},B=(o,t)=>{try{let e=i(t,"-");if(e.length!==2)throw Error("Out of bounds");v(o,e)}catch(e){console.error(`Error while applying height to: ${o}
${e}`)}},O=(o,t)=>{o.style.backgroundImage=`url("${t[1]}")`,o.style.backgroundPosition="center center",o.style.backgroundRepeat="no-repeat",o.style.backgroundSize="cover"},_=(o,t)=>{try{let e=i(t,"-image-");if(e.length!==2)throw Error("Out of bounds");O(o,e)}catch(e){console.error(`Error while applying background image to: ${o}
${e}`)}},p=()=>{let o=document.querySelector("style");return o||(o=document.createElement("style"),document.head.appendChild(o)),o},G=(o,t)=>{let e=p();t[1]=="scale"&&(e.textContent+=`
          ._hover-scale-${t[2].replace(".","\\.")}:hover {
              transform: scale(${t[2]}) !important;
          }
      `),t[1]=="bg"&&t[2]=="color"&&(e.textContent+=`
          ._hover-bg-color-\\${t[3]}:hover {
              background-color: ${t[3]} !important;
          }
          `),t[1]=="color"&&(e.textContent+=`
          ._hover-color-\\${t[2]}:hover {
              color: ${t[2]} !important;
          }
          `)},I=(o,t)=>{let e=p();t[1]=="scale"&&(e.textContent+=`
            ._active-scale-${t[2].replace(".","\\.")}:active {
                transform: scale(${t[2]}) !important;
            }
        `),t[1]=="bg"&&t[2]=="color"&&(e.textContent+=`
            ._active-bg-color-\\${t[3]}:active {
                background-color: ${t[3]} !important;
            }
            `),t[1]=="color"&&(e.textContent+=`
            ._active-color-\\${t[2]}:active {
                color: ${t[2]} !important;
            }
            `)},L=(o,t)=>{let e=p();t[1]=="scale"&&(e.textContent+=`
            ._focus-scale-${t[2].replace(".","\\.")}:focus {
                transform: scale(${t[2]}) !important;
            }
        `),t[1]=="bg"&&t[2]=="color"&&(e.textContent+=`
            ._focus-bg-color-\\${t[3]}:focus {
                background-color: ${t[3]} !important;
            }
            `),t[1]=="color"&&(e.textContent+=`
            ._focus-color-\\${t[2]}:focus {
                color: ${t[2]} !important;
            }
            `)},z=(o,t)=>{try{o.style.transition="all 0.3s ease";let e=i(t);if(e.length<2||e.length>4)throw Error("Out of bounds");t.startsWith("_hover")&&G(o,e),t.startsWith("_active")&&I(o,e),t.startsWith("_focus")&&L(o,e)}catch(e){console.error(`Error while applying interaction to: ${o}
${e}`)}},H=(o,t)=>{t[1]=="start"&&(o.style.gridColumnStart=`${t[2]}`),t[1]=="end"&&(o.style.gridColumnEnd=`${t[2]}`),Number(t[1])&&Number(t[2])&&(o.style.gridColumn=`${t[1]}/${t[2]}`)},M=(o,t)=>{try{let e=i(t,"-");if(e.length!==3)throw Error("Out of bounds");H(o,e)}catch(e){console.error(`Error while applying grid column to: ${o}
${e}`)}},P=(o,t)=>{t[1]=="start"&&(o.style.gridRowStart=`${t[2]}`),t[1]=="end"&&(o.style.gridRowEnd=`${t[2]}`),Number(t[1])&&Number(t[2])&&(o.style.gridRow=`${t[1]}/${t[2]}`)},j=(o,t)=>{try{let e=i(t,"-");if(e.length!==3)throw Error("Out of bounds");P(o,e)}catch(e){console.error(`Error while applying grid row to: ${o}
${e}`)}},F=window.innerWidth>600&&window.innerWidth<=1080,D=window.innerWidth<=600,J=(o,t)=>{let e=t.replace("mob:",""),r=o.className.split(" ");r.forEach(d=>{if(d.includes("mob:")){let c=r.indexOf(d);r[c]=e}}),o.className=r.join(" "),l()},K=(o,t)=>{let e=t.replace("tab:",""),r=o.className.split(" ");r.forEach(d=>{if(d.startsWith("tab:")){let c=r.indexOf(d);r[c]=e}}),o.className=r.join(" "),l()},Q=(o,t)=>{try{t.startsWith("mob:")&&D&&J(o,t),t.startsWith("tab:")&&F&&K(o,t)}catch(e){console.error(`Error while applying responsive behavior to element: ${o}
${e}`)}},U=()=>{const[...o]=[document==null?void 0:document.querySelectorAll("body"),document==null?void 0:document.querySelectorAll("header"),document==null?void 0:document.querySelectorAll("nav"),document==null?void 0:document.querySelectorAll("ul"),document==null?void 0:document.querySelectorAll("ol"),document==null?void 0:document.querySelectorAll("footer"),document==null?void 0:document.querySelectorAll("main"),document==null?void 0:document.querySelectorAll("aside"),document==null?void 0:document.querySelectorAll("section"),document==null?void 0:document.querySelectorAll("div"),document==null?void 0:document.querySelectorAll("h1"),document==null?void 0:document.querySelectorAll("h2"),document==null?void 0:document.querySelectorAll("h3"),document==null?void 0:document.querySelectorAll("h4"),document==null?void 0:document.querySelectorAll("h5"),document==null?void 0:document.querySelectorAll("h6"),document==null?void 0:document.querySelectorAll("p"),document==null?void 0:document.querySelectorAll("span"),document==null?void 0:document.querySelectorAll("em"),document==null?void 0:document.querySelectorAll("code"),document==null?void 0:document.querySelectorAll("article"),document==null?void 0:document.querySelectorAll("a"),document==null?void 0:document.querySelectorAll("form"),document==null?void 0:document.querySelectorAll("input"),document==null?void 0:document.querySelectorAll("select"),document==null?void 0:document.querySelectorAll("textarea"),document==null?void 0:document.querySelectorAll("button"),document==null?void 0:document.querySelectorAll("ul"),document==null?void 0:document.querySelectorAll("ol"),document==null?void 0:document.querySelectorAll("li"),document==null?void 0:document.querySelectorAll("img")];let t=[];return o.map(e=>{e.forEach(r=>t.push(r))}),t},l=()=>{U().forEach(t=>{t.className.split(" ").forEach(r=>{(r.startsWith("mob:")||r.startsWith("tab:"))&&Q(t,r),r.startsWith("padding")&&u(t,r),r.startsWith("margin")&&y(t,r),r.startsWith("grid")&&E(t,r),r.startsWith("grid-gap")&&g(t,r),r.startsWith("column")&&M(t,r),r.startsWith("row")&&j(t,r),(r.startsWith("color")||r.startsWith("bg-color")||r.startsWith("border-color"))&&b(t,r),r.startsWith("width")&&s(t,r),r.startsWith("height")&&B(t,r),r.startsWith("font-size")&&m(t,r),r.startsWith("line-height")&&R(t,r),r.startsWith("border-width")&&W(t,r),r.startsWith("border-radius")&&x(t,r),r.startsWith("bg-image")&&_(t,r),r.startsWith("_")&&z(t,r)})})};return l(),l});
