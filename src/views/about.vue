<template>
  <div
    v-loading="TableConfig.loading"
    class="component_table"
  >
    <el-button
      @click="add"
      type="primary"
      size="small"
    >新增</el-button>
    <Table
      :tableData="TableConfig.tableData"
      :mapList="TableConfig.mapList"
      @edit="edit"
      @view="view"
      @del="del"
      class="margin_top_10"
    ></Table>
    <Pagination
      :config="config"
      class="margin_top_10"
    ></Pagination>
    <Dialog
      @ensure="ensure"
      :isAdd="isAdd"
    ></Dialog>
  </div>
</template>
<script>

import Table from "@/components/table/el-table.vue"
import Pagination from "@/components/pagination/el-pagination.vue"
import Dialog from "@/components/dialog.vue"
import { addPaginationConfig } from "@/components/pagination/configHook.js"
import { addTableConfig } from "@/components/table/configHook.js"
import { fruitApi } from "@/api/fruit.js"
import { tableMixin } from "@/util/mixins.js"

const mapList = [
  {
    label: '水果',
    prop: 'name'
  },
  {
    label: '价格',
    prop: 'price'
  },
  {
    label: "库存",
    prop: "amount"
  },
]


let config = addPaginationConfig({
  pageSize: 3,
  pageSizes: [3, 4, 5],
  total: 0
})

let instance = addTableConfig(mapList, fruitApi)

export default {
  components: {
    Pagination,
    Table,
    Dialog
  },
  mixins: [tableMixin],
  data () {
    return {
      TableConfig: instance,
      config: config,
      isAdd: null
    }
  },
}
</script>
