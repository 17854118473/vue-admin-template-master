<template>
  <div class="app-container">
    <el-row>
<!--      <el-col :span="8"><el-button @click="handleAdd" ></el-button></el-col>-->
      <el-col :span="8"><el-input v-model="ListQuery.searchName" placeholder="请输入需要检索的用户名" class="input-with-select"></el-input></el-col>
      <el-col :span="7">
        <el-button type="primary" icon="el-icon-search" @click="handleSearch">搜索</el-button>
        <el-button type="primary" icon="el-icon-delete-solid" @click="fetchData">取消</el-button>
      </el-col>
    </el-row>
    <el-table
      :data="List"
      style="width: 100%">
      <el-table-column
        prop="username"
        label="用户名"
        width="180">
      </el-table-column>
      <el-table-column
        prop="pwd"
        label="密码"
        width="180">
      </el-table-column>
      <el-table-column
        prop="tel"
        label="电话"
        width="180">
      </el-table-column>
      <el-table-column
        prop="email"
        label="邮箱"
        width="180">
      </el-table-column>
      <el-table-column
        prop="img"
        label="头像"
        width="180">
      </el-table-column>
      <el-table-column
        prop="wechat"
        label="微信号"
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
            @click="handleDelete(scope.row.userid)">删除</el-button>
        </template>
      </el-table-column>
      <el-dialog
        title="用户"
        :visible.sync="dialogFormVisible"
        width="55%"
        :before-close="handleClose"
        :append-to-body="true">
        <el-form ref="form"  label-width="80px" v-model="input">
          <el-form-item label="用户名">
            <el-input v-model="input.username"></el-input>
          </el-form-item>
          <el-form-item label="密码">
            <el-input v-model="input.pwd"></el-input>
          </el-form-item>
          <el-form-item label="电话">
            <el-input v-model="input.tel"></el-input>
          </el-form-item>
          <el-form-item label="邮箱">
            <el-input v-model="input.email"></el-input>
          </el-form-item>
          <el-form-item label="头像">
            <el-input v-model="input.email"></el-input>

          </el-form-item>
          <el-form-item label="微信号">
            <el-input v-model="input.wechat"></el-input>
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
    ...mapState('userManager', ['title', 'List', 'Total', 'ListQuery', 'dialogFormVisible', 'input'])
  },
  data() {
    return {
      listLoading: false
    }
  },
  // 页面开始加载的时候，调用里面的方法
  created() {
    this.fetchData()
  },
  components: {
    Pagination
  },
  // 里面写的方法
  methods: {
    ...mapActions('userManager', ['fetchData', 'handleEdit', 'handleAdd', 'handleClose', 'handleSave', 'handleDelete', 'handleSearch'])
  }
}
</script>
