!function(){"use strict";const{render:e}=wp.element;document.addEventListener("DOMContentLoaded",(()=>{!function(){const e=document.querySelectorAll(".column-event_meta");e&&e.forEach((e=>{const t=e.querySelector(".event_actions"),s=e.querySelector(".event_details");if(t){const e=t.querySelector(".details");e&&e.addEventListener("click",(()=>{e.classList.contains("active")?(e.classList.remove("active"),s.classList.remove("active")):(e.classList.add("active"),s.classList.add("active"))}))}}))}(),function(){const e=document.getElementById("logdash_reset_log");function t(e,t){const s=document.getElementById("logdash_message");s.style.display="block",s.classList.remove("notice-error","notice-success","notice-warning","notice-info"),s.classList.add(t),s.querySelector("p").innerHTML=e}e&&(document.getElementById("logdash_message"),document.createElement("p"),e.addEventListener("click",(s=>{if(s.preventDefault(),!0===confirm(e.dataset.confirmMessage)){const s=e.getAttribute("href");fetch(s,{method:"post",body:"",headers:{Accept:"application/json","Content-Type":"application/json"}}).then((e=>e.json())).then((e=>{if("success"!==e.status)throw new Error(e.message);var s;s=e.message,console.log(s),t(s,"notice-success")})).catch((e=>{t(e,"notice-error")}))}})))}()})),jQuery(document).ready((function(e){e("select.ld-select").select2()}))}();
//# sourceMappingURL=index.js.map