import React from 'react';
import { ContainerPage, TitlePage } from '../../components/Main';
import { AreaNoti } from './styled';

const Notificacao = () => {
  
  return (
        <AreaNoti>
        <div className="Notificacoes">
          
        <ContainerPage>
          <TitlePage>
            Notificações
          </TitlePage>
          <div>
          <br/>
          <p>
            fala serio
          </p>
          </div>
          
        </ContainerPage>
    
      
        </div>
        </AreaNoti>
      );
    }
    export default Notificacao;