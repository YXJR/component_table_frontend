export const tableMixin = {
  mounted() {
    this.TableConfig.getData && this.TableConfig.getData()
  },
  watch: {
    TableConfig: {
      deep: true,
      handler(newValue) {
        this.config.total =
          newValue.tableData && newValue.tableData.length
            ? newValue.tableData.length
            : 0
      },
    },
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
      //路由跳转,这里能做，也可以调用类里面的view（）方法操作
      console.log(this.$route.path)
      //可以根据当前的路径配合路由配置表进行跳转操作
      this.$router.push({
        name: 'detail',
        params: {
          id: row.id,
        },
      })
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
