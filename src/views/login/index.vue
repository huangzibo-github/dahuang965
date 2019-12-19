<template>
  <div class="login">
    <el-card class="login-card">
      <div class="title">
        <img src="../../assets/img/logo_index.png" alt />
      </div>
      <el-form style="margin-top:30px" :model="LoginForm" :rules="loginRules" ref="myForm">
        <el-form-item prop="mobile">
          <el-input placeholder="请输入手机号" v-model="LoginForm.mobile"></el-input>
        </el-form-item>
        <el-form-item prop="code">
          <el-input style="width:60%" placeholder="请输入验证码" v-model="LoginForm.code"></el-input>
          <el-button style="float:right" plain>发送验证码</el-button>
        </el-form-item>
        <el-form-item prop="check">
          <el-checkbox v-model="LoginForm.check">我已阅读并同意用户协议和隐私条款</el-checkbox>
        </el-form-item>
        <el-form-item>
          <el-button @click="submitLogin" type="primary" style="width:100%">登录</el-button>
        </el-form-item>
      </el-form>
    </el-card>
  </div>
</template>

<script>
export default {
  data () {
    return {
      LoginForm: {
        mobile: '', // 手机号
        code: '', // 验证码
        check: false // 勾选
      },
      loginRules: {
        // 验证规则 验证登录表单的     必须有required true
        mobile: [{
          required: true,
          message: '请输入手机号'
        }, {
          pattern: /^1[3456789]\d{9}$/,
          message: '请输入合法的手机号'
        }],
        code: [{
          required: true,
          message: '请输入验证码'
        }, {
          pattern: /^\d{6}$/,
          message: '请输入合法的验证码'
        }],
        check: [{ validator: function (rule, value, callback) {
          // rule当前的规则，没什么用
          // value指的是要校验的字段的值
          if (value) {
            callback()
          } else {
            callback(new Error('你是用户，所以你必须选择被坑！！'))
          }
        } }]
      }
    }
  },
  methods: {
    submitLogin () {
      this.$refs.myForm.validate(function (isOK) {
        if (isOK) {
          console.log('检验成功')
        }
      })
    }
  }
}
</script>
<style lang="less" scoped>
.login {
  background-image: url("../../assets/img/login_bg.jpg");
  background-size: cover;
  height: 100vh;
  display: flex;
  justify-content: center;
  align-items: center;
  .login-card {
    width: 440px;
    height: 360px;
    .title {
      text-align: center;
      img {
        height: 50px;
      }
    }
  }
}
</style>
