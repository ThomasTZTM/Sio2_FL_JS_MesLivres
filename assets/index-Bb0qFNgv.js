(function(){const i=document.createElement("link").relList;if(i&&i.supports&&i.supports("modulepreload"))return;for(const e of document.querySelectorAll('link[rel="modulepreload"]'))r(e);new MutationObserver(e=>{for(const t of e)if(t.type==="childList")for(const o of t.addedNodes)o.tagName==="LINK"&&o.rel==="modulepreload"&&r(o)}).observe(document,{childList:!0,subtree:!0});function s(e){const t={};return e.integrity&&(t.integrity=e.integrity),e.referrerPolicy&&(t.referrerPolicy=e.referrerPolicy),e.crossOrigin==="use-credentials"?t.credentials="include":e.crossOrigin==="anonymous"?t.credentials="omit":t.credentials="same-origin",t}function r(e){if(e.ep)return;e.ep=!0;const t=s(e);fetch(e.href,t)}})();const u=(n,i,s,r)=>{const e={titre:n,auteur:i,resume:s,estLu:r,id:crypto.randomUUID(),createdAt:new Date().toDateString()};JSON.stringify(e);const t=localStorage.getItem("livres"),o=t?JSON.parse(t):[];o.push(e),localStorage.setItem("livres",JSON.stringify(o))},m=()=>{const n=localStorage.getItem("livres");return n?JSON.parse(n):[]},f=n=>{const i=localStorage.getItem("livres"),r=(i?JSON.parse(i):[]).filter(e=>e.id!==n);localStorage.setItem("livres",JSON.stringify(r))},l=()=>{const n=document.querySelector("#booksList"),i=m();n.innerHTML=i.map(s=>{const r=new Date(s.createdAt).toLocaleDateString("fr-FR");return`
        <div class="col-md-6 col-lg-4" id="book-${s.id}">
     <div class="card h-100">
        <div class="card-body">
            <div class="d-flex justify-content-between align-items-start mb-2">
                <h5 class="card-title mb-0">${s.titre}</h5>
                <span class="badge ${s.estLu?"bg-success":"bg-secondary"} toggle-read-btn " data-id="${s.id}" 
                        style="cursor: pointer;" >
                    ${s.estLu?'<i class="bi bi-check-circle me-1"></i>Lu':'<i class="bi bi-circle me-1"></i>Non lu'}
                </span>
                </div>
                <h6 class="card-subtitle mb-2">
                <i class="bi bi-person me-1"></i>${s.auteur}
                </h6>
                <p class="card-text small">${s.resume}</p>
                <div class="d-flex justify-content-between align-items-center mt-3">
                <small class="text-muted">
                    <i class="bi bi-calendar3 me-1"></i>${r}
                </small>
                <button class="btn btn-outline-danger btn-sm delete-btn" data-id="${s.id}" >
                    <i class="bi bi-trash me-1"></i>Supprimer
                </button>
            </div>
        </div>
    </div>
</div>
        `}).join("")},g=()=>{const n=document.querySelector("#toggleFormBtn"),i=document.querySelector("#formSection"),s=new bootstrap.Collapse(i,{toggle:!1}),r=document.querySelector("#bookForm");n.addEventListener("click",()=>{s.toggle()}),i.addEventListener("hidden.bs.collapse",()=>{r.reset()}),r.addEventListener("submit",t=>{t.preventDefault();const o=r.title.value,c=r.author.value,a=r.summary.value,d=r.isRead.checked;u(o,c,a,d),s.hide(),l()}),document.querySelector("#booksList").addEventListener("click",t=>{const o=t.target.closest(".delete-btn, .toggle-read-btn");if(o===null)return;const c=o.dataset.id;o.classList.contains("delete-btn")?(f(c),l()):o.classList.contains("toggle-read-btn")&&console.log("modif")})};g();l();
