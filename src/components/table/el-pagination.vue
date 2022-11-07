<template>
  <el-pagination
    @size-change="handleSizeChange"
    @current-change="handleCurrentChange"
    :current-page="1"
    :page-sizes="config.pageSizes"
    :page-size="config.pageSize"
    layout="total, sizes, prev, pager, next, jumper"
    :total="config.total"
  >

  </el-pagination>
</template>

<script>
export default {
  props: {
    config: {
      type: Object,
      default: () => {
        return {}
      }
    },
  },
  methods: {
    handleSizeChange (val) {
      this.config.handleSize(val)
    },
    handleCurrentChange (val) {
      this.config.handleCurrent(val)
    },
  }
}
</script>

<style lang="scss" scoped>
</style>