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
          <el-form-item label="手机号：" prop="phone">
            <el-input placeholder="请输入手机号" v-model="form.phone" maxlength="11" v-number></el-input>
          </el-form-item>
        </el-col>

        <el-col :xs="24" :sm="12" :md="8" :xl="6">
          <el-form-item label="e-mail：" prop="email">
            <el-input placeholder="请输入e-mail" v-model="form.email"></el-input>
          </el-form-item>
        </el-col>

        <el-col :xs="24" :sm="12" :md="8" :xl="6">
          <el-form-item label="性别：" prop="gender">
            <el-select v-model="form.gender" placeholder="请选择性别" :popper-append-to-body="false">
              <el-option label="女" value="0"></el-option>
              <el-option label="男" value="1"></el-option>
            </el-select>
          </el-form-item>
        </el-col>

        <el-col :xs="24" :sm="12" :md="8" :xl="6">
          <el-form-item label="创建时间：" prop="createTime">
            <el-date-picker
              v-model="form.createTime"
               :popper-append-to-body="false"
              type="daterange"
              value-format="timestamp"
              range-separator="至"
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

    <el-row class="btn-group">
      <el-button type="primary" icon="el-icon-plus" @click="handleAdd">添加</el-button>
      <el-button type="primary" icon="el-icon-delete" :disabled="!ids.length" @click="handleBatchDel">批量删除</el-button>
    </el-row>

    <add-modal :visible="addVisible" @handle-close="handleAddCancel" @handle-refresh="handleRefresh"></add-modal>

  </div>
</template>

<script>
import AddModal from './AddModal'
import { deleteReq } from '@/api/table'
export default {
  name: 'BasicForm',
  components: { AddModal },
  props: {
    values: {
      required: true,
      type: Object
    },
    ids: {
      required: true,
      type: Array
    }
  },
  data() {
    return {
      form: {
        name: '',
        phone: '',
        email: '',
        gender: '',
        createTime: ''
      },
      addVisible: false
    }
  },
  methods: {
    submitForm() {
      this.$refs.form.validate(valid => {
        if (!valid) return false
        const { name, phone, email, gender, createTime } = this.form
        const params = {}
        name && (params.name = name.trim())
        phone && (params.phone = phone.trim())
        email && (params.email = email.trim())
        gender && (params.gender = gender)
        if (createTime) {
          params.timeStart = createTime[0]
          params.timeEnd = createTime[1]
        }
        this.$emit('form-query', params)
      })
    },

    resetForm() {
      this.$refs.form.resetFields()
      this.$emit('form-query', {})
    },

    handleAdd() {
      this.addVisible = true
    },

    handleAddCancel() {
      this.addVisible = false
    },

    async handleBatchDel() {
      try {
        await this.$confirm('确定要删除选中的吗？', {
          confirmButtonText: '确定',
          cancelButtonText: '取消',
          type: 'warning'
        })
        const res = await deleteReq({ _ids: this.ids })
        if (res.status === 1) {
          this.$message.closeAll()
          this.$message({ type: 'success', message: '删除成功' })
          this.$emit('handle-refresh')
        }
      } catch (e) {
        // ...
      }
    },
    // 添加以后刷新列表
    handleRefresh() {
      this.$emit('handle-refresh')
    }
  },
  directives: {
    number: {
      // 指令的定义
      inserted: function(el) {
        const input = el.children[0]
        input.onkeyup = handleNotNumber
        input.onkeydown = handleNotNumber
        function handleNotNumber() {
          /* eslint-disable no-useless-escape */
          input.value = input.value.replace(/[^\.\d]/g, '')
        }
      }
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
