<template>
  <div class="container-fluid">
    <div class="row">
      <div class="col-12 text-center">
        <p class="footer">
          Isaiah Wright
          <span class="small-footer"> - Full Stack Developer</span>
          <br />
        </p>
      </div>
    </div>
    <div class="row">
      <div class="col-12 text-center">
        <a href="mailto:icwright902@gmail.com" target="blank" class="email"
          >icwright902@gmail.com</a
        >
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "Footer",
};
</script>

<style lang="scss" scoped>
@import "../assets/scss/main.scss";

.container-fluid {
  background-color: rgba(0, 0, 0, 1);
}

.footer {
  font-family: "Montserrat", sans-serif;
  font-size: 30px;
  font-weight: 300;
  padding-top: 25px;
  display: flex;
  color: white;
  align-items: center;
  justify-content: center;
  @include respond(phone) {
    font-size: 22px;
  }
}

.small-footer {
  font-size: 20px;
  font-style: italic;
  @include respond(phone) {
    font-size: 12px;
  }
}

.email {
  font-family: "Montserrat", sans-serif;
  font-size: 12px;
  text-decoration: none;
}
</style>
