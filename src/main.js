import Vue from "vue";
import App from "./App.vue";
import router from "./router";
import VueRouter from "vue-router";

import Eagle from "eagle.js";
// import animate.css for slide transition
import "animate.css";

Vue.use(VueRouter);
Vue.use(Eagle);
Vue.config.productionTip = false;

new Vue({
  render: h => h(App),
  router
}).$mount("#app");
