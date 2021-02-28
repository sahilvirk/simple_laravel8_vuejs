require("./bootstrap");

import Vue from "vue";
import App from "./App.vue";

Vue.component("welcome", require("./components/Welcome.vue").default);

new Vue({
    render: h => h(App)
}).$mount("#app");
