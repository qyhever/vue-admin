<template>
  <div class="home">
    <siderbar />
    <el-container class="container" id="scrollWrapper">
      <header-bar />
      <breadcrumb />
      <el-main>
        <transition name="fade-main" mode="out-in">
          <router-view></router-view>
        </transition>
      </el-main>
      <el-footer class="footer">2018 © 正在缓冲99% 允许侵权</el-footer>
      <el-tooltip placement="top" content="返回顶部">
        <back-top :dom="scrollEle" transitionName="fade" :visibilityHeight="300" :backPosition="50"></back-top>
      </el-tooltip>
    </el-container>
  </div>
</template>

<script>
import Siderbar from './siderbar'
import HeaderBar from './header-bar'
import Breadcrumb from './breadcrumb'
import BackTop from '@/components/back-top'
export default {
  name: 'BasiceLayout',
  components: { Siderbar, HeaderBar, BackTop, Breadcrumb },
  data() {
    return {
      scrollEle: null
    }
  },
  mounted() {
    setTimeout(() => {
      this.scrollEle = document.querySelector('#scrollWrapper')
    }, 20)
  }
}
</script>

<style scoped lang="scss">
.home {
  height: 100%;
  display: flex;
}
.container {
  flex: 1;
  overflow-y: auto;
  transition: all 0.3s;
  background-color: #f0f2f5;
  /deep/ .el-main {
    position: relative;
    overflow: unset;
    transition: all 0.4s;
    padding: 0;
  }
  .footer {
    flex: 0 0 60px;
    background-color: #fff;
    line-height: 60px;
    text-align: center;
  }
}
</style>
