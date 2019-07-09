import Vue from 'vue'
import Vuex from 'vuex'

import auth from './System/auth'
import error from './System/error'
import system from './System/system'

import models from './Models'

Vue.use(Vuex)

const store = new Vuex.Store({
  modules: {
    auth,
    error,
    system,
    models: {
      namespaced: true,
      modules: {
        ...models
      }
    }
  }
})

export default store