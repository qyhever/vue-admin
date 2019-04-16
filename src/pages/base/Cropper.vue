<template>
  <div class="con-main">
    <vue-cropper :src="url" @on-crop="handleCroped" />
    <!--<el-button @click="handleOk">确定</el-button>-->
  </div>
</template>

<script>
import VueCropper from '@/components/cropper'
export default {
  name: 'base_cropper',
  components: {
    VueCropper
  },
  data() {
    return {
      url: ''
    }
  },
  methods: {
    handleCroped(blob) {
      const reader = new FileReader()
      reader.readAsDataURL(blob)
      reader.onload = event => {
        console.log(event.target.result)
      }
    }
  }
}
</script>
