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
  /*
    业务：针对A，B两个页面，都是表单提交，只是部分表单字段不同；A，B两个页面都有保存草稿和提交审批得按钮；
     前端页面复用； 后端给了4个接口。 之前根据路由名称与点击时的按钮状态判断走哪个接口，有很多的if...else语句
     现优化：使用策略模式，减少if...else语句，提高代码的可读性和可维护性
  */
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