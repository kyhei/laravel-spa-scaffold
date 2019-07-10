import Vue from 'vue'
import router from './app/router'
import store from './app/store'
import App from './app/App.vue'

const createApp = async () => {
  await store.dispatch('auth/currentUser')

  new Vue({
    el: '#app',
    router,
    store,
    components: { App },
    template: '<App />'
  })
}

createApp()