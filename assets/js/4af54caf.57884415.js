"use strict";(self.webpackChunkwebsite=self.webpackChunkwebsite||[]).push([[774],{7156:function(e,t,n){n.r(t),n.d(t,{assets:function(){return c},contentTitle:function(){return s},default:function(){return p},frontMatter:function(){return l},metadata:function(){return u},toc:function(){return d}});var r=n(2685),a=n(1244),o=(n(7378),n(5318)),i=["components"],l={},s="and",u={unversionedId:"and/readme",id:"and/readme",title:"and",description:"patronum 1.11.0",source:"@site/../src/and/readme.md",sourceDirName:"and",slug:"/and/",permalink:"/methods/and/",draft:!1,editUrl:"https://github.com/effector/patronum/tree/main/src/../src/and/readme.md",tags:[],version:"current",frontMatter:{},sidebar:"methodsSidebar",previous:{title:"Methods",permalink:"/methods/"},next:{title:"combineEvents",permalink:"/methods/combine-events/"}},c={},d=[{value:"Motivation",id:"motivation",level:3},{value:"Formulae",id:"formulae",level:3},{value:"Arguments",id:"arguments",level:3},{value:"Returns",id:"returns",level:3},{value:"Example",id:"example",level:3},{value:"Composition",id:"composition",level:3},{value:"Alternative",id:"alternative",level:3}],m={toc:d};function p(e){var t=e.components,n=(0,a.Z)(e,i);return(0,o.kt)("wrapper",(0,r.Z)({},m,n,{components:t,mdxType:"MDXLayout"}),(0,o.kt)("h1",{id:"and"},"and"),(0,o.kt)("admonition",{title:"since",type:"note"},(0,o.kt)("p",{parentName:"admonition"},"patronum 1.11.0")),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-ts"},"import { and } from 'patronum';\n// or\nimport { and } from 'patronum/and';\n")),(0,o.kt)("h3",{id:"motivation"},"Motivation"),(0,o.kt)("p",null,"The method allows to check each passed store for thruthy values.\nIt can be compared with ",(0,o.kt)("inlineCode",{parentName:"p"},"if (a && b && c && d)"),"."),(0,o.kt)("h3",{id:"formulae"},"Formulae"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-ts"},"$result = and(...stores);\n")),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("inlineCode",{parentName:"li"},"$result")," store contains ",(0,o.kt)("inlineCode",{parentName:"li"},"true"),' if each passed store contains "truthy" values.')),(0,o.kt)("h3",{id:"arguments"},"Arguments"),(0,o.kt)("p",null,"The method receives any amount of arguments."),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("inlineCode",{parentName:"li"},"...stores: Array<Store<T>>")," \u2014 Each argument must be store with a value of any kind.")),(0,o.kt)("h3",{id:"returns"},"Returns"),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("inlineCode",{parentName:"li"},"$result: Store<boolean>")," \u2014 The store contains ",(0,o.kt)("inlineCode",{parentName:"li"},"false")," if at least one passed store in ",(0,o.kt)("inlineCode",{parentName:"li"},"stores"),' contains "falsey" value')),(0,o.kt)("h3",{id:"example"},"Example"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-ts"},"const $isAuthorized = createStore(true);\nconst $isAdmin = createStore(false);\nconst $orderFinished = createStore(true);\n\nconst $showCancelButton = and($isAuthorized, $isAdmin, $orderFinished);\nconsole.assert(false === $showCancelButton.getState());\n")),(0,o.kt)("p",null,(0,o.kt)("a",{parentName:"p",href:"https://share.effector.dev/YbahaYCO"},"Try it")),(0,o.kt)("h3",{id:"composition"},"Composition"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-ts"},"const $showRegisterLink = and(\n  not($authorized),\n  or($isRegisterInProcess, $isEmailRecovering),\n);\n")),(0,o.kt)("h3",{id:"alternative"},"Alternative"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-ts"},"import { createStore, combine } from 'effector';\nconst $isAuthorized = createStore(true);\nconst $isAdmin = createStore(false);\nconst $orderFinished = createStore(true);\n\nconst $showCancelButon = combine(\n  $isAuthorized,\n  $isAdmin,\n  $orderFinished,\n  (isAuthorized, isAdmin, orderFinished) => isAuthorized && isAdmin && orderFinished,\n);\nconsole.assert(false === $showCancelButton.getState());\n")))}p.isMDXComponent=!0},5318:function(e,t,n){n.d(t,{Zo:function(){return c},kt:function(){return p}});var r=n(7378);function a(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function o(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function i(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?o(Object(n),!0).forEach((function(t){a(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):o(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function l(e,t){if(null==e)return{};var n,r,a=function(e,t){if(null==e)return{};var n,r,a={},o=Object.keys(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var s=r.createContext({}),u=function(e){var t=r.useContext(s),n=t;return e&&(n="function"==typeof e?e(t):i(i({},t),e)),n},c=function(e){var t=u(e.components);return r.createElement(s.Provider,{value:t},e.children)},d={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},m=r.forwardRef((function(e,t){var n=e.components,a=e.mdxType,o=e.originalType,s=e.parentName,c=l(e,["components","mdxType","originalType","parentName"]),m=u(n),p=a,f=m["".concat(s,".").concat(p)]||m[p]||d[p]||o;return n?r.createElement(f,i(i({ref:t},c),{},{components:n})):r.createElement(f,i({ref:t},c))}));function p(e,t){var n=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var o=n.length,i=new Array(o);i[0]=m;var l={};for(var s in t)hasOwnProperty.call(t,s)&&(l[s]=t[s]);l.originalType=e,l.mdxType="string"==typeof e?e:a,i[1]=l;for(var u=2;u<o;u++)i[u]=n[u];return r.createElement.apply(null,i)}return r.createElement.apply(null,n)}m.displayName="MDXCreateElement"}}]);