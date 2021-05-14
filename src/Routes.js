import React from 'react';
import { Switch, Route} from 'react-router-dom';
import Home from './pages/Home';
import Config from './pages/config';

// eslint-disable-next-line import/no-anonymous-default-export
export default () => {

    return(
        <Switch>
            <Route exact path="/">
                <Home></Home>
            </Route>
            <Route exact path="/config">
                <Config></Config>
            </Route>
            <Route exact path="/sobre">
                Configurações
            </Route>
        </Switch>

    );

}