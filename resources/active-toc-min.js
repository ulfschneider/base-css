ActiveToc=function(){let e,t,i,o,n;function c(c){let r;if(e=function(e){if("string"==typeof e||e instanceof String)return{tocContainer:e};let t=Object.assign({},e);return t.tocContainer||(t.tocContainer="#header"),t}(c),"string"==typeof e.tocContainer||e.tocContainer instanceof String?r=e.tocContainer:n=e.tocContainer,document.querySelector&&window.IntersectionObserver){if(r&&(n=document.querySelector(r),n||(n=document.querySelector("header")),!n))return void console.error("A toc container with id=["+r+"] or the tag=<header> could not be found in the document");t=[...n.querySelectorAll("a")],i=[],t.forEach((e=>{let t=e.getAttribute("href");if(t&&t.startsWith("#"))try{i.push(document.querySelector(t))}catch(e){console.warn("Heading with id=["+t+"] not found in document")}})),o=new IntersectionObserver(s,{rootMargin:"0px"}),i.forEach((e=>{e&&o.observe(e)}))}else console.error("ActiveToc cannot run on this device because the Intersection Observer API is not supported")}function r(){i&&i.forEach((e=>{e&&o.unobserve(e)}))}function s(e,o){e.forEach((e=>{let o=`#${e.target.getAttribute("id")}`;t.forEach((t=>{t.classList.remove("is-highlight"),t.classList.remove("is-active"),t.getAttribute("href")===o&&(e.isIntersecting?t.classList.add("is-visible"):t.classList.remove("is-visible"))})),function(){for(let e=i.length-1;e>=0;e--)if(i[e]&&i[e].offsetTop<=window.pageYOffset){n.querySelectorAll(`a[href="#${i[e].id}"]`).forEach((e=>{e.classList.add("is-active")}));break}}(),function(){let e;for(let i of t)i.classList.contains("is-visible")&&(e||(e=i.href),e==i.href&&i.classList.add("is-highlight"));if(!e){n.querySelectorAll("a.is-active").forEach((e=>{e.classList.add("is-highlight")}))}}()}))}return{init:function(e){c(e)},unobserve:function(){r()},destroy:function(){r(),t&&t.forEach((e=>{e.classList.remove("is-visible"),e.classList.remove("is-active")}))}}}();try{module&&(module.exports={init:function(e){this.activeToc||(this.activeToc=ActiveToc),this.activeToc.init(e)},destroy:function(){this.activeToc&&this.activeToc.destroy()},unobserve:function(){this.activeToc&&this.activeToc.unobserve()}})}catch(e){console.log("Using ActiveToc in non-node environment")}
