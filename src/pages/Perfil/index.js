import React from 'react';
import { ContainerPage, TitlePage} from '../../components/Main';
import { AreaPerfil } from './styled';



const Perfil = () => {


  return (
    
    <AreaPerfil>
    <div className="perfil">
      
    <ContainerPage>
      <TitlePage>
        Perfil
      </TitlePage>
      <div>
      <br/>
      <p>
        fala serio
      </p>
      <p>
         serio
      </p>
      <h1>mesmo, negocio chato</h1>
      </div>
      
    </ContainerPage>

  
    </div>
    </AreaPerfil>
    
  );
}
export default Perfil;