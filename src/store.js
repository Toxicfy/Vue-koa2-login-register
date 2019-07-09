import Vue from 'vue';
import Vuex from 'vuex';
import getters from './getter';
import User from './store/user';

Vue.use(Vuex);

export default new Vuex.Store({
  state: {},
  mutations: {},
  getters: getters,
  actions: {},
  modules: {
    user: User //用户模块
  }
});
