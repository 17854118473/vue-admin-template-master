<template>
  <div class="app-container">
    <el-table
      :data="List"
      style="width: 100%">
      <el-table-column
        prop="temperature"
        label="温度"
        width="180">
<!--        <el-link href="https://element.eleme.io" target="_blank">温度</el-link>-->
      </el-table-column>
      <el-table-column
        prop="humidity"
        label="湿度"
        width="180">
      </el-table-column>
      <el-table-column
        prop="gas"
        label="气压"
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
