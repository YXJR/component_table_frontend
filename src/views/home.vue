<template>
  <div
    class="component_table"
    v-loading="TableConfig.loading"
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
]
let config = addPaginationConfig({
  pageSize: 3,
  pageSizes: [2, 4, 6],
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
