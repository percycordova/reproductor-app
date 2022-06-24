import React from 'react'
import {Switch,Route} from 'react-router-dom';
import { Inicio } from './components/Inicio';

 const Routes = () => {
    return (
        <Switch>
            <Route path="/" exact component={Inicio} />
        </Switch>
    )
}
export default Routes;
