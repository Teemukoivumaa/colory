(this.webpackJsonpgrid=this.webpackJsonpgrid||[]).push([[0],{10:function(e,t,n){},12:function(e,t,n){"use strict";n.r(t);var a=n(0),r=n.n(a),o=n(4),s=n.n(o),l=(n(10),n(1)),c=n.n(l),i=n(2);function u(e){return new Promise((function(t){return setTimeout(t,e)}))}function m(e){return e-=1,Math.floor(Math.random()*e)}function d(){var e=parseInt(document.getElementById("statsFilled").textContent);document.getElementById("statsFilled").textContent=e+1}function g(){var e=parseInt(document.getElementById("statsEmptied").textContent);document.getElementById("statsEmptied").textContent=e+1}function p(){return(p=Object(i.a)(c.a.mark((function e(){var t,n,a,r;return c.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:for(t=document.getElementsByClassName("grid"),document.getElementById("status").innerHTML="Status: Clearing",n=0;n<t.length;n++)a=document.getElementById("status").textContent,r=t[n].style.backgroundColor,"Status: Stopping"!==a&&("white"===r&&""===r||(t[n].style.backgroundColor="white",g()));case 3:case"end":return e.stop()}}),e)})))).apply(this,arguments)}function y(){return(y=Object(i.a)(c.a.mark((function e(){var t,n,a,r,o;return c.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:t=document.getElementsByClassName("grid"),n=document.getElementById("color").style.backgroundColor,document.getElementById("status").innerHTML="Status: Filling with "+n,a=0;case 4:if(!(a<t.length)){e.next=16;break}if(r=document.getElementById("status").textContent,o=t[a].style.backgroundColor,"Status: Stopping"===r){e.next=13;break}if(o===n){e.next=13;break}return t[a].style.backgroundColor=n,d(),e.next=13,u(.5);case 13:a++,e.next=4;break;case 16:case"end":return e.stop()}}),e)})))).apply(this,arguments)}function f(){return(f=Object(i.a)(c.a.mark((function e(){var t,n,a,r;return c.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:t=document.getElementsByClassName("grid"),n=document.getElementById("color").style.backgroundColor,document.getElementById("status").innerHTML="Status: Filling empty pixels with "+n,a=0;case 4:if(!(a<t.length)){e.next=16;break}if(r=t[a].style.backgroundColor,"Status: Stopping"===document.getElementById("status").textContent){e.next=13;break}if("white"!==r&&""!==r){e.next=13;break}return t[a].style.backgroundColor=n,d(),e.next=13,u(1);case 13:a++,e.next=4;break;case 16:case"end":return e.stop()}}),e)})))).apply(this,arguments)}function E(){return(E=Object(i.a)(c.a.mark((function e(){var t,n,a,r,o,s,l,i;return c.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:t=document.getElementsByClassName("grid"),n=t.length,a=0,r=0,document.getElementById("status").innerHTML="Status: Emptying random",o=0;case 6:if(!(o<t.length)){e.next=26;break}if(s=document.getElementById("status").textContent,l=m(n),i=t[l].style.backgroundColor,"Status: Stopping"===s){e.next=23;break}if("white"===i&&""===i){e.next=20;break}return t[l].style.backgroundColor="white",r++,document.getElementById("statsEmpty").innerHTML="Randomly emptied ones: "+r,g(),e.next=18,u(1);case 18:e.next=23;break;case 20:o--,a++,document.getElementById("statsMissed").innerHTML="Randomly missed ones: "+a;case 23:o++,e.next=6;break;case 26:case"end":return e.stop()}}),e)})))).apply(this,arguments)}function k(){return(k=Object(i.a)(c.a.mark((function e(){var t,n,a,r,o,s;return c.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:t=document.getElementsByClassName("grid"),n=document.getElementsByClassName("colorBox"),document.getElementById("status").innerHTML="Status: Random filling",a=0;case 4:if(!(a<t.length)){e.next=16;break}if(r=document.getElementById("status").textContent,o="color"+m(n.length),"Status: Stopping"===r){e.next=13;break}return s=document.getElementById(o).style.backgroundColor,t[a].style.backgroundColor=s,d(),e.next=13,u(1);case 13:a++,e.next=4;break;case 16:case"end":return e.stop()}}),e)})))).apply(this,arguments)}function h(){return(h=Object(i.a)(c.a.mark((function e(){var t,n,a,r,o,s,l;return c.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:t=document.getElementsByClassName("grid"),n=t.length,document.getElementById("status").innerHTML="Status: Random filling",a=m(n),r=0;case 5:if(!(r<a)){e.next=17;break}if(o=document.getElementById("status").textContent,s=m(n),"Status: Stopping"===o){e.next=14;break}return l=document.getElementById("color").style.backgroundColor,t[s].style.backgroundColor=l,d(),e.next=14,u(1);case 14:r++,e.next=5;break;case 17:case"end":return e.stop()}}),e)})))).apply(this,arguments)}function x(){return(x=Object(i.a)(c.a.mark((function e(){var t,n,a,r,o,s,l;return c.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:t=document.getElementsByClassName("grid"),n=document.getElementsByClassName("colorBox"),document.getElementById("status").innerHTML="Status: Filling empty pixels randomly",a=0;case 4:if(!(a<t.length)){e.next=18;break}if(r=document.getElementById("status").textContent,o=t[a].style.backgroundColor,"Status: Stopping"===r){e.next=15;break}if("white"!==o&&""!==o){e.next=15;break}return s="color"+m(n.length),l=document.getElementById(s).style.backgroundColor,t[a].style.backgroundColor=l,d(),e.next=15,u(1);case 15:a++,e.next=4;break;case 18:case"end":return e.stop()}}),e)})))).apply(this,arguments)}function C(){for(var e=["Aqua","Beige","Black","Blue","Coral","Crimson","DarkBlue","DarkGrey","DarkOrange","DarkSalmon","DarkGreen","DarkRed","Grey","Green","White","Yellow"],t=0,n=[],a=0;a<e.length;a++){var o="color"+t++,s=e[a];n.push({id:o,color:s})}return n.map((function(e){return r.a.createElement("div",{className:"colorBox",id:e.id,style:{backgroundColor:e.color},onClick:function(){return function(e){var t=document.getElementById(e).style.backgroundColor;document.getElementById("color").style.backgroundColor=t}(e.id)}})}))}function b(){for(var e=[],t=0;t<2100;t++)e.push({id:t,class:"grid"});return e.map((function(e){return r.a.createElement("div",{className:e.class,id:e.id,onClick:function(){return function(e){var t=document.getElementById(e),n=document.getElementById("color").style.backgroundColor;d(),t.style.backgroundColor=n}(e.id)}})}))}var B=function(){return r.a.createElement("div",null,r.a.createElement("h2",{id:"status"},"Status:"),r.a.createElement("h1",{id:"title"},r.a.createElement("h1",{id:"c"},"C"),r.a.createElement("h1",{id:"O"},"O"),r.a.createElement("h1",{id:"l"},"L"),r.a.createElement("h1",{id:"o"},"O"),r.a.createElement("h1",{id:"r"},"R"),r.a.createElement("h1",{id:"y"},"Y")),r.a.createElement("div",{className:"colorContainer"},r.a.createElement("h2",{className:"colorHeader"},"Current color:"),r.a.createElement("div",{className:"colorBox",id:"color"}),r.a.createElement("div",{className:"colorOuter"},C())),r.a.createElement("div",{className:"gridBox"},r.a.createElement("button",{onClick:function(){return function(){return p.apply(this,arguments)}()}},"Clear pixels"),r.a.createElement("button",{onClick:function(){return function(){return y.apply(this,arguments)}()}},"Fill all pixels"),r.a.createElement("button",{onClick:function(){return function(){return f.apply(this,arguments)}()}},"Fill empty pixels"),r.a.createElement("button",{onClick:function(){return function(){return k.apply(this,arguments)}()}},"Randomize"),r.a.createElement("button",{onClick:function(){return function(){return E.apply(this,arguments)}()}},"Empty random"),r.a.createElement("button",{onClick:function(){return function(){return h.apply(this,arguments)}()}},"Randomize with current"),r.a.createElement("button",{onClick:function(){return function(){return x.apply(this,arguments)}()}},"Randomize empty pixels"),r.a.createElement("button",{onClick:function(){document.getElementById("status").innerHTML="Status: Stopping"}},"Stop"),r.a.createElement("div",{className:"gridOuterLayer"},b())),r.a.createElement("h1",null,"Stats:"),r.a.createElement("h2",{className:"statsFilled",style:{marginLeft:"650px"}},"Filled pixels:"),r.a.createElement("h2",{className:"statsFilled",style:{marginLeft:"10px"},id:"statsFilled"},"0"),r.a.createElement("h2",{className:"statsEmptied",style:{marginLeft:"650px"}},"Emptied pixels:"),r.a.createElement("h2",{className:"statsEmptied",style:{marginLeft:"10px"},id:"statsEmptied"},"0"),r.a.createElement("h2",{id:"statsEmpty"},"Randomly emptied ones: 0"),r.a.createElement("h2",{id:"statsMissed"},"Randomly missed ones: 0"),r.a.createElement("button",{style:{marginLeft:"700px"},onClick:function(){return document.getElementById("statsFilled").textContent="0",document.getElementById("statsEmptied").textContent="0",document.getElementById("statsEmpty").textContent="Randomly emptied ones: 0",void(document.getElementById("statsMissed").textContent="Randomly missed ones: 0")}},"Clear stats"))};Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));s.a.render(r.a.createElement(B,null),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(e){e.unregister()})).catch((function(e){console.error(e.message)}))},5:function(e,t,n){e.exports=n(12)}},[[5,1,2]]]);
//# sourceMappingURL=main.402621bf.chunk.js.map