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
              >Github
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="16"
                height="16"
                fill="currentColor"
                class="bi bi-github"
                viewBox="0 0 16 16"
              >
                <path
                  d="M8 0C3.58 0 0 3.58 0 8c0 3.54 2.29 6.53 5.47 7.59.4.07.55-.17.55-.38 0-.19-.01-.82-.01-1.49-2.01.37-2.53-.49-2.69-.94-.09-.23-.48-.94-.82-1.13-.28-.15-.68-.52-.01-.53.63-.01 1.08.58 1.23.82.72 1.21 1.87.87 2.33.66.07-.52.28-.87.51-1.07-1.78-.2-3.64-.89-3.64-3.95 0-.87.31-1.59.82-2.15-.08-.2-.36-1.02.08-2.12 0 0 .67-.21 2.2.82.64-.18 1.32-.27 2-.27.68 0 1.36.09 2 .27 1.53-1.04 2.2-.82 2.2-.82.44 1.1.16 1.92.08 2.12.51.56.82 1.27.82 2.15 0 3.07-1.87 3.75-3.65 3.95.29.25.54.73.54 1.48 0 1.07-.01 1.93-.01 2.2 0 .21.15.46.55.38A8.012 8.012 0 0 0 16 8c0-4.42-3.58-8-8-8z"
                /></svg
            ></a>
          </li>
          <li class="nav-item">
            <a
              class="nav-link"
              href="https://www.linkedin.com/in/isaiah-wright-4b89191a3/"
              target="_blank"
              >Linkedin
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="16"
                height="16"
                fill="currentColor"
                class="bi bi-linkedin"
                viewBox="0 0 16 16"
              >
                <path
                  d="M0 1.146C0 .513.526 0 1.175 0h13.65C15.474 0 16 .513 16 1.146v13.708c0 .633-.526 1.146-1.175 1.146H1.175C.526 16 0 15.487 0 14.854V1.146zm4.943 12.248V6.169H2.542v7.225h2.401zm-1.2-8.212c.837 0 1.358-.554 1.358-1.248-.015-.709-.52-1.248-1.342-1.248-.822 0-1.359.54-1.359 1.248 0 .694.521 1.248 1.327 1.248h.016zm4.908 8.212V9.359c0-.216.016-.432.08-.586.173-.431.568-.878 1.232-.878.869 0 1.216.662 1.216 1.634v3.865h2.401V9.25c0-2.22-1.184-3.252-2.764-3.252-1.274 0-1.845.7-2.165 1.193v.025h-.016a5.54 5.54 0 0 1 .016-.025V6.169h-2.4c.03.678 0 7.225 0 7.225h2.4z"
                /></svg
            ></a>
          </li>
          <li class="nav-item">
            <a
              target="blank"
              class="nav-link"
              href="https://github.com/IsaiahWright902/Resume/blob/215ee8da53acc922be5782ee51cce69cd891a57b/Isaiah%20Resume.pdf"
              >Resume
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="16"
                height="16"
                fill="currentColor"
                class="bi bi-file-earmark-person"
                viewBox="0 0 16 16"
              >
                <path d="M11 8a3 3 0 1 1-6 0 3 3 0 0 1 6 0z" />
                <path
                  d="M14 14V4.5L9.5 0H4a2 2 0 0 0-2 2v12a2 2 0 0 0 2 2h8a2 2 0 0 0 2-2zM9.5 3A1.5 1.5 0 0 0 11 4.5h2v9.255S12 12 8 12s-5 1.755-5 1.755V2a1 1 0 0 1 1-1h5.5v2z"
                /></svg
            ></a>
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
