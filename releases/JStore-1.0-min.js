if(window.Storage){(function(){Storage.prototype.get=function b(l){if(typeof l=="object"){var m=new Object();for(var c=0;c<l.length;c++){m[l[c]]=this.get(l[c])}return m}else{var l=this.decompose(l);if(l.object){return this.parse(l.item)[l.key]}else{return this.parse(l)}}};Storage.prototype.set=function i(m,p){if(typeof m=="object"){for(var c in m){this.set(c,m[c])}}else{var m=this.decompose(m);if(m.object){var q={};var o="";for(var l=1;l<m.keys.length;l++){o+=m.keys[l];if(l<m.keys.length-1){q[o]={}}else{q[o]=JStoreTools.stringify(p)}}var n=this.get(m.item);for(var c in q){n[c]=q[c]}this.setItem(m.item,JStoreTools.stringify(n))}else{this.setItem(m,JStoreTools.stringify(p))}}};Storage.prototype.remove=function e(l){if(typeof l=="object"){for(var c=0;c<l.length;c++){this.remove(l[c])}}else{var l=this.decompose(l);if(l.object){var m=this.get(l.item);delete m[l.key];this.set(l.item,m)}else{this.removeItem(l)}}};Storage.prototype.isset=function h(c){return(this.get(c)?true:false)};Storage.prototype.decompose=function j(k){var l=k.split(".");var c=(l.length>1?true:false);if(c){return{object:true,item:l[0],key:k.substr(l[0].length+1,k.length),keys:l}}else{return k}};Storage.prototype.parse=function d(c){var k=this.getItem(c);return(JStoreTools.isJSON(k)?JSON.parse(k):k)};Storage.prototype.c=function g(){this.clear()};this.JStoreTools={stringify:function f(c){return(typeof c!="string"?JSON.stringify(c):c)},isJSON:function a(c){return(/^[\],:{}\s]*$/.test(c.replace(/\\["\\\/bfnrtu]/g,"@").replace(/"[^"\\\n\r]*"|true|false|null|-?\d+(?:\.\d*)?(?:[eE][+\-]?\d+)?/g,"]").replace(/(?:^|:|,)(?:\s*\[)+/g,"")))}};this.ls=localStorage;this.ss=sessionStorage})()};
