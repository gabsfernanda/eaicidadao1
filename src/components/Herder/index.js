import {Link, Route, Switch} from 'react-router-dom';
import Notificacoes from '../../pages/Notificacoes';
import React from 'react';
import {AreaHeader} from './styled';
import MailOutlineIcon from '@material-ui/icons/MailOutline';



function Header(){
    return (
      <AreaHeader>
      <div className = "container">
          <div className="logo">
            <h2>Eai Cidadão</h2>
          </div>

          <nav>
          <ul>
              <li>
                  <Link to = "/Notificacoes" > <MailOutlineIcon/> </Link>
                  <Switch>
                    <Route path = "/Notificacoes" component = {Notificacoes} />
                  </Switch>
              </li>
          </ul>
      </nav>
      </div>
      
      </AreaHeader>
    )
}

export default Header;