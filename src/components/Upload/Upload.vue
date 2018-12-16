<template>
  <el-upload
    v-loading="loading"
    class="uploader"
    :class="{'hover-mask': value}"
    action="https://up-z2.qiniup.com"
    :show-file-list="false"
    :data="param"
    :on-success="handleSuccess"
    :before-upload="handlebeforeUpload">
      <img v-if="value" :src="value" class="avatar">
      <i v-else class="el-icon-plus uploader-icon"></i>
      <div class="mask">
        <i class="el-icon-plus uploader-icon"></i>
      </div>
  </el-upload>
</template>

<script>
import axios from '@/utils/axios'
import { qiniuPrefix } from '@/config/config'
export default {
  props: {
    value: String
  },
  data() {
    return {
      loading: '',
      param: {
        token: ''
      }
    }
  },
  methods: {
    handleSuccess(res, file) {
      this.loading = false
      const { hash } = res
      const imageUrl = qiniuPrefix + hash
      this.$emit('input', imageUrl)
      // this.imageUrl = URL.createObjectURL(file.raw)
    },
    handlebeforeUpload(file) {
      // const isJPG = file.type === 'image/jpeg'
      // const isLt2M = file.size / 1024 / 1024 < 2

      // if (!isJPG) {
      //   this.$message.error('上传头像图片只能是 JPG 格式!')
      // }
      // if (!isLt2M) {
      //   this.$message.error('上传头像图片大小不能超过 2MB!')
      // }
      // return isJPG && isLt2M
      return new Promise((resolve, reject) => {
        this.loading = true
        axios.get('/upload/qiniuToken').then(res => {
          const { token } = res.data
          this.param.token = token
          resolve(true)
        }).catch(err => {
          this.loading = false
          reject(err)
        })
      })
    }
  }
}
</script>

<style scoped lang="scss">
  .hover-mask:hover .mask {
    display: block;
  }
  .mask {
    display: none;
    position: absolute;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    background-color: rgba(0, 0, 0, .3);
  }
  .mask .avatar-uploader-icon {
    color: #fff;
  }
  .uploader {
    width: 130px;
    height: 130px;
  }
  .uploader /deep/ .el-upload {
    border: 1px dashed #d9d9d9;
    border-radius: 6px;
    cursor: pointer;
    position: relative;
    overflow: hidden;
  }
  .uploader /deep/ .el-upload:hover {
    border-color: #409EFF;
  }
  .uploader-icon {
    width: 128px;
    height: 128px;
    line-height: 128px;
    text-align: center;
    font-size: 28px;
    color: #8c939d;
  }
  .avatar {
    width: 128px;
    height: 128px;
    display: block;
    border-radius: 6px;
  }
</style>
