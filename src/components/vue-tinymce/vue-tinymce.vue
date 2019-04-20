<template>
  <div :class="{fullscreen:fullscreen}" class="tinymce-container editor-container">
    <textarea :id="tinymceId" class="tinymce-textarea"/>
  </div>
</template>

<script>
import axios from '@/utils/axios'
import request from 'axios'
import plugins from './plugins'
import toolbar from './toolbar'
import fontFormats from './fontFormats'
import './image'
const filterWord = (html) => {
  html = html.replace(/<\/?SPANYES[^>]*>/gi, '')
  html = html.replace(/<\\?\?xml[^>]*>/gi, '')
  return html
}
export default {
  name: 'Tinymce',
  props: {
    id: {
      type: String,
      default() {
        return 'vue-tinymce-' + +new Date() + ((Math.random() * 1000).toFixed(0) + '')
      }
    },
    value: {
      type: String,
      default: '生命在于折腾'
    },
    toolbar: {
      type: Array,
      required: false,
      default() {
        return []
      }
    },
    menubar: {
      type: String,
      default: 'file edit insert view format table'
    },
    height: {
      type: Number,
      required: false,
      default: 300
    }
  },
  data() {
    return {
      hasChange: false,
      hasInit: false,
      tinymceId: this.id,
      fullscreen: false
    }
  },
  watch: {
    value(val) {
      if (!this.hasChange && this.hasInit) {
        this.$nextTick(() => this.setContent(filterWord(val)))
      }
    }
  },
  mounted() {
    this.initTinymce()
  },
  activated() {
    this.initTinymce()
  },
  deactivated() {
    this.destroyTinymce()
  },
  beforeDestroy() {
    this.destroyTinymce()
  },
  methods: {
    initTinymce() {
      const _this = this
      window.tinymce.init({
        // language: 'zh_CN',
        language_url: './static/tinymce/langs/zh_CN.js',
        // theme_url: '/static/tinymce4.7.5/theme/modern/theme.min.js',
        // skin_url: '/static/tinymce4.7.5/skins/skin.min.css',
        // content_css: '/static/tinymce4.7.5/skins/content.min.css',
        selector: `#${this.tinymceId}`,
        height: this.height,
        object_resizing: false,
        plugins,
        toolbar: this.toolbar.length ? this.toolbar : toolbar,
        menubar: this.menubar,
        // contextmenu: 'link image inserttable | cell row column deletetable',
        // end_container_on_empty_block: true,
        // powerpaste_word_import: 'clean',
        fontsize_formats: '12px 14px 16px 18px 20px 24px 36px',
        fullpage_default_font_size: '16px',
        font_formats: fontFormats,
        fullpage_default_font_family: 'arial, Chinese Quote',
        branding: false,
        resize: false,
        // images_upload_handler: this.handleImageUpload,
        init_instance_callback(editor) {
          if (_this.value) {
            editor.setContent(filterWord(_this.value))
          }
          _this.hasInit = true
          editor.on('NodeChange Change KeyUp SetContent', () => {
            _this.hasChange = true
            _this.$emit('input', filterWord(editor.getContent()))
          })
        },
        setup(editor) {
          editor.on('FullscreenStateChanged', e => {
            _this.fullscreen = e.state
          })
        },
        imageSelectorCallback: _this.imageUploadCallback
      })
    },
    destroyTinymce() {
      const tinymce = window.tinymce.get(this.tinymceId)
      if (this.fullscreen) {
        window.tinymce.execCommand('mceFullScreen')
      }
      if (tinymce) {
        window.tinymce.remove()
      }
    },
    setContent(value) {
      window.tinymce.get(this.tinymceId).setContent(value || '')
    },
    getContent() {
      window.tinymce.get(this.tinymceId).getContent()
    },
    imageUploadCallback(file, success) {
      axios.get('/upload/qiniuToken').then(res => {
        const { token } = res.data
        return Promise.resolve(token)
      }).then(token => {
        const formData = new FormData()
        formData.append('token', token)
        formData.append('file', file)
        request.post(this.QINIU_UPLOAD_URL, formData).then(response => {
          const { hash } = response.data
          const imageUrl = this.QINIU_PREFIX + hash
          success(imageUrl)
        })
      }).catch(error => {
        console.log(error)
      })
    }
  }
}
</script>

<style scoped lang="scss">
.tiny-container {
  position: relative;
}
.tinymce-container {
  position: relative;
}
.tinymce-container /deep/ .mce-fullscreen {
  z-index: 10000;
}
.tinymce-textarea {
  visibility: hidden;
  z-index: -1;
}
</style>
