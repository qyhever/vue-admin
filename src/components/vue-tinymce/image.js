(function () {
  const global = window.tinymce.util.Tools.resolve('tinymce.PluginManager')

  function createFileInput() {
    return new Promise(resolve => {
      const input = document.createElement('input')
      input.setAttribute('type', 'file')
      input.setAttribute('accept', 'image/*')
      input.onchange = e => {
        const file = e.target.files[0]
        resolve(file)
      }
      input.click()
    })
  }

  function commandRegister(editor) {
    editor.addCommand('mceImageUpload', function () {
      createFileInput().then(file => {
        // 对外暴露上传回调
        editor.settings.imageSelectorCallback(file, success)
        function success(url) {
          console.log(url)
          editor.insertContent(`<img src="${url}" alt="加载失败" style="max-width: 100%;height: auto;" />`)
        }
      })
    })
  }

  function componentRegister(editor) {
    editor.addButton('imageupload', {
      title: '上传图片',
      icon: 'image',
      cmd: 'mceImageUpload'
      // image : url + '/img/icon.png'
    })
    editor.addMenuItem('imageupload', {
      icon: 'image',
      context: 'insert',
      text: '上传图片',
      cmd: 'mceImageUpload'
    })
  }

  global.add('imageupload', function (editor) {
    componentRegister(editor)
    commandRegister(editor)
  })

  function Plugin() { }

  return Plugin
})()
