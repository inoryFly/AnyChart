if(!_.mekko){_.mekko=1;(function($){var WK=function(a,b){a.WN&&$.Mr(a,b)},XK=function(a,b,c,d,e,f){$.Iy.call(this,a,b,c,d,e);this.Kt=f},YK=function(a,b){$.Sx.call(this,!0);this.ib("mekko");this.Pu=this.pu=null;this.afa=!!a;this.Kt=!!b;this.ca.defaultSeriesType="mekko";$.T(this.za,[["pointsPadding",4294967295,1]])},ZK=function(a,b,c,d,e,f){a.data.length&&(a.data[0].j.missing||(c.push(a.U.name()),d.push(a.data[0].data.value)),a.data[b].j.missing||(e.push(a.U.name()),f.push(a.data[b].data.value)))},xea=function(a){if(a.rm.length){var b=
[],c=[],d=[],e=[],f=a.rm[0].data.length-1,h;if("direct"==a.Xa().vv())for(h=a.rm.length;h--;)ZK(a.rm[h],f,b,d,c,e);else for(h=0;h<a.rm.length;h++)ZK(a.rm[h],f,b,d,c,e);f=a.nP();f.Mg();f.Wc.apply(f,b);f.Ug();WK(f,d);f=a.kR();f.Mg();f.Wc.apply(f,c);f.Ug();WK(f,e)}},$K=function(a){$.ay.call(this,a)},aL=function(a,b,c,d){if(0!=b.get("value")&&c){var e=b.j("x"),f=b.j("zero"),h=b.j("value"),k=d?b.j("pointWidth"):a.o;b.j("pointWidth",k);d=Math.abs($.Bl($.O(a.U.va.i("pointsPadding"),k)));k-=2*d;e-=k/2;k=e+
k;b=b.j("stroke")?b.j("stroke"):c.path.stroke();b=$.Rb(b);var l=b/2;e=$.xn(e+l,b);k=$.xn(k-l,b);h+=a.na?-l:l;f-=a.na?-l:l;h=$.xn(h,b);f=$.xn(f,b);d&&(b=Math.abs(f-h),d=b>2*d?d:b/2-1,f-=a.na?-d:d,h+=a.na?-d:d);d=c.path;$.Zx(d,a.na,e,h);$.$x(d,a.na,k,h,k,f,e,f);d.close();d=c.hatchFill;$.Zx(d,a.na,e,h);$.$x(d,a.na,k,h,k,f,e,f);d.close()}},bL=function(a){var b=new YK(!1);b.Kd="mekko";b.mi();b.sf();for(var c=0,d=arguments.length;c<d;c++)b.mekko(arguments[c]);return b},cL=function(a){var b=new YK(!0);b.ib("mosaic");
b.Kd="mosaic";b.mi();b.sf();for(var c=0,d=arguments.length;c<d;c++)b.mekko(arguments[c]);return b},dL=function(a){var b=new YK(!1,!0);b.ib("barmekko");b.Kd="barmekko";b.mi();b.sf();for(var c=0,d=arguments.length;c<d;c++)b.mekko(arguments[c]);return b};$.I(XK,$.Iy);XK.prototype.oZ=function(a){return!this.Kt&&0>a?0:a};XK.prototype.Ko=function(a,b,c){(this.Kt||0<a.get("value"))&&XK.B.Ko.call(this,a,b,c)};XK.prototype.Pf=function(a,b,c){(this.Kt||0<a.get("value"))&&XK.B.Pf.call(this,a,b,c)};$.I(YK,$.Sx);var eL={};eL.mekko={xb:29,Db:2,Ib:[$.lE,$.LD],Hb:null,zb:null,sb:$.Jy|5767168,vb:"value",ub:"zero"};YK.prototype.Ei=eL;$.ax(YK,YK.prototype.Ei);$.g=YK.prototype;$.g.oa=$.Sx.prototype.oa|268435456;$.g.kL=function(a){YK.B.kL.call(this,a);$.W(a,64)&&this.u(268435456,1)};
$.g.nP=function(){if($.n(void 0)){var a=$.zr(this.pu,void 0,"ordinal",$.rr,null,this.EH,this);if(a){var b=this.pu==a;this.pu=a;this.pu.ba(b);if(!b){a=458752;if(this.Bt()&&"categories"==this.lf().i("itemsSourceMode")||this.Kt)a|=512;this.u(a,268435457)}}return this}this.pu||(a=$.rx(this),b=this.lh("firstCategoriesScale"),this.pu=$.zr(this.pu,a[b],null,void 0,null,this.EH,this),this.pu.ba(!1));return this.pu};
$.g.kR=function(){if($.n(void 0)){var a=$.zr(this.Pu,void 0,"ordinal",$.rr,null,this.EH,this);if(a){var b=this.Pu==a;this.Pu=a;this.Pu.ba(b);b||this.u(458752,268435457)}return this}this.Pu||(a=$.rx(this),b=this.lh("lastCategoriesScale"),this.Pu=$.zr(this.Pu,a[b],null,void 0,null,this.EH,this),this.Pu.ba(!1));return this.Pu};$.g.EH=function(a){$.V(this);if($.W(a,4)){a=458752;if(this.Bt()&&"categories"==this.lf().i("itemsSourceMode")||this.Kt)a|=512;this.u(a,268435456)}this.ba(!0)};$.g.By=function(){return $.rr};
$.g.gB=function(){return["Mekko chart X scale","ordinal"]};$.g.IE=function(){return"linear"};$.g.HE=function(){return 15};$.g.jJ=function(){return["Chart scale","ordinal, linear, log, date-time"]};$.g.Bt=function(){return!0};
$.g.Il=function(a,b){if(this.Kt&&1==this.Sl()&&$.L(this.Ra(),$.Lr)){this.kb();var c=[],d,e=this.Ra().names(),f=this.Ra().values(),h=this.Sh(0);for(d=0;d<f.length;d++){var k=null;$.G(b)&&(k={value:f[d],name:e[d]},k=b.call(k,k));$.z(k)||(k=String(e[d]));var l=this.Yb().gc(d);c.push({text:k,iconType:"square",iconStroke:$.yk(l,1),iconFill:l,iconHatchFill:h.hatchFill()})}return c}return YK.B.Il.call(this,a,b)};
$.g.L_=function(a){if(this.afa){var b=!this.Ra().wf(),c="left"==a.i("orientation")||"bottom"==a.i("orientation");a.scale(c==b?this.nP():this.kR())}else a.scale(this.Xa())};
$.g.kb=function(){var a=this.J(196608);this.J(458752)&&this.u(268435456);YK.B.kb.call(this);if(a){var b,c=[],d=[],e=this.rm.length;for(a=0;a<this.rm.length;a++){var f=this.rm[a].data;for(b=0;b<f.length;b++){$.n(d[b])||(d[b]=0);if(f[b].j.missing){d[b]++;var h=0}else h=$.R(f[b].data.value),h=this.Kt?Math.abs(h):0>h?0:h;void 0==c[b]?c.push(h):c[b]+=h}}for(a=0;a<this.rm.length;a++)for(f=this.rm[a].data,b=h=0;b<f.length;b++)f[b].j.category=d[b]<e?h++:h;c=(0,$.se)(c,function(a,b){return d[b]<e});WK(this.Ra(),
c)}this.J(268435456)&&(xea(this),this.I(268435456))};var fL={};$.Mo(fL,0,"pointsPadding",$.Wo);$.$o(YK,fL);$.g=YK.prototype;$.g.Ut=function(a,b){return new XK(this,this,a,b,!1,this.Kt)};$.g.ur=function(){return"mekko"};$.g.gI=function(){return 3};$.g.F=function(){var a=YK.B.F.call(this);$.mp(this,fL,a);return{chart:a}};$.g.Gr=function(a,b,c){YK.B.Gr.call(this,a,b,c)};
$.g.MS=function(a,b,c,d){var e=a.F();(a.scale()==this.nP()&&"left"!=a.i("orientation")||a.scale()==this.kR()&&"right"!=a.i("orientation"))&&$.ux(e,"scale",a.scale(),b,c);d.push($.na(a));return e};$.g.$=function(a,b){YK.B.$.call(this,a,b);$.ep(this,fL,a)};var gL=YK.prototype;gL.xScale=gL.Ra;gL.yScale=gL.Xa;gL.crosshair=gL.kg;gL.xAxis=gL.Hh;gL.getXAxesCount=gL.fB;gL.yAxis=gL.Ki;gL.getYAxesCount=gL.hB;gL.getSeries=gL.Te;gL.palette=gL.Yb;gL.markerPalette=gL.ef;gL.hatchFillPalette=gL.Sd;gL.getType=gL.Qa;
gL.addSeries=gL.Gk;gL.getSeriesAt=gL.Sh;gL.getSeriesCount=gL.Sl;gL.removeSeries=gL.lo;gL.removeSeriesAt=gL.tn;gL.removeAllSeries=gL.lp;gL.getPlotBounds=gL.Ff;gL.annotations=gL.Ej;gL.lineMarker=gL.Gm;gL.rangeMarker=gL.Nm;gL.textMarker=gL.Tm;$.I($K,$.ay);$.lD[29]=$K;$.g=$K.prototype;$.g.type=29;$.g.flags=263905;$.g.Ig={path:"path",hatchFill:"path"};$.g.Mf=function(a,b){if(!a.j("missing")){var c=this.Lc.Pc(b);aL(this,a,c)}};$.g.Vr=function(a){var b=a.j("shapes"),c;for(c in b)b[c].clear();aL(this,a,b,!0)};$.g.Qz=function(a){if(!a.j("missing")){var b=a.j("shapes"),c;for(c in b)b[c].clear();aL(this,a,b,!0)}};$.no.mekko=bL;$.no.mosaic=cL;$.no.barmekko=dL;$.H("anychart.mekko",bL);$.H("anychart.mosaic",cL);$.H("anychart.barmekko",dL);}).call(this,$)}
