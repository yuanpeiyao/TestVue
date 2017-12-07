<template>
  <section>
      <div class="login">
          <label for="">
              <span>用户名：</span>
            <input type="text" v-model="username" @change="setUser">
          </label>
      </div>
  </section>
</template>

<script>
    export default {
        name:'login',
        data(){
            return {
                username:''
            }
        },
        methods:{
            setUser:function(){
                //使用$emit来遍历changeUser事件，并返回this.username
                this.$emit('changeUser',this.username)
            }
        }
    }
</script>