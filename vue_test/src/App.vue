<template>
  <div id="app">
  <HeaderDiv :logo='logoMsg'></HeaderDiv>
  <LoginDiv @changeUser="getUser"></LoginDiv>
  <p>用户名：{{user}}</p>
  <Index />
    <img src="./assets/logo.png">
    <HelloWorld/>
  </div>
</template>

<script>
import HelloWorld from "./components/HelloWorld";
import Index from "./components/Index";
import HeaderDiv from "./components/header";
import LoginDiv from './components/login';

export default {
  name: "app",
  components: {
    HelloWorld,
    Index,
    HeaderDiv,
    LoginDiv
  },
  data() {
    return { logoMsg: "Test子组件像父组件传递数据 " ,user:''};
  },
  methods:{
    getUser:function(msg){
      this.user="Test父组件像子组件传递数据 "+msg;
    }
  }
};
</script>

<style>
#app {
  font-family: "Avenir", Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
