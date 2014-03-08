!function(e,t){"use strict";function n(e,t){for(var n,r=[],i=0;i<e.length;++i){if(n=s[e[i]]||o(e[i]),!n)throw"module definition dependecy not found: "+e[i];r.push(n)}t.apply(null,r)}function r(e,r,i){if("string"!=typeof e)throw"invalid module definition, module id must be defined and be a string";if(r===t)throw"invalid module definition, dependencies must be specified";if(i===t)throw"invalid module definition, definition function must be specified";n(r,function(){s[e]=i.apply(null,arguments)})}function i(e){return!!s[e]}function o(t){for(var n=e,r=t.split(/[.\/]/),i=0;i<r.length;++i){if(!n[r[i]])return;n=n[r[i]]}return n}function a(n){for(var r=0;r<n.length;r++){for(var i=e,o=n[r],a=o.split(/[.\/]/),l=0;l<a.length-1;++l)i[a[l]]===t&&(i[a[l]]={}),i=i[a[l]];i[a[a.length-1]]=s[o]}}var s={},l="tinymce/spellcheckerplugin/DomTextMatcher",c="tinymce/spellcheckerplugin/Plugin",d="tinymce/PluginManager",u="tinymce/util/Tools",f="tinymce/ui/Menu",p="tinymce/dom/DOMUtils",m="tinymce/util/JSONRequest",h="tinymce/util/URI";r(l,[],function(){return function(e,t){function n(e,t){if(!e[0])throw"findAndReplaceDOMText cannot handle zero-length matches";return{start:e.index,end:e.index+e[0].length,text:e[0],data:t}}function r(e){var t;if(3===e.nodeType)return e.data;if(k[e.nodeName]&&!N[e.nodeName])return"";if(t="",(N[e.nodeName]||S[e.nodeName])&&(t+="\n"),e=e.firstChild)do t+=r(e);while(e=e.nextSibling);return t}function i(e,t,n){var r,i,o,a,s=[],l=0,c=e,d,u=0;t=t.slice(0),t.sort(function(e,t){return e.start-t.start}),d=t.shift();e:for(;;){if((N[c.nodeName]||S[c.nodeName])&&l++,3===c.nodeType&&(!i&&c.length+l>=d.end?(i=c,a=d.end-l):r&&s.push(c),!r&&c.length+l>d.start&&(r=c,o=d.start-l),l+=c.length),r&&i){if(c=n({startNode:r,startNodeIndex:o,endNode:i,endNodeIndex:a,innerNodes:s,match:d.text,matchIndex:u}),l-=i.length-a,r=null,i=null,s=[],d=t.shift(),u++,!d)break}else{if((!k[c.nodeName]||N[c.nodeName])&&c.firstChild){c=c.firstChild;continue}if(c.nextSibling){c=c.nextSibling;continue}}for(;;){if(c.nextSibling){c=c.nextSibling;break}if(c.parentNode===e)break e;c=c.parentNode}}}function o(e){function t(t,n){var r=x[n];r.stencil||(r.stencil=e(r));var i=r.stencil.cloneNode(!1);return i.setAttribute("data-mce-index",n),t&&i.appendChild(_.doc.createTextNode(t)),i}return function n(e){var n,r,i,o=e.startNode,a=e.endNode,s=e.matchIndex,l=_.doc;if(o===a){var c=o;i=c.parentNode,e.startNodeIndex>0&&(n=l.createTextNode(c.data.substring(0,e.startNodeIndex)),i.insertBefore(n,c));var d=t(e.match,s);return i.insertBefore(d,c),e.endNodeIndex<c.length&&(r=l.createTextNode(c.data.substring(e.endNodeIndex)),i.insertBefore(r,c)),c.parentNode.removeChild(c),d}n=l.createTextNode(o.data.substring(0,e.startNodeIndex)),r=l.createTextNode(a.data.substring(e.endNodeIndex));for(var u=t(o.data.substring(e.startNodeIndex),s),f=[],p=0,m=e.innerNodes.length;m>p;++p){var h=e.innerNodes[p],g=t(h.data,s);h.parentNode.replaceChild(g,h),f.push(g)}var v=t(a.data.substring(0,e.endNodeIndex),s);return i=o.parentNode,i.insertBefore(n,o),i.insertBefore(u,o),i.removeChild(o),i=a.parentNode,i.insertBefore(v,a),i.insertBefore(r,a),i.removeChild(a),v}}function a(e){var t=e.parentNode;t.insertBefore(e.firstChild,e),e.parentNode.removeChild(e)}function s(t){var n=e.getElementsByTagName("*"),r=[];t="number"==typeof t?""+t:null;for(var i=0;i<n.length;i++){var o=n[i],a=o.getAttribute("data-mce-index");null!==a&&a.length&&(a===t||null===t)&&r.push(o)}return r}function l(e){for(var t=x.length;t--;)if(x[t]===e)return t;return-1}function c(e){var t=[];return d(function(n,r){e(n,r)&&t.push(n)}),x=t,this}function d(e){for(var t=0,n=x.length;n>t&&e(x[t],t)!==!1;t++);return this}function u(t){return x.length&&i(e,x,o(t)),this}function f(e,t){if(w&&e.global)for(;C=e.exec(w);)x.push(n(C,t));return this}function p(e){var t,n=s(e?l(e):null);for(t=n.length;t--;)a(n[t]);return this}function m(e){return x[e.getAttribute("data-mce-index")]}function h(e){return s(l(e))[0]}function g(e,t,n){return x.push({start:e,end:e+t,text:w.substr(e,t),data:n}),this}function v(e){var n=s(l(e)),r=t.dom.createRng();return r.setStartBefore(n[0]),r.setEndAfter(n[n.length-1]),r}function y(e,n){var r=v(e);return r.deleteContents(),n.length>0&&r.insertNode(t.dom.doc.createTextNode(n)),r}function b(){return x.splice(0,x.length),p(),this}var C,x=[],w,_=t.dom,N,k,S;return N=t.schema.getBlockElements(),k=t.schema.getWhiteSpaceElements(),S=t.schema.getShortEndedElements(),w=r(e),{text:w,matches:x,each:d,filter:c,reset:b,matchFromElement:m,elementFromMatch:h,find:f,add:g,wrap:u,unwrap:p,replace:y,rangeFromMatch:v,indexOf:l}}}),r(c,[l,d,u,f,p,m,h],function(e,t,n,r,i,o,a){t.add("spellchecker",function(t,s){function l(){return y.textMatcher||(y.textMatcher=new e(t.getBody(),t)),y.textMatcher}function c(e,t){var r=[];return n.each(t,function(e){r.push({selectable:!0,text:e.name,data:e.value})}),r}function d(e){for(var t in e)return!1;return!0}function u(e){var o=[],a=b[e.text];n.each(a,function(n){o.push({text:n,onclick:function(){var r=l().replace(e,n);r.collapse(!1),t.selection.setRng(r),p()}})}),o.push.apply(o,[{text:"-"},{text:"Ignore",onclick:function(){m(e)}},{text:"Ignore all",onclick:function(){m(e,!0)}},{text:"Finish",onclick:h}]),x=new r({items:o,context:"contextmenu",onautohide:function(e){-1!=e.target.className.indexOf("spellchecker")&&e.preventDefault()},onhide:function(){x.remove(),x=null}}),x.renderTo(document.body);var s=l().elementFromMatch(e),c=i.DOM.getPos(t.getContentAreaContainer()),d=t.dom.getPos(s),u=t.dom.getRoot();"BODY"==u.nodeName?(d.x-=u.ownerDocument.documentElement.scrollLeft||u.scrollLeft,d.y-=u.ownerDocument.documentElement.scrollTop||u.scrollTop):(d.x-=u.scrollLeft,d.y-=u.scrollTop),c.x+=d.x,c.y+=d.y,x.moveTo(c.x,c.y+s.offsetHeight)}function f(){function e(e){return t.setProgressState(!1),d(e)?(t.windowManager.alert("No misspellings found"),void(C=!1)):(b=e,l().filter(function(t){return!!e[t.text]}).wrap(function(){return t.dom.create("span",{"class":"mce-spellchecker-word","data-mce-bogus":1})}),void t.fire("SpellcheckStart"))}function n(e,n,r){o.sendRPC({url:new a(s).toAbsolute(w.spellchecker_rpc_url),method:e,params:{lang:w.spellchecker_language||"en",words:n},success:function(e){r(e)},error:function(e,n){e="JSON Parse error."==e?"Non JSON response:"+n.responseText:"Error: "+e,t.windowManager.alert(e),t.setProgressState(!1),h()}})}var r=[],i={};if(C)return void h();h(),C=!0;var c=t.getParam("spellchecker_wordchar_pattern")||new RegExp('[^\\s!"#$%&()*+,-./:;<=>?@[\\]^_{|}`\xa7\xa9\xab\xae\xb1\xb6\xb7\xb8\xbb\xbc\xbd\xbe\xbf\xd7\xf7\xa4\u201d\u201c\u201e]+',"g");l().find(c).each(function(e){var t=e.text;if(!i[t]){if(/^\d+$/.test(t)||1==t.length)return;r.push(t),i[t]=!0}}),t.setProgressState(!0);var u=w.spellchecker_callback||n;u("spellcheck",r,e),t.focus()}function p(){t.dom.select("span.mce-spellchecker-word").length||h()}function m(e,n){t.selection.collapse(),n?l().each(function(t){t.text==e.text&&l().unwrap(t)}):l().unwrap(e),p()}function h(){l().reset(),y.textMatcher=null,C&&(C=!1,t.fire("SpellcheckEnd"))}function g(e){var t=w.spellchecker_language;e.control.items().each(function(e){e.active(e.settings.data===t)})}var v,y=this,b,C,x,w=t.settings,_=w.spellchecker_languages||"English=en,Danish=da,Dutch=nl,Finnish=fi,French=fr_FR,German=de,Italian=it,Polish=pl,Portuguese=pt_BR,Spanish=es,Swedish=sv";v=c("Language",n.map(_.split(","),function(e){var t=e.split("=");return{name:t[0],value:t[1]}})),t.on("click",function(e){if("mce-spellchecker-word"==e.target.className){e.preventDefault();var n=l().matchFromElement(e.target);t.selection.setRng(l().rangeFromMatch(n)),u(n)}}),t.addMenuItem("spellchecker",{text:"Spellcheck",context:"tools",onclick:f,selectable:!0,onPostRender:function(){var e=this;t.on("SpellcheckStart SpellcheckEnd",function(){e.active(C)})}});var N={tooltip:"Spellcheck",onclick:f,onPostRender:function(){var e=this;t.on("SpellcheckStart SpellcheckEnd",function(){e.active(C)})}};v.length>1&&(N.type="splitbutton",N.menu=v,N.onshow=g,N.onselect=function(e){w.spellchecker_language=e.control.settings.data}),t.addButton("spellchecker",N),t.addCommand("mceSpellCheck",f),t.on("remove",function(){x&&(x.remove(),x=null)}),this.getTextMatcher=l,w.spellchecker_language=w.spellchecker_language||w.language||"en"})}),a([l,c])}(this);