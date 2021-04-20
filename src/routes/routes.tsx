import React from "react";
import { Route, BrowserRouter, Switch } from "react-router-dom";
import Login from '../pages/Login'
import AddTool from '../pages/AddTool'
import ListTool from '../pages/ListTool'
import ListPurchase from '../pages/ListPurchase'
import ListRent from '../pages/ListRent'

const Routes = () => {
    return (
        <BrowserRouter>
            <Switch>
                 <Route exact path="/" component={Login} />
                 <Route exact path="/addtool" component={AddTool} />
                 <Route exact path="/listtool" component={ListTool} />
                 <Route exact path="/listpurchase" component={ListPurchase} />
                 <Route exact path="/listrent" component={ListRent} />
            </Switch>
        </BrowserRouter>
    );
};

export default Routes;