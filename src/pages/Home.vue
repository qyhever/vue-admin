<template>
  <div class="home">
    <siderbar></siderbar>
    <el-container class="container">
      <home-header></home-header>
      <el-main>
        <router-view></router-view>
      </el-main>
      <el-footer class="footer">2018 © 正在缓冲99% 允许侵权</el-footer>
    </el-container>
  </div>
</template>

<script>
import Siderbar from './layouts/Siderbar'
import HomeHeader from './layouts/HomeHeader'
export default {
  name: 'Home',
  components: { Siderbar, HomeHeader }
}
</script>

<style scoped>
.home {
  height: 100%;
  display: flex;

}
.home >>> .el-main {
  overflow: unset;
  transition: all .4s;
}
.container {
  flex: 1;
  overflow: auto;
  transition: all .3s;
}
.footer {
  flex: 0 0 60px;
  background-color: #eee;
  line-height: 60px;
  text-align: center;
}
</style>
