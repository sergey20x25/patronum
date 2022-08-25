"use strict";(self.webpackChunkwebsite=self.webpackChunkwebsite||[]).push([[778],{7121:function(e,t,r){r.r(t),r.d(t,{assets:function(){return c},contentTitle:function(){return s},default:function(){return d},frontMatter:function(){return l},metadata:function(){return u},toc:function(){return m}});var n=r(2685),o=r(1244),a=(r(7378),r(5318)),i=["components"],l={},s="or",u={unversionedId:"or/readme",id:"or/readme",title:"or",description:"patronum 1.11.0",source:"@site/../src/or/readme.md",sourceDirName:"or",slug:"/or/",permalink:"/methods/or/",draft:!1,editUrl:"https://github.com/effector/patronum/tree/main/src/../src/or/readme.md",tags:[],version:"current",frontMatter:{},sidebar:"methodsSidebar",previous:{title:"not",permalink:"/methods/not/"},next:{title:"pending",permalink:"/methods/pending/"}},c={},m=[{value:"Motivation",id:"motivation",level:3},{value:"Formulae",id:"formulae",level:3},{value:"Arguments",id:"arguments",level:3},{value:"Returns",id:"returns",level:3},{value:"Example",id:"example",level:3},{value:"Alternative",id:"alternative",level:4}],p={toc:m};function d(e){var t=e.components,r=(0,o.Z)(e,i);return(0,a.kt)("wrapper",(0,n.Z)({},p,r,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("h1",{id:"or"},"or"),(0,a.kt)("admonition",{title:"since",type:"note"},(0,a.kt)("p",{parentName:"admonition"},"patronum 1.11.0")),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-ts"},"import { or } from 'patronum';\n// or\nimport { or } from 'patronum/or';\n")),(0,a.kt)("h3",{id:"motivation"},"Motivation"),(0,a.kt)("p",null,"The method allows to check each passed store for truthy values.\nIt can be compared with ",(0,a.kt)("inlineCode",{parentName:"p"},"if (a || b || c || d)"),"."),(0,a.kt)("h3",{id:"formulae"},"Formulae"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-ts"},"$result = or(...stores);\n")),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("inlineCode",{parentName:"li"},"$result")," store contains ",(0,a.kt)("inlineCode",{parentName:"li"},"true"),' if at least one of passed store contains "truthy" value.')),(0,a.kt)("h3",{id:"arguments"},"Arguments"),(0,a.kt)("p",null,"The method receives any amount of arguments."),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("inlineCode",{parentName:"li"},"...stores: Array<Store<T>>")," \u2014 Each argument must be store with a value of any kind.")),(0,a.kt)("h3",{id:"returns"},"Returns"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("inlineCode",{parentName:"li"},"$result: Store<boolean>")," \u2014 The store contains ",(0,a.kt)("inlineCode",{parentName:"li"},"false")," if each passed store in ",(0,a.kt)("inlineCode",{parentName:"li"},"stores"),' contains "falsey" value')),(0,a.kt)("h3",{id:"example"},"Example"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-ts"},"const $isAuthorized = createStore(true);\nconst $immediateOrder = createStore(false);\nconst $mocksForDemo = createStore(false);\n\nconst $allowedToShow = or($isAuthorized, $immediateOrder, $mocksForDemo);\nconsole.assert(true === $allowedToShow.getState());\n")),(0,a.kt)("p",null,(0,a.kt)("a",{parentName:"p",href:"https://share.effector.dev/H9cDYEp5"},"Try it")),(0,a.kt)("h4",{id:"alternative"},"Alternative"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-ts"},"import { combine, createSTore } from 'effector';\n\nconst $isAuthorized = createStore(true);\nconst $immediateOrder = createStore(false);\nconst $mocksForDemo = createStore(false);\n\nconst $allowedToShow = combine(\n  $isAuthorized,\n  $immediateOrder,\n  $mocksForDemo,\n  (isAuthorized, immediateOrder, mocksForDemo) =>\n    isAuthorized || immediateOrder || mocksForDemo,\n);\nconsole.assert(true === $allowedToShow.getState());\n")))}d.isMDXComponent=!0},5318:function(e,t,r){r.d(t,{Zo:function(){return c},kt:function(){return d}});var n=r(7378);function o(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function a(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function i(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?a(Object(r),!0).forEach((function(t){o(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):a(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function l(e,t){if(null==e)return{};var r,n,o=function(e,t){if(null==e)return{};var r,n,o={},a=Object.keys(e);for(n=0;n<a.length;n++)r=a[n],t.indexOf(r)>=0||(o[r]=e[r]);return o}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(n=0;n<a.length;n++)r=a[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(o[r]=e[r])}return o}var s=n.createContext({}),u=function(e){var t=n.useContext(s),r=t;return e&&(r="function"==typeof e?e(t):i(i({},t),e)),r},c=function(e){var t=u(e.components);return n.createElement(s.Provider,{value:t},e.children)},m={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},p=n.forwardRef((function(e,t){var r=e.components,o=e.mdxType,a=e.originalType,s=e.parentName,c=l(e,["components","mdxType","originalType","parentName"]),p=u(r),d=o,f=p["".concat(s,".").concat(d)]||p[d]||m[d]||a;return r?n.createElement(f,i(i({ref:t},c),{},{components:r})):n.createElement(f,i({ref:t},c))}));function d(e,t){var r=arguments,o=t&&t.mdxType;if("string"==typeof e||o){var a=r.length,i=new Array(a);i[0]=p;var l={};for(var s in t)hasOwnProperty.call(t,s)&&(l[s]=t[s]);l.originalType=e,l.mdxType="string"==typeof e?e:o,i[1]=l;for(var u=2;u<a;u++)i[u]=r[u];return n.createElement.apply(null,i)}return n.createElement.apply(null,r)}p.displayName="MDXCreateElement"}}]);