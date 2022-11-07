//pagination配置项的类
class PaginationConfig {
  constructor(config) {
    let { pageSize, pageSizes, total } = config
    this.pageSize = pageSize
    this.total = total
    this.pageSizes = pageSizes
  }
  handleSize(val) {
    console.log(`handleSize:${val}`)
  }
  handleCurrent(val) {
    console.log(`handleCurrent:${val}`)
  }
}
//table类
class TableClass {
  constructor(mapList, tableApi) {
    this.tableData = []
    this.loading = false
    this.mapList = mapList
    this.tableApi = tableApi
    this.isShowDialog = false
  }
  getData() {
    this.loading = true
    console.log('触发了getData')
    this.tableApi.getData().then((res) => {
      console.log(res)
      this.tableData = res
      this.loading = false
    })
  }
  //表格基本的增删改查 add和edit是打开对话框
  add(vm, data) {
    const that = vm
    this.tableApi
      .add(data)
      .then(() => {
        that.$message.success('新增成功')
        this.getData()
      })
      .catch((err) => {
        that.$message.error('新增失败')
      })
  }
  edit(vm, data) {
    const that = vm
    this.tableApi
      .edit(data)
      .then(() => {
        that.$message.success('修改成功')
        this.getData()
      })
      .catch((err) => {
        that.$message.error('修改失败')
      })
  }
  view(vm, data, url) {
    let that = vm
    that.$router.push({
      path: url,
      query: {
        inter: this.this.tableApi.getData,
        id: data,
      },
    })
  }
  del(vm, id) {
    const that = vm
    that
      .$alert('确定要删除该条记录吗？', '提示', {
        confirmButonText: '确定',
      })
      .then(() => {
        this.tableApi
          .del(id)
          .then(() => {
            that.$message.success('删除成功')
          })
          .catch((err) => {
            that.$message.error(err.message)
          })
      })
  }
}

export const addPaginationConfig = (config) => {
  return new PaginationConfig(config)
}
export const addTableConfig = (mapList, tableApi) => {
  return new TableClass(mapList, tableApi)
}
