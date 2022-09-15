<template>
  <div class="container">
    <div class="row pt-5">
      <div class="col-12">
        <h2 class="section-heading">Contact Me:</h2>
        <p class="hero-text hero-text-small">
          Like what you see? Reach out to me today!
        </p>
      </div>
    </div>
    <form @submit.prevent="sendMessage">
      <div class="row pt-3">
        <div class="col-md-6">
          <label>Name</label>
          <input
            name="name"
            v-model="state.name"
            type="text"
            class="form-control"
          />
        </div>
        <div class="col-md-6">
          <label>Email</label>
          <input
            name="email"
            v-model="state.email"
            type="text"
            class="form-control"
          />
        </div>
      </div>
      <div class="row pt-3">
        <div class="col-md-6">
          <label>Company</label>
          <input
            name="company"
            v-model="state.company"
            type="text"
            class="form-control"
          />
        </div>
        <div class="col-md-6">
          <label>Role</label>
          <input
            name="role"
            v-model="state.role"
            type="text"
            class="form-control"
          />
        </div>
      </div>
      <div class="row pt-3">
        <div class="col-12">
          <label>Message</label>
          <textarea
            name="message"
            v-model="state.message"
            id=""
            cols="30"
            rows="10"
            style="height: 200px"
            class="form-control"
          ></textarea>
        </div>
      </div>
      <div class="row pt-3">
        <div class="col-12 text-center">
          <button type="submit" id="sendButton" class="btn btn--green-rounded">
            Send Message
          </button>
        </div>
      </div>
    </form>
    <div class="row pt-5">
      <div class="col-12 text-center">
        <h2 class="section-heading">Thanks For Reviewing My Page!</h2>
        <p class="hero-text hero-text-small">
          Im looking forward to hearing from you in the near future :)
        </p>
      </div>
    </div>
  </div>
</template>

<script>
import { computed, reactive } from "vue";
import emailjs from "@emailjs/browser";
export default {
  name: "ContactMe",
  setup() {
    const state = reactive({
      name: "",
      email: "",
      company: "",
      role: "",
      message: "",
    });
    return {
      state,
      skills: computed(() => state.skills),
      sendMessage(e) {
        try {
          emailjs.sendForm(
            "service_dqx1tu1",
            "template_zb0vluj",
            e.target,
            "user_tYgYSfElJjF8aE5hTX1ws",
            {
              name: this.name,
              email: this.email,
              company: this.company,
              role: this.role,
              message: this.message,
            }
          );
        } catch (error) {
          console.log(error);
        }
        state.name = "";
        state.email = "";
        state.company = "";
        state.role = "";
        state.message = "";
        let btn = document.getElementById("sendButton");
        btn.innerText = "Message Sent! Thank you!";
        btn.disabled = true;
      },
    };
  },
};
</script>

<style scoped lang="scss">
@import "../assets/scss/main.scss";
label {
  font-weight: 400;
  font-size: 20px;
  font-family: "Montserrat", sans-serif;
}
</style>
