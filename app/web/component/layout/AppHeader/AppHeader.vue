<template>
  <a-layout-header id="app-header">
    <div class="bar">
      <div class="user">
        <span class="avatar">
          <a-avatar
            shape="square"
            size="small"
            style="background:#7265e6;vertical-align:middle"
          >
            HI
          </a-avatar>
        </span>
        <span class="name" style="vertical-align:middle;fontWeight:700">HELLO</span>
      </div>
    </div>
  </a-layout-header>
</template>

<script>
  export default {
    data() {
      return {}
    },

    methods: {},
  }
</script>

<style lang="stylus" scoped>
  @import '~asset/style/variable.styl'
  #app-header
    position relative
    width 100%
    height $layout-header-height
    background $layout-header-background
    padding 0
    box-shadow 0 2px 12px 0 rgba(0, 0, 0, 0.1)
    user-select none
    .bar
      position absolute
      height 100%
      right 60px
      top 0
      line-height 48px
</style>