import http from "../utils/request"

export const getData=()=>{
    //返回一个promise对象
    return http.get("getData")
}
export const getEcharts1Data=()=>{
    //返回一个promise对象
    return http.get("getEcharts1Data")
}
export const getPie=()=>{
    //返回一个promise对象
    return http.get("getPie")
}
export const userInfo=()=>{
    //返回一个promise对象
    return http.get("userInfo")
}