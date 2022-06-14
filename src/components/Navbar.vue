<template>
  <nav class="navbar navbar-expand-lg navbar-dark bg-dark">
    <div class="container-fluid">
      <a class="navbar-brand mx-2" href="#"
        >Isaiah Wright <span class="small-brand"> - Full Stack Developer</span>
      </a>
      <button
        class="navbar-toggler"
        type="button"
        data-bs-toggle="collapse"
        data-bs-target="#navbarSupportedContent"
        aria-controls="navbarSupportedContent"
        aria-expanded="false"
        aria-label="Toggle navigation"
      >
        <span class="navbar-toggler-icon"></span>
      </button>
      <div class="collapse navbar-collapse" id="navbarSupportedContent">
        <ul class="navbar-nav ms-auto mb-2 mb-lg-0">
          <li class="nav-item">
            <a
              class="nav-link"
              aria-current="page"
              href="https://github.com/IsaiahWright902"
              target="_blank"
              >Github</a
            >
          </li>
          <li class="nav-item">
            <a
              class="nav-link"
              href="https://www.linkedin.com/in/isaiah-wright-4b89191a3/"
              target="_blank"
              >Linkedin</a
            >
          </li>
          <li class="nav-item">
            <a
              target="blank"
              class="nav-link"
              href="https://github.com/IsaiahWright902/Resume/blob/master/Isaiah_Wright_Resume.PDF"
              >Resume</a
            >
          </li>
        </ul>
      </div>
    </div>
  </nav>
</template>

<script>
import { computed, onMounted, reactive } from "vue";
// import Isaiah_Wright_Resume from "./Isaiah_Wright_Resume.pdf";
export default {
  name: "Navbar",
  setup() {
    const state = reactive({});
    return {
      state,
    };
  },
};
</script>

<style lang="scss" scoped>
@import "../assets/scss/main.scss";

nav {
  font-family: "Montserrat", sans-serif;
  position: fixed;
  width: 100%;
  z-index: 100000;
}

.container-fluid {
  width: 91%;
  @include respond(tablet) {
    width: 100%;
  }
}
.navbar {
  background-color: rgba(0, 0, 0, 0.85) !important;
}

.navbar-brand {
  font-family: "Montserrat", sans-serif;
  font-size: 30px;
  font-weight: 300;
  margin: 5px 0;
  display: flex;
  align-items: center;
  @include respond(phone) {
    font-size: 22px;
  }
}

.small-brand {
  font-size: 20px;
  font-style: italic;
  @include respond(phone) {
    font-size: 12px;
  }
}

.navbar-nav > .nav-item {
  margin-left: 15px;
  margin-right: 15px;
}

.nav-item {
  font-size: 18px;
  font-weight: 400;
}

.modal-body {
  position: relative;
  height: 1000px;
}

.responsive-iframe {
  position: absolute;
  top: 0;
  left: 0;
  bottom: 0;
  right: 0;
  width: 100%;
  height: 100%;
}
</style>
