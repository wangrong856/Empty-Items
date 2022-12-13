<template>
  <svg class="svg-icon" aria-hidden="true" :style="{ width: w + 'rem', height: h + 'rem'}">
    <use :xlink:href="iconName" :style="{ fill: color }"></use>
  </svg>
</template>

<script>
export default {
  name: "svg-icon",
  props: {
    iconClass: {
      type: String,
      required: true,
    },
    color: {
      type: String,
      default: "#000",
    },
    w: {
      type: [String,Number],
      default: "1",
    },
    h: {
      type: [String,Number],
      default: "1",
    },
  },
  computed: {
    iconName() {
      return `#icon-${this.iconClass}`;
    },
  },
};
</script>

<style>
.svg-icon {
  /* 设置图标大小 */
  /* width: 1rem; */
  /* height: 1rem; */
  /* 用什么颜色来填充图标，如果图标自身有色彩则不再填充 */
  /* fill: #000; */
}
</style>
