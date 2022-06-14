<template>
  <header>
    <Navbar></Navbar>
  </header>
  <main>
    <router-view />
  </main>
</template>

<script>
import { computed, reactive } from "vue";
import Navbar from "./components/Navbar.vue";
export default {
  name: "App",
  setup() {
    const state = reactive({});
  },
  components: {
    Navbar,
  },
};
</script>

<style lang="scss">
@import "./assets/scss/main.scss";
</style>
