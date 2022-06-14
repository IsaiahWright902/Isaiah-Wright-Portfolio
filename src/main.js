import "bootstrap";
import "bootstrap/dist/css/bootstrap.min.css";
import { createApp } from "vue";
import App from "./App.vue";
import { router } from "./router";

import AOS from "aos";
import "aos/dist/aos.css";

const root = createApp(App);

root.use(AOS.init());

root.use(router).mount("#app");
