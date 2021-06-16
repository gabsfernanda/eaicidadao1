import React from 'react';
import {Link, Route, Switch } from 'react-router-dom';
import {AreaFooter} from './styled';
import Home from '../../pages/Home';
import Perfil from '../../pages/Perfil';
import Feed from '../../pages/Feed';
import Notificacoes from '../../pages/Notificacoes';
import HomeIcon from '@material-ui/icons/Home';
import FaceIcon from '@material-ui/icons/Face';
import NotificationsActiveIcon from '@material-ui/icons/NotificationsActive';
import AddCircleOutlineIcon from '@material-ui/icons/AddCircleOutline';

function Footer (){
    return(
        <AreaFooter>
        <nav>
              <ul>
                  <li>
                      <Link to = "/"> <HomeIcon/></Link> 
                  </li>
                  <li>
                      <Link to = "/Feed"> <AddCircleOutlineIcon/> </Link> 
                  </li>
                  <li>
                      <Link to = "/"> <NotificationsActiveIcon/></Link> 
                  </li>
                  <li>
                      <Link to = "/Perfil"> <FaceIcon/> </Link> 
                  </li>
              </ul>
              <Switch>
                    <Route path = "/Home" component = {Home} />
                    <Route path = "/Perfil" component = {Perfil} />
                    <Route path = "/Feed" component = {Feed} />
                    <Route path = "/Notificacoes" component = {Notificacoes} />
                  </Switch>              
          </nav>
        </AreaFooter>
    )
}

export default Footer;