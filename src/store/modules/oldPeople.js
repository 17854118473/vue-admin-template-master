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
      post('/commonUser/queryOldPeopleInfo', {
        page: context.state.ListQuery.page - 1,
        pageSize: context.state.ListQuery.Limit,
        userId: 2
      }).then((msg) => {
        // 获取数据的总数
        // console.log(msg)
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
      context.state.input = { userId: 2 }
      context.state.dialogFormVisible = true
    },
    handleClose(context) {
      context.state.dialogFormVisible = false
    },
    handleSave(context) {
      post('/commonUser/saveOrUpdate', context.state.input).then((msg) => {
        context.dispatch('fetchData')
      })
      context.state.dialogFormVisible = false
    },
    handleDelete(context, id) {
      if (confirm('是否删除')) {
        get('/commonUser/deleteOldPeopleById?id=' + id).then((msg) => {
          context.dispatch('fetchData')
        })
      }
    }
  }
}
export default dist

