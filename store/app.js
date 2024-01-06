export const state = () => ({
  loading: false
})

export const getters = {
  getLoading(state) {
    return state.loading
  }
}

export const mutations = {
  setLoading(state, payload) {
    state.loading = payload
  }
}
