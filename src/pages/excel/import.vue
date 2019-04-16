<template>
  <div class="con-main">
    <div class="btn-group">
      <el-button class="mr15" type="primary" @click="handleTemplate">模板</el-button>
      <el-button type="primary" @click="handleImport">导入</el-button>
    </div>

    <el-table
      :data="list"
      style="width: 100%">

      <el-table-column
        prop="id"
        label="编号">
      </el-table-column>

      <el-table-column
        prop="name"
        label="姓名">
      </el-table-column>

      <el-table-column
        prop="age"
        label="年龄">
      </el-table-column>

      <el-table-column
        prop="country"
        label="地区">
      </el-table-column>

    </el-table>
  </div>
</template>

<script>
import { exportExcel } from 'xlsx-oc'
import { createExcelInput } from '@/utils/utils'
import { parse } from '@/utils/excel'
export default {
  name: 'excel_import',
  data() {
    return {
      list: []
    }
  },
  methods: {
    handleTemplate() {
      const list = [
        {
          id: 12,
          name: '刘亦菲',
          age: 24,
          country: '武汉'
        }
      ]
      const headers = [
        { k: 'id', v: '编号' },
        { k: 'name', v: '姓名' },
        { k: 'age', v: '年龄' },
        { k: 'country', v: '地区' }
      ]
      exportExcel(headers, list, '导入模板.xlsx')
    },
    async handleImport() {
      const file = await createExcelInput()
      const { results } = await parse(file)
      if (!results.length) {
        return this.$message.warning('没有数据，请重新导入')
      }
      results.forEach((v, i) => {
        v.key = i
        v.id = v['编号']
        v.name = v['姓名']
        v.age = v['年龄']
        v.country = v['地区']
        delete v['姓名']
        delete v['编号']
        delete v['年龄']
        delete v['地区']
      })
      this.list = results
    }
  }
}
</script>

<style lang="scss" scoped>
.btn-group {
  margin-bottom: 22px;
}
</style>
