<template>
  <div :class="`${big ? 'big' : ''}`">
    <h2>
      <div class="decoration"></div>
      <slot></slot>
    </h2>
  </div>
</template>

<script>
export default {
  props: {
    big: {
      type: Boolean,
      default: false,
    },
  },
};
</script>

<style lang="scss" scoped>
h2 {
  color: #282828;
  margin-right: 40px;
  position: relative;
  z-index: 1;
  margin-bottom: 5px;
}

.decoration {
  background: #d9dd0b;
  position: relative;
  top: 10px;
  left: -10px;
  width: 40px;
  height: 10px;
  z-index: -1;
  border-radius: 3px 3px 0 0;
}
.big {
  .decoration {
    right: -9px;
    left: unset;
    width: 45px;
    height: 15px;
  }
  h2 {
    font-size: x-large;
    direction: rtl;
  }
}
</style>