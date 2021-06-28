<template>
  <a-layout-sider id="app-sider" width="208" v-model="collapsed" :trigger="null" collapsible>
    <div class="sider">
      <div class="sider-logo">
        <div class="logo">{{ collapsed ? 'LG' : 'LOGO' }}</div>
      </div>
      <div class="sider-menu">
        <perfect-scrollbar>
          <a-menu theme="light" mode="inline" :default-selected-keys="[1]">
            <a-menu-item v-for="i in 5" :key="i">
              <a-icon type="user" />
              <span style="fontWeight:700">nav {{ i }}</span>
            </a-menu-item>
          </a-menu>
        </perfect-scrollbar>
      </div>
      <div class="sider-links">
        <!-- 展开/折叠 -->
        <p @click="() => (collapsed = !collapsed)"><a-icon :type="collapsed ? 'menu-fold' : 'menu-unfold'"></a-icon></p>
      </div>
    </div>
  </a-layout-sider>
</template>

<script>
  export default {
    data() {
      return {
        collapsed: false,
      }
    },
  }
</script>

<style lang="stylus" scoped>
  @import '~asset/style/variable.styl'
  #app-sider
    width 100%
    height 100%
    background $layout-sider-background
    user-select none
    .sider
      display flex
      flex-direction column
      height 100%
      width 100%
      .sider-logo
        width 100%
        padding 10px 10px
        .logo
          width 100%
          height $layout-sider-logo-height
          line-height $layout-sider-logo-height
          text-align center
          font-weight 700
          font-size 22px
          color #000
      .sider-menu
        flex 1
        width 100%
        font-weight 600
        overflow hidden auto
        .ps
          width 100%
          height 100%
      .sider-links
        width 100%
        height $layout-sider-link-height
        line-height $layout-sider-link-height
        border-top $border-light
        box-sizing border-box
        p
          width 100%
          height 100%
          text-align center
          cursor pointer
        :hover
          font-size 18px
          color $background-hover
</style>