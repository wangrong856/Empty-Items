import request from '@/utils/request'

// export function login(data) {

// }
// import request from '@/utils/request'

export function login(data) {
  return request({
    url: 'sys/login',
    method: 'post',
    data
  })
}

export function getInfo(token) {
  return request({
    url: 'sys/profile',
    method: 'get',
    params: { token }
  })
}


