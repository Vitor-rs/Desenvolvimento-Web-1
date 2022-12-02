(function(){const t=document.createElement("link").relList;if(t&&t.supports&&t.supports("modulepreload"))return;for(const e of document.querySelectorAll('link[rel="modulepreload"]'))i(e);new MutationObserver(e=>{for(const r of e)if(r.type==="childList")for(const o of r.addedNodes)o.tagName==="LINK"&&o.rel==="modulepreload"&&i(o)}).observe(document,{childList:!0,subtree:!0});function l(e){const r={};return e.integrity&&(r.integrity=e.integrity),e.referrerpolicy&&(r.referrerPolicy=e.referrerpolicy),e.crossorigin==="use-credentials"?r.credentials="include":e.crossorigin==="anonymous"?r.credentials="omit":r.credentials="same-origin",r}function i(e){if(e.ep)return;e.ep=!0;const r=l(e);fetch(e.href,r)}})();const n=`

    <ul>
      <li><a class="contrast" href=" ./index.html">Desenvolvimento Web 1</a></li>
    </ul>

    <!-- Menu Principal-->
    <ul>

      <li>
        <details role="list" dir="rtl">
          <summary role="link" class="contrast">Exerc\xEDcios</summary> <!-- Texto menu Principal-->

          <ul role="listbox"> <!-- Sub Menu-->
            <li><a class="primary" href="./login.html">Formul\xE1rio de Acesso</a></li> <!-- Item do submenu-->
            <li><a class="primary" href="./lista-tarefa.html">Lista de Tarefa</a></li> <!-- Item do submenu-->
          </ul>

          <!-- fim do Sub Menu-->
        </details>
      </li>

    </ul>
    <!-- Fim do Menu Principal-->
`,s=document.querySelector("#menu");s.innerHTML=n;
