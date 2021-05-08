import React, { Component } from 'react'
import logo from './logo.png';
import './login.css';

export default class login extends Component{
 render(){
  return (
    <div className="App">
      <header className="App-header">
        <div className = "img-logo">
        <img src={logo} className="App-logo" alt="logo" />
        </div>
        <br></br>
        <td>
          Login
        </td>
        <input className='App-login'type="text" name="Nome" size="40" /> 
        <br/> 
        <td>
          Senha
        </td>
        <input className='App-login'type="text" name="Nome" size="40" />
        <br></br>
        <button className = "App-enter">Entrar</button>
        <br></br>
        <button className = "App-enter">Esqueci minha senha</button>
      </header>
    </div>
  )
 }
}

