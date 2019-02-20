<template>
  <div id="app">

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

#demo {
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
