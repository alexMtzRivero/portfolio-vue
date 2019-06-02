<template>
  <div class="home">
    <link href="https://fonts.googleapis.com/css?family=Ubuntu+Mono&display=swap" rel="stylesheet"> 
    <!-- <HelloWorld/> -->
    <Pong/>
  </div>
</template>

<script>
// @ is an alias to /src
import HelloWorld from '@/components/HelloWorld.vue'
import Pong from '@/components/Pong.vue'
export default {
  name: 'home',
  components: {
    // HelloWorld,
    Pong
  }
}
</script>
<style>
.home{
  width: 100%;
  height: 100%;
  background: black;
  color: white;
  font-family: 'Ubuntu Mono', monospace;
}
</style>

