// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from '@/App'
import router from '@/router'
import store from '@/store'
import { sync } from 'vuex-router-sync'
import importElement from '@/js/importElement'
import {i18n, useI18n} from '@/js/lang/lang'

Vue.config.productionTip = false

sync(store, router)

importElement(Vue)
useI18n(Vue)

/* eslint-disable no-new */
new Vue({
  el: '#app',
  template: '<App/>',
  components: { App },
  i18n,
  router
})
