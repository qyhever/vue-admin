<template>
  <div class="basic">
    <el-form class="form" ref="form" :model="form"  label-width="86px">
      <el-row :gutter="20">
        <el-col :xs="24" :sm="12" :md="8" :xl="6">
          <el-form-item label="姓名：" prop="name">
            <el-input placeholder="请输入姓名" v-model="form.name"></el-input>
          </el-form-item>
        </el-col>

        <el-col :xs="24" :sm="12" :md="8" :xl="6">
          <el-form-item label="用户ID：" prop="id">
            <el-input placeholder="请输入用户ID" v-model="form.id"></el-input>
          </el-form-item>
        </el-col>

        <el-col :xs="24" :sm="12" :md="8" :xl="6">
          <el-form-item label="推荐人ID：" prop="recommenderId">
            <el-input placeholder="请输入推荐人ID" v-model="form.recommenderId"></el-input>
          </el-form-item>
        </el-col>

        <el-col :xs="24" :sm="12" :md="8" :xl="6">
          <el-form-item label="手机号：" prop="phone">
            <el-input placeholder="请输入手机号" v-model="form.phone" maxlength="11"></el-input>
          </el-form-item>
        </el-col>

        <el-col :xs="24" :sm="12" :md="8" :xl="6">
          <el-form-item label="注册时间：" prop="registerTime">
            <el-date-picker
              v-model="form.registerTime"
               :popper-append-to-body="false"
              type="daterange"
              value-format="yyyy-MM-dd"
              range-separator="~"
              start-placeholder="开始日期"
              end-placeholder="结束日期">
            </el-date-picker>
          </el-form-item>
        </el-col>

        <el-col :xs="24" :sm="12" :md="8" :xl="6">
          <el-form-item>
            <el-button type="primary" @click="submitForm">查询</el-button>
            <el-button @click="resetForm">重置</el-button>
          </el-form-item>
        </el-col>
      </el-row>

    </el-form>
  </div>
</template>

<script>
export default {
  props: {
    values: {
      required: true,
      type: Object
    }
  },
  data() {
    return {
      form: {
        name: '',
        id: '',
        recommenderId: '',
        phone: '',
        registerTime: ''
      }
    }
  },
  methods: {
    submitForm() {
      this.$refs.form.validate(valid => {
        if (!valid) return false
        const { name, id, recommenderId, phone, registerTime } = this.form
        const params = {}
        name && (params.name = name.trim())
        id && (params.id = id.trim())
        recommenderId && (params.recommenderId = recommenderId.trim())
        phone && (params.phone = phone.trim())
        if (registerTime) {
          params.fromRegisterDate = registerTime[0]
          params.toRegisterDate = registerTime[1]
        }
        this.$emit('form-query', params)
      })
    },

    resetForm() {
      this.$refs.form.resetFields()
      this.$emit('form-query', {})
      this.$emit('handle-refresh')
    }
  }
}
</script>

<style scoped>
.form >>> .el-select {
  width: 100%;
}
.form >>> .el-date-editor--daterange.el-input__inner {
  width: 100%;
}
.btn-group {
  margin-bottom: 22px;
}
</style>
