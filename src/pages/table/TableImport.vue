<template>
  <div class="content">
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
    <p>placeholder</p>
    <p>placeholder</p>
    <p>placeholder</p>
    <p>placeholder</p>
    <p>placeholder</p>
    <p>placeholder</p>
    <p>placeholder</p>
    <p>placeholder</p>
    <p>placeholder</p>
    <p>placeholder</p>
    <p>placeholder</p>
    <p>placeholder</p>
    <p>placeholder</p>
    <p>placeholder</p>
    <p>placeholder</p>
    <p>placeholder</p>
    <p>placeholder</p>
    <p>placeholder</p>
    <p>placeholder</p>
    <p>placeholder</p>
    <p>placeholder</p>
    <p>placeholder</p>
    <p>placeholder</p>
    <p>placeholder</p>
    <p>placeholder</p>
    <p>placeholder</p>
    <p>placeholder</p>
    <p>placeholder</p>
    <p>placeholder</p>
    <p>placeholder</p>
    <p>placeholder</p>
    <p>placeholder</p>
    <p>placeholder</p>
    <p>placeholder</p>
    <p>placeholder</p>
    <p>placeholder</p>
    <p>placeholder</p>
    <p>placeholder</p>
    <p>placeholder</p>
    <p>placeholder</p>
    <p>placeholder</p>
    <p>placeholder</p>
    <p>placeholder</p>
    <p>placeholder</p>
    <p>placeholder</p>
    <p>placeholder</p>
    <p>placeholder</p>
    <p>placeholder</p>
    <p>placeholder</p>
    <p>placeholder</p>
    <p>placeholder</p>
    <p>placeholder</p>
    <p>placeholder</p>
    <p>placeholder</p>
    <p>placeholder</p>
    <p>placeholder</p>
    <p>placeholder</p>
    <p>placeholder</p>
    <p>placeholder</p>
    <p>placeholder</p>
    <p>placeholder</p>
    <p>placeholder</p>
    <p>placeholder</p>
    <p>placeholder</p>
    <p>placeholder</p>
    <p>placeholder</p>
    <p>placeholder</p>
    <p>placeholder</p>
    <p>placeholder</p>
    <p>placeholder</p>
    <p>placeholder</p>
    <p>placeholder</p>
    <p>placeholder</p>
    <p>placeholder</p>
    <p>placeholder</p>
    <p>placeholder</p>
    <p>placeholder</p>
    <p>placeholder</p>
    <p>placeholder</p>
    <p>placeholder</p>
    <p>placeholder</p>
    <p>placeholder</p>
    <p>placeholder</p>
    <p>placeholder</p>
    <el-tooltip placement="top" content="tooltip">
      <back-to-top :custom-style="myBackToTopStyle" :visibility-height="300" :back-position="50" transition-name="fade"/>
    </el-tooltip>
  </div>
</template>

<script>
import BackToTop from '@/components/BackToTop'
import { exportExcel } from 'xlsx-oc'
import { createExcelInput } from '@/utils/utils'
import { excelToJson } from '@/utils/excelToJson'
export default {
  name: 'import',
  components: { BackToTop },
  data() {
    return {
      list: [],
      myBackToTopStyle: {
        right: '50px',
        bottom: '50px',
        width: '40px',
        height: '40px',
        'border-radius': '4px',
        'line-height': '45px', // 请保持与高度一致以垂直居中 Please keep consistent with height to center vertically
        background: '#e7eaf1' // 按钮的背景颜色 The background color of the button
      }
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
      const list = await excelToJson(file)
      if (!list.length) {
        this.$message.warning('没有数据，请重新导入')
      }
      list.forEach((v, i) => {
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
      this.list = list
    }
  }
}
</script>

<style lang="stylus" scoped>
.btn-group
  margin-bottom 22px
</style>
