<template>
    <svg class="svg-icon" aria-hidden="true">
      <use :xlink:href="iconName"></use>
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
      },
      computed: {
        iconName() {
          return `#icon-${this.iconClass}`
        },
      },
    }
  </script>
   
  <style>
    .svg-icon {
      /* 设置图标大小 */
      width: 2em;
      height: 2em;
      /* 用什么颜色来填充图标，如果图标自身有色彩则不再填充 */
      fill: #000;
    }
  </style>