import { createApp } from 'vue'
import App from './App.vue'

import { createPinia } from 'pinia'
import router from './router'

import { library } from '@fortawesome/fontawesome-svg-core'
import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome'
import { faBars, faXmark, faGlobe } from '@fortawesome/free-solid-svg-icons'
import { faFacebookF, faInstagram } from '@fortawesome/free-brands-svg-icons'

library.add(faBars, faXmark, faFacebookF, faInstagram, faGlobe)

const app = createApp(App)

app.use(createPinia())
app.use(router)
app.component('font-awesome-icon', FontAwesomeIcon)

app.mount('#app')