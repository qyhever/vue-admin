<template>
  <el-scrollbar wrap-class="scrollbar-wrapper">
    <el-menu
      router
      :default-active="activeMenu"
      class="menu"
      background-color="#001529"
      active-text-color="#fff"
      text-color="#ffffffa6"
      :collapse="collapsed"
      unique-opened
      @select="handleSelect">
      <template v-for="(item) in routers">

        <template v-if="item.children && item.children.length > 1">
          <el-submenu :index="item.path" :key="item.path">
            <template slot="title">
              <svg-icon :icon-class="item.meta.icon" class="icon"></svg-icon>
              <span>{{item.meta.title}}</span>
            </template>
            <el-menu-item v-for="(subItem) in item.children" :key="subItem.path" :index="subItem.path">
              {{subItem.meta.title}}
            </el-menu-item>
          </el-submenu>
        </template>

        <template v-else>
          <el-menu-item :index="item.children[0].path" :key="item.children[0].path">
            <svg-icon :icon-class="item.children[0].meta.icon" class="icon"></svg-icon>
            <span>{{item.children[0].meta.title}}</span>
          </el-menu-item>
        </template>

      </template>
    </el-menu>
  </el-scrollbar>
</template>

<script>
import { mapGetters } from 'vuex'
// import { routers } from '@/router'
function getMenu(list) {
  return list.filter(item => {
    if (!item.hiddenInMenu) {
      if (item.children) {
        item.children = getMenu(item.children)
      }
      return true
    } else {
      return false
    }
  })
}
export default {
  name: 'Sliderbar',
  data() {
    return {}
  },
  computed: {
    ...mapGetters(['collapsed']),
    routers() {
      const result = getMenu(this.$store.getters.routers)
      return result
    },
    activeMenu() {
      const { meta, path } = this.$route
      if (meta.activeMenu) {
        return meta.activeMenu
      }
      return path
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
//@import "~@/assets/scss/element-variables.scss";
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
.menu .icon {
  display: inline-block;
  vertical-align: middle;
  margin-right: 5px;
  width: 18px;
  height: 18px;
}
</style>
