/**
 * @license Copyright (c) 2003-2018, CKSource - Frederico Knabben. All rights reserved.
 * For licensing, see https://ckeditor.com/legal/ckeditor-oss-license
 */

CKEDITOR.editorConfig = function (config) {
	// Define changes to default configuration here. For example:
	// config.language = 'en'
	config.uiColor = '#F7F7F7'
	config.extraPlugins = 'imageupload'
	// 自带图片上传地址，后端返回参数固定 {uploaded: 1, fileName: '', url: ''}
	// config.filebrowserUploadUrl = 'http://localhost:3000/upload'
	config.hideDialogFields = 'image：info：htmlPreview'
	config.removeDialogTabs = 'image:advanced;image:Link'
	config.resize_enabled  = false
	config.image_previewText = ''
	// config.toolbar = [
	// 	{ name: 'document', items : [ 'Source','-','Save','NewPage','DocProps','Preview','Print','-','Templates' ] },
	//   { name: 'clipboard', items : [ 'Cut','Copy','Paste','PasteText','PasteFromWord','-','Undo','Redo' ] },
	//   { name: 'editing', items : [ 'Find','Replace','-','SelectAll','-','SpellChecker', 'Scayt' ] },
	//   { name: 'forms', items : [ 'Form', 'Checkbox', 'Radio', 'TextField', 'Textarea', 'Select', 'Button', 'ImageButton', 
	//       'HiddenField' ] },
	//   '/',
	//   { name: 'basicstyles', items : [ 'Bold','Italic','Underline','Strike','Subscript','Superscript','-','RemoveFormat' ] },
	//   { name: 'paragraph', items : [ 'NumberedList','BulletedList','-','Outdent','Indent','-','Blockquote','CreateDiv',
	//   '-','JustifyLeft','JustifyCenter','JustifyRight','JustifyBlock','-','BidiLtr','BidiRtl' ] },
	//   { name: 'links', items : [ 'Link','Unlink','Anchor' ] },
	//   { name: 'insert', items : [ 'Image','Flash','Table','HorizontalRule','Smiley','SpecialChar','PageBreak','Iframe' ] },
	//   '/',
	//   { name: 'styles', items : [ 'Styles','Format','Font','FontSize' ] },
	//   { name: 'colors', items : [ 'TextColor','BGColor' ] },
	//   { name: 'tools', items : [ 'Maximize', 'ShowBlocks','-','About' ] }
	// ]
	config.toolbar = [
		{ name: 'document', items: ['Source', 'Preview', 'Print', '-', 'Templates'] },
		{ name: 'clipboard', items: ['Cut', 'Copy', 'Undo', 'Redo'] },
		{ name: 'editing', items: ['Find', 'Replace', '-', 'SelectAll', '-', 'SpellChecker'] },
		{ name: 'links', items: ['Link', 'Unlink', 'Anchor'] },
		{ name: 'colors', items: ['TextColor', 'BGColor'] },
		{ name: 'tools', items: ['Maximize'] },
		'/',
		{ name: 'basicstyles', items: ['Bold', 'Italic', 'Underline', 'Strike', 'Subscript', 'Superscript', '-', 'RemoveFormat'] },
		{ name: 'paragraph', items: ['NumberedList', 'BulletedList', '-', 'Outdent', 'Indent', '-', 'Blockquote', 'CreateDiv',
				'-', 'JustifyLeft', 'JustifyCenter', 'JustifyRight', 'JustifyBlock', '-', 'BidiLtr', 'BidiRtl']
		},
		
		
		'/',
		{ name: 'styles', items: ['Styles', 'Format', 'Font', 'FontSize'] },
		{ name: 'insert', items: ['imageupload', 'Table', 'HorizontalRule', 'Smiley'] },
		
	]
	config.imageUploadCallback = function(file, success) {
		console.log(file)
		success('https://t1.huanqiu.cn/2ba2db665c1f6e029d0925154b5cacd9.jpg')
	}
};
