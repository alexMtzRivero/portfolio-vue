<template>
  <div class="home">
    <link href="https://fonts.googleapis.com/css?family=Ubuntu+Mono&display=swap" rel="stylesheet"> 
    <!-- <HelloWorld/> -->
    <Pong/>

    <!-- <CV/> -->
  </div>
</template>

<script>
// @ is an alias to /src
import HelloWorld from '@/components/HelloWorld.vue'
import Pong from '@/components/Pong.vue'
import CV from '@/components/CvComponents/CV.vue'
export default {
  name: 'home',
  components: {
    HelloWorld,
    Pong,
    CV
  }
}
</script>
<style>
.home{
  width: 100%;
  height: 100%;
  background: white;
  color: black;
  font-family: 'Ubuntu Mono', monospace;
}
</style>

