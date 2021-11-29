"use strict";(self.webpackChunkwebsite=self.webpackChunkwebsite||[]).push([[5649],{4137:function(e,t,a){a.d(t,{Zo:function(){return d},kt:function(){return h}});var r=a(7294);function o(e,t,a){return t in e?Object.defineProperty(e,t,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[t]=a,e}function n(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),a.push.apply(a,r)}return a}function i(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?n(Object(a),!0).forEach((function(t){o(e,t,a[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):n(Object(a)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))}))}return e}function s(e,t){if(null==e)return{};var a,r,o=function(e,t){if(null==e)return{};var a,r,o={},n=Object.keys(e);for(r=0;r<n.length;r++)a=n[r],t.indexOf(a)>=0||(o[a]=e[a]);return o}(e,t);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);for(r=0;r<n.length;r++)a=n[r],t.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(e,a)&&(o[a]=e[a])}return o}var l=r.createContext({}),p=function(e){var t=r.useContext(l),a=t;return e&&(a="function"==typeof e?e(t):i(i({},t),e)),a},d=function(e){var t=p(e.components);return r.createElement(l.Provider,{value:t},e.children)},u={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},c=r.forwardRef((function(e,t){var a=e.components,o=e.mdxType,n=e.originalType,l=e.parentName,d=s(e,["components","mdxType","originalType","parentName"]),c=p(a),h=o,m=c["".concat(l,".").concat(h)]||c[h]||u[h]||n;return a?r.createElement(m,i(i({ref:t},d),{},{components:a})):r.createElement(m,i({ref:t},d))}));function h(e,t){var a=arguments,o=t&&t.mdxType;if("string"==typeof e||o){var n=a.length,i=new Array(n);i[0]=c;var s={};for(var l in t)hasOwnProperty.call(t,l)&&(s[l]=t[l]);s.originalType=e,s.mdxType="string"==typeof e?e:o,i[1]=s;for(var p=2;p<n;p++)i[p]=a[p];return r.createElement.apply(null,i)}return r.createElement.apply(null,a)}c.displayName="MDXCreateElement"},8466:function(e,t,a){a.r(t),a.d(t,{frontMatter:function(){return s},contentTitle:function(){return l},metadata:function(){return p},assets:function(){return d},toc:function(){return u},default:function(){return h}});var r=a(7462),o=a(3366),n=(a(7294),a(4137)),i=["components"],s={title:"WebdriverIO v6 Released",author:"Christian Bromann",authorURL:"http://twitter.com/bromann",authorImageURL:"https://s.gravatar.com/avatar/d98b16d7c93d15865f34a225dd4b1254?s=80"},l=void 0,p={permalink:"/blog/2020/03/26/webdriverio-v6-released",editUrl:"https://github.com/Abhi6722/hackers-hub/edit/main/website/blog/blog/2020-03-26-webdriverio-v6-released.md",source:"@site/blog/2020-03-26-webdriverio-v6-released.md",title:"WebdriverIO v6 Released",description:"If you read this and are already about to freak out because you just spent a lot of time migrating to v5, don't worry! This major update is far less \"breaking\" than the one last year. While all the architectural changes last year left us no choice to break a lot of things, we were very careful this time and made sure that upgrading the framework won't become a big task.",date:"2020-03-26T00:00:00.000Z",formattedDate:"March 26, 2020",tags:[],readingTime:10.705,truncated:!1,authors:[{name:"Christian Bromann",url:"http://twitter.com/bromann",imageURL:"https://s.gravatar.com/avatar/d98b16d7c93d15865f34a225dd4b1254?s=80"}],prevItem:{title:"WebdriverIO Open Office Hours",permalink:"/blog/2020/07/01/office-hours"},nextItem:{title:"WireMock as a Service",permalink:"/blog/2019/12/05/wiremock"}},d={authorsImageUrls:[void 0]},u=[{value:"Drop Node v8 Support",id:"drop-node-v8-support",children:[{value:"How to Update?",id:"how-to-update",children:[],level:3}],level:2},{value:"<code>devtools</code> Automation Protocol is now Default",id:"devtools-automation-protocol-is-now-default",children:[{value:"How to Update?",id:"how-to-update-1",children:[],level:3}],level:2},{value:"Performance Improvements",id:"performance-improvements",children:[{value:"How to Update?",id:"how-to-update-2",children:[],level:3}],level:2},{value:"Service Configurations",id:"service-configurations",children:[{value:"How to Update?",id:"how-to-update-3",children:[],level:3}],level:2},{value:"Command Interface Changes",id:"command-interface-changes",children:[{value:"How to Update?",id:"how-to-update-4",children:[],level:3}],level:2},{value:"New Assertion Library",id:"new-assertion-library",children:[{value:"How to Update?",id:"how-to-update-5",children:[],level:3}],level:2},{value:"Other Changes",id:"other-changes",children:[],level:2},{value:"LTS Support",id:"lts-support",children:[],level:2}],c={toc:u};function h(e){var t=e.components,s=(0,o.Z)(e,i);return(0,n.kt)("wrapper",(0,r.Z)({},c,s,{components:t,mdxType:"MDXLayout"}),(0,n.kt)("p",null,"If you read this and are already about to freak out because you just spent a lot of time migrating to v5, don't worry! This major update is far less \"breaking\" than the one last year. While all the architectural changes last year left us no choice to break a lot of things, we were very careful this time and made sure that upgrading the framework won't become a big task."),(0,n.kt)("p",null,"This major update is much more reasonable and contains subtle changes that will help the project further grow while remaining performant at the same time. This blog post will go into details about all major changes and will explain what you need to do to transition from v5 to the v6."),(0,n.kt)("h2",{id:"drop-node-v8-support"},"Drop Node v8 Support"),(0,n.kt)("p",null,"We've dropped support for Node v8, which was deprecated by the Node.js team at the start of 2020. It is not recommended to run any systems using that version anymore. We strongly advise to switch to Node v12 which will be supported until April 2022."),(0,n.kt)("h3",{id:"how-to-update"},"How to Update?"),(0,n.kt)("p",null,"To update Node.js, it is important to know how it was installed in the first place. If you are in a Docker environment, you can just upgrade the base image like:"),(0,n.kt)("pre",null,(0,n.kt)("code",{parentName:"pre",className:"language-git"},"- FROM mhart/alpine-node:8\n+ FROM mhart/alpine-node:12\n")),(0,n.kt)("p",null,"We recommend using ",(0,n.kt)("a",{parentName:"p",href:"https://github.com/nvm-sh/nvm"},"NVM")," (Node Version Manager) to install and manage Node.js versions. You can find a detailed description on how to install NVM and update Node in their ",(0,n.kt)("a",{parentName:"p",href:"https://github.com/nvm-sh/nvm#installing-and-updating"},"project readme"),"."),(0,n.kt)("h2",{id:"devtools-automation-protocol-is-now-default"},(0,n.kt)("inlineCode",{parentName:"h2"},"devtools")," Automation Protocol is now Default"),(0,n.kt)("p",null,"Because of the great success of automation tools like ",(0,n.kt)("a",{parentName:"p",href:"https://pptr.dev/"},"Puppeteer")," and ",(0,n.kt)("a",{parentName:"p",href:"https://www.cypress.io/"},"Cypress.io")," it became obvious that the ",(0,n.kt)("a",{parentName:"p",href:"https://w3c.github.io/webdriver/"},"WebDriver")," protocol in its current shape and form doesn't meet the requirements of todays developer and automation engineers. Members of the WebdriverIO project are part of the ",(0,n.kt)("a",{parentName:"p",href:"https://www.w3.org/testing/browser/"},"W3C Working Group")," that defines the WebDriver specification and they work together with browser vendors on solutions to improve the current state of the art. Thanks to folks from Microsoft there already proposals about a new ",(0,n.kt)("a",{parentName:"p",href:"https://github.com/MicrosoftEdge/MSEdgeExplainers/tree/master/WebDriverRPC"},"bidirectional connection")," similar to other automation protocols like ",(0,n.kt)("a",{parentName:"p",href:"https://chromedevtools.github.io/devtools-protocol/"},"Chrome Devtools"),"."),(0,n.kt)("p",null,"Until we have reached consensus between all browser vendors on the new WebDriver architecture, the project wants to offer alternative solutions. This is why we've started to support Puppeteer natively using the same APIs. We already announced support for it ",(0,n.kt)("a",{parentName:"p",href:"https://webdriver.io/blog/2019/09/16/devtools.html"},"last year")," and have now fully embed it into the project. This means that to run a local test script you won't need to download a browser driver anymore. WebdriverIO checks if a browser driver is running and accessible at ",(0,n.kt)("inlineCode",{parentName:"p"},"localhost:4444/")," and uses Puppeteer as fallback if not. If you use the WebdriverIO API the experience using WebDriver vs Puppeteer should be the same, running commands on Puppeteer might even be a little faster."),(0,n.kt)("blockquote",null,(0,n.kt)("p",{parentName:"blockquote"},(0,n.kt)("strong",{parentName:"p"},"Note:")," using Puppeteer instead of WebDriver is only supported if running tests locally and if the browser is located on the same machine as the tests.")),(0,n.kt)("p",null,"Being able to access Puppeteer in your tests allows you to leverage the capabilities of the Chrome DevTools protocol which has a much richer set of automation features. In your tests you are free to switch between Puppeteer and WebdriverIO API as you wish, e.g.:"),(0,n.kt)("pre",null,(0,n.kt)("code",{parentName:"pre",className:"language-js"},"describe('my e2e tests', () => {\n    // ...\n\n    it('replaces the WebdriverIO logo with the Puppeteer logo', () => {\n        browser.url('https://webdriver.io')\n\n        /**\n         * run Puppeteer code with promises to intercept network requests\n         * and replace the WebdriverIO logo in the docs with the Puppeteer logo\n         */\n        const wdioLogo = 'webdriverio.png'\n        const pptrLogo = 'https://user-images.githubusercontent.com/10379601/29446482-04f7036a-841f-11e7-9872-91d1fc2ea683.png'\n        browser.call(async () => {\n            const puppeteerBrowser = browser.getPuppeteer()\n            const page = (await puppeteerBrowser.pages())[0]\n            await page.setRequestInterception(true)\n            page.on('request', (interceptedRequest) => (\n                interceptedRequest.url().endsWith(wdioLogo)\n                    ? interceptedRequest.continue({ url: pptrLogo })\n                    : interceptedRequest.continue()\n            ))\n        })\n\n        // continue with sync WebdriverIO commands\n        browser.refresh()\n        browser.pause(2000)\n    })\n\n})\n")),(0,n.kt)("p",null,'We have integrated Puppeteer so you can run "cross-browser" tests on Chrome, Firefox (Nightly) and Chromium Edge. Note that the term cross-browser is used with quotation marks here. A lot of automation tools today advertise their cross-browser support while not being really honest about what it actually means. All Chromium based browser like Google Chrome, Chromium Edge or Electron based apps use the identical engine under the hood. It is questionable that there is much value testing on multiple Chromium based browser. In addition to that the support for Firefox is and will be experimental as it was implemented in an ad-hoc effort by a team at Mozilla which hasn\'t committed to bring it out of its experimental state and continue support for it.'),(0,n.kt)("p",null,"We have not planned to integrate ",(0,n.kt)("a",{parentName:"p",href:"https://github.com/microsoft/playwright"},"Playwright")," as we can not afford to download their custom build browsers every time someone installs WebdriverIO. We will observe its development and might consider an integration at some point."),(0,n.kt)("p",null,"The WebdriverIO team wants to emphasize that it continues to be invested in WebDriver as an automation standard which is till today the only true cross-browser automation protocol. We will always prefer a standards based solution that has been developed by a diverse group of people representing the industry at large."),(0,n.kt)("h3",{id:"how-to-update-1"},"How to Update?"),(0,n.kt)("p",null,"If you are running your tests on WebDriver already, nothing needs to be changed. WebdriverIO will only fallback to Puppeteer if it can't find a browser driver running."),(0,n.kt)("h2",{id:"performance-improvements"},"Performance Improvements"),(0,n.kt)("p",null,"A big goal with the new release was to make WebdriverIO more performant and faster. Running tests on Puppeteer can already speed up your local execution. But we also looked into other areas to improve. With v6 we replaced our heavy dependency to ",(0,n.kt)("a",{parentName:"p",href:"https://github.com/request/request"},(0,n.kt)("inlineCode",{parentName:"a"},"request"))," which has been fully deprecated as off February 11th 2020. With that we were able to reduce the bundle size of the ",(0,n.kt)("inlineCode",{parentName:"p"},"webdriver")," and ",(0,n.kt)("inlineCode",{parentName:"p"},"webdriverio")," package by 4x:"),(0,n.kt)("p",null,(0,n.kt)("img",{alt:"bundle size comparison",src:a(5115).Z})),(0,n.kt)("p",null,"By using ",(0,n.kt)("a",{parentName:"p",href:"https://github.com/sindresorhus/got"},(0,n.kt)("inlineCode",{parentName:"a"},"got"))," as new dependency to make requests in WebDriver we are now technically also able to run WebdriverIO in the browser which creates interesting possibilities and was a requirement for our ",(0,n.kt)("a",{parentName:"p",href:"https://github.com/webdriverio/webdriverio/blob/main/ROADMAP.md#upcoming-projects-in-no-particular-order"},"roadmap item")," to build a fiddle platform for WebdriverIO scripts."),(0,n.kt)("p",null,"The new version v6 will also come with a lot of internal improvements that will speed up test execution and lower CPU and memory usage. Especially when it comes to fetching elements we were able to reduce a lot of overhead and speed things up:"),(0,n.kt)("p",null,(0,n.kt)("img",{alt:"improved flamechart",src:a(5633).Z})),(0,n.kt)("h3",{id:"how-to-update-2"},"How to Update?"),(0,n.kt)("p",null,"These improvements come for free and you don't need to do anything to better performance in v6 when upgrading."),(0,n.kt)("h2",{id:"service-configurations"},"Service Configurations"),(0,n.kt)("p",null,"We are very proud about the amount of different ",(0,n.kt)("a",{parentName:"p",href:"https://www.npmjs.com/search?q=wdio-service"},"services")," and ",(0,n.kt)("a",{parentName:"p",href:"https://www.npmjs.com/search?q=wdio-reporter"},"reporters")," that the community built. All these additional plugins require specific configurations in your ",(0,n.kt)("inlineCode",{parentName:"p"},"wdio.conf.js")," and we want to make sure that all these settings are being made standardized structure. Until v5 of WebdriverIO specific options to services and reporters could be defined anywhere in the ",(0,n.kt)("inlineCode",{parentName:"p"},"wdio.conf.js"),", e.g. the Sauce service:"),(0,n.kt)("pre",null,(0,n.kt)("code",{parentName:"pre",className:"language-js"},"// wdio.conf.js\nexport.config = {\n  // ...\n  services: ['sauce'],\n  user: process.env.SAUCE_USERNAME,\n  key: process.env.SAUCE_ACCESS_KEY,\n  region: 'us',\n  sauceConnect: true,\n  // ...\n};\n")),(0,n.kt)("p",null,'With v6 we moved all configurations into the services list close to where the service is actually defined. This will help to maintain a clear structure in the config file while at the same time keep the set of different "native" supported configurations clear. In v6 the example above needs to be modified as to become this:'),(0,n.kt)("pre",null,(0,n.kt)("code",{parentName:"pre",className:"language-js"},"// wdio.conf.js\nexport.config = {\n    // ...\n    user: process.env.SAUCE_USERNAME,\n    key: process.env.SAUCE_ACCESS_KEY,\n    region: 'us', // WebdriverIO Configuration\n    services: [\n        ['sauce', {\n            sauceConnect: true, // @wdio/sauce-service configuration\n            sauceConnectOpts: { // @wdio/sauce-service configuration\n                // ...\n            }\n        }]\n    ],\n    // ...\n};\n")),(0,n.kt)("p",null,"As part of this effort we also looked into the service option names and renamed to be more short and precise."),(0,n.kt)("h3",{id:"how-to-update-3"},"How to Update?"),(0,n.kt)("p",null,"Walk through your WDIO configuration files and look for configurations that are not specifically defined by as WebDriver or WDIO ",(0,n.kt)("a",{parentName:"p",href:"https://webdriver.io/docs/options.html"},"options"),". These needs to be moved into the service list according to the example above. In addition to that have a look if option names have changed and update them accordingly."),(0,n.kt)("h2",{id:"command-interface-changes"},"Command Interface Changes"),(0,n.kt)("p",null,"In the past we have been adding a lot of additional functionality into single commands like click to serve different purposes. This new functionality could be used by applying parameters to the command. Unfortunately the amount of such parameters has grown and caused a lot of confusion and made some commands not readable anymore. If you ever had to use ",(0,n.kt)("inlineCode",{parentName:"p"},"$('#elem').waitForExist(null, null true)")," to wait until an element does ",(0,n.kt)("strong",{parentName:"p"},"not")," exist anymore you will know how bad things have become."),(0,n.kt)("p",null,"With v6 we have changed the structure of a couple of commands to allow named parameters instead. With that the code becomes much more readable and allows better type enforcement when using TypeScript. The above example looks in v6 as follows:"),(0,n.kt)("pre",null,(0,n.kt)("code",{parentName:"pre",className:"language-js"},"$('#elem').waitForExist({ reverse: true })\n")),(0,n.kt)("h3",{id:"how-to-update-4"},"How to Update?"),(0,n.kt)("p",null,"We have changed the structure of the following commands:"),(0,n.kt)("ul",null,(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("p",{parentName:"li"},"affected ",(0,n.kt)("inlineCode",{parentName:"p"},"browser")," methods:"),(0,n.kt)("ul",{parentName:"li"},(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("a",{parentName:"li",href:"https://webdriver.io/docs/api/browser/newWindow.html"},"newWindow")),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("a",{parentName:"li",href:"https://webdriver.io/docs/api/browser/react$.html"},"react$")),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("a",{parentName:"li",href:"https://webdriver.io/docs/api/browser/react$$.html"},"react$$")),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("a",{parentName:"li",href:"https://webdriver.io/docs/api/browser/waitUntil.html"},"waitUntil")))),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("p",{parentName:"li"},"affected element methods:"),(0,n.kt)("ul",{parentName:"li"},(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("a",{parentName:"li",href:"https://webdriver.io/docs/api/element/dragAndDrop.html"},"dragAndDrop")),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("a",{parentName:"li",href:"https://webdriver.io/docs/api/element/moveTo.html"},"moveTo")),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("a",{parentName:"li",href:"https://webdriver.io/docs/api/element/react$.html"},"react$")),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("a",{parentName:"li",href:"https://webdriver.io/docs/api/element/react$$.html"},"react$$")),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("a",{parentName:"li",href:"https://webdriver.io/docs/api/element/scrollIntoView.html"},"scrollIntoView")),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("a",{parentName:"li",href:"https://webdriver.io/docs/api/element/waitForClickable.html"},"waitForClickable")),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("a",{parentName:"li",href:"https://webdriver.io/docs/api/element/waitForDisplayed.html"},"waitForDisplayed")),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("a",{parentName:"li",href:"https://webdriver.io/docs/api/element/waitForEnabled.html"},"waitForEnabled")),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("a",{parentName:"li",href:"https://webdriver.io/docs/api/element/waitForExist.html"},"waitForExist")),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("a",{parentName:"li",href:"https://webdriver.io/docs/api/element/waitUntil.html"},"waitUntil"))))),(0,n.kt)("p",null,"If you use TypeScript in your project it should automatically tell you to all places that needs to be updated. If you don't use TypeScript which recommend to just search for every command in your code base and modify it accordingly. It should be a pretty mechanical and straightforward task."),(0,n.kt)("h2",{id:"new-assertion-library"},"New Assertion Library"),(0,n.kt)("p",null,"With the update to v6 you will now automatically get access to our new native embedded assertion library ",(0,n.kt)("a",{parentName:"p",href:"https://www.npmjs.com/package/expect-webdriverio"},(0,n.kt)("inlineCode",{parentName:"a"},"expect-webdriverio")),". It is a special designed assertion library for WebdriverIO that was inspired by Jests ",(0,n.kt)("a",{parentName:"p",href:"https://www.npmjs.com/package/expect"},(0,n.kt)("inlineCode",{parentName:"a"},"expect"))," package. It comes with key features like:"),(0,n.kt)("ul",null,(0,n.kt)("li",{parentName:"ul"},"waits for expectation to succeed"),(0,n.kt)("li",{parentName:"ul"},"detailed error messages"),(0,n.kt)("li",{parentName:"ul"},"support for Mocha, Cucumber, Jest and Jasmine"),(0,n.kt)("li",{parentName:"ul"},"builtin types for TypeScript and JS autocompletion")),(0,n.kt)("p",null,"This will not only simplify the setup of your WebdriverIO framework but also gets you better error messages if an assertion fails, e.g. when checking the visibility of an element like:"),(0,n.kt)("pre",null,(0,n.kt)("code",{parentName:"pre",className:"language-js"},"const elem = $('#someElem')\nexpect(elem).toHaveText('Click #2')\n")),(0,n.kt)("p",null,"It will fail with an error message like:"),(0,n.kt)("p",null,(0,n.kt)("img",{parentName:"p",src:"https://raw.githubusercontent.com/mgrybyk/expect-webdriverio/HEAD/docs/img/errors/text.png?raw=true",alt:"Error Message"})),(0,n.kt)("h3",{id:"how-to-update-5"},"How to Update?"),(0,n.kt)("p",null,"If you already use an assertion library like ",(0,n.kt)("a",{parentName:"p",href:"https://www.chaijs.com/"},"Chai")," you can continue doing, especially if you are not interested using ",(0,n.kt)("inlineCode",{parentName:"p"},"expect-webdriverio"),". However you can also start writing new assertions with the new assertion API and maintain two different types of assertion libraries until you decide to get rid of the other."),(0,n.kt)("h2",{id:"other-changes"},"Other Changes"),(0,n.kt)("p",null,"Next to all major updates that were described above there are also some minor changes that are worth mentioning:"),(0,n.kt)("ul",null,(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("strong",{parentName:"li"},"TypeScript Support:")," we improved the typings for WebdriverIO and WebDriver to include better descriptions and more detail"),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("strong",{parentName:"li"},"WebDriver Default Path:")," we changed default WebDriver path from ",(0,n.kt)("inlineCode",{parentName:"li"},"/wd/hub")," to ",(0,n.kt)("inlineCode",{parentName:"li"},"/")," as most of the browser drivers now default to this, this should have no effect for you - however if you have trouble connecting to a WebDriver endpoint after the upgrade, this could be a reason for that issue.",(0,n.kt)("blockquote",{parentName:"li"},(0,n.kt)("p",{parentName:"blockquote"},(0,n.kt)("strong",{parentName:"p"},"Note for Appium users:")," If you are using a local or global install of Appium and you start Appium through the command line, you should also provide the cli argument ",(0,n.kt)("inlineCode",{parentName:"p"},"--base-path /"),". This will prevent Appium not finding a matching local emulator/simulator/real device and start using the default ",(0,n.kt)("inlineCode",{parentName:"p"},"path: '/'")," that WebdriverIO uses.\\\nIf you are using the ",(0,n.kt)("inlineCode",{parentName:"p"},"@wdio/appium-service")," you don't need to do anything."))),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("strong",{parentName:"li"},"Command Renaming:")," we renamed command ",(0,n.kt)("inlineCode",{parentName:"li"},"launchApp")," to ",(0,n.kt)("inlineCode",{parentName:"li"},"launchChromeApp")," for Chrome WebDriver sessions"),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("strong",{parentName:"li"},"Spec Filtering:")," the ",(0,n.kt)("a",{parentName:"li",href:"https://webdriver.io/blog/2019/11/01/spec-filtering.html"},"Spec Filtering")," feature is now enabled by default so that browser sessions aren't started if the framework can't find a test to run in the file (this can not be disabled anymore)"),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("strong",{parentName:"li"},"New Hook:")," we added a new hook to the testrunner called ",(0,n.kt)("inlineCode",{parentName:"li"},"onWorkerStart")," which will be executed right before we launch the worker process"),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("strong",{parentName:"li"},"Modified Hook Signature:")," we modified the signature of our before/after test/hook hooks to allow you to access the frameworks native event objects - please have a look into the config file ",(0,n.kt)("a",{parentName:"li",href:"/docs/configurationfile"},"documentation")," and update your hooks accordingly"),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("strong",{parentName:"li"},"Cucumber Update:")," we have updated the ",(0,n.kt)("inlineCode",{parentName:"li"},"@wdio/cucumber-framework")," adapter to use v6 of Cucumber"),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("strong",{parentName:"li"},"Overwrite Capabilities:")," By default the launcher will overwrite the capabilities instead of merging them when using the launcher")),(0,n.kt)("h2",{id:"lts-support"},"LTS Support"),(0,n.kt)("p",null,"With the release of v6 we will continue to support v5 until we decide to release a new major version v7. We created a ",(0,n.kt)("a",{parentName:"p",href:"https://github.com/webdriverio/webdriverio/blob/main/CONTRIBUTING.md#back-porting-bug-fixes"},"backporting process")," that allows us to seamlessly backport bug fixes and features from v6 to v5. Please note that as the code between both versions diverge we won't be able to backport every feature and bug fix. We might ask code contributors to provide a similar PR that has been made to the ",(0,n.kt)("inlineCode",{parentName:"p"},"master")," branch also to the ",(0,n.kt)("inlineCode",{parentName:"p"},"v5")," branch."),(0,n.kt)("p",null,"That said, we generally recommend to update to the latest version as soon as possible to make sure that you leverage bug fixes that have been made to the project."))}h.isMDXComponent=!0},5115:function(e,t,a){t.Z=a.p+"assets/images/bundlesize-8fdcfc8551662be35fc68844f1b99c8b.png"},5633:function(e,t,a){t.Z=a.p+"assets/images/flamechart-34186d37dd6327b8b7db07286d65f333.jpg"}}]);