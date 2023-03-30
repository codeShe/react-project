import React, {Component} from "react";

import { BrowserRouter, Route} from 'react-router-dom'

import Admin from "./pages/admin";
import Login from "./pages/login";
export default class App extends Component {
  render(){
    return(
      <BrowserRouter>
        <Route path="/login" component={Login}/>
        <Route path="/admin" component={Admin}/>
      </BrowserRouter>
    )
  }
}