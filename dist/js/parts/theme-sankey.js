if(!_.theme_sankey){_.theme_sankey=1;(function($){$.ra($.ea.anychart.themes.defaultTheme,{sankey:{nodePadding:8,nodeWidth:24,curveFactor:.33,tooltip:{titleFormat:"{%name}",format:"{%Value}"},node:{normal:{fill:$.JI,stroke:"none",labels:{enabled:!0,format:"{%name}",fontColor:"black",fontSize:10,disablePointerEvents:!0}},hovered:{fill:$.JI},tooltip:{titleFormat:"{%name} ({%value})",format:function(){var a=[],b=this.income,c=this.outcome,d=this.dropoff,e;if(b.length)for(a.push("Income:"),e=0;e<b.length;e++){var f=b[e];a.push("- "+f.name+": "+f.value)}if(c.length)for(a.push("Outcome:"),
e=0;e<c.length;e++)f=c[e],a.push("- "+f.name+": "+f.value);d&&a.push("Dropoff: "+d);return a.join("\n")}}},flow:{normal:{fill:"grey 0.3",stroke:"none",labels:{enabled:!1,disablePointerEvents:!0,fontColor:"#000",padding:0}},hovered:{fill:$.OI,labels:{enabled:!0}}},dropoff:{normal:{fill:{angle:-90,keys:[{color:"red",offset:0},{color:"white",offset:1}]},stroke:"none",labels:{enabled:!1,disablePointerEvents:!0,fontColor:"#000",padding:0}},hovered:{labels:{enabled:!0}}}}});}).call(this,$)}
