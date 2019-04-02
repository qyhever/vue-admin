<template>
  <el-header class="header">
    <div class="menu-collapse" @click="toggleMenu">
      <menu-unfold class="icon-menu" v-if="isCollapse"></menu-unfold>
      <menu-fold class="icon-menu" v-else></menu-fold>
    </div>
    <svg-icon :icon-class="isFullscreen?'exit-fullscreen':'fullscreen'" @click="handleFullscreen" />
    <el-dropdown class="user" @command="handleDropdown" :show-timeout="50">
      <div>
        <span class="userName">{{userInfo.userName}}</span>
        <img class="avatar" :src="userInfo.avatar" :alt="userInfo.userName">
      </div>
      <el-dropdown-menu class="dropdown-menu" slot="dropdown">
        <el-dropdown-item command="b">退出登录</el-dropdown-item>
      </el-dropdown-menu>
    </el-dropdown>
  </el-header>
</template>

<script>
import MenuFold from '@/components/icon/menu-fold'
import MenuUnfold from '@/components/icon/menu-unfold'
import screenfull from 'screenfull'
import { mapGetters } from 'vuex'
import bus from '@/bus'
import { stringify } from 'qs'

export default {
  name: 'HomeHeader',
  components: { MenuFold, MenuUnfold },
  data() {
    return {
      isFullscreen: false
    }
  },
  computed: {
    ...mapGetters(['isCollapse', 'userInfo'])
  },
  mounted() {
    this.init()
  },
  methods: {
    handleFullscreen() {
      if (!screenfull.enabled) {
        this.$message({
          message: '当前浏览器不支持此功能',
          type: 'warning'
        })
        return false
      }
      screenfull.toggle()
    },
    init() {
      if (screenfull.enabled) {
        screenfull.on('change', () => {
          this.isFullscreen = screenfull.isFullscreen
        })
      }
    },
    toggleMenu() {
      this.$store.commit('TOGGLE_MENU')
      bus.$emit('toggleMenu')
    },
    async handleDropdown(command) {
      if (command === 'a') {
        // ...
      } else {
        await this.$store.dispatch('logout')
        setTimeout(() => {
          window.location.reload() // 刷新页面重新实例化 vue-router，否则会重复添加路由
        }, 20)
      }
    }
  }
}
</script>

<style lang="scss" scoped>
.header {
  @include border-1px(#eee);
  flex: 0 0 60px;
  box-shadow: 0 1px 4px rgba(0, 21, 41, 0.08);
  padding: 0 !important;
  background-color: #fff;
  .menu-collapse {
    float: left;
    width: 60px;
    height: 60px;
    .icon-menu {
      width: 60px;
      height: 60px;
      display: flex;
      align-items: center;
      justify-content: center;
      font-size: 22px;
      cursor: pointer;
      @include bg-hover-canary();
    }
  }
  .user {
    float: right;
    width: 140px;
    padding: 0 20px;
    cursor: pointer;
    @include bg-hover-canary();
    .userName {
      margin-right: 8px;
      line-height: 60px;
      vertical-align: middle;
    }
    .avatar {
      width: 40px;
      height: 40px;
      border-radius: 50%;
      vertical-align: middle;
    }
    .dropdown-menu {
      width: 100%;
    }
  }
}
</style>
