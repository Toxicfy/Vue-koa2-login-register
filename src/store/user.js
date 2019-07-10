/**
 * user store modules 用户模块
 */
import * as type from './constant'
const User = {
  state: {
    token: localStorage.getItem('token'),
    username: localStorage.getItem('username')
  },
  mutations: {
    [type.SET_USERNAME]: (state, { username }) => {
      localStorage.setItem('username', username);
      state.username = username;
    },
    [type.SET_TOKEN]: (state, { token }) => {
      localStorage.setItem('token', token);
      state.token = token;
    },
    [type.REMOVE_TOKEN]: state => {
      localStorage.removeItem('token');
      state.token = null;
    }
  }
};

export default User;
