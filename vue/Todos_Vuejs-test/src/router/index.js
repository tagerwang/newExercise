import Vue from 'vue'
import VueRouter from 'vue-router'
import TodoList from '../TodoList.vue'
import Canvas from '../components/Canvas.vue'
import Svg from '../components/Svg.vue'
import SvgCircle from '../components/SvgCircle.vue'

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
        },
        {
            path: '/svg',
            component: Svg
        },
        {
            path: '/circle',
            component: SvgCircle
        }
    /*
            {
            path: '/first',
            component: first
            }
    */
    ]
})