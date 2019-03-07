<template>
  <div class="table">
    <el-table
      :data="list"
      style="width: 99%"
      show-overflow-tooltip
      v-loading="loading"
      cell-class-name="table-cell"
      header-cell-class-name="table-cell"
      @selection-change="handleSelectionChange"
      @sort-change="handleSortChange">
      <el-table-column
        type="selection"
        fixed>
      </el-table-column>

      <el-table-column
        prop="avatar"
        label="头像"
        min-width="100"
        fixed>
        <template slot-scope="scope">
          <img class="table-avatar" :src="scope.row.avatar" alt="加载失败">
        </template>
      </el-table-column>

      <el-table-column
        prop="name"
        label="姓名"
        min-width="100">
      </el-table-column>

      <el-table-column
        prop="nickName"
        label="昵称"
        min-width="100">
      </el-table-column>

      <el-table-column
        prop="age"
        label="年龄"
        min-width="100"
        sortable="custom">
      </el-table-column>

      <el-table-column
        prop="gender"
        label="性别"
        min-width="100">
        <template slot-scope="scope">
          <span v-if="scope.row.gender === '0'">女</span>
          <span v-else>男</span>
        </template>
      </el-table-column>

      <el-table-column
        prop="phone"
        label="手机号"
        min-width="100">
      </el-table-column>

      <el-table-column
        prop="email"
        label="e-mail"
        min-width="100">
      </el-table-column>

      <el-table-column
        prop="createTime"
        label="创建时间"
        min-width="100"
        sortable="custom">
        <template slot-scope="scope">
          <span>{{scope.row.createTime | formatTime}}</span>
        </template>
      </el-table-column>

      <el-table-column
        prop="updateTime"
        label="更新时间"
        min-width="100"
        sortable="custom">
        <template slot-scope="scope">
          <span>{{scope.row.updateTime | formatTime}}</span>
        </template>
      </el-table-column>

      <el-table-column label="操作"
      min-width="100">
        <template slot-scope="scope">
          <a href="javascript:" @click="handleEdit(scope.row._id)">编辑</a>
          <divider />
          <a href="javascript:" @click="handleDelete(scope.row._id)">删除</a>
        </template>
      </el-table-column>
    </el-table>

    <el-pagination
      v-show="pagingVisible"
      class="pagination"
      background
      layout="prev, pager, next, jumper"
      :page-size="10"
      :total="total"
      :current-page="page"
      @current-change="handleCurrentChange">
    </el-pagination>

    <edit-modal ref="editModal" :id="id" @handle-refresh="refreshList" />

  </div>
</template>

<script>
import { getListReq, deleteReq } from '@/api/table'
import EditModal from './edit-modal'
import Divider from '@/components/divider'
import { mapGetters } from 'vuex'
export default {
  name: 'BasicTable',
  components: { Divider, EditModal },
  props: ['values'],
  data() {
    return {
      list: [],
      page: 1,
      total: 0,
      id: ''
    }
  },
  watch: {
    $route() {
      const query = this.$route.query
      this.getList({ ...query, ...this.values })
    },
    values(val) {
      const query = this.$route.query
      this.getList({ ...query, ...val })
    }
  },
  computed: {
    ...mapGetters(['loading']),
    pagingVisible() {
      return this.total > 10
    }
  },
  mounted() {
    const { page } = this.$route.query
    this.getList({ page }).then(() => {
      this.page = +page
    })
  },
  methods: {
    async getList(params) {
      const res = await getListReq(params)
      if (res.success) {
        const { list, total } = res.data
        this.list = list
        this.total = total
      }
    },
    handleSelectionChange(rows) {
      const rowKeys = rows.map(row => row._id)
      this.$emit('selection-change', rowKeys)
    },
    handleSortChange(sort) {
      this.getList(Object.assign({}, this.values, {
        page: 1,
        sortProp: sort.prop,
        sortOrder: sort.order === 'ascending' ? 1 : -1
      }))
    },
    handleEdit(_id) {
      this.id = _id
      this.$refs.editModal.handleOpen(_id)
    },
    async handleDelete(_id) {
      try {
        await this.$confirm('确定要删除吗？', {
          confirmButtonText: '确定',
          cancelButtonText: '取消',
          type: 'warning'
        })
        const res = await deleteReq({ _ids: [_id] })
        if (res.success) {
          this.$message.closeAll()
          this.$message({ type: 'success', message: '删除成功' })
          const query = this.$route.query
          this.getList({ ...query, ...this.values })
        }
      } catch (e) {
        // ...
      }
    },
    handleCurrentChange(page) {
      // this.$router.push({ pathname: '/table/basic', query: { page } })
      this.getList({ page, ...this.values })
    },
    refreshList() {
      const query = this.$route.query
      this.getList({ ...query, ...this.values })
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
