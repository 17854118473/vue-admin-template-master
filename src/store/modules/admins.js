import { get, post } from '../../utils/axios'

const dist = {
  namespaced: true,
  state: {
    title: '管理员信息管理',
    List: null,
    Total: 3,
    ListQuery: {
      page: 1, // 当前页码
      Limit: 5, // 一页显示几条
      searchName: ''
    },
    dialogFormVisible: false,
    input: {}
  },
  mutations: {
    // 普通方法
  },
  actions: {
    // 异步方法
    fetchData(context) {
      // get('/user/findAll').then((msg) => {
      //   context.state.List = msg.data
      // })
      post('/admin/query', {
        page: context.state.ListQuery.page - 1,
        pageSize: context.state.ListQuery.Limit
      }).then((msg) => {
        // 获取数据的总数
        context.state.Total = msg.total
        // 获取数据
        context.state.List = msg.data
      })
    },
    handleEdit(context, data) {
      // console.log(data)
      context.state.input = data
      context.state.dialogFormVisible = true
    },
    handleAdd(context) {
      context.state.input = { id: '' }
      context.state.dialogFormVisible = true
    },
    handleClose(context) {
      context.state.dialogFormVisible = false
    },
    handleSave(context) {
      post('/admin/saveOrUpdate', context.state.input).then((msg) => {
        context.dispatch('fetchData')
      })
      context.state.dialogFormVisible = false
    },
    handleDelete(context, id) {
      if (confirm('是否删除')) {
        console.log(id)
        get('/admin/deleteById?id=' + id).then((msg) => {
          console.log(msg)
          context.dispatch('fetchData')
        })
      }
    },
    handleSearch(context) {
      console.log(context.state.ListQuery.searchName)
      post('/admin/selectByUsername', {
        username: context.state.ListQuery.searchName
      }).then((msg) => {
        // console.log(msg)
        context.state.List = msg.data
      })
    }
  }
}
export default dist

