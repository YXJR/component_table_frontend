<template>
  <div v-loading="TableConfig.loading">
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
import Pagination from "@/components/table/el-pagination.vue"
import Dialog from "@/components/dialog.vue"
import { addPaginationConfig, addTableConfig } from "@/util/class.js"
import { tableApi } from "@/api/index.js"
import { tableMixin } from "@/util/mixins.js"

const mapList = [
  {
    label: '姓名',
    prop: 'name'
  },
  {
    label: '总量2',
    prop: 'amount2'
  },
  {
    label: "总量3",
    prop: "amount3"
  },
]


let config = addPaginationConfig({
  pageSize: 3,
  pageSizes: [3, 4, 5],
  total: 0
})

let instance = addTableConfig(mapList, tableApi)

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
