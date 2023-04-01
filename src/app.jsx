import React, {Component} from "react";

import { BrowserRouter, Route, Redirect} from 'react-router-dom'

import {user, getUser} from './utils/memoryUtils'

import Admin from "./pages/admin";
import Login from "./pages/login";

export default class App extends Component {
  render(){
    //读取locals内的值保存到内存中
    // getUser();
    return(
      <BrowserRouter>
        <Route path="/login" component={Login}/>
        <Route path="/" component={Admin}/>
      </BrowserRouter>
    )
  }
}