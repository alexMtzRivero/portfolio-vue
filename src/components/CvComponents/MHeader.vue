<template>
  <div :class="`${right ? 'right' : 'left'} ${secondary ? 'secondary' : ''}`">
    <h1>
      <div class="decoration"></div>
      <slot></slot>
    </h1>
  </div>
</template>

<script>
export default {
  props: {
    secondary: {
      type: Boolean,
      default: false,
    },
    right: {
      type: Boolean,
      default: false,
    },
  },
};
</script>

<style lang="scss" scoped>
h1 {
  color: #282828;
  display: list-item;
  margin-right: 40px;
}

.left {
  .decoration {
    border: solid #282828 1px;
    width: 40px;
    position: relative;
    left: -60px;
    top: 18px;
  }
}
.right {
  h1 {
    direction: rtl;
  }
  .decoration {
    border: solid #282828 1px;
    width: 40px;
    position: relative;
    right: -60px;
    top: 18px;
  }
}
.black-apendice {
  h1 {
    color: #d9dd0b;
  }
  .decoration {
    border-color: #d9dd0b;
  }
}
</style>