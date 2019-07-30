<template>
  <div class="dashboard">
    <card-row></card-row>
    <el-row :gutter="20" class="main-row">
      <el-col :lg="18">
        <el-card>
          <chart-line></chart-line>
        </el-card>
      </el-col>
      <el-col :lg="6">
        <div class="remind-row">
          <el-card class="remind1" v-loading="hitokotoLoading">
            <p class="ti2">{{hitokoto.hitokoto}}</p>
            <p class="tar ptb10">{{hitokoto.from + ' - ' + hitokoto.creator}}</p>
          </el-card>
          <el-card class="remind2" v-loading="weatherLoading">
            <div class="left">
              <img v-if="weather.icon_url" :src="weather.icon_url" alt="加载失败">
              <p class="pl15">{{weather.cond_txt}}</p>
              <p class="pl15 mt5">{{weather.wind_dir}} {{weather.wind_sc + '级'}}</p>
            </div>
            <div class="right tar">
              <p class="f20">{{weather.fl}} ℃</p>
              <p class="mt30">{{weather.location}}</p>
            </div>
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
import ChartLine from './chart-line'
import ChartPie from './chart-pie'
import ChartGauge from './chart-gauge'
import CardRow from './card'
import * as api from '@/api/dashboard'
export default {
  name: 'dashboard',
  components: { ChartLine, ChartPie, ChartGauge, CardRow },
  data() {
    return {
      hitokoto: {},
      hitokotoLoading: false,
      weather: {},
      weatherLoading: false
    }
  },
  created() {
    this.fetchHitokoto()
    this.fetchWeather()
  },
  methods: {
    fetchHitokoto() {
      this.hitokotoLoading = true
      api
        .getHitokoto()
        .then(data => {
          this.hitokotoLoading = false
          this.hitokoto = data || {}
        })
        .catch(() => {
          this.hitokotoLoading = false
        })
    },
    fetchWeather() {
      this.weatherLoading = true
      api
        .weatherToday()
        .then(data => {
          this.weatherLoading = false
          this.weather = data || {}
        })
        .catch(() => {
          this.weatherLoading = false
        })
    }
  }
}
</script>

<style lang="scss" scoped>
.dashboard {
  padding: 20px;
}
@media screen and (max-width: 992px) {
  .dashboard /deep/ .el-col-24 {
    margin-bottom: 10px;
  }
}
.main-row {
  margin-top: 20px;
}
.remind-row {
  height: 440px;
  display: flex;
  flex-direction: column;
  .remind1, .remind2 {
    width: 100%;
    flex: 1;
    font-size: 16px;
    color: #fff;
    transition: all 0.4s;
    &:hover {
      box-shadow: 0 2px 20px rgba(0, 0, 0, 0.15);
    }
  }
  .remind1 {
    background-color: rgb(247, 151, 214);
    margin-bottom: 20px;
    font-size: 20px;
    font-family: '楷体';
  }
  .remind2 {
    background-color: rgb(143, 201, 251);
    /deep/ .el-card__body {
      box-sizing: border-box;
      display: flex;
      width: 100%;
      height: 100%;
      .left {
        flex: 1;
      }
      .right {
        flex: 1;
      }
    }
  }
}
</style>
