<!-- SVG -->
<!-- 理解CSS3 transform中的Matrix(矩阵) https://www.zhangxinxu.com/wordpress/2012/06/css3-transform-matrix-%E7%9F%A9%E9%98%B5/ -->
<template>
 <div>
<svg width="440" height="440" viewbox="0 0 440 440">
    <circle cx="220" cy="220" r="170" stroke-width="50" stroke="#D1D3D7" fill="none"></circle>
    <circle cx="220" cy="220" r="170" stroke-width="50" stroke="blue" fill="none" transform-origin="220 220" :transform="`matrix(${matrix1})`"   stroke-dasharray="0 1069"></circle>
    <!-- <circle cx="220" cy="220" r="170" stroke-width="50" stroke="red" fill="none" transform="matrix(0,-1,1,0,0,440)" stroke-dasharray="100 1069"></circle> -->
    <!-- <circle cx="220" cy="220" r="170" stroke-width="50" stroke="#00A5E0" fill="none" transform="matrix(0,-1,1,0,0,440)" stroke-dasharray="100 1069"></circle> -->
</svg>
<p>拖我{{circleVal}}：<input id="range" type="range" min="0" max="100" :value="circleVal" style="width:300px;"></p>

 </div>
</template>

<script>
 export default {
   data () {
     return {
         circleVal:0,
         matrix1: '0,-1,1,0,0,0'
     }
   },
   mounted(){
       if (window.addEventListener) {
        var range = document.querySelector("#range"), circle = document.querySelectorAll("circle")[1];
        if (range && circle) {
            range.addEventListener("change", function() {
                
                var percent = this.value / 100, perimeter = Math.PI * 2 * 170;
                console.log(this.value,':', percent,':', perimeter)
                circle.setAttribute('stroke-dasharray', perimeter * percent + " " + perimeter * (1- percent));
            });
        }
    }
   },
   created(){
       console.log(this.rotata(180))
   },
   components: {
       
   },
   methods:{
       rotata(deg){
            //矩阵实现旋转(deg为旋转角度)
        let a = Math.cos(deg/180*Math.PI);
        let b = Math.sin(deg/180*Math.PI);
        let c = -Math.sin(deg/180*Math.PI);
        let d = Math.cos(deg/180*Math.PI);
        console.log(a,b,c,d)
        this.matrix1=[a,b,c,d,0,0].join()
       }
   }
 }
</script>

 <style lang="scss" scoped>
circle {
    -webkit-transition: stroke-dasharray 2s;
    transition: stroke-dasharray 2s;
}
</style>