<template>
  <div class="app-container">
    <el-table
      :data="List"
      style="width: 100%">
      <el-table-column
        prop="temperature"
        label="温度"
        width="100">
      </el-table-column>
      <el-table-column
        prop="humidity"
        label="湿度"
        width="100">
      </el-table-column>
      <el-table-column
        prop="gas"
        label="气压"
        width="100">
      </el-table-column>
      <el-table-column
        prop="time"
        label="时间"
        width="100">
      </el-table-column>
    </el-table>
  </div>
</template>

<script>
import { mapActions, mapState } from 'vuex'

export default {
  computed: {
    ...mapState('enviroment', ['title', 'List'])
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
    ...mapActions('enviroment', ['fetchData'])
  }
}
</script>
