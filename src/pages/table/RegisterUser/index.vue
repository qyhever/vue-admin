<template>
  <div class="content">
    <register-user-form :values="values" @form-query="formQuery" @handle-refresh="handleRefresh" />
    <register-user-table ref="table" :values="values" />
  </div>
</template>

<script>
import RegisterUserForm from './RegisterUserForm'
import RegisterUserTable from './RegisterUserTable'
export default {
  name: 'RegisterUser',
  components: {
    RegisterUserForm,
    RegisterUserTable
  },
  data() {
    return {
      values: {}
    }
  },
  methods: {
    formQuery(values) {
      this.values = values
    },
    handleRefresh() {
      this.$refs.table.getList({ page: 1, size: 10 })
    }
  }
}
</script>
