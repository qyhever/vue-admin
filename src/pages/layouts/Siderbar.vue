<template>
  <el-menu
    router
    :default-active="$route.path"
    :default-openeds="defaultOpeneds"
    class="menu"
    :collapse="isCollapse"
    router>
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
    handleOpen(key, keyPath) {
      // console.log(key, keyPath)
    },
    handleClose(key, keyPath) {
      // console.log(key, keyPath)
    }
  }
}
</script>

<style scoped>
.slider {
  width: 200px;
  height: 100%;
}
.menu {
  height: 100%;
}
.menu:not(.el-menu--collapse) {
  width: 200px;
  min-height: 400px;
}
.menu i {
  vertical-align: middle;
  margin-right: 5px;
  width: 24px;
  text-align: center;
  font-size: 18px;
}
</style>
