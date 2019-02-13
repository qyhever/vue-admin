<template>
  <div class="dashboard">
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

    <el-row :gutter="20" class="main-row">
      <el-col :lg="18">
        <el-card>
          <chart-line></chart-line>
        </el-card>
      </el-col>
      <el-col :lg="6">
        <div class="remind-row">
          <el-card class="remind1">
            <p>内容</p>
            <p>内容</p>
          </el-card>
          <el-card class="remind2">
            <p>内容</p>
            <p>内容</p>
          </el-card>
        </div>
      </el-col>
      <el-col :xs="24" :lg="12" class="mt20">
        <el-card>
          <chart-pie></chart-pie>
        </el-card>
      </el-col>
      <el-col :xs="24" :lg="12" class="mt20">
        <el-card>
          <chart-gauge></chart-gauge>
        </el-card>
      </el-col>
    </el-row>
  </div>
</template>

<script>
import ChartLine from './ChartLine'
import ChartPie from './ChartPie'
import ChartGauge from './ChartGauge'
import CountUp from '@/components/CountUp'
export default {
  name: 'dashboard',
  components: { ChartLine, ChartPie, ChartGauge, CountUp },
  data() {
    return {
      // ..
    }
  }
}
</script>

<style lang="stylus" scoped>
@media screen and (max-width: 992px)
  .dashboard >>> .el-col-24
    margin-bottom 10px
.card
  overflow hidden
  padding 24px
  background-color #fff
  &:hover
    box-shadow 0 2px 8px rgba(0,0,0,.15)
  .fa
    float left
    margin-top 8px
    font-size 50px
  .fa-user-o
    color #3FC8C5
  .fa-commenting
    color #38A3F5
  .fa-cny
    color #F3516B
  .fa-shopping-cart
    color #32BEA3
  .desc
    float right
    font-size 16px
    p
      margin-bottom 1em
    .bold
      font-size 24px
      font-weight 600
.main-row
  margin-top 20px
.remind-row
  height 440px
  display flex
  flex-direction column
  .remind1, .remind2
    width 100%
    flex 1
  .remind1
    margin-bottom 20px
</style>
