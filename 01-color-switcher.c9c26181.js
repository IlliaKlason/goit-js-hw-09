!function(){function e(){return"#".concat(Math.floor(16777215*Math.random()).toString(16))}var t=document.querySelector("[data-start]"),n=document.querySelector("[data-stop]"),o=document.querySelector(".colorchange");n.disabled=!0;var a=null;t.addEventListener("click",(function(){t.disabled=!0,n.disabled=!1,a=setInterval((function(){o.style.color=e(),document.body.style.backgroundColor=e()}),1e3)})),n.addEventListener("click",(function(){clearInterval(a),t.disabled=!1,n.disabled=!0}))}();
//# sourceMappingURL=01-color-switcher.c9c26181.js.map
