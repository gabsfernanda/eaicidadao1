import React from 'react';
import { ContainerPage, TitlePage } from '../../components/Main';
import { Link } from 'react-router-dom';
import './home.css';

const Page = () => {
  return (
    <div className="home">
      
    <ContainerPage>
      <TitlePage>
        Entrar
      </TitlePage>
      <p>
        <input  name="email" placeholder="Email" type="email" />
      </p>
      <p>
        <input  name="senha" placeholder="Senha" type="password" />
      </p>
      <button className="btn">Entrar</button>
      <br/>
      <br/>
      <Link to = "/config"> Esqueci minha senha </Link>
      <br />
      <br />
      <Link className="link" to="/config"> Cadastrar </Link>
    </ContainerPage>

  
    </div>
  );
}
export default Page;