import Vue from "vue";
import App from "./components/App.vue";
import router from "./router";
import store from "./store";
import "./registerServiceWorker";
import VueAxios from 'vue-axios';
import axios from 'axios';
Vue.config.productionTip = false;

import VueTippy from "vue-tippy";
import VModal from "vue-js-modal";

Vue.use(VModal, { dynamic: true, injectModalsContainer: true });
Vue.use(VueAxios, axios)
Vue.use(VueTippy);
// or
new Vue({
  router,
  store,
  render: h => h(App)
}).$mount("#app");
