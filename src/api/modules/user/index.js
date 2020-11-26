import http from '@/utils/http'
//
/**
 *  @parms resquest 请求地址 例如：http://197.82.15.15:8088/request/...
 *  @param '/testIp'代表vue-cil中config，index.js中配置的代理
 */
let baseUrl = "/user/"


export default{
  getUserList(params){
    return http.post(`${baseUrl}/list`,params)
  }
}
