import { configure } from "@storybook/vue";

import Vue from "vue";
import Vuex from "vuex";
import VueRouter from "vue-router";

import MyButton from "../src/stories/Button.vue";

Vue.component("my-button", MyButton);
Vue.use(Vuex);
// Vue.use(VueRouter);

function loadStories() {
  require("../src/stories");
}

configure(loadStories, module);
