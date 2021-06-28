<template>
  <app-root></app-root>
</template>

<script type="text/babel">
import Vue from 'vue'
import AppRoot from 'component/layout/app/index.vue'
import Antd from 'ant-design-vue'
import plugin from 'framework/plugin'
import PerfectScrollbar from 'vue2-perfect-scrollbar'

// 全局样式
import 'asset/style/index.styl'
// antd 样式
import 'ant-design-vue/dist/antd.css'
// 滚动条样式
import 'vue2-perfect-scrollbar/dist/vue2-perfect-scrollbar.css'

Vue.use(Antd)
Vue.use(plugin)
Vue.use(PerfectScrollbar)

export default {
  components: {
    AppRoot,
  },
  computed: {},
  mounted() {},
}
</script>