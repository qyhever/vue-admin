<template>
  <div class="con-main">
    <query-form
      :values="values"
      :ids="rowKeys"
      @form-query="formQuery"
      @handle-refresh="handleRefresh"
    />
    <query-table
      ref="table"
      :values="values"
      @selection-change="handeChangeRowKeys"
    />
  </div>
</template>

<script>
import QueryForm from './form'
import QueryTable from './table'
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
    }
  }
}
</script>
