webpackJsonp([19],{"2XC+":function(e,t,a){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var r=a("FACJ"),n={mixins:[r.a],methods:{setOption:function(){this.option={tooltip:{trigger:"item",formatter:"{b}：{c}件"},xAxis:{type:"category",data:this.genDays(15),axisLabel:{rotate:30}},yAxis:{type:"value"},series:[{color:"#3aa1ff",data:[24,115,155,198,178,58,31,188,161,68,34,75,58,51,137],type:"bar"}]}},refresh:function(){var e=this.option;this.render(e)}}},i={render:function(){var e=this.$createElement;return(this._self._c||e)("div",{ref:"chart",staticClass:"chart"})},staticRenderFns:[]},s=a("VU/8")(n,i,!1,null,null,null).exports,o={mixins:[r.a],methods:{setOption:function(){this.option={tooltip:{trigger:"axis",axisPointer:{type:"shadow"}},legend:{data:["包租费","装修费","保洁费","物业费"],align:"right",top:10,right:20},xAxis:[{type:"category",data:["新虹桥","中山公园","虹桥","镇宁路","天山古北"]}],yAxis:[{type:"value",name:"总价(万元)",axisLabel:{formatter:"{value}"}}],series:[{name:"包租费",type:"bar",color:"#67e0e3",data:[20,12,31,34,31]},{name:"装修费",type:"bar",color:"#ffdb5c",data:[10,20,5,9,3]},{name:"保洁费",type:"bar",color:"#e690d1",data:[1,1,2,3,1]},{name:"物业费",type:"bar",color:"#32c5e9",data:[.1,2,3,1,.5]}]}},refresh:function(){var e=this.option;this.render(e)}}},l={render:function(){var e=this.$createElement;return(this._self._c||e)("div",{ref:"chart",staticClass:"chart"})},staticRenderFns:[]},c=a("VU/8")(o,l,!1,null,null,null).exports,f={mixins:[r.a],methods:{setOption:function(){this.option={tooltip:{trigger:"axis",axisPointer:{type:"shadow"}},legend:{data:["直接访问","邮件营销","联盟广告","视频广告"]},xAxis:[{type:"category",data:["周一","周二","周三","周四","周五","周六","周日"]}],yAxis:[{type:"value"}],series:[{name:"直接访问",type:"bar",color:"#67e0e3",data:[320,332,301,334,390,330,320]},{name:"邮件营销",type:"bar",stack:"广告",color:"#37a2da",data:[120,132,101,134,90,230,210]},{name:"联盟广告",type:"bar",color:"#ffdb5c",stack:"广告",data:[220,182,191,234,290,330,310]},{name:"视频广告",type:"bar",color:"#e690d1",stack:"广告",data:[150,232,201,154,190,330,410]}]}},refresh:function(){var e=this.option;this.render(e)}}},u={render:function(){var e=this.$createElement;return(this._self._c||e)("div",{ref:"chart",staticClass:"chart"})},staticRenderFns:[]},d=a("VU/8")(f,u,!1,null,null,null).exports,h={mixins:[r.a],methods:{setOption:function(){this.option={backgroundColor:"#f2f2f2",textStyle:{color:"#333"},tooltip:{trigger:"axis",axisPointer:{type:"shadow",textStyle:{color:"#fff"},shadowStyle:{opacity:.1}}},legend:{data:["受理数","办结数","办理率"],top:10,textStyle:{color:"#FFFFFF"}},calculable:!0,xAxis:[{type:"category",splitLine:{show:!1},axisTick:{show:!1},splitArea:{show:!1},axisLabel:{interval:0,textStyle:{fontSize:10,color:"#ffffff"}},data:Array(12).fill("地区")}],yAxis:[{type:"value",name:"",min:0,max:2e3,position:"left",axisLine:{lineStyle:{color:"#ffffff"}},axisLabel:{formatter:"{value} "},splitLine:{show:!1}},{type:"value",name:"",position:"right",axisLine:{lineStyle:{color:"#ffffff"}},axisLabel:{formatter:"{value} %"}}],series:[{name:"受理数",type:"bar",color:"#67e0e3",barMaxWidth:15,barGap:"10%",data:[421,356,719,658,458,443,620,416,551,721,466,632]},{name:"办理率",yAxisIndex:1,symbolSize:10,symbol:"circle",type:"line",color:"#ffdb5c",data:[11,4,7,8,6,2,10,8,10,5,5,4]}]}},refresh:function(){var e=this.option;this.render(e)}}},p={render:function(){var e=this.$createElement;return(this._self._c||e)("div",{ref:"chart",staticClass:"chart"})},staticRenderFns:[]},m=a("VU/8")(h,p,!1,null,null,null).exports,y=a("dV/5"),x={name:"Colmun",components:{Column1:s,Column2:c,Column3:d,Column4:m},data:function(){return{charts:[],date:"day",activeName:"second"}},mounted:function(){window.addEventListener("resize",this.resize),y.a.$on("toggleMenu",function(){console.log("toggleMenu")})},beforeDestroy:function(){window.removeEventListener("resize",this.resize)},methods:{resize:function(){this.$refs.column1&&this.$refs.column1.resize(),this.$refs.column2&&this.$refs.column2.resize(),this.$refs.column3&&this.$refs.column3.resize(),this.$refs.column4&&this.$refs.column4.resize()}}},v={render:function(){var e=this.$createElement,t=this._self._c||e;return t("div",{staticClass:"chart-wrapper"},[t("el-row",{staticStyle:{height:"100%"}},[t("el-col",{attrs:{span:12}},[t("column1",{ref:"column1"})],1),this._v(" "),t("el-col",{attrs:{span:12}},[t("column2",{ref:"column2"})],1),this._v(" "),t("el-col",{attrs:{span:12}},[t("column3",{ref:"column3"})],1),this._v(" "),t("el-col",{attrs:{span:12}},[t("column4",{ref:"column4"})],1)],1)],1)},staticRenderFns:[]},b=a("VU/8")(x,v,!1,null,null,null).exports;a.d(t,"default",function(){return b})}});