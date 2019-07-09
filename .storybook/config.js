import { configure } from '@storybook/vue'
import { addDecorator } from '@storybook/vue'
import Vue from 'vue'
import Vuex from 'vuex'
import VueRouter from 'vue-router'

Vue.use(Vuex)
Vue.use(VueRouter)

const storeOption = {
  modules: {
    cond: {
      namespaced: true,
      getters: {

      },
      actions: {

      }
    }
  }
}

addDecorator(() => {
  return {
    template: `<story/>`,
    store: new Vuex.Store(storeOption),
    router: new VueRouter({
      mode: 'history',
      base: '/',
      scrollBehavior() {
        return { x: 0, y: 0 }
      },
      routes: []
    })
  }
})

const req = require.context('../resources/js/stories', true, /.stories.js$/);
function loadStories() {
  req.keys().forEach(filename => req(filename));
}


configure(loadStories, module)