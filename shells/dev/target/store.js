import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    count: 0,
    testInited: null,
    date: new Date(),
    set: new Set(),
    map: new Map()
  },
  mutations: {
    INCREMENT: state => state.count++,
    DECREMENT: state => state.count--,
    UPDATE_DATE: state => {
      state.date = new Date()
    },
    TEST_COMPONENT: state => {},
    TEST_SET: state => {
      state.set.add(Math.random())
    },
    TEST_MAP: state => {
      state.map.set(`mykey_${state.map.size}`, state.map.size)
    },
    TEST_INIT: (state, payload) => {
      state.testInited = payload
    }
  },
  getters: {
    isPositive: state => state.count >= 0,
    hours: state => state.date.getHours()
  }
})
