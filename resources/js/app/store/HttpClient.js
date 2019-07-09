import axios from 'axios'

function getCookieValue(searchKey) {
  if (typeof searchKey === 'undefined') {
    return ''
  }

  let val = ''

  document.cookie.split(';').forEach(cookie => {
    const [key, value] = cookie.split('=')
    if (key === searchKey) {
      return val = value
    }
  })

  return val
}

let baseURL = '/'
if (process.env.NODE_ENV === 'production') {
  baseURL = '/crm'
}

const $axios = axios.create({
  headers: {
    'X-Requested-With': 'XMLHttpRequest'
  },
  baseURL: baseURL
})

$axios.interceptors.request.use(config => {
  config.headers['X-XSRF-TOKEN'] = getCookieValue('XSRF-TOKEN')
  return config
})

$axios.interceptors.response.use(
  response => response,
  error => error.response || error
)

export default $axios