<template>
  <div class="home">
    <link href="https://fonts.googleapis.com/css?family=Ubuntu+Mono&display=swap" rel="stylesheet"> 
    <router-view></router-view>
  </div>
</template>

<script>
// @ is an alias to /src

export default {
  name: 'home',
  components: {
  
  }
}
</script>
<style>
.home{
  width: 100%;
  height: 100%;
  background: #2d0922;
  color: #2d0922;
  font-family: 'Ubuntu Mono', monospace;
}
</style>

