import React from 'react';
import { Switch, Route} from 'react-router-dom';

import Page1 from './pages/Instituicao';
import Game from './pages/Game/';
import Chart from './pages/Chart';
import Page3 from './pages/GameList/GameList';
import AlunoList from './pages/AlunoList/AlunoList';

function Routes() {
    return (
        <Switch>
            <Route path="/" exact component={Page1} />
            <Route path="/Instituicao" component={Page1} />
            <Route path="/Game/:id" component={Game} />
            <Route path="/Chart/:id" component={Chart} />
            <Route path="/GameList" component={Page3} />
            <Route path="/AlunoList" component={AlunoList} />
        </Switch>
    )
}

export default Routes;