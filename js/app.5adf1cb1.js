(function(t){function e(e){for(var n,a,s=e[0],c=e[1],u=e[2],f=0,d=[];f<s.length;f++)a=s[f],o[a]&&d.push(o[a][0]),o[a]=0;for(n in c)Object.prototype.hasOwnProperty.call(c,n)&&(t[n]=c[n]);l&&l(e);while(d.length)d.shift()();return i.push.apply(i,u||[]),r()}function r(){for(var t,e=0;e<i.length;e++){for(var r=i[e],n=!0,s=1;s<r.length;s++){var c=r[s];0!==o[c]&&(n=!1)}n&&(i.splice(e--,1),t=a(a.s=r[0]))}return t}var n={},o={app:0},i=[];function a(e){if(n[e])return n[e].exports;var r=n[e]={i:e,l:!1,exports:{}};return t[e].call(r.exports,r,r.exports,a),r.l=!0,r.exports}a.m=t,a.c=n,a.d=function(t,e,r){a.o(t,e)||Object.defineProperty(t,e,{enumerable:!0,get:r})},a.r=function(t){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(t,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(t,"__esModule",{value:!0})},a.t=function(t,e){if(1&e&&(t=a(t)),8&e)return t;if(4&e&&"object"===typeof t&&t&&t.__esModule)return t;var r=Object.create(null);if(a.r(r),Object.defineProperty(r,"default",{enumerable:!0,value:t}),2&e&&"string"!=typeof t)for(var n in t)a.d(r,n,function(e){return t[e]}.bind(null,n));return r},a.n=function(t){var e=t&&t.__esModule?function(){return t["default"]}:function(){return t};return a.d(e,"a",e),e},a.o=function(t,e){return Object.prototype.hasOwnProperty.call(t,e)},a.p="/";var s=window["webpackJsonp"]=window["webpackJsonp"]||[],c=s.push.bind(s);s.push=e,s=s.slice();for(var u=0;u<s.length;u++)e(s[u]);var l=c;i.push([0,"chunk-vendors"]),r()})({0:function(t,e,r){t.exports=r("56d7")},"034f":function(t,e,r){"use strict";var n=r("64a9"),o=r.n(n);o.a},"56d7":function(t,e,r){"use strict";r.r(e);r("cadf"),r("551c"),r("097d");var n=r("2b0e"),o=function(){var t=this,e=t.$createElement,r=t._self._c||e;return r("div",{staticClass:"App"},[r("header",{staticClass:"header"},[t._v("Movies of 2018 (Vue)")]),r("MovieList")],1)},i=[],a=function(){var t=this,e=t.$createElement,r=t._self._c||e;return r("div",[r("div",{staticClass:"flex table-header"},[r("div",[t._v("Poster")]),r("div",{on:{click:function(e){t.sort("name")}}},[t._v("\n\t\t\tTitle \n\t\t\t"),r("span",{staticClass:"arrow-up"}),r("span",{staticClass:"arrow-down"})]),r("div",{on:{click:function(e){t.sort("year")}}},[t._v("\n\t\t\tYear\n\t\t\t"),r("span",{staticClass:"arrow-up"}),r("span",{staticClass:"arrow-down"})])]),t._l(t.movies,function(e){return r("div",{key:e.imdbId,staticClass:"flex row"},[r("div",[r("img",{staticClass:"poster",attrs:{src:e.Poster}})]),r("div",[t._v(t._s(e.Title))]),r("div",[t._v(t._s(e.Year))])])})],2)},s=[],c=(r("55dd"),{data:function(){return{movies:[],titleOrder:"asc",yearOrder:"asc"}},mounted:function(){var t=this;fetch("https://www.omdbapi.com/?apikey=a567cf6c&s=love&type=movie").then(function(t){return t.json()}).then(function(e){t.movies=e.Search}).catch()},methods:{sort:function(t){var e=this.movies,r=this.titleOrder,n=this.yearOrder;"name"==t?(e.sort(function(t,e){return"asc"==r?t.Title.charCodeAt(0)-e.Title.charCodeAt(0):e.Title.charCodeAt(0)-t.Title.charCodeAt(0)}),r="asc"==r?"dsc":"asc"):(e.sort(function(t,e){return"asc"==n?t.Year-e.Year:e.Year-t.Year}),n="asc"==n?"dsc":"asc"),this.movies=e,this.titleOrder=r,this.yearOrder=n}}}),u=c,l=(r("dc5f"),r("2877")),f=Object(l["a"])(u,a,s,!1,null,null,null);f.options.__file="MovieList.vue";var d=f.exports,p={name:"app",components:{MovieList:d}},v=p,h=(r("034f"),Object(l["a"])(v,o,i,!1,null,null,null));h.options.__file="App.vue";var m=h.exports;n["a"].config.productionTip=!1,new n["a"]({render:function(t){return t(m)}}).$mount("#app")},"64a9":function(t,e,r){},"79e6":function(t,e,r){},dc5f:function(t,e,r){"use strict";var n=r("79e6"),o=r.n(n);o.a}});
//# sourceMappingURL=app.5adf1cb1.js.map