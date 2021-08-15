<template>
  <div class="app-container">
    <el-table
      :data="List"
      style="width: 100%">
      <el-table-column
        prop="equipment1"
        label="设备1"
        width="180">
      </el-table-column>
      <el-table-column
        prop="equipment2"
        label="设备2"
        width="180">
      </el-table-column>
      <el-table-column
        prop="equipment3"
        label="设备3"
        width="180">
      </el-table-column>
      <el-table-column
        prop="equipment4"
        label="设备4"
        width="180">
      </el-table-column>
      <el-table-column
        prop="time"
        label="时间"
        width="180">
      </el-table-column>
    </el-table>
  </div>
</template>

<script>
import { mapActions, mapState } from 'vuex'

export default {
  computed: {
    ...mapState('equipment', ['title', 'List'])
  },
  data() {
    return {
      listLoading: false
    }
  },
  created() {
    this.fetchData()
  },
  methods: {
    ...mapActions('equipment', ['fetchData'])
  }
}
</script>
