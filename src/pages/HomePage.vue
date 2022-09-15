<template>
  <div class="container-fluid pt-5">
    <section>
      <AboutBio />
    </section>

    <section class="experience-section">
      <Experience />
    </section>

    <section>
      <Skills />
    </section>

    <section>
      <Projects />
    </section>

    <section>
      <CoolButtons />
    </section>

    <section>
      <ContactMe />
    </section>

    <div class="row pt-5"></div>
  </div>
</template>

<script>
import { computed, reactive } from "vue";

import CoolButtons from "../components/CoolButtons.vue";
import AboutBio from "../components/AboutBio.vue";
import Experience from "../components/Experience.vue";
import Skills from "../components/Skills.vue";
import Projects from "../components/Projects.vue";
import ContactMe from "../components/ContactMe.vue";
export default {
  name: "Home",
  components: {
    AboutBio,
    Experience,
    Skills,
    Projects,
    CoolButtons,
    ContactMe,
  },
};
</script>

<style lang="scss">
@import "../assets/scss/main.scss";
.container-fluid {
  padding: 0;
}

.hero-text {
  font-family: "Montserrat", sans-serif;
  font-weight: 400;
  font-size: 40px;
  transition: all 0.5s;
  @include respond(tab-port) {
    text-align: center;
    font-size: 30px;
  }
}

.hero-text-small {
  font-size: 25px;
}

.card {
  box-shadow: 0 0.25rem 0.75rem rgba(0, 0, 0, 0.4);
  outline: none;
  border: none;
  border-radius: 40px;
  padding: 2rem 0;
  line-height: 1;

  transition: all 0.5s;
  @include respond(tab-port) {
    text-align: center;
  }
  @include respond(phone) {
    border: none;
  }
  &:hover {
    box-shadow: 0 0.25rem 1rem rgba($blue, 0.4);
  }
}

.center-tablet-tab-port {
  @include respond(tab-port) {
    text-align: center;
  }
}
</style>
