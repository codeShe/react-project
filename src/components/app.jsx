import React, {Component} from "react";
import logo from '../logo.svg'
import './app.css'
export default class App extends Component {
  render(){
    return(
      <div><h2 className='fontRed'>Hello,React!</h2>
      <img src={logo} alt="logo" className="img100"/></div>
    )
  }
}