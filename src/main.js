import { i18n } from '@/plugins/i18n'
import '@/plugins/vue-composition-api'
import '@/styles/styles.scss'
import Vue from 'vue'
import App from './App.vue'
import { auth, onAuthStateChanged } from './firebase'

import './plugins/acl'
import vuetify from './plugins/vuetify'
import router from './router'
import store from './store'

Vue.config.productionTip = false

new Vue({
  router,
  created() {
    onAuthStateChanged(auth, user => {
      if (user) {
        user.getIdToken().then(token => {
          localStorage.setItem('accessToken', token)
        })
      } else {
        localStorage.removeItem('accessToken')
      }
    })
  },
  store,
  i18n,
  vuetify,
  render: h => h(App),
}).$mount('#app')
