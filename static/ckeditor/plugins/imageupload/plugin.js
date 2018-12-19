(function(){
  function createFileInput(callback) {
    const input = document.createElement('input')
    input.setAttribute('type', 'file')
    input.setAttribute('accept', 'image/*')
    input.onchange = e => {
      const file = e.target.files[0]
      callback && callback(file)
    }
    input.click()
  }
  //Section 1 : 按下自定义按钮时执行的代码
  var commandDefinition = {
    exec: function(editor) {
      createFileInput(function(file) {
        editor.config.imageUploadCallback(file, success)
        function success(url) {
          var img = '<img src="'+ url +'" alt="加载失败" style="max-width:100%;height:auto;"/>'
          editor.insertHtml(img)
        }
      })
    }
  },
  //Section 2 : 创建自定义按钮、绑定方法
  pluginName = 'imageupload'
  CKEDITOR.plugins.add(pluginName, {
    init: function(editor) {
      // CKEDITOR.dialog.add('myplugDialog', this.path + 'dialogs/imageupload.js')
      editor.addCommand(pluginName, commandDefinition)
      editor.ui.addButton(pluginName, {
        label: '打开我的插件',
        icon: this.path + '/images/imageupload.png',
        command: pluginName
      })
    }
  })
})()