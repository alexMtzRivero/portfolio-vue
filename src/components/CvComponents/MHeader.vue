<template>
  <div class="left">
      <h1>
        <div class="decoration"></div>
        <slot></slot>
      </h1>
  </div>
</template>

<script>
export default {

}
</script>

<style lang="scss" scoped>
.left{
    h1{
        color:#282828;
        display: list-item;
        //direction: rtl; 
    }
    .decoration{
        border: solid #282828 1px;
        width: 40px;
        position: relative;
        left: -60px;
        top: 16px;
    }
}
</style>