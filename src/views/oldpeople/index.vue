<template>
  <div class="app-container">
    <el-row>
      <el-col :span="8"><el-button @click="handleAdd">添加老人</el-button></el-col>
    </el-row>
    <el-table
      :data="List"
      style="width: 100%">
      <el-table-column
        prop="name"
        label="名字"
        width="100">
      </el-table-column>
      <el-table-column
        prop="sex"
        label="性别"
        width="100">
      </el-table-column>
      <el-table-column
        prop="height"
        label="身高"
        width="100">
      </el-table-column>
      <el-table-column
        prop="weight"
        label="体重"
        width="100">
      </el-table-column>
      <el-table-column
        prop="age"
        label="年龄"
        width="100">
      </el-table-column>
      <el-table-column
        prop="BMI"
        label="bmi"
        width="100">
      </el-table-column>
      <el-table-column
        prop="tel"
        label="电话"
        width="100">
      </el-table-column>
      <el-table-column
        prop="urgenttel"
        label="紧急电话"
        width="100">
      </el-table-column>
      <el-table-column
        prop="address"
        label="地址"
        width="100">
      </el-table-column>
      <el-table-column label="操作">
        <template slot-scope="scope">
          <el-button
            size="mini"
            @click="handleEdit(scope.row)">编辑</el-button>
          <el-button
            size="mini"
            type="danger"
            @click="handleDelete(scope.row.oldid)">删除</el-button>
        </template>
      </el-table-column>
      <el-dialog
        title="用户"
        :visible.sync="dialogFormVisible"
        width="55%"
        :before-close="handleClose"
        :append-to-body="true">
        <el-form ref="form"  label-width="80px" v-model="input">
          <el-form-item label="姓名">
            <el-input v-model="input.name"></el-input>
          </el-form-item>
          <el-form-item label="性别">
            <el-input v-model="input.sex"></el-input>
          </el-form-item>
          <el-form-item label="身高">
            <el-input v-model="input.height"></el-input>
          </el-form-item>
          <el-form-item label="体重">
            <el-input v-model="input.weight"></el-input>
          </el-form-item>
          <el-form-item label="年龄">
            <el-input v-model="input.age"></el-input>
          </el-form-item>
          <el-form-item label="BMI">
            <el-input v-model="input.bmi"></el-input>
          </el-form-item>
          <el-form-item label="电话">
            <el-input v-model="input.tel"></el-input>
          </el-form-item>
          <el-form-item label="紧急电话">
            <el-input v-model="input.urgenttel"></el-input>
          </el-form-item>
          <el-form-item label="地址">
            <el-input v-model="input.address"></el-input>
          </el-form-item>
        </el-form>
        <span slot="footer" class="dialog-footer">
          <el-button @click="handleClose">取 消</el-button>
          <el-button type="primary" @click="handleSave">确 定</el-button>
        </span>
      </el-dialog>
    </el-table>
    <pagination v-show="Total>0" :total="Total" :page.sync="ListQuery.page" :limit.sync="ListQuery.Limit" @pagination="fetchData" />
  </div>
</template>

<script>
import Pagination from '@/components/Pagination'
import { mapActions, mapState } from 'vuex'

export default {
  computed: {
    ...mapState('oldPeople', ['title', 'List', 'Total', 'ListQuery', 'dialogFormVisible', 'input'])
  },
  data() {
    return {
      listLoading: false
    }
  },
  created() {
    this.fetchData()
  },
  components: {
    Pagination
  },
  methods: {
    ...mapActions('oldPeople', ['fetchData', 'handleEdit', 'handleAdd', 'handleClose', 'handleSave', 'handleDelete', 'handleSearch'])
  }
}
</script>
