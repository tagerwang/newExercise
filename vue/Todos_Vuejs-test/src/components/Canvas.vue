<!-- canvas -->
<template>
 <div>
    <canvas id="canvas" style="border:1px solid #aaa;display:block;margin:50px auto;">
        当前浏览器不支持Canvas，请更换浏览器后再试
    </canvas>
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
   created(){
   },
   mounted(){
       this.lineTo()
   },
   methods: {
       lineTo(){
        var canvas = document.getElementById("canvas");
        var context =canvas.getContext("2d");
        canvas.width = 800;
        canvas.height = 800;
        context .moveTo(0, 0);
        context .lineTo(300,150);
        context.lineWidth = 10;
         context.strokeStyle = "#058";
        context .stroke();
       }
   }
 }
</script>

 <style lang="scss" scoped>

</style>