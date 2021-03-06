<template>
  <div :class="className" :style="{height:height,width:width}"/>
</template>

<script>
import echarts from 'echarts'
require('echarts/theme/macarons') // echarts theme
import { debounce } from '@/utils'

const animationDuration = 12000

export default {
  props: {
    className: {
      type: String,
      default: 'chart'
    },
    width: {
      type: String,
      default: '100%'
    },
    height: {
      type: String,
      default: '300px'
    },
    radarChartData: {
      type: Array,
      required: true
    }
  },
  data() {
    return {
      chart: null
    }
  },
  watch: {
    'radarChartData'() {
      this.setChart()
    }
  },
  mounted() {
    this.chart = echarts.init(this.$el, 'macarons')
    this.__resizeHandler = debounce(() => {
      if (this.chart) {
        this.chart.resize()
      }
    }, 100)
    window.addEventListener('resize', this.__resizeHandler)
  },
  beforeDestroy() {
    if (!this.chart) {
      return
    }
    window.removeEventListener('resize', this.__resizeHandler)
    this.chart.dispose()
    this.chart = null
  },
  methods: {
    setChart() {
      this.chart.setOption({
        tooltip: {
          trigger: 'item',
          position: 'inside',
          axisPointer: { // 坐标轴指示器，坐标轴触发有效
            type: 'line' // 默认为直线，可选为：'line' | 'shadow'
          }
        },
        radar: {
          radius: '66%',
          center: ['50%', '42%'],
          splitNumber: 8,
          splitArea: {
            areaStyle: {
              color: 'rgba(127,95,132,.3)',
              opacity: 1,
              shadowBlur: 45,
              shadowColor: 'rgba(0,0,0,.5)',
              shadowOffsetX: 0,
              shadowOffsetY: 15
            }
          },
          indicator: [
            { name: 'U-RMS', max: 0.2 },
            { name: 'V-RMS', max: 0.2 },
            { name: 'W-RMS', max: 0.2 },
            { name: 'Negative sequence', max: 0.1 },
            { name: 'Positice\nsequence', max: 0.2 },
            { name: 'Power\nfrequency', max: 70 }
          ]
        },
        legend: {
          left: 'center',
          bottom: '10',
          data: ['Motor#3', 'Motor#2', 'Motor#1']
        },
        series: [{
          type: 'radar',
          symbolSize: 0,
          areaStyle: {
            normal: {
              shadowBlur: 13,
              shadowColor: 'rgba(0,0,0,.2)',
              shadowOffsetX: 0,
              shadowOffsetY: 10,
              opacity: 1
            }
          },
          data: [
            {
              value: [this.radarChartData[2].urms, this.radarChartData[2].vrms, this.radarChartData[2].wrms, this.radarChartData[2].n_rms, this.radarChartData[2].p_rms, this.radarChartData[2].frequency],
              name: 'Motor#3'
            },
            {
              value: [this.radarChartData[1].urms, this.radarChartData[1].vrms, this.radarChartData[1].wrms, this.radarChartData[1].n_rms, this.radarChartData[1].p_rms, this.radarChartData[1].frequency],
              name: 'Motor#2'
            },
            {
              value: [this.radarChartData[0].urms, this.radarChartData[0].vrms, this.radarChartData[0].wrms, this.radarChartData[0].n_rms, this.radarChartData[0].p_rms, this.radarChartData[0].frequency],
              name: 'Motor#1'
            }
          ],
          animationDuration: animationDuration
        }]
      })
    }
  }
}
</script>
