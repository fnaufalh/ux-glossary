import firebase from 'firebase/app'
import { getFirestore, collection } from 'firebase/firestore'
import { createApp } from 'vue'
import { VueFire, VueFireAuth } from 'vuefire'
import App from './App.vue'

import './assets/main.css'

const firebaseConfig = {
  apiKey: 'AIzaSyCT63rUyrUMdX6czWWA2LyWi9EclOIh-k0',
  authDomain: 'ux-glossary.firebaseapp.com',
  projectId: 'ux-glossary',
  storageBucket: 'ux-glossary.appspot.com',
  messagingSenderId: '356601921534',
  appId: '1:356601921534:web:ac48e797ee476b3ef28aaf',
  measurementId: 'G-YV036FMFVG'
}

// Initialize Firebase app
export const firebaseApp = firebase.initializeApp(firebaseConfig)

const db = getFirestore(firebaseApp)

console.log(db)

export const userRef = collection(db, 'user')

const app = createApp(App)

app.use(VueFire, {
  firebaseApp,
  modules: [VueFireAuth()]
})

app.mount('#app')
