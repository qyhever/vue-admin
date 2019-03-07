<template>
  <el-scrollbar wrap-class="scrollbar-wrapper">
    <el-menu
    router
    :default-active="$route.path"
    :default-openeds="defaultOpeneds"
    class="menu"
    background-color="#001529"
    active-text-color="#fff"
    text-color="#ffffffa6"
    :collapse="isCollapse"
    unique-opened
    @select="handleSelect">
    <template v-for="(item) in routers">

      <template v-if="item.children">
        <el-submenu :index="item.path" :key="item.path">
          <template slot="title">
            <i :class="item.icon"></i>
            <span>{{item.meta.title}}</span>
          </template>
          <el-menu-item v-for="(subItem) in item.children" :key="subItem.path" :index="subItem.path">
            {{subItem.meta.title}}
          </el-menu-item>
        </el-submenu>
      </template>

      <template v-else>
        <el-menu-item :index="item.path" :key="item.path">
          <i :class="item.icon"></i>
          <span>{{item.meta.title}}</span>
        </el-menu-item>
      </template>

    </template>
  </el-menu>
  </el-scrollbar>
</template>

<script>
import { mapGetters } from 'vuex'
export default {
  name: 'Sliderbar',
  data() {
    return {
      defaultOpeneds: ['1']
    }
  },
  computed: {
    ...mapGetters(['isCollapse']),
    routers() {
      const filterRoutes = this.$store.getters.routers.filter(v => !v.hidden)
      filterRoutes.forEach(v => {
        if (v.path === '/') {
          const [route] = v.children
          v.meta.title = route.meta.title
          v.icon = route.icon
          v.path = route.path
          delete v.children
        }
      })
      return filterRoutes
    }
  },
  methods: {
    handleSelect(path) {
      this.$router.push({
        path,
        query: {
          t: +new Date() // 保证每次点击路由的query项都是不一样的，确保会重新刷新view
        }
      })
    }
  }
}
</script>

<style scoped lang="scss">
.menu:not(.el-menu--collapse) {
  width: 220px;
  min-height: 400px;
}
.menu i {
  vertical-align: middle;
  margin-right: 5px;
  width: 24px;
  text-align: center;
  font-size: 18px;
}
.menu /deep/ .el-menu-item.is-active {
  background-color: $--color-primary !important;
}
.menu /deep/ .el-submenu.is-active .el-submenu__title,
.menu /deep/ .el-submenu.is-active .el-submenu__title i {
  color: #fff !important;
}
.menu /deep/ .el-submenu__title i {
  color: #ffffffa6;
}
.menu /deep/ .el-submenu:hover .el-submenu__title i,
.menu /deep/ .el-submenu:hover .el-submenu__title span {
  color: #fff;
}
.menu /deep/ .el-menu-item:hover {
  color: #fff !important;
}
</style>
