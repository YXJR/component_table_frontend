<template>
  <div>
    <div>
      {{name}}
    </div>
    <el-button @click="changeButton('Draft')">保存草稿</el-button>
    <el-button @click="changeButton('Submit')">提交审批</el-button>
  </div>
</template>

<script>
export default {
  computed: {
    name () {
      let routeName = this.$route.name
      return routeName
    }
  },
  data () {
    return {
    }
  },
  methods: {
    choiceInterface (name) {
      let strategies = {
        'purchaseAddDraft': () => { console.log('PurchaseDraft') },
        'purchaseAddSubmit': () => { console.log('PurchaseSubmit') },
        'returnAddDraft': () => { console.log('ReturnDraft') },
        'returnAddSubmit': () => { console.log('ReturnSubmit') },
      }
      return strategies[name]
    },
    changeButton (value) {
      let status = this.$route.name + value
      this.choiceInterface(status)()
    }
  },

}
</script>

<style lang="scss" scoped>
</style>