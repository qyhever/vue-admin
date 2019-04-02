<template>
  <div class="con-main">
    <register-user-form :values="values" @form-query="formQuery" @handle-refresh="handleRefresh" />
    <register-user-table ref="table" :values="values" />
  </div>
</template>

<script>
import RegisterUserForm from './form'
import RegisterUserTable from './table'
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
      this.values = {}
    }
  }
}
</script>
