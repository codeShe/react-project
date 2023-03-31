/**
 * 封装axios
 * 异步拦截ajax请求处理
 */
import axios from "axios";
import { message } from "antd";
/**
 * @param {string} url 
 * @param {object} data 
 * @param {string} method 
 * @returns {promise}
 */
export default function ajax (url, data = {}, method = 'GET') {
  return new Promise((resolve, reject) => {
    let promise
    if (method === 'GET') {
      promise = axios.get(url, { params: data })
    } else {
      promise = axios.post(url, data)
    }
    promise.then(response => {
      resolve(response.data)
    }).catch(error => {
      //如果失败请求后台出错，而不reject
      message.error('请求出错' + error)
    })
  })
}