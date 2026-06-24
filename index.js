import{a as u,S as d,i as l}from"./assets/vendor-CFFvTae-.js";(function(){const o=document.createElement("link").relList;if(o&&o.supports&&o.supports("modulepreload"))return;for(const e of document.querySelectorAll('link[rel="modulepreload"]'))s(e);new MutationObserver(e=>{for(const t of e)if(t.type==="childList")for(const i of t.addedNodes)i.tagName==="LINK"&&i.rel==="modulepreload"&&s(i)}).observe(document,{childList:!0,subtree:!0});function a(e){const t={};return e.integrity&&(t.integrity=e.integrity),e.referrerPolicy&&(t.referrerPolicy=e.referrerPolicy),e.crossOrigin==="use-credentials"?t.credentials="include":e.crossOrigin==="anonymous"?t.credentials="omit":t.credentials="same-origin",t}function s(e){if(e.ep)return;e.ep=!0;const t=a(e);fetch(e.href,t)}})();const f="55520229-6b38dd18315a985816c1e4a23",m=u.create({baseURL:"https://pixabay.com/api/"});function p(r){const o={key:f,q:r,image_type:"photo",orientation:"horizontal",safesearch:!0};return m.get("",{params:o}).then(a=>a.data)}const n={gallery:document.querySelector(".gallery"),loader:document.querySelector(".loader")},y=new d(".gallery a",{captionsData:"alt",captionDelay:250});function g(r){return`
    <li class="gallery-item">
      <a href="${r.largeImageURL}">
        <img src="${r.webformatURL}" alt="${r.tags}" loading="lazy" />
      </a>

      <div class="info">
        <p><b>Likes:</b> ${r.likes}</p>
        <p><b>Views:</b> ${r.views}</p>
        <p><b>Comments:</b> ${r.comments}</p>
        <p><b>Downloads:</b> ${r.downloads}</p>
      </div>
    </li>
  `}function h(r){const o=r.map(g).join("");n.gallery.insertAdjacentHTML("beforeend",o),y.refresh()}function b(){n.gallery.innerHTML=""}function L(){n.loader.classList.remove("hidden")}function w(){n.loader.classList.add("hidden")}const c=document.querySelector(".form");c.addEventListener("submit",v);function v(r){r.preventDefault();const a=new FormData(r.target).get("search-text");if(!a){l.error({title:"Error",message:"Please enter a search term!"});return}b(),L(),p(a).then(s=>{const e=s.hits||[];if(!e.length){l.error({title:"No results",message:"Sorry, there are no images matching your search query. Please try again!"});return}h(e)}).catch(s=>{l.error({title:"Error",message:"Something went wrong. Try again later."})}).finally(()=>{w()}),c.reset()}
//# sourceMappingURL=index.js.map
