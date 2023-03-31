/*
  登陆的路由组件
*/

import React, { Component } from 'react'

import './login.less'
import logo from '../../assets/imgs/logo.svg'
import { Button, Form, Input, message } from 'antd';
import {
  UserOutlined, LockOutlined
} from '@ant-design/icons';

// import { reqLogin } from '../../api'
import {setUser,removeUser} from '../../utils/memoryUtils'

const Item = Form.Item
// const onFinish = async({ username, password }) => {
//   //发送请求
//   const res = await reqLogin(username, password)
//   if (res.status === 0) {
//     // 成功跳转页面,保存user数据
//     message('登陆成功！')
//     this.props.history.replace('/')
//     setUser(res.user)
//   } else {
//     message(`登陆失败,${res.msg}`)
//   }
// };
function onFinish(values){
  values._id = 'react10079'
  setUser(values)
  this.props.history.replace('/')
}
const onFinishFailed = (errorInfo) => {
  console.log('Failed:', errorInfo);
};

const validateMessages = {
  required: "'${username}' 是必选字段",
};

const login_rule = (_, value) => {
  if (!value) {
    return Promise.reject('请填写用户名')
  } else if (!/^[a-zA-Z0-9_]+$/.test(value)) {
    return Promise.reject('用户名是英文、数字或下划线组成')
  } else {
    return Promise.resolve()
  }
};
export default class Login extends Component {
  render() {
    //进入登陆页面清楚用户数据 
    removeUser()

    return (
      <div className='login'>
        <header className='header'>

          <div className='logo'>
            <img src={logo} alt="logo" />
          </div>
          <h1 className='title'>React后台管理系统</h1>
        </header>
        <section className='content'>
          <h2 >登陆</h2>
          <div className='form'>
            <Form
              name="form_login"
              style={{ maxWidth: 600 }}
              onFinish={onFinish.bind(this)}
              onFinishFailed={onFinishFailed}
              autoComplete="off"
              validateTrigger="onBlur"
              validateMessages={validateMessages}
            >
              <Item
                name="username"
                rules={[{ validator: login_rule }]}
              >
                <Input prefix={<UserOutlined />} />
              </Item>

              <Item
                name="password"
                rules={[{ validator: login_rule }]}
              >
                <Input.Password prefix={<LockOutlined />} />
              </Item>

              <Item wrapperCol={{ span: 24 }}>
                <Button type="primary" htmlType="submit" block>
                  登陆
                </Button>
              </Item>
            </Form>
          </div>
        </section>
      </div>
    )
  }
}
