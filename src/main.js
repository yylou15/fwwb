import Vue from 'vue'
import App from './App.vue'
import iView from "view-design";
import 'view-design/dist/styles/iview.css';
import VueRouter from 'vue-router'
import {router} from "@/router";

Vue.use(VueRouter)
Vue.config.productionTip = false
Vue.use(iView)


new Vue({
  render: h => h(App),
  router: router
}).$mount('#app')
