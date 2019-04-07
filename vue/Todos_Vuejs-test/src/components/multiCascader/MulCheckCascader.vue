<template lang='html'>
    <div class='vk-multil-cascader'>
        <el-popover @show="showEle" @hide="hideEle" @after-leave="afterLeave" placement="top-start" ref='vk-multi-cascader-popover' popper-class="vk-multi-cascader-popover" :visible-arrow="showArrow" trigger="click">
            <muContent :height="height" :width="width" :option="options" @handleOutPut="whenOutPut"></muContent>
            <el-autocomplete
            @click="tests"
            popper-class="slect-panel"
              :value="inputValue"
              :fetch-suggestions="querySearchAsync"
              placeholder="请输入内容"
              v-if="activeItem[0] && activeItem[0].level === 0"
              @select="handleSelect"
              slot="reference"
            ></el-autocomplete>
            <!-- <el-input popper-class="slect-panel" placeholder="请输入内容" v-if="activeItem[0] && activeItem[0].level === 0"  v-model="inputValue" readonly slot="reference"></el-input> -->
        </el-popover>
    </div>
</template>

<script>
import muContent from "./multiContent";
import { setTimeout } from 'timers';
export default {
    name: "multiCascader",
    props: {
        options: {
            type: Array,
            default() {
                return [];
            }
        },
        width: {
            type: String,
            default: ""
        },
        height: {
            type: String,
            default: ""
        },
        inputValue: {
            type: String,
            default() {
                return "";
            }
        }
    },
    data() {
        return {
            showStyle:'',
            hideStyle: '',
            queryString: '',
            showArrow: true,
            activeItem: [],
            outputValue: [],
            optionDicts: [],
            popoverStyle: {
            }
        };
    },
    components: {
        muContent
    },
    computed: {},
    created() {
        this.initData();
        this.setLevel();
        this.setOptionDicts(this.options);
    },
    mounted () {
      setTimeout(()=>{
        this.$refs['vk-multi-cascader-popover'].$refs.popper.style.display = 'blcok'
        console.log(this.$refs['vk-multi-cascader-popover'].$refs.popper.style.display)
      },1000)


    },
    methods: {
      tests () {
        console.log("sdfsdfsf")
      },
      showEle () {
        this.showStyle = JSON.parse(JSON.stringify(this.$refs['vk-multi-cascader-popover'].$refs.popper.style))
        this.showStyle.display = 'block'
      },
      hideEle () {
        console.log('showh:', this.showStyle.top)
        this.hideStyle = JSON.parse(JSON.stringify(this.$refs['vk-multi-cascader-popover'].$refs.popper.style))
        console.log('hides', this.hideStyle.top)
      },
      afterLeave () {
        console.log('hidehide', this.showStyle.top)
        // this.$refs['vk-multi-cascader-popover'].$refs.popper.style = this.showStyle
        setTimeout(()=>{
        console.log(Object.assign(this.$refs['vk-multi-cascader-popover'].$refs.popper.style, this.showStyle))
        console.log('hidehide', this.$refs['vk-multi-cascader-popover'].$refs.popper.style.top)
        },1000)
      },
      // getStyle (type) {
      //   console.log(this.$refs['vk-multi-cascader-popover'].$refs.popper.style)
      //   console.log(this.$refs['vk-multi-cascader-popover'].$refs.popper.style.top)
      //   console.log(this.$refs['vk-multi-cascader-popover'].$refs.popper.style.left)
      //   setTimeout(()=>{
      //     this[type] = this.$refs['vk-multi-cascader-popover'].$refs.popper.style
      //     console.log(type, this.showStyle.top)
      //     console.log(type,this.showStyle.left)
      //     Object.assign(this.$refs['vk-multi-cascader-popover'].$refs.popper.style, this.showStyle)
      //   },1000)

      // },
      getInput (val) {
        console.log(val)
      },
      querySearchAsync(queryString, cb) {
        // if (this.queryString === queryString) {
        //   this.$refs['vk-multi-cascader-popover'].$refs.popper.style.display = 'blcok'
        //   return
        // }
        // Object.assign(this.$refs['vk-multi-cascader-popover'].$refs.popper.style, this.showStyle)
        this.queryString = queryString
        console.log(queryString, cb)
        var restaurants = this.restaurants;
        var results = queryString ? restaurants.filter(this.createStateFilter(queryString)) : restaurants;

        clearTimeout(this.timeout);
        this.timeout = setTimeout(() => {
          cb(results);
        }, 3000 * Math.random());
      },
      createStateFilter(queryString) {
        return (state) => {
          return (state.value.toLowerCase().indexOf(queryString.toLowerCase()) === 0);
        };
      },
      handleSelect(item) {
        console.log(item);
      },
        initData() {
            this.activeItem = this.options;
            const { width, height } = this;
            this.popoverStyle = Object.assign({}, { width, height });
            this.restaurants = this.options;
        },
        // 设置配置的字典
        setOptionDicts(options) {
            if (!Array.isArray(options)) {
                const { label, value } = options;
                this.optionDicts.push({ value, label });
                console.log(this.optionDicts)
                const children = options.children;
                if (children) {
                    this.setOptionDicts(children);
                }
            } else {
                options.forEach(opt => {
                    this.setOptionDicts(opt);
                });
            }
        },
        whenOutPut(value) {
            this.outputValue = value;
            this.$emit("on-selected", value);
        },
        // 设定层级
        setLevel() {
            if (this.options.length) {
                const addLevel = option => {
                    const optChild = option.children;
                    if (optChild) {
                        optChild.forEach(opt => {
                            opt.level = option.level + 1;
                            addLevel(opt);
                        });
                    }
                };
                this.options.forEach(option => {
                    if (!option.level) {
                        option.level = 0;
                    }
                    addLevel(option);
                });
            }
        },
        showSecondLevel(item) {
            this.activeItem = item;
        }
    }
};
</script>
<style lang='scss' scoped>
.vk-menu-item {
    display: flex;
    justify-content: space-between;
    align-items: center;
    list-style-type: none;
    white-space: nowrap;
    overflow: hidden;
    text-overflow: ellipsis;
    cursor: pointer;
    outline: none;
    padding: 8px 20px;
    font-size: 14px;
    width: 100%;
    &:hover {
        background-color: rgba(125,139,169,.1);
    }
}
// @import "~assets/css/variable";
</style>
