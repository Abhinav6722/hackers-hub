"use strict";(self.webpackChunkwebsite=self.webpackChunkwebsite||[]).push([[8556],{4137:function(e,t,n){n.d(t,{Zo:function(){return p},kt:function(){return h}});var r=n(7294);function i(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function o(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function a(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?o(Object(n),!0).forEach((function(t){i(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):o(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function s(e,t){if(null==e)return{};var n,r,i=function(e,t){if(null==e)return{};var n,r,i={},o=Object.keys(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||(i[n]=e[n]);return i}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(i[n]=e[n])}return i}var l=r.createContext({}),c=function(e){var t=r.useContext(l),n=t;return e&&(n="function"==typeof e?e(t):a(a({},t),e)),n},p=function(e){var t=c(e.components);return r.createElement(l.Provider,{value:t},e.children)},d={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},u=r.forwardRef((function(e,t){var n=e.components,i=e.mdxType,o=e.originalType,l=e.parentName,p=s(e,["components","mdxType","originalType","parentName"]),u=c(n),h=i,m=u["".concat(l,".").concat(h)]||u[h]||d[h]||o;return n?r.createElement(m,a(a({ref:t},p),{},{components:n})):r.createElement(m,a({ref:t},p))}));function h(e,t){var n=arguments,i=t&&t.mdxType;if("string"==typeof e||i){var o=n.length,a=new Array(o);a[0]=u;var s={};for(var l in t)hasOwnProperty.call(t,l)&&(s[l]=t[l]);s.originalType=e,s.mdxType="string"==typeof e?e:i,a[1]=s;for(var c=2;c<o;c++)a[c]=n[c];return r.createElement.apply(null,a)}return r.createElement.apply(null,n)}u.displayName="MDXCreateElement"},250:function(e,t,n){n.r(t),n.d(t,{frontMatter:function(){return s},contentTitle:function(){return l},metadata:function(){return c},toc:function(){return p},default:function(){return u}});var r=n(7462),i=n(3366),o=(n(7294),n(4137)),a=["components"],s={id:"assertion",title:"Assertion"},l=void 0,c={unversionedId:"assertion",id:"assertion",isDocsHomePage:!1,title:"Assertion",description:"The WDIO testrunner comes with a built in assertion library that allows you to make powerful assertions on various aspects of the browser or elements within your (web) application. It extends Jests Matchers functionality with additional, for e2e testing optimized, matchers, e.g.:",source:"@site/docs/Assertion.md",sourceDirName:".",slug:"/assertion",permalink:"/docs/assertion",editUrl:"https://github.com/Abhi6722/hackers-hub/edit/main/website/docs/Assertion.md",tags:[],version:"current",frontMatter:{id:"assertion",title:"Assertion"},sidebar:"docs",previous:{title:"Frameworks",permalink:"/docs/frameworks"},next:{title:"Organizing Test Suite",permalink:"/docs/organizingsuites"}},p=[{value:"Migrating from Chai",id:"migrating-from-chai",children:[{value:"Local",id:"local",children:[],level:3},{value:"Global",id:"global",children:[],level:3}],level:2}],d={toc:p};function u(e){var t=e.components,n=(0,i.Z)(e,a);return(0,o.kt)("wrapper",(0,r.Z)({},d,n,{components:t,mdxType:"MDXLayout"}),(0,o.kt)("p",null,"The ",(0,o.kt)("a",{parentName:"p",href:"https://webdriver.io/docs/clioptions"},"WDIO testrunner")," comes with a built in assertion library that allows you to make powerful assertions on various aspects of the browser or elements within your (web) application. It extends ",(0,o.kt)("a",{parentName:"p",href:"https://jestjs.io/docs/en/using-matchers"},"Jests Matchers")," functionality with additional, for e2e testing optimized, matchers, e.g.:"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-js"},"const $button = await $('button')\nawait expect($button).toBeDisplayed()\n")),(0,o.kt)("p",null,"or"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-js"},"const selectOptions = await $$('form select>option')\n\n// make sure there is at least one option in select\nawait expect(selectOptions).toHaveChildren({ gte: 1 })\n")),(0,o.kt)("p",null,"For the full list, see the ",(0,o.kt)("a",{parentName:"p",href:"/docs/api/expect-webdriverio"},"expect API doc"),"."),(0,o.kt)("h2",{id:"migrating-from-chai"},"Migrating from Chai"),(0,o.kt)("p",null,(0,o.kt)("a",{parentName:"p",href:"https://www.chaijs.com/"},"Chai")," and ",(0,o.kt)("a",{parentName:"p",href:"https://github.com/webdriverio/expect-webdriverio#readme"},"expect-webdriverio")," can coexist, and with some minor adjustments a smooth transition to expect-webdriverio can be achieved. If you've upgraded to wdio v6 then by default you will have access to all the assertions from expect-webdriverio out of the box. This means that globally wherever you use ",(0,o.kt)("inlineCode",{parentName:"p"},"expect")," you would call an expect-webdriverio assertion. That is, unless you have explicitly overridden the global ",(0,o.kt)("inlineCode",{parentName:"p"},"expect")," to use Chai. In this case you would not have access to any of the expect-webdriverio assertions without explicitly importing the expect-webdriverio package where you need it."),(0,o.kt)("p",null,"This guide will show examples of how to migrate from Chai if it has been overridden locally and how to migrate from Chai if it has been overridden globally."),(0,o.kt)("h3",{id:"local"},"Local"),(0,o.kt)("p",null,"Assume Chai was imported explicitly in a file, e.g.:"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-js"},"// myfile.js - original code\nconst expectChai = require('chai').expect;\n\ndescribe('Homepage', () => {\n    it('should assert', async () => {\n        await browser.url('./');\n        expectChai(await browser.getUrl()).to.include('/login');\n    });\n});\n")),(0,o.kt)("p",null,"To migrate this code remove the Chai import and use the new expect-webdriverio assertion method ",(0,o.kt)("inlineCode",{parentName:"p"},"toHaveUrl")," instead:"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-js"},"// myfile.js - migrated code\ndescribe('Homepage', () => {\n    it('should assert', async () => {\n        await browser.url('./');\n        await expect(browser).toHaveUrl('/login'); // new expect-webdriverio API method https://webdriver.io/docs/api/expect-webdriverio.html#tohaveurl\n    });\n});\n")),(0,o.kt)("p",null,"If you wanted to use both Chai and expect-webdriverio in the same file you would keep the Chai import and ",(0,o.kt)("inlineCode",{parentName:"p"},"expect")," would default to the expect-webdriverio assertion, e.g.:"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-js"},"// myfile.js\nconst expectChai = require('chai').expect;\n\ndescribe('Element', () => {\n    it('should be displayed', async () => {\n        const isDisplayed = await $(\"#element\").isDisplayed()\n        expectChai(isDisplayed).to.equal(true); // Chai assertion\n    });\n});\n\ndescribe('Other element', () => {\n    it('should not be displayed', async () => {\n        await expect($(\"#element\")).not.toBeDisplayed(); // expect-webdriverio assertion\n    });\n});\n")),(0,o.kt)("h3",{id:"global"},"Global"),(0,o.kt)("p",null,"Assume ",(0,o.kt)("inlineCode",{parentName:"p"},"expect"),' was globally overridden to use Chai. In order to use expect-webdriverio assertions we need to globally set a variable in the "before" hook, e.g.:'),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-js"},"// wdio.conf.js\nbefore: () => {\n    require('expect-webdriverio');\n    global.wdioExpect = global.expect;\n    const chai = require('chai');\n    global.expect = chai.expect;\n}\n")),(0,o.kt)("p",null,"Now Chai and expect-webdriverio can be used alongside each other. In your code you would use Chai and expect-webdriverio assertions as follows, e.g.:"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-js"},"// myfile.js\ndescribe('Element', () => {\n    it('should be displayed', async () => {\n        const isDisplayed = await $(\"#element\").isDisplayed()\n        expect(isDisplayed).to.equal(true); // Chai assertion\n    });\n});\n\ndescribe('Other element', () => {\n    it('should not be displayed', async () => {\n        await expectWdio($(\"#element\")).not.toBeDisplayed(); // expect-webdriverio assertion\n    });\n});\n")),(0,o.kt)("p",null,'To migrate you would slowly move each Chai assertion over to expect-webdriverio. Once all Chai assertions have been replaced throughout the code base the "before" hook can be deleted. A global find and replace to replace all instances of ',(0,o.kt)("inlineCode",{parentName:"p"},"wdioExpect")," to ",(0,o.kt)("inlineCode",{parentName:"p"},"expect")," will then finish off the migration."))}u.isMDXComponent=!0}}]);