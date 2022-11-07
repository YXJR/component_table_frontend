export const tableMixin = {
  mounted() {
    this.TableConfig.getData && this.TableConfig.getData()
  },
  methods: {
    edit(row) {
      this.$store.commit('SET_ISSHOW_DIALOG', true)
      this.isAdd = row.id
    },
    add() {
      this.$store.commit('SET_ISSHOW_DIALOG', true)
      this.isAdd = null
    },
    view(row) {
      //路由跳转...
      console.log(this.$route.path)
    },
    del(row) {
      this.TableConfig.del && this.TableConfig.del(this, row.id)
    },
    ensure(data) {
      this.$store.commit('SET_ISSHOW_DIALOG', false)
      if (!this.isAdd) {
        //新增
        this.TableConfig.add && this.TableConfig.add(this, data)
      } else {
        //编辑
        this.TableConfig.edit && this.TableConfig.edit(this, data)
      }
    },
  },
}
