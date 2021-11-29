"use strict";(self.webpackChunkwebsite=self.webpackChunkwebsite||[]).push([[3077],{4137:function(e,t,n){n.d(t,{Zo:function(){return c},kt:function(){return m}});var r=n(7294);function a(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function o(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function i(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?o(Object(n),!0).forEach((function(t){a(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):o(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function l(e,t){if(null==e)return{};var n,r,a=function(e,t){if(null==e)return{};var n,r,a={},o=Object.keys(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var s=r.createContext({}),u=function(e){var t=r.useContext(s),n=t;return e&&(n="function"==typeof e?e(t):i(i({},t),e)),n},c=function(e){var t=u(e.components);return r.createElement(s.Provider,{value:t},e.children)},p={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},d=r.forwardRef((function(e,t){var n=e.components,a=e.mdxType,o=e.originalType,s=e.parentName,c=l(e,["components","mdxType","originalType","parentName"]),d=u(n),m=a,b=d["".concat(s,".").concat(m)]||d[m]||p[m]||o;return n?r.createElement(b,i(i({ref:t},c),{},{components:n})):r.createElement(b,i({ref:t},c))}));function m(e,t){var n=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var o=n.length,i=new Array(o);i[0]=d;var l={};for(var s in t)hasOwnProperty.call(t,s)&&(l[s]=t[s]);l.originalType=e,l.mdxType="string"==typeof e?e:a,i[1]=l;for(var u=2;u<o;u++)i[u]=n[u];return r.createElement.apply(null,i)}return r.createElement.apply(null,n)}d.displayName="MDXCreateElement"},8448:function(e,t,n){var r=n(7294);t.Z=function(e){var t=e.children,n=e.hidden,a=e.className;return r.createElement("div",{role:"tabpanel",hidden:n,className:a},t)}},7225:function(e,t,n){n.d(t,{Z:function(){return d}});var r=n(7462),a=n(7294),o=n(1048),i=n(2713);var l=function(){var e=(0,a.useContext)(i.Z);if(null==e)throw new Error('"useUserPreferencesContext" is used outside of "Layout" component.');return e},s=n(3309),u=n(6010),c="tabItem_vU9c";function p(e){var t,n,r,o=e.lazy,i=e.block,p=e.defaultValue,d=e.values,m=e.groupId,b=e.className,v=a.Children.map(e.children,(function(e){if((0,a.isValidElement)(e)&&void 0!==e.props.value)return e;throw new Error("Docusaurus error: Bad <Tabs> child <"+("string"==typeof e.type?e.type:e.type.name)+'>: all children of the <Tabs> component should be <TabItem>, and every <TabItem> should have a unique "value" prop.')})),f=null!=d?d:v.map((function(e){var t=e.props;return{value:t.value,label:t.label}})),h=(0,s.lx)(f,(function(e,t){return e.value===t.value}));if(h.length>0)throw new Error('Docusaurus error: Duplicate values "'+h.map((function(e){return e.value})).join(", ")+'" found in <Tabs>. Every value needs to be unique.');var k=null===p?p:null!=(t=null!=p?p:null==(n=v.find((function(e){return e.props.default})))?void 0:n.props.value)?t:null==(r=v[0])?void 0:r.props.value;if(null!==k&&!f.some((function(e){return e.value===k})))throw new Error('Docusaurus error: The <Tabs> has a defaultValue "'+k+'" but none of its children has the corresponding value. Available values are: '+f.map((function(e){return e.value})).join(", ")+". If you intend to show no default tab, use defaultValue={null} instead.");var g=l(),w=g.tabGroupChoices,y=g.setTabGroupChoices,N=(0,a.useState)(k),T=N[0],O=N[1],E=[],C=(0,s.o5)().blockElementScrollPositionUntilNextRender;if(null!=m){var j=w[m];null!=j&&j!==T&&f.some((function(e){return e.value===j}))&&O(j)}var S=function(e){var t=e.currentTarget,n=E.indexOf(t),r=f[n].value;r!==T&&(C(t),O(r),null!=m&&y(m,r))},D=function(e){var t,n=null;switch(e.key){case"ArrowRight":var r=E.indexOf(e.currentTarget)+1;n=E[r]||E[0];break;case"ArrowLeft":var a=E.indexOf(e.currentTarget)-1;n=E[a]||E[E.length-1]}null==(t=n)||t.focus()};return a.createElement("div",{className:"tabs-container"},a.createElement("ul",{role:"tablist","aria-orientation":"horizontal",className:(0,u.Z)("tabs",{"tabs--block":i},b)},f.map((function(e){var t=e.value,n=e.label;return a.createElement("li",{role:"tab",tabIndex:T===t?0:-1,"aria-selected":T===t,className:(0,u.Z)("tabs__item",c,{"tabs__item--active":T===t}),key:t,ref:function(e){return E.push(e)},onKeyDown:D,onFocus:S,onClick:S},null!=n?n:t)}))),o?(0,a.cloneElement)(v.filter((function(e){return e.props.value===T}))[0],{className:"margin-vert--md"}):a.createElement("div",{className:"margin-vert--md"},v.map((function(e,t){return(0,a.cloneElement)(e,{key:t,hidden:e.props.value!==T})}))))}function d(e){var t=(0,o.Z)();return a.createElement(p,(0,r.Z)({key:String(t)},e))}},2713:function(e,t,n){var r=(0,n(7294).createContext)(void 0);t.Z=r},120:function(e,t,n){n.r(t),n.d(t,{frontMatter:function(){return l},contentTitle:function(){return s},metadata:function(){return u},toc:function(){return c},default:function(){return d}});var r=n(7462),a=n(3366),o=(n(7294),n(4137)),i=(n(7225),n(8448),["components"]),l={id:"wdio-lambdatest-service",title:"LambdaTest Service",custom_edit_url:"https://github.com/LambdaTest/wdio-lambdatest-service/edit/master//README.md"},s=void 0,u={unversionedId:"wdio-lambdatest-service",id:"wdio-lambdatest-service",isDocsHomePage:!1,title:"LambdaTest Service",description:"wdio-lambdatest-service is a 3rd party package, for more information please see GitHub | npm",source:"@site/docs/_wdio-lambdatest-service.md",sourceDirName:".",slug:"/wdio-lambdatest-service",permalink:"/docs/wdio-lambdatest-service",editUrl:"https://github.com/LambdaTest/wdio-lambdatest-service/edit/master//README.md",tags:[],version:"current",frontMatter:{id:"wdio-lambdatest-service",title:"LambdaTest Service",custom_edit_url:"https://github.com/LambdaTest/wdio-lambdatest-service/edit/master//README.md"},sidebar:"docs",previous:{title:"Slack Service",permalink:"/docs/wdio-slack-service"},next:{title:"Image Comparison (Visual Regression Testing) Service",permalink:"/docs/wdio-image-comparison-service"}},c=[{value:"Installation",id:"installation",children:[],level:2},{value:"Configuration",id:"configuration",children:[],level:2},{value:"Options",id:"options",children:[{value:"tunnel",id:"tunnel",children:[],level:3},{value:"lambdatestOpts",id:"lambdatestopts",children:[],level:3}],level:2},{value:"Steps to compile and publish",id:"steps-to-compile-and-publish",children:[],level:2}],p={toc:c};function d(e){var t=e.components,n=(0,a.Z)(e,i);return(0,o.kt)("wrapper",(0,r.Z)({},p,n,{components:t,mdxType:"MDXLayout"}),(0,o.kt)("blockquote",null,(0,o.kt)("p",{parentName:"blockquote"},"wdio-lambdatest-service is a 3rd party package, for more information please see ",(0,o.kt)("a",{parentName:"p",href:"https://github.com/LambdaTest/wdio-lambdatest-service"},"GitHub")," | ",(0,o.kt)("a",{parentName:"p",href:"https://www.npmjs.com/package/wdio-lambdatest-service"},"npm"))),(0,o.kt)("blockquote",null,(0,o.kt)("p",{parentName:"blockquote"},"A WebdriverIO service that manages tunnel and job metadata for LambdaTest users.")),(0,o.kt)("h2",{id:"installation"},"Installation"),(0,o.kt)("p",null,"The easiest way is to keep ",(0,o.kt)("inlineCode",{parentName:"p"},"wdio-lambdatest-service")," as a devDependency in your ",(0,o.kt)("inlineCode",{parentName:"p"},"package.json"),"."),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-json"},'{\n    "devDependencies": {\n        "wdio-lambdatest-service": "^1.0.1"\n    }\n}\n')),(0,o.kt)("p",null,"You can simple do it by:"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-bash"},"npm i wdio-lambdatest-service --save-dev\n")),(0,o.kt)("p",null,"Instructions on how to install ",(0,o.kt)("inlineCode",{parentName:"p"},"WebdriverIO")," can be found ",(0,o.kt)("a",{parentName:"p",href:"https://webdriver.io/docs/gettingstarted.html"},"here.")),(0,o.kt)("h2",{id:"configuration"},"Configuration"),(0,o.kt)("p",null,"WebdriverIO has LambdaTest support out of the box. You should simply set ",(0,o.kt)("inlineCode",{parentName:"p"},"user")," and ",(0,o.kt)("inlineCode",{parentName:"p"},"key")," in your ",(0,o.kt)("inlineCode",{parentName:"p"},"wdio.conf.js")," file. This service plugin provides supports for ",(0,o.kt)("a",{parentName:"p",href:"https://www.lambdatest.com/support/docs/troubleshooting-lambda-tunnel/"},"LambdaTest Tunnel"),". Set ",(0,o.kt)("inlineCode",{parentName:"p"},"tunnel: true")," also to activate this feature."),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-js"},"// wdio.conf.js\nexport.config = {\n    // ...\n    user: process.env.LT_USERNAME,\n    key: process.env.LT_ACCESS_KEY,\n    logFile : './logDir/api.log',\n    services: [\n        ['lambdatest', {\n            tunnel: true\n        }]\n    ],\n    // ...\n};\n")),(0,o.kt)("h2",{id:"options"},"Options"),(0,o.kt)("p",null,"In order to authorize to the LambdaTest service your config needs to contain a ",(0,o.kt)("a",{parentName:"p",href:"https://webdriver.io/docs/options.html#user"},(0,o.kt)("inlineCode",{parentName:"a"},"user"))," and ",(0,o.kt)("a",{parentName:"p",href:"https://webdriver.io/docs/options.html#key"},(0,o.kt)("inlineCode",{parentName:"a"},"key"))," option."),(0,o.kt)("h3",{id:"tunnel"},"tunnel"),(0,o.kt)("p",null,"Set this to true to enable routing connections from LambdaTest cloud through your computer. You will also need to set ",(0,o.kt)("inlineCode",{parentName:"p"},"tunnel")," to true in browser capabilities."),(0,o.kt)("p",null,"Type: ",(0,o.kt)("inlineCode",{parentName:"p"},"Boolean"),(0,o.kt)("br",null),"\nDefault: ",(0,o.kt)("inlineCode",{parentName:"p"},"false")),(0,o.kt)("h3",{id:"lambdatestopts"},"lambdatestOpts"),(0,o.kt)("p",null,"Specified optional will be passed down to LambdaTest Tunnel. See ",(0,o.kt)("a",{parentName:"p",href:"https://www.lambdatest.com/support/docs/lambda-tunnel-modifiers/"},"this list")," for details."),(0,o.kt)("p",null,"Type: ",(0,o.kt)("inlineCode",{parentName:"p"},"Object"),(0,o.kt)("br",null),"\nDefault: ",(0,o.kt)("inlineCode",{parentName:"p"},"{}")),(0,o.kt)("h2",{id:"steps-to-compile-and-publish"},"Steps to compile and publish"),(0,o.kt)("ol",null,(0,o.kt)("li",{parentName:"ol"},"git clone this repository."),(0,o.kt)("li",{parentName:"ol"},'run "npm install"'),(0,o.kt)("li",{parentName:"ol"},'run "npm run compile"'),(0,o.kt)("li",{parentName:"ol"},'Steps to Publish: run "npm login"'),(0,o.kt)("li",{parentName:"ol"},'run "npm publish --access public"')),(0,o.kt)("hr",null),(0,o.kt)("p",null,"For more information on WebdriverIO see the ",(0,o.kt)("a",{parentName:"p",href:"https://webdriver.io"},"homepage"),"."))}d.isMDXComponent=!0}}]);