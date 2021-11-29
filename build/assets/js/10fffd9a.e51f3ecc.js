"use strict";(self.webpackChunkwebsite=self.webpackChunkwebsite||[]).push([[4838],{4137:function(e,n,t){t.d(n,{Zo:function(){return p},kt:function(){return m}});var r=t(7294);function a(e,n,t){return n in e?Object.defineProperty(e,n,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[n]=t,e}function l(e,n){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);n&&(r=r.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),t.push.apply(t,r)}return t}function o(e){for(var n=1;n<arguments.length;n++){var t=null!=arguments[n]?arguments[n]:{};n%2?l(Object(t),!0).forEach((function(n){a(e,n,t[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):l(Object(t)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(t,n))}))}return e}function i(e,n){if(null==e)return{};var t,r,a=function(e,n){if(null==e)return{};var t,r,a={},l=Object.keys(e);for(r=0;r<l.length;r++)t=l[r],n.indexOf(t)>=0||(a[t]=e[t]);return a}(e,n);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(e);for(r=0;r<l.length;r++)t=l[r],n.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(a[t]=e[t])}return a}var s=r.createContext({}),u=function(e){var n=r.useContext(s),t=n;return e&&(t="function"==typeof e?e(n):o(o({},n),e)),t},p=function(e){var n=u(e.components);return r.createElement(s.Provider,{value:n},e.children)},c={inlineCode:"code",wrapper:function(e){var n=e.children;return r.createElement(r.Fragment,{},n)}},d=r.forwardRef((function(e,n){var t=e.components,a=e.mdxType,l=e.originalType,s=e.parentName,p=i(e,["components","mdxType","originalType","parentName"]),d=u(t),m=a,f=d["".concat(s,".").concat(m)]||d[m]||c[m]||l;return t?r.createElement(f,o(o({ref:n},p),{},{components:t})):r.createElement(f,o({ref:n},p))}));function m(e,n){var t=arguments,a=n&&n.mdxType;if("string"==typeof e||a){var l=t.length,o=new Array(l);o[0]=d;var i={};for(var s in n)hasOwnProperty.call(n,s)&&(i[s]=n[s]);i.originalType=e,i.mdxType="string"==typeof e?e:a,o[1]=i;for(var u=2;u<l;u++)o[u]=t[u];return r.createElement.apply(null,o)}return r.createElement.apply(null,t)}d.displayName="MDXCreateElement"},8448:function(e,n,t){var r=t(7294);n.Z=function(e){var n=e.children,t=e.hidden,a=e.className;return r.createElement("div",{role:"tabpanel",hidden:t,className:a},n)}},7225:function(e,n,t){t.d(n,{Z:function(){return d}});var r=t(7462),a=t(7294),l=t(1048),o=t(2713);var i=function(){var e=(0,a.useContext)(o.Z);if(null==e)throw new Error('"useUserPreferencesContext" is used outside of "Layout" component.');return e},s=t(3309),u=t(6010),p="tabItem_vU9c";function c(e){var n,t,r,l=e.lazy,o=e.block,c=e.defaultValue,d=e.values,m=e.groupId,f=e.className,b=a.Children.map(e.children,(function(e){if((0,a.isValidElement)(e)&&void 0!==e.props.value)return e;throw new Error("Docusaurus error: Bad <Tabs> child <"+("string"==typeof e.type?e.type:e.type.name)+'>: all children of the <Tabs> component should be <TabItem>, and every <TabItem> should have a unique "value" prop.')})),v=null!=d?d:b.map((function(e){var n=e.props;return{value:n.value,label:n.label}})),h=(0,s.lx)(v,(function(e,n){return e.value===n.value}));if(h.length>0)throw new Error('Docusaurus error: Duplicate values "'+h.map((function(e){return e.value})).join(", ")+'" found in <Tabs>. Every value needs to be unique.');var k=null===c?c:null!=(n=null!=c?c:null==(t=b.find((function(e){return e.props.default})))?void 0:t.props.value)?n:null==(r=b[0])?void 0:r.props.value;if(null!==k&&!v.some((function(e){return e.value===k})))throw new Error('Docusaurus error: The <Tabs> has a defaultValue "'+k+'" but none of its children has the corresponding value. Available values are: '+v.map((function(e){return e.value})).join(", ")+". If you intend to show no default tab, use defaultValue={null} instead.");var y=i(),g=y.tabGroupChoices,w=y.setTabGroupChoices,N=(0,a.useState)(k),E=N[0],C=N[1],O=[],x=(0,s.o5)().blockElementScrollPositionUntilNextRender;if(null!=m){var T=g[m];null!=T&&T!==E&&v.some((function(e){return e.value===T}))&&C(T)}var j=function(e){var n=e.currentTarget,t=O.indexOf(n),r=v[t].value;r!==E&&(x(n),C(r),null!=m&&w(m,r))},S=function(e){var n,t=null;switch(e.key){case"ArrowRight":var r=O.indexOf(e.currentTarget)+1;t=O[r]||O[0];break;case"ArrowLeft":var a=O.indexOf(e.currentTarget)-1;t=O[a]||O[O.length-1]}null==(n=t)||n.focus()};return a.createElement("div",{className:"tabs-container"},a.createElement("ul",{role:"tablist","aria-orientation":"horizontal",className:(0,u.Z)("tabs",{"tabs--block":o},f)},v.map((function(e){var n=e.value,t=e.label;return a.createElement("li",{role:"tab",tabIndex:E===n?0:-1,"aria-selected":E===n,className:(0,u.Z)("tabs__item",p,{"tabs__item--active":E===n}),key:n,ref:function(e){return O.push(e)},onKeyDown:S,onFocus:j,onClick:j},null!=t?t:n)}))),l?(0,a.cloneElement)(b.filter((function(e){return e.props.value===E}))[0],{className:"margin-vert--md"}):a.createElement("div",{className:"margin-vert--md"},b.map((function(e,n){return(0,a.cloneElement)(e,{key:n,hidden:e.props.value!==E})}))))}function d(e){var n=(0,l.Z)();return a.createElement(c,(0,r.Z)({key:String(n)},e))}},2713:function(e,n,t){var r=(0,t(7294).createContext)(void 0);n.Z=r},9333:function(e,n,t){t.r(n),t.d(n,{frontMatter:function(){return i},contentTitle:function(){return s},metadata:function(){return u},toc:function(){return p},default:function(){return d}});var r=t(7462),a=t(3366),l=(t(7294),t(4137)),o=(t(7225),t(8448),["components"]),i={id:"spec-reporter",title:"Spec Reporter",custom_edit_url:"https://github.com/webdriverio/webdriverio/edit/main/packages/wdio-spec-reporter/README.md"},s=void 0,u={unversionedId:"spec-reporter",id:"spec-reporter",isDocsHomePage:!1,title:"Spec Reporter",description:"A WebdriverIO plugin to report in spec style.",source:"@site/docs/_spec-reporter.md",sourceDirName:".",slug:"/spec-reporter",permalink:"/docs/spec-reporter",editUrl:"https://github.com/webdriverio/webdriverio/edit/main/packages/wdio-spec-reporter/README.md",tags:[],version:"current",frontMatter:{id:"spec-reporter",title:"Spec Reporter",custom_edit_url:"https://github.com/webdriverio/webdriverio/edit/main/packages/wdio-spec-reporter/README.md"},sidebar:"docs",previous:{title:"Junit Reporter",permalink:"/docs/junit-reporter"},next:{title:"Sumologic Reporter",permalink:"/docs/sumologic-reporter"}},p=[{value:"Installation",id:"installation",children:[],level:2},{value:"Configuration",id:"configuration",children:[],level:2},{value:"Spec Reporter Options",id:"spec-reporter-options",children:[{value:"symbols",id:"symbols",children:[{value:"Example",id:"example",children:[],level:4}],level:3},{value:"sauceLabsSharableLinks",id:"saucelabssharablelinks",children:[{value:"Example",id:"example-1",children:[],level:4}],level:3},{value:"onlyFailures",id:"onlyfailures",children:[{value:"Example",id:"example-2",children:[],level:4}],level:3},{value:"addConsoleLogs",id:"addconsolelogs",children:[],level:3}],level:2}],c={toc:p};function d(e){var n=e.components,i=(0,a.Z)(e,o);return(0,l.kt)("wrapper",(0,r.Z)({},c,i,{components:n,mdxType:"MDXLayout"}),(0,l.kt)("blockquote",null,(0,l.kt)("p",{parentName:"blockquote"},"A WebdriverIO plugin to report in spec style.")),(0,l.kt)("p",null,(0,l.kt)("img",{alt:"Spec Reporter",src:t(1968).Z,title:"Spec Reporter"})),(0,l.kt)("h2",{id:"installation"},"Installation"),(0,l.kt)("p",null,"The easiest way is to keep ",(0,l.kt)("inlineCode",{parentName:"p"},"@wdio/spec-reporter")," as a devDependency in your ",(0,l.kt)("inlineCode",{parentName:"p"},"package.json"),", via:"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-sh"},"npm install @wdio/spec-reporter --save-dev\n")),(0,l.kt)("p",null,"Instructions on how to install ",(0,l.kt)("inlineCode",{parentName:"p"},"WebdriverIO")," can be found ",(0,l.kt)("a",{parentName:"p",href:"https://webdriver.io/docs/gettingstarted"},"here"),"."),(0,l.kt)("h2",{id:"configuration"},"Configuration"),(0,l.kt)("p",null,"The following code shows the default wdio test runner configuration. Just add ",(0,l.kt)("inlineCode",{parentName:"p"},"'spec'")," as a reporter\nto the array."),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-js"},"// wdio.conf.js\nmodule.exports = {\n  // ...\n  reporters: ['dot', 'spec'],\n  // ...\n};\n")),(0,l.kt)("h2",{id:"spec-reporter-options"},"Spec Reporter Options"),(0,l.kt)("h3",{id:"symbols"},"symbols"),(0,l.kt)("p",null,"Provide custom symbols for ",(0,l.kt)("inlineCode",{parentName:"p"},"passed"),", ",(0,l.kt)("inlineCode",{parentName:"p"},"failed")," and or ",(0,l.kt)("inlineCode",{parentName:"p"},"skipped")," tests"),(0,l.kt)("p",null,"Type: ",(0,l.kt)("inlineCode",{parentName:"p"},"object"),"\nDefault: ",(0,l.kt)("inlineCode",{parentName:"p"},"{passed: '\u2713', skipped: '-', failed: '\u2716'}")),(0,l.kt)("h4",{id:"example"},"Example"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-js"},"[\n  \"spec\",\n  {\n    symbols: {\n      passed: '[PASS]',\n      failed: '[FAIL]',\n    },\n  },\n]\n")),(0,l.kt)("h3",{id:"saucelabssharablelinks"},"sauceLabsSharableLinks"),(0,l.kt)("p",null,"By default the test results in Sauce Labs can only be viewed by a team member from the same team, not by a team member\nfrom a different team. This options will enable ",(0,l.kt)("a",{parentName:"p",href:"https://wiki.saucelabs.com/display/DOCS/Building+Sharable+Links+to+Test+Results"},"sharable links"),"\nby default, which means that all tests that are executed in Sauce Labs can be viewed by everybody.\nJust add ",(0,l.kt)("inlineCode",{parentName:"p"},"sauceLabsSharableLinks: false"),", as shown below, in the reporter options to disable this feature."),(0,l.kt)("p",null,"Type: ",(0,l.kt)("inlineCode",{parentName:"p"},"boolean"),"\nDefault: ",(0,l.kt)("inlineCode",{parentName:"p"},"true")),(0,l.kt)("h4",{id:"example-1"},"Example"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-js"},'[\n  "spec",\n  {\n    sauceLabsSharableLinks: false,\n  },\n]\n')),(0,l.kt)("h3",{id:"onlyfailures"},"onlyFailures"),(0,l.kt)("p",null,"Print only failed specs results."),(0,l.kt)("p",null,"Type: ",(0,l.kt)("inlineCode",{parentName:"p"},"boolean"),"\nDefault: ",(0,l.kt)("inlineCode",{parentName:"p"},"false")),(0,l.kt)("h4",{id:"example-2"},"Example"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-js"},'[\n  "spec",\n  {\n    onlyFailures: true,\n  },\n]\n')),(0,l.kt)("h3",{id:"addconsolelogs"},"addConsoleLogs"),(0,l.kt)("p",null,"Set to true to show console logs from steps in final report"),(0,l.kt)("p",null,"Type: ",(0,l.kt)("inlineCode",{parentName:"p"},"boolean"),"\nDefault: ",(0,l.kt)("inlineCode",{parentName:"p"},"false")),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-js"},'[\n  "spec",\n  {\n    addConsoleLogs: true,\n  },\n]\n')))}d.isMDXComponent=!0},1968:function(e,n,t){n.Z=t.p+"assets/images/spec-3477bb7cd9114bf21a5902bc39542c9c.png"}}]);