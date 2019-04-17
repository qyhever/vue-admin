<template>
  <div ref="quill" class="editor-wrapper"></div>
</template>

<script>
import axios from '@/utils/axios'
import request from 'axios'
import Quill from 'quill'
import 'quill/dist/quill.snow.css'
import { createInput } from '@/utils/utils'
export default {
  props: {
    value: {
      type: String,
      default: ''
    }
  },
  data() {
    return {
      hasChange: false,
      hasInit: false
    }
  },
  watch: {
    value(val) {
      if (!this.hasChange && this.hasInit) {
        this.editor.clipboard.dangerouslyPasteHTML(0, val)
      }
    }
  },
  mounted() {
    this.init()
  },

  beforeDestroy() {
    this.editor = null
  },

  methods: {
    init() {
      this.$nextTick(() => {
        this.editor = new Quill(this.$refs.quill, {
          modules: {
            toolbar: [
              ['bold', 'italic', 'underline', 'strike'],
              ['blockquote', 'code-block'],
              [{ 'list': 'ordered' }, { 'list': 'bullet' }],
              [{ 'script': 'sub' }, { 'script': 'super' }],
              [{ 'indent': '-1' }, { 'indent': '+1' }],
              [{ 'direction': 'rtl' }],
              [{ 'size': ['small', false, 'large', 'huge'] }],
              [{ 'header': [1, 2, 3, 4, 5, 6, false] }],
              [{ 'color': [] }, { 'background': [] }],
              [{ 'font': [] }],
              ['link', 'image'],
              [{ 'align': [] }],
              ['clean']
            ]
          },
          placeholder: '请输入...',
          theme: 'snow'
        })
        this.hasInit = true
        const editor = this.editor
        editor.clipboard.dangerouslyPasteHTML(0, this.value)
        editor.on('text-change', () => {
          this.hasChange = true
          const value = editor.container.firstChild.innerHTML
          this.$emit('input', value)
        })

        const toolbar = editor.getModule('toolbar')
        toolbar.addHandler('image', () => {
          createInput('img').then(file => {
            // upload to qiniu
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
                const range = editor.getSelection()
                if (range) {
                  editor.insertEmbed(range.index, 'image', imageUrl)
                  editor.setSelection(range.index + 1)
                }
              })
            }).catch(error => {
              console.log(error)
              this.$message.error('上传失败')
            })
          })
        })
      })
    }
  }
}
</script>

<style lang="scss" scoped>
.editor-wrapper {
  width: 100%;
  height: 500px;
}
</style>
