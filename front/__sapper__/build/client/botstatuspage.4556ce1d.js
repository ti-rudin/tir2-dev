import{S as a,i as e,s,P as t,e as l,c as r,b as c,d as o,f as n,h as i,Q as d,R as f,x as v,y as h,M as m,T as u,U as p,l as $,m as b,k as g,p as y,q as E,o as j,j as w,V as x,r as D,u as I,w as B,z as V,W as L,X as z,Y as A,Z as R,_ as T,$ as k,a0 as q,H as F,a1 as N,a2 as S,g as C,B as P,a3 as O,A as H,C as J,E as _,F as M,I as G,K as U,n as K,L as Q}from"./client.66914eae.js";import{T as W}from"./TextField.5d2abb11.js";function X(a){let e,s,m,u,p,$;const b=a[6].default,g=t(b,a,a[5],null);return{c(){e=l("span"),g&&g.c(),this.h()},l(a){e=r(a,"SPAN",{class:!0});var s=c(e);g&&g.l(s),s.forEach(o),this.h()},h(){n(e,"class",s="z-40 "+a[3].class+" p-2 rounded-full flex items-center justify-center top-0 left-0 "+(a[0]?"":a[2])+" svelte-1o8z87d")},m(s,t){i(s,e,t),g&&g.m(e,null),u=!0,p||($=d(m=a[1].call(null,e)),p=!0)},p(a,[t]){g&&g.p&&32&t&&f(g,b,a,a[5],t,null,null),(!u||13&t&&s!==(s="z-40 "+a[3].class+" p-2 rounded-full flex items-center justify-center top-0 left-0 "+(a[0]?"":a[2])+" svelte-1o8z87d"))&&n(e,"class",s)},i(a){u||(v(g,a),u=!0)},o(a){h(g,a),u=!1},d(a){a&&o(e),g&&g.d(a),p=!1,$()}}}function Y(a,e,s){let t,l,{color:r="primary"}=e,{noHover:c=!1}=e,{$$slots:o={},$$scope:n}=e;return a.$set=a=>{s(3,e=m(m({},e),u(a))),"color"in a&&s(4,r=a.color),"noHover"in a&&s(0,c=a.noHover),"$$scope"in a&&s(5,n=a.$$scope)},a.$$.update=()=>{16&a.$$.dirty&&s(1,t=p(r,!0)),16&a.$$.dirty&&s(2,l=`hover:bg-${r}-transLight`)},e=u(e),[c,t,l,e,r,n,o]}class Z extends a{constructor(a){super(),e(this,a,Y,X,s,{color:4,noHover:0})}}function aa(a){let e,s;return{c(){e=l("div"),this.h()},l(a){e=r(a,"DIV",{class:!0,style:!0}),c(e).forEach(o),this.h()},h(){n(e,"class",a[6]),n(e,"style",s=a[0]?"left: 1.25rem":"")},m(a,s){i(a,e,s)},p(a,t){64&t&&n(e,"class",a[6]),1&t&&s!==(s=a[0]?"left: 1.25rem":"")&&n(e,"style",s)},d(a){a&&o(e)}}}function ea(a){let e,s,t,d,f,m,u,p,z,A,R,T,k;return u=new Z({props:{color:a[0]&&!a[3]?a[2]:"gray",noHover:!0,$$slots:{default:[aa]},$$scope:{ctx:a}}}),{c(){e=l("div"),s=l("input"),t=$(),d=l("div"),f=l("div"),m=$(),b(u.$$.fragment),p=$(),z=l("label"),A=g(a[1]),this.h()},l(l){e=r(l,"DIV",{class:!0});var n=c(e);s=r(n,"INPUT",{class:!0,type:!0}),t=y(n),d=r(n,"DIV",{class:!0});var i=c(d);f=r(i,"DIV",{class:!0}),c(f).forEach(o),m=y(i),E(u.$$.fragment,i),i.forEach(o),p=y(n),z=r(n,"LABEL",{"aria-hidden":!0,class:!0});var v=c(z);A=j(v,a[1]),v.forEach(o),n.forEach(o),this.h()},h(){n(s,"class","hidden"),n(s,"type","checkbox"),n(f,"class","w-full h-full absolute"),n(d,"class",a[5]),n(z,"aria-hidden","true"),n(z,"class",a[7]),n(e,"class",a[4])},m(l,r){i(l,e,r),w(e,s),x(s,a[0]),w(e,t),w(e,d),w(d,f),w(d,m),D(u,d,null),w(e,p),w(e,z),w(z,A),R=!0,T||(k=[I(s,"change",a[14]),I(s,"change",a[13]),I(e,"click",a[8])],T=!0)},p(a,[t]){1&t&&x(s,a[0]);const l={};13&t&&(l.color=a[0]&&!a[3]?a[2]:"gray"),2097217&t&&(l.$$scope={dirty:t,ctx:a}),u.$set(l),(!R||32&t)&&n(d,"class",a[5]),(!R||2&t)&&B(A,a[1]),(!R||128&t)&&n(z,"class",a[7]),(!R||16&t)&&n(e,"class",a[4])},i(a){R||(v(u.$$.fragment,a),R=!0)},o(a){h(u.$$.fragment,a),R=!1},d(a){a&&o(e),V(u),T=!1,L(k)}}}const sa="relative w-10 h-auto z-0 rounded-full overflow-visible flex items-center justify-center",ta="rounded-full p-2 w-5 h-5 absolute elevation-3 duration-100",la="pl-2 cursor-pointer";function ra(a,e,s){const t="inline-flex items-center mb-2 cursor-pointer z-10";let{value:l=!1}=e,{label:r=""}=e,{color:c="primary"}=e,{disabled:o=!1}=e,{trackClasses:n=sa}=e,{thumbClasses:i=ta}=e,{labelClasses:d=la}=e,{classes:f=t}=e;const v=new z(f,t),h=new z(n,sa),p=new z(i,ta),$=new z(d,la);let b,g,y,E;return a.$set=a=>{s(20,e=m(m({},e),u(a))),"value"in a&&s(0,l=a.value),"label"in a&&s(1,r=a.label),"color"in a&&s(2,c=a.color),"disabled"in a&&s(3,o=a.disabled),"trackClasses"in a&&s(9,n=a.trackClasses),"thumbClasses"in a&&s(10,i=a.thumbClasses),"labelClasses"in a&&s(11,d=a.labelClasses),"classes"in a&&s(12,f=a.classes)},a.$$.update=()=>{s(4,b=v.flush().add(f,!0,t).add(e.class).get()),517&a.$$.dirty&&s(5,g=h.flush().add("bg-gray-700",!l).add(`bg-${c}-200`,l).add(n,!0,sa).get()),1029&a.$$.dirty&&s(6,y=p.flush().add(i,!0,ta).add("bg-white left-0",!l).add(`bg-${c}-400`,l).get()),2056&a.$$.dirty&&s(7,E=$.flush().add(d,!0,la).add("text-gray-500",o).add("text-gray-700",!o).get())},e=u(e),[l,r,c,o,b,g,y,E,function(){o||s(0,l=!l)},n,i,d,f,function(e){A(a,e)},function(){l=this.value,s(0,l)}]}class ca extends a{constructor(a){super(),e(this,a,ra,ea,s,{value:0,label:1,color:2,disabled:3,trackClasses:9,thumbClasses:10,labelClasses:11,classes:12})}}function oa(a){let e,s,t,d,f,v,h,m,u,p;return{c(){e=l("div"),s=l("div"),f=$(),v=l("div"),this.h()},l(a){e=r(a,"DIV",{class:!0});var t=c(e);s=r(t,"DIV",{class:!0,style:!0}),c(s).forEach(o),f=y(t),v=r(t,"DIV",{class:!0}),c(v).forEach(o),t.forEach(o),this.h()},h(){n(s,"class",t="bg-"+a[2]+"-500 h-1 absolute svelte-mguqwa"),n(s,"style",d=a[1]?`width: ${a[1]}%`:""),R(s,"inc",!a[1]),R(s,"transition",a[1]),n(v,"class",h="bg-"+a[2]+"-500 h-1 absolute dec svelte-mguqwa"),R(v,"hidden",a[1]),n(e,"class",m="top-0 left-0 w-full h-1 bg-"+a[2]+"-100 overflow-hidden relative svelte-mguqwa"),R(e,"fixed",a[0]),R(e,"z-50",a[0]),R(e,"hidden",a[0]&&!a[3])},m(a,t){i(a,e,t),w(e,s),w(e,f),w(e,v),p=!0},p(a,[l]){(!p||4&l&&t!==(t="bg-"+a[2]+"-500 h-1 absolute svelte-mguqwa"))&&n(s,"class",t),(!p||2&l&&d!==(d=a[1]?`width: ${a[1]}%`:""))&&n(s,"style",d),6&l&&R(s,"inc",!a[1]),6&l&&R(s,"transition",a[1]),(!p||4&l&&h!==(h="bg-"+a[2]+"-500 h-1 absolute dec svelte-mguqwa"))&&n(v,"class",h),6&l&&R(v,"hidden",a[1]),(!p||4&l&&m!==(m="top-0 left-0 w-full h-1 bg-"+a[2]+"-100 overflow-hidden relative svelte-mguqwa"))&&n(e,"class",m),5&l&&R(e,"fixed",a[0]),5&l&&R(e,"z-50",a[0]),13&l&&R(e,"hidden",a[0]&&!a[3])},i(a){p||(T(()=>{u||(u=k(e,q,{duration:300},!0)),u.run(1)}),p=!0)},o(a){u||(u=k(e,q,{duration:300},!1)),u.run(0),p=!1},d(a){a&&o(e),a&&u&&u.end()}}}function na(a,e,s){let{app:t=!1}=e,{progress:l=0}=e,{color:r="primary"}=e,c=!1;return F(()=>{t&&setTimeout(()=>{s(3,c=!0)},200)}),a.$set=a=>{"app"in a&&s(0,t=a.app),"progress"in a&&s(1,l=a.progress),"color"in a&&s(2,r=a.color)},[t,l,r,c]}class ia extends a{constructor(a){super(),e(this,a,na,oa,s,{app:0,progress:1,color:2})}}function da(a){let e,s,t,d,f,m,u,p,x,I,L,z,A,R,T,k,q;return k=new ia({props:{progress:a[16]}}),{c(){e=l("div"),s=l("div"),t=l("nobr"),d=l("label"),f=g("Этаж"),m=$(),u=l("strong"),p=g(a[11]),x=$(),I=g(a[9]),L=g(" - "),z=g(a[10]),A=g("  "),R=$(),T=l("div"),b(k.$$.fragment),this.h()},l(l){e=r(l,"DIV",{class:!0});var n=c(e);s=r(n,"DIV",{class:!0});var i=c(s);t=r(i,"NOBR",{});var v=c(t);d=r(v,"LABEL",{class:!0});var h=c(d);f=j(h,"Этаж"),h.forEach(o),m=y(v),u=r(v,"STRONG",{});var $=c(u);p=j($,a[11]),$.forEach(o),x=y(v),I=j(v,a[9]),L=j(v," - "),z=j(v,a[10]),A=j(v,"  "),v.forEach(o),i.forEach(o),R=y(n),T=r(n,"DIV",{class:!0,style:!0});var b=c(T);E(k.$$.fragment,b),b.forEach(o),n.forEach(o),this.h()},h(){n(d,"class","svelte-1atyj0m"),n(s,"class","leftitem svelte-1atyj0m"),n(T,"class","rightitem svelte-1atyj0m"),C(T,"margin-top","9px"),C(T,"height","4px"),C(T,"width","100%"),C(T,"background-color","#f5ce54"),n(e,"class","row svelte-1atyj0m")},m(a,l){i(a,e,l),w(e,s),w(s,t),w(t,d),w(d,f),w(t,m),w(t,u),w(u,p),w(t,x),w(t,I),w(t,L),w(t,z),w(t,A),w(e,R),w(e,T),D(k,T,null),q=!0},p(a,e){(!q||2048&e[0])&&B(p,a[11]),(!q||512&e[0])&&B(I,a[9]),(!q||1024&e[0])&&B(z,a[10]);const s={};65536&e[0]&&(s.progress=a[16]),k.$set(s)},i(a){q||(v(k.$$.fragment,a),q=!0)},o(a){h(k.$$.fragment,a),q=!1},d(a){a&&o(e),V(k)}}}function fa(a){let e;return{c(){e=g("Сохранить")},l(a){e=j(a,"Сохранить")},m(a,s){i(a,e,s)},d(a){a&&o(e)}}}function va(a){let e;return{c(){e=g("PANICSALE")},l(a){e=j(a,"PANICSALE")},m(a,s){i(a,e,s)},d(a){a&&o(e)}}}function ha(a){let e;return{c(){e=g("Сбросить к стартовым настройкам")},l(a){e=j(a,"Сбросить к стартовым настройкам")},m(a,s){i(a,e,s)},d(a){a&&o(e)}}}function ma(a){let e;return{c(){e=g("Удалить")},l(a){e=j(a,"Удалить")},m(a,s){i(a,e,s)},d(a){a&&o(e)}}}function ua(a){let e,s,t,d,f,m,u,p,x,I,L,z,A,R,T,k,q,F,C,_,M,G,U,K,Q,X,Y,Z,aa,ea,sa,ta,la,ra,oa,na,ia,ua,pa,$a,ba,ga,ya,Ea,ja,wa,xa,Da,Ia,Ba,Va,La,za,Aa,Ra,Ta,ka,qa,Fa,Na,Sa,Ca,Pa,Oa,Ha,Ja,_a,Ma,Ga,Ua,Ka,Qa,Wa,Xa,Ya,Za,ae,ee,se,te,le,re,ce,oe,ne,ie,de,fe,ve,he,me,ue,pe,$e,be,ge,ye,Ee,je,we,xe,De,Ie,Be,Ve,Le,ze,Ae,Re,Te,ke,qe,Fe,Ne,Se,Ce,Pe,Oe,He,Je,_e,Me,Ge,Ue,Ke,Qe,We,Xe,Ye,Ze,as,es,ss,ts,ls,rs,cs,os,ns,is,ds,fs,vs,hs,ms,us,ps,$s,bs,gs,ys,Es,js,ws,xs,Ds,Is,Bs,Vs,Ls,zs,As,Rs,Ts,ks,qs,Fs,Ns,Ss,Cs,Ps,Os,Hs,Js,_s,Ms,Gs,Us,Ks,Qs,Ws,Xs,Ys,Zs,at,et,st,tt,lt,rt,ct,ot,nt,it,dt,ft,vt,ht,mt,ut,pt,$t,bt,gt,yt,Et,jt,wt,xt,Dt,It,Bt,Vt,Lt,zt,At,Rt,Tt,kt,qt,Ft,Nt,St,Ct,Pt,Ot,Ht,Jt,_t,Mt,Gt,Ut,Kt,Qt,Wt,Xt,Yt,Zt,al,el,sl,tl,ll,rl,cl,ol,nl,il,dl,fl,vl,hl,ml,ul,pl,$l,bl,gl,yl,El,jl,wl,xl,Dl,Il,Bl,Vl,Ll,zl,Al,Rl,Tl,kl,ql,Fl,Nl,Sl,Cl,Pl,Ol,Hl,Jl,_l,Ml,Gl=a[2].rezhim+"",Ul=a[1].startdepo+"",Kl=a[1].depo+"",Ql=a[19].toFixed(a[0].digitprice)+"",Wl=a[0].quotacoin+"",Xl=a[1].quotanal+"",Yl=a[7].toFixed(a[0].digitq)+"",Zl=(a[4]*a[7]).toFixed(a[0].digitq)+"",ar=a[0].basecoin+"",er=a[0].quotacoin+"",sr=a[1].quotainorders+"",tr=a[0].basecoin+"",lr=(1*a[1].basenal).toFixed(a[0].digitprice)+"",rr=a[8].toFixed(a[0].digitprice)+"",cr=a[0].basecoin+"",or=a[1].baseinorders+"",nr=a[19].toFixed(a[0].digitprice)+"",ir=a[0].basecoin+"",dr=(a[13]/a[12]||0).toFixed(a[0].digitprice)+"",fr=a[0].basecoin+"",vr=a[17].count+"",hr=a[17].sprice+"",mr=a[0].basecoin+"",ur=a[3]?"Включен":"Выключен",pr=a[0].quotacoin+"",$r=a[0].basecoin+"";function br(e){a[25].call(null,e)}let gr={label:"Комментарий",outlined:!0};void 0!==a[0].comment&&(gr.value=a[0].comment),f=new W({props:gr}),N.push(()=>S(f,"value",br));let yr=0!==a[2].currentfloor&&da(a);function Er(e){a[26].call(null,e)}let jr={};function wr(e){a[27].call(null,e)}void 0!==a[3]&&(jr.value=a[3]),jt=new ca({props:jr}),N.push(()=>S(jt,"value",Er));let xr={classes:"inline-flex items-right mb-2 cursor-pointer z-10"};function Dr(e){a[28].call(null,e)}void 0!==a[0].handyzapretnazakup&&(xr.value=a[0].handyzapretnazakup),At=new ca({props:xr}),N.push(()=>S(At,"value",wr));let Ir={label:"% от депо",outlined:!0,size:"10"};function Br(e){a[29].call(null,e)}void 0!==a[0].ordersize&&(Ir.value=a[0].ordersize),Wt=new W({props:Ir}),N.push(()=>S(Wt,"value",Dr));let Vr={label:"MA1, мин",outlined:!0};function Lr(e){a[30].call(null,e)}void 0!==a[0].ma1&&(Vr.value=a[0].ma1),el=new W({props:Vr}),N.push(()=>S(el,"value",Br));let zr={label:"MA2, мин",outlined:!0};function Ar(e){a[31].call(null,e)}void 0!==a[0].ma2&&(zr.value=a[0].ma2),rl=new W({props:zr}),N.push(()=>S(rl,"value",Lr));let Rr={label:"",outlined:!0,size:"10"};function Tr(e){a[32].call(null,e)}void 0!==a[0].maxpriceforzakup&&(Rr.value=a[0].maxpriceforzakup),ml=new W({props:Rr}),N.push(()=>S(ml,"value",Ar));let kr={label:"",outlined:!0,size:"10"};return void 0!==a[0].minpriceforzakup&&(kr.value=a[0].minpriceforzakup),wl=new W({props:kr}),N.push(()=>S(wl,"value",Tr)),Il=new P({props:{href:"/",$$slots:{default:[fa]},$$scope:{ctx:a}}}),Il.$on("click",a[21]),Rl=new P({props:{color:"alert",$$slots:{default:[va]},$$scope:{ctx:a}}}),Rl.$on("click",a[24]),Sl=new P({props:{color:"alert",$$slots:{default:[ha]},$$scope:{ctx:a}}}),Sl.$on("click",a[22]),_l=new P({props:{color:"alert",href:"/",$$slots:{default:[ma]},$$scope:{ctx:a}}}),_l.$on("click",a[23]),{c(){e=l("main"),s=l("div"),t=l("div"),d=l("div"),b(f.$$.fragment),u=$(),p=l("div"),x=l("div"),I=l("label"),L=g("Текущий режим"),z=$(),A=l("br"),R=$(),T=l("strong"),k=g(Gl),q=$(),yr&&yr.c(),F=$(),C=l("div"),_=l("div"),M=l("label"),G=g("Цена"),U=$(),K=l("br"),Q=$(),X=l("span"),Y=g(a[4]),Z=$(),aa=l("br"),ea=$(),sa=l("div"),ta=l("div"),la=l("label"),ra=g("Баланс"),oa=$(),na=l("div"),ia=l("label"),ua=g("Старт"),pa=$(),$a=l("br"),ba=$(),ga=l("span"),ya=g(Ul),Ea=$(),ja=l("div"),wa=l("label"),xa=g("Сегодня"),Da=$(),Ia=l("br"),Ba=$(),Va=l("span"),La=g(Kl),za=$(),Aa=l("div"),Ra=l("div"),Ta=l("div"),ka=l("label"),qa=g("Прибыль всего"),Fa=$(),Na=l("br"),Sa=$(),Ca=l("span"),Pa=g(a[5]),Oa=$(),Ha=l("br"),Ja=$(),_a=l("span"),Ma=g("("),Ga=g(a[6]),Ua=g(" %)"),Ka=$(),Qa=l("br"),Wa=$(),Xa=l("div"),Ya=l("label"),Za=g("Прибыль сегодня"),ae=$(),ee=l("br"),se=$(),te=l("span"),le=g(Ql),re=$(),ce=l("br"),oe=$(),ne=l("span"),ie=g("("),de=g(a[18]),fe=g(" %)"),ve=$(),he=l("br"),me=$(),ue=l("div"),pe=l("div"),$e=l("table"),be=l("tr"),ge=l("td"),ye=l("label"),Ee=g(Wl),je=g(" в наличии"),we=$(),xe=l("td"),De=g(Xl),Ie=$(),Be=l("td"),Ve=g(Yl),Le=$(),ze=l("br"),Ae=g("\n            ("),Re=g(Zl),Te=$(),ke=g(ar),qe=g(")"),Fe=$(),Ne=l("tr"),Se=l("td"),Ce=l("label"),Pe=g(er),Oe=g(" в ордерах"),He=$(),Je=l("td"),_e=g(sr),Me=$(),Ge=l("tr"),Ue=l("td"),Ke=l("label"),Qe=g(tr),We=g(" в наличии"),Xe=$(),Ye=l("td"),Ze=g(lr),as=$(),es=l("td"),ss=g(rr),ts=$(),ls=l("tr"),rs=l("td"),cs=l("label"),os=g(cr),ns=g(" в ордерах"),is=$(),ds=l("td"),fs=g(or),vs=$(),hs=l("div"),ms=l("div"),us=l("div"),ps=l("label"),$s=g("Продажи"),bs=$(),gs=l("br"),ys=$(),Es=l("label"),js=g("Продажи сегодня"),ws=$(),xs=l("br"),Ds=$(),Is=l("label"),Bs=g("Ср. прибыль в сделке"),Vs=$(),Ls=l("div"),zs=g(a[12]),As=$(),Rs=l("br"),Ts=$(),ks=l("strong"),qs=g(a[20]),Fs=g("\n        ("),Ns=g(nr),Ss=$(),Cs=g(ir),Ps=g(")\n        "),Os=l("br"),Hs=$(),Js=g(dr),_s=$(),Ms=g(fr),Gs=$(),Us=l("div"),Ks=l("div"),Qs=l("div"),Ws=l("label"),Xs=g("Открытых сделок"),Ys=$(),Zs=l("br"),at=$(),et=l("label"),st=g("Средняя цена закупки"),tt=$(),lt=l("div"),rt=g(vr),ct=$(),ot=l("br"),nt=$(),it=g(hr),dt=$(),ft=g(mr),vt=$(),ht=l("br"),mt=$(),ut=l("div"),pt=l("div"),$t=l("label"),bt=g(ur),gt=$(),yt=l("br"),Et=$(),b(jt.$$.fragment),xt=$(),Dt=l("div"),It=l("label"),Bt=g("Запрет на закуп"),Vt=$(),Lt=l("br"),zt=$(),b(At.$$.fragment),Tt=$(),kt=l("div"),qt=l("div"),Ft=l("label"),Nt=g("Объем ордера"),St=$(),Ct=l("br"),Pt=g("\n      ~ "),Ot=g(a[14]),Ht=$(),Jt=g(pr),_t=g(", "),Mt=g(a[15]),Gt=$(),Ut=g($r),Kt=g("\n      \n    "),Qt=l("div"),b(Wt.$$.fragment),Yt=$(),Zt=l("div"),al=l("div"),b(el.$$.fragment),tl=g("\n      \n    "),ll=l("div"),b(rl.$$.fragment),ol=$(),nl=l("div"),il=l("div"),dl=l("label"),fl=g("Не закупать, если цена больше"),vl=g("\n      \n    "),hl=l("div"),b(ml.$$.fragment),pl=$(),$l=l("div"),bl=l("div"),gl=l("label"),yl=g("Не закупать, если цена меньше"),El=$(),jl=l("div"),b(wl.$$.fragment),Dl=$(),b(Il.$$.fragment),Bl=$(),Vl=l("br"),Ll=$(),zl=l("br"),Al=$(),b(Rl.$$.fragment),Tl=$(),kl=l("br"),ql=$(),Fl=l("br"),Nl=$(),b(Sl.$$.fragment),Cl=$(),Pl=l("br"),Ol=$(),Hl=l("br"),Jl=$(),b(_l.$$.fragment),this.h()},l(l){e=r(l,"MAIN",{class:!0});var n=c(e);s=r(n,"DIV",{class:!0});var i=c(s);t=r(i,"DIV",{class:!0});var v=c(t);d=r(v,"DIV",{class:!0});var h=c(d);E(f.$$.fragment,h),h.forEach(o),v.forEach(o),i.forEach(o),u=y(n),p=r(n,"DIV",{class:!0});var m=c(p);x=r(m,"DIV",{class:!0});var $=c(x);I=r($,"LABEL",{class:!0});var b=c(I);L=j(b,"Текущий режим"),b.forEach(o),z=y($),A=r($,"BR",{}),R=y($),T=r($,"STRONG",{class:!0});var g=c(T);k=j(g,Gl),g.forEach(o),$.forEach(o),m.forEach(o),q=y(n),yr&&yr.l(n),F=y(n),C=r(n,"DIV",{class:!0});var w=c(C);_=r(w,"DIV",{class:!0});var D=c(_);M=r(D,"LABEL",{class:!0});var B=c(M);G=j(B,"Цена"),B.forEach(o),U=y(D),K=r(D,"BR",{}),Q=y(D),X=r(D,"SPAN",{class:!0});var V=c(X);Y=j(V,a[4]),V.forEach(o),Z=y(D),aa=r(D,"BR",{}),D.forEach(o),ea=y(w),sa=r(w,"DIV",{class:!0});var N=c(sa);ta=r(N,"DIV",{class:!0});var S=c(ta);la=r(S,"LABEL",{class:!0});var P=c(la);ra=j(P,"Баланс"),P.forEach(o),S.forEach(o),oa=y(N),na=r(N,"DIV",{class:!0});var O=c(na);ia=r(O,"LABEL",{class:!0});var H=c(ia);ua=j(H,"Старт"),H.forEach(o),pa=y(O),$a=r(O,"BR",{}),ba=y(O),ga=r(O,"SPAN",{class:!0});var J=c(ga);ya=j(J,Ul),J.forEach(o),O.forEach(o),Ea=y(N),ja=r(N,"DIV",{class:!0});var W=c(ja);wa=r(W,"LABEL",{class:!0});var ca=c(wa);xa=j(ca,"Сегодня"),ca.forEach(o),Da=y(W),Ia=r(W,"BR",{}),Ba=y(W),Va=r(W,"SPAN",{class:!0});var da=c(Va);La=j(da,Kl),da.forEach(o),W.forEach(o),N.forEach(o),w.forEach(o),za=y(n),Aa=r(n,"DIV",{class:!0});var fa=c(Aa);Ra=r(fa,"DIV",{class:!0});var va=c(Ra);Ta=r(va,"DIV",{class:!0});var ha=c(Ta);ka=r(ha,"LABEL",{class:!0});var ma=c(ka);qa=j(ma,"Прибыль всего"),ma.forEach(o),Fa=y(ha),Na=r(ha,"BR",{}),Sa=y(ha),Ca=r(ha,"SPAN",{});var wt=c(Ca);Pa=j(wt,a[5]),wt.forEach(o),Oa=y(ha),Ha=r(ha,"BR",{}),Ja=y(ha),_a=r(ha,"SPAN",{});var Rt=c(_a);Ma=j(Rt,"("),Ga=j(Rt,a[6]),Ua=j(Rt," %)"),Rt.forEach(o),Ka=y(ha),Qa=r(ha,"BR",{}),ha.forEach(o),Wa=y(va),Xa=r(va,"DIV",{class:!0});var Xt=c(Xa);Ya=r(Xt,"LABEL",{class:!0});var sl=c(Ya);Za=j(sl,"Прибыль сегодня"),sl.forEach(o),ae=y(Xt),ee=r(Xt,"BR",{}),se=y(Xt),te=r(Xt,"SPAN",{});var cl=c(te);le=j(cl,Ql),cl.forEach(o),re=y(Xt),ce=r(Xt,"BR",{}),oe=y(Xt),ne=r(Xt,"SPAN",{});var ul=c(ne);ie=j(ul,"("),de=j(ul,a[18]),fe=j(ul," %)"),ul.forEach(o),ve=y(Xt),he=r(Xt,"BR",{}),Xt.forEach(o),va.forEach(o),fa.forEach(o),me=y(n),ue=r(n,"DIV",{class:!0});var xl=c(ue);pe=r(xl,"DIV",{class:!0});var Ml=c(pe);$e=r(Ml,"TABLE",{class:!0});var br=c($e);be=r(br,"TR",{class:!0});var gr=c(be);ge=r(gr,"TD",{class:!0});var Er=c(ge);ye=r(Er,"LABEL",{class:!0});var jr=c(ye);Ee=j(jr,Wl),je=j(jr," в наличии"),jr.forEach(o),Er.forEach(o),we=y(gr),xe=r(gr,"TD",{class:!0});var wr=c(xe);De=j(wr,Xl),wr.forEach(o),Ie=y(gr),Be=r(gr,"TD",{rowspan:!0,class:!0});var xr=c(Be);Ve=j(xr,Yl),Le=y(xr),ze=r(xr,"BR",{}),Ae=j(xr,"\n            ("),Re=j(xr,Zl),Te=y(xr),ke=j(xr,ar),qe=j(xr,")"),xr.forEach(o),gr.forEach(o),Fe=y(br),Ne=r(br,"TR",{});var Dr=c(Ne);Se=r(Dr,"TD",{class:!0});var Ir=c(Se);Ce=r(Ir,"LABEL",{class:!0});var Br=c(Ce);Pe=j(Br,er),Oe=j(Br," в ордерах"),Br.forEach(o),Ir.forEach(o),He=y(Dr),Je=r(Dr,"TD",{class:!0});var Vr=c(Je);_e=j(Vr,sr),Vr.forEach(o),Dr.forEach(o),Me=y(br),Ge=r(br,"TR",{});var Lr=c(Ge);Ue=r(Lr,"TD",{class:!0});var zr=c(Ue);Ke=r(zr,"LABEL",{class:!0});var Ar=c(Ke);Qe=j(Ar,tr),We=j(Ar," в наличии"),Ar.forEach(o),zr.forEach(o),Xe=y(Lr),Ye=r(Lr,"TD",{class:!0});var Rr=c(Ye);Ze=j(Rr,lr),Rr.forEach(o),as=y(Lr),es=r(Lr,"TD",{rowspan:!0,class:!0});var Tr=c(es);ss=j(Tr,rr),Tr.forEach(o),Lr.forEach(o),ts=y(br),ls=r(br,"TR",{});var kr=c(ls);rs=r(kr,"TD",{class:!0});var qr=c(rs);cs=r(qr,"LABEL",{class:!0});var Fr=c(cs);os=j(Fr,cr),ns=j(Fr," в ордерах"),Fr.forEach(o),qr.forEach(o),is=y(kr),ds=r(kr,"TD",{class:!0});var Nr=c(ds);fs=j(Nr,or),Nr.forEach(o),kr.forEach(o),br.forEach(o),Ml.forEach(o),xl.forEach(o),vs=y(n),hs=r(n,"DIV",{class:!0});var Sr=c(hs);ms=r(Sr,"DIV",{class:!0});var Cr=c(ms);us=r(Cr,"DIV",{class:!0});var Pr=c(us);ps=r(Pr,"LABEL",{class:!0});var Or=c(ps);$s=j(Or,"Продажи"),Or.forEach(o),bs=y(Pr),gs=r(Pr,"BR",{}),ys=y(Pr),Es=r(Pr,"LABEL",{class:!0});var Hr=c(Es);js=j(Hr,"Продажи сегодня"),Hr.forEach(o),ws=y(Pr),xs=r(Pr,"BR",{}),Ds=y(Pr),Is=r(Pr,"LABEL",{class:!0});var Jr=c(Is);Bs=j(Jr,"Ср. прибыль в сделке"),Jr.forEach(o),Pr.forEach(o),Vs=y(Cr),Ls=r(Cr,"DIV",{class:!0});var _r=c(Ls);zs=j(_r,a[12]),As=y(_r),Rs=r(_r,"BR",{}),Ts=y(_r),ks=r(_r,"STRONG",{});var Mr=c(ks);qs=j(Mr,a[20]),Mr.forEach(o),Fs=j(_r,"\n        ("),Ns=j(_r,nr),Ss=y(_r),Cs=j(_r,ir),Ps=j(_r,")\n        "),Os=r(_r,"BR",{}),Hs=y(_r),Js=j(_r,dr),_s=y(_r),Ms=j(_r,fr),_r.forEach(o),Cr.forEach(o),Sr.forEach(o),Gs=y(n),Us=r(n,"DIV",{class:!0});var Gr=c(Us);Ks=r(Gr,"DIV",{class:!0});var Ur=c(Ks);Qs=r(Ur,"DIV",{class:!0});var Kr=c(Qs);Ws=r(Kr,"LABEL",{class:!0});var Qr=c(Ws);Xs=j(Qr,"Открытых сделок"),Qr.forEach(o),Ys=y(Kr),Zs=r(Kr,"BR",{}),at=y(Kr),et=r(Kr,"LABEL",{class:!0});var Wr=c(et);st=j(Wr,"Средняя цена закупки"),Wr.forEach(o),Kr.forEach(o),tt=y(Ur),lt=r(Ur,"DIV",{class:!0});var Xr=c(lt);rt=j(Xr,vr),ct=y(Xr),ot=r(Xr,"BR",{}),nt=y(Xr),it=j(Xr,hr),dt=y(Xr),ft=j(Xr,mr),Xr.forEach(o),Ur.forEach(o),Gr.forEach(o),vt=y(n),ht=r(n,"BR",{}),mt=y(n),ut=r(n,"DIV",{class:!0});var Yr=c(ut);pt=r(Yr,"DIV",{class:!0});var Zr=c(pt);$t=r(Zr,"LABEL",{class:!0});var ac=c($t);bt=j(ac,ur),ac.forEach(o),gt=y(Zr),yt=r(Zr,"BR",{}),Et=y(Zr),E(jt.$$.fragment,Zr),Zr.forEach(o),xt=y(Yr),Dt=r(Yr,"DIV",{class:!0});var ec=c(Dt);It=r(ec,"LABEL",{class:!0});var sc=c(It);Bt=j(sc,"Запрет на закуп"),sc.forEach(o),Vt=y(ec),Lt=r(ec,"BR",{}),zt=y(ec),E(At.$$.fragment,ec),ec.forEach(o),Yr.forEach(o),Tt=y(n),kt=r(n,"DIV",{class:!0});var tc=c(kt);qt=r(tc,"DIV",{class:!0});var lc=c(qt);Ft=r(lc,"LABEL",{class:!0});var rc=c(Ft);Nt=j(rc,"Объем ордера"),rc.forEach(o),St=y(lc),Ct=r(lc,"BR",{}),Pt=j(lc,"\n      ~ "),Ot=j(lc,a[14]),Ht=y(lc),Jt=j(lc,pr),_t=j(lc,", "),Mt=j(lc,a[15]),Gt=y(lc),Ut=j(lc,$r),lc.forEach(o),Kt=j(tc,"\n      \n    "),Qt=r(tc,"DIV",{class:!0});var cc=c(Qt);E(Wt.$$.fragment,cc),cc.forEach(o),tc.forEach(o),Yt=y(n),Zt=r(n,"DIV",{class:!0});var oc=c(Zt);al=r(oc,"DIV",{class:!0});var nc=c(al);E(el.$$.fragment,nc),nc.forEach(o),tl=j(oc,"\n      \n    "),ll=r(oc,"DIV",{class:!0});var ic=c(ll);E(rl.$$.fragment,ic),ic.forEach(o),oc.forEach(o),ol=y(n),nl=r(n,"DIV",{class:!0});var dc=c(nl);il=r(dc,"DIV",{class:!0});var fc=c(il);dl=r(fc,"LABEL",{class:!0});var vc=c(dl);fl=j(vc,"Не закупать, если цена больше"),vc.forEach(o),fc.forEach(o),vl=j(dc,"\n      \n    "),hl=r(dc,"DIV",{class:!0});var hc=c(hl);E(ml.$$.fragment,hc),hc.forEach(o),dc.forEach(o),pl=y(n),$l=r(n,"DIV",{class:!0});var mc=c($l);bl=r(mc,"DIV",{class:!0});var uc=c(bl);gl=r(uc,"LABEL",{class:!0});var pc=c(gl);yl=j(pc,"Не закупать, если цена меньше"),pc.forEach(o),uc.forEach(o),El=y(mc),jl=r(mc,"DIV",{class:!0});var $c=c(jl);E(wl.$$.fragment,$c),$c.forEach(o),mc.forEach(o),Dl=y(n),E(Il.$$.fragment,n),Bl=y(n),Vl=r(n,"BR",{}),Ll=y(n),zl=r(n,"BR",{}),Al=y(n),E(Rl.$$.fragment,n),Tl=y(n),kl=r(n,"BR",{}),ql=y(n),Fl=r(n,"BR",{}),Nl=y(n),E(Sl.$$.fragment,n),Cl=y(n),Pl=r(n,"BR",{}),Ol=y(n),Hl=r(n,"BR",{}),Jl=y(n),E(_l.$$.fragment,n),n.forEach(o),this.h()},h(){n(d,"class","foolrow svelte-1atyj0m"),n(t,"class","leftitem svelte-1atyj0m"),n(s,"class","row svelte-1atyj0m"),n(I,"class","svelte-1atyj0m"),n(T,"class","bg-white dark:bg-gray-900 text-black dark:text-white"),n(x,"class","leftitem svelte-1atyj0m"),n(p,"class","row svelte-1atyj0m"),n(M,"class","svelte-1atyj0m"),n(X,"class","inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-bold\n        text-gray-800"),n(_,"class","leftitem svelte-1atyj0m"),n(la,"class","svelte-1atyj0m"),n(ta,"class","rowbalanceitem svelte-1atyj0m"),n(ia,"class","svelte-1atyj0m"),n(ga,"class","inline-block bg-gray-200 rounded-full px-3 py-1 text-sm\n          font-semibold text-gray-700"),n(na,"class","rowbalanceitem svelte-1atyj0m"),n(wa,"class","svelte-1atyj0m"),n(Va,"class","inline-block bg-gray-200 rounded-full px-3 py-1 text-sm\n          font-semibold text-gray-700"),n(ja,"class","rowbalanceitem svelte-1atyj0m"),n(sa,"class","rightitem rowbalance svelte-1atyj0m"),n(C,"class","row svelte-1atyj0m"),n(ka,"class","svelte-1atyj0m"),n(Ta,"class","centereditem svelte-1atyj0m"),n(Ya,"class","svelte-1atyj0m"),n(Xa,"class","centereditem svelte-1atyj0m"),n(Ra,"class","row svelte-1atyj0m"),n(Aa,"class","yelowkob svelte-1atyj0m"),n(ye,"class","svelte-1atyj0m"),n(ge,"class","cellleft svelte-1atyj0m"),n(xe,"class","cellleft bordernull svelte-1atyj0m"),n(Be,"rowspan","2"),n(Be,"class","borderbootom borderleft svelte-1atyj0m"),n(be,"class","bordernull svelte-1atyj0m"),n(Ce,"class","svelte-1atyj0m"),n(Se,"class","borderbootom cellleft svelte-1atyj0m"),n(Je,"class","borderbootom cellleft svelte-1atyj0m"),n(Ke,"class","svelte-1atyj0m"),n(Ue,"class","cellleft svelte-1atyj0m"),n(Ye,"class","cellleft bordernull svelte-1atyj0m"),n(es,"rowspan","2"),n(es,"class","borderleft svelte-1atyj0m"),n(cs,"class","svelte-1atyj0m"),n(rs,"class","cellleft svelte-1atyj0m"),n(ds,"class","cellleft svelte-1atyj0m"),n($e,"class","bordernull svelte-1atyj0m"),n(pe,"class","centereditem svelte-1atyj0m"),n(ue,"class","row svelte-1atyj0m"),n(ps,"class","svelte-1atyj0m"),n(Es,"class","svelte-1atyj0m"),n(Is,"class","svelte-1atyj0m"),n(us,"class","leftitem svelte-1atyj0m"),n(Ls,"class","rightitem svelte-1atyj0m"),n(ms,"class","row svelte-1atyj0m"),n(hs,"class","yelowkob svelte-1atyj0m"),n(Ws,"class","svelte-1atyj0m"),n(et,"class","svelte-1atyj0m"),n(Qs,"class","leftitem svelte-1atyj0m"),n(lt,"class","rightitem svelte-1atyj0m"),n(Ks,"class","row svelte-1atyj0m"),n(Us,"class","yelowkob svelte-1atyj0m"),n($t,"class","svelte-1atyj0m"),n(pt,"class","leftitem svelte-1atyj0m"),n(It,"class","svelte-1atyj0m"),n(Dt,"class","rightitem svelte-1atyj0m"),n(ut,"class","row svelte-1atyj0m"),n(Ft,"class","svelte-1atyj0m"),n(qt,"class","leftitem svelte-1atyj0m"),n(Qt,"class","rightitem svelte-1atyj0m"),n(kt,"class","row svelte-1atyj0m"),n(al,"class","leftitem svelte-1atyj0m"),n(ll,"class","rightitem svelte-1atyj0m"),n(Zt,"class","row svelte-1atyj0m"),n(dl,"class","svelte-1atyj0m"),n(il,"class","leftitem padtop5 svelte-1atyj0m"),n(hl,"class","rightitem svelte-1atyj0m"),n(nl,"class","row svelte-1atyj0m"),n(gl,"class","svelte-1atyj0m"),n(bl,"class","leftitem padtop5 svelte-1atyj0m"),n(jl,"class","rightitem svelte-1atyj0m"),n($l,"class","row svelte-1atyj0m"),n(e,"class","svelte-1atyj0m")},m(a,l){i(a,e,l),w(e,s),w(s,t),w(t,d),D(f,d,null),w(e,u),w(e,p),w(p,x),w(x,I),w(I,L),w(x,z),w(x,A),w(x,R),w(x,T),w(T,k),w(e,q),yr&&yr.m(e,null),w(e,F),w(e,C),w(C,_),w(_,M),w(M,G),w(_,U),w(_,K),w(_,Q),w(_,X),w(X,Y),w(_,Z),w(_,aa),w(C,ea),w(C,sa),w(sa,ta),w(ta,la),w(la,ra),w(sa,oa),w(sa,na),w(na,ia),w(ia,ua),w(na,pa),w(na,$a),w(na,ba),w(na,ga),w(ga,ya),w(sa,Ea),w(sa,ja),w(ja,wa),w(wa,xa),w(ja,Da),w(ja,Ia),w(ja,Ba),w(ja,Va),w(Va,La),w(e,za),w(e,Aa),w(Aa,Ra),w(Ra,Ta),w(Ta,ka),w(ka,qa),w(Ta,Fa),w(Ta,Na),w(Ta,Sa),w(Ta,Ca),w(Ca,Pa),w(Ta,Oa),w(Ta,Ha),w(Ta,Ja),w(Ta,_a),w(_a,Ma),w(_a,Ga),w(_a,Ua),w(Ta,Ka),w(Ta,Qa),w(Ra,Wa),w(Ra,Xa),w(Xa,Ya),w(Ya,Za),w(Xa,ae),w(Xa,ee),w(Xa,se),w(Xa,te),w(te,le),w(Xa,re),w(Xa,ce),w(Xa,oe),w(Xa,ne),w(ne,ie),w(ne,de),w(ne,fe),w(Xa,ve),w(Xa,he),w(e,me),w(e,ue),w(ue,pe),w(pe,$e),w($e,be),w(be,ge),w(ge,ye),w(ye,Ee),w(ye,je),w(be,we),w(be,xe),w(xe,De),w(be,Ie),w(be,Be),w(Be,Ve),w(Be,Le),w(Be,ze),w(Be,Ae),w(Be,Re),w(Be,Te),w(Be,ke),w(Be,qe),w($e,Fe),w($e,Ne),w(Ne,Se),w(Se,Ce),w(Ce,Pe),w(Ce,Oe),w(Ne,He),w(Ne,Je),w(Je,_e),w($e,Me),w($e,Ge),w(Ge,Ue),w(Ue,Ke),w(Ke,Qe),w(Ke,We),w(Ge,Xe),w(Ge,Ye),w(Ye,Ze),w(Ge,as),w(Ge,es),w(es,ss),w($e,ts),w($e,ls),w(ls,rs),w(rs,cs),w(cs,os),w(cs,ns),w(ls,is),w(ls,ds),w(ds,fs),w(e,vs),w(e,hs),w(hs,ms),w(ms,us),w(us,ps),w(ps,$s),w(us,bs),w(us,gs),w(us,ys),w(us,Es),w(Es,js),w(us,ws),w(us,xs),w(us,Ds),w(us,Is),w(Is,Bs),w(ms,Vs),w(ms,Ls),w(Ls,zs),w(Ls,As),w(Ls,Rs),w(Ls,Ts),w(Ls,ks),w(ks,qs),w(Ls,Fs),w(Ls,Ns),w(Ls,Ss),w(Ls,Cs),w(Ls,Ps),w(Ls,Os),w(Ls,Hs),w(Ls,Js),w(Ls,_s),w(Ls,Ms),w(e,Gs),w(e,Us),w(Us,Ks),w(Ks,Qs),w(Qs,Ws),w(Ws,Xs),w(Qs,Ys),w(Qs,Zs),w(Qs,at),w(Qs,et),w(et,st),w(Ks,tt),w(Ks,lt),w(lt,rt),w(lt,ct),w(lt,ot),w(lt,nt),w(lt,it),w(lt,dt),w(lt,ft),w(e,vt),w(e,ht),w(e,mt),w(e,ut),w(ut,pt),w(pt,$t),w($t,bt),w(pt,gt),w(pt,yt),w(pt,Et),D(jt,pt,null),w(ut,xt),w(ut,Dt),w(Dt,It),w(It,Bt),w(Dt,Vt),w(Dt,Lt),w(Dt,zt),D(At,Dt,null),w(e,Tt),w(e,kt),w(kt,qt),w(qt,Ft),w(Ft,Nt),w(qt,St),w(qt,Ct),w(qt,Pt),w(qt,Ot),w(qt,Ht),w(qt,Jt),w(qt,_t),w(qt,Mt),w(qt,Gt),w(qt,Ut),w(kt,Kt),w(kt,Qt),D(Wt,Qt,null),w(e,Yt),w(e,Zt),w(Zt,al),D(el,al,null),w(Zt,tl),w(Zt,ll),D(rl,ll,null),w(e,ol),w(e,nl),w(nl,il),w(il,dl),w(dl,fl),w(nl,vl),w(nl,hl),D(ml,hl,null),w(e,pl),w(e,$l),w($l,bl),w(bl,gl),w(gl,yl),w($l,El),w($l,jl),D(wl,jl,null),w(e,Dl),D(Il,e,null),w(e,Bl),w(e,Vl),w(e,Ll),w(e,zl),w(e,Al),D(Rl,e,null),w(e,Tl),w(e,kl),w(e,ql),w(e,Fl),w(e,Nl),D(Sl,e,null),w(e,Cl),w(e,Pl),w(e,Ol),w(e,Hl),w(e,Jl),D(_l,e,null),Ml=!0},p(a,s){const t={};!m&&1&s[0]&&(m=!0,t.value=a[0].comment,O(()=>m=!1)),f.$set(t),(!Ml||4&s[0])&&Gl!==(Gl=a[2].rezhim+"")&&B(k,Gl),0!==a[2].currentfloor?yr?(yr.p(a,s),4&s[0]&&v(yr,1)):(yr=da(a),yr.c(),v(yr,1),yr.m(e,F)):yr&&(H(),h(yr,1,1,()=>{yr=null}),J()),(!Ml||16&s[0])&&B(Y,a[4]),(!Ml||2&s[0])&&Ul!==(Ul=a[1].startdepo+"")&&B(ya,Ul),(!Ml||2&s[0])&&Kl!==(Kl=a[1].depo+"")&&B(La,Kl),(!Ml||32&s[0])&&B(Pa,a[5]),(!Ml||64&s[0])&&B(Ga,a[6]),(!Ml||524289&s[0])&&Ql!==(Ql=a[19].toFixed(a[0].digitprice)+"")&&B(le,Ql),(!Ml||262144&s[0])&&B(de,a[18]),(!Ml||1&s[0])&&Wl!==(Wl=a[0].quotacoin+"")&&B(Ee,Wl),(!Ml||2&s[0])&&Xl!==(Xl=a[1].quotanal+"")&&B(De,Xl),(!Ml||129&s[0])&&Yl!==(Yl=a[7].toFixed(a[0].digitq)+"")&&B(Ve,Yl),(!Ml||145&s[0])&&Zl!==(Zl=(a[4]*a[7]).toFixed(a[0].digitq)+"")&&B(Re,Zl),(!Ml||1&s[0])&&ar!==(ar=a[0].basecoin+"")&&B(ke,ar),(!Ml||1&s[0])&&er!==(er=a[0].quotacoin+"")&&B(Pe,er),(!Ml||2&s[0])&&sr!==(sr=a[1].quotainorders+"")&&B(_e,sr),(!Ml||1&s[0])&&tr!==(tr=a[0].basecoin+"")&&B(Qe,tr),(!Ml||3&s[0])&&lr!==(lr=(1*a[1].basenal).toFixed(a[0].digitprice)+"")&&B(Ze,lr),(!Ml||257&s[0])&&rr!==(rr=a[8].toFixed(a[0].digitprice)+"")&&B(ss,rr),(!Ml||1&s[0])&&cr!==(cr=a[0].basecoin+"")&&B(os,cr),(!Ml||2&s[0])&&or!==(or=a[1].baseinorders+"")&&B(fs,or),(!Ml||4096&s[0])&&B(zs,a[12]),(!Ml||1048576&s[0])&&B(qs,a[20]),(!Ml||524289&s[0])&&nr!==(nr=a[19].toFixed(a[0].digitprice)+"")&&B(Ns,nr),(!Ml||1&s[0])&&ir!==(ir=a[0].basecoin+"")&&B(Cs,ir),(!Ml||12289&s[0])&&dr!==(dr=(a[13]/a[12]||0).toFixed(a[0].digitprice)+"")&&B(Js,dr),(!Ml||1&s[0])&&fr!==(fr=a[0].basecoin+"")&&B(Ms,fr),(!Ml||131072&s[0])&&vr!==(vr=a[17].count+"")&&B(rt,vr),(!Ml||131072&s[0])&&hr!==(hr=a[17].sprice+"")&&B(it,hr),(!Ml||1&s[0])&&mr!==(mr=a[0].basecoin+"")&&B(ft,mr),(!Ml||8&s[0])&&ur!==(ur=a[3]?"Включен":"Выключен")&&B(bt,ur);const l={};!wt&&8&s[0]&&(wt=!0,l.value=a[3],O(()=>wt=!1)),jt.$set(l);const r={};!Rt&&1&s[0]&&(Rt=!0,r.value=a[0].handyzapretnazakup,O(()=>Rt=!1)),At.$set(r),(!Ml||16384&s[0])&&B(Ot,a[14]),(!Ml||1&s[0])&&pr!==(pr=a[0].quotacoin+"")&&B(Jt,pr),(!Ml||32768&s[0])&&B(Mt,a[15]),(!Ml||1&s[0])&&$r!==($r=a[0].basecoin+"")&&B(Ut,$r);const c={};!Xt&&1&s[0]&&(Xt=!0,c.value=a[0].ordersize,O(()=>Xt=!1)),Wt.$set(c);const o={};!sl&&1&s[0]&&(sl=!0,o.value=a[0].ma1,O(()=>sl=!1)),el.$set(o);const n={};!cl&&1&s[0]&&(cl=!0,n.value=a[0].ma2,O(()=>cl=!1)),rl.$set(n);const i={};!ul&&1&s[0]&&(ul=!0,i.value=a[0].maxpriceforzakup,O(()=>ul=!1)),ml.$set(i);const d={};!xl&&1&s[0]&&(xl=!0,d.value=a[0].minpriceforzakup,O(()=>xl=!1)),wl.$set(d);const u={};1&s[2]&&(u.$$scope={dirty:s,ctx:a}),Il.$set(u);const p={};1&s[2]&&(p.$$scope={dirty:s,ctx:a}),Rl.$set(p);const $={};1&s[2]&&($.$$scope={dirty:s,ctx:a}),Sl.$set($);const b={};1&s[2]&&(b.$$scope={dirty:s,ctx:a}),_l.$set(b)},i(a){Ml||(v(f.$$.fragment,a),v(yr),v(jt.$$.fragment,a),v(At.$$.fragment,a),v(Wt.$$.fragment,a),v(el.$$.fragment,a),v(rl.$$.fragment,a),v(ml.$$.fragment,a),v(wl.$$.fragment,a),v(Il.$$.fragment,a),v(Rl.$$.fragment,a),v(Sl.$$.fragment,a),v(_l.$$.fragment,a),Ml=!0)},o(a){h(f.$$.fragment,a),h(yr),h(jt.$$.fragment,a),h(At.$$.fragment,a),h(Wt.$$.fragment,a),h(el.$$.fragment,a),h(rl.$$.fragment,a),h(ml.$$.fragment,a),h(wl.$$.fragment,a),h(Il.$$.fragment,a),h(Rl.$$.fragment,a),h(Sl.$$.fragment,a),h(_l.$$.fragment,a),Ml=!1},d(a){a&&o(e),V(f),yr&&yr.d(),V(jt),V(At),V(Wt),V(el),V(rl),V(ml),V(wl),V(Il),V(Rl),V(Sl),V(_l)}}}function pa(a){let e=0;return a.forEach(a=>{e+=a[5]}),e}function $a(a,e,s){let t;_(a,M,a=>s(42,t=a));var l=t.selectbotname;let r=t.urlhost,c=r+"bot_settings",o=r+"bot_onoff",n=r+"bot_full",i=r+"api/changesettings.php",d=r+"bot_reset",f=r+"bot_delete",v=r+"api/panicsale.php",h=[],m=[],u=[],p=[],$=[],b=[],g=0,y=[],E=[];function j(a){console.log("selectbotid:"+a);let e=new Headers;e.append("Content-Type","application/json");let t=JSON.stringify({botname:a});fetch(n,{method:"POST",headers:e,body:t,redirect:"follow"}).then(a=>a.json()).then(a=>{console.log(a),s(4,g=Number(a.status.currentprice)),s(2,$=a.status),s(1,m=a.finance),s(34,u=a.floors),p=a.sales,s(36,y=p.today),s(37,E=p.all)}).catch(a=>console.log("error",a))}!function(a){let e=new Headers;e.append("Content-Type","application/json");let t=JSON.stringify({botname:a});fetch(c,{method:"POST",headers:e,body:t,redirect:"follow"}).then(a=>a.json()).then(a=>{console.log(a),s(0,h=a)}).catch(a=>console.log("error",a))}(l),j(l),function(a){let e=new Headers;e.append("Content-Type","application/json");let t=JSON.stringify({botname:a});fetch(o,{method:"POST",headers:e,body:t,redirect:"follow"}).then(a=>a.json()).then(a=>{console.log(a),s(3,b=a)}).catch(a=>console.log("error",a))}(l);const w=setInterval(j,1e3,l);G(M,t.timerId=w,t);let x,D,I,B,V,L,z,A,R,T,k,q,F,N,S,C,P=0,O=0,H=0,J=0;return a.$$.update=()=>{4&a.$$.dirty[0]&&($||(s(2,$=[]),s(2,$.rezhim="Подключаемся к серверу",$))),3&a.$$.dirty[0]&&s(5,P=(m.depo-m.startdepo).toFixed(h.digitprice)),2&a.$$.dirty[0]&&s(6,O=(m.depo/m.startdepo*100-100).toFixed(2)),2&a.$$.dirty[0]&&s(7,H=+m.quotanal+ +m.quotainorders),2&a.$$.dirty[0]&&s(8,J=+m.basenal+ +m.baseinorders),32&a.$$.dirty[1]&&s(19,C=pa(y)),524290&a.$$.dirty[0]&&s(18,N=(C/m.startdepo*100).toFixed(2)),17927&a.$$.dirty[0]|136&a.$$.dirty[1]&&null!==$&&(s(38,x=u[$.currentfloor-1]),s(14,T=(m.depo/100*h.ordersize/$.currentprice).toFixed(h.digitq)),s(15,k=(T*$.currentprice).toFixed(h.digitprice)),s(16,q=($.currentprice-D)/(I-D)*100),x&&(s(11,B=x[0]),s(9,D=x[1].toFixed(h.digitprice)),s(10,I=x[2].toFixed(h.digitprice)),V=x[3].toFixed(h.digitprice),L=x[4].toFixed(h.digitprice),z=x[5].toFixed(h.digitprice))),32&a.$$.dirty[1]&&s(20,S=y.length),64&a.$$.dirty[1]&&s(12,A=E.length),64&a.$$.dirty[1]&&s(13,R=pa(E)),8&a.$$.dirty[1]&&s(17,F=function(a){let e,s=0,t=0,l=0;return a.forEach((function(a,e,t){2!==a[7]&&3!==a[7]||(s+=1,l=Number(l+Number(a[10])))})),s>0?(t=(l/s).toFixed(h.digitprice),e={count:s,sprice:t}):e={count:s,sprice:t},e}(u))},[h,m,$,b,g,P,O,H,J,D,I,B,A,R,T,k,q,F,N,C,S,function(){fetch(i,{method:"post",headers:{Accept:"application/json, text/plain, */*","Content-Type":"application/json"},body:JSON.stringify(h)}),setTimeout((function(){l="",G(M,t.rout="botlist",t)}),1e3)},function(){var a=new Headers;a.append("Content-Type","application/json");var e=JSON.stringify({botname:l});fetch(d,{method:"POST",headers:a,body:e,redirect:"follow"}).then(a=>a.json()).then(a=>{console.log(a)}),setTimeout((function(){l="",G(M,t.rout="botlist",t)}),1e3)},function(){var a=new Headers;a.append("Content-Type","application/json");var e=JSON.stringify({botname:l});fetch(f,{method:"POST",headers:a,body:e,redirect:"follow"}).then(a=>a.json()).then(a=>{console.log(a)}),setTimeout((function(){l="",G(M,t.rout="botlist",t)}),1e3)},function(){v&&fetch(v,{method:"post",headers:{Accept:"application/json, text/plain, */*","Content-Type":"application/json"},body:JSON.stringify(l)})},function(a){h.comment=a,s(0,h)},function(a){b=a,s(3,b)},function(a){h.handyzapretnazakup=a,s(0,h)},function(a){h.ordersize=a,s(0,h)},function(a){h.ma1=a,s(0,h)},function(a){h.ma2=a,s(0,h)},function(a){h.maxpriceforzakup=a,s(0,h)},function(a){h.minpriceforzakup=a,s(0,h)}]}class ba extends a{constructor(a){super(),e(this,a,$a,ua,s,{},[-1,-1,-1])}}function ga(a){let e,s,t,d,f,m,u,p,x,I,B;return I=new Q({props:{provider:"google"}}),{c(){e=l("div"),s=l("div"),t=g("Скачайте бесплатно или войдите в облако\n                "),d=l("br"),f=$(),m=l("br"),u=$(),p=l("br"),x=$(),b(I.$$.fragment),this.h()},l(a){e=r(a,"DIV",{class:!0});var l=c(e);s=r(l,"DIV",{class:!0});var n=c(s);t=j(n,"Скачайте бесплатно или войдите в облако\n                "),d=r(n,"BR",{}),f=y(n),m=r(n,"BR",{}),u=y(n),p=r(n,"BR",{}),x=y(n),E(I.$$.fragment,n),n.forEach(o),l.forEach(o),this.h()},h(){n(s,"class","itemgrow svelte-15qh2zc"),n(e,"class","headblock svelte-15qh2zc")},m(a,l){i(a,e,l),w(e,s),w(s,t),w(s,d),w(s,f),w(s,m),w(s,u),w(s,p),w(s,x),D(I,s,null),B=!0},i(a){B||(v(I.$$.fragment,a),B=!0)},o(a){h(I.$$.fragment,a),B=!1},d(a){a&&o(e),V(I)}}}function ya(a){let e,s,t,d;return t=new ba({}),{c(){e=l("div"),s=l("div"),b(t.$$.fragment),this.h()},l(a){e=r(a,"DIV",{class:!0});var l=c(e);s=r(l,"DIV",{class:!0});var n=c(s);E(t.$$.fragment,n),n.forEach(o),l.forEach(o),this.h()},h(){n(s,"class","itemgrow svelte-15qh2zc"),n(e,"class","headblock svelte-15qh2zc")},m(a,l){i(a,e,l),w(e,s),D(t,s,null),d=!0},i(a){d||(v(t.$$.fragment,a),d=!0)},o(a){h(t.$$.fragment,a),d=!1},d(a){a&&o(e),V(t)}}}function Ea(a){let e,s,t,d,f;const m=[ya,ga],u=[];return t=0,d=u[0]=m[0](a),{c(){e=$(),s=l("div"),d.c(),this.h()},l(a){U('[data-svelte="svelte-1qx629s"]',document.head).forEach(o),e=y(a),s=r(a,"DIV",{class:!0});var t=c(s);d.l(t),t.forEach(o),this.h()},h(){document.title="Ti Trading Bot",n(s,"class","mainflex svelte-15qh2zc")},m(a,t){i(a,e,t),i(a,s,t),u[0].m(s,null),f=!0},p:K,i(a){f||(v(d),f=!0)},o(a){h(d),f=!1},d(a){a&&o(e),a&&o(s),u[0].d()}}}export default class extends a{constructor(a){super(),e(this,a,null,Ea,s,{})}}