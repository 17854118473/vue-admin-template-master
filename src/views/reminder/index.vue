<template>
  <div class="app-container" style="margin-left: 3%">
    <el-row>
      <el-col :span="8"><el-button @click="handleAdd">添加新提醒</el-button></el-col>
    </el-row>
    <el-table
      :data="List"
      style="width: 100%;margin-top: 20px">
      <el-table-column
        prop="content"
        label="提示内容"
        width="150">
      </el-table-column>
      <el-table-column
        prop="time"
        label="起始时间"
        width="210">
      </el-table-column>
      <el-table-column
        prop="frequency"
        label="执行频率"
        width="180">
      </el-table-column>
      <el-table-column label="操作">
        <template slot-scope="scope">
          <el-button
            size="mini"
            @click="handleEdit(scope.row)">编辑</el-button>
          <el-button
            size="mini"
            type="danger"
            @click="handleDelete(scope.row.id)">删除</el-button>
        </template>
      </el-table-column>
    </el-table>
    <el-dialog
      title="添加新提醒"
      :visible.sync="dialogFormVisible"
      width="55%"
      :before-close="handleClose"
      :append-to-body="true">
      <el-form ref="form"  label-width="80px" v-model="input">
        <el-form-item label="提示内容">
          <el-input v-model="input.content"></el-input>
        </el-form-item>
        <el-form-item label="起始日期">
          <el-date-picker
            v-model="input.time"
            type="daterange"
            range-separator="至"
            start-placeholder="开始日期"
            end-placeholder="结束日期">
          </el-date-picker>
        </el-form-item>
        <el-form-item label="执行频率">
          <el-cascader
            v-model="input.frequency"
            :options="options"
            :props="{ multiple: true, checkStrictly: true }"
            clearable>
          </el-cascader>
        </el-form-item>
      </el-form>
      <span slot="footer" class="dialog-footer">
        <el-button @click="handleClose">取 消</el-button>
        <el-button type="primary" @click="handleSave">确 定</el-button>
      </span>
    </el-dialog>
  </div>
</template>
<script>
import Pagination from '@/components/Pagination'
import { mapActions, mapState } from 'vuex'

export default {
  computed: {
    ...mapState('reminder', ['title', 'List', 'Total', 'ListQuery', 'dialogFormVisible', 'input'])
  },
  data() {
    return {
      listLoading: false,
      value1: '',
      value2: '',
      options: [{
        value: 'everyday',
        label: '每天'
      }, {
        value: 'defineBySelf',
        label: '自定义',
        children: [{
          value: 'monday',
          label: '星期一'
        }, {
          value: 'tuesday',
          label: '星期二'
        }, {
          value: 'wednesday',
          label: '星期三'
        }, {
          value: 'thursday',
          label: '星期四'
        }, {
          value: 'friday',
          label: '星期五'
        }, {
          value: 'saturday',
          label: '星期六'
        }, {
          value: 'sunday',
          label: '星期天'
        }]
      }]
    }
  },
  // 页面开始加载的时候，调用里面的方法
  created() {
    // this.fetchData()
  },
  components: {
  },
  // 里面写的方法
  methods: {
    ...mapActions('reminder', ['fetchData', 'handleEdit', 'handleAdd', 'handleClose', 'handleSave', 'handleDelete', 'handleSearch'])
  }
}
</script>
