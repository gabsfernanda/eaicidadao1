import React from 'react';
import { BrowserRouter, Switch, Route, Link } from 'react-router-dom';
import Api from '../../Api';
import { AreaLogin } from './styled';
import { BtnDeFauIcons, BtnDeFau } from '../../components/Styled';
import FacebookIcon from '@material-ui/icons/Facebook';
import { ArrowBackIos } from '@material-ui/icons';
import { IoLogoGoogle } from "react-icons/io5";
 

// eslint-disable-next-line import/no-anonymous-default-export
export default ({onReceiveGoogle}, {onReceiveFacebook}) => {

    const actionLoginGoogle = async () => {
        let result = await Api.googleLogar();

        if (result){
            onReceiveGoogle(result.user);
        }
        else {
            alert ('Error');
        }
    }
    const actionLoginFacebook = async () => {
        let result = await Api.facebookLogar();

        if (result){
            onReceiveFacebook(result.user);
        }
        else {
            alert ('Error');
        }
    }



    return (
        <BrowserRouter>
           <Switch>
               <Route exact path = "/registrar">
               <AreaLogin>
               <h1 className="organize">
                   <Link to = "/" >
                       <ArrowBackIos/>
                   </Link>
                   Crie sua conta
               </h1>
               <p>
                   Crie sua conta, é grátis
               </p>
               <form>
            <div className="form--input">
                <input type="text" placeholder="Nome"></input>
            </div>
            <div className="form--input">
               
                <input type="email" placeholder="E-mail"></input>
            </div>
            <div className="form--input">
                <input type="password" placeholder="Password"></input>
            </div>
            <BtnDeFau>
                Comece Agora!
            </BtnDeFau>
            <div className = "footerLogin">
                Já tem conta?
                <Link to = "/src/pages/Home">Fazer Login</Link>
            </div>
        </form>
               </AreaLogin>
               </Route>
               <Route exact path = "*">
                   <AreaLogin>
        <h1>Faça login na sua conta</h1>
        <BtnDeFauIcons onClick={actionLoginFacebook}>
            <FacebookIcon/>
            <div className ="center">
            Fazer login com o Facebook
            </div>
        </BtnDeFauIcons>
        <BtnDeFauIcons onClick={actionLoginGoogle}>
        <IoLogoGoogle/>
        <div className ="center">
            Fazer login com o Google
            </div>
        </BtnDeFauIcons>

        <p>OU</p>

        <form>
            <div className="form--input">
                <input name="email" type="email" placeholder="E-mail"></input>
            </div> 
            <div className="form--input">
                <input name="senha" type="password" placholder="Password"></input>
            </div>
            <BtnDeFau >
                Entrar
            </BtnDeFau>
            <div className = "footerLogin">
                Não tem conta?
                <Link to = "/registrar">Registre-se </Link>
            </div>
        </form>
          </AreaLogin>    
               </Route>
           </Switch>
               
        </BrowserRouter>
    );
}