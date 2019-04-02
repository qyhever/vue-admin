<template>
  <div class="table">
    <el-table
      :data="list"
      v-loading="loading"
      @selection-change="handleSelectionChange"
      @sort-change="handleSortChange">
      <el-table-column
        type="selection"
        width="60"
        fixed>
      </el-table-column>

      <el-table-column
        prop="avatar"
        label="头像"
        width="100"
        fixed>
        <template slot-scope="scope">
          <img class="table-avatar" :src="scope.row.avatar" alt="加载失败">
        </template>
      </el-table-column>

      <el-table-column
        prop="name"
        label="姓名">
      </el-table-column>

      <el-table-column
        prop="nickName"
        label="昵称">
      </el-table-column>

      <el-table-column
        prop="age"
        label="年龄"
        sortable="custom">
      </el-table-column>

      <el-table-column
        prop="gender"
        label="性别">
        <template slot-scope="scope">
          <span v-if="scope.row.gender === '0'">女</span>
          <span v-else>男</span>
        </template>
      </el-table-column>

      <el-table-column
        prop="phone"
        label="手机号"
        width="120">
      </el-table-column>

      <el-table-column
        prop="email"
        label="e-mail"
        width="180">
      </el-table-column>

      <el-table-column
        prop="createTime"
        label="创建时间"
        width="180"
        sortable="custom">
        <template slot-scope="scope">
          <span>{{scope.row.createTime | formatTime}}</span>
        </template>
      </el-table-column>

      <el-table-column
        prop="updateTime"
        label="更新时间"
        width="180"
        sortable="custom">
        <template slot-scope="scope">
          <span>{{scope.row.updateTime | formatTime}}</span>
        </template>
      </el-table-column>

      <el-table-column
        label="操作"
        width="140">
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
      layout="total, prev, pager, next, sizes, jumper"
      :current-page="params.page"
      :page-size="params.size"
      :total="total"
      @current-change="handleCurrentChange"
      @size-change="handleSizeChange"
    />

    <edit-modal ref="editModal" :id="id" @handle-refresh="getList" />

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
  props: {
    values: {
      type: Object,
      default: () => {}
    }
  },
  data() {
    return {
      list: [],
      total: 0,
      id: '',
      params: {
        page: 1,
        size: 10
      }
    }
  },
  watch: {
    values() {
      this.reset()
    }
  },
  computed: {
    ...mapGetters(['loading']),
    pagingVisible() {
      return this.total > 10
    }
  },
  mounted() {
    this.getList()
  },
  methods: {
    async getList() {
      const params = Object.assign({}, this.params, this.values)
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
      this.params.page = 1
      this.params.size = 10
      if (sort.prop && sort.order) {
        this.params.sortProp = sort.prop
        this.params.sortOrder = sort.order === 'ascending' ? 1 : -1
      } else {
        this.params.sortProp = null
        this.params.sortOrder = null
      }
      this.getList()
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
          this.getList()
        }
      } catch (e) {
        // ...
      }
    },
    handleCurrentChange(page) {
      this.params.page = page
      this.getList()
    },
    handleSizeChange(size) {
      this.params.size = size
      this.getList()
    },
    reset() {
      this.params.page = 1
      this.params.size = 10
      this.getList()
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
.pagination {
  padding-top: 22px;
  text-align: center;
}
</style>
