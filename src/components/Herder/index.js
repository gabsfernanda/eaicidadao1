import React from 'react';
import {Link} from 'react-router-dom';
import {AreaHeader} from './styled';

function Header(){
    return (
      <AreaHeader>
      <div className = "container">
          <div className="logo">
            <img src="../../../public/logo.png"/>
          </div>
          <nav>
              <ul>
                  <li>
                      <Link to = "/"> Inicio </Link> 
                  </li>
                  <li>
                      <Link to = "/config"> Configuração </Link> 
                  </li>
                  <li>
                      <Link to = "/"> Logout </Link> 
                  </li>
              </ul>
          </nav>

      </div>
      </AreaHeader>
    )
}

export default Header;