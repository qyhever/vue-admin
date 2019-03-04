<template>
  <el-dialog
    title="添加"
    :visible.sync="visible"
    width="640px"
    :close-on-click-modal="false"
    @closed="resetForm">

    <el-form class="form" ref="form" :rules="rules" :model="form"  label-width="86px">
      <el-form-item label="头像：" prop="avatar">
        <upload v-model="form.avatar" />
      </el-form-item>

      <el-form-item label="姓名：" prop="name">
        <el-input placeholder="请输入姓名" v-model="form.name"></el-input>
      </el-form-item>

      <el-form-item label="昵称：" prop="nickName">
        <el-input placeholder="请输入昵称" v-model="form.nickName"></el-input>
      </el-form-item>

      <el-form-item label="年龄：" prop="age">
        <el-input-number v-model="form.age" :min="0" :max="100"></el-input-number>
      </el-form-item>

      <el-form-item label="性别：" prop="gender">
        <el-radio-group v-model="form.gender">
          <el-radio-button label="0">女</el-radio-button>
          <el-radio-button label="1">男</el-radio-button>
        </el-radio-group>
      </el-form-item>

      <el-form-item label="手机号：" prop="phone">
        <el-input placeholder="请输入手机号" v-model="form.phone" maxlength="11"></el-input>
      </el-form-item>

      <el-form-item label="e-mail：" prop="email">
        <el-input placeholder="请输入e-mail" v-model="form.email"></el-input>
      </el-form-item>

      <el-form-item label="地址：" prop="address" :popper-append-to-body="false">
        <el-cascader
          placeholder="请选择地址"
          :options="options"
          v-model="form.address"
        />
      </el-form-item>

    </el-form>

    <span slot="footer" class="dialog-footer">
      <el-button @click="handleClose">取 消</el-button>
      <el-button type="primary" @click="submitForm">确 定</el-button>
    </span>
  </el-dialog>
</template>

<script>
import generateData from '@/utils/generateData.js'
import { regPhone } from '@/utils/utils'
import { addReq } from '@/api/table'
import Upload from '@/components/Upload'
const rules = {
  avatar: [
    { required: true, message: '请上传头像', trigger: 'blur' }
  ],
  name: [{ required: true, message: '请输入姓名', trigger: 'blur' }],
  nickName: [{ required: true, message: '请输入昵称', trigger: 'blur' }],
  phone: [
    { required: true, message: '请输入手机号', trigger: 'blur' },
    { pattern: regPhone, message: '手机号格式不正确', trigger: 'blur' }
  ],
  email: [
    { required: true, message: '请输入email', trigger: 'blur' },
    { type: 'email', message: 'email格式不正确', trigger: 'blur' }
  ],
  address: [{ required: true, message: '请选择地址', trigger: 'blur' }]
}
export default {
  components: {
    Upload
  },
  data() {
    return {
      visible: false,
      options: generateData,
      loading: false,
      form: {
        avatar: '',
        name: '',
        nickName: '',
        age: 18,
        gender: '0',
        phone: '',
        email: '',
        address: []
      },
      rules
    }
  },
  methods: {
    handleOpen() {
      this.visible = true
    },
    handleClose() {
      this.visible = false
    },
    async submitForm() {
      try {
        await this.$refs.form.validate()
        const res = await addReq(this.form)
        if (res.success) {
          this.handleClose()
          this.$message.closeAll()
          this.$message({ type: 'success', message: '添加成功' })
          this.$emit('handle-refresh')
        }
      } catch (error) {
        // ...
      }
    },
    resetForm() {
      this.$refs.form.resetFields()
    }
  }
}
</script>

<style scoped>
.form {
  padding-right: 10%;
}
.form >>> .el-cascader {
  width: 100%;
}
</style>
