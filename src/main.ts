import Vue from 'vue'
import firebase from 'firebase'
import App from './App.vue'
import router from './router'
import store from './store'

Vue.config.productionTip = false

// Initialize Firebase
const firebaseConfig = {
  apiKey: "AIzaSyBfQ4sPkYhArzepkzo4uKDHYloPHt4LblM",
  authDomain: "hit-the-letter.firebaseapp.com",
  databaseURL: "https://hit-the-letter.firebaseio.com",
  projectId: "hit-the-letter",
  storageBucket: "hit-the-letter.appspot.com",
  messagingSenderId: "991065049074",
  appId: "1:991065049074:web:0eb457e73b8b21cf748d6b",
  measurementId: "G-ZM80VG8X2V"
};

firebase.initializeApp(firebaseConfig);

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')
