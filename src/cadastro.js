import react from 'react';
import logo from './logo.png';
import './login.css';

function cadastro() {
  return (
    <div className="App">
      <header className="App-header">
        <div className = "img-logo">
        <img src={logo} className="App-logo" alt="logo" />
        </div>
        <br></br>
        <td>
          Nome
        </td>
        <input className='App-login'type="text" name="Nome" size="40" /> 
        <br/> 
        <td>
          Data de Nascimento
        </td>
        <input className='App-login'type="text" name="Nome" size="40" />
        <br></br>
        <td>
          Gênero
        </td>
        <input className='App-login'type="text" name="Nome" size="40" />
        <br></br>
        <td>
          CEP
        </td>
        <input className='App-login'type="text" name="Nome" size="40" />
        <br></br>
        <td>
          Email
        </td>
        <input className='App-login'type="text" name="Nome" size="40" />
        <br></br>
        <td>
          Nome de Usuário
        </td>
        <input className='App-login'type="text" name="Nome" size="40" />
        <br></br>
        <td>
          Senha
        </td>
        <input className='App-login'type="text" name="Nome" size="40" />
        <br></br>
        <button className = "App-enter">Cadastrar</button>
      </header>
    </div>
        
  );
}

export default cadastro;