"use strict";(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[8561],{1970:(e,t,a)=>{a.r(t),a.d(t,{default:()=>l,meta:()=>o});var r=a(95155),i=a(40980);function n({className:e,dots:t=3,...a}){return(0,r.jsxs)(r.Fragment,{children:[(0,r.jsx)("style",{children:`
        @keyframes loading-ui-typing {
          0%,
          100% {
            transform: translateY(0);
            opacity: 0.5;
          }

          50% {
            transform: translateY(-50%);
            opacity: 1;
          }
        }
      `}),(0,r.jsxs)("span",{role:"status",className:(0,i.cn)("inline-flex items-center gap-[12%]",e),...a,children:[Array.from({length:t},(e,t)=>(0,r.jsx)("span",{"aria-hidden":"true",className:"inline-block aspect-square grow rounded-full bg-current",style:{animation:"loading-ui-typing var(--duration, 1s) infinite",animationDelay:`calc(var(--delay, 160ms) * ${t})`}},t)),(0,r.jsx)("span",{className:"sr-only",children:"Loading"})]})]})}var s=a(53161);let o=(0,a(10482).aT)({id:"LOAD-typing",source:"loading-ui",zh_name:"打字三点",en_name:"Typing",summary_zh:"三个圆点依次上跳落下，聊天里「对方正在输入」的那种；适合消息气泡内联。",hint_zh:"看三点轮流上跳",category:"加载",triggers:["auto"],tags_motion:["弹性"],registry_item:"typing",component:{path:"src/registry/loading-ui/typing.tsx",export:"Typing"},deps:[],controls:[{name:"size",label_zh:"总宽",kind:"range",min:16,max:96,step:4,default:32,unit:"px"},{name:"dots",label_zh:"圆点数",kind:"range",min:1,max:6,step:1,default:3},{name:"duration",label_zh:"一轮用时",kind:"range",min:.3,max:3,step:.1,default:1,unit:"s"},{name:"color",label_zh:"颜色",kind:"color",default:"#6366f1"}],preset_default:{size:32,dots:3,duration:1,color:"#6366f1"},presets:[],usage_template:'<Typing dots={{dots}} style={{ width: {{size}}, color: "{{color}}", "--duration": "{{duration}}s" }} />'});function l({props:e,onFire:t,replayKey:a}){return(0,s.b)(t),(0,r.jsx)("div",{className:"flex items-center justify-center","data-demo-trigger":!0,children:(0,r.jsx)(n,{dots:e.dots,style:{width:e.size,color:e.color,"--duration":`${e.duration}s`}})},a)}},3881:(e,t,a)=>{a.r(t),a.d(t,{default:()=>d,meta:()=>l});var r=a(95155),i=a(40980);let n=["█","▓","▒","░"];function s({className:e,blocks:t=n,...a}){let o=n.map((e,a)=>t[a]??n[a]);return(0,r.jsxs)(r.Fragment,{children:[(0,r.jsx)("style",{children:`
        @keyframes loading-ui-infinity-square-snake {
          0%,
          100% {
            transform: translate(4ch, 0);
          }

          12.5% {
            transform: translate(0, 0);
          }

          25% {
            transform: translate(0, 4ch);
          }

          37.5% {
            transform: translate(4ch, 4ch);
          }

          50% {
            transform: translate(4ch, 0);
          }

          62.5% {
            transform: translate(8ch, 0);
          }

          75% {
            transform: translate(8ch, 4ch);
          }

          87.5% {
            transform: translate(4ch, 4ch);
          }
        }
      `}),(0,r.jsxs)("span",{role:"status",className:(0,i.cn)("relative inline-flex h-[5ch] w-[9ch] overflow-hidden font-mono text-xl leading-none text-current select-none",e),...a,children:[o.map((e,t)=>(0,r.jsx)("span",{"aria-hidden":"true",className:"pointer-events-none absolute top-0 left-0 flex h-[1ch] w-[1ch] items-center justify-center",style:{animation:"loading-ui-infinity-square-snake var(--duration, 3.2s) linear infinite",animationDelay:`calc(var(--delay, 0.1s) * -${o.length-1-t})`},children:e},`${e}-${t}`)),(0,r.jsx)("span",{className:"sr-only",children:"Loading"})]})]})}var o=a(53161);let l=(0,a(10482).aT)({id:"LOAD-infinity-square-snake",source:"loading-ui",zh_name:"8字方块蛇",en_name:"Infinity Square Snake",summary_zh:"四枚深浅字符块首尾相连，沿 8 字路线绕行，像贪吃蛇在跑；终端风等待。",hint_zh:"看它绕完 8 字",category:"加载",triggers:["auto"],tags_motion:["克制"],registry_item:"infinity-square-snake",component:{path:"src/registry/loading-ui/infinity-square-snake.tsx",export:"InfinitySquareSnake"},deps:[],controls:[{name:"fontSize",label_zh:"字号",kind:"range",min:12,max:40,step:2,default:20,unit:"px"},{name:"duration",label_zh:"一圈用时",kind:"range",min:1,max:8,step:.1,default:3.2,unit:"s"},{name:"color",label_zh:"颜色",kind:"color",default:"#6366f1"}],preset_default:{fontSize:20,duration:3.2,color:"#6366f1"},presets:[],usage_template:'<InfinitySquareSnake style={{ fontSize: {{fontSize}}, color: "{{color}}", "--duration": "{{duration}}s" }} />'});function d({props:e,onFire:t,replayKey:a}){return(0,o.b)(t),(0,r.jsx)("div",{className:"flex items-center justify-center","data-demo-trigger":!0,children:(0,r.jsx)(s,{style:{fontSize:e.fontSize,color:e.color,"--duration":`${e.duration}s`}})},a)}},4601:(e,t,a)=>{a.r(t),a.d(t,{default:()=>l,meta:()=>o});var r=a(95155),i=a(40980);function n({className:e,bars:t=3,...a}){return(0,r.jsxs)(r.Fragment,{children:[(0,r.jsx)("style",{children:`
        @keyframes loading-ui-wave-bars {
          0%,
          100% {
            transform: scaleY(1);
            opacity: 0.5;
          }

          50% {
            transform: scaleY(0.6);
            opacity: 1;
          }
        }
      `}),(0,r.jsxs)("span",{role:"status",className:(0,i.cn)("inline-flex items-stretch gap-[5%]",e),...a,children:[Array.from({length:t},(e,a)=>(0,r.jsx)("span",{"aria-hidden":"true",className:"inline-block h-full rounded-[1px] bg-current",style:{width:`${100/t}%`,animation:"loading-ui-wave-bars var(--duration, 1.2s) ease-in-out infinite",animationDelay:`calc(var(--delay, 0.2s) * ${a})`}},a)),(0,r.jsx)("span",{className:"sr-only",children:"Loading"})]})]})}var s=a(53161);let o=(0,a(10482).aT)({id:"LOAD-bars",source:"loading-ui",zh_name:"三柱伸缩",en_name:"Bars",summary_zh:"几根竖柱依次缩短再伸长，像均衡器；轻量等待。",hint_zh:"看柱子轮流缩",category:"加载",triggers:["auto"],tags_motion:["克制"],registry_item:"bars",component:{path:"src/registry/loading-ui/bars.tsx",export:"Bars"},deps:[],controls:[{name:"size",label_zh:"尺寸",kind:"range",min:16,max:96,step:4,default:40,unit:"px"},{name:"bars",label_zh:"柱数",kind:"range",min:2,max:8,step:1,default:3},{name:"duration",label_zh:"一轮用时",kind:"range",min:.4,max:4,step:.1,default:1.2,unit:"s"},{name:"color",label_zh:"颜色",kind:"color",default:"#6366f1"}],preset_default:{size:40,bars:3,duration:1.2,color:"#6366f1"},presets:[],usage_template:'<Bars bars={{bars}} style={{ width: {{size}}, height: {{size}}, color: "{{color}}", "--duration": "{{duration}}s" }} />'});function l({props:e,onFire:t,replayKey:a}){return(0,s.b)(t),(0,r.jsx)("div",{className:"flex items-center justify-center","data-demo-trigger":!0,children:(0,r.jsx)(n,{bars:e.bars,style:{width:e.size,height:e.size,color:e.color,"--duration":`${e.duration}s`}})},a)}},4687:(e,t,a)=>{a.r(t),a.d(t,{default:()=>d,meta:()=>l});var r=a(95155),i=a(12115),n=a(40980);function s({className:e,style:t,...a}){let o=(0,i.useId)().replace(/:/g,""),l=`${o}-leading`,d=`${o}-trailing`;return(0,r.jsxs)(r.Fragment,{children:[(0,r.jsx)("style",{children:`
        @keyframes loading-ui-fade-arc-spin {
          to {
            transform: rotate(360deg);
          }
        }
      `}),(0,r.jsxs)("svg",{viewBox:"0 0 24 24",fill:"none",xmlns:"http://www.w3.org/2000/svg",role:"status",className:(0,n.cn)(e),style:{animationName:"loading-ui-fade-arc-spin",animationDuration:"var(--duration, 1s)",animationTimingFunction:"linear",animationIterationCount:"infinite",...t},...a,children:[(0,r.jsxs)("defs",{children:[(0,r.jsxs)("linearGradient",{id:l,x1:"50%",x2:"50%",y1:"5.271%",y2:"91.793%",children:[(0,r.jsx)("stop",{offset:"0%",stopColor:"currentColor"}),(0,r.jsx)("stop",{offset:"100%",stopColor:"currentColor",stopOpacity:"0.55"})]}),(0,r.jsxs)("linearGradient",{id:d,x1:"50%",x2:"50%",y1:"15.24%",y2:"87.15%",children:[(0,r.jsx)("stop",{offset:"0%",stopColor:"currentColor",stopOpacity:"0"}),(0,r.jsx)("stop",{offset:"100%",stopColor:"currentColor",stopOpacity:"0.55"})]})]}),(0,r.jsxs)("g",{fill:"none",children:[(0,r.jsx)("path",{d:"M8.749.021a1.5 1.5 0 0 1 .497 2.958A7.5 7.5 0 0 0 3 10.375a7.5 7.5 0 0 0 7.5 7.5v3c-5.799 0-10.5-4.7-10.5-10.5C0 5.23 3.726.865 8.749.021",fill:`url(#${l})`,transform:"translate(1.5 1.625)"}),(0,r.jsx)("path",{d:"M15.392 2.673a1.5 1.5 0 0 1 2.119-.115A10.48 10.48 0 0 1 21 10.375c0 5.8-4.701 10.5-10.5 10.5v-3a7.5 7.5 0 0 0 5.007-13.084a1.5 1.5 0 0 1-.115-2.118",fill:`url(#${d})`,transform:"translate(1.5 1.625)"})]})]})]})}var o=a(53161);let l=(0,a(10482).aT)({id:"LOAD-fade-arc",source:"loading-ui",zh_name:"渐隐弧旋转",en_name:"Fade Arc",summary_zh:"一段实色弧带着渐隐尾巴转圈，尾端慢慢淡到透明；比普通弧多一点方向感的轻量等待。",hint_zh:"看尾巴淡出",category:"加载",triggers:["auto"],tags_motion:["克制"],registry_item:"fade-arc",component:{path:"src/registry/loading-ui/fade-arc.tsx",export:"FadeArc"},deps:[],controls:[{name:"size",label_zh:"尺寸",kind:"range",min:16,max:96,step:4,default:40,unit:"px"},{name:"duration",label_zh:"一圈用时",kind:"range",min:.3,max:4,step:.1,default:1,unit:"s"},{name:"color",label_zh:"颜色",kind:"color",default:"#6366f1"}],preset_default:{size:40,duration:1,color:"#6366f1"},presets:[],usage_template:'<FadeArc style={{ width: {{size}}, height: {{size}}, color: "{{color}}", "--duration": "{{duration}}s" }} />'});function d({props:e,onFire:t,replayKey:a}){return(0,o.b)(t),(0,r.jsx)("div",{className:"flex items-center justify-center","data-demo-trigger":!0,children:(0,r.jsx)(s,{style:{width:e.size,height:e.size,color:e.color,"--duration":`${e.duration}s`}})},a)}},8116:(e,t,a)=>{a.r(t),a.d(t,{default:()=>l,meta:()=>o});var r=a(95155),i=a(40980);function n({className:e,style:t,...a}){return(0,r.jsxs)(r.Fragment,{children:[(0,r.jsx)("style",{children:`
        @keyframes loading-ui-skeleton-pulse {
          50% {
            opacity: 0.5;
          }
        }
      `}),(0,r.jsx)("div",{"data-slot":"skeleton",className:(0,i.cn)("bg-muted rounded-md",e),style:{animationName:"loading-ui-skeleton-pulse",animationDuration:"var(--duration, 2s)",animationTimingFunction:"cubic-bezier(0.4, 0, 0.6, 1)",animationIterationCount:"infinite",...t},...a})]})}var s=a(53161);let o=(0,a(10482).aT)({id:"LOAD-skeleton",source:"loading-ui",zh_name:"骨架屏呼吸",en_name:"Skeleton",summary_zh:"灰色占位块整体明暗呼吸，用来占住内容位置；全页或列表加载时最常见的做法。",hint_zh:"看色块明暗呼吸",category:"加载",triggers:["auto"],tags_motion:["克制"],registry_item:"skeleton",component:{path:"src/registry/loading-ui/skeleton.tsx",export:"Skeleton"},deps:[],controls:[{name:"duration",label_zh:"一次呼吸用时",kind:"range",min:.8,max:5,step:.1,default:2,unit:"s"},{name:"color",label_zh:"骨架色",kind:"color",default:"#27272a"},{name:"radius",label_zh:"条形圆角",kind:"range",default:6,min:0,max:16,step:1,unit:"px"}],preset_default:{duration:2,color:"#27272a",radius:6},presets:[],usage_template:'<Skeleton className="h-4 w-48" style={{ backgroundColor: {{color}}, borderRadius: {{radius}}, "--duration": "{{duration}}s" } as React.CSSProperties} />'});function l({props:e,onFire:t,replayKey:a}){let i=e.color,o=e.radius;return(0,s.b)(t),(0,r.jsx)("div",{className:"flex items-center justify-center","data-demo-trigger":!0,children:(0,r.jsxs)("div",{className:"flex w-64 items-center gap-4",style:{"--demo-skeleton-color":i??"#27272a","--demo-skeleton-radius":`${o??6}px`,"--duration":`${e.duration}s`},children:[(0,r.jsx)(n,{style:{backgroundColor:"var(--demo-skeleton-color)"},className:"size-12 shrink-0 rounded-full"}),(0,r.jsxs)("div",{className:"flex flex-1 flex-col gap-2",children:[(0,r.jsx)(n,{style:{backgroundColor:"var(--demo-skeleton-color)",borderRadius:"var(--demo-skeleton-radius)"},className:"h-4 w-3/4"}),(0,r.jsx)(n,{style:{backgroundColor:"var(--demo-skeleton-color)",borderRadius:"var(--demo-skeleton-radius)"},className:"h-4 w-1/2"})]})]})},a)}},12418:(e,t,a)=>{a.r(t),a.d(t,{default:()=>l,meta:()=>o});var r=a(95155),i=a(40980);function n({className:e,...t}){return(0,r.jsxs)(r.Fragment,{children:[(0,r.jsx)("style",{children:`
        @keyframes loading-ui-concentric-ring-rotation {
          0% {
            transform: rotate(0deg);
          }

          100% {
            transform: rotate(360deg);
          }
        }
      `}),(0,r.jsxs)("span",{role:"status",className:(0,i.cn)("relative inline-block",e),style:{animation:"loading-ui-concentric-ring-rotation var(--duration, 1s) linear infinite"},...t,children:[(0,r.jsx)("span",{"aria-hidden":"true",className:"absolute inset-0 rounded-full border-2 border-current",style:{opacity:.25}}),(0,r.jsx)("span",{"aria-hidden":"true",className:"absolute top-1/2 left-1/2 rounded-full border-2 border-transparent border-b-current",style:{width:"83.333%",height:"83.333%",transform:"translate(-50%, -50%)"}}),(0,r.jsx)("span",{className:"sr-only",children:"Loading"})]})]})}var s=a(53161);let o=(0,a(10482).aT)({id:"LOAD-concentric-ring",source:"loading-ui",zh_name:"同心内弧",en_name:"Concentric Ring",summary_zh:"淡色外环里套一段实色内弧，整体一起转；比单弧多一层轮廓的轻量等待。",hint_zh:"看一圈",category:"加载",triggers:["auto"],tags_motion:["克制"],registry_item:"concentric-ring",component:{path:"src/registry/loading-ui/concentric-ring.tsx",export:"ConcentricRing"},deps:[],controls:[{name:"size",label_zh:"尺寸",kind:"range",min:16,max:96,step:4,default:40,unit:"px"},{name:"duration",label_zh:"一圈用时",kind:"range",min:.3,max:4,step:.1,default:1,unit:"s"},{name:"color",label_zh:"颜色",kind:"color",default:"#6366f1"}],preset_default:{size:40,duration:1,color:"#6366f1"},presets:[],usage_template:'<ConcentricRing style={{ width: {{size}}, height: {{size}}, color: "{{color}}", "--duration": "{{duration}}s" }} />'});function l({props:e,onFire:t,replayKey:a}){return(0,s.b)(t),(0,r.jsx)("div",{className:"flex items-center justify-center","data-demo-trigger":!0,children:(0,r.jsx)(n,{style:{width:e.size,height:e.size,color:e.color,"--duration":`${e.duration}s`}})},a)}},12467:(e,t,a)=>{a.r(t),a.d(t,{default:()=>d,meta:()=>l});var r=a(95155),i=a(40980);let n=["█","▓","▒"];function s({className:e,blocks:t=n,size:a=5,track:o="░",style:l,...d}){let c=Math.max(2,Math.floor(a)),u=n.map((e,a)=>t[a]??n[a]),m=Array.from({length:c*c},(e,t)=>{let a=Math.floor(t/c),r=t%c;return 0===a||a===c-1||0===r||r===c-1?o:" "});return(0,r.jsxs)(r.Fragment,{children:[(0,r.jsx)("style",{children:`
        @keyframes loading-ui-square-grid {
          0%,
          100% {
            transform: translate(0, 0);
          }

          25% {
            transform: translate(var(--loader-x), 0);
          }

          50% {
            transform: translate(var(--loader-x), var(--loader-y));
          }

          75% {
            transform: translate(0, var(--loader-y));
          }
        }
      `}),(0,r.jsxs)("span",{role:"status",className:(0,i.cn)("relative inline-flex h-[var(--loader-size)] w-[var(--loader-size)] overflow-hidden font-mono text-xl leading-none text-current select-none",e),style:{"--loader-size":`${c}ch`,"--loader-x":`${c-1}ch`,"--loader-y":`${c-1}ch`,...l},...d,children:[(0,r.jsx)("span",{"aria-hidden":"true",className:"pointer-events-none absolute inset-0 grid",style:{gridTemplateColumns:`repeat(${c}, 1ch)`,gridTemplateRows:`repeat(${c}, 1ch)`},children:m.map((e,t)=>(0,r.jsx)("span",{className:"flex h-[1ch] w-[1ch] items-center justify-center",children:e},t))}),u.map((e,t)=>(0,r.jsx)("span",{"aria-hidden":"true",className:(0,i.cn)("pointer-events-none absolute top-0 left-0 flex h-[1ch] w-[1ch] items-center justify-center",["z-30","z-20","z-10"][t]),style:{animation:"loading-ui-square-grid var(--duration, 2.8s) linear infinite",animationDelay:`calc(var(--delay, 0.06s) * ${t})`,backgroundColor:"var(--mask-color, var(--background))"},children:e},`${e}-${t}`)),(0,r.jsx)("span",{className:"sr-only",children:"Loading"})]})]})}var o=a(53161);let l=(0,a(10482).aT)({id:"LOAD-square-grid",source:"loading-ui",zh_name:"方框走边",en_name:"Square Grid",summary_zh:"浅色字符方框上三枚深色块匀速沿边绕圈；终端风等待。",hint_zh:"看它走完四边",category:"加载",triggers:["auto"],tags_motion:["克制"],registry_item:"square-grid",component:{path:"src/registry/loading-ui/square-grid.tsx",export:"SquareGrid"},deps:[],controls:[{name:"fontSize",label_zh:"字号",kind:"range",min:12,max:40,step:2,default:20,unit:"px"},{name:"cells",label_zh:"边长",kind:"range",min:3,max:9,step:1,default:5,unit:"格"},{name:"duration",label_zh:"一圈用时",kind:"range",min:1,max:8,step:.1,default:2.8,unit:"s"},{name:"color",label_zh:"颜色",kind:"color",default:"#6366f1"},{name:"maskColor",label_zh:"遮罩色",kind:"color",default:"#171717"}],preset_default:{fontSize:20,cells:5,duration:2.8,color:"#6366f1",maskColor:"#171717"},presets:[],usage_template:'<SquareGrid size={{cells}} style={{ fontSize: {{fontSize}}, color: "{{color}}", "--mask-color": {{maskColor}}, "--duration": "{{duration}}s" }} />'});function d({props:e,onFire:t,replayKey:a}){let i=e.maskColor;return(0,o.b)(t),(0,r.jsx)("div",{className:"flex items-center justify-center","data-demo-trigger":!0,children:(0,r.jsx)(s,{size:e.cells,style:{fontSize:e.fontSize,color:e.color,"--mask-color":i??"#171717","--duration":`${e.duration}s`}})},a)}},13696:(e,t,a)=>{a.r(t),a.d(t,{default:()=>l,meta:()=>o});var r=a(95155),i=a(40980);function n({className:e,style:t,...a}){return(0,r.jsxs)(r.Fragment,{children:[(0,r.jsx)("style",{children:`
        @keyframes loading-ui-arc-spin {
          to {
            transform: rotate(360deg);
          }
        }
      `}),(0,r.jsx)("div",{className:(0,i.cn)("rounded-full border-[5px] border-current/10 border-t-current",e),style:{animationName:"loading-ui-arc-spin",animationDuration:"var(--duration, 1s)",animationTimingFunction:"linear",animationIterationCount:"infinite",...t},...a})]})}var s=a(53161);let o=(0,a(10482).aT)({id:"LOAD-arc",source:"loading-ui",zh_name:"单弧旋转",en_name:"Arc",summary_zh:"淡色底圈上一段实色粗弧匀速转圈，最常见的加载指示；用作按钮内或局部区域的轻量等待。",hint_zh:"看一圈",category:"加载",triggers:["auto"],tags_motion:["克制"],registry_item:"arc",component:{path:"src/registry/loading-ui/arc.tsx",export:"Arc"},deps:[],controls:[{name:"size",label_zh:"尺寸",kind:"range",min:16,max:96,step:4,default:40,unit:"px"},{name:"duration",label_zh:"一圈用时",kind:"range",min:.3,max:4,step:.1,default:1,unit:"s"},{name:"color",label_zh:"颜色",kind:"color",default:"#6366f1"}],preset_default:{size:40,duration:1,color:"#6366f1"},presets:[],usage_template:'<Arc style={{ width: {{size}}, height: {{size}}, color: "{{color}}", "--duration": "{{duration}}s" }} />'});function l({props:e,onFire:t,replayKey:a}){return(0,s.b)(t),(0,r.jsx)("div",{className:"flex items-center justify-center","data-demo-trigger":!0,children:(0,r.jsx)(n,{style:{width:e.size,height:e.size,color:e.color,"--duration":`${e.duration}s`}})},a)}},14103:(e,t,a)=>{a.r(t),a.d(t,{default:()=>l,meta:()=>o});var r=a(95155),i=a(40980);function n({className:e,dots:t=3,...a}){return(0,r.jsxs)(r.Fragment,{children:[(0,r.jsx)("style",{children:`
        @keyframes loading-ui-bouncing-dots {
          0%,
          100% {
            transform: scale(0.8);
            opacity: 0.5;
          }

          50% {
            transform: scale(1.2);
            opacity: 1;
          }
        }
      `}),(0,r.jsxs)("span",{role:"status",className:(0,i.cn)("inline-flex items-center gap-[12%]",e),...a,children:[Array.from({length:t},(e,t)=>(0,r.jsx)("span",{"aria-hidden":"true",className:"inline-block aspect-square grow rounded-full bg-current",style:{animation:"loading-ui-bouncing-dots var(--duration, 1.4s) ease-in-out infinite",animationDelay:`calc(var(--delay, 0.2s) * ${t})`}},t)),(0,r.jsx)("span",{className:"sr-only",children:"Loading"})]})]})}var s=a(53161);let o=(0,a(10482).aT)({id:"LOAD-bouncing-dots",source:"loading-ui",zh_name:"三点弹跳",en_name:"Bouncing Dots",summary_zh:"三个圆点依次放大变亮再缩小变淡，像在原地弹跳；轻量等待。",hint_zh:"看三点轮流弹",category:"加载",triggers:["auto"],tags_motion:["弹性"],registry_item:"bouncing-dots",component:{path:"src/registry/loading-ui/bouncing-dots.tsx",export:"BouncingDots"},deps:[],controls:[{name:"size",label_zh:"总宽",kind:"range",min:16,max:96,step:4,default:32,unit:"px"},{name:"dots",label_zh:"圆点数",kind:"range",min:1,max:6,step:1,default:3},{name:"duration",label_zh:"一轮用时",kind:"range",min:.5,max:4,step:.1,default:1.4,unit:"s"},{name:"color",label_zh:"颜色",kind:"color",default:"#6366f1"}],preset_default:{size:32,dots:3,duration:1.4,color:"#6366f1"},presets:[],usage_template:'<BouncingDots dots={{dots}} style={{ width: {{size}}, color: "{{color}}", "--duration": "{{duration}}s" }} />'});function l({props:e,onFire:t,replayKey:a}){return(0,s.b)(t),(0,r.jsx)("div",{className:"flex items-center justify-center","data-demo-trigger":!0,children:(0,r.jsx)(n,{dots:e.dots,style:{width:e.size,color:e.color,"--duration":`${e.duration}s`}})},a)}},17733:(e,t,a)=>{a.r(t),a.d(t,{default:()=>l,meta:()=>o});var r=a(95155),i=a(40980);function n({className:e,...t}){return(0,r.jsxs)(r.Fragment,{children:[(0,r.jsx)("style",{children:`
        @keyframes loading-ui-thin-pulse {
          0%,
          100% {
            transform: scale(0.95);
            opacity: 0.8;
          }

          50% {
            transform: scale(1.05);
            opacity: 0.4;
          }
        }
      `}),(0,r.jsxs)("span",{role:"status",className:(0,i.cn)("relative inline-block shrink-0",e),...t,children:[(0,r.jsx)("span",{"aria-hidden":"true",className:"absolute inset-0 rounded-full border-2 border-current",style:{animation:"loading-ui-thin-pulse var(--duration, 1.5s) ease-in-out infinite"}}),(0,r.jsx)("span",{className:"sr-only",children:"Loading"})]})]})}var s=a(53161);let o=(0,a(10482).aT)({id:"LOAD-pulse",source:"loading-ui",zh_name:"细环呼吸",en_name:"Pulse",summary_zh:"一圈细线环轻微放大又缩小，同时变淡再变实，像在呼吸；最安静的等待提示。",hint_zh:"看它呼吸一次",category:"加载",triggers:["auto"],tags_motion:["克制"],registry_item:"pulse",component:{path:"src/registry/loading-ui/pulse.tsx",export:"Pulse"},deps:[],controls:[{name:"size",label_zh:"尺寸",kind:"range",min:16,max:96,step:4,default:40,unit:"px"},{name:"duration",label_zh:"一次呼吸用时",kind:"range",min:.5,max:5,step:.1,default:1.5,unit:"s"},{name:"color",label_zh:"颜色",kind:"color",default:"#6366f1"}],preset_default:{size:40,duration:1.5,color:"#6366f1"},presets:[],usage_template:'<Pulse style={{ width: {{size}}, height: {{size}}, color: "{{color}}", "--duration": "{{duration}}s" }} />'});function l({props:e,onFire:t,replayKey:a}){return(0,s.b)(t),(0,r.jsx)("div",{className:"flex items-center justify-center","data-demo-trigger":!0,children:(0,r.jsx)(n,{style:{width:e.size,height:e.size,color:e.color,"--duration":`${e.duration}s`}})},a)}},25365:(e,t,a)=>{a.r(t),a.d(t,{default:()=>d,meta:()=>l});var r=a(95155),i=a(40980);let n=["█","▓","▒","░"];function s({className:e,blocks:t=n,size:a=5,style:o,...l}){let d=Math.max(2,Math.floor(a)),c=n.map((e,a)=>t[a]??n[a]);return(0,r.jsxs)(r.Fragment,{children:[(0,r.jsx)("style",{children:`
        @keyframes loading-ui-square-snake {
          0%,
          100% {
            transform: translate(0, 0);
          }

          25% {
            transform: translate(var(--loader-x), 0);
          }

          50% {
            transform: translate(var(--loader-x), var(--loader-y));
          }

          75% {
            transform: translate(0, var(--loader-y));
          }
        }
      `}),(0,r.jsxs)("span",{role:"status",className:(0,i.cn)("relative inline-flex h-[var(--loader-size)] w-[var(--loader-size)] overflow-hidden font-mono text-xl leading-none text-current select-none",e),style:{"--loader-size":`${d}ch`,"--loader-x":`${d-1}ch`,"--loader-y":`${d-1}ch`,...o},...l,children:[c.map((e,t)=>(0,r.jsx)("span",{"aria-hidden":"true",className:"pointer-events-none absolute top-0 left-0 flex h-[1ch] w-[1ch] items-center justify-center",style:{animation:"loading-ui-square-snake var(--duration, 2s) linear infinite",animationDelay:`calc(var(--delay, 0.125s) * -${c.length-1-t})`},children:e},`${e}-${t}`)),(0,r.jsx)("span",{className:"sr-only",children:"Loading"})]})]})}var o=a(53161);let l=(0,a(10482).aT)({id:"LOAD-square-snake",source:"loading-ui",zh_name:"方块贪吃蛇",en_name:"Square Snake",summary_zh:"四枚深浅字符块首尾相连沿方形路线绕圈，像贪吃蛇；终端风等待。",hint_zh:"看它绕完一圈",category:"加载",triggers:["auto"],tags_motion:["克制"],registry_item:"square-snake",component:{path:"src/registry/loading-ui/square-snake.tsx",export:"SquareSnake"},deps:[],controls:[{name:"fontSize",label_zh:"字号",kind:"range",min:12,max:40,step:2,default:20,unit:"px"},{name:"cells",label_zh:"边长",kind:"range",min:3,max:9,step:1,default:5,unit:"格"},{name:"duration",label_zh:"一圈用时",kind:"range",min:.6,max:6,step:.1,default:2,unit:"s"},{name:"color",label_zh:"颜色",kind:"color",default:"#6366f1"}],preset_default:{fontSize:20,cells:5,duration:2,color:"#6366f1"},presets:[],usage_template:'<SquareSnake size={{cells}} style={{ fontSize: {{fontSize}}, color: "{{color}}", "--duration": "{{duration}}s" }} />'});function d({props:e,onFire:t,replayKey:a}){return(0,o.b)(t),(0,r.jsx)("div",{className:"flex items-center justify-center","data-demo-trigger":!0,children:(0,r.jsx)(s,{size:e.cells,style:{fontSize:e.fontSize,color:e.color,"--duration":`${e.duration}s`}})},a)}},25818:(e,t,a)=>{a.r(t),a.d(t,{default:()=>c,meta:()=>d});var r=a(95155),i=a(63197),n=a(10463),s=a(40980);function o({children:e,as:t="p",className:a,duration:i=1,baseColor:l,shimmerColor:d,zDistance:c=10,xDistance:u=2,yDistance:m=-2,spread:h=1,scaleDistance:g=1.1,rotateYDistance:f=10,transition:p,style:x}){let y=n.PY1.create(t);return(0,r.jsx)(y,{className:(0,s.cn)("relative inline-block [perspective:500px]",a),style:{...x,"--base-color":l??"color-mix(in oklab, currentColor 55%, transparent)","--base-gradient-color":d??"currentColor"},children:e.split("").map((t,a)=>{let o=a*i*(1/h)/e.length;return(0,r.jsx)(n.PY1.span,{className:(0,s.cn)("inline-block whitespace-pre [transform-style:preserve-3d]"),initial:{translateZ:0,scale:1,rotateY:0,color:"var(--base-color)"},animate:{translateZ:[0,c,0],translateX:[0,u,0],translateY:[0,m,0],scale:[1,g,1],rotateY:[0,f,0],color:["var(--base-color)","var(--base-gradient-color)","var(--base-color)"]},transition:{duration:i,repeat:1/0,repeatDelay:.05*e.length/h,delay:o,ease:"easeInOut",...p},children:t},a)})})}var l=a(53161);let d=(0,a(10482).aT)({id:"LOAD-text-shimmer-wave",source:"loading-ui",zh_name:"逐字波浪扫光",en_name:"Text Shimmer Wave",summary_zh:"每个字依次变亮、微微放大并向前翘起再落回，像一道波浪从左扫到右；适合 AI 思考中这类想要一点存在感的文字等待。",hint_zh:"看字一个个翘起来",category:"加载",triggers:["auto"],tags_motion:["华丽"],registry_item:"text-shimmer-wave",component:{path:"src/registry/loading-ui/text-shimmer-wave.tsx",export:"TextShimmerWave"},deps:["motion"],controls:[{name:"text",label_zh:"文案",kind:"text",default:"正在思考…"},{name:"duration",label_zh:"一个字用时",kind:"range",min:.3,max:4,step:.1,default:1,unit:"s"},{name:"spread",label_zh:"波浪紧密度",kind:"range",min:.5,max:4,step:.25,default:1},{name:"baseColor",label_zh:"底色",kind:"color",default:"#888888"},{name:"shimmerColor",label_zh:"亮光色",kind:"color",default:"#ffffff"}],preset_default:{text:"正在思考…",duration:1,spread:1,baseColor:"#888888",shimmerColor:"#ffffff"},presets:[],usage_template:'<TextShimmerWave shimmerColor={{shimmerColor}} baseColor={{baseColor}} duration={{duration}} spread={{spread}} className="text-2xl font-medium">{{text}}</TextShimmerWave>'});function c({props:e,onFire:t,replayKey:a}){let n=(0,i.q)(),s=e.text&&"正在思考…"!==e.text?e.text:n("正在思考…"),d=e.baseColor,u=e.shimmerColor;return(0,l.b)(t),(0,r.jsx)("div",{className:"flex items-center justify-center","data-demo-trigger":!0,children:(0,r.jsx)(o,{shimmerColor:u??"#ffffff",baseColor:d??"#888888",duration:e.duration,spread:e.spread,className:"text-2xl font-medium tracking-tight",children:s})},a)}},27249:(e,t,a)=>{a.r(t),a.d(t,{default:()=>l,meta:()=>o});var r=a(95155),i=a(40980);function n({className:e,style:t,...a}){return(0,r.jsxs)(r.Fragment,{children:[(0,r.jsx)("style",{children:`
        @keyframes loading-ui-ring-spin {
          to {
            transform: rotate(360deg);
          }
        }
      `}),(0,r.jsx)("svg",{viewBox:"0 0 24 24",fill:"none",xmlns:"http://www.w3.org/2000/svg",className:(0,i.cn)(e),style:{animationName:"loading-ui-ring-spin",animationDuration:"var(--duration, 1s)",animationTimingFunction:"linear",animationIterationCount:"infinite",...t},...a,children:(0,r.jsx)("path",{d:"M21 12.0004C20.9999 13.901 20.3981 15.7528 19.2809 17.2904C18.1637 18.8279 16.5885 19.9723 14.7809 20.5596C12.9733 21.1469 11.0262 21.1468 9.21864 20.5594C7.41109 19.9721 5.83588 18.8276 4.71876 17.29C3.60165 15.7523 2.99999 13.9005 3 11.9999C3.00001 10.0993 3.60171 8.24755 4.71884 6.70994C5.83598 5.17233 7.4112 4.02785 9.21877 3.44052C11.0263 2.85319 12.9734 2.85316 14.781 3.44044",stroke:"currentColor",strokeWidth:"2",strokeLinecap:"round",strokeLinejoin:"round"})})]})}var s=a(53161);let o=(0,a(10482).aT)({id:"LOAD-ring",source:"loading-ui",zh_name:"环形旋转",en_name:"Ring",summary_zh:"约四分之三圈的圆弧匀速转圈，SVG 描边实现，行内和按钮里都合适；最通用的轻量等待。",hint_zh:"看一圈",category:"加载",triggers:["auto"],tags_motion:["克制"],registry_item:"ring",component:{path:"src/registry/loading-ui/ring.tsx",export:"Ring"},deps:[],controls:[{name:"size",label_zh:"尺寸",kind:"range",min:16,max:96,step:4,default:40,unit:"px"},{name:"duration",label_zh:"一圈用时",kind:"range",min:.3,max:4,step:.1,default:1,unit:"s"},{name:"color",label_zh:"颜色",kind:"color",default:"#6366f1"}],preset_default:{size:40,duration:1,color:"#6366f1"},presets:[{name_zh:"小而快",props:{size:20,duration:.6}}],usage_template:'<Ring style={{ width: {{size}}, height: {{size}}, color: "{{color}}", "--duration": "{{duration}}s" }} />'});function l({props:e,onFire:t,replayKey:a}){return(0,s.b)(t),(0,r.jsx)("div",{className:"flex items-center justify-center","data-demo-trigger":!0,children:(0,r.jsx)(n,{style:{width:e.size,height:e.size,color:e.color,"--duration":`${e.duration}s`}})},a)}},30338:(e,t,a)=>{a.r(t),a.d(t,{default:()=>d,meta:()=>l});var r=a(95155),i=a(10463),n=a(40980);function s({dots:e=8,radius:t=31.25,className:a,...o}){return(0,r.jsxs)("span",{role:"status",className:(0,n.cn)("relative inline-block",a),...o,children:[Array.from({length:e},(a,n)=>{let s=n/e*(2*Math.PI),o=`${50+t*Math.cos(s)}%`,l=`${50+t*Math.sin(s)}%`;return(0,r.jsx)(i.PY1.span,{"aria-hidden":"true",className:"absolute inline-block rounded-full bg-current",style:{left:o,top:l,translate:"-50% -50%",width:`${150/e}%`,height:`${150/e}%`},animate:{scale:[0,1,0],opacity:[0,1,0]},transition:{duration:1.5,repeat:1/0,delay:n/e*1.5,ease:"easeInOut"}},n)}),(0,r.jsx)("span",{className:"sr-only",children:"Loading"})]})}var o=a(53161);let l=(0,a(10482).aT)({id:"LOAD-spiral",source:"loading-ui",zh_name:"环点螺旋",en_name:"Spiral",summary_zh:"一圈圆点依次从无到有放大再缩没，像光点顺着圈跑；轻量等待，motion 驱动。",hint_zh:"看光点绕一圈",category:"加载",triggers:["auto"],tags_motion:["克制"],registry_item:"spiral",component:{path:"src/registry/loading-ui/spiral.tsx",export:"Spiral"},deps:["motion"],controls:[{name:"size",label_zh:"尺寸",kind:"range",min:16,max:96,step:4,default:48,unit:"px"},{name:"dots",label_zh:"圆点数",kind:"range",min:4,max:12,step:1,default:8},{name:"color",label_zh:"颜色",kind:"color",default:"#6366f1"}],preset_default:{size:48,dots:8,color:"#6366f1"},presets:[],usage_template:'<Spiral dots={{dots}} style={{ width: {{size}}, height: {{size}}, color: "{{color}}" }} />'});function d({props:e,onFire:t,replayKey:a}){return(0,o.b)(t),(0,r.jsx)("div",{className:"flex items-center justify-center","data-demo-trigger":!0,children:(0,r.jsx)(s,{dots:e.dots,style:{width:e.size,height:e.size,color:e.color}})},a)}},36537:(e,t,a)=>{a.r(t),a.d(t,{default:()=>l,meta:()=>o});var r=a(95155),i=a(40980);function n({className:e,...t}){return(0,r.jsxs)(r.Fragment,{children:[(0,r.jsx)("style",{children:`
        @keyframes loading-ui-triple-dot-rotation {
          0% {
            transform: rotate(0deg);
          }

          100% {
            transform: rotate(360deg);
          }
        }
      `}),(0,r.jsxs)("span",{role:"status",className:(0,i.cn)("relative inline-block shrink-0",e),...t,children:[(0,r.jsxs)("span",{"aria-hidden":"true",className:"absolute inset-0",style:{animation:"loading-ui-triple-dot-rotation var(--duration, 2s) ease-in-out infinite"},children:[(0,r.jsx)("span",{className:"absolute top-1/2 left-1/2 size-full -translate-x-1/2 -translate-y-1/2 rounded-full bg-current"}),(0,r.jsx)("span",{className:"absolute top-1/2 left-1/2 size-full -translate-x-[200%] -translate-y-1/2 rounded-full bg-current"}),(0,r.jsx)("span",{className:"absolute top-1/2 left-1/2 size-full translate-x-full -translate-y-1/2 rounded-full bg-current"})]}),(0,r.jsx)("span",{className:"sr-only",children:"Loading"})]})]})}var s=a(53161);let o=(0,a(10482).aT)({id:"LOAD-triple-dot-spinner",source:"loading-ui",zh_name:"三点旋转",en_name:"Triple Dot Spinner",summary_zh:"三个圆点排成一行整体转圈，转速有缓急；轻量等待。",hint_zh:"看一圈",category:"加载",triggers:["auto"],tags_motion:["克制"],registry_item:"triple-dot-spinner",component:{path:"src/registry/loading-ui/triple-dot-spinner.tsx",export:"TripleDotSpinner"},deps:[],controls:[{name:"size",label_zh:"尺寸",kind:"range",min:16,max:96,step:4,default:40,unit:"px"},{name:"duration",label_zh:"一圈用时",kind:"range",min:.6,max:5,step:.1,default:2,unit:"s"},{name:"color",label_zh:"颜色",kind:"color",default:"#6366f1"}],preset_default:{size:40,duration:2,color:"#6366f1"},presets:[],usage_template:'<TripleDotSpinner style={{ width: {{size}} / 3, height: {{size}} / 3, color: "{{color}}", "--duration": "{{duration}}s" }} />'});function l({props:e,onFire:t,replayKey:a}){return(0,s.b)(t),(0,r.jsx)("div",{className:"flex items-center justify-center","data-demo-trigger":!0,children:(0,r.jsx)(n,{style:{width:e.size/3,height:e.size/3,color:e.color,"--duration":`${e.duration}s`}})},a)}},38690:(e,t,a)=>{a.r(t),a.d(t,{default:()=>d,meta:()=>l});var r=a(95155),i=a(40980);let n=["50%","75%","100%","75%","50%"];function s({className:e,...t}){return(0,r.jsxs)(r.Fragment,{children:[(0,r.jsx)("style",{children:`
        @keyframes loading-ui-wave {
          0%,
          100% {
            transform: scaleY(1);
          }

          50% {
            transform: scaleY(0.6);
          }
        }
      `}),(0,r.jsxs)("span",{role:"status",className:(0,i.cn)("inline-flex items-center gap-[2.5%]",e),...t,children:[n.map((e,t)=>(0,r.jsx)("span",{"aria-hidden":"true",className:"inline-block rounded-full bg-current",style:{width:"12.5%",height:e,animation:"loading-ui-wave var(--duration, 1s) ease-in-out infinite",animationDelay:`calc(var(--delay, 100ms) * ${t})`}},t)),(0,r.jsx)("span",{className:"sr-only",children:"Loading"})]})]})}var o=a(53161);let l=(0,a(10482).aT)({id:"LOAD-wave",source:"loading-ui",zh_name:"五柱声波",en_name:"Wave",summary_zh:"五根圆头竖柱高矮排成弧形，依次伸缩，像声波；适合语音、播放类的等待。",hint_zh:"看柱子轮流伸缩",category:"加载",triggers:["auto"],tags_motion:["弹性"],registry_item:"wave",component:{path:"src/registry/loading-ui/wave.tsx",export:"Wave"},deps:[],controls:[{name:"size",label_zh:"尺寸",kind:"range",min:16,max:96,step:4,default:40,unit:"px"},{name:"duration",label_zh:"一轮用时",kind:"range",min:.3,max:4,step:.1,default:1,unit:"s"},{name:"color",label_zh:"颜色",kind:"color",default:"#6366f1"}],preset_default:{size:40,duration:1,color:"#6366f1"},presets:[],usage_template:'<Wave style={{ width: {{size}}, height: {{size}}, color: "{{color}}", "--duration": "{{duration}}s" }} />'});function d({props:e,onFire:t,replayKey:a}){return(0,o.b)(t),(0,r.jsx)("div",{className:"flex items-center justify-center","data-demo-trigger":!0,children:(0,r.jsx)(s,{style:{width:e.size,height:e.size,color:e.color,"--duration":`${e.duration}s`}})},a)}},40980:(e,t,a)=>{a.d(t,{cn:()=>n});var r=a(29722),i=a(622);function n(...e){return(0,i.QP)((0,r.$)(e))}},41289:(e,t,a)=>{a.r(t),a.d(t,{default:()=>d,meta:()=>l});var r=a(95155),i=a(40980);let n=["█","▓","▒"];function s({className:e,blocks:t=n,track:a="░",...o}){let l=n.map((e,a)=>t[a]??n[a]),d=Array.from({length:45},(e,t)=>{let r=Math.floor(t/9),i=t%9;return 0===r||4===r||0===i||4===i||8===i?a:" "});return(0,r.jsxs)(r.Fragment,{children:[(0,r.jsx)("style",{children:`
        @keyframes loading-ui-infinity-track {
          0%,
          100% {
            transform: translate(4ch, 0);
          }

          12.5% {
            transform: translate(0, 0);
          }

          25% {
            transform: translate(0, 4ch);
          }

          37.5% {
            transform: translate(4ch, 4ch);
          }

          50% {
            transform: translate(4ch, 0);
          }

          62.5% {
            transform: translate(8ch, 0);
          }

          75% {
            transform: translate(8ch, 4ch);
          }

          87.5% {
            transform: translate(4ch, 4ch);
          }
        }
      `}),(0,r.jsxs)("span",{role:"status",className:(0,i.cn)("relative inline-flex h-[5ch] w-[9ch] overflow-hidden font-mono text-xl leading-none text-current select-none",e),...o,children:[(0,r.jsx)("span",{"aria-hidden":"true",className:"pointer-events-none absolute inset-0 grid grid-cols-9 grid-rows-5",children:d.map((e,t)=>(0,r.jsx)("span",{className:"flex h-[1ch] w-[1ch] items-center justify-center",children:e},t))}),l.map((e,t)=>(0,r.jsx)("span",{"aria-hidden":"true",className:(0,i.cn)("pointer-events-none absolute top-0 left-0 flex h-[1ch] w-[1ch] items-center justify-center",["z-30","z-20","z-10"][t]),style:{animation:"loading-ui-infinity-track var(--duration, 3.2s) linear infinite",animationDelay:`calc(var(--delay, 0.1s) * ${t})`,backgroundColor:"var(--mask-color, var(--background))"},children:e},`${e}-${t}`)),(0,r.jsx)("span",{className:"sr-only",children:"Loading"})]})]})}var o=a(53161);let l=(0,a(10482).aT)({id:"LOAD-infinity-track",source:"loading-ui",zh_name:"8字轨道方块",en_name:"Infinity Track",summary_zh:"浅色字符铺出 8 字轨道，三枚深色块沿轨道绕行；终端风等待。",hint_zh:"看它绕完 8 字",category:"加载",triggers:["auto"],tags_motion:["克制"],registry_item:"infinity-track",component:{path:"src/registry/loading-ui/infinity-track.tsx",export:"InfinityTrack"},deps:[],controls:[{name:"fontSize",label_zh:"字号",kind:"range",min:12,max:40,step:2,default:20,unit:"px"},{name:"duration",label_zh:"一圈用时",kind:"range",min:1,max:8,step:.1,default:3.2,unit:"s"},{name:"color",label_zh:"颜色",kind:"color",default:"#6366f1"},{name:"maskColor",label_zh:"遮罩色",kind:"color",default:"#171717"}],preset_default:{fontSize:20,duration:3.2,color:"#6366f1",maskColor:"#171717"},presets:[],usage_template:'<InfinityTrack style={{ fontSize: {{fontSize}}, color: "{{color}}", "--mask-color": {{maskColor}}, "--duration": "{{duration}}s" }} />'});function d({props:e,onFire:t,replayKey:a}){let i=e.maskColor;return(0,o.b)(t),(0,r.jsx)("div",{className:"flex items-center justify-center","data-demo-trigger":!0,children:(0,r.jsx)(s,{style:{fontSize:e.fontSize,color:e.color,"--mask-color":i??"#171717","--duration":`${e.duration}s`}})},a)}},43580:(e,t,a)=>{a.r(t),a.d(t,{default:()=>l,meta:()=>o});var r=a(95155),i=a(40980);function n({className:e,...t}){return(0,r.jsxs)("svg",{viewBox:"0 0 100 100",preserveAspectRatio:"xMidYMid",fill:"none",xmlns:"http://www.w3.org/2000/svg",className:(0,i.cn)(e),...t,children:[(0,r.jsx)("title",{children:"Loading..."}),(0,r.jsx)("style",{children:`
        @keyframes loading-ui-infinity-dash {
          to {
            stroke-dashoffset: 256.58892822265625;
          }
        }
      `}),(0,r.jsx)("path",{d:"M24.3 30C11.4 30 5 43.3 5 50s6.4 20 19.3 20c19.3 0 32.1-40 51.4-40C88.6 30 95 43.3 95 50s-6.4 20-19.3 20C56.4 70 43.6 30 24.3 30z",stroke:"currentColor",strokeWidth:"10",strokeLinecap:"round",strokeDasharray:"205.271142578125 51.317785644531256",style:{transform:"scale(0.8)",transformOrigin:"50px 50px",animationName:"loading-ui-infinity-dash",animationDuration:"var(--duration, 2s)",animationTimingFunction:"linear",animationIterationCount:"infinite"}})]})}var s=a(53161);let o=(0,a(10482).aT)({id:"LOAD-infinity",source:"loading-ui",zh_name:"无限符号描边",en_name:"Infinity",summary_zh:"无限符号 ∞ 的描边上一段实线不停沿线滑动，像一条光带在描边；适合稍慢的等待。",hint_zh:"看光带绕一圈",category:"加载",triggers:["auto"],tags_motion:["克制"],registry_item:"infinity",component:{path:"src/registry/loading-ui/infinity.tsx",export:"InfinityLoop"},deps:[],controls:[{name:"size",label_zh:"尺寸",kind:"range",min:24,max:120,step:4,default:56,unit:"px"},{name:"duration",label_zh:"一圈用时",kind:"range",min:.5,max:6,step:.1,default:2,unit:"s"},{name:"color",label_zh:"颜色",kind:"color",default:"#6366f1"}],preset_default:{size:56,duration:2,color:"#6366f1"},presets:[],usage_template:'<InfinityLoop style={{ width: {{size}}, height: {{size}}, color: "{{color}}", "--duration": "{{duration}}s" }} />'});function l({props:e,onFire:t,replayKey:a}){return(0,s.b)(t),(0,r.jsx)("div",{className:"flex items-center justify-center","data-demo-trigger":!0,children:(0,r.jsx)(n,{style:{width:e.size,height:e.size,color:e.color,"--duration":`${e.duration}s`}})},a)}},43894:(e,t,a)=>{a.r(t),a.d(t,{default:()=>u,meta:()=>c});var r=a(95155),i=a(63197),n=a(12115),s=a(10463),o=a(40980);let l=n.memo(function({children:e,as:t="p",className:a,duration:i=2,spread:l=2,baseColor:d,shimmerColor:c,style:u}){let m=s.PY1.create(t),h=(0,n.useMemo)(()=>e.length*l,[e,l]);return(0,r.jsx)(m,{className:(0,o.cn)("relative inline-block bg-size-[250%_100%,auto] bg-clip-text","[-webkit-text-fill-color:transparent]","[background-repeat:no-repeat,padding-box] [--bg:linear-gradient(90deg,#0000_calc(50%-var(--spread)),var(--base-gradient-color),#0000_calc(50%+var(--spread)))]",a),initial:{backgroundPosition:"100% center"},animate:{backgroundPosition:"0% center"},transition:{repeat:1/0,duration:i,ease:"linear"},style:{...u,"--spread":`${h}px`,"--base-color":d??"color-mix(in oklab, currentColor 55%, transparent)","--base-gradient-color":c??"currentColor",backgroundImage:"var(--bg), linear-gradient(var(--base-color), var(--base-color))"},children:e})});var d=a(53161);let c=(0,a(10482).aT)({id:"LOAD-text-shimmer",source:"loading-ui",zh_name:"文字扫光",en_name:"Text Shimmer",summary_zh:"一道亮色从左到右匀速扫过半透明文字后循环，渐变位移实现；「正在生成」类文字内联等待。",hint_zh:"看亮光扫过",category:"加载",triggers:["auto"],tags_motion:["克制"],registry_item:"text-shimmer",component:{path:"src/registry/loading-ui/text-shimmer.tsx",export:"TextShimmer"},deps:["motion"],controls:[{name:"text",label_zh:"文案",kind:"text",default:"正在生成回答…"},{name:"duration",label_zh:"扫一遍用时",kind:"range",min:.5,max:6,step:.1,default:2,unit:"s"},{name:"spread",label_zh:"光带宽度",kind:"range",min:1,max:5,step:.5,default:2},{name:"baseColor",label_zh:"底色",kind:"color",default:"#888888"},{name:"shimmerColor",label_zh:"亮光色",kind:"color",default:"#ffffff"}],preset_default:{text:"正在生成回答…",duration:2,spread:2,baseColor:"#888888",shimmerColor:"#ffffff"},presets:[{name_zh:"急促",props:{duration:1}}],usage_template:'<TextShimmer shimmerColor={{shimmerColor}} baseColor={{baseColor}} duration={{duration}} spread={{spread}} className="text-2xl font-medium">{{text}}</TextShimmer>'});function u({props:e,onFire:t,replayKey:a}){let n=(0,i.q)(),s=e.text&&"正在生成回答…"!==e.text?e.text:n("正在生成回答…"),o=e.baseColor,c=e.shimmerColor;return(0,d.b)(t),(0,r.jsx)("div",{className:"flex items-center justify-center","data-demo-trigger":!0,children:(0,r.jsx)(l,{shimmerColor:c??"#ffffff",baseColor:o??"#888888",duration:e.duration,spread:e.spread,className:"text-2xl font-medium tracking-tight",children:s})},a)}},47620:(e,t,a)=>{a.r(t),a.d(t,{default:()=>l,meta:()=>o});var r=a(95155),i=a(40980);function n({className:e,...t}){return(0,r.jsxs)(r.Fragment,{children:[(0,r.jsx)("style",{children:`
        @keyframes loading-ui-satellite-ring-rotation {
          0% {
            transform: rotate(0deg);
          }

          100% {
            transform: rotate(360deg);
          }
        }
      `}),(0,r.jsxs)("span",{role:"status",className:(0,i.cn)("relative inline-block rounded-full border-2 border-current/25",e),style:{animation:"loading-ui-satellite-ring-rotation var(--duration, 1.5s) linear infinite"},...t,children:[(0,r.jsx)("span",{"aria-hidden":"true",className:"absolute top-0 left-0 rounded-full bg-current",style:{width:"33.333%",height:"33.333%",transform:"translate(-50%, 50%)"}}),(0,r.jsx)("span",{className:"sr-only",children:"Loading"})]})]})}var s=a(53161);let o=(0,a(10482).aT)({id:"LOAD-satellite-ring",source:"loading-ui",zh_name:"卫星绕环",en_name:"Satellite Ring",summary_zh:"淡色圆环上挂一颗实心小球绕圈，像卫星绕行；轻量等待。",hint_zh:"看小球绕一圈",category:"加载",triggers:["auto"],tags_motion:["克制"],registry_item:"satellite-ring",component:{path:"src/registry/loading-ui/satellite-ring.tsx",export:"SatelliteRing"},deps:[],controls:[{name:"size",label_zh:"尺寸",kind:"range",min:16,max:96,step:4,default:40,unit:"px"},{name:"duration",label_zh:"一圈用时",kind:"range",min:.5,max:5,step:.1,default:1.5,unit:"s"},{name:"color",label_zh:"颜色",kind:"color",default:"#6366f1"}],preset_default:{size:40,duration:1.5,color:"#6366f1"},presets:[],usage_template:'<SatelliteRing style={{ width: {{size}}, height: {{size}}, color: "{{color}}", "--duration": "{{duration}}s" }} />'});function l({props:e,onFire:t,replayKey:a}){return(0,s.b)(t),(0,r.jsx)("div",{className:"flex items-center justify-center","data-demo-trigger":!0,children:(0,r.jsx)(n,{style:{width:e.size,height:e.size,color:e.color,"--duration":`${e.duration}s`}})},a)}},52450:(e,t,a)=>{a.r(t),a.d(t,{default:()=>d,meta:()=>l});var r=a(95155),i=a(63197),n=a(40980);function s({className:e,children:t,dots:a=3,style:i,...o}){let l=Number.isFinite(a)?Math.max(1,Math.floor(a)):3;return(0,r.jsxs)(r.Fragment,{children:[(0,r.jsx)("style",{children:`
        @keyframes loading-ui-text-dots {
          0%,
          100% {
            opacity: 0;
          }

          50% {
            opacity: 1;
          }
        }
      `}),(0,r.jsxs)("span",{role:"status",className:(0,n.cn)("inline-flex items-center",e),style:i,...o,children:[(0,r.jsx)("span",{children:t}),(0,r.jsx)("span",{"aria-hidden":"true",className:"inline-flex",children:Array.from({length:l},(e,t)=>(0,r.jsx)("span",{style:{animation:"loading-ui-text-dots var(--duration, 1.4s) infinite",animationDelay:`calc(var(--delay, 0.2s) * ${t+1})`},children:"."},t))})]})]})}var o=a(53161);let l=(0,a(10482).aT)({id:"LOAD-text-dots",source:"loading-ui",zh_name:"文字省略号",en_name:"Text Dots",summary_zh:"文字后面几个句点依次亮起再一起消失，像手打的省略号在走；文字内联等待。",hint_zh:"看点点依次出现",category:"加载",triggers:["auto"],tags_motion:["克制"],registry_item:"text-dots",component:{path:"src/registry/loading-ui/text-dots.tsx",export:"TextDots"},deps:[],controls:[{name:"text",label_zh:"文案",kind:"text",default:"正在生成"},{name:"dots",label_zh:"点数",kind:"range",min:1,max:5,step:1,default:3},{name:"duration",label_zh:"一轮用时",kind:"range",min:.5,max:4,step:.1,default:1.4,unit:"s"}],preset_default:{text:"正在生成",dots:3,duration:1.4},presets:[],usage_template:'<TextDots dots={{dots}} className="text-2xl font-medium" style={{ "--duration": "{{duration}}s" }}>{{text}}</TextDots>'});function d({props:e,onFire:t,replayKey:a}){let n=(0,i.q)(),l=e.text&&"正在生成"!==e.text?e.text:n("正在生成");return(0,o.b)(t),(0,r.jsx)("div",{className:"flex items-center justify-center","data-demo-trigger":!0,children:(0,r.jsx)(s,{dots:e.dots,className:"text-2xl font-medium tracking-tight",style:{"--duration":`${e.duration}s`},children:l})},a)}},53161:(e,t,a)=>{a.d(t,{b:()=>i});var r=a(12115);function i(e,t=50){let a=(0,r.useRef)(e);(0,r.useEffect)(()=>{a.current=e},[e]),(0,r.useEffect)(()=>{let e=setTimeout(()=>a.current(),t);return()=>clearTimeout(e)},[t])}},55216:(e,t,a)=>{a.r(t),a.d(t,{default:()=>l,meta:()=>o});var r=a(95155),i=a(40980);function n({className:e,prompt:t=">",style:a,...s}){return(0,r.jsxs)(r.Fragment,{children:[(0,r.jsx)("style",{children:`
        @keyframes loading-ui-terminal-blink {
          0%,
          100% {
            opacity: 1;
          }

          50% {
            opacity: 0;
          }
        }
      `}),(0,r.jsxs)("span",{role:"status",className:(0,i.cn)("inline-flex items-center gap-[0.25em] font-mono",e),style:a,...s,children:[(0,r.jsx)("span",{"aria-hidden":"true",children:t}),(0,r.jsx)("span",{"aria-hidden":"true",className:"inline-block w-[0.5em] bg-current",style:{height:"1em",animation:"loading-ui-terminal-blink var(--duration, 1s) step-end infinite"}}),(0,r.jsx)("span",{className:"sr-only",children:"Loading"})]})]})}var s=a(53161);let o=(0,a(10482).aT)({id:"LOAD-terminal",source:"loading-ui",zh_name:"终端光标",en_name:"Terminal",summary_zh:"提示符后面一个方块光标按步进闪烁，像终端在等输入；适合命令行风格的文字内联等待。",hint_zh:"看光标闪",category:"加载",triggers:["auto"],tags_motion:["克制"],registry_item:"terminal",component:{path:"src/registry/loading-ui/terminal.tsx",export:"Terminal"},deps:[],controls:[{name:"text",label_zh:"提示符",kind:"text",default:">"},{name:"fontSize",label_zh:"字号",kind:"range",min:12,max:40,step:2,default:20,unit:"px"},{name:"duration",label_zh:"闪一次用时",kind:"range",min:.3,max:3,step:.1,default:1,unit:"s"},{name:"color",label_zh:"颜色",kind:"color",default:"#6366f1"}],preset_default:{text:">",fontSize:20,duration:1,color:"#6366f1"},presets:[],usage_template:'<Terminal prompt="{{text}}" style={{ fontSize: {{fontSize}}, color: "{{color}}", "--duration": "{{duration}}s" }} />'});function l({props:e,onFire:t,replayKey:a}){return(0,s.b)(t),(0,r.jsx)("div",{className:"flex items-center justify-center","data-demo-trigger":!0,children:(0,r.jsx)(n,{prompt:e.text,style:{fontSize:e.fontSize,color:e.color,"--duration":`${e.duration}s`}})},a)}},58329:(e,t,a)=>{a.r(t),a.d(t,{default:()=>c,meta:()=>d});var r=a(95155),i=a(10463);let n="M 12 8 C 14.21 8 16 9.79 16 12 C 16 14.21 14.21 16 12 16 C 9.79 16 8 14.21 8 12 C 8 9.79 9.79 8 12 8 Z",s="M 12 12 C 14 8.5 19 8.5 19 12 C 19 15.5 14 15.5 12 12 C 10 8.5 5 8.5 5 12 C 5 15.5 10 15.5 12 12 Z";function o(e){return(0,r.jsx)("svg",{viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:1.5,strokeLinecap:"round",strokeLinejoin:"round",role:"status","aria-label":"Loading",...e,children:(0,r.jsx)(i.PY1.path,{animate:{d:[n,s,"M 12 16 C 14.21 16 16 14.21 16 12 C 16 9.79 14.21 8 12 8 C 9.79 8 8 9.79 8 12 C 8 14.21 9.79 16 12 16 Z",s,n]},transition:{d:{duration:5,ease:"easeInOut",repeat:1/0,times:[0,.25,.5,.75,1]}}})})}var l=a(53161);let d=(0,a(10482).aT)({id:"LOAD-morphing-infinity",source:"loading-ui",zh_name:"圆变无限符",en_name:"Morphing Infinity",summary_zh:"一个圆慢慢变形成无限符号，再变回圆，路径逐点插值；适合「AI 思考中」这类慢节奏等待。",hint_zh:"看圆变成 ∞ 再变回来",category:"加载",triggers:["auto"],tags_motion:["华丽"],registry_item:"morphing-infinity",component:{path:"src/registry/loading-ui/morphing-infinity.tsx",export:"MorphingInfinity"},deps:["motion"],controls:[{name:"size",label_zh:"尺寸",kind:"range",min:24,max:120,step:4,default:56,unit:"px"},{name:"color",label_zh:"颜色",kind:"color",default:"#6366f1"}],preset_default:{size:56,color:"#6366f1"},presets:[],usage_template:'<MorphingInfinity style={{ width: {{size}}, height: {{size}}, color: "{{color}}" }} />'});function c({props:e,onFire:t,replayKey:a}){return(0,l.b)(t),(0,r.jsx)("div",{className:"flex items-center justify-center","data-demo-trigger":!0,children:(0,r.jsx)(o,{style:{width:e.size,height:e.size,color:e.color}})},a)}},59988:(e,t,a)=>{a.r(t),a.d(t,{default:()=>d,meta:()=>l});var r=a(95155),i=a(10463),n=a(40980);function s({className:e,dots:t=3,duration:a=1,...o}){let l=Number.isFinite(t)?Math.max(1,Math.floor(t)):3;return(0,r.jsxs)("span",{role:"status",className:(0,n.cn)("inline-flex items-center justify-center",e),...o,children:[(0,r.jsx)("span",{"aria-hidden":"true",className:"inline-flex w-full gap-[16%]",children:Array.from({length:l},(e,t)=>(0,r.jsx)(i.PY1.span,{className:"inline-block aspect-square grow rounded-full bg-current",animate:{scale:[1,1.5,1],opacity:[.5,1,.5]},transition:{duration:a,ease:"easeInOut",repeat:1/0,delay:.3*t}},t))}),(0,r.jsx)("span",{className:"sr-only",children:"Loading"})]})}var o=a(53161);let l=(0,a(10482).aT)({id:"LOAD-pulsating-dots",source:"loading-ui",zh_name:"三点脉动",en_name:"Pulsating Dots",summary_zh:"三个圆点依次放大到一倍半再缩回，带透明度呼吸；轻量等待，motion 驱动。",hint_zh:"看三点轮流胀缩",category:"加载",triggers:["auto"],tags_motion:["弹性"],registry_item:"pulsating-dots",component:{path:"src/registry/loading-ui/pulsating-dots.tsx",export:"PulsatingDots"},deps:["motion"],controls:[{name:"size",label_zh:"总宽",kind:"range",min:16,max:96,step:4,default:32,unit:"px"},{name:"dots",label_zh:"圆点数",kind:"range",min:1,max:6,step:1,default:3},{name:"duration",label_zh:"一轮用时",kind:"range",min:.4,max:3,step:.1,default:1,unit:"s"},{name:"color",label_zh:"颜色",kind:"color",default:"#6366f1"}],preset_default:{size:32,dots:3,duration:1,color:"#6366f1"},presets:[],usage_template:'<PulsatingDots dots={{dots}} duration={{duration}} style={{ width: {{size}}, color: "{{color}}" }} />'});function d({props:e,onFire:t,replayKey:a}){return(0,o.b)(t),(0,r.jsx)("div",{className:"flex items-center justify-center","data-demo-trigger":!0,children:(0,r.jsx)(s,{dots:e.dots,duration:e.duration,style:{width:e.size,color:e.color}})},a)}},61505:(e,t,a)=>{a.r(t),a.d(t,{default:()=>d,meta:()=>l});var r=a(95155),i=a(40980);let n=[1,2,3,4,5,5,4,3,2,1];function s({className:e,block:t="█",track:a="░",...o}){return(0,r.jsxs)(r.Fragment,{children:[(0,r.jsx)("style",{children:`
        @keyframes loading-ui-symmetric-wave-1 {
          0%,
          100% {
            opacity: 1;
          }

          12.5%,
          87.5% {
            opacity: 0.6;
          }

          25%,
          75% {
            opacity: 0.3;
          }

          37.5%,
          62.5%,
          50% {
            opacity: 0;
          }
        }

        @keyframes loading-ui-symmetric-wave-2 {
          0%,
          100% {
            opacity: 0.6;
          }

          12.5%,
          87.5% {
            opacity: 1;
          }

          25%,
          75% {
            opacity: 0.6;
          }

          37.5%,
          62.5% {
            opacity: 0.3;
          }

          50% {
            opacity: 0;
          }
        }

        @keyframes loading-ui-symmetric-wave-3 {
          0%,
          100% {
            opacity: 0.3;
          }

          12.5%,
          87.5% {
            opacity: 0.6;
          }

          25%,
          75% {
            opacity: 1;
          }

          37.5%,
          62.5% {
            opacity: 0.6;
          }

          50% {
            opacity: 0.3;
          }
        }

        @keyframes loading-ui-symmetric-wave-4 {
          0%,
          100% {
            opacity: 0;
          }

          12.5%,
          87.5% {
            opacity: 0.3;
          }

          25%,
          75% {
            opacity: 0.6;
          }

          37.5%,
          62.5% {
            opacity: 1;
          }

          50% {
            opacity: 0.6;
          }
        }

        @keyframes loading-ui-symmetric-wave-5 {
          0%,
          100%,
          12.5%,
          87.5% {
            opacity: 0;
          }

          25%,
          75% {
            opacity: 0.3;
          }

          37.5%,
          62.5% {
            opacity: 0.6;
          }

          50% {
            opacity: 1;
          }
        }
      `}),(0,r.jsxs)("span",{role:"status",className:(0,i.cn)("relative inline-flex h-[1em] w-[10ch] overflow-hidden font-mono text-xl leading-none text-current select-none",e),...o,children:[n.map((e,i)=>(0,r.jsxs)("span",{"aria-hidden":"true",className:"relative flex h-full w-[1ch] items-center justify-center",children:[(0,r.jsx)("span",{className:"opacity-30",children:a}),(0,r.jsx)("span",{className:"absolute inset-0 flex items-center justify-center",style:{animation:`loading-ui-symmetric-wave-${e} var(--duration, 2s) linear infinite`},children:t})]},i)),(0,r.jsx)("span",{className:"sr-only",children:"Loading"})]})]})}var o=a(53161);let l=(0,a(10482).aT)({id:"LOAD-symmetric-wave",source:"loading-ui",zh_name:"对称字符波",en_name:"Symmetric Wave",summary_zh:"十个字符块的明暗从两端向中间再回到两端来回涌动，左右对称的波；终端风等待。",hint_zh:"看明暗从两端涌向中间",category:"加载",triggers:["auto"],tags_motion:["克制"],registry_item:"symmetric-wave",component:{path:"src/registry/loading-ui/symmetric-wave.tsx",export:"SymmetricWave"},deps:[],controls:[{name:"fontSize",label_zh:"字号",kind:"range",min:12,max:40,step:2,default:20,unit:"px"},{name:"duration",label_zh:"一轮用时",kind:"range",min:.6,max:6,step:.1,default:2,unit:"s"},{name:"color",label_zh:"颜色",kind:"color",default:"#6366f1"}],preset_default:{fontSize:20,duration:2,color:"#6366f1"},presets:[],usage_template:'<SymmetricWave style={{ fontSize: {{fontSize}}, color: "{{color}}", "--duration": "{{duration}}s" }} />'});function d({props:e,onFire:t,replayKey:a}){return(0,o.b)(t),(0,r.jsx)("div",{className:"flex items-center justify-center","data-demo-trigger":!0,children:(0,r.jsx)(s,{style:{fontSize:e.fontSize,color:e.color,"--duration":`${e.duration}s`}})},a)}},61672:(e,t,a)=>{a.r(t),a.d(t,{default:()=>d,meta:()=>l});var r=a(95155),i=a(40980);let n=["█","▓","▒"];function s({className:e,blocks:t=n,track:a="░",trackLength:o=16,style:l,...d}){let c=Math.max(2,Math.floor(o)),u=n.map((e,a)=>t[a]??n[a]);return(0,r.jsxs)(r.Fragment,{children:[(0,r.jsx)("style",{children:`
        @keyframes loading-ui-accordion-loader {
          0%,
          100% {
            transform: translateX(0);
          }

          50% {
            transform: translateX(var(--loader-x));
          }
        }
      `}),(0,r.jsxs)("span",{role:"status",className:(0,i.cn)("relative inline-flex h-[1em] w-[var(--loader-width)] items-center overflow-hidden font-mono text-xl leading-none text-current select-none",e),style:{"--loader-width":`${c}ch`,"--loader-x":`${c-1}ch`,...l},...d,children:[(0,r.jsx)("span",{"aria-hidden":"true",className:"pointer-events-none absolute inset-0 whitespace-nowrap",children:a.repeat(c)}),u.map((e,t)=>(0,r.jsx)("span",{"aria-hidden":"true",className:(0,i.cn)("pointer-events-none absolute top-0 left-0 flex h-full w-[1ch] items-center justify-center text-center",["z-30","z-20","z-10"][t]),style:{animation:"loading-ui-accordion-loader var(--duration, 2.8s) ease-in-out infinite",animationDelay:`calc(var(--delay, 0.04s) * ${t})`,backgroundColor:"var(--mask-color, var(--background))"},children:e},`${e}-${t}`)),(0,r.jsx)("span",{className:"sr-only",children:"Loading"})]})]})}var o=a(53161);let l=(0,a(10482).aT)({id:"LOAD-accordion-loader",source:"loading-ui",zh_name:"字符块折返",en_name:"Accordion Loader",summary_zh:"三枚深浅字符块在一行浅色轨道上来回推挤，像手风琴一拉一合；等宽字体的终端风等待，适合 CLI 或代码类产品。",hint_zh:"看它拉合一次",category:"加载",triggers:["auto"],tags_motion:["克制"],registry_item:"accordion-loader",component:{path:"src/registry/loading-ui/accordion-loader.tsx",export:"AccordionLoader"},deps:[],controls:[{name:"fontSize",label_zh:"字号",kind:"range",min:12,max:40,step:2,default:20,unit:"px"},{name:"trackLength",label_zh:"轨道长度",kind:"range",min:4,max:24,step:1,default:16,unit:"格"},{name:"duration",label_zh:"来回一次用时",kind:"range",min:1,max:6,step:.1,default:2.8,unit:"s"},{name:"color",label_zh:"颜色",kind:"color",default:"#6366f1"},{name:"maskColor",label_zh:"遮罩色",kind:"color",default:"#171717"}],preset_default:{fontSize:20,trackLength:16,duration:2.8,color:"#6366f1",maskColor:"#171717"},presets:[],usage_template:'<AccordionLoader trackLength={{trackLength}} style={{ fontSize: {{fontSize}}, color: "{{color}}", "--mask-color": {{maskColor}}, "--duration": "{{duration}}s" }} />'});function d({props:e,onFire:t,replayKey:a}){let i=e.maskColor;return(0,o.b)(t),(0,r.jsx)("div",{className:"flex items-center justify-center","data-demo-trigger":!0,children:(0,r.jsx)(s,{trackLength:e.trackLength,style:{fontSize:e.fontSize,color:e.color,"--mask-color":i??"#171717","--duration":`${e.duration}s`}})},a)}},62795:(e,t,a)=>{a.r(t),a.d(t,{default:()=>d,meta:()=>l});var r=a(95155),i=a(40980);function n(e,t,a){return Math.min(Math.max(e,t),a)}function s({className:e,style:t,dots:a=8,dotScale:o=.16,radiusScale:l=.34,...d}){let c=Math.max(4,Math.floor(a)),u=n(o,.2,.4),m=n(l,0,.5-u/2);return(0,r.jsxs)(r.Fragment,{children:[(0,r.jsx)("style",{children:`
        @keyframes loading-ui-dots-ring-pulse {
          0%,
          100% {
            opacity: 0.25;
            transform: scale(0.65);
          }

          12.5% {
            opacity: 1;
            transform: scale(1);
          }

          25% {
            opacity: 0.75;
            transform: scale(0.85);
          }

          50% {
            opacity: 0.35;
            transform: scale(0.7);
          }
        }
      `}),(0,r.jsxs)("span",{role:"status",className:(0,i.cn)("@container-[size] relative inline-flex aspect-square items-center justify-center",e),style:t,...d,children:[(0,r.jsx)("span",{"aria-hidden":"true",className:"relative block size-full",children:Array.from({length:c},(e,t)=>{let a=t/c*Math.PI*2,i=`${(Math.sin(a)*m*100).toFixed(2)}cqmin`,n=`${(-Math.cos(a)*m*100).toFixed(2)}cqmin`;return(0,r.jsx)("span",{className:"absolute top-1/2 left-1/2",style:{width:`calc(${u} * 100cqmin)`,height:`calc(${u} * 100cqmin)`,transform:`translate(-50%, -50%) translate(${i}, ${n})`},children:(0,r.jsx)("span",{className:"block size-full rounded-full bg-current",style:{animation:"loading-ui-dots-ring-pulse var(--duration, 1s) linear infinite",animationDelay:`calc(var(--duration, 1s) / ${c} * ${t-c})`}})},t)})}),(0,r.jsx)("span",{className:"sr-only",children:"Loading"})]})]})}var o=a(53161);let l=(0,a(10482).aT)({id:"LOAD-dots-ring",source:"loading-ui",zh_name:"点环脉动",en_name:"Dots Ring",summary_zh:"一圈圆点按顺时针依次放大变亮，像追逐的光点绕圈；轻量等待。",hint_zh:"看光点绕一圈",category:"加载",triggers:["auto"],tags_motion:["克制"],registry_item:"dots-ring",component:{path:"src/registry/loading-ui/dots-ring.tsx",export:"DotsRing"},deps:[],controls:[{name:"size",label_zh:"尺寸",kind:"range",min:16,max:96,step:4,default:48,unit:"px"},{name:"dots",label_zh:"圆点数",kind:"range",min:4,max:12,step:1,default:8},{name:"duration",label_zh:"一圈用时",kind:"range",min:.3,max:4,step:.1,default:1,unit:"s"},{name:"color",label_zh:"颜色",kind:"color",default:"#6366f1"}],preset_default:{size:48,dots:8,duration:1,color:"#6366f1"},presets:[],usage_template:'<DotsRing dots={{dots}} style={{ width: {{size}}, height: {{size}}, color: "{{color}}", "--duration": "{{duration}}s" }} />'});function d({props:e,onFire:t,replayKey:a}){return(0,o.b)(t),(0,r.jsx)("div",{className:"flex items-center justify-center","data-demo-trigger":!0,children:(0,r.jsx)(s,{dots:e.dots,style:{width:e.size,height:e.size,color:e.color,"--duration":`${e.duration}s`}})},a)}},63197:(e,t,a)=>{a.d(t,{q:()=>i});var r=a(67611);function i(){return(0,r.H)().demoText}},65988:(e,t,a)=>{a.r(t),a.d(t,{default:()=>o,meta:()=>s});var r=a(95155);function i(e){return(0,r.jsxs)("svg",{viewBox:"0 0 20 20",fill:"currentColor",role:"status","aria-label":"Loading",...e,children:[(0,r.jsx)("style",{children:`
            @keyframes spin-pixel {
              0% { opacity: 0; }
              1% { opacity: 1; }
              100% { opacity: 0; }
            }
            .pixel-1 { animation: spin-pixel 0.8s ease-in-out 0s infinite; }
            .pixel-2 { animation: spin-pixel 0.8s ease-in-out 0.1s infinite; }
            .pixel-3 { animation: spin-pixel 0.8s ease-in-out 0.2s infinite; }
            .pixel-4 { animation: spin-pixel 0.8s ease-in-out 0.3s infinite; }
            .pixel-5 { animation: spin-pixel 0.8s ease-in-out 0.4s infinite; }
            .pixel-6 { animation: spin-pixel 0.8s ease-in-out 0.5s infinite; }
            .pixel-7 { animation: spin-pixel 0.8s ease-in-out 0.6s infinite; }
            .pixel-8 { animation: spin-pixel 0.8s ease-in-out 0.7s infinite; }
          `}),(0,r.jsx)("rect",{className:"pixel-1",x:"8",y:"0",width:"4",height:"4"}),(0,r.jsx)("rect",{className:"pixel-2",x:"12",y:"4",width:"4",height:"4"}),(0,r.jsx)("rect",{className:"pixel-3",x:"16",y:"8",width:"4",height:"4"}),(0,r.jsx)("rect",{className:"pixel-4",x:"12",y:"12",width:"4",height:"4"}),(0,r.jsx)("rect",{className:"pixel-5",x:"8",y:"16",width:"4",height:"4"}),(0,r.jsx)("rect",{className:"pixel-6",x:"4",y:"12",width:"4",height:"4"}),(0,r.jsx)("rect",{className:"pixel-7",x:"0",y:"8",width:"4",height:"4"}),(0,r.jsx)("rect",{className:"pixel-8",x:"4",y:"4",width:"4",height:"4"})]})}var n=a(53161);let s=(0,a(10482).aT)({id:"LOAD-diamond",source:"loading-ui",zh_name:"像素菱形",en_name:"Diamond",summary_zh:"八个像素方块围成菱形，按顺时针依次亮起再淡出，像素游戏风的旋转；适合复古或工具类界面的轻量等待。",hint_zh:"看一圈",category:"加载",triggers:["auto"],tags_motion:["克制"],registry_item:"diamond",component:{path:"src/registry/loading-ui/diamond.tsx",export:"Diamond"},deps:[],controls:[{name:"size",label_zh:"尺寸",kind:"range",min:16,max:96,step:4,default:40,unit:"px"},{name:"color",label_zh:"颜色",kind:"color",default:"#6366f1"}],preset_default:{size:40,color:"#6366f1"},presets:[],usage_template:'<Diamond style={{ width: {{size}}, height: {{size}}, color: "{{color}}" }} />'});function o({props:e,onFire:t,replayKey:a}){return(0,n.b)(t),(0,r.jsx)("div",{className:"flex items-center justify-center","data-demo-trigger":!0,children:(0,r.jsx)(i,{style:{width:e.size,height:e.size,color:e.color}})},a)}},66488:(e,t,a)=>{a.r(t),a.d(t,{default:()=>l,meta:()=>o});var r=a(95155),i=a(40980);function n({className:e,...t}){return(0,r.jsxs)(r.Fragment,{children:[(0,r.jsx)("style",{children:`
        @keyframes loading-ui-classic-fade {
          0% {
            opacity: 1;
          }

          100% {
            opacity: 0.15;
          }
        }
      `}),(0,r.jsxs)("span",{role:"status",className:(0,i.cn)("box-border inline-block size-5",e),...t,children:[(0,r.jsx)("span",{"aria-hidden":"true",className:"relative top-1/2 left-1/2 block size-full",children:Array.from({length:12},(e,t)=>(0,r.jsx)("span",{className:"absolute top-[-3.9%] left-[-10%] block h-[8%] w-[24%] rounded-(--radius) bg-current",style:{transform:`rotate(${30*t}deg) translate(146%)`,animation:"loading-ui-classic-fade var(--duration, 1.2s) linear infinite",animationDelay:`calc(var(--duration, 1.2s) / 12 * ${t-12})`}},t))}),(0,r.jsx)("span",{className:"sr-only",children:"Loading"})]})]})}var s=a(53161);let o=(0,a(10482).aT)({id:"LOAD-classic",source:"loading-ui",zh_name:"经典菊花",en_name:"Classic",summary_zh:"十二根短条围成一圈按序渐隐，iOS 风的经典菊花；到哪都不突兀的轻量等待。",hint_zh:"看一圈",category:"加载",triggers:["auto"],tags_motion:["克制"],registry_item:"classic",component:{path:"src/registry/loading-ui/classic.tsx",export:"Classic"},deps:[],controls:[{name:"size",label_zh:"尺寸",kind:"range",min:16,max:96,step:4,default:40,unit:"px"},{name:"duration",label_zh:"一圈用时",kind:"range",min:.4,max:4,step:.1,default:1.2,unit:"s"},{name:"color",label_zh:"颜色",kind:"color",default:"#6366f1"}],preset_default:{size:40,duration:1.2,color:"#6366f1"},presets:[],usage_template:'<Classic style={{ width: {{size}}, height: {{size}}, color: "{{color}}", "--duration": "{{duration}}s" }} />'});function l({props:e,onFire:t,replayKey:a}){return(0,s.b)(t),(0,r.jsx)("div",{className:"flex items-center justify-center","data-demo-trigger":!0,children:(0,r.jsx)(n,{style:{width:e.size,height:e.size,color:e.color,"--duration":`${e.duration}s`}})},a)}},67480:(e,t,a)=>{a.r(t),a.d(t,{default:()=>l,meta:()=>o});var r=a(95155),i=a(40980);function n({className:e,...t}){return(0,r.jsxs)(r.Fragment,{children:[(0,r.jsx)("style",{children:`
        @keyframes loading-ui-pulse-dot {
          0%,
          100% {
            transform: scale(1);
            opacity: 0.8;
          }

          50% {
            transform: scale(1.5);
            opacity: 1;
          }
        }
      `}),(0,r.jsx)("span",{role:"status",className:(0,i.cn)("inline-block rounded-full bg-current",e),style:{animation:"loading-ui-pulse-dot var(--duration, 1.2s) ease-in-out infinite"},...t,children:(0,r.jsx)("span",{className:"sr-only",children:"Loading"})})]})}var s=a(53161);let o=(0,a(10482).aT)({id:"LOAD-pulse-dot",source:"loading-ui",zh_name:"单点脉动",en_name:"Pulse Dot",summary_zh:"一个实心圆点放大到一倍半再缩回，像心跳；适合状态点或行内等待。",hint_zh:"看它跳一下",category:"加载",triggers:["auto"],tags_motion:["弹性"],registry_item:"pulse-dot",component:{path:"src/registry/loading-ui/pulse-dot.tsx",export:"PulseDot"},deps:[],controls:[{name:"size",label_zh:"尺寸",kind:"range",min:8,max:48,step:2,default:16,unit:"px"},{name:"duration",label_zh:"一跳用时",kind:"range",min:.4,max:4,step:.1,default:1.2,unit:"s"},{name:"color",label_zh:"颜色",kind:"color",default:"#6366f1"}],preset_default:{size:16,duration:1.2,color:"#6366f1"},presets:[],usage_template:'<PulseDot style={{ width: {{size}}, height: {{size}}, color: "{{color}}", "--duration": "{{duration}}s" }} />'});function l({props:e,onFire:t,replayKey:a}){return(0,s.b)(t),(0,r.jsx)("div",{className:"flex items-center justify-center","data-demo-trigger":!0,children:(0,r.jsx)(n,{style:{width:e.size,height:e.size,color:e.color,"--duration":`${e.duration}s`}})},a)}},68327:(e,t,a)=>{a.r(t),a.d(t,{default:()=>l,meta:()=>o});var r=a(95155),i=a(40980);function n({className:e,dots:t=3,...a}){return(0,r.jsxs)(r.Fragment,{children:[(0,r.jsx)("style",{children:`
        @keyframes loading-ui-dots-blink {
          0%,
          100% {
            opacity: 0.2;
          }

          20% {
            opacity: 1;
          }
        }
      `}),(0,r.jsxs)("span",{role:"status",className:(0,i.cn)("inline-flex items-center justify-center gap-[12%]",e),...a,children:[Array.from({length:t},(e,t)=>(0,r.jsx)("span",{"data-slot":"dot","aria-hidden":"true",style:{animation:"loading-ui-dots-blink var(--duration, 1.4s) infinite both",animationDelay:`calc(var(--delay, 0.2s) * ${t})`},className:"aspect-square grow rounded-full bg-current"},t)),(0,r.jsx)("span",{className:"sr-only",children:"Loading"})]})]})}var s=a(53161);let o=(0,a(10482).aT)({id:"LOAD-dots",source:"loading-ui",zh_name:"三点闪烁",en_name:"Dots",summary_zh:"三个圆点依次从暗到亮闪一下，最轻的等待提示；文字旁或按钮里都合适。",hint_zh:"看三点轮流亮",category:"加载",triggers:["auto"],tags_motion:["克制"],registry_item:"dots",component:{path:"src/registry/loading-ui/dots.tsx",export:"Dots"},deps:[],controls:[{name:"size",label_zh:"总宽",kind:"range",min:16,max:96,step:4,default:32,unit:"px"},{name:"dots",label_zh:"圆点数",kind:"range",min:1,max:6,step:1,default:3},{name:"duration",label_zh:"一轮用时",kind:"range",min:.5,max:4,step:.1,default:1.4,unit:"s"},{name:"color",label_zh:"颜色",kind:"color",default:"#6366f1"}],preset_default:{size:32,dots:3,duration:1.4,color:"#6366f1"},presets:[],usage_template:'<Dots dots={{dots}} style={{ width: {{size}}, color: "{{color}}", "--duration": "{{duration}}s" }} />'});function l({props:e,onFire:t,replayKey:a}){return(0,s.b)(t),(0,r.jsx)("div",{className:"flex items-center justify-center","data-demo-trigger":!0,children:(0,r.jsx)(n,{dots:e.dots,style:{width:e.size,color:e.color,"--duration":`${e.duration}s`}})},a)}},71602:(e,t,a)=>{a.r(t),a.d(t,{default:()=>l,meta:()=>o});var r=a(95155),i=a(40980);function n({className:e,style:t,...a}){return(0,r.jsxs)(r.Fragment,{children:[(0,r.jsx)("style",{children:`
        @keyframes loading-ui-spokes-spin {
          to {
            transform: rotate(360deg);
          }
        }
      `}),(0,r.jsx)("svg",{viewBox:"0 0 24 24",fill:"none",xmlns:"http://www.w3.org/2000/svg",className:(0,i.cn)(e),style:{animationName:"loading-ui-spokes-spin",animationDuration:"var(--duration, 1s)",animationTimingFunction:"linear",animationIterationCount:"infinite",...t},...a,children:(0,r.jsx)("path",{d:"M12 2V6M16.2 7.8L19.1 4.9M18 12H22M16.2 16.2L19.1 19.1M12 18V22M4.9 19.1L7.8 16.2M2 12H6M4.9 4.9L7.8 7.8",stroke:"currentColor",strokeWidth:"2",strokeLinecap:"round",strokeLinejoin:"round"})})]})}var s=a(53161);let o=(0,a(10482).aT)({id:"LOAD-spokes",source:"loading-ui",zh_name:"辐条旋转",en_name:"Spokes",summary_zh:"八根辐条组成的图标匀速转圈，线条感更强的菊花；轻量等待。",hint_zh:"看一圈",category:"加载",triggers:["auto"],tags_motion:["克制"],registry_item:"spokes",component:{path:"src/registry/loading-ui/spokes.tsx",export:"Spokes"},deps:[],controls:[{name:"size",label_zh:"尺寸",kind:"range",min:16,max:96,step:4,default:40,unit:"px"},{name:"duration",label_zh:"一圈用时",kind:"range",min:.3,max:4,step:.1,default:1,unit:"s"},{name:"color",label_zh:"颜色",kind:"color",default:"#6366f1"}],preset_default:{size:40,duration:1,color:"#6366f1"},presets:[],usage_template:'<Spokes style={{ width: {{size}}, height: {{size}}, color: "{{color}}", "--duration": "{{duration}}s" }} />'});function l({props:e,onFire:t,replayKey:a}){return(0,s.b)(t),(0,r.jsx)("div",{className:"flex items-center justify-center","data-demo-trigger":!0,children:(0,r.jsx)(n,{style:{width:e.size,height:e.size,color:e.color,"--duration":`${e.duration}s`}})},a)}},74549:(e,t,a)=>{a.r(t),a.d(t,{default:()=>l,meta:()=>o});var r=a(95155),i=a(40980);function n({className:e,...t}){return(0,r.jsxs)(r.Fragment,{children:[(0,r.jsx)("style",{children:`
        @keyframes loading-ui-quarter-ring-rotation {
          0% {
            transform: rotate(0deg);
          }

          100% {
            transform: rotate(360deg);
          }
        }
      `}),(0,r.jsx)("span",{role:"status",className:(0,i.cn)("inline-block rounded-full border-t-[3px] border-r-[3px] border-t-current border-r-transparent",e),style:{animation:"loading-ui-quarter-ring-rotation var(--duration, 1s) linear infinite"},...t,children:(0,r.jsx)("span",{className:"sr-only",children:"Loading"})})]})}var s=a(53161);let o=(0,a(10482).aT)({id:"LOAD-quarter-ring",source:"loading-ui",zh_name:"四分弧旋转",en_name:"Quarter Ring",summary_zh:"只保留四分之一的细弧匀速转圈，最简的旋转指示；行内或按钮里的轻量等待。",hint_zh:"看一圈",category:"加载",triggers:["auto"],tags_motion:["克制"],registry_item:"quarter-ring",component:{path:"src/registry/loading-ui/quarter-ring.tsx",export:"QuarterRing"},deps:[],controls:[{name:"size",label_zh:"尺寸",kind:"range",min:16,max:96,step:4,default:40,unit:"px"},{name:"duration",label_zh:"一圈用时",kind:"range",min:.3,max:4,step:.1,default:1,unit:"s"},{name:"color",label_zh:"颜色",kind:"color",default:"#6366f1"}],preset_default:{size:40,duration:1,color:"#6366f1"},presets:[],usage_template:'<QuarterRing style={{ width: {{size}}, height: {{size}}, color: "{{color}}", "--duration": "{{duration}}s" }} />'});function l({props:e,onFire:t,replayKey:a}){return(0,s.b)(t),(0,r.jsx)("div",{className:"flex items-center justify-center","data-demo-trigger":!0,children:(0,r.jsx)(n,{style:{width:e.size,height:e.size,color:e.color,"--duration":`${e.duration}s`}})},a)}},88637:(e,t,a)=>{a.r(t),a.d(t,{default:()=>l,meta:()=>o});var r=a(95155),i=a(40980);function n({className:e,...t}){return(0,r.jsxs)(r.Fragment,{children:[(0,r.jsx)("style",{children:`
        @keyframes loading-ui-clock-ring-rotation {
          0% {
            transform: rotate(0deg);
          }

          100% {
            transform: rotate(360deg);
          }
        }
      `}),(0,r.jsxs)("span",{role:"status",className:(0,i.cn)("relative inline-block rounded-full border-2 border-current",e),style:{animation:"loading-ui-clock-ring-rotation var(--duration, 1.5s) linear infinite"},...t,children:[(0,r.jsx)("span",{"aria-hidden":"true",className:"absolute top-0 left-1/2 bg-current",style:{width:"6.25%",height:"50%",transform:"translateX(-50%)"}}),(0,r.jsx)("span",{className:"sr-only",children:"Loading"})]})]})}var s=a(53161);let o=(0,a(10482).aT)({id:"LOAD-clock-ring",source:"loading-ui",zh_name:"时钟指针环",en_name:"Clock Ring",summary_zh:"圆环里一根指针从圆心指向十二点匀速转圈，像时钟走秒；适合强调时间流逝的等待。",hint_zh:"看指针走一圈",category:"加载",triggers:["auto"],tags_motion:["克制"],registry_item:"clock-ring",component:{path:"src/registry/loading-ui/clock-ring.tsx",export:"ClockRing"},deps:[],controls:[{name:"size",label_zh:"尺寸",kind:"range",min:16,max:96,step:4,default:40,unit:"px"},{name:"duration",label_zh:"一圈用时",kind:"range",min:.5,max:5,step:.1,default:1.5,unit:"s"},{name:"color",label_zh:"颜色",kind:"color",default:"#6366f1"}],preset_default:{size:40,duration:1.5,color:"#6366f1"},presets:[],usage_template:'<ClockRing style={{ width: {{size}}, height: {{size}}, color: "{{color}}", "--duration": "{{duration}}s" }} />'});function l({props:e,onFire:t,replayKey:a}){return(0,s.b)(t),(0,r.jsx)("div",{className:"flex items-center justify-center","data-demo-trigger":!0,children:(0,r.jsx)(n,{style:{width:e.size,height:e.size,color:e.color,"--duration":`${e.duration}s`}})},a)}},90652:(e,t,a)=>{a.r(t),a.d(t,{default:()=>u,meta:()=>c});var r=a(95155),i=a(40980);let n="loading-ui-comet-shadow",s="loading-ui-comet-rotation";function o(e,t,a){return Math.min(Math.max(e,t),a)}function l({className:e,style:t,headScale:a=.2,radiusScale:d=.83,...c}){let u=o(a,.08,.35),m=o(d,.3,1.1),h={...t,"--loading-ui-comet-head":`${(100*u).toFixed(2)}cqmin`,"--loading-ui-comet-radius":`${(100*m).toFixed(2)}cqmin`};return(0,r.jsxs)(r.Fragment,{children:[(0,r.jsx)("style",{children:`
        @keyframes ${n} {
          0% {
            box-shadow:
              0 calc(var(--loading-ui-comet-radius) * -1) 0 calc(var(--loading-ui-comet-head) * -2),
              0 calc(var(--loading-ui-comet-radius) * -1) 0 calc(var(--loading-ui-comet-head) * -2.1),
              0 calc(var(--loading-ui-comet-radius) * -1) 0 calc(var(--loading-ui-comet-head) * -2.2),
              0 calc(var(--loading-ui-comet-radius) * -1) 0 calc(var(--loading-ui-comet-head) * -2.3),
              0 calc(var(--loading-ui-comet-radius) * -1) 0 calc(var(--loading-ui-comet-head) * -2.385);
          }

          5%,
          95% {
            box-shadow:
              0 calc(var(--loading-ui-comet-radius) * -1) 0 calc(var(--loading-ui-comet-head) * -2),
              0 calc(var(--loading-ui-comet-radius) * -1) 0 calc(var(--loading-ui-comet-head) * -2.1),
              0 calc(var(--loading-ui-comet-radius) * -1) 0 calc(var(--loading-ui-comet-head) * -2.2),
              0 calc(var(--loading-ui-comet-radius) * -1) 0 calc(var(--loading-ui-comet-head) * -2.3),
              0 calc(var(--loading-ui-comet-radius) * -1) 0 calc(var(--loading-ui-comet-head) * -2.385);
          }

          10%,
          59% {
            box-shadow:
              0 calc(var(--loading-ui-comet-radius) * -1) 0 calc(var(--loading-ui-comet-head) * -2),
              calc(var(--loading-ui-comet-radius) * -0.105) calc(var(--loading-ui-comet-radius) * -0.994) 0 calc(var(--loading-ui-comet-head) * -2.1),
              calc(var(--loading-ui-comet-radius) * -0.208) calc(var(--loading-ui-comet-radius) * -0.978) 0 calc(var(--loading-ui-comet-head) * -2.2),
              calc(var(--loading-ui-comet-radius) * -0.308) calc(var(--loading-ui-comet-radius) * -0.95) 0 calc(var(--loading-ui-comet-head) * -2.3),
              calc(var(--loading-ui-comet-radius) * -0.358) calc(var(--loading-ui-comet-radius) * -0.934) 0 calc(var(--loading-ui-comet-head) * -2.385);
          }

          20% {
            box-shadow:
              0 calc(var(--loading-ui-comet-radius) * -1) 0 calc(var(--loading-ui-comet-head) * -2),
              calc(var(--loading-ui-comet-radius) * -0.407) calc(var(--loading-ui-comet-radius) * -0.913) 0 calc(var(--loading-ui-comet-head) * -2.1),
              calc(var(--loading-ui-comet-radius) * -0.669) calc(var(--loading-ui-comet-radius) * -0.743) 0 calc(var(--loading-ui-comet-head) * -2.2),
              calc(var(--loading-ui-comet-radius) * -0.808) calc(var(--loading-ui-comet-radius) * -0.588) 0 calc(var(--loading-ui-comet-head) * -2.3),
              calc(var(--loading-ui-comet-radius) * -0.902) calc(var(--loading-ui-comet-radius) * -0.41) 0 calc(var(--loading-ui-comet-head) * -2.385);
          }

          38% {
            box-shadow:
              0 calc(var(--loading-ui-comet-radius) * -1) 0 calc(var(--loading-ui-comet-head) * -2),
              calc(var(--loading-ui-comet-radius) * -0.454) calc(var(--loading-ui-comet-radius) * -0.892) 0 calc(var(--loading-ui-comet-head) * -2.1),
              calc(var(--loading-ui-comet-radius) * -0.777) calc(var(--loading-ui-comet-radius) * -0.629) 0 calc(var(--loading-ui-comet-head) * -2.2),
              calc(var(--loading-ui-comet-radius) * -0.934) calc(var(--loading-ui-comet-radius) * -0.358) 0 calc(var(--loading-ui-comet-head) * -2.3),
              calc(var(--loading-ui-comet-radius) * -0.988) calc(var(--loading-ui-comet-radius) * -0.108) 0 calc(var(--loading-ui-comet-head) * -2.385);
          }

          100% {
            box-shadow:
              0 calc(var(--loading-ui-comet-radius) * -1) 0 calc(var(--loading-ui-comet-head) * -2),
              0 calc(var(--loading-ui-comet-radius) * -1) 0 calc(var(--loading-ui-comet-head) * -2.1),
              0 calc(var(--loading-ui-comet-radius) * -1) 0 calc(var(--loading-ui-comet-head) * -2.2),
              0 calc(var(--loading-ui-comet-radius) * -1) 0 calc(var(--loading-ui-comet-head) * -2.3),
              0 calc(var(--loading-ui-comet-radius) * -1) 0 calc(var(--loading-ui-comet-head) * -2.385);
          }
        }

        @keyframes ${s} {
          0% {
            transform: rotate(0deg);
          }

          100% {
            transform: rotate(360deg);
          }
        }
      `}),(0,r.jsxs)("span",{role:"status","aria-label":"Loading",className:(0,i.cn)("@container-[size] relative inline-flex aspect-square items-center justify-center align-middle",e),style:h,...c,children:[(0,r.jsx)("span",{"aria-hidden":"true",className:"absolute inset-0 rounded-full",style:{animation:`${n} var(--duration, 1.7s) infinite var(--easing, ease), ${s} var(--duration, 1.7s) infinite var(--easing, ease)`,transform:"translateZ(0)"}}),(0,r.jsx)("span",{className:"sr-only",children:"Loading"})]})]})}var d=a(53161);let c=(0,a(10482).aT)({id:"LOAD-comet-spinner",source:"loading-ui",zh_name:"彗星拖尾",en_name:"Comet Spinner",summary_zh:"一颗亮点沿圆轨道飞行，身后拖出逐渐变细的尾巴，像彗星绕圈；适合有点仪式感的全页加载。",hint_zh:"看彗星绕一圈",category:"加载",triggers:["auto"],tags_motion:["华丽"],registry_item:"comet-spinner",component:{path:"src/registry/loading-ui/comet-spinner.tsx",export:"CometSpinner"},deps:[],controls:[{name:"size",label_zh:"尺寸",kind:"range",min:16,max:96,step:4,default:48,unit:"px"},{name:"duration",label_zh:"一圈用时",kind:"range",min:.6,max:4,step:.1,default:1.7,unit:"s"},{name:"headScale",label_zh:"头部大小",kind:"range",unit:"\xd7",min:.08,max:.35,step:.01,default:.2},{name:"color",label_zh:"颜色",kind:"color",default:"#6366f1"}],preset_default:{size:48,duration:1.7,headScale:.2,color:"#6366f1"},presets:[{name_zh:"大头",props:{headScale:.3}}],usage_template:'<CometSpinner headScale={{headScale}} style={{ width: {{size}}, height: {{size}}, color: "{{color}}", "--duration": "{{duration}}s" }} />'});function u({props:e,onFire:t,replayKey:a}){return(0,d.b)(t),(0,r.jsx)("div",{className:"flex items-center justify-center","data-demo-trigger":!0,children:(0,r.jsx)(l,{headScale:e.headScale,style:{width:e.size,height:e.size,color:e.color,"--duration":`${e.duration}s`}})},a)}},92891:(e,t,a)=>{a.r(t),a.d(t,{default:()=>l,meta:()=>o});var r=a(95155),i=a(40980);function n({className:e,...t}){return(0,r.jsxs)(r.Fragment,{children:[(0,r.jsx)("style",{children:`
        @keyframes loading-ui-orbit-ring-rotation {
          0% {
            transform: rotate(0deg);
          }

          100% {
            transform: rotate(360deg);
          }
        }
      `}),(0,r.jsxs)("span",{role:"status",className:(0,i.cn)("relative inline-block",e),style:{animation:"loading-ui-orbit-ring-rotation var(--duration, 1s) linear infinite"},...t,children:[(0,r.jsx)("span",{"aria-hidden":"true",className:"absolute inset-0 rounded-full border-2 border-current",style:{opacity:.25}}),(0,r.jsx)("span",{"aria-hidden":"true",className:"absolute top-1/2 left-1/2 rounded-full border-2 border-transparent border-b-current",style:{width:"116.667%",height:"116.667%",transform:"translate(-50%, -50%)"}}),(0,r.jsx)("span",{className:"sr-only",children:"Loading"})]})]})}var s=a(53161);let o=(0,a(10482).aT)({id:"LOAD-orbit-ring",source:"loading-ui",zh_name:"外圈绕行",en_name:"Orbit Ring",summary_zh:"淡色内环外面套一段更大的实色弧一起转，弧在外圈绕行；轻量等待。",hint_zh:"看一圈",category:"加载",triggers:["auto"],tags_motion:["克制"],registry_item:"orbit-ring",component:{path:"src/registry/loading-ui/orbit-ring.tsx",export:"OrbitRing"},deps:[],controls:[{name:"size",label_zh:"尺寸",kind:"range",min:16,max:96,step:4,default:40,unit:"px"},{name:"duration",label_zh:"一圈用时",kind:"range",min:.3,max:4,step:.1,default:1,unit:"s"},{name:"color",label_zh:"颜色",kind:"color",default:"#6366f1"}],preset_default:{size:40,duration:1,color:"#6366f1"},presets:[],usage_template:'<OrbitRing style={{ width: {{size}}, height: {{size}}, color: "{{color}}", "--duration": "{{duration}}s" }} />'});function l({props:e,onFire:t,replayKey:a}){return(0,s.b)(t),(0,r.jsx)("div",{className:"flex items-center justify-center","data-demo-trigger":!0,children:(0,r.jsx)(n,{style:{width:e.size,height:e.size,color:e.color,"--duration":`${e.duration}s`}})},a)}},94579:(e,t,a)=>{a.r(t),a.d(t,{default:()=>d,meta:()=>l});var r=a(95155),i=a(40980);let n=["█","▓","▒"];function s({className:e,blocks:t=n,track:a="░",trackLength:o=10,style:l,...d}){let c=Math.max(2,Math.floor(o)),u=n.map((e,a)=>t[a]??n[a]),m=u.length-1;return(0,r.jsxs)(r.Fragment,{children:[(0,r.jsx)("style",{children:`
        @keyframes loading-ui-conveyor-loop {
          0% {
            transform: translateX(var(--loader-start-x));
          }

          100% {
            transform: translateX(var(--loader-end-x));
          }
        }
      `}),(0,r.jsxs)("span",{role:"status",className:(0,i.cn)("relative inline-flex h-[1em] w-[var(--loader-width)] items-center overflow-hidden font-mono text-xl leading-none text-current select-none",e),style:{"--loader-width":`${c}ch`,"--loader-start-x":`-${m}ch`,"--loader-end-x":`${c+m}ch`,...l},...d,children:[(0,r.jsx)("span",{"aria-hidden":"true",className:"pointer-events-none absolute inset-0 whitespace-nowrap",children:a.repeat(c)}),u.map((e,t)=>(0,r.jsx)("span",{"aria-hidden":"true",className:(0,i.cn)("pointer-events-none absolute top-0 left-0 flex h-full w-[1ch] items-center justify-center text-center",["z-30","z-20","z-10"][t]),style:{animation:"loading-ui-conveyor-loop var(--duration, 1.8s) linear infinite",animationDelay:`calc(var(--delay, 0.05s) * ${t})`,backgroundColor:"var(--mask-color, var(--background))"},children:e},`${e}-${t}`)),(0,r.jsx)("span",{className:"sr-only",children:"Loading"})]})]})}var o=a(53161);let l=(0,a(10482).aT)({id:"LOAD-conveyor-loop",source:"loading-ui",zh_name:"字符传送带",en_name:"Conveyor Loop",summary_zh:"三枚字符块从左到右匀速穿过浅色轨道，出界后从左边再进来，像传送带；终端风等待。",hint_zh:"看它穿过一次",category:"加载",triggers:["auto"],tags_motion:["克制"],registry_item:"conveyor-loop",component:{path:"src/registry/loading-ui/conveyor-loop.tsx",export:"ConveyorLoop"},deps:[],controls:[{name:"fontSize",label_zh:"字号",kind:"range",min:12,max:40,step:2,default:20,unit:"px"},{name:"trackLength",label_zh:"轨道长度",kind:"range",min:4,max:20,step:1,default:10,unit:"格"},{name:"duration",label_zh:"穿过一次用时",kind:"range",min:.6,max:5,step:.1,default:1.8,unit:"s"},{name:"color",label_zh:"颜色",kind:"color",default:"#6366f1"},{name:"maskColor",label_zh:"遮罩色",kind:"color",default:"#171717"}],preset_default:{fontSize:20,trackLength:10,duration:1.8,color:"#6366f1",maskColor:"#171717"},presets:[],usage_template:'<ConveyorLoop trackLength={{trackLength}} style={{ fontSize: {{fontSize}}, color: "{{color}}", "--mask-color": {{maskColor}}, "--duration": "{{duration}}s" }} />'});function d({props:e,onFire:t,replayKey:a}){let i=e.maskColor;return(0,o.b)(t),(0,r.jsx)("div",{className:"flex items-center justify-center","data-demo-trigger":!0,children:(0,r.jsx)(s,{trackLength:e.trackLength,style:{fontSize:e.fontSize,color:e.color,"--mask-color":i??"#171717","--duration":`${e.duration}s`}})},a)}},94977:(e,t,a)=>{a.r(t),a.d(t,{default:()=>l,meta:()=>o});var r=a(95155),i=a(40980);function n({className:e,...t}){return(0,r.jsxs)("svg",{viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",xmlns:"http://www.w3.org/2000/svg",role:"status",className:(0,i.cn)(e),...t,children:[(0,r.jsx)("circle",{cx:"12",cy:"12",r:"9.5",opacity:"0.1",strokeWidth:"2",strokeLinecap:"round"}),(0,r.jsxs)("circle",{cx:"12",cy:"12",r:"9.5",strokeWidth:"2",strokeLinecap:"round",children:[(0,r.jsx)("animateTransform",{attributeName:"transform",type:"rotate",from:"0 12 12",to:"360 12 12",dur:"2s",repeatCount:"indefinite"}),(0,r.jsx)("animate",{attributeName:"stroke-dasharray",values:"0 150;42 150;42 150",keyTimes:"0;0.5;1",dur:"1.5s",repeatCount:"indefinite"}),(0,r.jsx)("animate",{attributeName:"stroke-dashoffset",values:"0;-16;-59",keyTimes:"0;0.5;1",dur:"1.5s",repeatCount:"indefinite"})]})]})}var s=a(53161);let o=(0,a(10482).aT)({id:"LOAD-dash-ring",source:"loading-ui",zh_name:"描边伸缩环",en_name:"Dash Ring",summary_zh:"圆环上一段虚线弧一边转圈一边伸长再缩回，纯 SVG 动画不依赖 JS；轻量等待。",hint_zh:"看弧线伸缩",category:"加载",triggers:["auto"],tags_motion:["克制"],registry_item:"dash-ring",component:{path:"src/registry/loading-ui/dash-ring.tsx",export:"DashRing"},deps:[],controls:[{name:"size",label_zh:"尺寸",kind:"range",min:16,max:96,step:4,default:40,unit:"px"},{name:"color",label_zh:"颜色",kind:"color",default:"#6366f1"}],preset_default:{size:40,color:"#6366f1"},presets:[],usage_template:'<DashRing style={{ width: {{size}}, height: {{size}}, color: "{{color}}" }} />'});function l({props:e,onFire:t,replayKey:a}){return(0,s.b)(t),(0,r.jsx)("div",{className:"flex items-center justify-center","data-demo-trigger":!0,children:(0,r.jsx)(n,{style:{width:e.size,height:e.size,color:e.color}})},a)}},95022:(e,t,a)=>{a.r(t),a.d(t,{default:()=>d,meta:()=>l});var r=a(95155),i=a(63197),n=a(40980);function s({children:e,as:t="p",className:a,minOpacity:i=.45,style:o,...l}){return(0,r.jsxs)(r.Fragment,{children:[(0,r.jsx)("style",{children:`
        @keyframes loading-ui-text-blink {
          0%,
          100% {
            opacity: 1;
          }

          50% {
            opacity: var(--loading-ui-text-blink-opacity);
          }
        }
      `}),(0,r.jsx)(t,{className:(0,n.cn)("inline-block font-medium",a),style:{...o,"--loading-ui-text-blink-opacity":i,animation:"loading-ui-text-blink var(--duration, 2s) ease-in-out infinite"},...l,children:e})]})}var o=a(53161);let l=(0,a(10482).aT)({id:"LOAD-text-blink",source:"loading-ui",zh_name:"文字呼吸",en_name:"Text Blink",summary_zh:"整段文字在全亮和半透明之间缓慢呼吸；「正在生成…」这类文字内联等待里最安静的一种。",hint_zh:"看文字明暗呼吸",category:"加载",triggers:["auto"],tags_motion:["克制"],registry_item:"text-blink",component:{path:"src/registry/loading-ui/text-blink.tsx",export:"TextBlink"},deps:[],controls:[{name:"text",label_zh:"文案",kind:"text",default:"正在生成…"},{name:"minOpacity",label_zh:"最暗时透明度",kind:"range",min:0,max:.9,step:.05,default:.45},{name:"duration",label_zh:"一次呼吸用时",kind:"range",min:.5,max:6,step:.1,default:2,unit:"s"}],preset_default:{text:"正在生成…",minOpacity:.45,duration:2},presets:[],usage_template:'<TextBlink minOpacity={{minOpacity}} className="text-2xl font-medium" style={{ "--duration": "{{duration}}s" }}>{{text}}</TextBlink>'});function d({props:e,onFire:t,replayKey:a}){let n=(0,i.q)(),l=e.text&&"正在生成…"!==e.text?e.text:n("正在生成…");return(0,o.b)(t),(0,r.jsx)("div",{className:"flex items-center justify-center","data-demo-trigger":!0,children:(0,r.jsx)(s,{minOpacity:e.minOpacity,className:"text-2xl font-medium tracking-tight",style:{"--duration":`${e.duration}s`},children:l})},a)}},96327:(e,t,a)=>{a.r(t),a.d(t,{default:()=>l,meta:()=>o});var r=a(95155),i=a(40980);function n({className:e,...t}){return(0,r.jsxs)("svg",{viewBox:"0 0 44 44",fill:"none",stroke:"currentColor",xmlns:"http://www.w3.org/2000/svg",className:(0,i.cn)(e),...t,children:[(0,r.jsx)("title",{children:"Loading..."}),(0,r.jsxs)("g",{fill:"none",fillRule:"evenodd",strokeWidth:"2",children:[(0,r.jsxs)("circle",{cx:"22",cy:"22",r:"1",children:[(0,r.jsx)("animate",{attributeName:"r",begin:"0s",calcMode:"spline",dur:"1.8s",keySplines:"0.165, 0.84, 0.44, 1",keyTimes:"0; 1",repeatCount:"indefinite",values:"1; 20"}),(0,r.jsx)("animate",{attributeName:"stroke-opacity",begin:"0s",calcMode:"spline",dur:"1.8s",keySplines:"0.3, 0.61, 0.355, 1",keyTimes:"0; 1",repeatCount:"indefinite",values:"1; 0"})]}),(0,r.jsxs)("circle",{cx:"22",cy:"22",r:"1",children:[(0,r.jsx)("animate",{attributeName:"r",begin:"-0.9s",calcMode:"spline",dur:"1.8s",keySplines:"0.165, 0.84, 0.44, 1",keyTimes:"0; 1",repeatCount:"indefinite",values:"1; 20"}),(0,r.jsx)("animate",{attributeName:"stroke-opacity",begin:"-0.9s",calcMode:"spline",dur:"1.8s",keySplines:"0.3, 0.61, 0.355, 1",keyTimes:"0; 1",repeatCount:"indefinite",values:"1; 0"})]})]})]})}var s=a(53161);let o=(0,a(10482).aT)({id:"LOAD-ripple",source:"loading-ui",zh_name:"水波扩散",en_name:"Ripple",summary_zh:"两圈细线从中心不断扩散变大并淡出，像水面涟漪；轻量等待。",hint_zh:"看涟漪散开",category:"加载",triggers:["auto"],tags_motion:["克制"],registry_item:"ripple",component:{path:"src/registry/loading-ui/ripple.tsx",export:"Ripple"},deps:[],controls:[{name:"size",label_zh:"尺寸",kind:"range",min:16,max:96,step:4,default:48,unit:"px"},{name:"color",label_zh:"颜色",kind:"color",default:"#6366f1"}],preset_default:{size:48,color:"#6366f1"},presets:[],usage_template:'<Ripple style={{ width: {{size}}, height: {{size}}, color: "{{color}}" }} />'});function l({props:e,onFire:t,replayKey:a}){return(0,s.b)(t),(0,r.jsx)("div",{className:"flex items-center justify-center","data-demo-trigger":!0,children:(0,r.jsx)(n,{style:{width:e.size,height:e.size,color:e.color}})},a)}},96360:(e,t,a)=>{a.r(t),a.d(t,{default:()=>d,meta:()=>l});var r=a(95155),i=a(40980);let n=["█","▓","▒"];function s({className:e,blocks:t=n,size:a=5,track:o="░",style:l,...d}){let c=Math.max(2,Math.floor(a)),u=n.map((e,a)=>t[a]??n[a]),m=Array.from({length:c*c},(e,t)=>{let a=Math.floor(t/c),r=t%c;return 0===a||a===c-1||0===r||r===c-1?o:" "});return(0,r.jsxs)(r.Fragment,{children:[(0,r.jsx)("style",{children:`
        @keyframes loading-ui-square-accordion {
          0% {
            transform: translate(0, 0);
          }

          15%,
          25% {
            transform: translate(var(--loader-x), 0);
          }

          40%,
          50% {
            transform: translate(var(--loader-x), var(--loader-y));
          }

          65%,
          75% {
            transform: translate(0, var(--loader-y));
          }

          90%,
          100% {
            transform: translate(0, 0);
          }
        }
      `}),(0,r.jsxs)("span",{role:"status",className:(0,i.cn)("relative inline-flex h-[var(--loader-size)] w-[var(--loader-size)] overflow-hidden font-mono text-xl leading-none text-current select-none",e),style:{"--loader-size":`${c}ch`,"--loader-x":`${c-1}ch`,"--loader-y":`${c-1}ch`,...l},...d,children:[(0,r.jsx)("span",{"aria-hidden":"true",className:"pointer-events-none absolute inset-0 grid",style:{gridTemplateColumns:`repeat(${c}, 1ch)`,gridTemplateRows:`repeat(${c}, 1ch)`},children:m.map((e,t)=>(0,r.jsx)("span",{className:"flex h-[1ch] w-[1ch] items-center justify-center",children:e},t))}),u.map((e,t)=>(0,r.jsx)("span",{"aria-hidden":"true",className:(0,i.cn)("pointer-events-none absolute top-0 left-0 flex h-[1ch] w-[1ch] items-center justify-center",["z-30","z-20","z-10"][t]),style:{animation:"loading-ui-square-accordion var(--duration, 3.5s) linear infinite",animationDelay:`calc(var(--delay, 0.08s) * ${t})`,backgroundColor:"var(--mask-color, var(--background))"},children:e},`${e}-${t}`)),(0,r.jsx)("span",{className:"sr-only",children:"Loading"})]})]})}var o=a(53161);let l=(0,a(10482).aT)({id:"LOAD-square-accordion",source:"loading-ui",zh_name:"方框折返",en_name:"Square Accordion",summary_zh:"浅色字符围成方框，三枚深色块沿框边走一段停一下再走，像手风琴一格格推进；终端风等待。",hint_zh:"看它走完四边",category:"加载",triggers:["auto"],tags_motion:["克制"],registry_item:"square-accordion",component:{path:"src/registry/loading-ui/square-accordion.tsx",export:"SquareAccordion"},deps:[],controls:[{name:"fontSize",label_zh:"字号",kind:"range",min:12,max:40,step:2,default:20,unit:"px"},{name:"cells",label_zh:"边长",kind:"range",min:3,max:9,step:1,default:5,unit:"格"},{name:"duration",label_zh:"一圈用时",kind:"range",min:1,max:8,step:.1,default:3.5,unit:"s"},{name:"color",label_zh:"颜色",kind:"color",default:"#6366f1"},{name:"maskColor",label_zh:"遮罩色",kind:"color",default:"#171717"}],preset_default:{fontSize:20,cells:5,duration:3.5,color:"#6366f1",maskColor:"#171717"},presets:[],usage_template:'<SquareAccordion size={{cells}} style={{ fontSize: {{fontSize}}, color: "{{color}}", "--mask-color": {{maskColor}}, "--duration": "{{duration}}s" }} />'});function d({props:e,onFire:t,replayKey:a}){let i=e.maskColor;return(0,o.b)(t),(0,r.jsx)("div",{className:"flex items-center justify-center","data-demo-trigger":!0,children:(0,r.jsx)(s,{size:e.cells,style:{fontSize:e.fontSize,color:e.color,"--mask-color":i??"#171717","--duration":`${e.duration}s`}})},a)}},96529:(e,t,a)=>{a.r(t),a.d(t,{default:()=>l,meta:()=>o});var r=a(95155),i=a(40980);function n({className:e,...t}){return(0,r.jsxs)(r.Fragment,{children:[(0,r.jsx)("style",{children:`
        @keyframes loading-ui-twin-orbit-rotate {
          100% {
            transform: rotate(360deg) translate(155%);
          }
        }
      `}),(0,r.jsxs)("span",{role:"status",className:(0,i.cn)("relative inline-block aspect-square rounded-full bg-current",e),...t,children:[(0,r.jsx)("span",{"aria-hidden":"true",className:"absolute inset-0 rounded-full bg-current",style:{transform:"rotate(0deg) translate(155%)",animation:"loading-ui-twin-orbit-rotate var(--duration, 1s) ease infinite"}}),(0,r.jsx)("span",{"aria-hidden":"true",className:"absolute inset-0 rounded-full bg-current",style:{transform:"rotate(0deg) translate(155%)",animation:"loading-ui-twin-orbit-rotate var(--duration, 1s) ease infinite",animationDelay:"calc(var(--duration, 1s) / 2)"}}),(0,r.jsx)("span",{className:"sr-only",children:"Loading"})]})]})}var s=a(53161);let o=(0,a(10482).aT)({id:"LOAD-twin-orbit",source:"loading-ui",zh_name:"双星绕行",en_name:"Twin Orbit",summary_zh:"中心一颗圆点，两颗小球在外圈一前一后绕行，转速带缓急；轻量等待。",hint_zh:"看两颗小球绕一圈",category:"加载",triggers:["auto"],tags_motion:["弹性"],registry_item:"twin-orbit",component:{path:"src/registry/loading-ui/twin-orbit.tsx",export:"TwinOrbit"},deps:[],controls:[{name:"size",label_zh:"尺寸",kind:"range",min:16,max:96,step:4,default:40,unit:"px"},{name:"duration",label_zh:"一圈用时",kind:"range",min:.3,max:4,step:.1,default:1,unit:"s"},{name:"color",label_zh:"颜色",kind:"color",default:"#6366f1"}],preset_default:{size:40,duration:1,color:"#6366f1"},presets:[],usage_template:'<TwinOrbit style={{ width: {{size}} / 4, height: {{size}} / 4, color: "{{color}}", "--duration": "{{duration}}s" }} />'});function l({props:e,onFire:t,replayKey:a}){return(0,s.b)(t),(0,r.jsx)("div",{className:"flex items-center justify-center","data-demo-trigger":!0,children:(0,r.jsx)(n,{style:{width:e.size/4,height:e.size/4,color:e.color,"--duration":`${e.duration}s`}})},a)}},96740:(e,t,a)=>{a.r(t),a.d(t,{default:()=>o,meta:()=>s});var r=a(95155);function i(e){return(0,r.jsxs)(r.Fragment,{children:[(0,r.jsx)("style",{children:`
        @keyframes loading-ui-swirling-spin {
          to {
            transform: rotate(360deg);
          }
        }

        @keyframes loading-ui-swirling-dash {
          0% {
            stroke-dasharray: 1, 800;
            stroke-dashoffset: 0;
          }
          50% {
            stroke-dasharray: 400, 400;
            stroke-dashoffset: -200px;
          }
          100% {
            stroke-dasharray: 800, 1;
            stroke-dashoffset: -800px;
          }
        }

        .loading-ui-swirling-circle {
          transform-origin: center;
          animation:
            loading-ui-swirling-dash var(--duration, 1.5s) ease-in-out infinite alternate,
            loading-ui-swirling-spin calc(var(--duration, 1.5s) * 1.333333) linear infinite;
        }
      `}),(0,r.jsx)("svg",{viewBox:"0 0 800 800",xmlns:"http://www.w3.org/2000/svg",...e,children:(0,r.jsx)("circle",{className:"loading-ui-swirling-circle",cx:"400",cy:"400",r:"200",fill:"none",stroke:"currentColor",strokeLinecap:"round",strokeWidth:"50"})})]})}var n=a(53161);let s=(0,a(10482).aT)({id:"LOAD-swirling",source:"loading-ui",zh_name:"旋涡描边",en_name:"Swirling",summary_zh:"粗描边圆环一边转圈一边从一点伸展成整圈再收回，像旋涡收放；适合全页加载或占位面积大的场景。",hint_zh:"看它收放一次",category:"加载",triggers:["auto"],tags_motion:["华丽"],registry_item:"swirling",component:{path:"src/registry/loading-ui/swirling.tsx",export:"Swirling"},deps:[],controls:[{name:"size",label_zh:"尺寸",kind:"range",min:16,max:96,step:4,default:40,unit:"px"},{name:"duration",label_zh:"收放一次用时",kind:"range",min:.5,max:5,step:.1,default:1.5,unit:"s"},{name:"color",label_zh:"颜色",kind:"color",default:"#6366f1"}],preset_default:{size:40,duration:1.5,color:"#6366f1"},presets:[],usage_template:'<Swirling style={{ width: {{size}}, height: {{size}}, color: "{{color}}", "--duration": "{{duration}}s" }} />'});function o({props:e,onFire:t,replayKey:a}){return(0,n.b)(t),(0,r.jsx)("div",{className:"flex items-center justify-center","data-demo-trigger":!0,children:(0,r.jsx)(i,{style:{width:e.size,height:e.size,color:e.color,"--duration":`${e.duration}s`}})},a)}},97787:(e,t,a)=>{a.r(t),a.d(t,{default:()=>c,meta:()=>d});var r=a(95155),i=a(10463),n=a(40980);let s={duration:2.5,ease:[.175,.885,.32,1],times:[0,.6,.6,1],repeat:1/0,repeatType:"mirror",repeatDelay:.2};function o({className:e,...t}){return(0,r.jsxs)("div",{role:"status","aria-label":"Analyzing image",className:(0,n.cn)("relative isolate shrink-0",e),...t,children:[(0,r.jsx)(i.PY1.div,{initial:{clipPath:"inset(0% 0% 0% 0%)"},animate:{clipPath:["inset(0% 0% 0% 0%)","inset(0% 105% 0% 0%)","inset(0% 105% 0% 0%)","inset(0% 0% 0% 0%)"]},transition:s,className:"absolute inset-0 z-10 bg-[var(--loading-ui-analyzing-image-background,var(--background))]",children:(0,r.jsx)("svg",{viewBox:"0 0 24 24",fill:"none",xmlns:"http://www.w3.org/2000/svg",className:"size-full",children:(0,r.jsx)("path",{d:"M4.27209 20.7279L10.8686 14.1314C11.2646 13.7354 11.4627 13.5373 11.691 13.4632C11.8918 13.3979 12.1082 13.3979 12.309 13.4632C12.5373 13.5373 12.7354 13.7354 13.1314 14.1314L19.6839 20.6839M14 15L16.8686 12.1314C17.2646 11.7354 17.4627 11.5373 17.691 11.4632C17.8918 11.3979 18.1082 11.3979 18.309 11.4632C18.5373 11.5373 18.7354 11.7354 19.1314 12.1314L22 15M10 9C10 10.1046 9.10457 11 8 11C6.89543 11 6 10.1046 6 9C6 7.89543 6.89543 7 8 7C9.10457 7 10 7.89543 10 9ZM6.8 21H17.2C18.8802 21 19.7202 21 20.362 20.673C20.9265 20.3854 21.3854 19.9265 21.673 19.362C22 18.7202 22 17.8802 22 16.2V7.8C22 6.11984 22 5.27976 21.673 4.63803C21.3854 4.07354 20.9265 3.6146 20.362 3.32698C19.7202 3 18.8802 3 17.2 3H6.8C5.11984 3 4.27976 3 3.63803 3.32698C3.07354 3.6146 2.6146 4.07354 2.32698 4.63803C2 5.27976 2 6.11984 2 7.8V16.2C2 17.8802 2 18.7202 2.32698 19.362C2.6146 19.9265 3.07354 20.3854 3.63803 20.673C4.27976 21 5.11984 21 6.8 21Z",stroke:"currentColor",strokeWidth:"1.5",strokeLinecap:"round",strokeLinejoin:"round"})})}),(0,r.jsx)(i.PY1.div,{initial:{transform:"translateX(1400%)"},animate:{transform:["translateX(1400%)","translateX(-80%)","translateX(-80%)","translateX(1400%)"]},transition:s,className:"absolute z-10 h-full w-[7%] rounded-full bg-current"}),(0,r.jsxs)("svg",{viewBox:"0 0 24 24",fill:"none",xmlns:"http://www.w3.org/2000/svg",className:"absolute inset-0 size-full",children:[(0,r.jsx)("path",{d:"M6.8 21H17.2C18.8802 21 19.7202 21 20.362 20.673C20.9265 20.3854 21.3854 19.9265 21.673 19.362C22 18.7202 22 17.8802 22 16.2V7.8C22 6.11984 22 5.27976 21.673 4.63803C21.3854 4.07354 20.9265 3.6146 20.362 3.32698C19.7202 3 18.8802 3 17.2 3H6.8C5.11984 3 4.27976 3 3.63803 3.32698C3.07354 3.6146 2.6146 4.07354 2.32698 4.63803C2 5.27976 2 6.11984 2 7.8V16.2C2 17.8802 2 18.7202 2.32698 19.362C2.6146 19.9265 3.07354 20.3854 3.63803 20.673C4.27976 21 5.11984 21 6.8 21Z",stroke:"currentColor",strokeWidth:"1.5",strokeLinecap:"round",strokeLinejoin:"round"}),(0,r.jsx)("rect",{x:"6",y:"19",width:"1",height:"1",fill:"currentColor"}),(0,r.jsx)("rect",{x:"7",y:"18",width:"1",height:"1",fill:"currentColor"}),(0,r.jsx)("rect",{x:"7",y:"19",width:"3",height:"1",fill:"currentColor"}),(0,r.jsx)("rect",{x:"9",y:"18",width:"1",height:"1",fill:"currentColor"}),(0,r.jsx)("rect",{x:"14",y:"19",width:"3",height:"1",fill:"currentColor"}),(0,r.jsx)("rect",{x:"15",y:"18",width:"1",height:"1",fill:"currentColor"}),(0,r.jsx)("rect",{x:"5",y:"18",width:"2",height:"1",fill:"currentColor"}),(0,r.jsx)("rect",{x:"5",y:"17",width:"1",height:"1",fill:"currentColor"}),(0,r.jsx)("rect",{x:"10",y:"19",width:"1",height:"1",fill:"currentColor"}),(0,r.jsx)("rect",{x:"7",y:"17",width:"1",height:"1",fill:"currentColor"}),(0,r.jsx)("rect",{x:"11",y:"19",width:"1",height:"1",fill:"currentColor"}),(0,r.jsx)("rect",{x:"10",y:"18",width:"1",height:"1",fill:"currentColor"}),(0,r.jsx)("rect",{x:"17",y:"19",width:"1",height:"1",fill:"currentColor"}),(0,r.jsx)("rect",{x:"15",y:"4",width:"2",height:"1",fill:"currentColor"}),(0,r.jsx)("rect",{x:"3",y:"9",width:"1",height:"3",fill:"currentColor"}),(0,r.jsx)("rect",{x:"4",y:"10",width:"1",height:"2",fill:"currentColor"}),(0,r.jsx)("rect",{x:"6",y:"9",width:"1",height:"1",fill:"currentColor"}),(0,r.jsx)("rect",{x:"15",y:"5",width:"1",height:"1",fill:"currentColor"}),(0,r.jsx)("rect",{x:"20",y:"8",width:"1",height:"3",fill:"currentColor"}),(0,r.jsx)("rect",{x:"19",y:"9",width:"1",height:"1",fill:"currentColor"}),(0,r.jsx)("rect",{x:"7",y:"13",width:"1",height:"1",fill:"currentColor"}),(0,r.jsx)("rect",{x:"9",y:"11",width:"1",height:"1",fill:"currentColor"}),(0,r.jsx)("rect",{x:"16",y:"12",width:"1",height:"2",fill:"currentColor"}),(0,r.jsx)("rect",{x:"13",y:"14",width:"1",height:"1",fill:"currentColor"}),(0,r.jsx)("rect",{x:"12",y:"11",width:"1",height:"1",fill:"currentColor"}),(0,r.jsx)("rect",{x:"10",y:"9",width:"1",height:"1",fill:"currentColor"}),(0,r.jsx)("rect",{x:"10",y:"15",width:"1",height:"1",fill:"currentColor"}),(0,r.jsx)("rect",{x:"10",y:"13",width:"1",height:"1",fill:"currentColor"}),(0,r.jsx)("rect",{x:"15",y:"9",width:"1",height:"1",fill:"currentColor"}),(0,r.jsx)("rect",{x:"13",y:"10",width:"1",height:"1",fill:"currentColor"}),(0,r.jsx)("rect",{x:"12",y:"14",width:"1",height:"1",fill:"currentColor"}),(0,r.jsx)("rect",{x:"5",y:"4",width:"3",height:"1",fill:"currentColor"}),(0,r.jsx)("rect",{x:"6",y:"5",width:"1",height:"1",fill:"currentColor"}),(0,r.jsx)("rect",{x:"7",y:"14",width:"1",height:"2",fill:"currentColor"}),(0,r.jsx)("rect",{x:"6",y:"14",width:"3",height:"1",fill:"currentColor"}),(0,r.jsx)("rect",{x:"16",y:"8",width:"1",height:"1",fill:"currentColor"}),(0,r.jsx)("rect",{x:"8",y:"9",width:"1",height:"1",fill:"currentColor"}),(0,r.jsx)("rect",{x:"20",y:"16",width:"1",height:"1",fill:"currentColor"}),(0,r.jsx)("rect",{x:"12",y:"12",width:"1",height:"1",fill:"currentColor"}),(0,r.jsx)("rect",{x:"8",y:"8",width:"1",height:"1",fill:"currentColor"}),(0,r.jsx)("rect",{x:"14",y:"12",width:"1",height:"1",fill:"currentColor"}),(0,r.jsx)("rect",{x:"17",y:"16",width:"2",height:"1",fill:"currentColor"}),(0,r.jsx)("rect",{x:"14",y:"17",width:"1",height:"1",fill:"currentColor"}),(0,r.jsx)("rect",{x:"11",y:"5",width:"3",height:"1",fill:"currentColor"}),(0,r.jsx)("rect",{x:"12",y:"4",width:"1",height:"1",fill:"currentColor"}),(0,r.jsx)("rect",{x:"12",y:"7",width:"1",height:"1",fill:"currentColor"}),(0,r.jsx)("rect",{x:"7",y:"11",width:"1",height:"1",fill:"currentColor"}),(0,r.jsx)("rect",{x:"15",y:"15",width:"1",height:"1",fill:"currentColor"}),(0,r.jsx)("rect",{x:"11",y:"11",width:"1",height:"1",fill:"currentColor"}),(0,r.jsx)("rect",{x:"13",y:"9",width:"1",height:"1",fill:"currentColor"}),(0,r.jsx)("rect",{x:"12",y:"15",width:"1",height:"1",fill:"currentColor"}),(0,r.jsx)("rect",{x:"9",y:"12",width:"2",height:"1",fill:"currentColor"}),(0,r.jsx)("rect",{x:"19",y:"13",width:"2",height:"1",fill:"currentColor"}),(0,r.jsx)("rect",{x:"9",y:"6",width:"1",height:"1",fill:"currentColor"}),(0,r.jsx)("rect",{x:"20",y:"4",width:"1",height:"1",fill:"currentColor"}),(0,r.jsx)("rect",{x:"19",y:"4",width:"1",height:"1",fill:"currentColor"}),(0,r.jsx)("rect",{x:"3",y:"15",width:"1",height:"2",fill:"currentColor"}),(0,r.jsx)("rect",{x:"3",y:"19",width:"1",height:"1",fill:"currentColor"})]}),(0,r.jsx)("span",{className:"sr-only",children:"Analyzing image"})]})}var l=a(53161);let d=(0,a(10482).aT)({id:"LOAD-analyzing-image",source:"loading-ui",zh_name:"图片扫描",en_name:"Analyzing Image",summary_zh:"一道竖光条从右往左扫过图片图标，扫过之处线稿变成像素点阵，再扫回来还原，循环往复；适合 AI 识图、图片分析中的等待。",hint_zh:"看光条扫过",category:"加载",triggers:["auto"],tags_motion:["华丽"],registry_item:"analyzing-image",component:{path:"src/registry/loading-ui/analyzing-image.tsx",export:"AnalyzingImage"},deps:["motion"],controls:[{name:"size",label_zh:"尺寸",kind:"range",min:32,max:160,step:8,default:96,unit:"px"},{name:"color",label_zh:"颜色",kind:"color",default:"#6366f1"}],preset_default:{size:96,color:"#6366f1"},presets:[],usage_template:'<AnalyzingImage style={{ width: {{size}}, height: {{size}}, color: "{{color}}" }} />'});function c({props:e,onFire:t,replayKey:a}){return(0,l.b)(t),(0,r.jsx)("div",{className:"flex items-center justify-center","data-demo-trigger":!0,children:(0,r.jsx)(o,{style:{width:e.size,height:e.size,color:e.color}})},a)}},98802:(e,t,a)=>{a.r(t),a.d(t,{default:()=>d,meta:()=>l});var r=a(95155),i=a(40980);function n(e,t,a){return Math.min(Math.max(e,t),a)}function s({className:e,style:t,eyeScale:a=.62,gapScale:o=.09,pupilScale:l=.32,blinkScale:d=.375,travelScale:c=.3125,...u}){let m=n(a,.28,.7),h=n(o,.04,.3),g=n(l,.12,.45),f=n(d,.15,1),p=n(c,.08,.5),x={...t,"--loading-ui-wandering-eyes-eye":`${(100*m).toFixed(2)}cqmin`,"--loading-ui-wandering-eyes-gap":`${(100*h).toFixed(2)}cqmin`,"--loading-ui-wandering-eyes-pupil-scale":`${g}`,"--loading-ui-wandering-eyes-blink":`${f}`,"--loading-ui-wandering-eyes-travel-scale":`${p}`};return(0,r.jsxs)(r.Fragment,{children:[(0,r.jsx)("style",{children:`
        @keyframes loading-ui-wandering-eyes-move {
          0%,
          10% {
            background-position: 0 0;
          }

          13%,
          40% {
            background-position: calc(var(--loading-ui-wandering-eyes-eye) * var(--loading-ui-wandering-eyes-travel-scale) * -1) 0;
          }

          43%,
          70% {
            background-position: calc(var(--loading-ui-wandering-eyes-eye) * var(--loading-ui-wandering-eyes-travel-scale)) 0;
          }

          73%,
          90% {
            background-position: 0 calc(var(--loading-ui-wandering-eyes-eye) * var(--loading-ui-wandering-eyes-travel-scale));
          }

          93%,
          100% {
            background-position: 0 0;
          }
        }

        @keyframes loading-ui-wandering-eyes-blink {
          0%,
          10%,
          12%,
          20%,
          22%,
          40%,
          42%,
          60%,
          62%,
          70%,
          72%,
          90%,
          92%,
          98%,
          100% {
            height: var(--loading-ui-wandering-eyes-eye);
          }

          11%,
          21%,
          41%,
          61%,
          71%,
          91%,
          99% {
            height: calc(var(--loading-ui-wandering-eyes-eye) * var(--loading-ui-wandering-eyes-blink));
          }
        }
      `}),(0,r.jsxs)("span",{role:"status",className:(0,i.cn)("@container-[size] relative inline-flex aspect-9/4 items-center justify-center align-middle [--eye-color:color-mix(in_srgb,currentColor_16%,transparent)] [--pupil-color:currentColor]",e),style:x,...u,children:[(0,r.jsx)("span",{"aria-hidden":"true",className:"inline-flex items-center justify-center gap-(--loading-ui-wandering-eyes-gap)",children:Array.from({length:2},(e,t)=>(0,r.jsx)("span",{className:"inline-block rounded-full",style:{width:"var(--loading-ui-wandering-eyes-eye)",height:"var(--loading-ui-wandering-eyes-eye)",backgroundColor:"var(--eye-color)",backgroundImage:"radial-gradient(circle calc(var(--loading-ui-wandering-eyes-eye) * var(--loading-ui-wandering-eyes-pupil-scale)), var(--pupil-color) 100%, transparent 0)",backgroundRepeat:"no-repeat",animation:"loading-ui-wandering-eyes-move var(--duration, 10s) infinite, loading-ui-wandering-eyes-blink var(--duration, 10s) infinite"}},t))}),(0,r.jsx)("span",{className:"sr-only",children:"Loading"})]})]})}var o=a(53161);let l=(0,a(10482).aT)({id:"LOAD-wandering-eyes",source:"loading-ui",zh_name:"张望眨眼",en_name:"Wandering Eyes",summary_zh:"一对眼睛的瞳孔左看右看再往下瞧，间或眨一下；适合「AI 思考中」或俏皮一点的等待。",hint_zh:"看它左右张望、眨眼",category:"加载",triggers:["auto"],tags_motion:["华丽"],registry_item:"wandering-eyes",component:{path:"src/registry/loading-ui/wandering-eyes.tsx",export:"WanderingEyes"},deps:[],controls:[{name:"size",label_zh:"眼高",kind:"range",min:24,max:120,step:4,default:64,unit:"px"},{name:"duration",label_zh:"张望一轮用时",kind:"range",min:3,max:20,step:.5,default:10,unit:"s"},{name:"color",label_zh:"颜色",kind:"color",default:"#6366f1"}],preset_default:{size:64,duration:10,color:"#6366f1"},presets:[],usage_template:'<WanderingEyes style={{ height: {{size}}, width: {{size}} * 2.25, color: "{{color}}", "--duration": "{{duration}}s" }} />'});function d({props:e,onFire:t,replayKey:a}){return(0,o.b)(t),(0,r.jsx)("div",{className:"flex items-center justify-center","data-demo-trigger":!0,children:(0,r.jsx)(s,{style:{height:e.size,width:2.25*e.size,color:e.color,"--duration":`${e.duration}s`}})},a)}},99653:(e,t,a)=>{a.r(t),a.d(t,{default:()=>l,meta:()=>o});var r=a(95155),i=a(40980);function n({className:e,style:t,...a}){return(0,r.jsxs)(r.Fragment,{children:[(0,r.jsx)("style",{children:`
        @keyframes loading-ui-dual-arc-spin {
          to {
            transform: rotate(360deg);
          }
        }
      `}),(0,r.jsx)("div",{className:(0,i.cn)("rounded-full border-[5px] border-transparent border-y-current",e),style:{animationName:"loading-ui-dual-arc-spin",animationDuration:"var(--duration, 1s)",animationTimingFunction:"linear",animationIterationCount:"infinite",...t},...a})]})}var s=a(53161);let o=(0,a(10482).aT)({id:"LOAD-dual-arc",source:"loading-ui",zh_name:"双弧旋转",en_name:"Dual Arc",summary_zh:"上下两段对称的实色粗弧一起转圈，比单弧更均衡；轻量等待。",hint_zh:"看一圈",category:"加载",triggers:["auto"],tags_motion:["克制"],registry_item:"dual-arc",component:{path:"src/registry/loading-ui/dual-arc.tsx",export:"DualArc"},deps:[],controls:[{name:"size",label_zh:"尺寸",kind:"range",min:16,max:96,step:4,default:40,unit:"px"},{name:"duration",label_zh:"一圈用时",kind:"range",min:.3,max:4,step:.1,default:1,unit:"s"},{name:"color",label_zh:"颜色",kind:"color",default:"#6366f1"}],preset_default:{size:40,duration:1,color:"#6366f1"},presets:[],usage_template:'<DualArc style={{ width: {{size}}, height: {{size}}, color: "{{color}}", "--duration": "{{duration}}s" }} />'});function l({props:e,onFire:t,replayKey:a}){return(0,s.b)(t),(0,r.jsx)("div",{className:"flex items-center justify-center","data-demo-trigger":!0,children:(0,r.jsx)(n,{style:{width:e.size,height:e.size,color:e.color,"--duration":`${e.duration}s`}})},a)}},99913:(e,t,a)=>{a.r(t),a.d(t,{default:()=>d,meta:()=>l});var r=a(95155),i=a(10463),n=a(40980);function s({className:e,dots:t=3,duration:a=1,...o}){return(0,r.jsxs)("span",{role:"status",className:(0,n.cn)("inline-flex items-center gap-[12%]",e),...o,children:[Array.from({length:t},(e,t)=>(0,r.jsx)(i.PY1.span,{"aria-hidden":"true",initial:{y:0},animate:{y:[0,"0.625em",0]},transition:{duration:a,repeat:1/0,repeatType:"loop",delay:.2*t,ease:"easeInOut"},className:"inline-block aspect-square grow rounded-full bg-current shadow-sm"},t)),(0,r.jsx)("span",{className:"sr-only",children:"Loading"})]})}var o=a(53161);let l=(0,a(10482).aT)({id:"LOAD-bobbing-dots",source:"loading-ui",zh_name:"三点浮沉",en_name:"Bobbing Dots",summary_zh:"三个圆点依次下沉再浮起，带轻微投影；适合聊天输入中或轻量等待，motion 驱动。",hint_zh:"看三点轮流沉浮",category:"加载",triggers:["auto"],tags_motion:["弹性"],registry_item:"bobbing-dots",component:{path:"src/registry/loading-ui/bobbing-dots.tsx",export:"BobbingDots"},deps:["motion"],controls:[{name:"size",label_zh:"总宽",kind:"range",min:16,max:96,step:4,default:32,unit:"px"},{name:"dots",label_zh:"圆点数",kind:"range",min:1,max:6,step:1,default:3},{name:"duration",label_zh:"一轮用时",kind:"range",min:.4,max:3,step:.1,default:1,unit:"s"},{name:"color",label_zh:"颜色",kind:"color",default:"#6366f1"}],preset_default:{size:32,dots:3,duration:1,color:"#6366f1"},presets:[],usage_template:'<BobbingDots dots={{dots}} duration={{duration}} style={{ width: {{size}}, color: "{{color}}" }} />'});function d({props:e,onFire:t,replayKey:a}){return(0,o.b)(t),(0,r.jsx)("div",{className:"flex items-center justify-center","data-demo-trigger":!0,children:(0,r.jsx)(s,{dots:e.dots,duration:e.duration,style:{width:e.size,color:e.color}})},a)}}}]);