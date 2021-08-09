import Axios from 'axios'
import qs from 'qs'

const myAxios = Axios.create({
  baseURL: 'http://127.0.0.1:8080/',
  timeout: 5000
})

// 携带token
// myAxios.defaults.headers.common['Authorization'] = getToken()

myAxios.interceptors.response.use(function(response) {
  // console.log(response.data)
  const { data } = response.data
  // console.log(data.status)
  response.status = data.status
  response.statusText = data.message
  // 统一异常处理
  if (data.status !== 200) {
    console.log('状态码不是200')
    return Promise.reject(data.message)
  }
  return data
}, function(error) {
  return Promise.reject(error)
})

export function get(url, params) {
  return myAxios({
    method: 'get',
    url,
    params,
    timeout: 10000,
    headers: {
      'X-Requested-With': 'XMLHttpRequest'
    }
  })
}

export function post(url, data) {
  return myAxios({
    method: 'post',
    url,
    data: qs.stringify(data),
    timeout: 10000,
    headers: {
      'X-Requested-With': 'XMLHttpRequest',
      'Content-Type': 'application/x-www-form-urlencoded; charset=UTF-8'
    }
  })
}

export function post_obj_array(url, data) {
  return myAxios({
    method: 'post',
    url,
    data: qs.stringify(data, { allowDots: true }),
    timeout: 10000,
    headers: {
      'X-Requested-With': 'XMLHttpRequest',
      'Content-Type': 'application/x-www-form-urlencoded; charset=UTF-8'
    }
  })
}

export function post_array(url, data) {
  return myAxios({
    method: 'post',
    url,
    data: qs.stringify(data, { arrayFormat: 'repeat' }),
    timeout: 10000,
    headers: {
      'X-Requested-With': 'XMLHttpRequest',
      'Content-Type': 'application/x-www-form-urlencoded; charset=UTF-8'
    }
  })
}

export function json(url, data) {
  return myAxios({
    method: 'post',
    url,
    data,
    timeout: 10000
  })
}

