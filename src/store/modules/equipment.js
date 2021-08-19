import { post } from '../../utils/axios'

const dist = {
  namespaced: true,
  state: {
    title: '设备信息',
    List: {
      moveTime: '',
      moveTrend: '',
      moveStatus: '',
      fallStatus: '',
      warning: '',
      trace: '',
      more: ''
    }
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
      post('/commonUser/queryEquipmentInfo', {
        userId: 2
      }).then((msg) => {
        // 获取数据
        context.state.List = msg.data
      })
    },
    inKitchen(context) {
      context.state.List = {
        moveTime: '1',
        moveTrend: '慢走',
        moveStatus: '缓慢',
        fallStatus: '无',
        warning: '无',
        trace: '',
        more: ''
      }
    },
    inBedroom(context) {
      context.state.List = {
        moveTime: '3',
        moveTrend: '慢走',
        moveStatus: '中等',
        fallStatus: '无',
        warning: '无',
        trace: '',
        more: ''
      }
    }
  }
}
export default dist
