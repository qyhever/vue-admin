<template>
  <div>
    <upload-image-multi v-model="url" />
    <el-button @click="handleOk">确定</el-button>
  </div>
</template>

<script>
import UploadImageMulti from '@/components/upload-image-multi'
export default {
  name: 'Cropper',
  components: {
    UploadImageMulti
  },
  data() {
    return {
      url: [
        'https://qiniu.qyhever.com/FulrJPLqhXbLAPQ5kZrS4lelaewB',
        'https://qiniu.qyhever.com/FkBjrvecJxVEDFPB79s0jDaJ3_6-'
      ]
    }
  },
  methods: {
    handleOk() {
      console.log(this.url)
    }
  }
}
</script>

<style scoped lang="stylus">
// ...
</style>
