import Vue from 'vue'
import App from './App'
import router from './router'
import store from './store'

/* eslint-disable import/first */
import './router/permission'

import './assets/css/index.css'
import 'font-awesome/css/font-awesome.css'
import './assets/scss/layout.scss'
import './assets/scss/transition.scss'

// import './assets/scss/element-variables.scss'
// import './assets/scss/mixin.scss'
import 'element-ui/packages/theme-chalk/src/index.scss'
import ElementUI from 'element-ui'
Vue.use(ElementUI)

import * as filters from './filters'
// register global filters.
Object.keys(filters).forEach(key => {
  Vue.filter(key, filters[key])
})

import prototypeExtendConfig from './config'
Vue.use(prototypeExtendConfig)
// register global enum.
import enums from './enum'
Vue.use(enums)

import prototypeExtendUtil from './prototype'
Vue.use(prototypeExtendUtil)

import * as directives from './directives'
// register global directives.
Object.keys(directives).forEach(key => {
  Vue.directive(key, directives[key])
})
import './icons'
Vue.config.productionTip = false
/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  store,
  render: h => h(App)
})
