export default {
  namespaced: true,
  state: {
    shallContentShowOverlay: false,
    dynamicViews: [],
  },
  getters: {
    dynamicViews: state => state.dynamicViews,
  },
  mutations: {
    TOGGLE_CONTENT_OVERLAY(state, value) {
      state.shallContentShowOverlay = value !== undefined ? value : !state.shallContentShowOverlay
    },
    setDynamicViews(state, data) {
      state.dynamicViews = data
    },
  },
  actions: {},
}
