<template>
  <el-table
    :data="tableData"
    stripe
    border
  >
    <el-table-column
      v-for="(item) in mapList"
      :key="item.id"
      :prop="item.prop"
      :label="item.label"
    ></el-table-column>
    <el-table-column label="操作">
      <template v-slot="scope">
        <el-button
          type="text"
          size="small"
          @click="view(scope.row)"
        >查看</el-button>
        <el-button
          type="text"
          size="small"
          @click="edit(scope.row)"
        >编辑</el-button>
        <el-button
          type="text"
          size="small"
          @click="del(scope.row)"
        >删除</el-button>
      </template>
    </el-table-column>
  </el-table>
</template>

<script>
export default {
  name: 'Table',
  props: {
    mapList: {
      type: Array,
      default: () => {
        return []
      }
    },
    tableData: {
      type: Array,
      default: () => {
        return []
      }
    },

  },
  methods: {
    view (row) {
      this.$emit('view', row)
    },
    edit (row) {
      this.$emit('edit', row)
    },
    del (row) {
      this.$emit('del', row)
    },
  }
}
</script>


