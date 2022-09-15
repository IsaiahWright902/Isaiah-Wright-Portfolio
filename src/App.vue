<template>
  <header>
    <Navbar></Navbar>
  </header>
  <main>
    <router-view />
  </main>
  <Footer></Footer>
</template>

<script>
import { reactive } from "vue";
import Navbar from "./components/Navbar.vue";
import Footer from "./components/Footer.vue";
export default {
  name: "App",
  setup() {
    const state = reactive({});
  },
  components: {
    Navbar,
    Footer,
  },
};
</script>

<style lang="scss">
@import "./assets/scss/main.scss";
</style>
