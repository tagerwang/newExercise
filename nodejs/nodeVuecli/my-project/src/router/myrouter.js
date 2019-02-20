
/**
 * Created by liusha on 2017/4/7.
 */
import Vue from 'vue'
import VueRouter from 'vue-router'

Vue.use(VueRouter)

const Home = {
  data(){
  return {aaa:"fade"}
},
template: '<div><h1>Home</h1><transition :name="aaa" mode="out-in"><router-view></router-view></transition></div>'
}
const Foo = { template: '<div>foo</div>' }
const Bar = { template: '<div>bar</div>' }
const Baz = { template: '<div>baz</div>' }
const page404={
  template:`
  <p>404 error</p>
  `
};

var router =  new VueRouter({
  mode: 'hash',
  base: __dirname,
  routes: [
    { path: '/home', component: Home,
      children: [
        // absolute alias
        { path: '/foo', component: Foo },
        // relative alias (alias to /home/bar-alias)
        { path: 'bar', component: Bar, alias: 'bar-alias' },
        // multiple aliases
        { path: 'baz', component: Baz, alias: ['/baz', 'baz-alias'] }
      ],
    },
    {path: '*', component: page404}
  ]
})

new Vue({
  router,
  template: `
    <div id="demo">
      <h1>Route Alias</h1>
      <ul>
        <li><router-link to="/home/foo">
          /foo (renders /home/foo)
        </router-link></li>
        <li><router-link to="/home/bar-alias">
          /home/bar-alias (renders /home/bar)
        </router-link></li>
        <li><router-link to="/baz">
          /baz (renders /home/baz)</router-link>
        </li>
        <li><router-link to="/home/baz-alias">
          /home/baz-alias (renders /home/baz)
        </router-link></li>
                <li><router-link to="/adsfsfdf">
         404
        </router-link></li>
      </ul>
      111
      <transition name="aaa" mode="out-in"><router-view class="view"></router-view></transition>
      
    </div>
  `,
  watch:{
    "$route"(to,from){
      console.log(to,from)
      if(from.path == "/foo"){
        this.aaa="fade2"
        console.log(this.aaa)
      }
    }
  }
}).$mount('#demo')


