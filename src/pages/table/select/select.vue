<template>
  <div class="con-main">
    <div class="left">
      <el-table
        ref="table"
        border
        :data="list"
        style="width: 100%"
        v-loading="loading"
        @select-all="handleSelectChange"
        @select="handleSelectChange"
        row-key="singer_id">
        <el-table-column
          type="selection"
          width="55"
          reserve-selection
        />
        <el-table-column
          prop="singer_id"
          label="编号"
        />
        <el-table-column
          prop="date"
          label="头像">
          <template slot-scope="scope">
            <img class="avatar" :src="scope.row.pic" @error="this.src = defaultAvatar">
          </template>
        </el-table-column>
        <el-table-column
          prop="name"
          label="姓名"
        />
        <el-table-column
          prop="country"
          label="地区"
        />
      </el-table>
      <el-pagination
        class="pagination"
        background
        layout="prev, pager, next, sizes, jumper"
        :page-size="params.size"
        :total="total"
        :current-page="params.page"
        @current-change="handleCurrentChange"
        @size-change="handleSizeChange">
      </el-pagination>
    </div>
    <div class="right">
      <el-table
        border
        :data="selectedRows"
        style="width: 100%">
        <el-table-column
          prop="singer_id"
          label="编号"
        />
        <el-table-column
          prop="date"
          label="头像">
          <template slot-scope="scope">
            <img class="avatar" :src="scope.row.pic" @error="this.src = defaultAvatar">
          </template>
        </el-table-column>
        <el-table-column
          prop="name"
          label="姓名"
        />
        <el-table-column
          prop="country"
          label="地区"
        />
      </el-table>
    </div>
  </div>
</template>

<script>
import { getSingersReq } from '@/api/table'
import defaultAvatar from '@/assets/images/default-avatar.jpg'
export default {
  data() {
    this.defaultAvatar = defaultAvatar
    return {
      list: [],
      total: 0,
      params: {
        page: 1,
        size: 10
      },
      loading: false,
      selectedRows: []
    }
  },
  created() {
    this.query()
  },
  methods: {
    async query() {
      this.loading = true
      const res = await getSingersReq(this.params)
      this.loading = false
      if (res.success) {
        const { list = [], total = 0 } = res.data
        this.list = list
        this.total = total
      }
    },
    handleSelectChange(rows) {
      this.selectedRows = rows
    },
    handleCurrentChange(page) {
      this.params.page = page
      this.query()
    },
    handleSizeChange(size) {
      this.params.size = size
      this.query()
    }
  }
}
</script>

<style scoped lang="scss">
.con-main {
  display: flex;
}
.left,
.right {
  width: 49%;
}
.right {
  margin-left: 2%;
}
.pagination {
  padding-top: 22px;
  text-align: center;
}
</style>
