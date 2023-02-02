<template>
  <div class="app-wrapper">
    <sidebar-container>

    </sidebar-container>
    <div class="main-container">
      <nav-bar>

      </nav-bar>
      <right-panel>

      </right-panel>
    </div>
  </div>
</template>

<script>
import NavBar from "./components/Navbar.vue";
import RightPanel from './components/RightPanel.vue';
import SidebarContainer from './components/SidebarContainer.vue';
export default {
  components: { NavBar, RightPanel, SidebarContainer },
  name: "VueAppIndex",

  data() {
    return {};
  },

  mounted() {},

  methods: {},
};
</script>

<style lang="scss" scoped>
.app-wrapper {
  position: relative;
  height: 100%;
  width: 100%;
  display: flex;
}


.main-container {
  flex: 1;
  background: rgb(239, 241, 244);
  display: flex;
  flex-direction: column;
}
</style>
