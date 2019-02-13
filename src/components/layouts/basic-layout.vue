<template>
  <div class="home">
    <siderbar />
    <el-container class="container">
      <header-bar />
      <div class="bread">
        <breadcrumb />
      </div>
      <el-main>
        <router-view></router-view>
        <!-- <el-tooltip placement="top" content="返回顶部">
          <back-to-top transitionName="fade" :visibilityHeight="300" :backPosition="50"></back-to-top>
        </el-tooltip> -->
      </el-main>
      <el-footer class="footer">2018 © 正在缓冲99% 允许侵权</el-footer>
      <back-top></back-top>
    </el-container>
  </div>
</template>

<script>
import Siderbar from './siderbar'
import HeaderBar from './header-bar'
import Breadcrumb from './breadcrumb'
import { BackTop } from 'iview'
import BackToTop from '@/components/BackToTop'
export default {
  name: 'BasiceLayout',
  components: { Siderbar, HeaderBar, BackToTop, BackTop, Breadcrumb }
}
</script>

<style scoped lang="stylus">
@import '~@/assets/stylus/common'
.home {
  height: 100%;
  display: flex;
}
.home >>> .el-main {
  overflow: unset;
  transition: all 0.4s;
}
.container {
  flex: 1;
  overflow: auto;
  transition: all 0.3s;
  background-color: #f0f2f5;
}
.bread {
  flex: 0 0 60px;
  padding: 0 20px;
  border-1px(#e8e8e8)
  // border-bottom: 1px solid #e8e8e8;
  line-height: 60px;
  background-color: #fff;
}
.bread >>> .el-breadcrumb {
  line-height: unset;
}
.footer {
  flex: 0 0 60px;
  background-color: #fff;
  line-height: 60px;
  text-align: center;
}
</style>
