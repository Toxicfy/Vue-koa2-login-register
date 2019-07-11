<template>
  <div class="container">
    <el-form ref="registerForm" :rules="rules" class="register-form" :model="registerData">
      <el-form-item prop="username">
        <el-input v-model="registerData.username" type="text" placeholder="请输入用户名" />
      </el-form-item>
      <el-form-item prop="password">
        <el-input v-model="registerData.password" type="password" placeholder="请输入密码" />
      </el-form-item>
      <el-form-item prop="rePassword">
        <el-input v-model="registerData.rePassword" type="password" placeholder="请再次输入密码" />
      </el-form-item>
      <el-form-item>
        <el-row :gutter="20">
          <el-col :span="18">
            <el-button type="primary" class="register-button" @click="submitRegisterForm('registerForm')">注 册</el-button>
          </el-col>
          <el-col :span="6">
            <el-button type="info" class="register-button" @click="resetRegisterForm('registerForm')">重 置</el-button>
          </el-col>
        </el-row>
      </el-form-item>
      <router-link class="login-link" to="./login">
        <span>已有用户？立即登录</span>
      </router-link>
    </el-form>
  </div>
</template>

<script>
import { constants } from 'crypto';
  export default {
    name: "Login",
    data: function () {
      const rules = {
        username: (rule, value, callback) => {
          return !value ? callback(new Error('用户名不能为空')) : callback();
        },
        password: (rule, value, callback) => {
          return !value ? callback(new Error('密码不能为空')) : callback();
        },
        rePassword: (rule, value, callback) => {
          if (!value || value !== this.registerData.password) {
            return callback(new Error('两次输入的密码不一致'))
          } else {
            return callback()
          }
        }
      }
      return {
        //自定义验证规则
        rules: {
          username: [{validator: rules.username, trigger: 'blur'}],
          password: [{validator: rules.password, trigger: 'blur'}],
          rePassword: [{validator: rules.rePassword, trigger: 'blur'}],
        },
        // 数据存储
        registerData: {
          username: '',
          email: '',
          password: '',
          rePassword: '',
          code: '',
        }
      }
    },
    methods: {
      submitRegisterForm(name) {
        this.$refs[name].validate(result => {
          if(result){
            this.$axios({
              method: 'post',
              url: 'http://localhost:3000/api/register',
              data: {
                username: this.registerData.username,
              password: this.registerData.password
              }
            }).then((res) => {

            })
          }
        })
      },
      resetRegisterForm(name) {
        this.$refs[name].resetFields();
      }
    }
  }
</script>

<style lang="scss" scoped>
.container {
  width: 100%;
  height: 100%;
  display: flex;
  justify-content: center;
  align-items: center;

  .register-form {
    width: 500px;
    transform: translateY(-5vh);
    padding: 30px 20px;
    box-shadow: 0 0 5px #c4c1c1;
    border-radius: 8px;

    .register-button {
      width: 100%;
    }

    .login-link {
      cursor: pointer;
      text-decoration: none;

      span {
        font-size: 13px;
        color: #990505;
      }
    }
  }
}
</style>
