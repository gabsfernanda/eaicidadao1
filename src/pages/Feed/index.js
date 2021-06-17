import React from 'react';
import { ContainerPage, TitlePage } from '../../components/Main';
import { AreaFeed } from './styled';

const Feed = () => {
  return (
        <AreaFeed>
        <div className="Feed">
          
        <ContainerPage>
          <TitlePage>
            Feed
          </TitlePage>
          <div>
          <br/>
          <p>
            fala serio
          </p>
          </div>
          
        </ContainerPage>
    
      
        </div>
        </AreaFeed>
      );
    }
    export default Feed;