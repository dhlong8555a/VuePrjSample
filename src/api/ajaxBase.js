import axios from 'axios'
// import * as tokenPrc from '@/js/tokenProcess'

const DOMAIN_KEY = 'devopscloud'
const DEF_REST_PREFIX = '/devops'
const REST_PREFIX = getRestPrefix()
// const RENEAL_TOKEN_KEY = 'renewaltoken'
const REST_BASEURL = getBaseURL()

axios.defaults.headers.common['Accept'] = 'application/json'
axios.defaults.headers.post['Content-Type'] = 'application/json'
// axios.interceptors.response.use(response => {
//   saveRenewalToken(response)
//   return response.data
// }, error => {
//   let errInfo = {}
//   if (error.response != null) {
//     errInfo = {
//       data: error.response.data == null ? null : error.response.data,
//       errCode: error.response.status,
//       subStatus: error.response.headers.substatus != null ? parseInt(error.response.headers.substatus) : 0
//     }
//     if (errInfo.errCode === 401 && errInfo.subStatus === 3) tokenPrc.clearToken()
//   }
//   return Promise.reject(errInfo)
// })

function ajaxRest ({url, method, data = {},
                    timeout = {server: 5000, client: 5000},
                    pathPrefix = REST_PREFIX}) {
  let p = new Promise((resolve, reject) => {
    let urlParams = {}
    let bodyData = {}
    if (method === 'GET') {
      urlParams = {_now: Date.now(), ...data}
    } else bodyData = data

    let config = {
      url: `${pathPrefix}${url}`,
      baseURL: REST_BASEURL,
      method: method,
      params: urlParams,
      data: bodyData,
      timeout: timeout.client
    }

    // let token = tokenPrc.getToken()
    // if (token != null) {
    //   config.headers = {
    //     'Authorization': `Bearer ${token}`
    //   }
    // }

    axios.request(config).then(data => {
      resolve(data)
    }).catch(error => {
      reject(error)
    })
  })

  return p
}

// function saveRenewalToken (resp) {
//   if (resp.headers[`${RENEAL_TOKEN_KEY}`] != null &&
//     resp.headers[`${RENEAL_TOKEN_KEY}`].length > 0) {
//     tokenPrc.setToken(resp.headers[`${RENEAL_TOKEN_KEY}`])
//   }
// }

function getBaseURL () {
  let baseUrl = ''
  if (window.location.origin.search(DOMAIN_KEY) !== -1) {
    let reg = new RegExp('-\\d+-\\d+-\\d+')
    baseUrl = window.location.origin.replace(reg, '').replace('portal', 'api')
  }
  return baseUrl
}

function getRestPrefix () {
  let prefix = ''
  if (window.location.origin.search(DOMAIN_KEY) === -1) {
    prefix = DEF_REST_PREFIX
  }
  return prefix
}

export default ajaxRest
