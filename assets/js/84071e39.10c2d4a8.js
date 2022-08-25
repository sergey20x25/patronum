"use strict";(self.webpackChunkwebsite=self.webpackChunkwebsite||[]).push([[231],{103:function(e,n,t){t.r(n),t.d(n,{assets:function(){return d},contentTitle:function(){return s},default:function(){return u},frontMatter:function(){return l},metadata:function(){return p},toc:function(){return c}});var r=t(2685),a=t(1244),o=(t(7378),t(5318)),i=["components"],l={},s="pending",p={unversionedId:"pending/readme",id:"pending/readme",title:"pending",description:"pending({ effects: [] })",source:"@site/../src/pending/readme.md",sourceDirName:"pending",slug:"/pending/",permalink:"/methods/pending/",draft:!1,editUrl:"https://github.com/effector/patronum/tree/main/src/../src/pending/readme.md",tags:[],version:"current",frontMatter:{},sidebar:"methodsSidebar",previous:{title:"or",permalink:"/methods/or/"},next:{title:"reset",permalink:"/methods/reset/"}},d={},c=[{value:"<code>pending({ effects: [] })</code>",id:"pending-effects--",level:2},{value:"Motivation",id:"motivation",level:3},{value:"Formulae",id:"formulae",level:3},{value:"Arguments",id:"arguments",level:3},{value:"Returns",id:"returns",level:3},{value:"Example",id:"example",level:3},{value:"<code>pending({ domain })</code>",id:"pending-domain-",level:2},{value:"Motivation",id:"motivation-1",level:3},{value:"Formulae",id:"formulae-1",level:3},{value:"Arguments",id:"arguments-1",level:3},{value:"Returns",id:"returns-1",level:3},{value:"Example",id:"example-1",level:3},{value:"Strategy",id:"strategy",level:2},{value:"Example",id:"example-2",level:3}],m={toc:c};function u(e){var n=e.components,t=(0,a.Z)(e,i);return(0,o.kt)("wrapper",(0,r.Z)({},m,t,{components:n,mdxType:"MDXLayout"}),(0,o.kt)("h1",{id:"pending"},"pending"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-ts"},"import { pending } from 'patronum';\n// or\nimport { pending } from 'patronum/pending';\n")),(0,o.kt)("h2",{id:"pending-effects--"},(0,o.kt)("inlineCode",{parentName:"h2"},"pending({ effects: [] })")),(0,o.kt)("h3",{id:"motivation"},"Motivation"),(0,o.kt)("p",null,"This overload allows to read pending state of passed effects. It is usef when\nyou want to show loading state of the whole application."),(0,o.kt)("h3",{id:"formulae"},"Formulae"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-ts"},"$inProcess = pending({ effects: [fx1, fx2], of: Strategy });\n")),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},"When ",(0,o.kt)("inlineCode",{parentName:"li"},"effects")," pending state, result will be ",(0,o.kt)("inlineCode",{parentName:"li"},"true")),(0,o.kt)("li",{parentName:"ul"},"The ",(0,o.kt)("inlineCode",{parentName:"li"},"of")," parameter selects strategy")),(0,o.kt)("h3",{id:"arguments"},"Arguments"),(0,o.kt)("ol",null,(0,o.kt)("li",{parentName:"ol"},(0,o.kt)("inlineCode",{parentName:"li"},"effects")," ",(0,o.kt)("inlineCode",{parentName:"li"},"(Array<Effect<any, any, any>>)")," - array of any effects"),(0,o.kt)("li",{parentName:"ol"},(0,o.kt)("inlineCode",{parentName:"li"},"of")," ",(0,o.kt)("inlineCode",{parentName:"li"},'("some" | "every")')," \u2014 Optional. Select strategy of combining pendings\nof differents effects. Default ",(0,o.kt)("inlineCode",{parentName:"li"},'"some"'))),(0,o.kt)("admonition",{title:"since",type:"note"},(0,o.kt)("p",{parentName:"admonition"},"The ",(0,o.kt)("inlineCode",{parentName:"p"},"of")," argument was added since patronum 1.1.0")),(0,o.kt)("h3",{id:"returns"},"Returns"),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("inlineCode",{parentName:"li"},"$inProcess")," ",(0,o.kt)("inlineCode",{parentName:"li"},"(Store<boolean>)")," - Store with boolean state")),(0,o.kt)("h3",{id:"example"},"Example"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-ts"},"import { createEffect } from 'effector';\nimport { pending } from 'patronum/pending';\n\nconst loadFirst = createEffect(() => Promise.resolve(null));\nconst loadSecond = createEffect(() => Promise.resolve(2));\nconst $processing = pending({ effects: [loadFirst, loadSecond] });\n\n$processing.watch((processing) => console.info(`processing: ${processing}`));\n// => processing: false\n\nloadFirst();\nloadSecond();\n// => processing: true\n")),(0,o.kt)("h2",{id:"pending-domain-"},(0,o.kt)("inlineCode",{parentName:"h2"},"pending({ domain })")),(0,o.kt)("admonition",{title:"since",type:"note"},(0,o.kt)("p",{parentName:"admonition"},"patronum 1.1.0")),(0,o.kt)("h3",{id:"motivation-1"},"Motivation"),(0,o.kt)("p",null,"This overload allows to read pending state of created effects in the domain. It\nis usef when you want to show loading state of the whole application."),(0,o.kt)("h3",{id:"formulae-1"},"Formulae"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-ts"},"$inProcess = pending({ domain, of: Strategy });\n")),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},"When an effect created in the ",(0,o.kt)("inlineCode",{parentName:"li"},"domain")," in pending state, result will be ",(0,o.kt)("inlineCode",{parentName:"li"},"true")),(0,o.kt)("li",{parentName:"ul"},"The ",(0,o.kt)("inlineCode",{parentName:"li"},"of")," parameter selects strategy")),(0,o.kt)("h3",{id:"arguments-1"},"Arguments"),(0,o.kt)("ol",null,(0,o.kt)("li",{parentName:"ol"},(0,o.kt)("inlineCode",{parentName:"li"},"domain")," ",(0,o.kt)("inlineCode",{parentName:"li"},"(Domain)")," - Effector domain with at least one effect"),(0,o.kt)("li",{parentName:"ol"},(0,o.kt)("inlineCode",{parentName:"li"},"of")," ",(0,o.kt)("inlineCode",{parentName:"li"},'("some" | "every")')," \u2014 Optional. Select strategy of combining pendings\nof differents effects. Default ",(0,o.kt)("inlineCode",{parentName:"li"},'"some"'))),(0,o.kt)("h3",{id:"returns-1"},"Returns"),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("inlineCode",{parentName:"li"},"$inProcess")," ",(0,o.kt)("inlineCode",{parentName:"li"},"(Store<boolean>)")," - Store with boolean state")),(0,o.kt)("h3",{id:"example-1"},"Example"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-ts"},"import { createDomain } from 'effector';\nimport { pending } from 'patronum/pending';\n\nconst app = createDomain();\nconst loadFirst = app.createEffect(() => Promise.resolve(null));\nconst loadSecond = app.createEffect(() => Promise.resolve(2));\nconst $processing = pending({ domain: app });\n\n$processing.watch((processing) => console.info(`processing: ${processing}`));\n// => processing: false\n\nloadFirst();\nloadSecond();\n// => processing: true\n")),(0,o.kt)("h2",{id:"strategy"},"Strategy"),(0,o.kt)("p",null,"There available two options:"),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("inlineCode",{parentName:"li"},"some")," \u2014 default strategy when ",(0,o.kt)("inlineCode",{parentName:"li"},"of")," parameter is not provided. At least one\neffect must be in pending state."),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("inlineCode",{parentName:"li"},"every")," \u2014 each effect must be in pending state.")),(0,o.kt)("h3",{id:"example-2"},"Example"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-ts"},"import { createEffect } from 'effector';\nimport { pending } from 'patronum/pending';\n\nconst loadFirst = createEffect(() => Promise.resolve(null));\nconst loadSecond = createEffect(() => Promise.resolve(2));\n\nconst $pending = pending({ effects: [loadFirst, loadSecond], of: 'every' });\n\n// When no effects is loading, $pending will be true\n\n// If only one is loading, also will be false\nloadFirst();\n\n// But after running the second effect, $pending will be true\nloadSecond();\n\n$pending.watch(console.log); // true\n")))}u.isMDXComponent=!0},5318:function(e,n,t){t.d(n,{Zo:function(){return d},kt:function(){return u}});var r=t(7378);function a(e,n,t){return n in e?Object.defineProperty(e,n,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[n]=t,e}function o(e,n){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);n&&(r=r.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),t.push.apply(t,r)}return t}function i(e){for(var n=1;n<arguments.length;n++){var t=null!=arguments[n]?arguments[n]:{};n%2?o(Object(t),!0).forEach((function(n){a(e,n,t[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):o(Object(t)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(t,n))}))}return e}function l(e,n){if(null==e)return{};var t,r,a=function(e,n){if(null==e)return{};var t,r,a={},o=Object.keys(e);for(r=0;r<o.length;r++)t=o[r],n.indexOf(t)>=0||(a[t]=e[t]);return a}(e,n);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(r=0;r<o.length;r++)t=o[r],n.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(a[t]=e[t])}return a}var s=r.createContext({}),p=function(e){var n=r.useContext(s),t=n;return e&&(t="function"==typeof e?e(n):i(i({},n),e)),t},d=function(e){var n=p(e.components);return r.createElement(s.Provider,{value:n},e.children)},c={inlineCode:"code",wrapper:function(e){var n=e.children;return r.createElement(r.Fragment,{},n)}},m=r.forwardRef((function(e,n){var t=e.components,a=e.mdxType,o=e.originalType,s=e.parentName,d=l(e,["components","mdxType","originalType","parentName"]),m=p(t),u=a,f=m["".concat(s,".").concat(u)]||m[u]||c[u]||o;return t?r.createElement(f,i(i({ref:n},d),{},{components:t})):r.createElement(f,i({ref:n},d))}));function u(e,n){var t=arguments,a=n&&n.mdxType;if("string"==typeof e||a){var o=t.length,i=new Array(o);i[0]=m;var l={};for(var s in n)hasOwnProperty.call(n,s)&&(l[s]=n[s]);l.originalType=e,l.mdxType="string"==typeof e?e:a,i[1]=l;for(var p=2;p<o;p++)i[p]=t[p];return r.createElement.apply(null,i)}return r.createElement.apply(null,t)}m.displayName="MDXCreateElement"}}]);