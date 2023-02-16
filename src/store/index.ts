import Vue from 'vue';
import Vuex from 'vuex';
import { Counter } from './types/counter';

Vue.use(Vuex);

export default new Vuex.Store({
  state() {
    return {
      count: 0,
    };
  },
  mutations: {
    increment(state: Counter) {
      state.count++;
    },
    decrement(state: Counter) {
      state.count--;
    },
    resetCount(state: Counter) {
      state.count = 0;
    },
  },
  actions: {
    increment({ commit }) {
      commit('increment');
    },
    decrement({ commit }) {
      commit('decrement');
    },
    resetCount({ commit }) {
      commit('resetCount');
    },
  },
});
