<template>
  <div id="app">
    <p>child tell me dosomething: {{childbody}}</p>
    <Children inter='thanks father' v-on:child-tell-father="listenchildtell"></Children>
    <img src="./assets/logo.png">
    <!--<router-view></router-view>-->
    <h1 v-html="title"></h1>
    <input type="text" v-model="newItem" @keyup.enter="addNew">
    <ul>
      <li @click="change(item)" v-for="item in items" :class="{finished:item.isFinished}">
        {{item.label}}
      </li>
    </ul>
  </div>
</template>

<script>
import Store from './store'
import Children from './components/Children.vue'
export default {
  name: 'app',
  components:{Children},
  data () {
    return {
      title: '<span>?</span>my name is wangtao;',
      items: Store.fetch(),
      newItem: '',
      childbody:''
    }
  },
  methods: {
    change: function (item) {//切换；
      item.isFinished = !item.isFinished
    },
    addNew: function () {//新增；
      console.log(this.newItem)
      this.items.push({
        label: this.newItem,
        isFinished: false
      })
      this.newItem = ''
    },
    listenchildtell: function (msg) {
        console.log(msg)
      debugger;
      this.childbody=msg
    }
  },
  watch : {
      items : {
          handler : function (val) {
            console.log(val)
            Store.save(val);
            this.items=val;

          },
        deep : true
      }
  }
}
</script>

<style>

#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
  li.finished{
    text-decoration: underline;
  }
</style>
