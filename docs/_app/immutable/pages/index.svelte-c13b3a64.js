import{S as T,i as A,s as z,l as w,a as D,u as O,m as k,p as v,c as I,v as q,h,q as b,K as M,b as P,J as _,L as H,w as W,n as G,M as Z,N as x,O as N,g as $,P as nn,d as en,f as L,t as V,Q as C,e as j,x as J,y as Q,z as Y,R,C as F,T as tn,U as an}from"../chunks/index-d952b812.js";import{b as S}from"../chunks/paths-b9644fda.js";const sn=[{name:"Anime Wow",url:"audio/anime-wow.mp3"},{name:"Bruh Meme",url:"audio/bruh.mp3"},{name:"Got you homie",url:"audio/got-you-homie.mp3"},{name:"Here we go again",url:"audio/here-we-go-again.mp3"},{name:"It is what it is",url:"audio/it-is-what-it-is.mp3"},{name:"Sad Violin",url:"audio/sad-violin.mp3"},{name:"Applause",url:"audio/applause.mp3"},{name:"Crickets",url:"audio/crickets.mp3"},{name:"Bing Bong",url:"audio/bing-bong.mp3"},{name:"Great Success",url:"audio/great-success.mp3"},{name:"Dark Souls Help Me",url:"audio/dark-souls-help-me.mp3"},{name:"Darks Souls Hello",url:"audio/dark-souls-hello.mp3"},{name:"Drum Roll",url:"audio/drum-roll.mp3"},{name:"DK Okay",url:"audio/dk-okay.mp3"},{name:"We are the Champions",url:"audio/we-are-the-champions.mp3"},{name:"Rick Roll",url:"audio/rick-roll.mp3"},{name:"Scooby Doo Huh",url:"audio/scooby-doo-huh.mp3"},{name:"Scooby Doo Laugh",url:"audio/scooby-doo-laugh.mp3"},{name:"That was easy",url:"audio/that-was-easy.mp3"},{name:"Crentist the Dentist",url:"audio/crentist-the-dentist.mp3"},{name:"Sad Horn",url:"audio/sad-horn.mp3"}];function on(c){let n,t,a,l,m,d,f,s,g,o,u;return{c(){n=w("div"),t=w("img"),l=D(),m=w("p"),d=O(c[1]),f=D(),s=w("audio"),this.h()},l(r){n=k(r,"DIV",{class:!0});var e=v(n);t=k(e,"IMG",{alt:!0,src:!0,class:!0}),l=I(e),m=k(e,"P",{class:!0});var i=v(m);d=q(i,c[1]),i.forEach(h),f=I(e),s=k(e,"AUDIO",{src:!0}),v(s).forEach(h),e.forEach(h),this.h()},h(){b(t,"alt","Sound Button"),M(t.src,a=c[4])||b(t,"src",a),b(t,"class","svelte-f6ntf"),b(m,"class","svelte-f6ntf"),M(s.src,g=c[6])||b(s,"src",g),b(n,"class","soundButton svelte-f6ntf")},m(r,e){P(r,n,e),_(n,t),_(n,l),_(n,m),_(m,d),_(n,f),_(n,s),c[14](s),o||(u=[H(t,"mouseenter",c[8]),H(t,"mouseleave",c[9]),H(t,"click",c[13]),H(s,"ended",c[15])],o=!0)},p(r,[e]){e&16&&!M(t.src,a=r[4])&&b(t,"src",a),e&2&&W(d,r[1]),e&64&&!M(s.src,g=r[6])&&b(s,"src",g)},i:G,o:G,d(r){r&&h(n),c[14](null),o=!1,Z(u)}}}function ln(c,n,t){let a,{id:l=0}=n,{isPlaying:m=!1}=n,{name:d=""}=n,{source:f="anime-wow.mp3"}=n,s=S+"/button_normal.png",g;const o=x(),u=(p=!1)=>{if(t(10,m=!m),m){e();return}r(),p&&i()},r=()=>{t(10,m=!1),g.pause(),t(5,g.currentTime=0,g),t(4,s=S+"/button_normal.png")},e=()=>{t(10,m=!0),g.play(),t(4,s=S+"/button_pressed.png")};function i(){m||t(4,s=S+"/button_hover.png")}function y(){m||t(4,s=S+"/button_normal.png")}const B=()=>{o("click",{id:l,callback:u})};function E(p){N[p?"unshift":"push"](()=>{g=p,t(5,g)})}const X=()=>{r(),o("complete",l)};return c.$$set=p=>{"id"in p&&t(0,l=p.id),"isPlaying"in p&&t(10,m=p.isPlaying),"name"in p&&t(1,d=p.name),"source"in p&&t(11,f=p.source)},c.$$.update=()=>{c.$$.dirty&2048&&t(6,a=S+"/"+f)},[l,d,u,r,s,g,a,o,i,y,m,f,e,B,E,X]}class rn extends T{constructor(n){super(),A(this,n,ln,on,z,{id:0,isPlaying:10,name:1,source:11,toggle:2,turnOff:3,turnOn:12})}get toggle(){return this.$$.ctx[2]}get turnOff(){return this.$$.ctx[3]}get turnOn(){return this.$$.ctx[12]}}function K(c,n,t){const a=c.slice();return a[7]=n[t],a[8]=n,a[9]=t,a}function U(c,n){let t,a,l,m,d,f;function s(r){n[4](r,n[7])}function g(r){n[5](r,n[7])}function o(r){n[6](r,n[7])}let u={id:n[9],source:n[7].url};return n[7].name!==void 0&&(u.name=n[7].name),n[7].toggle!==void 0&&(u.toggle=n[7].toggle),n[7].isPlaying!==void 0&&(u.isPlaying=n[7].isPlaying),a=new rn({props:u}),N.push(()=>C(a,"name",s)),N.push(()=>C(a,"toggle",g)),N.push(()=>C(a,"isPlaying",o)),a.$on("click",n[2]),a.$on("complete",n[3]),{key:c,first:null,c(){t=j(),J(a.$$.fragment),this.h()},l(r){t=j(),Q(a.$$.fragment,r),this.h()},h(){this.first=t},m(r,e){P(r,t,e),Y(a,r,e),f=!0},p(r,e){n=r;const i={};e&2&&(i.id=n[9]),e&2&&(i.source=n[7].url),!l&&e&2&&(l=!0,i.name=n[7].name,R(()=>l=!1)),!m&&e&2&&(m=!0,i.toggle=n[7].toggle,R(()=>m=!1)),!d&&e&2&&(d=!0,i.isPlaying=n[7].isPlaying,R(()=>d=!1)),a.$set(i)},i(r){f||(L(a.$$.fragment,r),f=!0)},o(r){V(a.$$.fragment,r),f=!1},d(r){r&&h(t),F(a,r)}}}function un(c){let n,t,a,l=(c[0]>-1?c[1][c[0]].name:"Nothing")+"",m,d,f,s=[],g=new Map,o,u=c[1];const r=e=>e[7].id;for(let e=0;e<u.length;e+=1){let i=K(c,u,e),y=r(i);g.set(y,s[e]=U(y,i))}return{c(){n=w("p"),t=O("Now Playing "),a=w("strong"),m=O(l),d=D(),f=w("div");for(let e=0;e<s.length;e+=1)s[e].c();this.h()},l(e){n=k(e,"P",{class:!0});var i=v(n);t=q(i,"Now Playing "),a=k(i,"STRONG",{class:!0});var y=v(a);m=q(y,l),y.forEach(h),i.forEach(h),d=I(e),f=k(e,"DIV",{class:!0});var B=v(f);for(let E=0;E<s.length;E+=1)s[E].l(B);B.forEach(h),this.h()},h(){b(a,"class","svelte-1xwnfmx"),b(n,"class","svelte-1xwnfmx"),b(f,"class","buttonGrid svelte-1xwnfmx")},m(e,i){P(e,n,i),_(n,t),_(n,a),_(a,m),P(e,d,i),P(e,f,i);for(let y=0;y<s.length;y+=1)s[y].m(f,null);o=!0},p(e,[i]){(!o||i&3)&&l!==(l=(e[0]>-1?e[1][e[0]].name:"Nothing")+"")&&W(m,l),i&14&&(u=e[1],$(),s=nn(s,i,r,1,e,u,g,f,tn,U,null,K),en())},i(e){if(!o){for(let i=0;i<u.length;i+=1)L(s[i]);o=!0}},o(e){for(let i=0;i<s.length;i+=1)V(s[i]);o=!1},d(e){e&&h(n),e&&h(d),e&&h(f);for(let i=0;i<s.length;i+=1)s[i].d()}}}function mn(c,n,t){let a=-1,l=sn;l=l.map((o,u)=>(o.id=u,o));function m(o){const u=a;if(t(0,a=o.detail.id),a==u){l[a].toggle(!0),l[a].isPlaying||t(0,a=-1);return}u!=-1&&l[u].toggle(),l[a].toggle()}function d(o){t(0,a=-1)}function f(o,u){c.$$.not_equal(u.name,o)&&(u.name=o,t(1,l))}function s(o,u){c.$$.not_equal(u.toggle,o)&&(u.toggle=o,t(1,l))}function g(o,u){c.$$.not_equal(u.isPlaying,o)&&(u.isPlaying=o,t(1,l))}return[a,l,m,d,f,s,g]}class cn extends T{constructor(n){super(),A(this,n,mn,un,z,{})}}function fn(c){let n,t,a,l,m,d,f,s,g;return s=new cn({}),{c(){n=w("style"),t=O(`@import url('https://fonts.googleapis.com/css2?family=Poppins:wght@100;400;700;900&display=swap');

        *,*::before,*::after {
            margin: 0;
            padding: 0;
            box-sizing: border-box;
        }

        body {
            width: 100%;
            min-height: 100vh;
            font-family: 'Poppins', sans-serif;
        }

        .ctn {
            max-width: 1280px;
            margin-left: auto;
            margin-right: auto;
            padding: 0.5rem;
        }

        .btn-anim {
            transition: 200ms ease-in-out;
        }

        .btn-anim:hover {
            transform: scale(1.1);
        }

        .btn-anim:active {
            transform: scale(0.9);
        }`),a=D(),l=w("main"),m=w("h1"),d=O("Elara Soundboard"),f=D(),J(s.$$.fragment),this.h()},l(o){const u=an('[data-svelte="svelte-hqd19u"]',document.head);n=k(u,"STYLE",{});var r=v(n);t=q(r,`@import url('https://fonts.googleapis.com/css2?family=Poppins:wght@100;400;700;900&display=swap');

        *,*::before,*::after {
            margin: 0;
            padding: 0;
            box-sizing: border-box;
        }

        body {
            width: 100%;
            min-height: 100vh;
            font-family: 'Poppins', sans-serif;
        }

        .ctn {
            max-width: 1280px;
            margin-left: auto;
            margin-right: auto;
            padding: 0.5rem;
        }

        .btn-anim {
            transition: 200ms ease-in-out;
        }

        .btn-anim:hover {
            transform: scale(1.1);
        }

        .btn-anim:active {
            transform: scale(0.9);
        }`),r.forEach(h),u.forEach(h),a=I(o),l=k(o,"MAIN",{class:!0});var e=v(l);m=k(e,"H1",{class:!0});var i=v(m);d=q(i,"Elara Soundboard"),i.forEach(h),f=I(e),Q(s.$$.fragment,e),e.forEach(h),this.h()},h(){document.title="Elara Soundboard",b(m,"class","svelte-jjyvs4"),b(l,"class","ctn")},m(o,u){_(document.head,n),_(n,t),P(o,a,u),P(o,l,u),_(l,m),_(m,d),_(l,f),Y(s,l,null),g=!0},p:G,i(o){g||(L(s.$$.fragment,o),g=!0)},o(o){V(s.$$.fragment,o),g=!1},d(o){h(n),o&&h(a),o&&h(l),F(s)}}}class hn extends T{constructor(n){super(),A(this,n,null,fn,z,{})}}export{hn as default};
