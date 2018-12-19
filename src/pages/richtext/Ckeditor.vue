<template>
  <div class="content">
    <vue-ckeditor v-model="content" />
    <el-row type="flex" justify="center">
      <el-button type="primary" @click="handleSubmit">确定</el-button>
    </el-row>
  </div>
</template>
<script>
import VueCkeditor from '@/components/VueCKEditor'
export default {
  components: {
    VueCkeditor
  },
  name: 'CKEditor',
  data () {
    return {
      content: '生命在于折腾'
    }
  },
  methods: {
    handleSubmit() {
      console.log(this.content)
    }
  }
}
</script>

<style lang="scss" scoped>
/deep/ {
  .el-row {
    margin-top: 15px;
  }
}
</style>
