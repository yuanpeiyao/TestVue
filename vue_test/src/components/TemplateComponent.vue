<template>
  <div>
      <h1></h1>
  </div>
</template>

<script>
// 子组件要提前引入，才可使用
import ChildComponents from "./components/ChildComponents.vue";
// 也可以引入一些公共js脚本或类库
import main from "./main.js";

//js部分尽量采用es6语法，webpack babel会转义兼容
export default {
  //组件私有属性（必须是函数function，并且要返回return对象类型）
  data() {
    return {
      title: "组件标题",
      firstname: "",
      lastname: ""
    };
  },
  // 父组件传递过来的数据（2种方式声明：1数据；2对象）
  // 数组方式
  // props:{'age'},
  // 对象方式
  props: {
    age: {
      type: Number,
      default: 0,
      required: true,
      validator: function(value) {
        return value >= 0;
      }
    }
  },
  // 计算属性
  computed:{
    fullname(){
      return this.firstname+this.lastname;
    }
  },
  // 监听
watch:{
  title(preVal,newVal){
    console.log('改变之前的值：${preVal}；改变之后的值：${newVal}');
  }
},
// 函数集，自己封装，便于开发使用
methods:{
  getCurrentDate(){
    return new Date().toLocaleString()
  }
},
// 生命周期钩子：实例初始化之后，数据观测(data observer)和event/watcher事件之前被调用
beforeCreate(){
  console.log('component before created')
},
// 生命周期钩子：组件实例完成创建之后调用
created(){
  console.log('component created')
},
// 生命周期钩子：组件实例渲染完成时调用
mounted(){
  console.log('component mounted')
},
// 要用到哪些组件
components:{
  ChildComponents
}
};
</script>

<style lang="scss" scoped>
/* 使用scss编写样式，即可以提供开发效率，也方便维护
scope省略后，改样式片段会应用到页面全局
支持import语法引入css文件 */
@import "../reset.css";
div{
  h1{
    color:red;
  }
}
</style>
