<template>
  <div class="loaders" v-show="isShow" id="loader">
    <div class="scanner">
      <span>Loading...</span>
    </div>
  </div>
</template>

<script>
export default {
  name: "LoadsIng",

  data() {
    return {
      isShow:false
    };
  },

  mounted() {},

  methods: {},
};
</script>

<style lang="scss" scoped>
.loaders {
  width: 100%;
  height: 100%;
  position: absolute;
  background: hwb(0deg 0% 100% / 78%);
  top: 0;
  left: 0;
}
.scanner span {
  color: transparent;
  font-size: 1.4rem;
  overflow: hidden;
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
}

.scanner span::before {
  content: "Loading...";
  position: absolute;
  top: 0;
  left: 0;
  width: 0;
  height: 100%;
  border-right: 4px solid #17feff;
  overflow: hidden;
  color: #17feff;
  animation: load91371 2s linear infinite;
}

@keyframes load91371 {
  0%,
  10%,
  100% {
    width: 0;
  }

  10%,
  20%,
  30%,
  40%,
  50%,
  60%,
  70%,
  80%,
  90%,
  100% {
    border-right-color: transparent;
  }

  11%,
  21%,
  31%,
  41%,
  51%,
  61%,
  71%,
  81%,
  91% {
    border-right-color: #17feff;
  }

  60%,
  80% {
    width: 100%;
  }
}
</style>
