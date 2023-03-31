import ajax from "./ajax"
/**
 * 包含应用中所有接口请求函数模块
 * 每个函数的返回值都是promise
 */

/**
 * 登陆
 * @param {string} username 
 * @param {string} password 
 * @returns promise
 */
export const reqLogin = (username,password)=> ajax ('/login',{username,password},'POST') 
/**
 * 添加用户
 * @param {object} username 
 * @param {string} password 
 * @param {string} phone 
 * @param {string} email 
 * @param {string} role_id 
 * @returns 
 */
export const reqAddUser = ({username,password,phone,email,role_id})=>ajax('/login',{username,password,phone,email,role_id},'POST') 