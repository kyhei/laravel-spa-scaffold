import { NOT_FOUND } from '../../../util'
import router from '../../router'

const state = {
  code: null,
  message: null
}

const mutations = {
  setCode(state, code) {
    state.code = code

    if (state.code === NOT_FOUND) {
      router.push({ path: '/not-found' })
    }
  },
  setMessage(state, message) {
    state.message = message
  }
}

export default {
  namespaced: true,
  state,
  mutations
}
