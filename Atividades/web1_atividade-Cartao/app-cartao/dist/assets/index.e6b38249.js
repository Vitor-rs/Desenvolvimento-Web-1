(function(){const t=document.createElement("link").relList;if(t&&t.supports&&t.supports("modulepreload"))return;for(const r of document.querySelectorAll('link[rel="modulepreload"]'))c(r);new MutationObserver(r=>{for(const o of r)if(o.type==="childList")for(const a of o.addedNodes)a.tagName==="LINK"&&a.rel==="modulepreload"&&c(a)}).observe(document,{childList:!0,subtree:!0});function d(r){const o={};return r.integrity&&(o.integrity=r.integrity),r.referrerpolicy&&(o.referrerPolicy=r.referrerpolicy),r.crossorigin==="use-credentials"?o.credentials="include":r.crossorigin==="anonymous"?o.credentials="omit":o.credentials="same-origin",o}function c(r){if(r.ep)return;r.ep=!0;const o=d(r);fetch(r.href,o)}})();document.querySelector("#cartao");const i=document.querySelector("#numero-cartao"),s=document.querySelector("#texto-nome"),f=document.querySelector("#texto-valido-ate");document.querySelector("#texto-cvc");const n=document.querySelector(".numeroValor"),u=document.querySelector(".nomeValor"),l=document.querySelector(".validade-ate");document.querySelector(".cvcValor");i.addEventListener("keyup",e=>{if(!e.target.value)n.innerText="0000 0000 0000 0000";else{const t=e.target.value.replaceAll(" ","");e.target.value.length>14?(e.target.value=t.replace(/(\d{4})(\d{4})(\d{4})(\d{0,4})/,"$1 $2 $3 $4"),n.innerHTML=t.replace(/(\d{4})(\d{4})(\d{4})(\d{0,4})/,"$1 $2 $3 $4")):e.target.value.length>9?(e.target.value=t.replace(/(\d{4})(\d{4})(\d{0,4})/,"$1 $2 $3"),n.innerHTML=t.replace(/(\d{4})(\d{4})(\d{0,4})/,"$1 $2 $3")):e.target.value.length>4?(e.target.value=t.replace(/(\d{4})(\d{0,4})/,"$1 $2"),n.innerHTML=t.replace(/(\d{4})(\d{0,4})/,"$1 $2")):n.innerHTML=t}});s.addEventListener("keyup",e=>{e.target.value?u.innerHTML=e.target.value.toUpperCase():u.innerHTML="----- ----- -----"});f.addEventListener("keyup",e=>{if(!e.target.value)l.innerHTML="--/--";else{const t=e.target.value.replace("/","");e.target.value.length>2?(e.target.value=t.replace(/^(\d{2})(\d{0,2})/,"$1/$2"),l.innerHTML=t.replace(/^(\d{2})(\d{0,2})/,"$1/$2")):l.innerHTML=t}});