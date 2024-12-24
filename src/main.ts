import './assets/index.css'

import { createApp } from 'vue'
import { createPinia } from 'pinia'

import App from './App.vue'
import router from './router'

import { OhVueIcon, addIcons } from 'oh-vue-icons'
import { FaFlag, RiZhihuFill } from 'oh-vue-icons/icons'
// import '../node_modules/flowbite-vue/dist/index.css'
// Import the functions you need from the SDKs you need
import { initializeApp } from 'firebase/app'
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: 'AIzaSyAIlP5GVKtDqZDJnSSQMCp9TyYy4SnWIiQ',
  authDomain: 'canastas-cestas.firebaseapp.com',
  projectId: 'canastas-cestas',
  storageBucket: 'canastas-cestas.firebasestorage.app',
  messagingSenderId: '1077265926121',
  appId: '1:1077265926121:web:a5e0e6070362161b75ad78',
}

// Initialize Firebase
const appFirebase = initializeApp(firebaseConfig)

const app = createApp(App)
addIcons(FaFlag, RiZhihuFill)
app.component('v-icon', OhVueIcon)

app.use(createPinia())
app.use(router)

app.mount('#app')
