if(!_.cartesian){_.cartesian=1;(function($){var iI=function(a,b,c){var d;c&$.lm?d="selectWhiskerWidth":c&$.N&&(d="hoverWhiskerWidth");var e;d&&(a.Ck()&&(e=b.get(d)),$.n(e)||(e=a.O(d)));$.n(e)||(a.Ck()&&(e=b.get("whiskerWidth")),$.n(e)||(e=a.O("whiskerWidth")));return $.R(e,a.Zm)},jI=function(a){$.zx.call(this,a)},kI=function(){$.Dy.call(this);this.P="cartesian"},lI=function(){var a=new kI;a.Da(!0,$.sm("cartesian"));return a},mI=function(a){var b=new kI;b.Ba.defaultSeriesType="area";b.P="area";b.Da(!0,$.sm("area"));for(var c=0,d=arguments.length;c<
d;c++)b.area(arguments[c]);return b},nI=function(a){var b=new kI;b.Ba.defaultSeriesType="bar";b.P="bar";b.Da(!0,$.sm("bar"));for(var c=0,d=arguments.length;c<d;c++)b.bar(arguments[c]);return b},oI=function(a){var b=new kI;b.Ba.defaultSeriesType="box";b.P="box";b.Da(!0,$.sm("box"));for(var c=0,d=arguments.length;c<d;c++)b.box(arguments[c]);return b},pI=function(a){var b=new kI;b.Ba.defaultSeriesType="column";b.P="column";b.Da(!0,$.sm("column"));for(var c=0,d=arguments.length;c<d;c++)b.column(arguments[c]);
return b},qI=function(a){var b=new kI;b.Ba.defaultSeriesType="hilo";b.P="hilo";b.Da(!0,$.sm("column"));for(var c=0,d=arguments.length;c<d;c++)b.hilo(arguments[c]);return b},rI=function(a){var b=new kI;b.Ba.defaultSeriesType="candlestick";b.P="financial";b.Da(!0,$.sm("financial"));for(var c=0,d=arguments.length;c<d;c++)b.candlestick(arguments[c]);return b},sI=function(a){var b=new kI;b.Ba.defaultSeriesType="line";b.P="line";b.Da(!0,$.sm("line"));for(var c=0,d=arguments.length;c<d;c++)b.line(arguments[c]);
return b},tI=function(a){var b=new kI;b.Ba.defaultSeriesType="area";b.P="vertical-area";b.Da(!0,$.sm("verticalArea"));for(var c=0,d=arguments.length;c<d;c++)b.area(arguments[c]);return b},uI=function(a){var b=new kI;b.Ba.defaultSeriesType="line";b.P="vertical-line";b.Da(!0,$.sm("verticalLine"));for(var c=0,d=arguments.length;c<d;c++)b.line(arguments[c]);return b};$.mx.prototype.dw=$.ga(7,function(){return this.B.length});$.mx.prototype.cw=$.ga(6,function(){return this.j.length});
$.vI={name:"whisker",Ac:"path",Gc:null,Ic:["whiskerStroke","hoverWhiskerStroke","selectWhiskerStroke"],qc:!1,zIndex:2E-6};$.wI={name:"stem",Ac:"path",Gc:null,Ic:["stemStroke","hoverStemStroke","selectStemStroke"],qc:!1,zIndex:2E-6};$.xI={name:"median",Ac:"path",Gc:null,Ic:["medianStroke","hoverMedianStroke","selectMedianStroke"],qc:!1,zIndex:2E-6};$.H(jI,$.zx);$.JB[3]=jI;$.g=jI.prototype;$.g.type=3;$.g.nf=263936;$.g.tf={path:"path",hatchFill:"path",median:"path",stem:"path",whisker:"path"};
$.g.gk=["lowest","q1","median","q3","highest"];
$.g.Pe=function(a,b){var c=this.tc.Ec(b),d=a.I("x"),e=a.I("lowest"),f=a.I("q1"),h=a.I("median"),k=a.I("q3"),l=a.I("highest"),m=iI(this.ga,a,b)/2,p=this.U/2,q=c.path;$.xx(q,this.b,d-p,f);$.yx(q,this.b,d+p,f,d+p,k,d-p,k);q.close();q=c.hatchFill;$.xx(q,this.b,d-p,f);$.yx(q,this.b,d+p,f,d+p,k,d-p,k);q.close();q=c.median;$.xx(q,this.b,d-p,h);$.yx(q,this.b,d+p,h);q=c.stem;$.xx(q,this.b,d,e);$.yx(q,this.b,d,f);$.xx(q,this.b,d,k);$.yx(q,this.b,d,l);q=c.whisker;$.xx(q,this.b,d-m,e);$.yx(q,this.b,d+m,e);$.xx(q,
this.b,d-m,l);$.yx(q,this.b,d+m,l)};$.g.Uw=function(a,b){var c=a.I("shapes");if(c){var d=a.I("x"),e=a.I("lowest"),f=a.I("highest"),h=iI(this.ga,a,b)/2,c=c.whisker;c.clear();$.xx(c,this.b,d-h,e);$.yx(c,this.b,d+h,e);$.xx(c,this.b,d-h,f);$.yx(c,this.b,d+h,f)}};$.H(kI,$.Dy);var yI={},zI=$.dy|7864320;yI.area={rb:1,Ab:1,Bb:[$.dC,$.eC,$.fC],zb:null,tb:null,qb:zI,pb:"value",ob:"zero"};yI.bar={rb:6,Ab:2,Bb:[$.sC,$.fC],zb:null,tb:null,qb:zI,pb:"value",ob:"zero"};yI.box={rb:3,Ab:2,Bb:[$.sC,$.fC,$.xI,$.wI,$.vI],zb:null,tb:null,qb:zI,pb:"highest",ob:"lowest"};yI.bubble={rb:4,Ab:2,Bb:[$.gC,$.hC,$.iC,$.jC],zb:null,tb:null,qb:zI,pb:"value",ob:"value"};yI.candlestick={rb:5,Ab:2,Bb:[$.kC,$.mC,$.nC,$.pC],zb:null,tb:null,qb:zI,pb:"high",ob:"low"};
yI.column={rb:6,Ab:2,Bb:[$.sC,$.fC],zb:null,tb:null,qb:zI,pb:"value",ob:"zero"};yI["jump-line"]={rb:19,Ab:2,Bb:[$.eC],zb:null,tb:null,qb:zI,pb:"value",ob:"value"};yI.line={rb:8,Ab:1,Bb:[$.eC],zb:null,tb:null,qb:zI,pb:"value",ob:"value"};yI.marker={rb:9,Ab:2,Bb:[$.sC,$.fC],zb:null,tb:null,qb:$.dy|3670016,pb:"value",ob:"value"};yI.ohlc={rb:10,Ab:2,Bb:[$.lC,$.oC],zb:null,tb:null,qb:zI,pb:"high",ob:"low"};yI["range-area"]={rb:11,Ab:1,Bb:[$.dC,$.rC,$.qC,$.fC],zb:null,tb:null,qb:zI,pb:"high",ob:"low"};
yI["range-bar"]={rb:12,Ab:2,Bb:[$.sC,$.fC],zb:null,tb:null,qb:zI,pb:"high",ob:"low"};yI["range-column"]={rb:12,Ab:2,Bb:[$.sC,$.fC],zb:null,tb:null,qb:zI,pb:"high",ob:"low"};yI["range-spline-area"]={rb:13,Ab:1,Bb:[$.dC,$.qC,$.rC,$.fC],zb:null,tb:null,qb:zI,pb:"high",ob:"low"};yI["range-step-area"]={rb:14,Ab:1,Bb:[$.dC,$.qC,$.rC,$.fC],zb:null,tb:null,qb:zI,pb:"high",ob:"low"};yI.spline={rb:15,Ab:1,Bb:[$.eC],zb:null,tb:null,qb:zI,pb:"value",ob:"value"};
yI["spline-area"]={rb:16,Ab:1,Bb:[$.dC,$.eC,$.fC],zb:null,tb:null,qb:zI,pb:"value",ob:"zero"};yI["step-area"]={rb:17,Ab:1,Bb:[$.dC,$.eC,$.fC],zb:null,tb:null,qb:zI,pb:"value",ob:"zero"};yI["step-line"]={rb:18,Ab:1,Bb:[$.eC],zb:null,tb:null,qb:zI,pb:"value",ob:"value"};yI.stick={rb:20,Ab:2,Bb:[$.eC],zb:null,tb:null,qb:zI,pb:"value",ob:"zero"};yI.hilo={rb:31,Ab:2,Bb:[$.eC],zb:null,tb:null,qb:zI,pb:"high",ob:"low"};kI.prototype.zg=yI;$.jw(kI,kI.prototype.zg);$.pp.cartesian=lI;var AI=kI.prototype;
$.G("anychart.cartesian",lI);AI.xScale=AI.Na;AI.yScale=AI.gb;AI.crosshair=AI.Mo;AI.maxBubbleSize=AI.rw;AI.minBubbleSize=AI.uw;AI.grid=AI.As;AI.minorGrid=AI.Vu;AI.xAxis=AI.Hq;AI.getXAxesCount=AI.cw;AI.yAxis=AI.No;AI.getYAxesCount=AI.dw;AI.getSeries=AI.he;AI.lineMarker=AI.Bs;AI.rangeMarker=AI.Cs;AI.textMarker=AI.Ds;AI.palette=AI.Mc;AI.markerPalette=AI.Fi;AI.hatchFillPalette=AI.Bl;AI.getType=AI.Ta;AI.addSeries=AI.om;AI.getSeriesAt=AI.$i;AI.getSeriesCount=AI.hg;AI.removeSeries=AI.Qo;
AI.removeSeriesAt=AI.Ro;AI.removeAllSeries=AI.Po;AI.getPlotBounds=AI.Tf;AI.xZoom=AI.Bi;AI.xScroller=AI.Ek;AI.getStat=AI.Xe;AI.annotations=AI.nm;AI.getXScales=AI.qr;AI.getYScales=AI.rr;$.pp.area=mI;$.pp.bar=nI;$.pp.box=oI;$.pp.column=pI;$.pp.hilo=qI;$.pp.financial=rI;$.pp.line=sI;$.pp["vertical-area"]=tI;$.pp["vertical-line"]=uI;$.G("anychart.area",mI);$.G("anychart.bar",nI);$.G("anychart.vertical",nI);$.G("anychart.box",oI);$.G("anychart.column",pI);$.G("anychart.hilo",qI);$.G("anychart.financial",rI);$.G("anychart.line",sI);$.G("anychart.verticalArea",tI);$.G("anychart.verticalLine",uI);})($)}
