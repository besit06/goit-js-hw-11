import{i as l,S as f}from"./assets/vendor-5ObWk2rO.js";(function(){const t=document.createElement("link").relList;if(t&&t.supports&&t.supports("modulepreload"))return;for(const e of document.querySelectorAll('link[rel="modulepreload"]'))r(e);new MutationObserver(e=>{for(const o of e)if(o.type==="childList")for(const i of o.addedNodes)i.tagName==="LINK"&&i.rel==="modulepreload"&&r(i)}).observe(document,{childList:!0,subtree:!0});function s(e){const o={};return e.integrity&&(o.integrity=e.integrity),e.referrerPolicy&&(o.referrerPolicy=e.referrerPolicy),e.crossOrigin==="use-credentials"?o.credentials="include":e.crossOrigin==="anonymous"?o.credentials="omit":o.credentials="same-origin",o}function r(e){if(e.ep)return;e.ep=!0;const o=s(e);fetch(e.href,o)}})();const h="46065399-355f71206950d55166b7078e9",m="https://pixabay.com/api/";function p(n,t=1,s=20){const r=`${m}?key=${h}&q=${encodeURIComponent(n)}&image_type=photo&orientation=horizontal&safesearch=true&page=${t}&per_page=${s}`;return fetch(r).then(e=>{if(!e.ok)throw new Error(`HTTP error! status: ${e.status}`);return e.json()}).catch(e=>{throw console.error("Error fetching images:",e),e})}let a;function g(n){const t=document.querySelector(".gallery");if(t.innerHTML="",n.length===0){l.error({title:"Error",message:"Sorry, there are no images matching your search query. Please try again!"});return}const s=n.map(r=>`
      <li class="gallery-item">
        <a href="${r.largeImageURL}" target="_blank">
          <img src="${r.webformatURL}" alt="${r.tags}" loading="lazy" />
        </a>
        <div class="info">
          <p><b>Likes:</b> ${r.likes}</p>
          <p><b>Views:</b> ${r.views}</p>
          <p><b>Comments:</b> ${r.comments}</p>
          <p><b>Downloads:</b> ${r.downloads}</p>
        </div>
      </li>
    `).join("");t.innerHTML=s,a?a.refresh():a=new f(".gallery a")}function c(n){l.error({title:"Error",message:n})}const u=document.querySelector(".search-form"),y=u.querySelector('input[name="searchQuery"]'),d=document.querySelector(".gallery");let b=1;const L=20;u.addEventListener("submit",w);function w(n){n.preventDefault();const t=y.value.trim();if(d.innerHTML="",t===""){c("Please enter a search query.");return}p(t,b,L).then(s=>{if(s.hits.length===0){c("Sorry, there are no images matching your search query. Please try again!");return}g(s.hits)}).catch(s=>{c("Something went wrong. Please try again later.")})}
//# sourceMappingURL=index.js.map
