"use strict";(self.webpackChunkwebsite=self.webpackChunkwebsite||[]).push([[6042],{4137:function(e,t,n){n.d(t,{Zo:function(){return u},kt:function(){return d}});var a=n(7294);function r(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function o(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function i(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?o(Object(n),!0).forEach((function(t){r(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):o(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function l(e,t){if(null==e)return{};var n,a,r=function(e,t){if(null==e)return{};var n,a,r={},o=Object.keys(e);for(a=0;a<o.length;a++)n=o[a],t.indexOf(n)>=0||(r[n]=e[n]);return r}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(a=0;a<o.length;a++)n=o[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(r[n]=e[n])}return r}var c=a.createContext({}),s=function(e){var t=a.useContext(c),n=t;return e&&(n="function"==typeof e?e(t):i(i({},t),e)),n},u=function(e){var t=s(e.components);return a.createElement(c.Provider,{value:t},e.children)},p={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},m=a.forwardRef((function(e,t){var n=e.components,r=e.mdxType,o=e.originalType,c=e.parentName,u=l(e,["components","mdxType","originalType","parentName"]),m=s(n),d=r,h=m["".concat(c,".").concat(d)]||m[d]||p[d]||o;return n?a.createElement(h,i(i({ref:t},u),{},{components:n})):a.createElement(h,i({ref:t},u))}));function d(e,t){var n=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var o=n.length,i=new Array(o);i[0]=m;var l={};for(var c in t)hasOwnProperty.call(t,c)&&(l[c]=t[c]);l.originalType=e,l.mdxType="string"==typeof e?e:r,i[1]=l;for(var s=2;s<o;s++)i[s]=n[s];return a.createElement.apply(null,i)}return a.createElement.apply(null,n)}m.displayName="MDXCreateElement"},8448:function(e,t,n){var a=n(7294);t.Z=function(e){var t=e.children,n=e.hidden,r=e.className;return a.createElement("div",{role:"tabpanel",hidden:n,className:r},t)}},7225:function(e,t,n){n.d(t,{Z:function(){return m}});var a=n(7462),r=n(7294),o=n(1048),i=n(2713);var l=function(){var e=(0,r.useContext)(i.Z);if(null==e)throw new Error('"useUserPreferencesContext" is used outside of "Layout" component.');return e},c=n(3309),s=n(6010),u="tabItem_vU9c";function p(e){var t,n,a,o=e.lazy,i=e.block,p=e.defaultValue,m=e.values,d=e.groupId,h=e.className,v=r.Children.map(e.children,(function(e){if((0,r.isValidElement)(e)&&void 0!==e.props.value)return e;throw new Error("Docusaurus error: Bad <Tabs> child <"+("string"==typeof e.type?e.type:e.type.name)+'>: all children of the <Tabs> component should be <TabItem>, and every <TabItem> should have a unique "value" prop.')})),b=null!=m?m:v.map((function(e){var t=e.props;return{value:t.value,label:t.label}})),f=(0,c.lx)(b,(function(e,t){return e.value===t.value}));if(f.length>0)throw new Error('Docusaurus error: Duplicate values "'+f.map((function(e){return e.value})).join(", ")+'" found in <Tabs>. Every value needs to be unique.');var y=null===p?p:null!=(t=null!=p?p:null==(n=v.find((function(e){return e.props.default})))?void 0:n.props.value)?t:null==(a=v[0])?void 0:a.props.value;if(null!==y&&!b.some((function(e){return e.value===y})))throw new Error('Docusaurus error: The <Tabs> has a defaultValue "'+y+'" but none of its children has the corresponding value. Available values are: '+b.map((function(e){return e.value})).join(", ")+". If you intend to show no default tab, use defaultValue={null} instead.");var w=l(),g=w.tabGroupChoices,k=w.setTabGroupChoices,x=(0,r.useState)(y),N=x[0],A=x[1],T=[],O=(0,c.o5)().blockElementScrollPositionUntilNextRender;if(null!=d){var E=g[d];null!=E&&E!==N&&b.some((function(e){return e.value===E}))&&A(E)}var j=function(e){var t=e.currentTarget,n=T.indexOf(t),a=b[n].value;a!==N&&(O(t),A(a),null!=d&&k(d,a))},C=function(e){var t,n=null;switch(e.key){case"ArrowRight":var a=T.indexOf(e.currentTarget)+1;n=T[a]||T[0];break;case"ArrowLeft":var r=T.indexOf(e.currentTarget)-1;n=T[r]||T[T.length-1]}null==(t=n)||t.focus()};return r.createElement("div",{className:"tabs-container"},r.createElement("ul",{role:"tablist","aria-orientation":"horizontal",className:(0,s.Z)("tabs",{"tabs--block":i},h)},b.map((function(e){var t=e.value,n=e.label;return r.createElement("li",{role:"tab",tabIndex:N===t?0:-1,"aria-selected":N===t,className:(0,s.Z)("tabs__item",u,{"tabs__item--active":N===t}),key:t,ref:function(e){return T.push(e)},onKeyDown:C,onFocus:j,onClick:j},null!=n?n:t)}))),o?(0,r.cloneElement)(v.filter((function(e){return e.props.value===N}))[0],{className:"margin-vert--md"}):r.createElement("div",{className:"margin-vert--md"},v.map((function(e,t){return(0,r.cloneElement)(e,{key:t,hidden:e.props.value!==N})}))))}function m(e){var t=(0,o.Z)();return r.createElement(p,(0,a.Z)({key:String(t)},e))}},2713:function(e,t,n){var a=(0,n(7294).createContext)(void 0);t.Z=a},8172:function(e,t,n){n.r(t),n.d(t,{frontMatter:function(){return s},contentTitle:function(){return u},metadata:function(){return p},toc:function(){return m},default:function(){return h}});var a=n(7462),r=n(3366),o=(n(7294),n(4137)),i=n(7225),l=n(8448),c=["components"],s={id:"touchAction",title:"touchAction",custom_edit_url:"https://github.com/Abhi6722/hackers-hub/edit/main/packages/webdriverio/src/commands/browser/touchAction.ts"},u=void 0,p={unversionedId:"api/browser/touchAction",id:"api/browser/touchAction",isDocsHomePage:!1,title:"touchAction",description:"The Touch Action API provides the basis of all gestures that can be automated in Appium.",source:"@site/docs/api/browser/_touchAction.md",sourceDirName:"api/browser",slug:"/api/browser/touchAction",permalink:"/docs/api/browser/touchAction",editUrl:"https://github.com/Abhi6722/hackers-hub/edit/main/packages/webdriverio/src/commands/browser/touchAction.ts",tags:[],version:"current",frontMatter:{id:"touchAction",title:"touchAction",custom_edit_url:"https://github.com/Abhi6722/hackers-hub/edit/main/packages/webdriverio/src/commands/browser/touchAction.ts"},sidebar:"api",previous:{title:"throttle",permalink:"/docs/api/browser/throttle"},next:{title:"uploadFile",permalink:"/docs/api/browser/uploadFile"}},m=[{value:"Usage",id:"usage",children:[],level:5},{value:"Parameters",id:"parameters",children:[],level:5},{value:"Example",id:"example",children:[],level:5}],d={toc:m};function h(e){var t=e.components,n=(0,r.Z)(e,c);return(0,o.kt)("wrapper",(0,a.Z)({},d,n,{components:t,mdxType:"MDXLayout"}),(0,o.kt)("p",null,"The Touch Action API provides the basis of all gestures that can be automated in Appium.\nIt is currently only available to native apps and can not be used to interact with webapps.\nAt its core is the ability to chain together ",(0,o.kt)("em",{parentName:"p"},"ad hoc")," individual actions, which will then be\napplied to an element in the application on the device. The basic actions that can be used are:"),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},"press (pass element or (",(0,o.kt)("inlineCode",{parentName:"li"},"x"),", ",(0,o.kt)("inlineCode",{parentName:"li"},"y"),") or both)"),(0,o.kt)("li",{parentName:"ul"},"longPress (pass element or (",(0,o.kt)("inlineCode",{parentName:"li"},"x"),", ",(0,o.kt)("inlineCode",{parentName:"li"},"y"),") or both)"),(0,o.kt)("li",{parentName:"ul"},"tap (pass element or (",(0,o.kt)("inlineCode",{parentName:"li"},"x"),", ",(0,o.kt)("inlineCode",{parentName:"li"},"y"),") or both)"),(0,o.kt)("li",{parentName:"ul"},"moveTo (pass absolute ",(0,o.kt)("inlineCode",{parentName:"li"},"x"),", ",(0,o.kt)("inlineCode",{parentName:"li"},"y")," coordinates)"),(0,o.kt)("li",{parentName:"ul"},"wait (pass ",(0,o.kt)("inlineCode",{parentName:"li"},"ms")," (as milliseconds))"),(0,o.kt)("li",{parentName:"ul"},"release (no arguments)")),(0,o.kt)("h5",{id:"usage"},"Usage"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-js"},"browser.touchAction(action)\n")),(0,o.kt)("h5",{id:"parameters"},"Parameters"),(0,o.kt)("table",null,(0,o.kt)("thead",{parentName:"table"},(0,o.kt)("tr",{parentName:"thead"},(0,o.kt)("th",{parentName:"tr",align:null},"Name"),(0,o.kt)("th",{parentName:"tr",align:null},"Type"),(0,o.kt)("th",{parentName:"tr",align:null},"Details"))),(0,o.kt)("tbody",{parentName:"table"},(0,o.kt)("tr",{parentName:"tbody"},(0,o.kt)("td",{parentName:"tr",align:null},(0,o.kt)("code",null,(0,o.kt)("var",null,"action"))),(0,o.kt)("td",{parentName:"tr",align:null},(0,o.kt)("code",null,"TouchActions")),(0,o.kt)("td",{parentName:"tr",align:null},"action to execute")))),(0,o.kt)("h5",{id:"example"},"Example"),(0,o.kt)(i.Z,{defaultValue:"async",className:"runtime",values:[{label:"Asynchronous Mode",value:"async"},{label:"Synchronous Mode",value:"sync"}],mdxType:"Tabs"},(0,o.kt)(l.Z,{value:"async",mdxType:"TabItem"},(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-js",metastring:'title="touchAction.js"',title:'"touchAction.js"'},"it('should do a touch gesture', async () => {\n    const screen = await $('//UITextbox');\n\n    // simple touch action on element\n    await browser.touchAction({\n        action: 'tap',\n        element: screen\n    });\n\n    // simple touch action x y variables\n    // tap location is 30px right and 20px down relative from the viewport\n    await browser.touchAction({\n        action: 'tap',\n        x: 30,\n        y:20\n    })\n\n    // simple touch action x y variables\n    // tap location is 30px right and 20px down relative from the center of the element\n    await browser.touchAction({\n        action: 'tap',\n        x: 30,\n        y:20,\n        element: screen\n    })\n\n    // multi action on an element\n    // drag&drop from position 200x200 down 100px on the screen\n    await browser.touchAction([\n        { action: 'press', x: 200, y: 200 },\n        { action: 'moveTo', x: 200, y: 300 },\n        'release'\n    ])\n});\n"))),(0,o.kt)(l.Z,{value:"sync",mdxType:"TabItem"},(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-js",metastring:'title="touchAction.js"',title:'"touchAction.js"'},"it('should do a touch gesture', () => {\n    const screen = $('//UITextbox');\n\n    // simple touch action on element\n    browser.touchAction({\n        action: 'tap',\n        element: screen\n    });\n\n    // simple touch action x y variables\n    // tap location is 30px right and 20px down relative from the viewport\n    browser.touchAction({\n        action: 'tap',\n        x: 30,\n        y:20\n    })\n\n    // simple touch action x y variables\n    // tap location is 30px right and 20px down relative from the center of the element\n    browser.touchAction({\n        action: 'tap',\n        x: 30,\n        y:20,\n        element: screen\n    })\n\n    // multi action on an element\n    // drag&drop from position 200x200 down 100px on the screen\n    browser.touchAction([\n        { action: 'press', x: 200, y: 200 },\n        { action: 'moveTo', x: 200, y: 300 },\n        'release'\n    ])\n});\n")),(0,o.kt)("div",{className:"admonition admonition-caution alert alert--warning"},(0,o.kt)("div",{parentName:"div",className:"admonition-heading"},(0,o.kt)("h5",{parentName:"div"},(0,o.kt)("span",{parentName:"h5",className:"admonition-icon"},(0,o.kt)("svg",{parentName:"span",xmlns:"http://www.w3.org/2000/svg",width:"16",height:"16",viewBox:"0 0 16 16"},(0,o.kt)("path",{parentName:"svg",fillRule:"evenodd",d:"M8.893 1.5c-.183-.31-.52-.5-.887-.5s-.703.19-.886.5L.138 13.499a.98.98 0 0 0 0 1.001c.193.31.53.501.886.501h13.964c.367 0 .704-.19.877-.5a1.03 1.03 0 0 0 .01-1.002L8.893 1.5zm.133 11.497H6.987v-2.003h2.039v2.003zm0-3.004H6.987V5.987h2.039v4.006z"}))),"caution")),(0,o.kt)("div",{parentName:"div",className:"admonition-content"},(0,o.kt)("p",{parentName:"div"},"Synchronous Mode will depcrecated with Node.js v16. With an update to the\nunderlying Chromium version it became technically impossible to provide the\nsame synchronous behavior. We recommend to start transition to asynchronous\ncommand execution. For more information, see our ",(0,o.kt)("a",{href:"https://github.com/webdriverio/webdriverio/discussions/6702"},"RFC"),"."))))))}h.isMDXComponent=!0}}]);