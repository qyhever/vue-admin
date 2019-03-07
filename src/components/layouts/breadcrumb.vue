<template>
  <el-breadcrumb separator="/" class="bread">
    <el-breadcrumb-item v-for="(item, index) in list" v-if="item.meta.title" :key="item.path">
      <span v-if="!item.redirect || index === list.length - 1">{{item.meta.title}}</span>
      <a v-else @click.prevent="handleClick(item)">{{item.meta.title}}</a>
    </el-breadcrumb-item>
  </el-breadcrumb>
</template>

<script>
import pathToRegexp from 'path-to-regexp'
export default {
  data() {
    return {
      list: []
    }
  },
  watch: {
    $route() {
      this.getBreadcrumb()
    }
  },
  created() {
    this.getBreadcrumb()
  },
  methods: {
    getBreadcrumb() {
      let matched = this.$route.matched.filter(v => !v.name || v.name !== 'Dashboard')
      const first = matched[0]
      if (first && first.name.trim().toLocaleLowerCase() !== 'dashboard') {
        matched = [{path: '/dashboard', meta: {title: '首页'}}].concat(matched)
      }
      this.list = matched
    },
    pathCompile(path) {
      // To solve this problem https://github.com/PanJiaChen/vue-element-admin/issues/561
      const { params } = this.$route
      var toPath = pathToRegexp.compile(path)
      return toPath(params)
    },
    handleLink(item) {
      const { redirect, path } = item
      if (redirect) {
        this.$router.push(redirect)
        return
      }
      this.$router.push(this.pathCompile(path))
    }
  }
}
</script>

<style scoped lang="scss">
  .bread {
    flex: 0 0 60px;
    padding: 0 20px;
    @include border-1px(#e8e8e8);
    line-height: 60px;
    background-color: #fff;
  }
</style>
