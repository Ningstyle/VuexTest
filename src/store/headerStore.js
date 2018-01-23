export default {
  state: {
    comhead: {
      src: require('../assets/logo.png'),
      leftname: '返回',
      rightname: '菜单',
      centername: '个人中心',
      status: true
    }
  },
  mutations: {
    increment (state) {
      state.comhead.centername = '修改信息'
    },
    increment1 (state) {
      state.comhead.centername = '个人中心'
    }
  }
}
