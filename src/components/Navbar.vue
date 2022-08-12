<template>
  <nav
    :class="{
      'navbar navbar-expand-lg navbar-dark bg-dark': state.showNav,
      'navbar navbar-expand-lg navbar-dark bg-dark navbar--hidden':
        !state.showNav,
    }"
  >
    <div class="container">
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
              href="https://github.com/IsaiahWright902/Resume/blob/215ee8da53acc922be5782ee51cce69cd891a57b/Isaiah%20Resume.pdf"
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
export default {
  name: "Navbar",
  setup() {
    const state = reactive({
      showNav: true,
      scrollValue: 0,
      lastScrollPosition: 0,
      onScroll() {
        if (window.scrollY < 0) {
          return;
        }
        if (
          Math.abs(window.scrollY - state.lastScrollPosition) <
          state.scrollValue
        ) {
          return;
        }
        state.showNav = window.scrollY < state.lastScrollPosition;
        state.lastScrollPosition = window.scrollY;
      },
    });
    onMounted(async () => {
      state.lastScrollPosition = window.scrollY;
      window.addEventListener("scroll", state.onScroll);
      const viewportMeta = document.createElement("meta");
      viewportMeta.name = "viewport";
      viewportMeta.content = "width=device-width, initial-scale=1";
      document.head.appendChild(viewportMeta);
    });
    return {
      state,
    };
  },
  methods: {},
};
</script>

<style lang="scss" scoped>
@import "../assets/scss/main.scss";

.navbar.navbar--hidden {
  transform: translate3d(0, -100%, 0);
}

nav {
  font-family: "Montserrat", sans-serif;
  position: fixed;
  width: 100%;
  z-index: 100000;
  transition: all 0.5s;
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
