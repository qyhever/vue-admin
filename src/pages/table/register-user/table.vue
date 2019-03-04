<template>
  <div class="table">
    <el-table
      :data="list"
      style="width: 99%"
      show-overflow-tooltip
      v-loading="loading"
      cell-class-name="table-cell"
      header-cell-class-name="table-cell">

      <el-table-column
        prop="headimg"
        label="头像"
        min-width="100">
        <template slot-scope="scope">
          <img v-if="scope.row.headimg" class="table-avatar" :src="scope.row.headimg" alt="加载失败">
          <img v-else class="table-avatar" src="@/assets/images/default.png" alt="加载失败">
        </template>
      </el-table-column>

      <el-table-column
        prop="nick"
        label="用户昵称"
        min-width="100">
      </el-table-column>

      <el-table-column
        prop="name"
        label="姓名"
        min-width="100">
      </el-table-column>

      <el-table-column
        prop="id"
        label="用户ID"
        min-width="100">
      </el-table-column>

      <el-table-column
        prop="phone"
        label="手机号码"
        min-width="100">
      </el-table-column>

      <el-table-column
        prop="recommenderId"
        label="推荐ID"
        min-width="100">
      </el-table-column>

      <el-table-column
        prop="teamNum"
        label="团队人数"
        min-width="100">
      </el-table-column>

      <el-table-column
        prop="registerDate"
        label="注册时间"
        min-width="100">
        <template slot-scope="scope">
          <span>{{scope.row.registerDate | formatTime}}</span>
        </template>
      </el-table-column>

      <el-table-column
        prop="orgName"
        label="代理商名称"
        min-width="100">
      </el-table-column>

    </el-table>

    <el-pagination
      class="pagination"
      background
      layout="prev, pager, next, sizes, jumper"
      :current-page="page"
      :page-size="size"
      :total="total"
      @current-change="handleCurrentChange"
      @size-change="handleSizeChange">
    </el-pagination>

  </div>
</template>

<script>
import { getCustomerListReq } from '@/api/table'
import { mapGetters } from 'vuex'
export default {
  props: {
    values: {
      type: Object,
      default() {
        return {}
      }
    }
  },
  data() {
    return {
      list: [],
      page: 1,
      size: 10,
      total: 0
    }
  },
  watch: {
    values(val) {
      if (!Object.keys(val).length) return
      const params = {
        page: 1,
        size: 10,
        ...val
      }
      this.getList(params)
    }
  },
  computed: {
    ...mapGetters(['loading'])
  },
  mounted() {
    this.getList()
  },
  methods: {
    async getList(params) {
      const res = await getCustomerListReq(params)
      if (res.success) {
        const { rows, total } = res.data
        this.list = rows
        this.total = total
        params && params.page && (this.page = params.page)
        params && params.size && (this.size = params.size)
      }
    },
    handleCurrentChange(page) {
      const { size } = this
      this.getList({ page, size, ...this.values })
    },
    handleSizeChange(size) {
      const { page } = this
      this.getList({ page, size, ...this.values })
    }
  }
}
</script>

<style scoped>
.table-avatar {
  width: 50px;
  height: 50px;
  border-radius: 50%;
}
.table {
  width: 100%;
}
.table >>> .cell {
  text-align: center;
}

.table >>> .el-table__body-wrapper {
  overflow-x: auto;
}
.pagination {
  padding-top: 22px;
  text-align: center;
}
</style>
