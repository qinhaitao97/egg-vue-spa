<template>
  <div>
    <a-button @click="handleClick({ statusCode: 200 })">success</a-button>
    <a-button @click="handleClick({ statusCode: 401 })">401</a-button>
    <a-button @click="handleClick({ statusCode: 500 })">5xx</a-button>
  </div>
</template>

<script>
  export default {
    methods: {
      async handleClick(param) {
        // 调用测试接口
        const res = await this.$api.getTest(param)
        const { success, message, data } = res.data

        if (success) {
          console.log(data)
          this.$message.success(`success: ${ data.data }`)
        } else {
          this.$message.error(`fail: ${ message }`)
        }
      },
    },
  }
</script>

<style lang="stylus" scoped>

</style>