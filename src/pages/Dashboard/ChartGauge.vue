<template>
  <ve-gauge :data="chartData" :settings="chartSettings"></ve-gauge>
</template>

<script>
export default {
  data() {
    this.chartSettings = {
      labelMap: {
        speed: '速度'
      },
      dataName: {
        speed: 'km/h'
      }
    }
    return {
      chartData: {
        columns: ['type', 'value'],
        rows: [{ type: 'speed', value: 60 }]
      }
    }
  }
}
</script>
