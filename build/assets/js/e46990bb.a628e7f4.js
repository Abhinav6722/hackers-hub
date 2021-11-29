"use strict";(self.webpackChunkwebsite=self.webpackChunkwebsite||[]).push([[2558],{4137:function(e,t,n){n.d(t,{Zo:function(){return c},kt:function(){return d}});var i=n(7294);function o(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function a(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);t&&(i=i.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,i)}return n}function r(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?a(Object(n),!0).forEach((function(t){o(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):a(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function s(e,t){if(null==e)return{};var n,i,o=function(e,t){if(null==e)return{};var n,i,o={},a=Object.keys(e);for(i=0;i<a.length;i++)n=a[i],t.indexOf(n)>=0||(o[n]=e[n]);return o}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(i=0;i<a.length;i++)n=a[i],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(o[n]=e[n])}return o}var l=i.createContext({}),u=function(e){var t=i.useContext(l),n=t;return e&&(n="function"==typeof e?e(t):r(r({},t),e)),n},c=function(e){var t=u(e.components);return i.createElement(l.Provider,{value:t},e.children)},m={inlineCode:"code",wrapper:function(e){var t=e.children;return i.createElement(i.Fragment,{},t)}},p=i.forwardRef((function(e,t){var n=e.components,o=e.mdxType,a=e.originalType,l=e.parentName,c=s(e,["components","mdxType","originalType","parentName"]),p=u(n),d=o,h=p["".concat(l,".").concat(d)]||p[d]||m[d]||a;return n?i.createElement(h,r(r({ref:t},c),{},{components:n})):i.createElement(h,r({ref:t},c))}));function d(e,t){var n=arguments,o=t&&t.mdxType;if("string"==typeof e||o){var a=n.length,r=new Array(a);r[0]=p;var s={};for(var l in t)hasOwnProperty.call(t,l)&&(s[l]=t[l]);s.originalType=e,s.mdxType="string"==typeof e?e:o,r[1]=s;for(var u=2;u<a;u++)r[u]=n[u];return i.createElement.apply(null,r)}return i.createElement.apply(null,n)}p.displayName="MDXCreateElement"},5089:function(e,t,n){n.r(t),n.d(t,{frontMatter:function(){return s},contentTitle:function(){return l},metadata:function(){return u},toc:function(){return c},default:function(){return p}});var i=n(7462),o=n(3366),a=(n(7294),n(4137)),r=["components"],s={id:"timeouts",title:"Timeouts"},l=void 0,u={unversionedId:"timeouts",id:"timeouts",isDocsHomePage:!1,title:"Timeouts",description:"Each command in WebdriverIO is an asynchronous operation. A request is fired to the Selenium server (or a cloud service like Sauce Labs), and its response contains the result once the action has completed or failed.",source:"@site/docs/Timeouts.md",sourceDirName:".",slug:"/timeouts",permalink:"/docs/timeouts",editUrl:"https://github.com/Abhi6722/hackers-hub/edit/main/website/docs/Timeouts.md",tags:[],version:"current",frontMatter:{id:"timeouts",title:"Timeouts"},sidebar:"docs",previous:{title:"Selectors",permalink:"/docs/selectors"},next:{title:"The Browser Object",permalink:"/docs/browserobject"}},c=[{value:"Selenium timeouts",id:"selenium-timeouts",children:[{value:"Session Script Timeout",id:"session-script-timeout",children:[],level:3},{value:"Session Page Load Timeout",id:"session-page-load-timeout",children:[],level:3},{value:"Session Implicit Wait Timeout",id:"session-implicit-wait-timeout",children:[],level:3}],level:2},{value:"WebdriverIO related timeouts",id:"webdriverio-related-timeouts",children:[{value:"<code>WaitFor*</code> timeout",id:"waitfor-timeout",children:[],level:3}],level:2},{value:"Framework related timeouts",id:"framework-related-timeouts",children:[],level:2}],m={toc:c};function p(e){var t=e.components,n=(0,o.Z)(e,r);return(0,a.kt)("wrapper",(0,i.Z)({},m,n,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("p",null,"Each command in WebdriverIO is an asynchronous operation. A request is fired to the Selenium server (or a cloud service like ",(0,a.kt)("a",{parentName:"p",href:"https://saucelabs.com"},"Sauce Labs"),"), and its response contains the result once the action has completed or failed."),(0,a.kt)("p",null,"Therefore, time is a crucial component in the whole testing process. When a certain action depends on the state of a different action, you need to make sure that they get executed in the right order. Timeouts play an important role when dealing with these issues."),(0,a.kt)("h2",{id:"selenium-timeouts"},"Selenium timeouts"),(0,a.kt)("h3",{id:"session-script-timeout"},"Session Script Timeout"),(0,a.kt)("p",null,"A session has an associated session script timeout that specifies a time to wait for asynchronous scripts to run. Unless stated otherwise, it is 30 seconds. You can set this timeout like so:"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-js"},"await browser.setTimeout({ 'script': 60000 })\nawait browser.executeAsync((done) => {\n    console.log('this should not fail')\n    setTimeout(done, 59000)\n})\n")),(0,a.kt)("h3",{id:"session-page-load-timeout"},"Session Page Load Timeout"),(0,a.kt)("p",null,"A session has an associated session page load timeout that specifies a time to wait for the page loading to complete. Unless stated otherwise, it is 300,000 milliseconds."),(0,a.kt)("p",null,"You can set this timeout like so:"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-js"},"await browser.setTimeout({ 'pageLoad': 10000 })\n")),(0,a.kt)("blockquote",null,(0,a.kt)("p",{parentName:"blockquote"},"The ",(0,a.kt)("inlineCode",{parentName:"p"},"pageLoad")," keyword is a part of the official WebDriver ",(0,a.kt)("a",{parentName:"p",href:"https://www.w3.org/TR/webdriver/#set-timeouts"},"specification"),", but might not be ",(0,a.kt)("a",{parentName:"p",href:"https://github.com/seleniumhq/selenium-google-code-issue-archive/issues/687"},"supported")," for your browser (the previous name is ",(0,a.kt)("inlineCode",{parentName:"p"},"page load"),").")),(0,a.kt)("h3",{id:"session-implicit-wait-timeout"},"Session Implicit Wait Timeout"),(0,a.kt)("p",null,"A session has an associated session implicit wait timeout. This specifies the time to wait for the implicit element location strategy when locating elements using the ",(0,a.kt)("a",{parentName:"p",href:"/docs/api/webdriver#findelement"},(0,a.kt)("inlineCode",{parentName:"a"},"findElement"))," or ",(0,a.kt)("a",{parentName:"p",href:"/docs/api/webdriver#findelements"},(0,a.kt)("inlineCode",{parentName:"a"},"findElements"))," commands (",(0,a.kt)("a",{parentName:"p",href:"/docs/api/browser/$"},(0,a.kt)("inlineCode",{parentName:"a"},"$"))," or ",(0,a.kt)("a",{parentName:"p",href:"/docs/api/browser/$$"},(0,a.kt)("inlineCode",{parentName:"a"},"$$")),", respectively, when running WebdriverIO with or without the WDIO testrunner). Unless stated otherwise, it is 0 milliseconds."),(0,a.kt)("p",null,"You can set this timeout via:"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-js"},"await browser.setTimeout({ 'implicit': 5000 })\n")),(0,a.kt)("h2",{id:"webdriverio-related-timeouts"},"WebdriverIO related timeouts"),(0,a.kt)("h3",{id:"waitfor-timeout"},(0,a.kt)("inlineCode",{parentName:"h3"},"WaitFor*")," timeout"),(0,a.kt)("p",null,"WebdriverIO provides multiple commands to wait on elements to reach a certain state (e.g. enabled, visible, existing). These commands take a selector argument and a timeout number, which determines how long the instance should wait for that element to reach the state. The ",(0,a.kt)("inlineCode",{parentName:"p"},"waitforTimeout")," option allows you to set the global timeout for all ",(0,a.kt)("inlineCode",{parentName:"p"},"waitFor*")," commands, so you don't need to set the same timeout over and over again. ",(0,a.kt)("em",{parentName:"p"},"(Note the lowercase ",(0,a.kt)("inlineCode",{parentName:"em"},"f"),"!)")),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-js"},"// wdio.conf.js\nexports.config = {\n    // ...\n    waitforTimeout: 5000,\n    // ...\n}\n")),(0,a.kt)("p",null,"In your tests, you now can do this:"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-js"},"const myElem = await $('#myElem')\nawait myElem.waitForDisplayed()\n\n// you can also overwrite the default timeout if needed\nawait myElem.waitForDisplayed({ timeout: 10000 })\n")),(0,a.kt)("h2",{id:"framework-related-timeouts"},"Framework related timeouts"),(0,a.kt)("p",null,"The testing framework you\u2019re using with WebdriverIO has to deal with timeouts, especially since everything is asynchronous. It ensures that the test process doesn't get stuck if something goes wrong."),(0,a.kt)("p",null,"By default, the timeout is 10 seconds, which means that a single test should not take longer than that."),(0,a.kt)("p",null,"A single test in Mocha looks like:"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-js"},"it('should login into the application', () => {\n    await browser.url('/login')\n\n    const form = await $('form')\n    const username = await $('#username')\n    const password = await $('#password')\n\n    await username.setValue('userXY')\n    await password.setValue('******')\n    await form.submit()\n\n    expect(await browser.getTitle()).to.be.equal('Admin Area')\n})\n")),(0,a.kt)("p",null,"In Cucumber, the timeout applies to a single step definition. However, if you want to increase the timeout because your test takes longer than the default value, you need to set it in the framework options."),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-js"},"// wdio.conf.js\nexports.config = {\n    // ...\n    framework: 'mocha',\n    mochaOpts: {\n        timeout: 20000\n    },\n    // ...\n}\n")),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-js"},"// wdio.conf.js\nexports.config = {\n    // ...\n    framework: 'jasmine',\n    jasmineOpts: {\n        defaultTimeoutInterval: 20000\n    },\n    // ...\n}\n")),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-js"},"// wdio.conf.js\nexports.config = {\n    // ...\n    framework: 'cucumber',\n    cucumberOpts: {\n        timeout: 20000\n    },\n    // ...\n}\n")))}p.isMDXComponent=!0}}]);