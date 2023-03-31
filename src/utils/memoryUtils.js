/**
 * 内存数据工具函数
 */
export let user = {}

const USER_KEY = 'user_key'

export const getUser = () => {
  user =  JSON.parse(localStorage.getItem(USER_KEY))||{}
  console.log(localStorage.getItem(USER_KEY))
}

export const setUser = ({username,_id}) => {
  localStorage.setItem(USER_KEY,JSON.stringify({username,_id}))
  user = {username,_id}
}

export const removeUser = () => {
  localStorage.removeItem(USER_KEY)
  user = {}
}