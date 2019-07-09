import Vue from 'vue'
// ルーティングの定義をインポートする
import router from './app/router'

// ルートコンポーネントをインポートする
import App from './app/App.vue'

import store from './app/store'

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