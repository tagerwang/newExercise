export default {
    install(Vue, options){
        console.log(Vue, options)
        Vue.directive('color-swatch', function (el, binding) {
            el.style.backgroundColor = binding.value
          })
         // 1. 添加全局方法或属性
        Vue.$myGlobalMethod = function () {
            // 逻辑...
            console.log('plugin $myGlobalMethod')
        }
        Vue.mixin({
            created: function () {
              // 逻辑...
              console.log('plugin mixin')
            }
          })
        Vue.prototype.$myMethod = function (options) {
            console.log('plugin $myMethod', options)
        }
    }
}