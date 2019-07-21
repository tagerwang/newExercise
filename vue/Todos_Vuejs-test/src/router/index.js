import Vue from 'vue'
import VueRouter from 'vue-router'
import TodoList from '../TodoList.vue'
import Canvas from '../components/Canvas.vue'

Vue.use(VueRouter)

export default new VueRouter({
    routes: [
        {
            path: '/first',
            component: TodoList
        },
        {
            path: '/canvas',
            component: Canvas
        }
    /*
            {
            path: '/first',
            component: first
            }
    */
    ]
})