/*
  后台管理的路由组件
*/
import React, { Component } from 'react'
import { Redirect } from 'react-router-dom/cjs/react-router-dom'

import {Layout} from 'antd'

import {user} from '../../utils/memoryUtils'

const { Header, Footer, Sider, Content } = Layout;


const headerStyle = {
  textAlign: 'center',
  color: '#fff',
  height: 64,
  paddingInline: 50,
  lineHeight: '64px',
  backgroundColor: '#7dbcea',
};
const contentStyle = {
  textAlign: 'center',
  minHeight: 120,
  lineHeight: '120px',
  color: '#fff',
  backgroundColor: '#108ee9',
};
const siderStyle = {
  textAlign: 'center',
  lineHeight: '120px',
  color: '#fff',
  backgroundColor: '#3ba0e9',
};
const footerStyle = {
  textAlign: 'center',
  color: '#fff',
  backgroundColor: '#7dbcea',
};

export default class Admin extends Component {
  render() {
    //如果内存中没有用户信息则重新登陆
    if(!user || !user._id || !user.username){
      //清楚用户数据，重新登陆
      return <Redirect to="/login" />
    }
    return (
      <div>
        <div>当前用户：{user.username}</div>
        <Layout style={{height:'100%'}}>
          <Sider style={siderStyle}>Sider</Sider>
          <Layout >
            <Header style={headerStyle}>Header</Header>
            <Content style={contentStyle}>Content</Content>
            <Footer style={footerStyle}>Footer</Footer>
          </Layout>
        </Layout>
      </div>
    )
  }
}
