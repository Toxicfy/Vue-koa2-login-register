<template>
  <div class="container">
    <el-form ref='registerForm' :rules="rules" class="register-form" :model="registerData">
      <el-form-item prop="username">
        <el-input type="text" v-model="registerData.username" placeholder="请输入用户名"></el-input>
      </el-form-item>
      <el-form-item prop="email">
        <el-input type="text" v-model="registerData.email" placeholder="请输入邮箱"></el-input>
      </el-form-item>
      <el-form-item>
        <el-row :gutter="20">
          <el-col :span="18">
            <el-input type="" v-model="registerData.code" class="" placeholder="验证码"></el-input>
          </el-col>
          <el-col :span="6">
            <el-button type="info"> 获取验证码</el-button>
          </el-col>
        </el-row>
      </el-form-item>
      <el-form-item>
        <el-input type="password" v-model="registerData.password" placeholder="请输入密码"></el-input>
      </el-form-item>
      <el-form-item>
        <el-input type="password" v-model="registerData.rePassword" placeholder="请再次输入密码"></el-input>
      </el-form-item>
      <el-form-item>
        <el-button type="primary" class="register-button"> 注 册</el-button>
      </el-form-item>
    </el-form>
  </div>
</template>

<script>

  export default {
    name: "Login",
    data: function () {
      const rules = {
        username: (rule, value, callback) => {
            console.log(value)
            return !value ? callback(new Error('用户名不能为空')) : callback();
        },
        email:(rules,value,callback) =>{
            const reg = new RegExp("^[a-z0-9]+([._\\-]*[a-z0-9])*@([a-z0-9]+[-a-z0-9]*[a-z0-9]+.){1,63}[a-z0-9]+$");
            const isMatch = value.match(reg);
            return !isMatch ? callback(new Error('请输入有效的邮箱')) : callback()
        }
      }
      return {
        //自定义验证规则
        rules:{
            username: [{validator: rules.username,trigger: 'blur'}],
            email: [{validator: rules.email,trigger: 'blur'}],
        }, 
        registerData: {
          username: '',
          email: '',
          password: '',
          rePassword: '',
          code: '',
        }
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
      transform: translateY(-20%);
      padding: 30px 20px;
      box-shadow: 0 0 5px #c4c1c1;
      border-radius: 8px;

      .register-button {
        width: 100%;
      }
    }
  }
</style>
