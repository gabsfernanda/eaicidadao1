import React from 'react';
import {Link} from 'react-router-dom';
import {AreaFooter} from './styled';
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
                      <Link to = "/config"> <AddCircleOutlineIcon/> </Link> 
                  </li>
                  <li>
                      <Link to = "/"> <NotificationsActiveIcon/></Link> 
                  </li>
                  <li>
                      <Link to = "/src/pages/Login/index.js"> <FaceIcon/> </Link> 
                  </li>
              </ul>
          </nav>
        </AreaFooter>
    )
}

export default Footer;