(function(e){function t(t){for(var r,l,c=t[0],u=t[1],i=t[2],b=0,p=[];b<c.length;b++)l=c[b],Object.prototype.hasOwnProperty.call(a,l)&&a[l]&&p.push(a[l][0]),a[l]=0;for(r in u)Object.prototype.hasOwnProperty.call(u,r)&&(e[r]=u[r]);s&&s(t);while(p.length)p.shift()();return n.push.apply(n,i||[]),o()}function o(){for(var e,t=0;t<n.length;t++){for(var o=n[t],r=!0,c=1;c<o.length;c++){var u=o[c];0!==a[u]&&(r=!1)}r&&(n.splice(t--,1),e=l(l.s=o[0]))}return e}var r={},a={app:0},n=[];function l(t){if(r[t])return r[t].exports;var o=r[t]={i:t,l:!1,exports:{}};return e[t].call(o.exports,o,o.exports,l),o.l=!0,o.exports}l.m=e,l.c=r,l.d=function(e,t,o){l.o(e,t)||Object.defineProperty(e,t,{enumerable:!0,get:o})},l.r=function(e){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},l.t=function(e,t){if(1&t&&(e=l(e)),8&t)return e;if(4&t&&"object"===typeof e&&e&&e.__esModule)return e;var o=Object.create(null);if(l.r(o),Object.defineProperty(o,"default",{enumerable:!0,value:e}),2&t&&"string"!=typeof e)for(var r in e)l.d(o,r,function(t){return e[t]}.bind(null,r));return o},l.n=function(e){var t=e&&e.__esModule?function(){return e["default"]}:function(){return e};return l.d(t,"a",t),t},l.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},l.p="/";var c=window["webpackJsonp"]=window["webpackJsonp"]||[],u=c.push.bind(c);c.push=t,c=c.slice();for(var i=0;i<c.length;i++)t(c[i]);var s=u;n.push([0,"chunk-vendors"]),o()})({0:function(e,t,o){e.exports=o("56d7")},"1e14":function(e,t,o){},3158:function(e,t,o){},"56d7":function(e,t,o){"use strict";o.r(t);o("e260"),o("e6cf"),o("cca6"),o("a79d");var r=o("7a23"),a=o("cf05"),n=o.n(a),l=Object(r["createVNode"])("img",{alt:"Vue logo",src:n.a},null,-1);function c(e,t,o,a,n,c){var u=Object(r["resolveComponent"])("CookieInfo"),i=Object(r["resolveComponent"])("WeatherInfo"),s=Object(r["resolveComponent"])("HelloWorld");return Object(r["openBlock"])(),Object(r["createBlock"])(r["Fragment"],null,[Object(r["createVNode"])(u),Object(r["createVNode"])(i),l,Object(r["createVNode"])(s,{msg:"Welcome to Your Vue.js App"})],64)}var u=Object(r["withScopeId"])("data-v-b9167eee");Object(r["pushScopeId"])("data-v-b9167eee");var i={class:"hello"},s=Object(r["createStaticVNode"])('<p data-v-b9167eee> For a guide and recipes on how to configure / customize this project,<br data-v-b9167eee> check out the <a href="https://cli.vuejs.org" target="_blank" rel="noopener" data-v-b9167eee>vue-cli documentation</a>. </p><h3 data-v-b9167eee>Installed CLI Plugins</h3><ul data-v-b9167eee><li data-v-b9167eee><a href="https://github.com/vuejs/vue-cli/tree/dev/packages/%40vue/cli-plugin-babel" target="_blank" rel="noopener" data-v-b9167eee>babel</a></li><li data-v-b9167eee><a href="https://github.com/vuejs/vue-cli/tree/dev/packages/%40vue/cli-plugin-eslint" target="_blank" rel="noopener" data-v-b9167eee>eslint</a></li></ul><h3 data-v-b9167eee>Essential Links</h3><ul data-v-b9167eee><li data-v-b9167eee><a href="https://vuejs.org" target="_blank" rel="noopener" data-v-b9167eee>Core Docs</a></li><li data-v-b9167eee><a href="https://forum.vuejs.org" target="_blank" rel="noopener" data-v-b9167eee>Forum</a></li><li data-v-b9167eee><a href="https://chat.vuejs.org" target="_blank" rel="noopener" data-v-b9167eee>Community Chat</a></li><li data-v-b9167eee><a href="https://twitter.com/vuejs" target="_blank" rel="noopener" data-v-b9167eee>Twitter</a></li><li data-v-b9167eee><a href="https://news.vuejs.org" target="_blank" rel="noopener" data-v-b9167eee>News</a></li></ul><h3 data-v-b9167eee>Ecosystem</h3><ul data-v-b9167eee><li data-v-b9167eee><a href="https://router.vuejs.org" target="_blank" rel="noopener" data-v-b9167eee>vue-router</a></li><li data-v-b9167eee><a href="https://vuex.vuejs.org" target="_blank" rel="noopener" data-v-b9167eee>vuex</a></li><li data-v-b9167eee><a href="https://github.com/vuejs/vue-devtools#vue-devtools" target="_blank" rel="noopener" data-v-b9167eee>vue-devtools</a></li><li data-v-b9167eee><a href="https://vue-loader.vuejs.org" target="_blank" rel="noopener" data-v-b9167eee>vue-loader</a></li><li data-v-b9167eee><a href="https://github.com/vuejs/awesome-vue" target="_blank" rel="noopener" data-v-b9167eee>awesome-vue</a></li></ul>',7);Object(r["popScopeId"])();var b=u((function(e,t,o,a,n,l){return Object(r["openBlock"])(),Object(r["createBlock"])("div",i,[Object(r["createVNode"])("h1",null,Object(r["toDisplayString"])(o.msg),1),s])})),p={name:"HelloWorld",props:{msg:String}};o("8497");p.render=b,p.__scopeId="data-v-b9167eee";var d=p,v={key:0},h={key:1},f=Object(r["createVNode"])("hr",null,null,-1);function g(e,t,o,a,n,l){return Object(r["openBlock"])(),Object(r["createBlock"])("div",null,[!0!==e.cookies.get("visited")?(Object(r["openBlock"])(),Object(r["createBlock"])("strong",v,"Welcome first-timer!")):(Object(r["openBlock"])(),Object(r["createBlock"])("strong",h,"Welcome back!")),f,Object(r["createVNode"])("pre",null,Object(r["toDisplayString"])(JSON.stringify(e.cookies.getAll())),1),Object(r["createVNode"])("button",{onClick:t[1]||(t[1]=function(t){return e.cookies.set("visited","false")})},"Set cookie to false")])}var j=o("ad8b"),O=Object(r["defineComponent"])({setup:function(){var e=Object(j["a"])(["locale"]);return{cookies:e}},mounted:function(){var e=Object(j["a"])(["visited"]);e.set("visited","true")}});O.render=g;var k=O,m={key:0},y={key:1},w=Object(r["createVNode"])("br",null,null,-1),S=Object(r["createVNode"])("br",null,null,-1),N={key:2},_=Object(r["createVNode"])("br",null,null,-1),B=Object(r["createVNode"])("br",null,null,-1),V={key:3},C=Object(r["createVNode"])("br",null,null,-1),I=Object(r["createVNode"])("br",null,null,-1);function x(e,t,o,a,n,l){return Object(r["openBlock"])(),Object(r["createBlock"])("div",null,[null===e.errorStr?(Object(r["openBlock"])(),Object(r["createBlock"])("span",m,"Your location is "+Object(r["toDisplayString"])(JSON.stringify(e.location)),1)):(Object(r["openBlock"])(),Object(r["createBlock"])("span",y,Object(r["toDisplayString"])(e.errorStr),1)),w,S,null!==e.weather?(Object(r["openBlock"])(),Object(r["createBlock"])("span",N,"Should you mow? "+Object(r["toDisplayString"])(e.shouldMow?"YES!":"NO!"),1)):Object(r["createCommentVNode"])("",!0),_,B,null!==e.weather?(Object(r["openBlock"])(),Object(r["createBlock"])("span",V,"Should you sprinkle? "+Object(r["toDisplayString"])(e.shouldSprinkle?"YES!":"NO!"),1)):Object(r["createCommentVNode"])("",!0),C,I])}o("99af");var M=o("bc3a"),D=o.n(M),P=function(e){var t=sessionStorage.getItem(e);if(!t)return null;var o=JSON.parse(t),r=new Date;return r.getTime()>o.expiry?(sessionStorage.removeItem(e),null):o.value},W=function(e,t){var o=arguments.length>2&&void 0!==arguments[2]?arguments[2]:86400,r=new Date,a={value:t,expiry:r.getTime()+o};sessionStorage.setItem(e,JSON.stringify(a))},J=o("b85c"),T=function(e){var t,o,r=e.data.daily,a=!0,n=0,l=Object(J["a"])(r);try{for(l.s();!(o=l.n()).done;){var c=o.value;if(!(c.pop<25&&"undefined"===c.rain))break;n++}}catch(u){l.e(u)}finally{l.f()}return t=n<3,a=n>3,{shouldMow:t,shouldSprinkle:a}},A={name:"DemoComponent",data:function(){return{location:null,errorStr:null,weather:null,shouldMow:!1,shouldSprinkle:!1}},mounted:function(){var e=this;if(null===P("weather"))this.$getLocation().then((function(t){e.location=t,console.log(t);var o="https://api.openweathermap.org/data/2.5/onecall?lat=".concat(t.lat,"&lon=").concat(t.lng,"&appid=2b83c216854254bdc36a1293fe363579");return console.log(o),D.a.get(o)})).then((function(t){return e.weather=t})).catch((function(t){e.errorStr=t.message,console.log(t)}));else{this.weather=P("weather");var t=T(this.weather),o=t.shouldMow,r=t.shouldSprinkle;this.shouldMow=o,this.shouldSprinkle=r}},watch:{weather:function(e){var t=T(e),o=t.shouldMow,r=t.shouldSprinkle;this.shouldMow=o,this.shouldSprinkle=r,W("weather",e)}}};A.render=x;var E=A,Y={name:"App",components:{HelloWorld:d,CookieInfo:k,WeatherInfo:E}};o("7929");Y.render=c;var F=Y,H=o("032f"),L=o("fdec"),z=o.n(L),$=Object(r["createApp"])(F);$.use(H["a"]),$.use(z.a),$.mount("#app")},7929:function(e,t,o){"use strict";o("1e14")},8497:function(e,t,o){"use strict";o("3158")},cf05:function(e,t,o){e.exports=o.p+"img/logo.82b9c7a5.png"}});
//# sourceMappingURL=app.72a4b1f2.js.map