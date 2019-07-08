import Vue from 'vue';
import Vuex from 'vuex';
import User from './store/user';

Vue.use(Vuex);

const getters = {
  token: state => state.user.token
};

export default new Vuex.Store({
  state: {},
  mutations: {},
  getters: getters,
  actions: {},
  modules: {
    user: User //用户模块
  }
});
