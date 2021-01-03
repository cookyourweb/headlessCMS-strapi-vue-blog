import Vue from "vue";
import App from "./App.vue";

import VueApollo from "vue-apollo";
import apolloClient from "./vue-apollo";

Vue.config.productionTip = false;

Vue.use(VueApollo);

const apolloProvider = new VueApollo({
  defaultClient: apolloClient
});

new Vue({
  apolloProvider,
  render: h => h(App)
}).$mount("#app");