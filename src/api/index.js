import axios from '../utils/request'

// 网络请求访问路径
const base = {
  baseUrl: '/api',
  register: '/register'
}

// 网络请求方法
const api = {
  /**
   * 注册
   * params = {
   *  username: "123",
   *  password: "213"
   *  ...
   * }
   */
  register(params) {
    return axios.post(base.baseUrl + base.register, params)
  }
}

export default api
