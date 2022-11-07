<template>
  <el-dialog
    :title="title"
    :visible="dialogVisible"
    width="30%"
    @open="getData"
    @close="cancel"
  >
    <span>这是表格的{{title}}哦</span>
    <span
      slot="footer"
      class="dialog-footer"
    >
      <el-button @click="cancel">取 消</el-button>
      <el-button
        type="primary"
        @click="ensure"
      >确 定</el-button>
    </span>
  </el-dialog>
</template>

<script>

export default {
  name: 'Dialog',
  computed: {
    dialogVisible () {
      return this.$store.state.table.isShowDialog
    },
    title () {
      return this.isAdd ? '编辑' : '新增'
    }

  },
  props: ['isAdd'],
  data () {
    return {
      formData: {}
    }
  },
  methods: {
    getData () {
      if (this.isAdd) {
        //走获取详情的接口
      }
    },
    cancel () {
      this.$store.commit('SET_ISSHOW_DIALOG', false)
    },
    ensure () {
      this.$emit('ensure', this.formData)
    }
  }
}
</script>

<style lang="scss" scoped>
</style>