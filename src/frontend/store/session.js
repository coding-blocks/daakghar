export const state = () => ({
  token: null,
  user: null,
  isAuthenticated: false
})


export const mutations = {
  setUser(state, user) {
    if (user.id) {
      state.user = user
      state.isAuthenticated = true
    }
  },
  setToken(state, token) {
    state.token = token
  }
}
