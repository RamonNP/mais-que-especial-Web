import React from 'react';
import { Switch, Route} from 'react-router-dom';

import Page1 from './pages/Instituicao';
import Page2 from './pages/Aluno';
import Page3 from './pages/GameList/GameList';

function Routes() {
    return (
        <Switch>
            <Route path="/" exact component={Page1} />
            <Route path="/Instituicao" component={Page1} />
            <Route path="/Aluno" component={Page2} />
            <Route path="/GameList" component={Page3} />
        </Switch>
    )
}

export default Routes;