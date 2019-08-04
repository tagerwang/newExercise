<!-- vue 入口 -->
<template>
  <div id="app">
    <router-view></router-view>
  </div>
</template>

<script>
 export default {
   data () {
     return {

     }
   },
   components: {

   },
   mounted(){
      // 防抖函数
      function debounce(fn,delay){
          let timer = null //借助闭包
          return function() {
              if(timer){
                  clearTimeout(timer) 
              }
              timer = setTimeout(fn, delay)
          }
      }
      // 原始函数
      let handlerScroll = function printScroll  () {
          var scrollTop = document.body.scrollTop || document.documentElement.scrollTop;
      　　console.log('滚动条当前位置：' + scrollTop);
      }
      // 两函数结合，实现滚动防抖
      window.addEventListener('scroll', debounce(handlerScroll, 1000))
   }

 }
</script>

<style>

 
</style>