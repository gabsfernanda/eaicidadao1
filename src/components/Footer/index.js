import React from 'react';
import {Link} from 'react-router-dom';
import {AreaFooter} from './styled';

import HomeIcon from '@material-ui/icons/Home';
import FaceIcon from '@material-ui/icons/Face';
import NotificationsActiveIcon from '@material-ui/icons/NotificationsActive';
import AddCircleOutlineIcon from '@material-ui/icons/AddCircleOutline';
import MapIcon from '@material-ui/icons/Map';

function Footer (){
    return(
        <AreaFooter>
        <nav>
              <ul>
                  <li>
                      <Link to = "/Home"> <HomeIcon/></Link> 
                  </li>
                  <li>
                      <Link to = "/Mapa"> <MapIcon/></Link> 
                  </li>
                  <li>
                      <Link to = "/Feed"> <AddCircleOutlineIcon/> </Link> 
                  </li>
                  <li>
                      <Link to = "/Notificacoes"> <NotificationsActiveIcon/></Link> 
                  </li>
                  <li>
                      <Link to = "/Perfil"> <FaceIcon/> </Link> 
                  </li>
              </ul>
                    
          </nav>
        </AreaFooter>
    )
}

export default Footer;