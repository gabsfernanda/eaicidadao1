import { Link } from '@material-ui/core';
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
                  <Link to = "/"> <MailOutlineIcon/> </Link>
              </li>
          </ul>
      </nav>
      </div>
      
      </AreaHeader>
    )
}

export default Header;