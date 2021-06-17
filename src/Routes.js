import React from 'react';
import { Switch, Route} from 'react-router-dom';
import Home from './pages/Home';
import Perfil from './pages/Perfil';
import Mapa from './pages/Mapa';
import Feed from './pages/Feed';
import Notificacoes from './pages/Notificacoes';

// eslint-disable-next-line import/no-anonymous-default-export
export default () => {

    return(
        <Switch>
            <Route exact path="/Home">
                <Home></Home>
            </Route>
            <Route exact path="/Mapa">
                <Mapa></Mapa>
            </Route>
            <Route exact path="/Feed">
                <Feed></Feed>
            </Route>
            <Route exact path="/Notificacoes">
                <Notificacoes></Notificacoes>
            </Route>
            <Route exact path="/Perfil">
                <Perfil></Perfil>
            </Route>
        </Switch>

    );

}