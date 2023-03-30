/*
  登陆的路由组件
*/

import React, { Component } from 'react'
import './login.less'
import logo from '../../assets/imgs/logo.svg'
import { Button, Form, Input } from 'antd';
import {
  HomeOutlined,KeyOutlined
} from '@ant-design/icons';

const Item = Form.Item

export default class Login extends Component {
  render() {
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
              name="basic"
              labelCol={{ span: 8 }}
              wrapperCol={{ span: 16 }}
              style={{ maxWidth: 600 }}
              // onFinish={onFinish}
              // onFinishFailed={onFinishFailed}
              autoComplete="off"
            >
              <Item
                name="username"
                // rules={[{ required: true, message: 'Please input your username!' }]}
              >
                <Input prefix={<HomeOutlined />}/>
              </Item>

              <Item
                name="password"
                // rules={[{ required: true, message: 'Please input your password!' }]}
              >
                <Input.Password prefix={<KeyOutlined />}/>
              </Item>

              <Item wrapperCol={{ offset: 8, span: 16 }}>
                <Button type="primary" htmlType="submit">
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
