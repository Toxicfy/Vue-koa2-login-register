<template>
  <div class="el-container">
    <el-form ref="userForm" :model="userForm" :rules="rules" class="user-form">
      <el-form-item prop="username">
        <el-input v-model="userForm.username" type="text" placeholder="请输入用户名" />
      </el-form-item>
      <el-form-item prop="password">
        <el-input v-model="userForm.password" type="password" placeholder="请输入密码" />
      </el-form-item>
      <el-form-item>
        <el-row :gutter="20">
          <el-col :span="18">
            <el-button type="primary" class="login-btn" @click="submitUserForm('userForm')">登 录</el-button>
          </el-col>
          <el-col :span="6">
            <el-button type="info" class="reset-btn" @click="resetForm('userForm')">重 置</el-button>
          </el-col>
        </el-row>
      </el-form-item>
      <router-link class="register-link" to="./register">
        <span>没有用户？现在注册</span>
      </router-link>
    </el-form>
  </div>
</template>


<script>
  export default {
    name: 'Login',
    data() {
      const validateUserName = (rule, value, callback) => {
        return !value ? callback(new Error('姓名不能为空')) : callback();
      };
      const validatePassword = (rule, value, callback) => {
        return !value ? callback(new Error('密码不能为空')) : callback();
      };
      return {
        userForm: {
          username: '',
          password: ''
        },
        rules: {
          username: [{validator: validateUserName, trigger: 'blur'}],
          password: [{validator: validatePassword, trigger: 'blur'}]
        }
      }
    },
    methods: {
      submitUserForm(formName) {
        this.$refs[formName].validate(valid => {
          if (valid) {
            console.log(this.userForm);

          } else {
            this.$message({
              showClose: true,
              message: '校验失败，请检查后提交',
              type: 'warning'
            });
          }
        })
      },
      resetForm(formName) {
        this.$refs[formName].resetFields()
      }
    }
  }
</script>


<style scoped lang="scss">
.el-container {
  display: flex;
  justify-content: center;
  align-items: center;
  width: 100%;
  height: 100%;
  overflow: hidden;

  .user-form {
    width: 500px;
    transform: translateY(-20%);
    padding: 30px 20px;
    box-shadow: 0 0 5px #c4c1c1;
    border-radius: 8px;
    .el-button {
      width: 100%;
    }

    .register-link {
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