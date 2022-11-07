<template>
  <div
    class="width:100px;margin:0 auto;"
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
    ></Table>
    <Pagination :config="config"></Pagination>
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
import { tableMixin } from "@/util/mixins.js"
export default {
  components: {
    Pagination,
    Table,
    Dialog
  },
  mixins: [tableMixin],
  data () {
    return {
      TableConfig: {},
      config: {},
      isAdd: null
    }
  },
}
</script>
<!-- 删除拿不到new出来的实例 -->
<!-- 1.增改都需要拿到对话框的 
     2.对话框如果是确认的按钮的话需要重新调取获取数据的接口
     3.查是另一个界面 -->