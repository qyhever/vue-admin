<template>
  <div>
    <el-upload
      :action="QINIU_UPLOAD_URL"
      :data="param"
      :file-list="fileList"
      list-type="picture-card"
      :on-preview="handlePictureCardPreview"
      :on-remove="handleRemove"
      :before-upload="handlebeforeUpload"
      :on-success="handleSuccess">
      <i class="el-icon-plus"></i>
    </el-upload>
    <el-dialog :visible.sync="dialogVisible">
      <img width="100%" :src="dialogImageUrl" alt="">
    </el-dialog>
  </div>
</template>

<script>
import axios from '@/utils/axios'
export default {
  props: {
    value: {
      type: Array,
      default: () => []
    }
  },
  data() {
    return {
      dialogImageUrl: '',
      dialogVisible: false,
      param: {
        token: ''
      }
    }
  },
  computed: {
    fileList() {
      return this.value.map(url => ({ url }))
    }
  },
  methods: {
    handleRemove(file, fileList) {
      const value = fileList.map(v => v.url)
      this.$emit('input', value)
    },
    handlePictureCardPreview(file) {
      this.dialogImageUrl = file.url
      this.dialogVisible = true
    },
    handlebeforeUpload(file) {
      return new Promise((resolve, reject) => {
        axios.get('/upload/qiniuToken').then(res => {
          const { token } = res.data
          this.param.token = token
          resolve(true)
        }).catch(err => {
          reject(err)
        })
      })
    },
    handleSuccess(res, file) {
      const { hash } = res
      const imageUrl = this.QINIU_PREFIX + hash
      this.$emit('input', [...this.value, imageUrl])
    }
  }
}
</script>
