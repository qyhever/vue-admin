webpackJsonp([8],{JSGp:function(e,t){},"dce+":function(e,t){},h4YS:function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var i=n("//Fk"),a=n.n(i),o=n("cKc3"),c=n("mtWM"),r=n.n(c),l=["fullpage imageupload advlist anchor autolink autosave code codesample colorpicker colorpicker contextmenu directionality emoticons fullscreen hr image imagetools importcss insertdatetime link lists media nonbreaking noneditable pagebreak paste preview print save searchreplace spellchecker tabfocus table template textcolor textpattern visualblocks visualchars wordcount"],s=[" undo redo searchreplace bold italic underline strikethrough alignleft aligncenter alignright outdent indent blockquote hr bullist numlist removeformat subscript superscript code preview","formatselect fontsizeselect fontselect link charmap anchor insertdatetime imageupload table emoticons forecolor backcolor fullscreen"],u=["宋体","微软雅黑","新宋体","楷体","黑体","隶书","arial","Chinese Quote","monospace","consolas","PingFang SC","sans-serif","Helvetica"].map(function(e){return e+"="+e}).join(";");!function(){function e(e){e.addCommand("mceImageUpload",function(){new a.a(function(e){var t=document.createElement("input");t.setAttribute("type","file"),t.setAttribute("accept","image/*"),t.onchange=function(t){var n=t.target.files[0];e(n)},t.click()}).then(function(t){e.settings.imageSelectorCallback(t,function(t){console.log(t),e.insertContent('<img src="'+t+'" alt="加载失败" style="max-width: 100%;height: auto;" />')})})})}window.tinymce.util.Tools.resolve("tinymce.PluginManager").add("imageupload",function(t){!function(e){e.addButton("imageupload",{title:"上传图片",icon:"image",cmd:"mceImageUpload"}),e.addMenuItem("imageupload",{icon:"image",context:"insert",text:"上传图片",cmd:"mceImageUpload"})}(t),e(t)})}();var d=function(e){return e=(e=e.replace(/<\/?SPANYES[^>]*>/gi,"")).replace(/<\\?\?xml[^>]*>/gi,"")},m={name:"Tinymce",props:{id:{type:String,default:function(){return"vue-tinymce-"+ +new Date+(1e3*Math.random()).toFixed(0)}},value:{type:String,default:"生命在于折腾"},toolbar:{type:Array,required:!1,default:function(){return[]}},menubar:{type:String,default:"file edit insert view format table"},height:{type:Number,required:!1,default:300}},data:function(){return{hasChange:!1,hasInit:!1,tinymceId:this.id,fullscreen:!1}},watch:{value:function(e){var t=this;!this.hasChange&&this.hasInit&&this.$nextTick(function(){return t.setContent(d(e))})}},mounted:function(){this.initTinymce()},activated:function(){this.initTinymce()},deactivated:function(){this.destroyTinymce()},beforeDestroy:function(){this.destroyTinymce()},methods:{initTinymce:function(){var e=this;window.tinymce.init({language:"zh_CN",selector:"#"+this.tinymceId,height:this.height,object_resizing:!1,plugins:l,toolbar:this.toolbar.length?this.toolbar:s,menubar:this.menubar,fontsize_formats:"12px 14px 16px 18px 20px 24px 36px",fullpage_default_font_size:"16px",font_formats:u,fullpage_default_font_family:"arial, Chinese Quote",branding:!1,resize:!1,init_instance_callback:function(t){e.value&&t.setContent(d(e.value)),e.hasInit=!0,t.on("NodeChange Change KeyUp SetContent",function(){e.hasChange=!0,e.$emit("input",d(t.getContent()))})},setup:function(t){t.on("FullscreenStateChanged",function(t){e.fullscreen=t.state})},imageSelectorCallback:e.imageUploadCallback})},destroyTinymce:function(){var e=window.tinymce.get(this.tinymceId);this.fullscreen&&window.tinymce.execCommand("mceFullScreen"),e&&window.tinymce.remove()},setContent:function(e){window.tinymce.get(this.tinymceId).setContent(e||"")},getContent:function(){window.tinymce.get(this.tinymceId).getContent()},imageUploadCallback:function(e,t){var n=this;o.a.get("/upload/qiniuToken").then(function(e){var t=e.data.token;return a.a.resolve(t)}).then(function(i){var a=new FormData;a.append("token",i),a.append("file",e),r.a.post(n.QINIU_UPLOAD_URL,a).then(function(e){var i=e.data.hash,a=n.QINIU_PREFIX+i;t(a)})}).catch(function(e){console.log(e)})}}},f={render:function(){var e=this.$createElement,t=this._self._c||e;return t("div",{staticClass:"tinymce-container editor-container",class:{fullscreen:this.fullscreen}},[t("textarea",{staticClass:"tinymce-textarea",attrs:{id:this.tinymceId}})])},staticRenderFns:[]};var h={name:"Tinymce",components:{VueTinymce:n("VU/8")(m,f,!1,function(e){n("dce+")},"data-v-1fd0063e",null).exports},data:function(){return{content:"生命在于折腾"}},methods:{handleSubmit:function(){console.log(this.content)}}},p={render:function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("div",{staticClass:"content"},[n("VueTinymce",{model:{value:e.content,callback:function(t){e.content=t},expression:"content"}}),e._v(" "),n("el-row",{attrs:{type:"flex",justify:"center"}},[n("el-button",{attrs:{type:"primary"},on:{click:e.handleSubmit}},[e._v("确定")])],1)],1)},staticRenderFns:[]};var g=n("VU/8")(h,p,!1,function(e){n("JSGp")},"data-v-0ece2660",null);t.default=g.exports}});