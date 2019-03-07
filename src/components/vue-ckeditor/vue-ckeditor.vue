<template>
  <div>
    <textarea :id="id"></textarea>
  </div>
</template>
<script>
import axios from '@/utils/axios'
import request from 'axios'
import CKEDITOR from 'CKEDITOR'
export default {
  name: 'CKEditor',
  props: {
    value: {
      type: String,
      default: ''
    },
    id: {
      type: String,
      default: `editor-${+new Date()}`
    },
    options: {
      type: Object,
      default() {
        return {}
      }
    }
  },
  data () {
    return {
      instanceValue: ''
    }
  },
  watch: {
    value(val) {
      this.setData(val)
    }
  },
  mounted () {
    this.initCkeditor()
  },
  activated() {
    this.initCkeditor()
  },
  // deactivated() {
  //   this.destroyCkeditor()
  // },
  // beforeDestroy() {
  //   this.destroyCkeditor()
  // },
  methods: {
    initCkeditor() {
      const defaultOptions = {
        height: '300px',
        width: '100%',
        imageUploadCallback: this.imageUploadCallback
      }
      const initOptions = Object.assign({}, defaultOptions, this.options)
      CKEDITOR.replace(this.id, initOptions)
      this.editor = CKEDITOR.instances[this.id]
      const editor = this.editor
      editor.setData(this.value)
      editor.on('instanceReady', () => {
        editor.setData(this.value)
      })
      editor.on('change', this.handleChange)
      editor.on('mode', this.handleMode)
    },
    handleChange() {
      const html = this.editor.getData()
      if (this.value !== html) {
        this.$emit('input', html)
        this.instanceValue = html
      }
    },
    handleMode() {
      if (this.editor.mode === 'source') {
        const editable = this.editor.editable()
        editable.attachListener(editable, 'input', this.handleChange)
      }
    },
    setData(value) {
      if (this.editor && this.instanceValue !== value) {
        this.editor.setData(value)
      }
    },
    destroyCkeditor() {
      this.editor && this.editor.destroy()
    },
    imageUploadCallback(file, success) {
      axios.get('/upload/qiniuToken').then(res => {
        const { token } = res.data
        return Promise.resolve(token)
      }).then(token => {
        const formData = new FormData()
        formData.append('file', file)
        formData.append('token', token)
        request.post(this.QINIU_UPLOAD_URL, formData).then(response => {
          const { hash } = response.data
          const imageUrl = this.QINIU_PREFIX + hash
          success(imageUrl)
        })
      }).catch(error => {
        console.log(error)
        this.$message.error('上传失败')
      })
    }
  }
}
</script>
