import React from 'react';
import { ContainerPage, TitlePage} from '../../components/Main';
import { AreaPerfil } from './styled';


const Page = () => {


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
      </div>
      
    </ContainerPage>

  
    </div>
    </AreaPerfil>
  );
}
export default Page;