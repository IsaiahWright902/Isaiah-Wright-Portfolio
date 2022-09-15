<template>
  <div class="container">
    <div class="row pt-5">
      <div class="col-12">
        <h2 class="section-heading">Skills & Strengths:</h2>
      </div>
    </div>

    <div class="row pt-5 text-center">
      <div class="col-md-3 col-6">
        <img
          class="skill-logo"
          src="../assets/img/Skills/javascript.png"
          alt=""
        />
        <p class="skill-text">JavaScript</p>
      </div>
      <div class="col-md-3 col-6">
        <img
          class="skill-logo"
          src="../assets/img/Skills/typescript.png"
          alt=""
        />
        <p class="skill-text">TypeScript</p>
      </div>
      <div class="col-md-3 col-6" style="position: relative">
        <img class="skill-logo" src="../assets/img/Skills/html5.png" alt="" />
        <p class="skill-text">HTML</p>
      </div>
      <div class="col-md-3 col-6">
        <img class="skill-logo" src="../assets/img/Skills/sass.png" alt="" />
        <p class="skill-text">SCSS</p>
      </div>
    </div>
    <div class="row pt-3 text-center">
      <div class="col-md-3 col-6">
        <img class="skill-logo" src="../assets/img/Skills/nodejs.png" alt="" />
        <p class="skill-text">Node.js</p>
      </div>
      <div class="col-md-3 col-6">
        <img class="skill-logo" src="../assets/img/Skills/vuejs.png" alt="" />
        <p class="skill-text">Vue</p>
      </div>
      <div class="col-md-3 col-6">
        <img class="skill-logo" src="../assets/img/Skills/react.png" alt="" />
        <p class="skill-text">React</p>
      </div>
      <div class="col-md-3 col-6">
        <img class="skill-logo" src="../assets/img/Skills/github.png" alt="" />
        <p class="skill-text">Git</p>
      </div>
    </div>
    <div class="row pt-1">
      <div class="col-md-4 pt-4 text-center">
        <div class="card">
          <p class="experience-heading">Additional Languages:</p>
          <p class="skill-text">Knowledge of C#</p>
          <!-- <p class="skill-text">Knowledge of .Net</p> -->
          <p class="skill-text">PHP</p>
          <p class="skill-text">MySQL</p>
        </div>
      </div>
      <div class="col-md-4 pt-4 text-center">
        <div class="card">
          <p class="experience-heading">Additional Technologies:</p>
          <p class="skill-text">Express</p>
          <p class="skill-text">Mongoose</p>
          <!-- <p class="skill-text">Mongo DB</p> -->
          <p class="skill-text">Vite</p>
          <p class="skill-text">Heroku</p>
        </div>
      </div>
      <div class="col-md-4 pt-4 text-center">
        <div class="card">
          <p class="experience-heading">Personal Skills:</p>
          <p class="skill-text">Communication</p>
          <p class="skill-text">Problem Solving</p>
          <p class="skill-text">Critical Thinking</p>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "Skills",
};
</script>

<style lang="scss">
@import "../assets/scss/main.scss";
.skill-logo {
  width: 200px;
  transition: all 0.5s;
  border-radius: 40px;
  @include respond(phone) {
    width: 150px;
  }
}

.skill-text {
  font-family: "Montserrat", sans-serif;
  font-weight: 400;
  letter-spacing: 1px;
}

.skills-additional {
  font-size: 18px;
  line-height: 0.9;
  @include respond(phone) {
    font-size: 14px;
  }
}
</style>
