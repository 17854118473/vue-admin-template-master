import { post } from '../../utils/axios'

const dist = {
  namespaced: true,
  state: {
    title: '室内环境信息',
    List: null
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
      post('/commonUser/queryEnviromentInfo', {
        userId: 2
      }).then((msg) => {
        // 获取数据
        context.state.List = msg.data
      })
    }
  }
}
export default dist

