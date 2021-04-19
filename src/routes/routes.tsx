import React from "react";
import { Route, BrowserRouter, Switch } from "react-router-dom";
import Home from '../pages/Home'
import Login from '../pages/Login'
import AddTool from '../pages/AddTool'
import ListTool from '../pages/ListTool'
import ListPurchase from '../pages/ListPurchase'

const Routes = () => {
    return (
        <BrowserRouter>
            <Switch>
                 <Route exact path="/" component={Login} />
                 <Route exact path="/home" component={Home} />
                 <Route exact path="/addtool" component={AddTool} />
                 <Route exact path="/listtool" component={ListTool} />
                 <Route exact path="/listpurchase" component={ListPurchase} />
            </Switch>
        </BrowserRouter>
    );
};

export default Routes;