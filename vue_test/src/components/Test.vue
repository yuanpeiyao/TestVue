<template>
<p>{{greeting}} World!</p>  
</template>

<script>
module.exports = {
  data: function() {
    return {
      greeting: "Hello"
    };
  }
};
</script>

// 组件作用域的css
<style scoped>
p {
  font-size: 2em;
  text-align: center;
}
</style>
