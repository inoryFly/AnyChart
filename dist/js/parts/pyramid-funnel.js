if(!_.pyramid_funnel){_.pyramid_funnel=1;(function($){var pR=function(a,b,c){$.ew.call(this,null,[],[],b,c);this.wa=a},rR=function(a,b,c){$.ew.call(this,null,[],[],b,c);this.wa=a;this.F=!qR(this.wa);this.o=this.wa.O("connectorStroke")},sR=function(a,b){$.Tu.call(this);$.W(this);this.ta=this.qa=this.la=this.aa=null;this.Pb=[];this.B=this.ha=null;this.Jc=1;this.nb=this.J=null;this.state=new $.uu(this);this.data(a||null,b);$.Ip(this.U,[["baseWidth",16,1],["neckHeight",16,1],["neckWidth",16,1],["pointsPadding",16,1],["reversed",16,1],["overlapMode",4096,
1],["connectorLength",4100,9],["connectorStroke",16,1],["fill",528,1],["hoverFill",16,1],["selectFill",16,1],["stroke",528,1],["hoverStroke",16,1],["selectStroke",16,1],["hatchFill",528,1],["hoverHatchFill",0,0],["selectHatchFill",0,0]]);this.na(!1)},tR=function(a,b){var c=a.ja().I("point");if($.n(c)){var d=$.km(["fill","hoverFill","selectFill"],1)(a,b,!1,!0);c.fill(d);d=$.km(["stroke","hoverStroke","selectStroke"],2)(a,b,!1,!0);c.stroke(d)}},uR=function(a,b,c){if(a.J instanceof b)c&&a.J.W(c);else{var d=
!!a.J;$.K(a.J);a.J=new b;c&&a.J.W(c);$.U(a.J,a.K3,a);$.L(a,a.J);d&&a.D(528,1)}},vR=function(a,b){var c=a.ja().I("hatchPoint");if(c){var d=$.km(["hatchFill","hoverHatchFill","selectHatchFill"],3);c.stroke(null).fill(d(a,b,!1))}},wR=function(a,b){var c=a.wc,d=a.kb.height,e=a.se,f=a.Ld;return b>d-f||d==f?e:e+(d-f-b)/(d-f)*(c-e)},xR=function(a){a=$.S(a);return 0>=a||!(0,window.isFinite)(a)},yR=function(a){var b=a.ja(),c=b.va(),d=a.kb,e,f,h,k,l,m;e=b.I("height")/2;k=b.I("startY");l=b.I("height")+k;m=null;
if(f=a.yd)c?c==b.Rb()-1?(k+=f/2,k>l&&(k=l-a.Jc)):(k+=f/2,l-=f/2,k>l&&(k=b.I("startY")+e,l=k+a.Jc)):(l-=f/2,l<k&&(l=a.Jc));h=wR(a,k);c=a.b-h/2;e=c+h;h=wR(a,l);f=a.b-h/2;h=f+h;k+=d.top;l+=d.top;c=d.left+c;e=d.left+e;0<a.Ld&&k<a.dd&&l>a.dd&&(m=l,l=a.dd,h=wR(a,l),f=a.b-h/2,h=f+h);f=d.left+f;h=d.left+h;a.O("reversed")||(k=d.height-(k-d.top)+d.top,l=d.height-(l-d.top)+d.top,m=m?d.height-(m-d.top)+d.top:null,k=[l,l=k][0],c=[f,f=c][0],e=[h,h=e][0]);b.I("x1",c);b.I("x2",e);b.I("x3",f);b.I("x4",h);b.I("y1",
k);b.I("y2",l);b.I("y3",m)},zR=function(a,b,c,d){var e=a.labels();$.W(e);e.fontOpacity(b);e.ea();e.na(!1);if(d&&a.K)for(var f in a.K)a.K.hasOwnProperty(f)&&a.K[f].stroke($.bm(a.O("connectorStroke"),c))},Eda=function(a){var b=a.ja(),c=b.va(),d=$.Py(a.za),e=$.Py(a.Ja);b.I("point",d);b.I("hatchPoint",e);yR(a);var f=b.I("x1"),h=b.I("x2"),k=b.I("x3"),l=b.I("x4"),m=b.I("y1"),p=b.I("y2"),q=b.I("y3");d.moveTo(f,m).lineTo(h,m);q?d.lineTo(l,p).lineTo(l,q).lineTo(k,q).lineTo(k,p):d.lineTo(l,p).lineTo(k,p);d.close();
b.I("point",d);d.tag={index:c,ga:a};b=$.zu(a.state,b.va());tR(a,b);e&&(e.fd(d.N()),e.tag={index:c,ga:a},vR(a,b))},DR=function(a,b){var c=a.ja(),d=!!(b&$.lm),e=!d&&!!(b&$.N),f=c.get("label"),h=e?c.get("hoverLabel"):null,k=d?c.get("selectLabel"):null,l=c.va(),m,p=null;d?p=m=a.cc():e?p=m=a.Sb():m=a.labels();var q=a.labels().Rd(l),r=f&&$.n(f.enabled)?f.enabled:null,t=h&&$.n(h.enabled)?h.enabled:null,u=k&&$.n(k.enabled)?k.enabled:null,r=e||d?e?null===t?null===a.Sb().enabled()?null===r?a.labels().enabled():
r:a.Sb().enabled():t:null===u?null===a.cc().enabled()?null===r?a.labels().enabled():r:a.cc().enabled():u:null===r?a.labels().enabled():r,u=AR(a,null,b),v=BR(a),t=qR(a),w=!0;if(!e&&!d&&t&&"no-overlap"==a.O("overlapMode")){m=m.Si(v,u,f,l);var w=a.ja(),x=[w.I("x1"),w.I("y1"),w.I("x2"),w.I("y1"),w.I("x4"),w.I("y2"),w.I("x3"),w.I("y2")],A=!0,D,O,Q,P,ba,aa,ea,ca,ma,Qa;D=0;for(O=x.length;D<O-1;D+=2)Q=D==O-2?0:D+2,P=D==O-2?1:D+3,ba=x[D],aa=x[D+1],ea=x[Q],ca=x[P],ma=m[D],Qa=m[D+1],Q=m[Q],P=m[P],w.I("y3")&&
4==D&&(aa=$.S(w.I("y3")),ca=$.S(w.I("y3"))),ba==ea&&(ea+=.01),A=(A=A&&1==$.dn(ba,aa,ea,ca,ma,Qa))&&1==$.dn(ba,aa,ea,ca,Q,P);w=A}r&&w?(q?(q.Ng(),q.We(v),q.sc(u)):q=a.labels().add(v,u,l),$.hv(q,p),q.rc(f,e?h:k),c.I("labelWidthForced")&&(q.width($.S(c.I("labelWidthForced"))),c=h&&h.anchor?h.anchor:null,k=k&&k.anchor?k.anchor:null,f&&f.anchor&&f.anchor||c||k||(u=AR(a,q,b),q.sc(u))),q.ea(),(e||d)&&!q.Y()&&a.labels().df()&&(q.Y(a.labels().df()),q.Y().parent()||q.Y().parent(a.labels().Y()),q.ea())):q&&q.clear();
r&&!t&&CR(a,q,b)},AR=function(a,b,c){var d=ER(a),e=a.ja(),f=a.kb,h=$.n(c)?!!(c&$.lm):null,k=$.n(c)?!h&&!!(c&$.N):null,l=e.get("label"),k=k?e.get("hoverLabel"):null,h=(h?e.get("hoverLabel"):null)||k||l||{},k=$.S(e.I("x1")),m=$.S(e.I("x2")),p=$.S(e.I("y1")),l=$.S(e.I("y2")),q=$.S(e.I("y3")),e=m-k,l=q?q-p:l-p,p=p+l/2,m=$.S(h.offsetY)||0;b?c=FR(a,b,c):(c=a.ta.Si(BR(a),null,h),c=$.gn(c));h=b&&b.O("anchor")||a.labels().O("anchor");b&&(p=b.sc().value.y);b=p+m;c.height>l&&("left-center"==h||"center"==h||
"right-center"==h)&&(p+c.height/2>f.top+f.height&&(p=f.top+f.height-c.height/2),p-c.height/2<f.top&&(p=f.top+c.height/2));b=GR(a,b);switch(d){case "inside":k+=e/2;break;case "outside-left":k=a.b-b/2;k=f.left+k-a.Ma-c.width/2;break;case "outside-left-in-column":k=f.left+c.width/2;break;case "outside-right":k=a.b+b/2;k=f.left+k+a.Ma+c.width/2;break;case "outside-right-in-column":k=f.left+f.width-c.width/2}if("left-top"==h||"center-top"==h||"right-top"==h)p-=.5;else if("left-bottom"==h||"center-bottom"==
h||"right-bottom"==h)p+=.5;return{value:{x:k,y:p}}},FR=function(a,b,c){var d=!!(c&$.lm),e=!d&&!!(c&$.N);c=a.data().get(b.va(),"label");e=e?a.data().get(b.va(),"hoverLabel"):null;d=(d?a.data().get(b.va(),"selectLabel"):null)||e||c||{};a.data().I(b.va(),"labelWidthForced")&&(d=$.Oc(d),d.width=b.width());a.ja().select(b.va());b.We(BR(a));a=a.ta.Si(b.We(),b.sc(),d);return $.gn(a)},JR=function(a,b){if("no-overlap"==a.O("overlapMode")&&!qR(a)&&a.labels().enabled()){HR(a);a.Qd=0;var c=a.state.Ig()|(b?$.zu(a.state,
b.va()):0);IR(a,c,b)}},IR=function(a,b,c){if(10!=a.Qd){for(var d=a.ja().Rb(),e=!1,f,h,k,l,m=a.O("reversed"),p=0;p<d-1;p++)if(f=m?p:d-1-p,(f=a.labels().Rd(f))&&0!=f.enabled()&&(h=FR(a,f,b),k=m?Fda(a,f):Gda(a,f))){l=FR(a,k,b);var q=KR(a,f),r=KR(a,k);q&&r&&q==r||!(l.top<=h.top+h.height)||(e=!0,q&&r?Hda(a,q,r):!q&&r?LR(a,k,f):LR(a,f,k))}e&&((0,$.Je)(a.Pb,function(a){if(2>a.labels.length){var b=a.wa;b.Pb.length&&(a.clear(),$.hb(b.Pb,a))}else{for(var d,e,f=0,h=0,k=b=0,l=a.labels.length;k<l;k++)d=a.labels[k],
e=a.wa.state.Ig()|$.zu(a.wa.state,d.va()),e=MR(a,d,e),d=a.wa.data().I(d.va(),"point"),d=d.yb(),k||(f=d.top),b+=e.height,h+=d.height;h+=a.wa.yd*(l-1);f=f+h/2-b/2;h=a.wa.kb;f+b>h.top+h.height&&(f=h.top+h.height-b);f<h.top&&(f=h.top);a.y=f;Ida(a,c)}}),a.Qd++,IR(a,b,c))}},Fda=function(a,b){if(!b)return null;var c=a.ja().Rb();if(b.va()==c-1)return null;for(var d,e=b.va()+1;e<=c-1;e++)if((d=a.labels().Rd(e))&&!1!==d.enabled())return d;return null},Gda=function(a,b){if(!b||!b.va())return null;for(var c,
d=b.va()-1;0<=d;d--)if((c=a.labels().Rd(d))&&!1!==c.enabled())return c;return null},LR=function(a,b,c){var d=KR(a,b);d?NR(d,c):(d=new OR(a),NR(d,b),NR(d,c),a.Pb.push(d))},KR=function(a,b){return a.Pb.length?$.$a(a.Pb,function(a){return-1!==(0,$.bb)(a.labels,b)}):null},Hda=function(a,b,c){var d=b.labels[0].va(),e=c.labels[0].va();b.labels=a.O("reversed")==d<e?$.jb(b.labels,c.labels):$.jb(c.labels,b.labels);$.hb(a.Pb,c)},HR=function(a){a.Pb.length&&((0,$.Je)(a.Pb,function(a){a.clear()}),a.Pb.length=
0)},qR=function(a){return"inside"==ER(a)},PR=function(a){a=ER(a);return"outside-right-in-column"==a||"outside-left-in-column"==a},QR=function(a){a=ER(a);return"outside-left"==a||"outside-left-in-column"==a},RR=function(a){a=ER(a);return"outside-right"==a||"outside-right-in-column"==a},Jda=function(a){if(a.labels().enabled()&&!qR(a)){yR(a);var b=a.ja();b.I("labelWidthForced",void 0);var c=a.kb,d,e=b.get("label"),f=AR(a),h=BR(a),h=a.labels().Si(h,f,e),h=$.gn(h),e=h.left,f=h.left+h.width,k,h=a.O("reversed")?
wR(a,h.top-c.top):wR(a,c.height-(h.top+h.height)+c.top);if(QR(a))d=a.b-h/2,d=c.left+d,k=a.wc/2,k=c.width-a.b-k,PR(a)?f+5>d&&(d=f+5-d,d>k?(a.b+=k,d=a.b-h/2,d=c.left+d,b.I("labelWidthForced",d-5-e)):a.b+=d):e<c.left&&(d=Math.abs(c.left-e),d>k?(a.b+=k,d=a.b-h/2,a=d-a.Ma,10>a&&(a=10),b.I("labelWidthForced",a)):a.b+=d);else if(RR(a))if(d=a.b+h/2,d+=c.left,k=a.wc/2,k=c.width-(c.width-a.b)-k,PR(a)){if(0>e||e-5<d)d=Math.abs(d-e+5),0>e||d>k?(a.b=a.b-k,d=a.b+h/2,d+=c.left,b.I("labelWidthForced",f-5-d)):a.b=
a.b-d}else f>c.left+c.width&&(d=f-(c.left+c.width),d>k?(a.b=a.b-k,a=c.left+c.width-e+k,10>a&&(a=10),b.I("labelWidthForced",a)):a.b=a.b-d)}},ER=function(a){a=a.labels().O("position");return $.xk(Kda,"outside"==a?"outside-left":a,"outside-left-in-column")},SR=function(a,b,c,d){var e=a.kb,f=b.va(),f=a.data().I(f,"point").yb();b=FR(a,b,d);d=b.left;var h=b.top+b.height/2,k,f=f.top+f.height/2,l=GR(a,f);QR(a)?(d+=b.width,k=a.b-l/2,k+=e.left,d>k&&5>Math.abs(f-h)&&(d=k-5)):RR(a)&&(k=a.b+l/2,k+=e.left,d<k&&
5>Math.abs(f-h)&&(d=k+5));c.clear().moveTo(d,h).lineTo(k,f+.001)},CR=function(a,b,c){var d=b.va();if(a.K[d])SR(a,b,a.K[d],c);else{var e=$.Py(a.Xa);a.K[d]=e;e.stroke(a.O("connectorStroke"));SR(a,b,e,c)}},TR=function(a){a=$.km(["fill"],1)(a,$.mm,!0,!0);return $.bm(a,1,!0)},Lda=function(a,b){b=$.Dk(b);var c=a.kb,d=a.ja(),e=d.I("point").yb(),f=d.I("x1"),h=d.I("y1");switch(b){case "left-top":h=d.I("y1");f=d.I("x1");break;case "left-center":h+=e.height/2;d=GR(a,h);f=a.b-d/2;f+=c.left;break;case "left-bottom":h+=
e.height;f=d.I("x3");break;case "center-top":f=a.b;f+=c.left;break;case "center":h+=e.height/2;GR(a,h);f=a.b;f+=c.left;break;case "center-bottom":h+=e.height;GR(a,h);f=a.b;f+=c.left;break;case "right-top":d=GR(a,h);f+=d;break;case "right-center":h+=e.height/2;d=GR(a,h);f=a.b+d/2;f+=c.left;break;case "right-bottom":f=d.I("x4"),h+=e.height}return{value:{x:f,y:h}}},GR=function(a,b){var c=a.kb;return a.O("reversed")?wR(a,b-c.top):wR(a,c.height-b+c.top)},UR=function(a){var b=a.Cb();a.lc("mousemove",a.DC);
b.bd()},BR=function(a){var b=a.ja();a.ma||(a.ma=new $.Nt);a.ma.Bh(b).th([a.Td(b.va()),a]);b={x:{value:b.get("x"),type:"string"},value:{value:b.get("value"),type:"number"},name:{value:b.get("name"),type:"string"},index:{value:b.va(),type:"number"},chart:{value:a,type:""}};$.Ct(a.ma,b);return a.ma},OR=function(a){this.wa=a;this.labels=[]},NR=function(a,b){a.labels.push(b);a.wa.O("reversed")?$.vb(a.labels,function(a,b){return a.va()-b.va()}):$.vb(a.labels,function(a,b){return b.va()-a.va()})},Ida=function(a,
b){var c=0,d=0,e=null,f=null,h=null,k=a.wa.state.Ig()|(b?$.zu(a.wa.state,b.va()):0);(0,$.Je)(a.labels,function(b){var l=b.sc().value,p=MR(a,b,k),q=a.y+c+d+p.height/2;if(e&&f&&h){var r=h.y+f.height/2+(e.O("offsetY")||0),t=q-p.height/2+(b.O("offsetY")||0);t<r&&(q+=r-t)}b.sc({value:{x:l.x,y:q}});b.ea();CR(a.wa,b,k);c+=p.height;d+=b.O("offsetY")||0;e=b;f=p;h={x:l.x,y:q}})},MR=function(a,b,c){var d=!!(c&$.lm),e=!d&&!!(c&$.N);c=a.wa.data().get(b.va(),"label");e=e?a.wa.data().get(b.va(),"hoverLabel"):null;
d=(d?a.wa.data().get(b.va(),"selectLabel"):null)||e||c||{};a.wa.data().I(b.va(),"labelWidthForced")&&(d=$.Oc(d),d.width=b.width());a.wa.ja().select(b.va());b.We(BR(a.wa));a=a.wa.ta.Si(b.We(),b.sc(),d);return $.gn(a)},VR=function(a,b){var c=new sR(a,b);c.P="funnel";c.Da(!0,$.sm("funnel"));return c},WR=function(a,b){var c=new sR(a,b);c.P="pyramid";c.Da(!0,$.sm("pyramid"));return c},Kda={TG:"inside",Kga:"outside-left",Lga:"outside-left-in-column",Mga:"outside-right",Nga:"outside-right-in-column"};
$.H(pR,$.ew);$.g=pR.prototype;$.g.update=function(){this.g.length=this.j.length=0;for(var a=this.wa.gg();a.advance();)if(!a.I("missing")){var b=a.I("x1"),c=a.I("x2"),d=a.I("x3"),e=a.I("x4"),f=a.I("y1"),h=a.I("y2"),k=a.I("y3");a.I("neck",!!k);this.g.push(b,c,d,e,0,0,0);this.j.push(b,c,d,e,f,h,k?k:0)}};$.g.kl=function(){zR(this.wa,1E-5,1E-5,!qR(this.wa))};
$.g.ti=function(){for(var a=this.wa.gg(),b=0;a.advance();)if(!a.I("missing")){a.I("x1",this.b[b++]);a.I("x2",this.b[b++]);a.I("x3",this.b[b++]);a.I("x4",this.b[b++]);a.I("y1",this.b[b++]);a.I("y2",this.b[b++]);a.I("y3",this.b[b++]);var c=this.wa,d=a,e=d.I("point");e.clear();var f=d.I("x1"),h=d.I("x2"),k=d.I("x3"),l=d.I("x4"),m=d.I("y1"),p=d.I("y2"),q=d.I("y3");e.moveTo(f,m).lineTo(h,m);d.I("neck")?e.lineTo(l,p).lineTo(l,q).lineTo(k,q).lineTo(k,p):e.lineTo(l,p).lineTo(k,p);e.close();if(f=d.I("hatchPoint"))c.ja().select(d.va()),
f.clear(),f.fd(e.N()),d=$.zu(c.state,d.va()),e=$.km(["hatchFill","hoverHatchFill","selectHatchFill"],3),f.stroke(null).fill(e(c,d,!1))}};$.g.Lg=function(){this.ti()};$.g.ba=function(){pR.G.ba.call(this);this.wa=null};$.H(rR,$.ew);rR.prototype.update=function(){this.g.length=this.j.length=0;this.g.push(1E-5,1E-5);this.j.push(1,this.o.opacity||1)};rR.prototype.ti=function(){zR(this.wa,this.b[0],this.b[1],this.F)};rR.prototype.Lg=function(){this.ti()};rR.prototype.ba=function(){rR.G.ba.call(this);this.o=this.wa=null;delete this.F};$.H(sR,$.Tu);$.g=sR.prototype;$.g.Aa=$.Tu.prototype.Aa|16;$.g.ya=$.Tu.prototype.ya|28688;$.g.Nd=function(){return[this]};$.g.Uf=function(){return!0};$.g.Vg=function(){return!1};$.g.Ug=function(){return!0};
$.g.data=function(a,b){if($.n(a)){if(a){var c=a.title||a.caption;c&&this.title(c);a.rows&&(a=a.rows)}if(this.Ua!==a){this.Ua=a;if(this.nb!=a||null===a)$.K(this.da),delete this.Pa,a instanceof $.Dq?(c=a,this.da=null):(c=a instanceof $.Nq?(this.da=a).Ue():$.z(a)||$.C(a)?(this.da=new $.Nq(a,b)).Ue():(this.da=new $.Nq(null)).Ue(),$.L(this,this.da)),this.nb=c.pk();$.K(this.Hb);this.Hb=this.nb;$.U(this.Hb,this.D3,this);$.L(this,this.Hb);this.D(29200,17)}return this}return this.Hb};
$.g.D3=function(a){$.X(a,16)&&this.D(29200,17)};$.g.ja=function(){return this.Pa||(this.Pa=this.Hb.ja())};$.g.hc=function(){return this.Pa=this.Hb.ja()};$.g.gg=function(){return this.Hb.ja()};$.g.Mc=function(a){if(a instanceof $.Fr)return uR(this,$.Fr,a),this;if(a instanceof $.Br)return uR(this,$.Br,a),this;$.B(a)&&"range"==a.type?uR(this,$.Fr):!$.B(a)&&this.J||uR(this,$.Br);return $.n(a)?(this.J.W(a),this):this.J};
$.g.CC=function(a){this.ha||(this.ha=new $.Dr,$.U(this.ha,this.H3,this),$.L(this,this.ha));return $.n(a)?(this.ha.W(a),this):this.ha};$.g.BC=function(a){this.aa||(this.aa=new $.Cr,$.U(this.aa,this.E3,this),$.L(this,this.aa));return $.n(a)?(this.aa.W(a),this):this.aa};$.g.K3=function(a){$.X(a,2)&&this.D(528,1)};$.g.H3=function(a){$.X(a,2)&&this.D(528,1)};$.g.E3=function(a){$.X(a,2)&&this.D(528,1)};
$.g.fill=function(a,b,c,d,e,f,h){if($.n(a)){var k=$.F(a)?a:$.tc.apply(null,arguments);k!=this.F&&(this.F=k,this.D(528,1));return this}return this.F};$.g.remove=function(){this.Gb().Y(null);this.labels().Y(null);HR(this);this.za&&this.za.parent(null);sR.G.remove.call(this)};
$.g.ci=function(a){if(!$.wq(this)){this.xc();var b=this.ja();$.V(this,4)&&this.D(4112);if($.V(this,16)){this.za?this.za.clear():(this.za=new $.Oy(function(){return $.lk()},function(a){a.clear()}),$.L(this,this.za),this.za.zIndex(30),this.za.parent(this.Qa));this.Ja?this.Ja.clear():(this.Ja=new $.Oy(function(){return $.lk()},function(a){a.clear()}),$.L(this,this.Ja),this.Ja.parent(this.Qa),this.Ja.zIndex(31).Fc(!0));this.J&&this.J instanceof $.Fr&&this.J.count(b.Rb());this.yd=Math.abs($.Vm($.R(this.O("pointsPadding"),
a.height),2));this.wc=Math.abs($.Vm($.R(this.O("baseWidth"),a.width),2));this.se=Math.abs($.Vm($.R(this.O("neckWidth"),a.width),2));this.Ld=Math.abs($.Vm($.R(this.O("neckHeight"),a.height),2));this.dd=a.top+a.height-this.Ld;this.b=a.width/2;this.Ma=$.R(this.O("connectorLength"),(a.width-this.wc)/2);0>this.Ma&&(this.Ma=5);this.kb=a;var c=0,d,e,f=b.Rb()-$.S(this.Ca("count")),h=$.Vm(this.yd/a.height*100,2);for(b.reset();b.advance();){d=b.get("value");e=xR(d);d=xR(d)?0:$.S(d);var k=$.Vm(d/$.S(this.Ca("sum"))*
100,2);e&&(k=h);k=$.Vm(a.height/(100+f*h)*k,2);k||(k=this.Jc);b.I("value",d);b.I("height",k);b.I("startY",c);b.I("missing",e);c+=k;Jda(this)}for(b.reset();b.advance();)c=b.va(),b.get("selected")&&this.state.U($.lm,c),Eda(this);if(this.K)for(var l in this.K)this.K.hasOwnProperty(l)&&this.K[l].stroke(this.O("connectorStroke"));this.D(4096);this.D(8192);this.R(16)}if($.V(this,8192)){this.Gb().Y()||this.B.Y(this.Qa);this.Gb().clear();for(b.reset();b.advance();)this.To(this.state.j|$.zu(this.state,b.va()));
this.Gb().ea();this.R(8192)}if($.V(this,4096)){this.labels().Y()||this.ta.Y(this.Qa);this.labels().clear();this.Xa&&this.Xa.clear();l=qR(this)?$.sm("pie.insideLabels"):$.sm("pie.outsideLabels");this.labels().ql(l.autoColor);this.labels().disablePointerEvents(l.disablePointerEvents);qR(this)||(this.Ma=$.R(this.O("connectorLength"),(a.width-this.wc)/2),0>this.Ma&&(this.Ma=5),this.Xa?this.Xa.clear():(this.Xa=new $.Oy(function(){return $.lk()},function(a){a.clear()}),$.L(this,this.Xa),this.Xa.parent(this.Qa),
this.Xa.zIndex(32)),this.Xa.clip(a),this.K=[]);for(b.reset();b.advance();)qR(this)&&b.I("labelWidthForced",void 0),DR(this,this.state.j|$.zu(this.state,b.va()));JR(this);this.labels().ea();this.labels().df().clip(a);this.R(4096)}}};
$.g.TD=function(){if(this.zl().enabled()&&0<this.zl().duration())if(this.g&&1==this.g.Od)this.g.update();else if($.V(this,2048)){$.K(this.g);this.g=new $.Jy;var a=this.zl().duration(),b=a*(1-.85),a=new pR(this,.85*a),b=new rR(this,b);this.g.add(a);this.g.add(b);this.g.pa("begin",function(){$.Ju(this,!0);$.xq(this,{type:"animationstart",chart:this})},!1,this);this.g.pa("end",function(){$.Ju(this,!1);$.xq(this,{type:"animationend",chart:this})},!1,this);this.g.Hh(!1)}};
$.g.Jf=function(a){a={type:a.type,target:this,relatedTarget:$.is(a.relatedTarget)||a.relatedTarget,domTarget:a.target,relatedDomTarget:a.relatedTarget,offsetX:a.offsetX,offsetY:a.offsetY,clientX:a.clientX,clientY:a.clientY,screenX:a.screenX,screenY:a.screenY,button:a.button,keyCode:a.keyCode,charCode:a.charCode,ctrlKey:a.ctrlKey,altKey:a.altKey,shiftKey:a.shiftKey,metaKey:a.metaKey,platformModifierKey:a.platformModifierKey,state:a.state};var b=$.io(a.domTarget);a.pointIndex=$.S(b.index);return a};
$.g.jg=function(a){(a=this.qf(a))&&this.dispatchEvent(a)};
$.g.qf=function(a){var b;"pointIndex"in a?b=a.pointIndex:"labelIndex"in a?b=a.labelIndex:"markerIndex"in a&&(b=a.markerIndex);b=$.S(b);a.pointIndex=b;var c=a.type;switch(c){case "mouseout":c="pointmouseout";break;case "mouseover":c="pointmouseover";break;case "mousemove":c="pointmousemove";break;case "mousedown":c="pointmousedown";break;case "mouseup":c="pointmouseup";break;case "click":c="pointclick";break;case "dblclick":c="pointdblclick";break;default:return null}var d=this.data().ja();d.select(b)||
d.reset();return{type:c,actualTarget:a.target,iterator:d,sliceIndex:b,pointIndex:b,target:this,originalEvent:a,point:this.Td(b)}};$.g.Td=function(a){var b=new $.ux(this,a),c;this.ja().select(a)&&b.nt()&&!xR(c=b.get("value"))&&(a=c/this.Xe("sum")*100,b.Ca("percentValue",a),b.Ca("yPercentOfTotal",a));return b};$.g.Yn=function(){return[]};$.g.Tg=function(a){$.n(a)?this.lg(a):this.mi();return this};
$.g.Oc=function(a){if(($.yu(this.state,$.N)||$.Fu(this.state.Ig(),$.N))&&this.enabled()){var b;$.n(a)?b=a:b=this.state.j==$.mm?window.NaN:void 0;this.state.g($.N,b);a=this.ja();for(a.reset();a.advance();)DR(this,$.zu(this.state,a.va()));JR(this);UR(this)}};
$.g.lg=function(a,b){if(!this.enabled())return this;var c;if($.z(a)){c=$.Du(this.state,$.N);for(var d=0;d<c.length;d++)$.cb(a,c[d])||this.state.g($.N,c[d]);$.Bu(this.state,$.N,a);$.n(b)&&this.DC(b);for(c=this.hc();c.advance();)DR(this,$.zu(this.state,c.va()));JR(this)}else if($.E(a)&&(this.Oc(),$.Bu(this.state,$.N,a),$.n(b)&&this.DC(b),this.kb)){for(c=this.hc();c.advance();)DR(this,$.zu(this.state,c.va()));JR(this,this.labels().Rd(a))}this.ja().select(a[0]||a);return this};
$.g.mi=function(){if(!this.enabled())return this;this.state.U($.N);JR(this,null);return this};$.g.select=function(a){if(!this.enabled())return this;$.n(a)?this.og(a):this.enabled()&&(UR(this),this.state.U($.lm),JR(this,null));return this};
$.g.og=function(a,b){if(!this.enabled())return this;var c=!(b&&b.shiftKey);$.z(a)?(b||this.rd(),this.state.U($.lm,a,c?$.N:void 0)):$.E(a)&&this.state.U($.lm,a,c?$.N:void 0);if(this.kb){for(c=this.hc();c.advance();)DR(this,$.zu(this.state,c.va()));var d;$.E(a)&&(d=this.labels().Rd(a));JR(this,d)}this.ja().select(a[0]||a);return this};
$.g.rd=function(a){if(this.enabled()){var b;$.n(a)?b=a:b=this.state.j==$.mm?window.NaN:void 0;this.state.g($.lm,b);a=this.ja();for(a.reset();a.advance();)DR(this,$.zu(this.state,a.va()));JR(this)}};$.g.hh=function(a){tR(this,a);vR(this,a);this.To(a)};$.g.Li=$.ia;$.g.ih=function(a){DR(this,a);tR(this,a);vR(this,a);this.To(a)};var XR={};$.T(XR,0,"baseWidth",$.Np);$.T(XR,0,"neckHeight",$.Np);$.T(XR,0,"neckWidth",$.Np);$.T(XR,0,"pointsPadding",$.Np);$.T(XR,0,"reversed",$.Np);$.T(XR,0,"overlapMode",$.Tk);
$.T(XR,0,"connectorLength",$.Np);$.T(XR,1,"connectorStroke",$.aq);var YR={};$.T(YR,1,"fill",$.Zp);$.T(YR,1,"hoverFill",$.Zp);$.T(YR,1,"selectFill",$.Zp);$.T(YR,1,"stroke",$.Yp);$.T(YR,1,"hoverStroke",$.Yp);$.T(YR,1,"selectStroke",$.Yp);$.T(YR,1,"hatchFill",$.$p);$.T(YR,1,"hoverHatchFill",$.$p);$.T(YR,1,"selectHatchFill",$.$p);$.Sp(sR,XR);$.Sp(sR,YR);$.g=sR.prototype;$.g.vo=function(a,b,c){a=b.get(a)||this.O(a);$.n(a)&&(a=c(a));return a};
$.g.tn=function(){return $.yc(this.BC().hd(this.ja().va())||"diagonal-brick")};$.g.Kq=function(){var a=this.ja();return{index:a.va(),sourceHatchFill:this.tn(),iterator:a}};$.g.Dl=function(a){var b=this.ja();return{index:b.va(),sourceColor:a||this.Mc().hd(b.va())||"blue",iterator:b}};$.g.labels=function(a){this.ta||(this.ta=new $.Xu,$.U(this.ta,this.G3,this),this.ta.Za(this),$.L(this,this.ta),this.D(4096,1));return $.n(a)?(!$.B(a)||"enabled"in a||(a.enabled=!0),this.ta.W(a),this):this.ta};
$.g.Sb=function(a){this.$||(this.$=new $.Xu,$.L(this,this.$));return $.n(a)?(!$.B(a)||"enabled"in a||(a.enabled=!0),this.$.W(a),this):this.$};$.g.cc=function(a){this.ca||(this.ca=new $.Xu,$.L(this,this.ca));return $.n(a)?(!$.B(a)||"enabled"in a||(a.enabled=!0),this.ca.W(a),this):this.ca};$.g.G3=function(a){var b=0,c=0;$.X(a,1)&&(b|=4096,c|=1);$.X(a,8)&&(b|=4100,c|=9);this.D(b,c)};
$.g.Gb=function(a){this.B||(this.B=new $.uv,$.U(this.B,this.I3,this),this.B.Za(this),$.L(this,this.B));return $.n(a)?(!$.B(a)||"enabled"in a||(a.enabled=!0),this.B.W(a),this):this.B};$.g.Dn=function(a){this.la||(this.la=new $.uv,$.L(this,this.la));return $.n(a)?(!$.B(a)||"enabled"in a||(a.enabled=!0),this.la.W(a),this):this.la};$.g.En=function(a){this.qa||(this.qa=new $.uv,$.L(this,this.qa));return $.n(a)?(!$.B(a)||"enabled"in a||(a.enabled=!0),this.qa.W(a),this):this.qa};
$.g.I3=function(a){$.X(a,1)&&this.D(8192,1)};
$.g.To=function(a){var b=this.ja(),c=!!(a&$.lm);a=!c&&!!(a&$.N);var d=b.get("marker"),e=b.get("hoverMarker"),b=b.get("selectMarker"),f=this.ja().va(),h;h=c?this.En():a?this.Dn():this.Gb();var k=$.vv(this.Gb(),f),l=d&&$.n(d.enabled)?d.enabled:null,m=e&&$.n(e.enabled)?e.enabled:null,p=b&&$.n(b.enabled)?b.enabled:null;if(a||c?a?null===m?null===this.Dn().enabled()?null===l?this.Gb().enabled():l:this.Dn().enabled():m:null===p?null===this.En().enabled()?null===l?this.Gb().enabled():l:this.En().enabled():
p:null===l?this.Gb().enabled():l){l=d&&d.position?d.position:null;m=e&&e.position?e.position:null;p=b&&b.position?b.position:null;l=a&&(m||this.Dn().position())||c&&(p||this.En().position())||l||this.Gb().position();l=Lda(this,l);k?k.sc(l):k=this.Gb().add(l,f);var q={},l="position anchor offsetX offsetY type size fill stroke enabled".split(" ");d&&(0,$.Je)(l,function(a){a in d&&(q[a]=d[a])});l=d&&d.type;f=$.n(l)?l:this.Gb().Ta()||this.CC().hd(f);l=e&&e.type;l=$.n(l)?l:this.Dn().Ta();m=b&&b.type;m=
$.n(m)?m:this.En().Ta();q.type=c&&$.n(m)?m:a&&$.n(l)?l:f;f=d&&d.fill;f=$.n(f)?f:this.Gb().F||TR(this);l=e&&e.fill;l=$.n(l)?l:this.Dn().F;m=b&&b.fill;m=$.n(m)?m:this.En().F;q.fill=c&&$.n(m)?m:a&&$.n(l)?l:f;f=d&&d.stroke;f=$.n(f)?f:this.Gb().j||$.Yl(TR(this));l=e&&e.stroke;l=$.n(l)?l:this.Dn().j||$.Yl(TR(this));m=b&&b.stroke;m=$.n(m)?m:this.En().j||$.Yl(TR(this));q.stroke=c&&$.n(m)?m:a&&$.n(l)?l:f;k.Ng();$.yv(k,h);k.rc(q,a?e:b);k.ea()}else k&&k.clear()};
$.g.CD=function(){var a=new $.Ht(0);$.L(this,a);a.wa(this);$.U(a,this.J3,this);return a};$.g.J3=function(){this.Cb().ea()};$.g.DC=function(a){if(!a||a.target!=this.Vd()){var b=this.Cb(),c=BR(this);a&&($.Wt(b,a.clientX,a.clientY,c),this.pa("mousemove",this.DC))}};
$.g.xc=function(){if($.V(this,16384)){this.Yi={};for(var a=this.data().ja(),b,c=0,d=Number.MAX_VALUE,e=-Number.MAX_VALUE,f=0;a.advance();)b=a.get("value"),xR(b)?c++:(b=xR(b)?0:$.S(b),d=Math.min(b,d),e=Math.max(b,e),f+=b);var a=a.Rb()-c,h;a?h=f/a:d=e=f=h=void 0;this.Ca("count",a);this.Ca("min",d);this.Ca("max",e);this.Ca("sum",f);this.Ca("average",h);this.R(16384)}};$.g.Ah=function(){return BR(this)};
$.g.dj=function(a,b){for(var c=[],d=this.ja().reset(),e;d.advance();){e=d.va();var f=d.get("legendItem")||{},h=null;$.F(b)&&(h=BR(this),h.hW=this.Td(e),h=b.call(h,h));$.C(h)||(h=String($.n(d.get("name"))?d.get("name"):d.get("x")));var k=$.km(["fill"],1),l=$.km(["stroke"],2),m=$.km(["hatchFill"],3),h={enabled:!0,meta:{pointIndex:e,pointValue:d.get("value"),ga:this},iconType:"square",text:h,iconStroke:l(this,$.mm,!1),iconFill:k(this,$.mm,!1),iconHatchFill:m(this,$.mm,!1)};$.Qc(h,f);h.sourceUid=$.sa(this);
h.sourceKey=e;c.push(h)}return c};$.g.Um=function(){return!0};$.g.Wl=function(a,b){var c=a.Kf();if(!a||null!=c||(0,window.isNaN)(c))if(c=$.io(b.domTarget))c.ga=this};$.g.$k=function(a,b){var c=a.Kf();if(!a||null!=c||(0,window.isNaN)(c))if(c=$.io(b.domTarget))c.ga=this};$.g.Zk=function(a,b){var c=a.Kf();if(!a||null!=c||(0,window.isNaN)(c))if(c=$.io(b.domTarget))c.ga=this};$.g.Ce=function(){return null};$.g.Hc=function(a){return $.n(a)?(a=$.zk(a),a!=this.Fa&&(this.Fa=a),this):this.Fa};
$.g.N=function(){var a=sR.G.N.call(this);a.type=this.Ta();a.data=this.data().N();a.labels=this.labels().N();a.hoverLabels=$.av(this.Sb());a.selectLabels=$.av(this.cc());null===a.hoverLabels.enabled&&delete a.hoverLabels.enabled;null===a.selectLabels.enabled&&delete a.selectLabels.enabled;a.palette=this.Mc().N();a.hatchFillPalette=this.BC().N();a.markerPalette=this.CC().N();a.tooltip=this.Cb().N();a.markers=this.Gb().N();a.hoverMarkers=this.Dn().N();a.selectMarkers=this.En().N();$.eq(this,XR,a);$.eq(this,
YR,a);return{chart:a}};$.g.fa=function(a,b){sR.G.fa.call(this,a,b);$.Tp(this,XR,a);$.Tp(this,YR,a);this.data(a.data);this.BC(a.hatchFillPalette);this.CC(a.markerPalette);this.labels().Da(!!b,a.labels);this.Sb().Da(!!b,a.hoverLabels);this.cc().Da(!!b,a.selectLabels);this.Gb().W(a.markers);this.Dn().W(a.hoverMarkers);this.En().W(a.selectMarkers);this.Mc(a.palette);"tooltip"in a&&this.Cb().Da(!!b,a.tooltip)};$.g.ba=function(){$.K(this.g);sR.G.ba.call(this)};
OR.prototype.clear=function(){this.labels.length=0};var ZR=sR.prototype;ZR.data=ZR.data;ZR.getType=ZR.Ta;ZR.palette=ZR.Mc;ZR.tooltip=ZR.Cb;ZR.hatchFillPalette=ZR.BC;ZR.markerPalette=ZR.CC;ZR.labels=ZR.labels;ZR.hoverLabels=ZR.Sb;ZR.selectLabels=ZR.cc;ZR.markers=ZR.Gb;ZR.hoverMarkers=ZR.Dn;ZR.selectMarkers=ZR.En;ZR.hover=ZR.Tg;ZR.unhover=ZR.Oc;ZR.select=ZR.select;ZR.unselect=ZR.rd;ZR.getPoint=ZR.Td;$.pp.funnel=VR;$.pp.pyramid=WR;$.G("anychart.funnel",VR);$.G("anychart.pyramid",WR);})($)}