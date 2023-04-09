import { firebaseApp } from './repositories/Firebase'
import { initializeApp } from 'firebase/app'
import { getAnalytics } from 'firebase/analytics'
import { createApp } from 'vue'
import { VueFire, VueFireAuth } from 'vuefire'
import App from './components/App.vue'

import './assets/main.css'

// console.log(`Vue version: ${Vue}`)

// Initialize Firebase app
const analytics = getAnalytics(firebaseApp)

const app = createApp(App)
app.config.compilerOptions.isCustomElement = (tag) => {
  return tag.startsWith('Icon')
}
app.use(VueFire, {
  firebaseApp,
  modules: [VueFireAuth()]
})

app.mount('#app')
