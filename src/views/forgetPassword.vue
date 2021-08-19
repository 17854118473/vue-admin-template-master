<template>
  <el-form ref="form" :rules="rules" :model="form" label-width="80px" style="width: 30%;margin-top: 50px;margin-left: 35%">
    <div class="title-container">
      <h3 class="title" style="text-align: center;font-size: 30px">修改密码</h3>
    </div>
    <el-form-item label="手机号" prop="phone">
      <el-input v-model="form.phone"></el-input>
    </el-form-item>
    <el-form-item>
      <el-col :span="17">
        <el-input v-model="form.code"></el-input>
      </el-col>
      <el-col class="line" :span="7">
        <el-button type="primary" @click="onSubmit">获取验证码</el-button>
      </el-col>
    </el-form-item>
    <el-form-item label="密码" prop="password">
      <el-input v-model="form.password"></el-input>
    </el-form-item>
    <el-form-item label="确认密码" prop="re_password">
      <el-input v-model="form.re_password"></el-input>
    </el-form-item>
    <el-form-item size="large" style="float: left">
      <el-button type="primary" @click="onSubmit">确认修改</el-button>
    </el-form-item>
  </el-form>
</template>
<script>
export default {
  data() {
    const validatePhone = (rule, value, callback) => {
      if (!value) {
        return callback(new Error('手机号不能为空'))
      }
      setTimeout(() => {
        const mobile_mode = /^1[34578]\d{9}$/
        if (!mobile_mode.test(value)) {
          callback(new Error('手机号格式不正确'))
        }
      }, 1000)
    }
    const validatePass = (rule, value, callback) => {
      if (value === '') {
        callback(new Error('请输入密码'))
      } else {
        if (this.form.password !== '') {
          this.$refs.form.validateField('re_password')
        }
        callback()
      }
    }
    const validatePass2 = (rule, value, callback) => {
      if (value === '') {
        callback(new Error('请再次输入密码'))
      } else if (value !== this.form.password) {
        callback(new Error('两次输入密码不一致!'))
      } else {
        callback()
      }
    }
    return {
      form: {
        phone: '',
        password: '',
        code: '',
        re_password: ''
      },
      rules: {
        phone: [
          { validator: validatePhone, trigger: 'blur' }
        ],
        password: [
          { validator: validatePass, trigger: 'blur' }
        ],
        re_password: [
          { validator: validatePass2, trigger: 'blur' }
        ]
      }
    }
  },
  methods: {
    onSubmit() {
      console.log('submit!')
    }
  }
}
</script>

