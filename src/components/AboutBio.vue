<template>
  <div class="container">
    <div class="row pt-5 reverse-row-mobile">
      <div class="col-xl-6 order-1">
        <h1 class="hero-text">
          <span class="hero-text-small">Hi, my name is</span> <br />
          <span class="hero-text-name"> Isaiah Wright </span><br />
          I build full stack applications :)
        </h1>
        <p class="descriptive-text pt-1">
          I have always been interested in computers and how they work. When I
          click a button I find myself asking: Why does something happen? What
          is the process and how does this work? These questions would swirl
          around my head and I was determined to find an answer. The more
          knowledge I gained about computers, I found myself wanting to
          understand them further and began building applications.
        </p>
        <p class="descriptive-text pt-4">
          To my luck there was a great coding bootcamp in my area where I could
          go to professionally grow my skills. I went through the 13 week
          program, every week asking myself even more questions. As I learned
          about the industry I fell in love with it even more. I enjoyed
          learning how to develop applications, making me realize that software
          development was a passion of mine. I love what i do, and I strive to
          make everything I work on the best it can be.
        </p>
      </div>
      <div class="col-xl-6 text-center order-xl-1">
        <img
          class="img-fluid hero-image"
          src="../assets/img/headshotNew.jpeg"
          alt=""
        />
      </div>
    </div>
    <div class="row">
      <div class="col-12">
        <p class="descriptive-text">
          I am very challenge motivated. Some of my strengths are determination,
          discipline, commitment and grit. I am a dedicated individual and do
          not give up easily. I look forward to what life has to offer me and
          view everything optimistically. I am excited to push myself to grow
          both personally and professionally. I am a great team player and enjoy
          encouraging those around me.
        </p>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "AboutBio",
};
</script>

<style lang="scss" scoped>
@import "../assets/scss/main.scss";

.hero-text-name {
  font-size: 60px;
  font-weight: 600;
}

.hero-image {
  width: 500px;
  clip-path: circle();
  overflow: hidden;
  margin-top: -8%;
  transition: all 0.5s;
  @include respond(tab-port) {
    width: 350px;
  }
  @include respond(tablet) {
    width: 300px;
  }
  @include respond(phone) {
    width: 250px;
  }
}
</style>
