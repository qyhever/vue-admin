<template>
  <div class="login">
    <div class="form">
      <div class="logo">
        <h1 class="title">后台管理系统</h1>
      </div>
      <el-form :model="form" status-icon :rules="rules" ref="form">
        <el-form-item prop="userName" size="small">
          <el-input type="text" v-model.trim="form.userName" placeholder="账号" autocomplete="off"></el-input>
        </el-form-item>
        <el-form-item prop="password" size="small">
          <el-input
            type="password"
            v-model="form.password"
            placeholder="密码"
            autocomplete="off"
            @keyup.enter.native="submitForm('form')"
          />
        </el-form-item>
        <el-form-item>
          <el-button
            class="submit-btn"
            type="primary"
            size="small"
            :loading="loading"
            @click="submitForm('form')">
            提交
          </el-button>
        </el-form-item>
        <p class="account">
          <span>用户名：admin</span>
          <span>密码：admin</span>
        </p>
      </el-form>
    </div>
  </div>
</template>

<script>
import { getFromPath } from '@/utils/storage'
import { mapGetters } from 'vuex'
export default {
  name: 'Login',
  data() {
    return {
      form: {
        userName: '',
        password: ''
      },
      rules: {
        userName: [{ required: true, message: '请输入用户名!' }],
        password: [{ required: true, message: '请输入密码!' }]
      }
    }
  },
  computed: {
    ...mapGetters(['loading'])
  },
  methods: {
    async submitForm(form) {
      await this.$refs[form].validate()
      await this.$store.dispatch('login', this.form)
      const redirectPath = getFromPath()
      this.$router.replace({ path: redirectPath || '/' })
    }
  }
}
</script>

<style lang="stylus" scoped>
.login
  height 100%
  // background-color #f6f6f6
  background-color #2d3a4b
  .form
    position absolute
    top 30%
    left 50%
    width 320px
    padding 32px
    margin-left -192px
    // box-shadow 0 0 100px rgba(0, 0, 0, 0.1)
    box-shadow 0 0 100px rgba(255, 255, 255, 0.2)
    background-color #f6f6f6
    .logo
      margin-bottom 24px
      text-align center
      .title
        font-weight 400
        color #aaa
        font-family Microsoft Yahei
    .submit-btn
      width 100%
    .account
      display flex
      justify-content space-between
      color #ccc
</style>
