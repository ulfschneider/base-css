ActiveToc=function(){let t,e,i,o,n;function c(c){let s;if(t=function(t){if("string"==typeof t||t instanceof String)return{tocContainer:t};let e=Object.assign({},t);return e.tocContainer||(e.tocContainer="#header"),e}(c),"string"==typeof t.tocContainer||t.tocContainer instanceof String?s=t.tocContainer:t.tocContainer?n=t.tocContainer:s="header",document.querySelector&&window.IntersectionObserver){if(s&&(n=document.querySelector(s),!n))return void console.warn("A toc container with selector=["+s+"] could not be found in the document");e=[...n.querySelectorAll("a")],i=[],e.forEach((t=>{let e=t.getAttribute("href");if(e&&e.startsWith("#"))try{i.push(document.querySelector(e))}catch(t){console.warn("Heading with id=["+e+"] not found in document")}})),o=new IntersectionObserver(r,t.intersectionOptions),i.forEach((t=>{t&&o.observe(t)}))}else console.error("ActiveToc cannot run on this device because the Intersection Observer API is not supported")}function s(){i&&i.forEach((t=>{t&&o.unobserve(t)}))}function r(o,c){o.forEach((o=>{!function(i){let o=`#${i.target.getAttribute("id")}`;e.forEach((e=>{e.classList.remove("is-highlight"),e.classList.remove("is-active"),e.getAttribute("href")===o&&(i.isIntersecting?(e.classList.add("is-visible"),t.onVisible&&t.onVisible(e,i)):e.classList.remove("is-visible"))}))}(o),function(e){for(let o=i.length-1;o>=0;o--)if(i[o]&&i[o].offsetTop<=window.pageYOffset){n.querySelectorAll(`a[href="#${i[o].id}"]`).forEach((i=>{i.classList.add("is-active"),t.onActive&&t.onActive(i,e)}));break}}(o),function(i){let o;for(let n of e)n.classList.contains("is-visible")&&(o||(o=n.href),o==n.href&&(n.classList.add("is-highlight"),t.onHighlight&&t.onHighlight(n,i)));if(!o){let e=n.querySelectorAll("a.is-active");e.forEach((e=>{e.classList.add("is-highlight"),t.onHighlight&&t.onHighlight(e,i)})),0==e.length&&t.offHighlight&&t.offHighlight()}}(o)}))}return{init:function(t){c(t)},unobserve:function(){s()},destroy:function(){s(),e&&e.forEach((t=>{t.classList.remove("is-visible"),t.classList.remove("is-active"),t.classList.remove("is-highlight")}))}}}();try{module&&(module.exports={init:function(t){this.activeToc||(this.activeToc=ActiveToc),this.activeToc.init(t)},destroy:function(){this.activeToc&&this.activeToc.destroy()},unobserve:function(){this.activeToc&&this.activeToc.unobserve()}})}catch(t){console.log("Using ActiveToc in non-node environment")}
