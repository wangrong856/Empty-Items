<template>
  <div class="loaders" v-show="isShow" id="loader">
    <div class="scanner">
      <div class="loader">
        <span style="--i: 1"></span>
        <span style="--i: 2"></span>
        <span style="--i: 3"></span>
        <span style="--i: 4"></span>
        <span style="--i: 5"></span>
        <span style="--i: 6"></span>
        <span style="--i: 7"></span>
        <span style="--i: 8"></span>
        <span style="--i: 9"></span>
        <span style="--i: 10"></span>
        <span style="--i: 11"></span>
        <span style="--i: 12"></span>
        <span style="--i: 13"></span>
        <span style="--i: 14"></span>
        <span style="--i: 15"></span>
        <span style="--i: 16"></span>
        <span style="--i: 17"></span>
        <span style="--i: 18"></span>
        <span style="--i: 19"></span>
        <span style="--i: 20"></span>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "LoadsIng",

  data() {
    return {
      isShow: false,
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
  position: fixed;
  background: hwb(0deg 0% 100% / 78%);
  top: 0;
  left: 0;
}
.scanner {
  position: absolute;
  top: 40%;
  left: 50%;
  transform: translate(-50%, -50%);
}
.loader {
  position: relative;
  width: 88px;
    height: 88px;
}

.loader span {
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  transform: rotate(calc(18deg * var(--i)));
}

.loader span::before {
  content: "";
  position: absolute;
  top: 0;
  left: 0;
  width: 15px;
  height: 15px;
  border-radius: 50%;
  background: #FCF7FF;
  box-shadow: 0 0 10px #FCF7FF, 0 0 20px #FCF7FF, 0 0 40px #FCF7FF,
    0 0 60px #FCF7FF, 0 0 80px #FCF7FF, 0 0 100px #FCF7FF;
  animation: animate34 2s linear infinite;
  animation-delay: calc(0.1s * var(--i));
}
@keyframes animate34 {
  0% {
    transform: scale(1);
  }

  80%,
  100% {
    transform: scale(0);
  }
}
</style>
