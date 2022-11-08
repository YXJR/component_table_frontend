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
export const addPaginationConfig = (config) => {
  return new PaginationConfig(config)
}
