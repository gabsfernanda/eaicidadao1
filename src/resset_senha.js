import logo from './logo.png';
import './login.css';

function reset_senha() {
  return (
    <div className="App">
      <header className="App-header">
        <div className = "img-logo">
        <img src={logo} className="App-logo" alt="logo" />
        </div>
        <br></br>
        <td>
          Email
        </td>
        <button className = "App-enter">Esqueci minha senha</button>
      </header>
    </div>
        
  );
}

export default reset_senha;