import { BrowserRouter, Switch, Route } from "react-router-dom";

import Main from './view/Main';
import Repositorio from './view/Repositorio';
import Erro from './view/404';

const Routes =()=>{
    return(
        <BrowserRouter>
            <Switch>
                <Route exact path="/" component={Main} />
                <Route exact path="/repositorio/:repositorio" component={Repositorio} />
                <Route exact path="*" component={Erro} />
            </Switch>
        </BrowserRouter>
    );
}

export default Routes