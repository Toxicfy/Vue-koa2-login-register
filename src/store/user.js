/**
 * user store modules 用户模块
 */
const User = {
  state: {
    token: localStorage.getItem('token'),
    username: localStorage.getItem('username')
  },
  mutations: {
    SET_USERNAME: (state, { username }) => {
      localStorage.setItem('username', username);
      state.username = username;
    },
    SET_TOKEN: (state, { token }) => {
      localStorage.setItem('token', token);
      state.token = token;
    },
    REMOVE_TOKEN: state => {
      localStorage.removeItem('token');
      state.token = null;
    }
  }
};

export default User;
