<!-- SVG -->
<template>
 <div>
     <div class="div-animte"></div>
<svg xmlns="http://www.w3.org/2000/svg" version="1.1" class="line-svg">
  <line x1="0" y1="0" x2="200" y2="0"
  style="stroke:rgb(255,0,0);stroke-width:6"/>
</svg>
    <svg class="svg-graph">
    <circle cx="50" cy="50" r="48" stroke="black"
    stroke-width="2" fill="red" />
    </svg>
    <div>
        <embed src="/static/circle.svg" type="image/svg+xml" />
        <div></div>
        <object data="/static/circle.svg" type="image/svg+xml"></object>
        <div></div>
        <iframe src="/static/circle.svg"></iframe>
        <div></div>
        <svg xmlns="http://www.w3.org/2000/svg" version="1.1">
  <rect x="20" y="20" width="250" height="250" style="fill:blue">
    <animate attributeType="CSS" attributeName="opacity" from="1" to="0" dur="5s" repeatCount="indefinite" />
  </rect>
</svg>
<div></div>
<svg xmlns="http://www.w3.org/2000/svg" version="1.1" class="path-svg">
    <path d="M150 0 L75 200 L225 200 Z" />
</svg>
<div></div>
        <a href="/static/circle.svg">View SVG file</a>
    </div>
 </div>
</template>

<script>
import anime from 'animejs'
 export default {
   data () {
     return {
         getLineDiv:null
     }
   },
   mounted(){
       setInterval(()=>{
           console.log(anime.running, anime.get('.div-animte'))
        //    this.getLineDiv.animations[0].currentValue=`${Math.random()*100}%`
        //    anime.set('.div-animte', {width: `${Math.random()*100}%`})
           this.lineDiv(`${Math.random()*100}%`)
       },6000)
       this.$nextTick(()=>{
           anime({
  targets: '.line-svg',
  strokeDashoffset: [anime.setDashoffset, 0],
  easing: 'easeInOutSine',
  duration: 1500,
  delay: function(el, i) { return i * 250 },
  direction: 'alternate',
  loop: true
});


var path = anime.path('.path-svg path');

anime({
  targets: '.path-svg',
  translateX: path('x'),
  translateY: path('y'),
  rotate: path('angle'),
  duration: 3000,
  loop: true,
  easing: 'linear'
});
       })
   },
   components: {
       
   },
   methods:{
       lineDiv(width='100%'){
         let animes=anime({
            targets: '.div-animte',
            width, // -> from '28px' to '100%',
            easing: 'easeInOutQuad',
            direction: 'normal',
            loop: false,
            duration: 2000
            });
            console.log(animes)
            this.getLineDiv=animes
            return animes
       }
   }
 }
</script>

 <style lang="scss" scoped>
 .div-animte{
     width:40px;
     height: 40px;
     background: greenyellow;
 }
.svg-graph{
    width: 100px;
    height: 100px;
}
</style>