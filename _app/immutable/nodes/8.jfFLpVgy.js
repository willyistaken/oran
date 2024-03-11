import{_ as ot}from"../chunks/preload-helper.BQ24v_F8.js";import{s as rt,e as s,a as p,c as i,g as v,b as h,h as E,f as w,d as u,i as D,k as a,o as lt}from"../chunks/scheduler.Bj_NYYYq.js";import{S as ct,i as dt,t as S,a as V,c as pt,b as et,d as at,m as nt,e as st,g as ht}from"../chunks/index.CJ0a16Qn.js";import"../chunks/katex.BmffG-Dk.js";const ut=""+new URL("../assets/cellular-graph.fd1daHEO.svg",import.meta.url).href;function it(y){let n,b,r,t,f,g,B='<h3 style="position:relative;top:50%;border-width:3px;">&lt;=CPRI=&gt;</h3>',C,R,_,c,k;return t=new y[0]({props:{src:"https://raw.githubusercontent.com/willyistaken/oran/main/src/lib/assets/celltower.json",background:"transparent",speed:"3",width:500,height:500,hover:!0,loop:!0,style:"position:relative;right:130px;"}}),c=new y[0]({props:{src:"https://raw.githubusercontent.com/willyistaken/oran/main/src/lib/assets/BBU.json",background:"transparent",speed:"10",width:250,height:250,hover:!0,loop:!0,defaultFrame:"4",style:"position:relative;top:220px;"}}),{c(){n=s("div"),b=s("div"),r=s("span"),et(t.$$.fragment),f=p(),g=s("div"),g.innerHTML=B,C=p(),R=s("div"),_=s("span"),et(c.$$.fragment),this.h()},l(l){n=i(l,"DIV",{class:!0});var m=E(n);b=i(m,"DIV",{class:!0});var x=E(b);r=i(x,"SPAN",{class:!0,"data-tooltip":!0});var M=E(r);at(t.$$.fragment,M),M.forEach(w),x.forEach(w),f=h(m),g=i(m,"DIV",{class:!0,"data-svelte-h":!0}),v(g)!=="svelte-1pocugw"&&(g.innerHTML=B),C=h(m),R=i(m,"DIV",{class:!0});var N=E(R);_=i(N,"SPAN",{class:!0,"data-tooltip":!0});var $=E(_);at(c.$$.fragment,$),$.forEach(w),N.forEach(w),m.forEach(w),this.h()},h(){u(r,"class","tooltip"),u(r,"data-tooltip","RRU "),u(b,"class","celltowerlottie"),u(g,"class","CPRI"),u(_,"class","tooltip"),u(_,"data-tooltip","BBU"),u(R,"class","BBUlottie"),u(n,"class","inlinebox")},m(l,m){D(l,n,m),a(n,b),a(b,r),nt(t,r,null),a(n,f),a(n,g),a(n,C),a(n,R),a(R,_),nt(c,_,null),k=!0},i(l){k||(S(t.$$.fragment,l),S(c.$$.fragment,l),k=!0)},o(l){V(t.$$.fragment,l),V(c.$$.fragment,l),k=!1},d(l){l&&w(n),st(t),st(c)}}}function ft(y){let n,b='<script src="https://unpkg.com/@lottiefiles/lottie-interactivity@latest/dist/lottie-interactivity.min.js"><\/script> <script src="https://unpkg.com/@lottiefiles/lottie-player@latest/dist/lottie-player.js"><\/script>',r,t,f,g="<span>What exactly is RAN?</span>",B,C,R=`The Radio Access Network (RAN) is one of the major components of the mobile data network. It
   is responsible for wirelessly connecting User Equipment (UE) with the Central Network (CN).`,_,c,k='<span class="tooltip" data-tooltip="Radio Access Network">RAN</span> can be devided into 2 different parts:',l,m,x,M="1.Baseband Unit (BBU):",N,$,A,K=`"Baseband" refers to a range of frequencies used by signals that have not yet been modulated
   or processed by other components. BBU is responsible for processing and managing these
   baseband signals.`,q,W,P,Q="2. Remote Radio Unit (RRU)",z,O,T,X=`The unit, also known as the Remote Radio Head (RRH), is responsible for transmitting and
   receiving wireless signals to establish connections between wireless devices and the network.`,F,H,Y=`These two components communicate with each other via optical fiber or simply an electrical
   wire. The interface facilitating this connection is known as CPRI (Common Public Radio
   Interface), which serves as a standardized method for transmitting digital data between <span class="tooltip" data-tooltip="Base Band Unit">BBU</span>
   and the <span class="tooltip" data-tooltip="Remote Radio Unit">RRU</span>. Conceptually, CPRI can be likened to the USB port found on various devices.`,G,I,L,Z=`The basic structure of a mobile network is that of a cellular network, where land areas are
   divided into individual cells
   that are each served by one or more base stations.`,J,U,tt=`<span class="tooltip" data-tooltip="Representation of a Cellular Network"><img src="${ut}" alt="Anson Lai breaks table"/></span>`,j,o=y[0]&&it(y);return{c(){n=s("head"),n.innerHTML=b,r=p(),t=s("div"),f=s("h1"),f.innerHTML=g,B=p(),C=s("span"),C.textContent=R,_=p(),c=s("span"),c.innerHTML=k,l=s("br"),m=p(),x=s("span"),x.textContent=M,N=s("br"),$=p(),A=s("span"),A.textContent=K,q=s("br"),W=p(),P=s("span"),P.textContent=Q,z=s("br"),O=p(),T=s("span"),T.textContent=X,F=p(),H=s("span"),H.innerHTML=Y,G=p(),o&&o.c(),I=p(),L=s("span"),L.textContent=Z,J=p(),U=s("center"),U.innerHTML=tt,this.h()},l(d){n=i(d,"HEAD",{"data-svelte-h":!0}),v(n)!=="svelte-bo7pj8"&&(n.innerHTML=b),r=h(d),t=i(d,"DIV",{id:!0,class:!0,"data-hard-breaks":!0});var e=E(t);f=i(e,"H1",{id:!0,"data-id":!0,"data-svelte-h":!0}),v(f)!=="svelte-xabjig"&&(f.innerHTML=g),B=h(e),C=i(e,"SPAN",{"data-svelte-h":!0}),v(C)!=="svelte-7vom92"&&(C.textContent=R),_=h(e),c=i(e,"SPAN",{"data-svelte-h":!0}),v(c)!=="svelte-1km7ipl"&&(c.innerHTML=k),l=i(e,"BR",{}),m=h(e),x=i(e,"SPAN",{"data-svelte-h":!0}),v(x)!=="svelte-t68hcx"&&(x.textContent=M),N=i(e,"BR",{}),$=h(e),A=i(e,"SPAN",{"data-svelte-h":!0}),v(A)!=="svelte-1vjoj4b"&&(A.textContent=K),q=i(e,"BR",{}),W=h(e),P=i(e,"SPAN",{"data-svelte-h":!0}),v(P)!=="svelte-cpe0d1"&&(P.textContent=Q),z=i(e,"BR",{}),O=h(e),T=i(e,"SPAN",{"data-svelte-h":!0}),v(T)!=="svelte-1ufboj7"&&(T.textContent=X),F=h(e),H=i(e,"SPAN",{"data-svelte-h":!0}),v(H)!=="svelte-1j1viz1"&&(H.innerHTML=Y),G=h(e),o&&o.l(e),I=h(e),L=i(e,"SPAN",{"data-svelte-h":!0}),v(L)!=="svelte-v5git4"&&(L.textContent=Z),J=h(e),U=i(e,"CENTER",{"data-svelte-h":!0}),v(U)!=="svelte-5md6r3"&&(U.innerHTML=tt),e.forEach(w),this.h()},h(){u(f,"id","What-exactly-is-RAN"),u(f,"data-id","What-exactly-is-RAN"),u(t,"id","doc"),u(t,"class","content"),u(t,"data-hard-breaks","true")},m(d,e){D(d,n,e),D(d,r,e),D(d,t,e),a(t,f),a(t,B),a(t,C),a(t,_),a(t,c),a(t,l),a(t,m),a(t,x),a(t,N),a(t,$),a(t,A),a(t,q),a(t,W),a(t,P),a(t,z),a(t,O),a(t,T),a(t,F),a(t,H),a(t,G),o&&o.m(t,null),a(t,I),a(t,L),a(t,J),a(t,U),j=!0},p(d,[e]){d[0]?o?e&1&&S(o,1):(o=it(d),o.c(),S(o,1),o.m(t,I)):o&&(ht(),V(o,1,1,()=>{o=null}),pt())},i(d){j||(S(o),j=!0)},o(d){V(o),j=!1},d(d){d&&(w(n),w(r),w(t)),o&&o.d()}}}function mt(y,n,b){let r;return lt(async()=>{const t=await ot(()=>import("../chunks/index.DT3hQ9Jk.js"),__vite__mapDeps([0,1,2,3]),import.meta.url);b(0,r=t.LottiePlayer)}),[r]}class Ct extends ct{constructor(n){super(),dt(this,n,mt,ft,rt,{})}}export{Ct as component};
function __vite__mapDeps(indexes) {
  if (!__vite__mapDeps.viteFileDeps) {
    __vite__mapDeps.viteFileDeps = ["../chunks/index.DT3hQ9Jk.js","../chunks/scheduler.Bj_NYYYq.js","../chunks/index.CJ0a16Qn.js","../assets/index.BQTFKAGU.css"]
  }
  return indexes.map((i) => __vite__mapDeps.viteFileDeps[i])
}