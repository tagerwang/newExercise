import Vue from 'vue'
import Router from 'vue-router'
import Hello from '@/components/Hello'

Vue.use(Router)
export default new Router({
  routes: [
    {
      path: '/first',
      component: Hello
    }
/*
     {
     path: '/first',
     component: first
     }
*/
  ]
})

/*
new Vue({
  Router,
  template: `<div>
        <h1>导航</h1>
        <router-link to="/first">first内容1</router-link>
        </div>
          <router-view></router-view>
        `
}).$mount('#app')
*/

