if(!_.theme_heatmap){_.theme_heatmap=1;(function($){$.ra($.ea.anychart.themes.defaultTheme,{heatMap:{annotations:{annotationsList:[],zIndex:2E3},isVertical:!1,scales:[{type:"ordinal"},{type:"ordinal",inverted:!0},{type:"ordinal-color"}],xScale:0,yScale:1,colorScale:2,background:{enabled:!0},xAxes:[{orientation:"top"}],yAxes:[{}],xGrids:[],yGrids:[],tooltip:{enabled:!0,title:{enabled:!0,fontSize:13,fontWeight:"normal"},contentInternal:{fontSize:11},separator:{enabled:!0},titleFormat:function(){return this.name||this.x},format:function(){if(void 0===
this.heat){var a="Value: "+this.valuePrefix+this.heat+this.valuePostfix;(0,window.isNaN)(+this.heat)||(a+="\nPercent Value: "+(100*this.heat/this.getStat("sum")).toFixed(1)+"%");return a}return"x: "+this.x+"\ny: "+this.y}},legendItem:{iconStroke:null},legend:{itemsSourceMode:"categories"},defaultXAxisSettings:{enabled:!0,orientation:"bottom",ticks:{enabled:!1},title:{text:"X-Axis",padding:5},scale:0},defaultYAxisSettings:{enabled:!0,orientation:"left",ticks:{enabled:!1},title:{text:"Y-Axis",padding:5},
scale:1},defaultSeriesSettings:{heatMap:{normal:{fill:function(){if(this.colorScale){var a=this.iterator.get("heat");a=this.colorScale.valueToColor(a)}else a=$.wk(this.sourceColor,.85,!0);return a},stroke:"1 #ffffff",labels:{disablePointerEvents:!0,enabled:!0,fontSize:11,anchor:"center",adjustFontSize:{width:!0,height:!0},minFontSize:7,maxFontSize:13,hAlign:"center",vAlign:"middle",fontWeight:"normal",fontColor:"#212121",selectable:!1,background:{enabled:!1},padding:{top:2,right:4,bottom:2,left:4},
position:"center",format:function(){return $.FI(this.heat)}},markers:{enabled:!1,disablePointerEvents:!1,position:"center",rotation:0,anchor:"center",offsetX:0,offsetY:0,size:4,positionFormatter:$.GI,fill:"#dd2c00",type:"circle",stroke:"none"},hatchFill:!1},hovered:{fill:"#757575",stroke:"2 #ffffff",labels:{fontColor:"#f5f5f5",enabled:null},markers:{enabled:null,size:6},hatchFill:null},selected:{fill:"#333 0.85",stroke:"2 #ffffff",labels:{fontColor:"#fff",enabled:null},markers:{enabled:null,size:6,
fill:"#333 0.85",stroke:"1.5 #212121"},hatchFill:null},tooltip:{enabled:!0,title:{enabled:!0,fontSize:13,fontWeight:"normal"},contentInternal:{fontSize:11},separator:{enabled:!0},titleFormat:function(){return this.name||this.x},format:function(){if(void 0===this.heat){var a="Value: "+this.valuePrefix+this.heat+this.valuePostfix;(0,window.isNaN)(+this.heat)||(a+="\nPercent Value: "+(100*this.heat/this.getStat("sum")).toFixed(1)+"%");return a}return"x: "+this.x+"\ny: "+this.y}}}},labelsDisplayMode:"drop",
clip:!0,xZoom:{continuous:!0,startRatio:0,endRatio:1},yZoom:{continuous:!0,startRatio:0,endRatio:1},yScroller:{orientation:"right",inverted:!0},a11y:{titleFormat:$.XI}}});}).call(this,$)}
