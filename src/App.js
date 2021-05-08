import React, { Component } from 'react';
import logo from './view/login/logo.png'
import './App.css';

export default class src extends Component{
    render(){
     return (
       <div>
           <div className = "img-logo">
           <img src={logo} className="App-logo" alt="logo" />
           </div>
           
   
       </div>
     );
    }
   }

