<template>
  <div class="con-main">
    <el-button
      type="primary"
      class="export-btn"
      @click="handleExport"
      :loading="exportLoading">
      导出
    </el-button>
    <el-table
      :data="list"
      style="width: 100%"
      v-loading="fetchLoading">

      <el-table-column
        prop="singer_id"
        label="编号">
      </el-table-column>

      <el-table-column
        prop="pic"
        label="头像">
        <template slot-scope="scope">
          <img class="avatar" :src="scope.row.pic" @error="this.src = defaultAvatar">
        </template>
      </el-table-column>

      <el-table-column
        prop="name"
        label="姓名">
      </el-table-column>

      <el-table-column
        prop="country"
        label="地区">
      </el-table-column>

    </el-table>

    <el-pagination
      class="pagination"
      background
      layout="prev, pager, next, sizes, jumper"
      :page-size="size"
      :total="total"
      :current-page="page"
      @current-change="handleCurrentChange"
      @size-change="handleSizeChange">
    </el-pagination>
  </div>
</template>

<script>
import { getSingersReq, getAllSingersReq } from '@/api/table'
import { exportExcel } from 'xlsx-oc'
import defaultAvatar from '@/assets/images/default-avatar.jpg'
import { mapGetters } from 'vuex'
export default {
  name: 'export',
  data() {
    return {
      list: [],
      page: 1,
      size: 10,
      total: 0,
      defaultAvatar,
      fetchLoading: false,
      exportLoading: false
    }
  },
  computed: {
    ...mapGetters(['loading'])
  },
  created() {
    this.fetchSingers()
  },
  methods: {
    async fetchSingers(params) {
      this.fetchLoading = true
      const res = await getSingersReq(params)
      if (res.success) {
        this.fetchLoading = false
        const { list, total } = res.data
        this.list = list
        this.total = total
      }
    },
    async handleExport() {
      this.exportLoading = true
      const res = await getAllSingersReq()
      if (res.success) {
        this.exportLoading = false
        const { data: totalList } = res
        const headers = [
          { k: 'singer_id', v: '编号' },
          { k: 'pic', v: '头像' },
          { k: 'name', v: '姓名' },
          { k: 'country', v: '地区' }
        ]
        exportExcel(headers, totalList, '歌手列表.xlsx')
      }
    },
    handleSizeChange(size) {
      this.fetchSingers({ page: this.page, size })
    },
    handleCurrentChange(page) {
      this.fetchSingers({ page, size: this.size })
    }
  }
}
</script>

<style lang="scss" scoped>
.export-btn {
  margin-bottom: 22px;
}
.pagination {
  padding-top: 22px;
  text-align: center;
}
</style>
