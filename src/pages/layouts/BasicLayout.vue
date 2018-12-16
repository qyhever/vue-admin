<template>
  <div class="home">
    <siderbar></siderbar>
    <el-container class="container">
      <home-header></home-header>
      <div class="bread">
        <el-breadcrumb separator="/">
          <el-breadcrumb-item :to="{ path: '/' }">首页</el-breadcrumb-item>
          <el-breadcrumb-item><a href="/">活动管理</a></el-breadcrumb-item>
          <el-breadcrumb-item>活动列表</el-breadcrumb-item>
          <el-breadcrumb-item>活动详情</el-breadcrumb-item>
        </el-breadcrumb>
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
import Siderbar from './Siderbar'
import HomeHeader from './HomeHeader'
import { BackTop } from 'iview'
import BackToTop from '@/components/BackToTop'
export default {
  name: 'BasiceLayout',
  components: { Siderbar, HomeHeader, BackToTop, BackTop }
}
</script>

<style scoped>
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
  border-bottom: 1px solid #e8e8e8;
  line-height: 60px;
  background-color: #fff;
}
.bread >>> .el-breadcrumb {
  line-height: unset;
}
.footer {
  flex: 0 0 60px;
  background-color: #eee;
  line-height: 60px;
  text-align: center;
}
</style>
