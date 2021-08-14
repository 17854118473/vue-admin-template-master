import request from '@/utils/request'

export function login(data) {
  return request({
    url: '/go/login',
    method: 'post',
    data
  })
}

export function getInfo(token, id, identity) {
  return request({
    url: '/go/info?token=' + token + '&id=' + id + '&identity=' + identity,
    method: 'get'
  })
}

export function logout() {
  return request({
    url: '/go/logout',
    method: 'get'
  })
}
