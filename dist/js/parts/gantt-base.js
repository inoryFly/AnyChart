if(!_.gantt_base){_.gantt_base=1;(function($){var DD,FD,GD,Gda,HD,ID;$.AD=function(a){var b=a.Xa(),c=a.Ka();a.left=$.Dn(a.left,0);a.top=$.Dn(a.top,0);a.width=$.Dn(b,0)-a.left;a.height=$.Dn(c,0)-a.top;return a};
$.BD=function(a,b,c){var d=new Date(a),e=d.getUTCFullYear(),g=d.getUTCMonth(),h=d.getUTCDate(),k=d.getUTCHours(),l=d.getUTCMinutes(),m=d.getUTCSeconds(),p=d.getUTCMilliseconds();switch(b){case "year":return e=$.xn(e,c,(new Date(2E3)).getUTCFullYear()),Date.UTC(e,0);case "semester":return g=$.xn(g,6*c),Date.UTC(e,g);case "quarter":return g=$.xn(g,3*c),Date.UTC(e,g);case "month":return g=$.xn(g,c),Date.UTC(e,g);case "third-of-month":return $.xn(d.getTime(),864E6*c,Date.UTC(2E3,0,2));case "week":return a=
$.zn($.An()),$.xn(d.getTime(),6048E5*c,Date.UTC(2E3,0,2+(a?a.firstDayOfWeek:0)));case "day":return $.xn(d.getTime(),864E5*c,Date.UTC(2E3,0,2));case "hour":return k=$.xn(k,c),Date.UTC(e,g,h,k);case "minute":return l=$.xn(l,c),Date.UTC(e,g,h,k,l);case "second":return m=$.xn(m,c),Date.UTC(e,g,h,k,l,m);case "millisecond":return p=$.xn(p,c),Date.UTC(e,g,h,k,l,m,p)}return a};$.CD=function(){$.Bp.call(this);this.B(4294967295);$.Qo(this.Ha,[["id"],["className"]])};
DD=function(){$.Bp.call(this);this.ab=new $.ps;$.U(this.ab,this.Nj,this);this.fc=this.ea=null;this.N(4294967295);$.$o(this.Ha,0,0,9,1);$.Qo(this.Ha,[["fill",0,1],["format",20,9]])};
$.ED=function(){$.X.call(this);this.Pa=this.b=null;this.G=new $.CD;$.U(this.G,this.d7,this);this.Na=new $.hs;$.U(this.Na,this.Y6,this);this.ab=new $.ps;$.U(this.ab,this.km,this);this.j=new DD;this.j.parent(this);$.U(this.j,this.nca,this);this.fc=this.ea=this.mb=null;this.ya=[];this.D=[];$.$o(this.Ha,20,20,9,1);$.Qo(this.Ha,[["format",20,9],["stroke",16,1],["fill",16,1],["levelHeight",16,1],["drawTopLine",256,1],["drawRightLine",256,1],["drawBottomLine",256,1],["drawLeftLine",256,1]])};
FD=function(a,b,c){var d=a.ya[b]||null;if(!d&&c){a.OE();c=$.kl("defaultLabelFactory.format");var e=$.kl("defaultLabelFactory.positionFormatter");d=new $.us;d.format(c);d.positionFormatter(e);d.enabled(!0);d.U(a.R);a.ya[b]=d}return d};GD=function(a,b,c){return(a=a.D[b])?a.Ff(c):void 0};Gda=function(a,b,c,d,e){for(var g=0,h=e.length;g<h;g++){var k=$.Fq(a,e[g]);c.width=null;c.height=null;if(b.measure({value:k},void 0,c).width<d.width)return g}return h-1};
HD=function(a,b){return(a.mb.Qo?a.mb.Qo(b):a.mb.transform(b)*a.Pa.width)+a.Pa.left};ID=function(a,b){$.Bp.call(this);this.Jm=a;this.Cd=b;this.od=!0;$.$o(this.Ha,20,20,9,1);$.Qo(this.Ha,[["format",20,9],["enabled",512,1],["stroke",16,1],["fill",16,1],["height",16,1]])};$.nm.prototype.b=$.ca(3,function(){return new $.nm(-1*this.ik,-1*this.mh,-1*this.Ah,-1*this.gh,-1*this.Ji,-1*this.Ig)});$.I($.CD,$.Bp);$.CD.prototype.ta=23;$.CD.prototype.wa=$.Bp.prototype.wa|1;var JD={};$.T(JD,0,"id",$.Vo);
$.T(JD,0,"className",$.Vo);$.bp($.CD,JD);$.f=$.CD.prototype;$.f.enabled=function(a){return $.n(a)?(this.ja.enabled!=a&&(a=this.ja.enabled=a,this.B(1,1),a?this.ga(!0):(0,window.isNaN)(this.Hn)&&$.V(this)),this):this.I("enabled")};$.f.target=function(a){return $.n(a)?(this.j!=a&&(this.j=a,this.B(2)),this):this.j};$.f.pa=function(){return this.Fd};$.f.Bf=function(a){this.uc=a;this.B(4)};$.f.Bg=function(a){return null!=this.ja[a]};$.f.gK=function(){return 16};$.f.xu=function(){return 1};
$.f.xc=function(){if(this.mg()||this.Md)return!1;if(!this.enabled())return this.O(1)&&(this.remove(),this.N(1),this.B(2)),!1;if(!this.target())return this.remove(),this.B(2),$.jk(1),!1;this.N(1);return!0};
$.f.aa=function(){if(!this.xc())return this;this.Fd||(this.Fd=$.Pe("DIV"),$.tf(this.Fd,{position:"absolute","pointer-events":"none"}));this.O(2)&&(this.j.appendChild(this.Fd),this.N(2));if(this.O(16)){var a=this.I("id");$.n(a)&&this.Fd.setAttribute("id",a);a=this.I("className");$.n(a)&&(this.Fd.className=a);this.N(16)}this.O(4)&&($.Af(this.Fd,this.uc.left,this.uc.top),$.Gf(this.Fd,this.uc.width,this.uc.height),this.N(4));return this};$.f.remove=function(){this.Fd&&$.Xe(this.Fd)};
$.f.Xd=function(a,b){return $.da(b)||null===b?(a?this.Ra.enabled=!!b:this.enabled(!!b),!0):!1};$.f.J=function(){var a=$.CD.F.J.call(this);$.mp(this,JD,a,"Overlay ui element");var b=$.Bp.prototype.I.call(this,"enabled");a.enabled=$.n(b)?b:null;return a};$.f.$=function(a,b){$.CD.F.$.call(this,a,b);b?($.dp(this.Ra,JD,a),"enabled"in a&&(this.Ra.enabled=a.enabled)):($.ep(this,JD,a),this.enabled(a.enabled))};$.f.W=function(){$.CD.F.W.call(this)};var KD=$.CD.prototype;KD.getElement=KD.pa;KD.enabled=KD.enabled;$.I(DD,$.Bp);$.f=DD.prototype;$.f.wa=$.Bp.prototype.wa|9;$.f.I=$.Ap;$.f.qg=function(a){$.n(a)&&(this.fc=a);return this.fc};$.f.Uh=$.zp;$.f.je=function(){var a=[this.Ra];this.ea&&(a=$.Ka(a,this.ea.je()));return a};$.f.ce=function(){var a=[this.ja];this.ea&&(a=$.Ka(a,this.ea.ce()));return a};$.f.parent=function(a){return $.n(a)?(this.ea!=a&&(this.ea&&$.Dp(this.ea,this.Dd,this),(this.ea=a)&&$.U(this.ea,this.Dd,this),this.ab.parent(this.ea.padding())),this):this.ea};
$.f.Dd=function(a){var b=0,c=0;$.W(a,1)&&(b|=16,c|=1);$.W(a,8)&&(c|=8);$.W(a,32768)&&(b|=1,c|=9);this.B(b,c)};var LD=$.So();$.T(LD,0,"format",$.tp);$.bp(DD,LD);var MD={};$.T(MD,1,"fill",$.jp);$.bp(DD,MD);$.f=DD.prototype;$.f.padding=function(a,b,c,d){return $.n(a)?(this.ab.P.apply(this.ab,arguments),this):this.ab};$.f.Nj=function(a){$.W(a,2)&&this.B(4,9)};$.f.$=function(a,b){b?($.dp(this.Ra,MD,a),$.dp(this.Ra,LD,a)):($.ep(this,LD,a),$.ep(this,MD,a));this.padding().ia(!!b,a.padding)};
$.f.J=function(){var a={};a.padding=this.padding().J();$.mp(this,LD,a,"Time line holidays settings text props");$.mp(this,MD,a,"Time line holidays settings props");return a};$.f.W=function(){DD.F.W.call(this);$.M(this.ab);this.ab=null};var ND=DD.prototype;ND.padding=ND.padding;$.I($.ED,$.fs);$.ED.prototype.ta=$.fs.prototype.ta|2E3;$.ED.prototype.wa=$.fs.prototype.wa;var OD=$.So();$.T(OD,0,"format",$.tp);$.bp($.ED,OD);var PD={};$.T(PD,1,"stroke",$.ip);$.T(PD,1,"fill",$.jp);$.T(PD,0,"levelHeight",$.up);$.T(PD,0,"drawTopLine",$.Zo);$.T(PD,0,"drawRightLine",$.Zo);$.T(PD,0,"drawBottomLine",$.Zo);$.T(PD,0,"drawLeftLine",$.Zo);$.bp($.ED,PD);$.f=$.ED.prototype;
$.f.Wa=function(a){return $.n(a)?(this.mb!=a&&(this.mb&&$.Dp(this.mb,this.VV,this),(this.mb=a)&&$.U(this.mb,this.VV,this),this.B(128,1)),this):this.mb};$.f.level=function(a,b){var c=$.Q(a);if((0,window.isNaN)(c)){c=0;var d=a}else c=a,d=b;var e=this.D[c];e||(this.D[c]=e=new ID(this,c));return $.n(d)?(e.P(d),this):e};$.f.Pga=function(a){$.lk(405,null,["topLevel()","level(2)"],!0);var b=this.level(2);return $.n(a)?(b.P(a),this):b};
$.f.dda=function(a){$.lk(405,null,["midLevel()","level(1)"],!0);var b=this.level(1);return $.n(a)?(b.P(a),this):b};$.f.Jca=function(a){$.lk(405,null,["lowLevel()","level(0)"],!0);var b=this.level(0);return $.n(a)?(b.P(a),this):b};$.f.background=function(a){return $.n(a)?(this.Na.P(a),this):this.Na};$.f.X6=function(a){$.lk(405,null,["backgroundFill()","background().fill()"],!0);return $.n(a)?(this.Na.enabled(!0).fill(a),this):this.Na.fill()};
$.f.Fca=function(a){$.lk(405,null,["levelsSeparationStroke()","stroke()"],!0);return this.stroke(a)};$.f.padding=function(a,b,c,d){return $.n(a)?(this.ab.P.apply(this.ab,arguments),this):this.ab};$.f.Z6=function(a){return $.n(a)?(this.j.P(a),this):this.j};$.f.c7=function(a){return $.n(a)?(this.G.P(a),this.B(1024,1),this):this.G};$.f.Bg=function(a){return null!=this.ja[a]};$.f.qg=function(a){$.n(a)&&(this.fc=a);return this.fc};$.f.Uh=$.zp;
$.f.je=function(){var a=[this.Ra];this.ea&&(a=$.Ka(a,this.ea.je()));return a};$.f.ce=function(){var a=[this.ja];this.ea&&(a=$.Ka(a,this.ea.ce()));return a};$.f.parent=function(a){return $.n(a)?(this.ea!=a&&(this.ea&&$.Dp(this.ea,this.Dd,this),(this.ea=a)&&$.U(this.ea,this.Dd,this)),this):this.ea};$.f.Dd=function(a){var b=0,c=0;$.W(a,1)&&(b|=16,c|=1);$.W(a,8)&&(c|=8);$.W(a,32768)&&(b|=1,c|=9);this.B(b,c)};$.f.VV=function(a){var b=0;$.W(a,4)&&(b|=512);$.W(a,2)&&(b|=384);this.B(b,1)};
$.f.Y6=function(){this.B(64,1)};$.f.km=function(a){$.W(a,2)&&this.B(4,9)};$.f.nca=function(){this.B(16,1)};$.f.d7=function(){this.B(1024,1)};$.f.mn=function(a,b){return{value:$.Fq(a,b),tickValue:a,scale:this.mb}};
$.f.Tk=function(a){var b=this.ya[a];a=this.ka[a]?this.ka[a]:this.ka[a]=this.ba[a][this.va];for(var c=0,d=b.nL();c<d;c++){var e=b.ye(c),g=e.Of().tickValue;e.Of(this.mn(g,a));g=b.measure(e);var h=e.sc("hAlign");"left"==h||"start"==h?g.left=e.j.left:"right"==h||"end"==h?g.left=e.j.Xa()-g.width:g.left=e.j.left+(e.j.width-g.width)/2;h=e.sc("vAlign");"top"==h?g.top=e.j.top:"bottom"==h?g.top=e.j.Ka()-g.height:g.top=e.j.top+(e.j.height-g.height)/2;g.left=Math.max(e.K.left,Math.min(g.left,e.K.Xa()-g.width));
g.top=Math.max(e.K.top,Math.min(g.top,e.K.Ka()-g.height));e.Bc({value:{x:g.left,y:g.top}})}$.Ms(b);b.aa()};
$.f.aa=function(){if(this.xc()){var a=!1,b=!1,c;this.OE();this.O(2)&&(this.b.parent(this.U()),this.N(2));this.O(8)&&(this.b.zIndex(this.zIndex()),this.Na.zIndex(0),this.K.zIndex(1),this.R.zIndex(2),this.N(8));this.O(4)&&(this.Pa=this.pb(),$.AD(this.Pa),this.Mf.shape(this.Pa),this.B(1472),this.N(4));if(this.O(512)){var d=this.ht.length;var e=this.Y.length;this.ka.length=0;this.ba.length=0;this.$a.length=0;this.Fa.length=0;var g=this.g.length=0,h=0;d=Math.max(d,e);for(c=0;c<d;c++){var k=this.ht[c];
var l=this.Y[c];e=this.X[c];var m=this.Aa[c];var p=this.ra[c];var q=GD(this,c,"enabled");if(!k||!q&&$.n(q)){l&&l.clear().parent(null);e&&e.clear().parent(null);m&&m.clear().parent(null);p&&p.clear().parent(null);var r=FD(this,c,!1)}else{var t=$.Fn(GD(this,c,"height"),k.height,this.I("levelHeight"),null);null===t?(this.g[c]=null,h++):(this.g[c]=$.P(t,this.Pa.height),g+=this.g[c]);if("formats"in k)this.ba[c]=k.formats;else{t=k.unit;var u=void 0;this.ht[c+1]&&(u=this.ht[c+1].unit,u!=t&&(u=$.Xn(u,-1)));
this.ba[c]=$.Eq($.Cq(k.unit,u,"timeline"))}l?l.clear().parent(this.K):(l=this.K.path(),this.Y[c]=l);e?e.clear().parent(this.K):(e=this.K.path(),this.X[c]=e);m?m.clear().parent(this.K):(m=this.K.path(),this.Aa[c]=m);p?p.clear().parent(this.K):(p=this.K.path(),this.ra[c]=p);r=FD(this,c,!0)}r&&r.clear()}this.qb=(this.Pa.height-g)/h;this.B(400);this.N(512)}if(this.O(16)){g=$.kl("defaultLabelFactory");h={};$.mp(this,OD,h);h.padding=this.padding();t={};$.mp(this.j,OD,t);t.padding=this.j.padding();d=this.ht.length;
for(c=0;c<d;c++)if(k=this.ht[c],q=GD(this,c,"enabled"),k&&(q||!$.n(q))){l=this.Y[c];e=this.X[c];m=this.Aa[c];p=this.ra[c];var v={};$.Xc(v,g);$.Xc(v,h);u={};$.dp(u,OD,k);"padding"in k&&(u.padding=k.padding);$.Xc(v,u);this.D[c]&&$.dp(v,OD,this.D[c].ja);v.enabled=!0;v.width=null;v.height=null;this.$a[c]=v;v={};$.Xc(v,g);$.Xc(v,h);$.Xc(v,t);$.Xc(v,u);if(u=k.holiday)$.dp(v,OD,u),"padding"in u&&(v.padding=u.padding);v.enabled=!0;v.width=null;v.height=null;this.Fa[c]=v;v=$.Fn(GD(this,c,"stroke"),k.stroke,
this.I("stroke"));q=$.Fn(GD(this,c,"fill"),k.fill,this.I("fill"));m.fill(null).stroke(v);l.fill(q).stroke(null);(l=$.Fn(GD(this,c,"fill"),u&&u.fill,this.j.Ff("fill")))||(l=q);p.fill(null).stroke(v);e.fill(l).stroke(null)}this.B(256);this.N(16)}this.O(64)&&(this.Na.oa(this.Pa),this.Na.U(this.b),this.Na.aa(),this.N(64));this.O(128)&&(a=!0,this.N(128));this.O(256)&&(b=!0,this.N(256));this.O(1024)&&(this.G.target(this.U().Da().yl()),this.G.Bf(this.pb()),this.G.aa(),this.N(1024));if(this.mb&&(a||b))for(d=
this.ht.length,a=d-1,c=this.Pa.height+this.Pa.top,g=!!this.I("drawTopLine"),h=!!this.I("drawRightLine"),t=!!this.I("drawBottomLine"),u=!!this.I("drawLeftLine"),v=0;v<d;v++)if(k=this.ht[v],q=GD(this,v,"enabled"),k&&(q||!$.n(q))){q=v==a;var x=null===this.g[v]?this.g[v]=this.qb:this.g[v];l=this.Y[v].clear();e=this.X[v].clear();m=this.Aa[v].clear();p=this.ra[v].clear();b&&(r=this.ya[v],r.clear());k=this.mb.Iw(0,this.Pa.width,k.unit,k.count);r=k.length;var w=r-1,z=$.bc(m.stroke());var A=!v&&t?z/2:v?Math.ceil(z/
2):0;c=$.Dn(c-A,z);var E=q&&g?z/2:q?0:Math.floor(z/2);x-=(v?A/2:A)+(q?E:E/2);x=$.Dn(c-x,z,!0);for(A=this.va=0;A<r;A++){var D=A==w,R=k[A],O=R.holiday,S=O?p:m;z=$.bc(S.stroke());E=$.Dn(HD(this,R.start),z);z=$.Dn(HD(this,R.end),z);var wa=Math.floor(E),ua=Math.ceil(z),Ea=g||!q?Math.ceil(x):Math.floor(x),$a=t&&!v?Math.floor(c):Math.ceil(c);u&&!A&&S.moveTo(E,Ea).lineTo(E,$a);!h&&D||S.moveTo(z,Ea).lineTo(z,$a);!g&&q||S.moveTo(wa,x).lineTo(ua,x);t&&!v&&S.moveTo(wa,c).lineTo(ua,c);(O?e:l).moveTo(wa,$a).lineTo(ua,
$a).lineTo(ua,Ea).lineTo(wa,Ea).close();b&&(D=v,O=O?this.Fa[D]:this.$a[D],ua=this.g[D],S=this.ya[D],wa=$.fm(E,x,z-E,ua),E=Math.max(E,this.Pa.left),E=$.fm(E,x,Math.min(z,this.Pa.Xa())-E,ua),z=S.add({tickValue:R.start},null,A),(ua=O.padding)?($.L(ua,$.ps)||(this.Ma||(this.Ma=new $.ps),this.Ma.P(O.padding),ua=this.Ma),z.K=ua.jj(E),z.j=ua.jj(wa)):(z.K=E,z.j=wa),O.anchor="left-top",z.Ei().clip(z.K),z.bd(O),z.padding(0),this.ka[D]||this.va==this.ba[D].length-1||(this.va=Math.max(this.va,Gda(R.start,S,O,
z.j,this.ba[D]))))}b&&this.Tk(v);c=x}}};$.f.OE=function(){this.b||(this.b=$.sj(),this.Mf=$.xj(),this.b.clip(this.Mf),this.K=this.b.He(),this.Y=[],this.X=[],this.Aa=[],this.ra=[],this.R=this.b.He(),this.g=[],this.$a=[],this.Fa=[],this.ba=[],this.ka=[])};$.f.remove=function(){this.b&&this.b.parent(null)};
$.f.J=function(){var a=$.ED.F.J.call(this);$.mp(this,PD,a,"Resource Timeline");$.mp(this,OD,a,"Resource Timeline text settings");a.background=this.Na.J();a.padding=this.ab.J();a.holidays=this.j.J();a.overlay=this.G.J();this.D.length&&(a.levels=(0,$.eb)(this.D,function(a){return a?a.J():{}}));return a};
$.f.$=function(a,b){$.ED.F.$.call(this,a,b);b?($.dp(this.Ra,PD,a),$.dp(this.Ra,OD,a)):($.ep(this,PD,a),$.ep(this,OD,a));"levelsSeparationStroke"in a&&(this.stroke(a.levelsSeparationStroke),b||$.lk(405,null,["levelsSeparationStroke()","stroke()"],!0));"backgroundFill"in a&&(this.Na.enabled(!0).fill(a.backgroundFill),b||$.lk(405,null,["backgroundFill()","background().fill()"],!0));var c=a.topLevel;c&&(this.level(2,c),b||$.lk(405,null,["topLevel()","level(2)"],!0));if(c=a.midLevel)this.level(1,c),b||
$.lk(405,null,["midLevel()","level(1)"],!0);if(c=a.lowLevel)this.level(0,c),b||$.lk(405,null,["lowLevel()","level(0)"],!0);"background"in a&&this.Na.ia(!!b,a.background);"padding"in a&&this.ab.ia(!!b,a.padding);"holidays"in a&&this.j.$(a.holidays,b);"overlay"in a&&this.G.ia(!!b,a.overlay);c=a.levels;if($.C(c)){$.rd(this.D);for(var d=this.D.length=0;d<c.length;d++)this.level(d,c[d])}};
$.f.W=function(){$.M(this.b);this.b=null;$.M(this.Na);this.Na=null;$.M(this.ab);this.ab=null;$.M(this.Mf);this.Mf=null;$.M(this.j);this.j=null;$.rd(this.Y);this.Y=null;$.rd(this.X);this.X=null;$.rd(this.ya);this.ya=null;$.M(this.G);this.G=null;$.rd(this.D);this.R=this.K=this.D=null;$.ED.F.W.call(this)};$.I(ID,$.Bp);$.bp(ID,OD);var QD={};$.T(QD,0,"enabled",$.Zo);$.T(QD,1,"stroke",$.ip);$.T(QD,1,"fill",$.jp);$.T(QD,0,"height",$.up);$.bp(ID,QD);$.f=ID.prototype;
$.f.labels=function(a){$.lk(405,null,["level.labels().*()","level.*()"],!0);$.n(a)&&this.P(a);return this};$.f.B=function(a,b){return this.Jm.B(a,b)};$.f.Hw=function(a){return"enabled"==a?!0:this.Jm.I("height"==a?"levelHeight":a)};$.f.Iga=function(a,b,c,d,e,g,h){$.lk(405,null,["tileFill()","fill()"],!0);return this.fill(a,b,c,d,e,g,h)};$.f.Jga=function(a,b,c,d,e){$.lk(405,null,["tilesSeparationStroke()","stroke()"],!0);return this.stroke(a,b,c,d,e)};
$.f.J=function(){var a=ID.F.J.call(this);$.mp(this,QD,a,"TimeLine Header Level",void 0,!0);$.mp(this,OD,a,"TimeLine Header Level text settings",void 0,!0);return a};$.f.Xd=function(a,b){return $.da(b)||null===b?(this.enabled(!!b),!0):!1};$.f.$=function(a){ID.F.$.call(this,a);$.ep(this,QD,a);if($.F(a.labels)){var b=this.Ff("enabled");$.ep(this,OD,a.labels);this.ja.enabled=b}$.ep(this,OD,a)};$.f.W=function(){this.Jm=null;ID.F.W.call(this)};var RD=$.ED.prototype;RD.background=RD.background;
RD.padding=RD.padding;RD.holidays=RD.Z6;RD.overlay=RD.c7;RD.level=RD.level;RD.backgroundFill=RD.X6;RD.levelsSeparationStroke=RD.Fca;RD.topLevel=RD.Pga;RD.midLevel=RD.dda;RD.lowLevel=RD.Jca;RD=ID.prototype;RD.labels=RD.labels;RD.tileFill=RD.Iga;RD.tilesSeparationStroke=RD.Jga;}).call(this,$)}