<template>
  <div :class="className" :style="{height:height,width:width}"/>
</template>

<script>
import echarts from 'echarts'

require('echarts/theme/macarons') // echarts theme
import { debounce } from '@/utils'

export default {
  props: {
    className: {
      type: String,
      default: 'chart'
    },
    width: {
      type: String,
      default: '1100px'
    },
    height: {
      type: String,
      default: '400px'
    },
    autoResize: {
      type: Boolean,
      default: true
    },
    trendData: {
      type: Object,
      required: true,
      default: function() {
        return {}
      }
    }

  },
  data() {
    return {
      chart: null,
      sidebarElm: null
    }
  },
  watch: {
    'trendData'() {
      this.setChart()
    }
  },
  mounted() {
    this.chart = echarts.init(this.$el, 'macarons')
    if (this.autoResize) {
      this.__resizeHandler = debounce(() => {
        if (this.chart) {
          this.chart.resize()
        }
      }, 100)
      window.addEventListener('resize', this.__resizeHandler)
    }

    // 监听侧边栏的变化
    this.sidebarElm = document.getElementsByClassName('sidebar-container')[0]
    this.sidebarElm && this.sidebarElm.addEventListener('transitionend', this.sidebarResizeHandler)
  },
  beforeDestroy() {
    if (!this.chart) {
      return
    }
    if (this.autoResize) {
      window.removeEventListener('resize', this.__resizeHandler)
    }

    this.sidebarElm && this.sidebarElm.removeEventListener('transitionend', this.sidebarResizeHandler)

    this.chart.dispose()
    this.chart = null
  },
  methods: {
    sidebarResizeHandler(e) {
      if (e.propertyName === 'width') {
        this.__resizeHandler()
      }
    },
    generate_timevector() {
      var data = []
      for (var i = 0; i < this.trendData.raw.length; i++) {
        data.push((i / 20480).toFixed(2))
      }
      return data
    },
    setChart() {
      this.chart.setOption({

        xAxis: {
          // data: ['Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat', 'Sun'],
          boundaryGap: false,
          axisTick: {
            show: false
          },
          data: this.generate_timevector()
        },
        grid: {
          left: 10,
          right: 10,
          bottom: 20,
          top: 30,
          containLabel: true
        },
        tooltip: {
          trigger: 'axis',
          axisPointer: {
            type: 'cross'
          },
          padding: [5, 10]
        },
        toolbox: {
          show: true,
          feature: {
            magicType: { show: true, type: ['line', 'bar'] },
            restore: { show: true },
            saveAsImage: { show: true }
          }
        },
        dataZoom: [
          {
            type: 'slider',
            show: true,
            xAxisIndex: [0],
            start: 0,
            end: 100
          }
        ],

        yAxis: {
          axisTick: {
            show: false
          }
          // max: (1.2 * Math.max.apply(null, this.trendData.raw)).toFixed(2),
          // min: (1.2 * Math.min.apply(null, this.trendData.raw)).toFixed(2)
        },
        legend: {
          data: ['Original', 'Envelope']
        },
        series: [{
          name: 'Original',
          itemStyle: {
            normal: {
              lineStyle: {
                width: 2
              }
            }
          },

          smooth: true,
          symbol: 'none',
          sampling: 'average',
          large: true, type: 'line',
          data: this.trendData.raw,
          animationDuration: 2800,
          animationEasing: 'cubicInOut'
        }, {
          name: 'Envelope',
          itemStyle: {
            normal: {
              lineStyle: {
                width: 2
              }
            }
          },

          smooth: true,
          symbol: 'none',
          sampling: 'average',
          large: true, type: 'line',
          data: this.trendData.env,
          animationDuration: 2800,
          animationEasing: 'cubicInOut'
        }]
      })
    }

  }
}
</script>
