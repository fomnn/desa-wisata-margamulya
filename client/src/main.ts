import './assets/main.css'

import { createApp } from 'vue'
import OpenLayersMap from 'vue3-openlayers'
import { autoAnimatePlugin } from '@formkit/auto-animate/vue'
import App from './App.vue'
import router from './router'

import 'vue3-carousel/dist/carousel.css'

import 'vue3-openlayers/styles.css'

const app = createApp(App)

app.use(router)
app.use(OpenLayersMap)
app.use(autoAnimatePlugin)

app.mount('#app')
