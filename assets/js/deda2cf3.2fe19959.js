"use strict";(self.webpackChunkwebsite=self.webpackChunkwebsite||[]).push([[493],{6002:function(e,t,n){n.r(t),n.d(t,{assets:function(){return d},contentTitle:function(){return u},default:function(){return s},frontMatter:function(){return l},metadata:function(){return m},toc:function(){return c}});var r=n(5773),a=n(808),o=(n(7378),n(5318)),i=["components"],l={},u="debounce",m={unversionedId:"debounce/readme",id:"debounce/readme",title:"debounce",description:"debounce({ source, timeout: number })",source:"@site/../src/debounce/readme.md",sourceDirName:"debounce",slug:"/debounce/",permalink:"/methods/debounce/",draft:!1,editUrl:"https://github.com/effector/patronum/tree/main/src/../src/debounce/readme.md",tags:[],version:"current",frontMatter:{},sidebar:"methodsSidebar",previous:{title:"condition",permalink:"/methods/condition/"},next:{title:"debug",permalink:"/methods/debug/"}},d={},c=[{value:"<code>debounce({ source, timeout: number })</code>",id:"debounce-source-timeout-number-",level:2},{value:"Motivation",id:"motivation",level:3},{value:"Formulae",id:"formulae",level:3},{value:"Arguments",id:"arguments",level:3},{value:"Returns",id:"returns",level:3},{value:"Example",id:"example",level:3},{value:"<code>debounce({ source, timeout: number, target })</code>",id:"debounce-source-timeout-number-target-",level:2},{value:"Motivation",id:"motivation-1",level:3},{value:"Formulae",id:"formulae-1",level:3},{value:"Arguments",id:"arguments-1",level:3},{value:"Returns",id:"returns-1",level:3},{value:"Example",id:"example-1",level:3}],p={toc:c};function s(e){var t=e.components,n=(0,a.Z)(e,i);return(0,o.kt)("wrapper",(0,r.Z)({},p,n,{components:t,mdxType:"MDXLayout"}),(0,o.kt)("h1",{id:"debounce"},"debounce"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-ts"},"import { debounce } from 'patronum/debounce';\n")),(0,o.kt)("h2",{id:"debounce-source-timeout-number-"},(0,o.kt)("inlineCode",{parentName:"h2"},"debounce({ source, timeout: number })")),(0,o.kt)("h3",{id:"motivation"},"Motivation"),(0,o.kt)("p",null,"Method creates a new event, that will be triggered after some time. It is useful for handling user events such as scrolling, mouse movement, or keypressing.\nIt is useful when you want to pass created event immediately to another method as argument."),(0,o.kt)("h3",{id:"formulae"},"Formulae"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-ts"},"event = debounce({ source, timeout: number });\n")),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},"Wait for ",(0,o.kt)("inlineCode",{parentName:"li"},"timeout")," after the last time ",(0,o.kt)("inlineCode",{parentName:"li"},"source")," was triggered, then trigger ",(0,o.kt)("inlineCode",{parentName:"li"},"event")," with payload of the ",(0,o.kt)("inlineCode",{parentName:"li"},"source"))),(0,o.kt)("h3",{id:"arguments"},"Arguments"),(0,o.kt)("ol",null,(0,o.kt)("li",{parentName:"ol"},(0,o.kt)("inlineCode",{parentName:"li"},"source")," ",(0,o.kt)("inlineCode",{parentName:"li"},"(Event<T>")," | ",(0,o.kt)("inlineCode",{parentName:"li"},"Store<T>")," | ",(0,o.kt)("inlineCode",{parentName:"li"},"Effect<T>)")," \u2014 Source unit, data from this unit used by the ",(0,o.kt)("inlineCode",{parentName:"li"},"event")),(0,o.kt)("li",{parentName:"ol"},(0,o.kt)("inlineCode",{parentName:"li"},"timeout")," ",(0,o.kt)("inlineCode",{parentName:"li"},"(number)")," \u2014 time to wait before trigger ",(0,o.kt)("inlineCode",{parentName:"li"},"event"))),(0,o.kt)("h3",{id:"returns"},"Returns"),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("inlineCode",{parentName:"li"},"event")," ",(0,o.kt)("inlineCode",{parentName:"li"},"(Event<T>)")," \u2014 New event, that triggered after delay")),(0,o.kt)("h3",{id:"example"},"Example"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-ts"},"import { createEvent } from 'effector';\nimport { debounce } from 'patronum/debounce';\n\nconst DEBOUNCE_TIMEOUT_IN_MS = 200;\n\nconst someHappened = createEvent<number>();\nconst debounced = debounce({\n  source: someHappened,\n  timeout: DEBOUNCE_TIMEOUT_IN_MS,\n});\n\ndebounced.watch((payload) => {\n  console.info('someHappened now', payload);\n});\n\nsomeHappened(1);\nsomeHappened(2);\nsomeHappened(3);\nsomeHappened(4);\n\n// someHappened now 4\n")),(0,o.kt)("h2",{id:"debounce-source-timeout-number-target-"},(0,o.kt)("inlineCode",{parentName:"h2"},"debounce({ source, timeout: number, target })")),(0,o.kt)("h3",{id:"motivation-1"},"Motivation"),(0,o.kt)("p",null,"This overload receives target as argument, that will be triggered after timeout.\nIt is useful when you already have an unit that you need to trigger."),(0,o.kt)("h3",{id:"formulae-1"},"Formulae"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-ts"},"event = debounce({ source, timeout: number, target });\n")),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},"Wait for ",(0,o.kt)("inlineCode",{parentName:"li"},"timeout")," after the last time ",(0,o.kt)("inlineCode",{parentName:"li"},"source")," was triggered and call ",(0,o.kt)("inlineCode",{parentName:"li"},"target")," with data from the ",(0,o.kt)("inlineCode",{parentName:"li"},"source"))),(0,o.kt)("h3",{id:"arguments-1"},"Arguments"),(0,o.kt)("ol",null,(0,o.kt)("li",{parentName:"ol"},(0,o.kt)("inlineCode",{parentName:"li"},"source")," ",(0,o.kt)("inlineCode",{parentName:"li"},"(Event<T>")," | ",(0,o.kt)("inlineCode",{parentName:"li"},"Store<T>")," | ",(0,o.kt)("inlineCode",{parentName:"li"},"Effect<T>)")," \u2014 Source unit, data from this unit used to trigger ",(0,o.kt)("inlineCode",{parentName:"li"},"target")," with payload of the ",(0,o.kt)("inlineCode",{parentName:"li"},"source")),(0,o.kt)("li",{parentName:"ol"},(0,o.kt)("inlineCode",{parentName:"li"},"timeout")," ",(0,o.kt)("inlineCode",{parentName:"li"},"(number)")," \u2014 time to wait before trigger ",(0,o.kt)("inlineCode",{parentName:"li"},"event")),(0,o.kt)("li",{parentName:"ol"},(0,o.kt)("inlineCode",{parentName:"li"},"target")," ",(0,o.kt)("inlineCode",{parentName:"li"},"(Event<T>")," | ",(0,o.kt)("inlineCode",{parentName:"li"},"Store<T>")," | ",(0,o.kt)("inlineCode",{parentName:"li"},"Effect<T>)")," \u2014 Target unit, data from the ",(0,o.kt)("inlineCode",{parentName:"li"},"source")," will be passed to this unit")),(0,o.kt)("h3",{id:"returns-1"},"Returns"),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("inlineCode",{parentName:"li"},"target")," ",(0,o.kt)("inlineCode",{parentName:"li"},"(Event<T>")," | ",(0,o.kt)("inlineCode",{parentName:"li"},"Store<T>")," | ",(0,o.kt)("inlineCode",{parentName:"li"},"Effect<T>)")," \u2014 Target unit that was passed to input argument ",(0,o.kt)("inlineCode",{parentName:"li"},"target"))),(0,o.kt)("h3",{id:"example-1"},"Example"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-ts"},"import { createEvent, createStore } from 'effector';\nimport { debounce } from 'patronum/debounce';\n\nconst DEBOUNCE_TIMEOUT_IN_MS = 200;\n\nconst someHappened = createEvent<number>();\nconst target = createStore<number>(0);\nconst debounced = debounce({\n  source: someHappened,\n  timeout: DEBOUNCE_TIMEOUT_IN_MS,\n  target,\n});\n\ndebounced.watch((payload) => {\n  console.info('someHappened now', payload);\n});\n\ntarget.watch((payload) => {\n  console.info('got data', payload);\n});\n\nsomeHappened(1);\nsomeHappened(2);\nsomeHappened(3);\nsomeHappened(4);\n\n// someHappened now 4\n// got data 4\n")))}s.isMDXComponent=!0},5318:function(e,t,n){n.d(t,{Zo:function(){return d},kt:function(){return s}});var r=n(7378);function a(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function o(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function i(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?o(Object(n),!0).forEach((function(t){a(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):o(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function l(e,t){if(null==e)return{};var n,r,a=function(e,t){if(null==e)return{};var n,r,a={},o=Object.keys(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var u=r.createContext({}),m=function(e){var t=r.useContext(u),n=t;return e&&(n="function"==typeof e?e(t):i(i({},t),e)),n},d=function(e){var t=m(e.components);return r.createElement(u.Provider,{value:t},e.children)},c={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},p=r.forwardRef((function(e,t){var n=e.components,a=e.mdxType,o=e.originalType,u=e.parentName,d=l(e,["components","mdxType","originalType","parentName"]),p=m(n),s=a,f=p["".concat(u,".").concat(s)]||p[s]||c[s]||o;return n?r.createElement(f,i(i({ref:t},d),{},{components:n})):r.createElement(f,i({ref:t},d))}));function s(e,t){var n=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var o=n.length,i=new Array(o);i[0]=p;var l={};for(var u in t)hasOwnProperty.call(t,u)&&(l[u]=t[u]);l.originalType=e,l.mdxType="string"==typeof e?e:a,i[1]=l;for(var m=2;m<o;m++)i[m]=n[m];return r.createElement.apply(null,i)}return r.createElement.apply(null,n)}p.displayName="MDXCreateElement"}}]);