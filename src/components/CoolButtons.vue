<template>
  <div class="container">
    <div class="row pt-5">
      <div class="col-12">
        <p class="project-heading">Flexible Buttons</p>
        <p class="descriptive-text">
          One day at work I looked at a file I was working in and realized there
          were way to many custom button classes. I needed pretty custom buttons
          that gave the application that unique look, but did it have to come at
          the price of messy CSS that was hard to navigate? I thought to myself;
          why don't I just make a SCSS file full of button styles that can
          handle any color, size, or shape that I need. That way I can export
          the file globally and have beautiful buttons throughout my entire
          application that if needed can be completely changed by editing one
          class in the button file. Well, thats exactly what I did! Below this
          text i've made a small demo so you can see the flexibility of these
          buttons. You can easily change the below buttons style by selecting
          different options from the dropdowns. Enjoy :)
        </p>
      </div>
    </div>

    <div class="row pt-1">
      <div class="col-md-4 pt-2">
        <div class="card">
          <div class="card-body">
            <div class="row">
              <div class="col-12 text-center">
                <p class="dropdownHeading">Change Color:</p>
                <select
                  v-model="state.buttonColor"
                  class="form-select"
                  aria-label="Default select example"
                >
                  <option value="green">Green</option>
                  <option value="red">Red</option>
                  <option value="blue">Blue</option>
                  <option value="purple">Purple</option>
                  <option value="pink">Pink</option>
                  <option value="yellow">Yellow</option>
                  <option value="orange">Orange</option>
                  <option value="grey">Grey</option>
                  <option value="black">Black</option>
                </select>
              </div>
            </div>
            <div class="row pt-3">
              <div class="col-12 text-center">
                <p>
                  <code>btn btn--{{ state.buttonColor }}</code>
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div class="col-md-4 pt-2">
        <div class="card">
          <div class="card-body">
            <div class="row">
              <div class="col-12 text-center">
                <p class="dropdownHeading">Change Style:</p>
                <select
                  v-model="state.buttonStyle"
                  class="form-select"
                  aria-label="Default select example"
                >
                  <option value="">Solid</option>
                  <option value="-outline">Outline</option>
                  <option value="-rounded">Rounded</option>
                  <option value="-gradient">Gradient</option>
                </select>
              </div>
            </div>
            <div class="row pt-3">
              <div class="col-12 text-center">
                <p>
                  <code
                    >btn btn--{{ state.buttonColor
                    }}{{ state.buttonStyle }}</code
                  >
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div class="col-md-4 pt-2">
        <div class="card">
          <div class="card-body">
            <div class="row">
              <div class="col-12 text-center">
                <p class="dropdownHeading">Additional Modifiers:</p>
                <select
                  v-model="state.buttonModifiers"
                  class="form-select"
                  aria-label="Default select example"
                >
                  <option value="">None</option>
                  <option
                    value="btn--open"
                    v-if="state.buttonStyle === '-rounded'"
                  >
                    btn--open?
                  </option>
                  <option value="btn--sm">btn--sm</option>
                  <option value="btn--md">btn--md</option>
                  <option value="btn--lg">btn--lg</option>
                  <option value="btn--xl">btn--xl</option>
                  <option value="w-100">Width 100%</option>
                  <option value="w-75">Width 75%</option>
                  <option value="w-50">Width 50%</option>
                  <option value="w-25">Width 25%</option>
                  <option value="f-left">Float Left</option>
                  <option value="f-right">Float Right</option>
                </select>
              </div>
            </div>
            <div class="row pt-3">
              <div class="col-12 text-center">
                <p>
                  <code
                    >btn btn--{{ state.buttonColor }}{{ state.buttonStyle }}
                    {{ state.buttonModifiers }}</code
                  >
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
    <div class="row pt-5">
      <div class="col-12 text-center">
        <button :class="buttonString">Change Me!</button>
      </div>
    </div>
  </div>
</template>

<script>
import { reactive, computed } from "vue";
export default {
  name: "CoolButtons",
  setup() {
    const state = reactive({
      buttonColor: "green",
      buttonStyle: "",
      buttonModifiers: "",
    });
    return {
      state,
      buttonString: computed(
        () =>
          `btn btn--${state.buttonColor}${state.buttonStyle} ${state.buttonModifiers}`
      ),
    };
  },
};
</script>

<style lang="scss" scoped>
@import "../assets/scss/main.scss";
.project-heading {
  font-size: 50px;
  font-weight: 300;
  @include respond(tablet) {
    text-align: center;
  }
}

.card {
  box-shadow: 0 0.25rem 0.75rem rgba(0, 0, 0, 0.4);
  outline: none;
  border: none;
  border-radius: 40px;

  line-height: 1;
  transition: all 0.5s;
  @include respond(tab-port) {
    text-align: center;
  }
  @include respond(tablet) {
    box-shadow: 0 0.25rem 0.5rem rgba(0, 0, 0, 0.4);
  }
  @include respond(phone) {
    border: none;
  }
}

.dropdownHeading {
  font-weight: 700;
}
</style>
