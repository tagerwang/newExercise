<template>
  <div id="children">
    <h1>{{msg}}</h1>
    <button @click="onClickMe">Click!父传子</button>
    <button @click="sentfather">子传父</button>
    <h2 v-if="isshow">{{inter}}</h2>
  </div>
</template>

<script>
export default {
  name: 'hello',
  data () {
    return {
      msg: 'Welcome to Your Vue.js App',
      isshow:false
    }
  },
  props:['inter'],
  methods:{
    onClickMe:function () {
        if(this.isshow==true){
            this.isshow=false
        }else{
          this.isshow=true
        }
        console.log(this.inter)
    },
    sentfather: function () {
      this.$emit('child-tell-father',this.msg)
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
h1, h2 {
  font-weight: normal;
}

ul {
  list-style-type: none;
  padding: 0;
}

li {
  display: inline-block;
  margin: 0 10px;
}

a {
  color: #42b983;
}
</style>
