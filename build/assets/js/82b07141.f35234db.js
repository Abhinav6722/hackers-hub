"use strict";(self.webpackChunkwebsite=self.webpackChunkwebsite||[]).push([[8298],{4137:function(e,t,n){n.d(t,{Zo:function(){return c},kt:function(){return m}});var r=n(7294);function a(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function o(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function i(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?o(Object(n),!0).forEach((function(t){a(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):o(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function l(e,t){if(null==e)return{};var n,r,a=function(e,t){if(null==e)return{};var n,r,a={},o=Object.keys(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var u=r.createContext({}),s=function(e){var t=r.useContext(u),n=t;return e&&(n="function"==typeof e?e(t):i(i({},t),e)),n},c=function(e){var t=s(e.components);return r.createElement(u.Provider,{value:t},e.children)},d={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},p=r.forwardRef((function(e,t){var n=e.components,a=e.mdxType,o=e.originalType,u=e.parentName,c=l(e,["components","mdxType","originalType","parentName"]),p=s(n),m=a,v=p["".concat(u,".").concat(m)]||p[m]||d[m]||o;return n?r.createElement(v,i(i({ref:t},c),{},{components:n})):r.createElement(v,i({ref:t},c))}));function m(e,t){var n=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var o=n.length,i=new Array(o);i[0]=p;var l={};for(var u in t)hasOwnProperty.call(t,u)&&(l[u]=t[u]);l.originalType=e,l.mdxType="string"==typeof e?e:a,i[1]=l;for(var s=2;s<o;s++)i[s]=n[s];return r.createElement.apply(null,i)}return r.createElement.apply(null,n)}p.displayName="MDXCreateElement"},8448:function(e,t,n){var r=n(7294);t.Z=function(e){var t=e.children,n=e.hidden,a=e.className;return r.createElement("div",{role:"tabpanel",hidden:n,className:a},t)}},7225:function(e,t,n){n.d(t,{Z:function(){return p}});var r=n(7462),a=n(7294),o=n(1048),i=n(2713);var l=function(){var e=(0,a.useContext)(i.Z);if(null==e)throw new Error('"useUserPreferencesContext" is used outside of "Layout" component.');return e},u=n(3309),s=n(6010),c="tabItem_vU9c";function d(e){var t,n,r,o=e.lazy,i=e.block,d=e.defaultValue,p=e.values,m=e.groupId,v=e.className,f=a.Children.map(e.children,(function(e){if((0,a.isValidElement)(e)&&void 0!==e.props.value)return e;throw new Error("Docusaurus error: Bad <Tabs> child <"+("string"==typeof e.type?e.type:e.type.name)+'>: all children of the <Tabs> component should be <TabItem>, and every <TabItem> should have a unique "value" prop.')})),w=null!=p?p:f.map((function(e){var t=e.props;return{value:t.value,label:t.label}})),b=(0,u.lx)(w,(function(e,t){return e.value===t.value}));if(b.length>0)throw new Error('Docusaurus error: Duplicate values "'+b.map((function(e){return e.value})).join(", ")+'" found in <Tabs>. Every value needs to be unique.');var h=null===d?d:null!=(t=null!=d?d:null==(n=f.find((function(e){return e.props.default})))?void 0:n.props.value)?t:null==(r=f[0])?void 0:r.props.value;if(null!==h&&!w.some((function(e){return e.value===h})))throw new Error('Docusaurus error: The <Tabs> has a defaultValue "'+h+'" but none of its children has the corresponding value. Available values are: '+w.map((function(e){return e.value})).join(", ")+". If you intend to show no default tab, use defaultValue={null} instead.");var g=l(),y=g.tabGroupChoices,k=g.setTabGroupChoices,z=(0,a.useState)(h),S=z[0],N=z[1],O=[],x=(0,u.o5)().blockElementScrollPositionUntilNextRender;if(null!=m){var E=y[m];null!=E&&E!==S&&w.some((function(e){return e.value===E}))&&N(E)}var j=function(e){var t=e.currentTarget,n=O.indexOf(t),r=w[n].value;r!==S&&(x(t),N(r),null!=m&&k(m,r))},T=function(e){var t,n=null;switch(e.key){case"ArrowRight":var r=O.indexOf(e.currentTarget)+1;n=O[r]||O[0];break;case"ArrowLeft":var a=O.indexOf(e.currentTarget)-1;n=O[a]||O[O.length-1]}null==(t=n)||t.focus()};return a.createElement("div",{className:"tabs-container"},a.createElement("ul",{role:"tablist","aria-orientation":"horizontal",className:(0,s.Z)("tabs",{"tabs--block":i},v)},w.map((function(e){var t=e.value,n=e.label;return a.createElement("li",{role:"tab",tabIndex:S===t?0:-1,"aria-selected":S===t,className:(0,s.Z)("tabs__item",c,{"tabs__item--active":S===t}),key:t,ref:function(e){return O.push(e)},onKeyDown:T,onFocus:j,onClick:j},null!=n?n:t)}))),o?(0,a.cloneElement)(f.filter((function(e){return e.props.value===S}))[0],{className:"margin-vert--md"}):a.createElement("div",{className:"margin-vert--md"},f.map((function(e,t){return(0,a.cloneElement)(e,{key:t,hidden:e.props.value!==S})}))))}function p(e){var t=(0,o.Z)();return a.createElement(d,(0,r.Z)({key:String(t)},e))}},2713:function(e,t,n){var r=(0,n(7294).createContext)(void 0);t.Z=r},9184:function(e,t,n){n.r(t),n.d(t,{frontMatter:function(){return s},contentTitle:function(){return c},metadata:function(){return d},toc:function(){return p},default:function(){return v}});var r=n(7462),a=n(3366),o=(n(7294),n(4137)),i=n(7225),l=n(8448),u=["components"],s={id:"getWindowSize",title:"getWindowSize",custom_edit_url:"https://github.com/Abhi6722/hackers-hub/edit/main/packages/webdriverio/src/commands/browser/getWindowSize.ts"},c=void 0,d={unversionedId:"api/browser/getWindowSize",id:"api/browser/getWindowSize",isDocsHomePage:!1,title:"getWindowSize",description:"Returns browser window size.",source:"@site/docs/api/browser/_getWindowSize.md",sourceDirName:"api/browser",slug:"/api/browser/getWindowSize",permalink:"/docs/api/browser/getWindowSize",editUrl:"https://github.com/Abhi6722/hackers-hub/edit/main/packages/webdriverio/src/commands/browser/getWindowSize.ts",tags:[],version:"current",frontMatter:{id:"getWindowSize",title:"getWindowSize",custom_edit_url:"https://github.com/Abhi6722/hackers-hub/edit/main/packages/webdriverio/src/commands/browser/getWindowSize.ts"},sidebar:"api",previous:{title:"getPuppeteer",permalink:"/docs/api/browser/getPuppeteer"},next:{title:"keys",permalink:"/docs/api/browser/keys"}},p=[{value:"Usage",id:"usage",children:[],level:5},{value:"Example",id:"example",children:[],level:5}],m={toc:p};function v(e){var t=e.components,n=(0,a.Z)(e,u);return(0,o.kt)("wrapper",(0,r.Z)({},m,n,{components:t,mdxType:"MDXLayout"}),(0,o.kt)("p",null,"Returns browser window size."),(0,o.kt)("h5",{id:"usage"},"Usage"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-js"},"browser.getWindowSize()\n")),(0,o.kt)("h5",{id:"example"},"Example"),(0,o.kt)(i.Z,{defaultValue:"async",className:"runtime",values:[{label:"Asynchronous Mode",value:"async"},{label:"Synchronous Mode",value:"sync"}],mdxType:"Tabs"},(0,o.kt)(l.Z,{value:"async",mdxType:"TabItem"},(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-js",metastring:'title="getWindowSize.js"',title:'"getWindowSize.js"'},"it('should return browser window size', async () => {\n    const windowSize = await browser.getWindowSize();\n    console.log(windowSize);\n    // outputs `{ width: 1280, height: 767 }`\n});\n"))),(0,o.kt)(l.Z,{value:"sync",mdxType:"TabItem"},(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-js",metastring:'title="getWindowSize.js"',title:'"getWindowSize.js"'},"it('should return browser window size', () => {\n    const windowSize = browser.getWindowSize();\n    console.log(windowSize);\n    // outputs `{ width: 1280, height: 767 }`\n});\n")),(0,o.kt)("div",{className:"admonition admonition-caution alert alert--warning"},(0,o.kt)("div",{parentName:"div",className:"admonition-heading"},(0,o.kt)("h5",{parentName:"div"},(0,o.kt)("span",{parentName:"h5",className:"admonition-icon"},(0,o.kt)("svg",{parentName:"span",xmlns:"http://www.w3.org/2000/svg",width:"16",height:"16",viewBox:"0 0 16 16"},(0,o.kt)("path",{parentName:"svg",fillRule:"evenodd",d:"M8.893 1.5c-.183-.31-.52-.5-.887-.5s-.703.19-.886.5L.138 13.499a.98.98 0 0 0 0 1.001c.193.31.53.501.886.501h13.964c.367 0 .704-.19.877-.5a1.03 1.03 0 0 0 .01-1.002L8.893 1.5zm.133 11.497H6.987v-2.003h2.039v2.003zm0-3.004H6.987V5.987h2.039v4.006z"}))),"caution")),(0,o.kt)("div",{parentName:"div",className:"admonition-content"},(0,o.kt)("p",{parentName:"div"},"Synchronous Mode will depcrecated with Node.js v16. With an update to the\nunderlying Chromium version it became technically impossible to provide the\nsame synchronous behavior. We recommend to start transition to asynchronous\ncommand execution. For more information, see our ",(0,o.kt)("a",{href:"https://github.com/webdriverio/webdriverio/discussions/6702"},"RFC"),"."))))))}v.isMDXComponent=!0}}]);