<template>
  <div>
    <div>
      {{name}}
    </div>
    <el-button @click="changeButton(true)">保存草稿</el-button>
    <el-button @click="changeButton(false)">提交审批</el-button>
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
        'PurechaseDraft': () => { console.log('PurechaseDraft') },
        'PurechaseSubmit': () => { console.log('PurechaseSubmit') },
        'ReturnDraft': () => { console.log('ReturnDraft') },
        'ReturnSubmit': () => { console.log('ReturnSubmit') },
      }
      return strategies[name]
    },
    changeButton (value) {
      let isSaveDraft = value
      let status = ''
      if (isSaveDraft && this.name === 'purchaseAdd') {
        status = 'PurechaseDraft'
      } else if (!isSaveDraft && this.name === 'purchaseAdd') {
        status = 'PurechaseSubmit'
      } else if (isSaveDraft && this.name === 'returnAdd') {
        status = 'ReturnDraft'
      } else if (!isSaveDraft && this.name === 'returnAdd') {
        status = 'ReturnSubmit'
      }
      this.choiceInterface(status)()
    }
  },

}
</script>

<style lang="scss" scoped>
</style>