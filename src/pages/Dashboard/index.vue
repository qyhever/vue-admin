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

    <div class="charts">
      <chart-line></chart-line>
      <el-row>
        <el-col :xs="24" :lg="12">
          <chart-pie></chart-pie>
        </el-col>
        <el-col :xs="24" :lg="12">
          <chart-gauge></chart-gauge>
        </el-col>
      </el-row>
    </div>
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
@media screen and (min-width: 320px)
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
.charts
  margin-top 22px
  padding-top 20px
  background-color #fff
</style>
