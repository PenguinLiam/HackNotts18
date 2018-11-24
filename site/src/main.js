import Vue from "vue";
import App from "./App.vue";
import router from "./router";
import store from "./store";
import "./registerServiceWorker";
import { SimpleSVG } from "vue-simple-svg";

Vue.config.productionTip = false;
Vue.component("simple-svg", SimpleSVG);

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount("#app");
