if(!_.theme_mekko){_.theme_mekko=1;(function($){$.ra($.fa.anychart.themes.defaultTheme,{mekko:{defaultSeriesType:"mekko",isVertical:!1,normal:{labels:{enabled:!0}},defaultSeriesSettings:{base:{normal:{fill:$.fM,stroke:$.kM,labels:{format:"{%Value}{decimalsCount:2}",position:"center",offsetY:0,fontColor:"#ffffff"},markers:{position:"center",anchor:"center"}},hovered:{fill:$.dM,stroke:function(){return $.Kl($.Dl(this.sourceColor),1)}},legendItem:{iconStroke:"none"},isVertical:!1,tooltip:{anchor:"left-top"}},mekko:{}},defaultXAxisSettings:{orientation:"bottom",
title:{text:"X-Axis",padding:{top:5,right:0,bottom:0,left:0}},labels:{format:"{%Value}"},scale:0},defaultYAxisSettings:{orientation:"left",title:{text:"Y-Axis",padding:{top:0,right:0,bottom:5,left:0}},labels:{format:"{%Value}%"},scale:1},xAxes:[{}],yAxes:[{}],scales:[{type:"ordinal"},{type:"linear",stackMode:"percent",stackDirection:"direct",minimumGap:0,maximumGap:0},{type:"ordinal"},{type:"ordinal"}],crosshair:{enabled:!1,displayMode:"float",xStroke:"#969EA5",yStroke:"#969EA5",zIndex:41,xLabels:[{enabled:null}],
yLabels:[{enabled:null}]},xScale:0,yScale:1,firstCategoriesScale:2,lastCategoriesScale:3,defaultAnnotationSettings:{},annotations:{annotationsList:[],zIndex:2E3},pointsPadding:0,barsPadding:0,barGroupsPadding:0},mosaic:{pointsPadding:5,defaultXAxisSettings:{stroke:0,ticks:{enabled:!1}},defaultYAxisSettings:{stroke:0,ticks:{enabled:!1},labels:{format:"{%Value}"}}},barmekko:{scales:[{type:"ordinal"},{type:"linear",stackMode:"value",softMinimum:0},{type:"ordinal"},{type:"ordinal"}],defaultSeriesSettings:{mekko:{normal:{fill:function(){var a=
1<this.chart.getSeriesCount()?this.sourceColor:this.chart.palette().itemAt(this.iterator.la());a=a?a:this.sourceColor;return $.Il(a,.85,!0)},stroke:function(){var a=1<this.chart.getSeriesCount()?this.sourceColor:this.chart.palette().itemAt(this.iterator.la());a=a?a:this.sourceColor;return $.Kl(a,1)},labels:{format:"{%Value}{decimalsCount:2}",anchor:"auto",position:"value",fontColor:"#7c868e"},markers:{position:"value",positionFormatter:$.ZL}},hovered:{fill:function(){var a=1<this.chart.getSeriesCount()?
this.sourceColor:this.chart.palette().itemAt(this.iterator.la());a=a?a:this.sourceColor;return $.Il(a,.65,!0)}}}},defaultYAxisSettings:{labels:{format:"{%Value}"}},normal:{labels:{enabled:!1}}}});}).call(this,$)}
