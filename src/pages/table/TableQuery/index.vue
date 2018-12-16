<template>
  <div class="content">
    <query-form :values="values" :ids="rowKeys" @form-query="formQuery" @handle-refresh="handleRefresh"></query-form>
    <query-table ref="table" :values="values" @selection-change="handeChangeRowKeys"></query-table>
  </div>
</template>

<script>
import QueryForm from './QueryForm'
import QueryTable from './QueryTable'
export default {
  name: 'TableQuery',
  components: { QueryForm, QueryTable },
  data() {
    return {
      values: {},
      rowKeys: []
    }
  },
  methods: {
    formQuery(values) {
      this.values = values
    },
    handeChangeRowKeys(rowKeys) {
      this.rowKeys = rowKeys
    },
    handleRefresh() {
      this.values = {}
      // this.$refs.table.getList()
    }
  }
}
</script>
