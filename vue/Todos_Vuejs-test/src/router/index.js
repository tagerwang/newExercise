import Vue from 'vue'
import VueRouter from 'vue-router'
import TodoList from '../TodoList.vue'

Vue.use(VueRouter)

export default new VueRouter({
    routes: [
        {
            path: '/first',
            component: TodoList
        }
    /*
            {
            path: '/first',
            component: first
            }
    */
    ]
})