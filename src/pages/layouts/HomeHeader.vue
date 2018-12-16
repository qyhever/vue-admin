<template>
  <el-header class="header">
    <div class="menu-collapse" @click="toggleMenu">
      <menu-unfold class="icon-menu" v-if="isCollapse"></menu-unfold>
      <menu-fold class="icon-menu" v-else></menu-fold>
    </div>
    <el-dropdown class="user" @command="handleDropdown" :show-timeout="50">
      <div>
        <span class="userName">{{userInfo.userName}}</span>
        <img class="avatar" :src="userInfo.avatar" :alt="userInfo.userName">
      </div>
      <el-dropdown-menu class="dropdown-menu" slot="dropdown">
        <!-- <el-dropdown-item command="a">黄金糕</el-dropdown-item> -->
        <el-dropdown-item command="b">退出登录</el-dropdown-item>
      </el-dropdown-menu>
    </el-dropdown>
  </el-header>
</template>

<script>
import MenuFold from '@/components/icon/MenuFold'
import MenuUnfold from '@/components/icon/MenuUnfold'
import { mapGetters } from 'vuex'

export default {
  name: 'HomeHeader',
  components: { MenuFold, MenuUnfold },
  computed: {
    ...mapGetters(['isCollapse', 'userInfo'])
  },
  methods: {
    toggleMenu() {
      this.$store.commit('TOGGLE_MENU')
    },
    async handleDropdown(command) {
      if (command === 'a') {
        // ...
      } else {
        await this.$store.dispatch('logout')
        location.reload() // 刷新页面重新实例化 vue-router，否则会重复添加路由
      }
    }
  }
}
</script>

<style lang="stylus" scoped>
.header
  flex 0 0 60px
  border-bottom 1px solid #eee
  box-shadow 0 1px 4px rgba(0, 21, 41, 0.08)
  padding 0
  background-color #fff
  .menu-collapse
    float left
    width 60px
    height 60px
    .icon-menu
      width 60px
      height 60px
      display flex
      align-items center
      justify-content center
      font-size 22px
      cursor pointer
      &:hover
        color #1890ff
        background-color rgba(24, 144, 255, 0.15)
  .user
    float right
    width 140px
    padding 0 20px
    cursor pointer
    &:hover
      color #1890ff
      background-color rgba(24, 144, 255, 0.15)
    .userName
      margin-right 8px
      line-height 60px
      vertical-align middle
    .avatar
      width 40px
      height 40px
      border-radius 50%
      vertical-align middle
    .dropdown-menu
      width 100%
</style>
