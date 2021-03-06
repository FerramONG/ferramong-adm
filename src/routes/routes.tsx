import React from "react";
import { Route, BrowserRouter, Switch } from "react-router-dom";
import Login from '../pages/Login'
import AddTool from '../pages/AddTool'
import ListTool from '../pages/ListTool'
import ListPurchase from '../pages/ListPurchase'
import ListRent from '../pages/ListRent'
import Register from '../pages/Register'
import ForgotPassword from '../pages/ForgotPassword'

const Routes = () => {
    return (
        <BrowserRouter>
            <Switch>
                <Route exact path="/" component={Login} />
                <Route exact path="/addtool" component={AddTool} />
                <Route exact path="/listtool" component={ListTool} />
                <Route exact path="/listpurchase" component={ListPurchase} />
                <Route exact path="/listrent" component={ListRent} />
                <Route exact path="/register" component={Register} />
                <Route exact path="/forgotpassword" component={ForgotPassword} />
                <Route path='/relatorio-pdf' component={() => {
                    window.location.href = 'https://ferramong-reports.herokuapp.com/sales/report/2021-04-20/2021-05-01';
                    return null;
                }} />
            </Switch>
        </BrowserRouter>
    );
};

export default Routes;