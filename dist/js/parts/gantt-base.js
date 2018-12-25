if(!_.gantt_base){_.gantt_base=1;(function($){var ME,OE,PE,Zda,QE,RE;$.JE=function(a){var b=a.$a(),c=a.Na();a.left=$.yn(a.left,0);a.top=$.yn(a.top,0);a.width=$.yn(b,0)-a.left;a.height=$.yn(c,0)-a.top;return a};
$.KE=function(a,b,c){var d=new Date(a),e=d.getUTCFullYear(),f=d.getUTCMonth(),h=d.getUTCDate(),k=d.getUTCHours(),l=d.getUTCMinutes(),m=d.getUTCSeconds(),p=d.getUTCMilliseconds();switch(b){case "year":return e=$.sn(e,c,(new Date(2E3)).getUTCFullYear()),Date.UTC(e,0);case "semester":return f=$.sn(f,6*c),Date.UTC(e,f);case "quarter":return f=$.sn(f,3*c),Date.UTC(e,f);case "month":return f=$.sn(f,c),Date.UTC(e,f);case "third-of-month":return $.sn(d.getTime(),864E6*c,Date.UTC(2E3,0,2));case "week":return a=
$.un($.vn()),$.sn(d.getTime(),6048E5*c,Date.UTC(2E3,0,2+(a?a.firstDayOfWeek:0)));case "day":return $.sn(d.getTime(),864E5*c,Date.UTC(2E3,0,2));case "hour":return k=$.sn(k,c),Date.UTC(e,f,h,k);case "minute":return l=$.sn(l,c),Date.UTC(e,f,h,k,l);case "second":return m=$.sn(m,c),Date.UTC(e,f,h,k,l,m);case "millisecond":return p=$.sn(p,c),Date.UTC(e,f,h,k,l,m,p)}return a};$.LE=function(){$.Hp.call(this);this.o(4294967295);$.T(this.ya,[["id"],["className"]])};
ME=function(){$.Hp.call(this);this.La=new $.Ds;$.U(this.La,this.Oj,this);this.Rb=this.X=null;this.I(4294967295);$.ap(this.ya,0,0,9,1);$.T(this.ya,[["fill",0,1],["format",20,9]])};
$.NE=function(){$.X.call(this);this.Sa=this.b=null;this.u=new $.LE;$.U(this.u,this.W6,this);this.Ga=new $.vs;$.U(this.Ga,this.T6,this);this.La=new $.Ds;$.U(this.La,this.pl,this);this.g=new ME;this.g.parent(this);$.U(this.g,this.dca,this);this.Rb=this.X=this.bb=null;this.Ka=[];this.G=[];$.ap(this.ya,20,20,9,1);$.T(this.ya,[["format",20,9],["stroke",16,1],["fill",16,1],["levelHeight",16,1],["drawTopLine",256,1],["drawRightLine",256,1],["drawBottomLine",256,1],["drawLeftLine",256,1]])};
OE=function(a,b,c){var d=a.Ka[b]||null;if(!d&&c){a.kF();c=$.Rk("defaultLabelFactory.format");var e=$.Rk("defaultLabelFactory.positionFormatter");d=new $.Ks;d.format(c);d.positionFormatter(e);d.Ud();d.enabled(!0);d.O(a.ro);a.Ka[b]=d}return d};PE=function(a,b,c){return(a=a.G[b])?a.he(c):void 0};Zda=function(a,b,c,d,e,f){for(var h=0,k=f.length;h<k;h++){var l=f[h];d.width=null;d.height=null;if(c.measure(a.Jm(b,l),void 0,d).width<e.width)return h}return k-1};
QE=function(a,b){return(a.bb.Lo?a.bb.Lo(b):a.bb.transform(b)*a.Sa.width)+a.Sa.left};RE=function(a,b){$.Hp.call(this);this.lp=a;this.je=b;$.ap(this.ya,20,20,9,1);$.T(this.ya,[["format",20,9],["enabled",512,1],["stroke",16,1],["fill",16,1],["height",16,1]])};$.nm.prototype.b=$.ca(6,function(){return new $.nm(-1*this.jk,-1*this.zh,-1*this.Ih,-1*this.uh,-1*this.Ii,-1*this.Vg)});$.I($.LE,$.Hp);$.LE.prototype.oa=23;$.LE.prototype.ra=$.Hp.prototype.ra|1;var SE={};$.Po(SE,0,"id",$.Wo);
$.Po(SE,0,"className",$.Wo);$.cp($.LE,SE);$.g=$.LE.prototype;$.g.enabled=function(a){return $.n(a)?(this.ca.enabled!=a&&(a=this.ca.enabled=a,this.o(1,1),a?this.ba(!0):(0,window.isNaN)(this.Mn)&&$.V(this)),this):this.i("enabled")};$.g.target=function(a){return $.n(a)?(this.b!=a&&(this.b=a,this.o(2)),this):this.b};$.g.Ma=function(){return this.Ed};$.g.Gf=function(a){this.Ac=a;this.o(4)};$.g.Sg=function(a){return null!=this.ca[a]};$.g.dK=function(){return 16};$.g.$u=function(){return 1};
$.g.Dc=function(){if(this.Mf()||this.Dd)return!1;if(!this.enabled())return this.J(1)&&(this.remove(),this.I(1),this.o(2)),!1;if(!this.target())return this.remove(),this.o(2),$.Pj(1),!1;this.I(1);return!0};
$.g.Y=function(){if(!this.Dc())return this;this.Ed||(this.Ed=$.je("DIV"),$.Je(this.Ed,{position:"absolute","pointer-events":"none"}));this.J(2)&&(this.b.appendChild(this.Ed),this.I(2));if(this.J(16)){var a=this.i("id");$.n(a)&&this.Ed.setAttribute("id",a);a=this.i("className");$.n(a)&&(this.Ed.className=a);this.I(16)}this.J(4)&&($.Re(this.Ed,this.Ac.left,this.Ac.top),$.Xe(this.Ed,this.Ac.width,this.Ac.height),this.I(4));return this};$.g.remove=function(){this.Ed&&$.se(this.Ed)};
$.g.Oe=function(a,b){return $.da(b)||null===b?(a?this.ma.enabled=!!b:this.enabled(!!b),!0):!1};$.g.F=function(){var a=$.LE.B.F.call(this);$.pp(this,SE,a,"Overlay ui element");var b=$.Hp.prototype.i.call(this,"enabled");a.enabled=$.n(b)?b:null;return a};$.g.$=function(a,b){$.LE.B.$.call(this,a,b);b?($.ep(this.ma,SE,a),"enabled"in a&&(this.ma.enabled=a.enabled)):($.fp(this,SE,a),this.enabled(a.enabled))};$.g.R=function(){$.LE.B.R.call(this)};var TE=$.LE.prototype;TE.getElement=TE.Ma;TE.enabled=TE.enabled;$.I(ME,$.Hp);$.g=ME.prototype;$.g.ra=$.Hp.prototype.ra|9;$.g.i=$.Gp;$.g.hg=function(a){$.n(a)&&(this.Rb=a);return this.Rb};$.g.zg=$.Fp;$.g.Md=function(){var a=[this.ma];this.X&&(a=$.Ea(a,this.X.Md()));return a};$.g.Ld=function(){var a=[this.ca];this.X&&(a=$.Ea(a,this.X.Ld()));return a};$.g.parent=function(a){return $.n(a)?(this.X!=a&&(this.X&&$.Jp(this.X,this.Lc,this),(this.X=a)&&$.U(this.X,this.Lc,this),this.La.parent(this.X.padding())),this):this.X};
$.g.Lc=function(a){var b=0,c=0;$.W(a,1)&&(b|=16,c|=1);$.W(a,8)&&(c|=8);$.W(a,32768)&&(b|=1,c|=9);this.o(b,c)};var UE=$.To();$.Po(UE,0,"format",$.yp);$.cp(ME,UE);var VE={};$.Po(VE,1,"fill",$.mp);$.cp(ME,VE);$.g=ME.prototype;$.g.padding=function(a,b,c,d){return $.n(a)?(this.La.N.apply(this.La,arguments),this):this.La};$.g.Oj=function(a){$.W(a,2)&&this.o(4,9)};$.g.$=function(a,b){b?($.ep(this.ma,VE,a),$.ep(this.ma,UE,a)):($.fp(this,UE,a),$.fp(this,VE,a));this.padding().ea(!!b,a.padding)};
$.g.F=function(){var a={};a.padding=this.padding().F();$.pp(this,UE,a,"Time line holidays settings text props");$.pp(this,VE,a,"Time line holidays settings props");return a};$.g.R=function(){ME.B.R.call(this);$.$c(this.La);this.La=null};var WE=ME.prototype;WE.padding=WE.padding;$.I($.NE,$.ts);$.NE.prototype.oa=$.ts.prototype.oa|2E3;$.NE.prototype.ra=$.ts.prototype.ra;var XE=$.To();$.Po(XE,0,"format",$.yp);$.cp($.NE,XE);var YE={};$.Qo(YE,[[1,"stroke",$.lp],[1,"fill",$.mp],[0,"levelHeight",$.zp],[0,"drawTopLine",$.$o],[0,"drawRightLine",$.$o],[0,"drawBottomLine",$.$o],[0,"drawLeftLine",$.$o]]);$.cp($.NE,YE);$.g=$.NE.prototype;$.g.Qa=function(a){return $.n(a)?(this.bb!=a&&(this.bb&&$.Jp(this.bb,this.pW,this),(this.bb=a)&&$.U(this.bb,this.pW,this),this.o(128,1)),this):this.bb};
$.g.level=function(a,b){var c=$.R(a);if((0,window.isNaN)(c)){c=0;var d=a}else c=a,d=b;var e=this.G[c];e||(this.G[c]=e=new RE(this,c));return $.n(d)?(e.N(d),this):e};$.g.tga=function(a){$.Rj(405,null,["topLevel()","level(2)"],!0);var b=this.level(2);return $.n(a)?(b.N(a),this):b};$.g.$ca=function(a){$.Rj(405,null,["midLevel()","level(1)"],!0);var b=this.level(1);return $.n(a)?(b.N(a),this):b};
$.g.Dca=function(a){$.Rj(405,null,["lowLevel()","level(0)"],!0);var b=this.level(0);return $.n(a)?(b.N(a),this):b};$.g.background=function(a){return $.n(a)?(this.Ga.N(a),this):this.Ga};$.g.S6=function(a){$.Rj(405,null,["backgroundFill()","background().fill()"],!0);return $.n(a)?(this.Ga.enabled(!0).fill(a),this):this.Ga.fill()};$.g.zca=function(a){$.Rj(405,null,["levelsSeparationStroke()","stroke()"],!0);return this.stroke(a)};
$.g.padding=function(a,b,c,d){return $.n(a)?(this.La.N.apply(this.La,arguments),this):this.La};$.g.U6=function(a){return $.n(a)?(this.g.N(a),this):this.g};$.g.V6=function(a){return $.n(a)?(this.u.N(a),this.o(1024,1),this):this.u};$.g.Sg=function(a){return null!=this.ca[a]};$.g.hg=function(a){$.n(a)&&(this.Rb=a);return this.Rb};$.g.zg=$.Fp;$.g.Md=function(){var a=[this.ma];this.X&&(a=$.Ea(a,this.X.Md()));return a};$.g.Ld=function(){var a=[this.ca];this.X&&(a=$.Ea(a,this.X.Ld()));return a};
$.g.parent=function(a){return $.n(a)?(this.X!=a&&(this.X&&$.Jp(this.X,this.Lc,this),(this.X=a)&&$.U(this.X,this.Lc,this)),this):this.X};$.g.Lc=function(a){var b=0,c=0;$.W(a,1)&&(b|=16,c|=1);$.W(a,8)&&(c|=8);$.W(a,32768)&&(b|=1,c|=9);this.o(b,c)};$.g.pW=function(a){var b=0;$.W(a,4)&&(b|=512);$.W(a,2)&&(b|=384);this.o(b,1)};$.g.T6=function(){this.o(64,1)};$.g.pl=function(a){$.W(a,2)&&this.o(4,9)};$.g.dca=function(){this.o(16,1)};$.g.W6=function(){this.o(1024,1)};
$.g.Jm=function(a,b){var c=$.Qq(a,b);return $.it(new $.xu({value:{value:c,type:"string"},tickValue:{value:a,type:"number"},scale:{value:this.bb,type:""}}))};
$.g.al=function(a){var b=this.Ka[a];a=this.P[a]?this.P[a]:this.P[a]=this.fa[a][this.la];for(var c=0,d=b.dL();c<d;c++){var e=b.Vd(c),f=e.Cf().tickValue;e.Cf(this.Jm(f,a));f=b.measure(e);var h=e.tc("hAlign");"left"==h||"start"==h?f.left=e.D.left:"right"==h||"end"==h?f.left=e.D.$a()-f.width:f.left=e.D.left+(e.D.width-f.width)/2;h=e.tc("vAlign");"top"==h?f.top=e.D.top:"bottom"==h?f.top=e.D.Na()-f.height:f.top=e.D.top+(e.D.height-f.height)/2;f.left=Math.max(e.K.left,Math.min(f.left,e.K.$a()-f.width));
f.top=Math.max(e.K.top,Math.min(f.top,e.K.Na()-f.height));e.wc({value:{x:f.left,y:f.top}})}$.Us(b);b.Y()};
$.g.Y=function(){if(this.Dc()){var a=!1,b=!1,c;this.kF();this.J(2)&&(this.b.parent(this.O()),this.I(2));this.J(8)&&(this.b.zIndex(this.zIndex()),this.Ga.zIndex(0),this.D.zIndex(1),this.ro.zIndex(2),this.I(8));this.J(4)&&(this.Sa=this.qb(),$.JE(this.Sa),this.Rf.shape(this.Sa),this.P.length=0,this.o(1472),this.I(4));if(this.J(512)){var d=this.qt.length;var e=this.K.length;this.P.length=0;this.fa.length=0;this.Pa.length=0;this.Fa.length=0;var f=this.f.length=0,h=0;d=Math.max(d,e);for(c=0;c<d;c++){var k=
this.qt[c];var l=this.K[c];e=this.W[c];var m=this.wa[c];var p=this.qa[c];var q=PE(this,c,"enabled");if(!k||!q&&$.n(q)){l&&l.clear().parent(null);e&&e.clear().parent(null);m&&m.clear().parent(null);p&&p.clear().parent(null);var r=OE(this,c,!1)}else{var t=$.An(PE(this,c,"height"),k.height,this.i("levelHeight"),null);null===t?(this.f[c]=null,h++):(this.f[c]=$.O(t,this.Sa.height),f+=this.f[c]);if("formats"in k)this.fa[c]=k.formats;else{t=k.unit;var u=void 0;this.qt[c+1]&&(u=this.qt[c+1].unit,u!=t&&(u=
$.Yn(u,-1)));this.fa[c]=$.Pq($.Nq(k.unit,u,"timeline"))}l?l.clear().parent(this.D):(l=this.D.path(),this.K[c]=l);e?e.clear().parent(this.D):(e=this.D.path(),this.W[c]=e);m?m.clear().parent(this.D):(m=this.D.path(),this.wa[c]=m);p?p.clear().parent(this.D):(p=this.D.path(),this.qa[c]=p);r=OE(this,c,!0)}r&&r.clear()}this.fb=(this.Sa.height-f)/h;this.o(400);this.I(512)}if(this.J(16)){f=$.Rk("defaultLabelFactory");h={};$.pp(this,XE,h);h.format=this.i("format");h.padding=this.padding();t={};$.pp(this.g,
XE,t);t.padding=this.g.padding();d=this.qt.length;for(c=0;c<d;c++)if(k=this.qt[c],q=PE(this,c,"enabled"),k&&(q||!$.n(q))){l=this.K[c];e=this.W[c];m=this.wa[c];p=this.qa[c];var v={};$.Ec(v,f);$.Ec(v,h);u={};$.ep(u,XE,k);"padding"in k&&(u.padding=k.padding);$.Ec(v,u);this.G[c]&&$.ep(v,XE,this.G[c].ca);v.enabled=!0;v.width=null;v.height=null;this.Pa[c]=v;v={};$.Ec(v,f);$.Ec(v,h);$.Ec(v,t);$.Ec(v,u);if(u=k.holiday)$.ep(v,XE,u),"padding"in u&&(v.padding=u.padding);v.enabled=!0;v.width=null;v.height=null;
this.Fa[c]=v;v=$.An(PE(this,c,"stroke"),k.stroke,this.i("stroke"));q=$.An(PE(this,c,"fill"),k.fill,this.i("fill"));m.fill(null).stroke(v);l.fill(q).stroke(null);(l=$.An(PE(this,c,"fill"),u&&u.fill,this.g.he("fill")))||(l=q);p.fill(null).stroke(v);e.fill(l).stroke(null)}this.o(256);this.I(16)}this.J(64)&&(this.Ga.ja(this.Sa),this.Ga.O(this.b),this.Ga.Y(),this.I(64));this.J(128)&&(a=!0,this.I(128));this.J(256)&&(b=!0,this.I(256));this.J(1024)&&(this.u.target(this.O().Da().Hl()),this.u.Gf(this.qb()),
this.u.Y(),this.I(1024));if(this.bb&&(a||b))for(d=this.qt.length,a=d-1,c=this.Sa.height+this.Sa.top,f=!!this.i("drawTopLine"),h=!!this.i("drawRightLine"),t=!!this.i("drawBottomLine"),u=!!this.i("drawLeftLine"),v=0;v<d;v++)if(k=this.qt[v],q=PE(this,v,"enabled"),k&&(q||!$.n(q))){q=v==a;var w=null===this.f[v]?this.f[v]=this.fb:this.f[v];l=this.K[v].clear();e=this.W[v].clear();m=this.wa[v].clear();p=this.qa[v].clear();b&&(r=this.Ka[v],r.clear());k=this.bb.ex(0,this.Sa.width,k.unit,k.count);r=k.length;
var x=r-1,y=$.Pb(m.stroke());var A=!v&&t?y/2:v?Math.ceil(y/2):0;c=$.yn(c-A,y);var F=q&&f?y/2:q?0:Math.floor(y/2);w-=(v?A/2:A)+(q?F:F/2);w=$.yn(c-w,y,!0);for(A=this.la=0;A<r;A++){var D=A==x,N=k[A],P=N.holiday,Q=P?p:m;y=$.Pb(Q.stroke());F=$.yn(QE(this,N.start),y);y=$.yn(QE(this,N.end),y);var S=Math.floor(F),qa=Math.ceil(y),ya=f||!q?Math.ceil(w):Math.floor(w),Ma=t&&!v?Math.floor(c):Math.ceil(c);u&&!A&&Q.moveTo(F,ya).lineTo(F,Ma);!h&&D||Q.moveTo(y,ya).lineTo(y,Ma);!f&&q||Q.moveTo(S,w).lineTo(qa,w);t&&
!v&&Q.moveTo(S,c).lineTo(qa,c);(P?e:l).moveTo(S,Ma).lineTo(qa,Ma).lineTo(qa,ya).lineTo(S,ya).close();b&&(D=v,P=P?this.Fa[D]:this.Pa[D],qa=this.f[D],Q=this.Ka[D],S=$.Rl(F,w,y-F,qa),F=Math.max(F,this.Sa.left),F=$.Rl(F,w,Math.min(y,this.Sa.$a())-F,qa),y=Q.add({tickValue:N.start},null,A),(qa=P.padding)?($.L(qa,$.Ds)||(this.Ja||(this.Ja=new $.Ds),this.Ja.N(P.padding),qa=this.Ja),y.K=qa.Ri(F),y.D=qa.Ri(S)):(y.K=F,y.D=S),P.anchor="left-top",y.th().clip(y.K),y.bd(P),y.padding(0),this.P[D]||this.la==this.fa[D].length-
1||(this.la=Math.max(this.la,Zda(this,N.start,Q,P,y.D,this.fa[D]))))}b&&this.al(v);c=w}}};$.g.kF=function(){this.b||(this.b=$.Ti(),this.Rf=$.Yi(),this.b.clip(this.Rf),this.D=this.b.ke(),this.K=[],this.W=[],this.wa=[],this.qa=[],this.ro=this.b.ke(),this.f=[],this.Pa=[],this.Fa=[],this.fa=[],this.P=[])};$.g.remove=function(){this.b&&this.b.parent(null)};
$.g.F=function(){var a=$.NE.B.F.call(this);$.pp(this,YE,a,"Resource Timeline");$.pp(this,XE,a,"Resource Timeline text settings");a.background=this.Ga.F();a.padding=this.La.F();a.holidays=this.g.F();a.overlay=this.u.F();this.G.length&&(a.levels=(0,$.Ua)(this.G,function(a){return a?a.F():{}}));return a};
$.g.$=function(a,b){$.NE.B.$.call(this,a,b);b?($.ep(this.ma,YE,a),$.ep(this.ma,XE,a)):($.fp(this,YE,a),$.fp(this,XE,a));"levelsSeparationStroke"in a&&(this.stroke(a.levelsSeparationStroke),b||$.Rj(405,null,["levelsSeparationStroke()","stroke()"],!0));"backgroundFill"in a&&(this.Ga.enabled(!0).fill(a.backgroundFill),b||$.Rj(405,null,["backgroundFill()","background().fill()"],!0));var c=a.topLevel;c&&(this.level(2,c),b||$.Rj(405,null,["topLevel()","level(2)"],!0));if(c=a.midLevel)this.level(1,c),b||
$.Rj(405,null,["midLevel()","level(1)"],!0);if(c=a.lowLevel)this.level(0,c),b||$.Rj(405,null,["lowLevel()","level(0)"],!0);"background"in a&&this.Ga.ea(!!b,a.background);"padding"in a&&this.La.ea(!!b,a.padding);"holidays"in a&&this.g.$(a.holidays,b);"overlay"in a&&this.u.ea(!!b,a.overlay);c=a.levels;if($.C(c))for(var d=0;d<c.length;d++)this.level(d,c[d])};
$.g.R=function(){$.$c(this.b);this.b=null;$.$c(this.Ga);this.Ga=null;$.$c(this.La);this.La=null;$.$c(this.Rf);this.Rf=null;$.$c(this.g);this.g=null;$.ad(this.K);this.K=null;$.ad(this.W);this.W=null;$.ad(this.Ka);this.Ka=null;$.$c(this.u);this.u=null;$.ad(this.G);this.ro=this.D=this.G=null;$.NE.B.R.call(this)};$.I(RE,$.Hp);$.cp(RE,XE);var ZE={};$.Qo(ZE,[[0,"enabled",$.$o],[1,"stroke",$.lp],[1,"fill",$.mp],[0,"height",$.zp]]);$.cp(RE,ZE);$.g=RE.prototype;
$.g.labels=function(a){$.Rj(405,null,["level.labels().*()","level.*()"],!0);$.n(a)&&this.N(a);return this};$.g.o=function(a,b){return this.lp.o(a,b)};$.g.Lf=function(a){return"enabled"==a?!0:this.lp.i("height"==a?"levelHeight":a)};$.g.mga=function(a,b,c,d,e,f,h){$.Rj(405,null,["tileFill()","fill()"],!0);return this.fill(a,b,c,d,e,f,h)};$.g.nga=function(a,b,c,d,e){$.Rj(405,null,["tilesSeparationStroke()","stroke()"],!0);return this.stroke(a,b,c,d,e)};
$.g.F=function(){var a=RE.B.F.call(this);$.pp(this,ZE,a,"TimeLine Header Level",void 0,!0);$.pp(this,XE,a,"TimeLine Header Level text settings",void 0,!0);return a};$.g.Oe=function(a,b){return $.da(b)||null===b?(this.enabled(!!b),!0):!1};$.g.$=function(a){RE.B.$.call(this,a);$.fp(this,ZE,a);if($.E(a.labels)){var b=this.he("enabled");$.fp(this,XE,a.labels);this.ca.enabled=b}$.fp(this,XE,a)};$.g.R=function(){this.lp=null;RE.B.R.call(this)};var $E=$.NE.prototype;$E.background=$E.background;
$E.padding=$E.padding;$E.holidays=$E.U6;$E.overlay=$E.V6;$E.level=$E.level;$E.backgroundFill=$E.S6;$E.levelsSeparationStroke=$E.zca;$E.topLevel=$E.tga;$E.midLevel=$E.$ca;$E.lowLevel=$E.Dca;$E=RE.prototype;$E.labels=$E.labels;$E.tileFill=$E.mga;$E.tilesSeparationStroke=$E.nga;}).call(this,$)}
