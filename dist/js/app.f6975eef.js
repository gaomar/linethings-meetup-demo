(function(e){function t(t){for(var r,o,u=t[0],s=t[1],c=t[2],f=0,p=[];f<u.length;f++)o=u[f],a[o]&&p.push(a[o][0]),a[o]=0;for(r in s)Object.prototype.hasOwnProperty.call(s,r)&&(e[r]=s[r]);l&&l(t);while(p.length)p.shift()();return i.push.apply(i,c||[]),n()}function n(){for(var e,t=0;t<i.length;t++){for(var n=i[t],r=!0,u=1;u<n.length;u++){var s=n[u];0!==a[s]&&(r=!1)}r&&(i.splice(t--,1),e=o(o.s=n[0]))}return e}var r={},a={app:0},i=[];function o(t){if(r[t])return r[t].exports;var n=r[t]={i:t,l:!1,exports:{}};return e[t].call(n.exports,n,n.exports,o),n.l=!0,n.exports}o.m=e,o.c=r,o.d=function(e,t,n){o.o(e,t)||Object.defineProperty(e,t,{enumerable:!0,get:n})},o.r=function(e){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},o.t=function(e,t){if(1&t&&(e=o(e)),8&t)return e;if(4&t&&"object"===typeof e&&e&&e.__esModule)return e;var n=Object.create(null);if(o.r(n),Object.defineProperty(n,"default",{enumerable:!0,value:e}),2&t&&"string"!=typeof e)for(var r in e)o.d(n,r,function(t){return e[t]}.bind(null,r));return n},o.n=function(e){var t=e&&e.__esModule?function(){return e["default"]}:function(){return e};return o.d(t,"a",t),t},o.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},o.p="/";var u=window["webpackJsonp"]=window["webpackJsonp"]||[],s=u.push.bind(u);u.push=t,u=u.slice();for(var c=0;c<u.length;c++)t(u[c]);var l=s;i.push([0,"chunk-vendors"]),n()})({0:function(e,t,n){e.exports=n("56d7")},"56d7":function(e,t,n){"use strict";n.r(t);n("cadf"),n("551c"),n("f751"),n("097d");var r=n("2b0e"),a=n("bb71");n("da64");r["a"].use(a["a"],{iconfont:"md"});var i=function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("v-app",[n("v-toolbar",{attrs:{app:""}},[n("v-toolbar-title",{staticClass:"headline text-uppercase"},[n("span",[e._v("LINE Things Meetup Demo")])])],1),n("v-content",[n("HelloWorld")],1)],1)},o=[],u=function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("v-app",{attrs:{id:"inspire"}},[n("v-container",[n("v-layout",{attrs:{"text-xs-center":"",wrap:""}},[n("v-flex",{attrs:{"mb-4":""}},[n("h1",{staticClass:"display-2 font-weight-bold mb-3"},[e._v("\n          認証画面\n        ")])]),n("v-flex",{attrs:{xs12:""}},[n("v-form",[n("v-container",[n("v-layout",{attrs:{row:"",wrap:""}},[n("v-text-field",{attrs:{outline:"",label:"認証コードを入力してください"},on:{keyup:function(t){return!t.type.indexOf("key")&&e._k(t.keyCode,"enter",13,t.key,"Enter")?null:e.say(t)},keypress:e.setCanSubmit},model:{value:e.code,callback:function(t){e.code=t},expression:"code"}})],1)],1)],1)],1),n("v-flex",{attrs:{xs12:""}},[e._v("\n        "+e._s(this.bleStatus)+"\n      ")])],1)],1)],1)},s=[],c=(n("96cf"),n("3b8d")),l=(n("34ef"),{data:function(){return{USER_SERVICE_UUID:"b38c905b-9968-45b8-b392-04e62b8a7842",LED_CHARACTERISTIC_UUID:"E9062E71-9E62-4BC6-B0D3-35CDCD9B027B",bleConnect:!1,canSubmit:!1,bleStatus:"",state:!1,code:"",user:{image:"",userId:""}}},methods:{setCanSubmit:function(){this.canSubmit=!0,this.state=!this.state},say:function(){this.canSubmit&&(this.canSubmit=!1,this.sendData())},sendData:function(){var e=this;window.ledCharacteristic.writeValue(state?new Uint8Array([1]):new Uint8Array([0])).catch(function(t){e.bleStatus=t.message})},liffCheckAvailablityAndDo:function(){var e=Object(c["a"])(regeneratorRuntime.mark(function e(t){var n,r=this;return regeneratorRuntime.wrap(function(e){while(1)switch(e.prev=e.next){case 0:return e.prev=0,e.next=3,liff.bluetooth.getAvailability();case 3:n=e.sent,n?t():(this.bleStatus="Bluetoothをオンにしてください。",setTimeout(function(){return r.liffCheckAvailablityAndDo(t)},1e4)),e.next=10;break;case 7:e.prev=7,e.t0=e["catch"](0),alert("Bluetoothをオンにしてください。");case 10:case"end":return e.stop()}},e,this,[[0,7]])}));function t(t){return e.apply(this,arguments)}return t}(),liffRequestDevice:function(){var e=Object(c["a"])(regeneratorRuntime.mark(function e(){var t,n;return regeneratorRuntime.wrap(function(e){while(1)switch(e.prev=e.next){case 0:return e.next=2,liff.bluetooth.requestDevice();case 2:return t=e.sent,e.next=5,t.gatt.connect();case 5:return e.next=7,t.gatt.getPrimaryService(this.USER_SERVICE_UUID);case 7:return n=e.sent,e.next=10,n.getCharacteristic(this.LED_CHARACTERISTIC_UUID);case 10:window.ledCharacteristic=e.sent,this.bleConnect=!0,this.bleStatus="デバイスに接続しました。";case 13:case"end":return e.stop()}},e,this)}));function t(){return e.apply(this,arguments)}return t}(),initializeLiff:function(){var e=Object(c["a"])(regeneratorRuntime.mark(function e(){var t,n=this;return regeneratorRuntime.wrap(function(e){while(1)switch(e.prev=e.next){case 0:return e.next=2,liff.initPlugins(["bluetooth"]);case 2:return this.liffCheckAvailablityAndDo(function(){return n.liffRequestDevice()}),e.next=5,liff.getProfile();case 5:t=e.sent,this.user.image=t.pictureUrl,this.user.userId=t.userId;case 8:case"end":return e.stop()}},e,this)}));function t(){return e.apply(this,arguments)}return t}()},mounted:function(){var e=this;liff.init(function(){return e.initializeLiff()})}}),f=l,p=n("2877"),h=n("6544"),d=n.n(h),b=n("7496"),v=n("a523"),m=n("0e8f"),y=n("4bd4"),x=n("a722"),w=n("2677"),g=Object(p["a"])(f,u,s,!1,null,null,null),C=g.exports;d()(g,{VApp:b["a"],VContainer:v["a"],VFlex:m["a"],VForm:y["a"],VLayout:x["a"],VTextField:w["a"]});var _={name:"App",components:{HelloWorld:C},data:function(){return{}}},S=_,D=n("549c"),E=n("71d9"),k=n("2a7f"),A=Object(p["a"])(S,i,o,!1,null,null,null),O=A.exports;d()(A,{VApp:b["a"],VContent:D["a"],VToolbar:E["a"],VToolbarTitle:k["a"]});var R=n("8c4f"),j=function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("HelloWorld")},I=[],T={components:{HelloWorld:C}},U=T,V=Object(p["a"])(U,j,I,!1,null,null,null),P=V.exports;r["a"].use(R["a"]);var B=new R["a"]({mode:"history",base:"/",routes:[{path:"/",name:"home",component:P}]}),H=n("2f62");r["a"].use(H["a"]);var L=new H["a"].Store({state:{},mutations:{},actions:{}});r["a"].config.productionTip=!1,new r["a"]({router:B,store:L,render:function(e){return e(O)}}).$mount("#app")}});
//# sourceMappingURL=app.f6975eef.js.map