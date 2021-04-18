import React from "react";
import { Route, BrowserRouter, Switch } from "react-router-dom";
import Home from '../pages/Home'
import Login from '../pages/Login'

const Routes = () => {
    return (
        <BrowserRouter>
            <Switch>
                 <Route exact path="/" component={Login} />
                 <Route exact path="/Home" component={Home} />
            </Switch>
        </BrowserRouter>
    );
};

export default Routes;