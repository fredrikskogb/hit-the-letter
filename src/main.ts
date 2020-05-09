import Vue from 'vue'
import firebase from 'firebase'
import { firebaseConfig } from '../firebase-config'
import App from './App.vue'
import router from './router'
import store from './store'

Vue.config.productionTip = false;

firebase.initializeApp(firebaseConfig);

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')
