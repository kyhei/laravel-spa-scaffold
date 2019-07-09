import store from '../store'

export const auth = async (to, from, next) => {

  const nonAuthPages = ['login', 'password-reset']

  store.commit('error/setCode', null)
  await store.dispatch('auth/currentUser')

  if (!store.getters['auth/check'] && nonAuthPages.indexOf(to.name) == -1) {
    //ログインしていない
    store.commit('auth/setUser', null)
    next({ name: 'login' })
  } else if (!store.getters['auth/check'] && nonAuthPages.indexOf(to.name) != -1) {
    next()
  } else if (store.getters['auth/check'] && nonAuthPages.indexOf(to.name) == -1) {
    //ログインしている　かつ　内部にアクセス
    next()
  } else if (store.getters['auth/check'] && nonAuthPages.indexOf(to.name) != -1) {
    //ログインしている　かつ　認証画面にアクセス
    next({ name: 'top' })
  }

}