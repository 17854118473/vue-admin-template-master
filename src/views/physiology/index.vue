<template>
  <div class="app-container">
    <el-table
      :data="List"
      style="width: 100%">
      <el-table-column
        prop="bloodPressure"
        label="血压"
        width="180">
      </el-table-column>
      <el-table-column
        prop="bloodSugar"
        label="血糖"
        width="180">
      </el-table-column>
      <el-table-column
        prop="gas"
        label="血压"
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
    ...mapState('physiology', ['title', 'List'])
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
    ...mapActions('physiology', ['fetchData'])
  }
}
</script>
