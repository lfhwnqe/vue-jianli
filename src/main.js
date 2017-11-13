// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.

import Vue from 'vue'
// import App from './App'
import Divhead from "./components/Divhead"
import "normalize.css"
import "./assets/reset.scss"

Vue.config.productionTip = false

// Vue.component("myname", {
//   template: "<p> i am {{name}}</p>",
//   data() {
//     return {
//       name: "nuo"
//     }
//   }
// })


/* eslint-disable no-new */
new Vue({
  el: '#app',
  // template: '<App/>',
  template: '<Divhead/>',
  components: {
    Divhead
  }
})
