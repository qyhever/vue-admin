<template>
  <el-row :gutter="20" class="card-row">
    <el-col :xs="24" :md="12" :lg="6">
      <div class="card">
        <i class="fa fa-user-o"></i>
        <div class="desc">
          <p>Online Review</p>
          <count-up :end="1900" class="bold"></count-up>
        </div>
      </div>
    </el-col>
    <el-col :xs="24" :md="12" :lg="6">
      <div class="card">
        <i class="fa fa-commenting"></i>
        <div class="desc">
          <p>Users</p>
          <count-up :end="199" class="bold"></count-up>
        </div>
      </div>
    </el-col>
    <el-col :xs="24" :md="12" :lg="6">
      <div class="card">
        <i class="fa fa-cny"></i>
        <div class="desc">
          <p>Messages</p>
          <count-up :end="99" class="bold"></count-up>
        </div>
      </div>
    </el-col>
    <el-col :xs="24" :md="12" :lg="6">
      <div class="card">
        <i class="fa fa-shopping-cart"></i>
        <div class="desc">
          <p>Shoppings</p>
          <count-up :end="999" class="bold"></count-up>
        </div>
      </div>
    </el-col>
  </el-row>
</template>

<script>
import CountUp from '@/components/count-up'
export default {
  components: { CountUp }
}
</script>

<style lang="scss" scoped>
.card {
  overflow: hidden;
  padding: 24px;
  background-color: #fff;
  transition: all 0.4s;
  &:hover {
    box-shadow: 0 2px 20px rgba(0, 0, 0, 0.15);
  }
  .fa {
    float: left;
    margin-top: 8px;
    font-size: 50px;
  }
  .fa-user-o {
    color: #3FC8C5;
  }
  .fa-commenting {
    color: #38A3F5;
  }
  .fa-cny {
    color: #F3516B;
  }
  .fa-shopping-cart {
    color: #32BEA3;
  }
  .desc {
    float: right;
    font-size: 16px;
    p {
      margin-bottom: 1em;
    }
    .bold {
      font-size: 24px;
      font-weight: 600;
    }
  }
}
@media screen and (max-width: 1200px) {
  .card-row /deep/ .el-col:first-of-type, .card-row /deep/ .el-col:nth-of-type(2) {
    margin-bottom: 10px;
  }
}
</style>
