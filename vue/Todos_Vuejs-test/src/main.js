// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import router from './router'
import plugins from './plugins'
import ElementUI from 'element-ui';
import 'element-ui/lib/theme-chalk/index.css';
Vue.use(ElementUI);
// 使用VueLocalStorage 作为localstorage 存储插件
// 仓库： https://github.com/pinguinjkeke/vue-local-storage
import VueLocalStorage from 'vue-localstorage'
import multiCascader from "./components/multiCascader"
Vue.component(multiCascader.name, multiCascader)
// console.log(multiCascader,'multiCascader multiCascader')
// Vue.use(multiCascader)
Vue.use(VueLocalStorage)
Vue.use(plugins)
/* eslint-disable no-new */
new Vue({
  // 根组件内声明使用的localstorage
  localStorage: {
    vueTodoList: {
      type: Array,
      default: []
    }
  },
  el: '#app',
  router,
  render: h => h(App)

})
