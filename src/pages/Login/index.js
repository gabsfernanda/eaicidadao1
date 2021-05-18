import React from 'react';
import { BrowserRouter, Link } from 'react-router-dom';
import { AreaLogin } from './styled';
import { BtnDeFauIcons, BtnDeFau } from '../../components/Styled';
import FacebookIcon from '@material-ui/icons/Facebook';
 
export default () => {

    return (
        <BrowserRouter>
           <AreaLogin>
        <h1>Faça login na sua conta</h1>
        <BtnDeFauIcons>
            <FacebookIcon/>
            <div className ="center">
            Fazer login com o Facebook
            </div>
        </BtnDeFauIcons>
        <BtnDeFauIcons>
        <div className ="center">
            Fazer login com o Google
            </div>
        </BtnDeFauIcons>

        <p>OU</p>

        <form>
            <div className="form--input">
                <label>E-mail</label>
                <input type="email"></input>
            </div>
            <div className="form--input">
                <label>Senha</label>
                <input type="password"></input>
            </div>
            <BtnDeFau>
                Entrar
            </BtnDeFau>
            <div className = "footerLogin">
                Não tem conta?
                <Link to = "/register">Registre-se </Link>
            </div>
        </form>
          </AreaLogin>        
        </BrowserRouter>
    );
}