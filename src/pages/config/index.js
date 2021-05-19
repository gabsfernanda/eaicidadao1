import React from 'react';
import { ContainerPage} from '../../components/Main';
import { Link } from 'react-router-dom';
import './cadastro.css';

const Page = () => {


  return (
    <ContainerPage>
            <div className="cadastro">
            <form>
              <div>
                <p>
                  <input name="nome" type="text" placeholder="Nome" />
                </p>
                <p>
                  <input name="sobrenome" type="text" placeholder="Sobrenome" />
                </p>
                <p>
                  <input  name="cpf" type="text" placeholder="CPF"/>
                </p>
                <p>
                  <input  name="email" placeholder="Email" type="email"/>
                </p>
                <p>
                  <input  name="senha" placeholder="Senha" type="password"/>
                </p>
                <p>
                  <input  name="confirm_senha" placeholder="Confirmar senha" type="password"/>
                </p>
              </div>
              <button className="btn">Cadastrar</button>
              <br />
              <br />
              <Link className="link" to="/"> Já tem uma conta? </Link>
            </form>
            </div>
    </ContainerPage>

  );
}
export default Page;