<template>
  <div id="app">
    <a-layout class="app-container">
      <app-sider />
      <a-layout>
        <perfect-scrollbar>
          <app-header />
          <a-layout-content id="app-content">
            <router-view :key="routeKey" />
          </a-layout-content>
          <a-layout-footer>
            <app-footer />
          </a-layout-footer>
        </perfect-scrollbar>
      </a-layout>
    </a-layout>
  </div>

</template>

<script>
  import AppSider from 'component/layout/AppSider/AppSider'
  import AppHeader from 'component/layout/AppHeader/AppHeader'
  import AppFooter from 'component/layout/AppFooter/AppFooter'

  export default {
    components: {
      AppSider,
      AppHeader,
      AppFooter,
    },

    watch: {
      $route: {
        handler() {
          console.log(this.$route.fullPath)
          this.routeKey = this.$route.fullPath
        },
        immediate: true,
      },
    },

    data() {
      return {
        routeKey: null,
      }
    },
  }
</script>

<style lang="stylus" scoped>
  @import '~asset/style/variable.styl'
  #app
    width 100%
    height 100%
    .app-container
      width 100%
      height 100%
      min-width $layout-content-min-width
      .ps
        width 100%
        height 100%
        #app-content
          flex none
          margin $layout-content-margin
          padding $layout-content-padding
</style>