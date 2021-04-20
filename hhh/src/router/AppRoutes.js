import React from "react";
import {Redirect, Route, Switch} from "react-router-dom";
import MainPage from "../pages/MainPage/MainPage";
import NotFound from "../pages/NotFound/NotFound";


const AppRoutes = (props) => {


    return (
        <div className="app-routes">
            <Switch>
                <Redirect exact from={'/'} to={'/main'}/>
                <Route path={'/main'} exact
                       render={(routerProps) => (
                           <MainPage/>
                       )}
                />
                <Route path ={"*"} exact render={() =>(
                    <NotFound/>
                )}/>
            </Switch>
        </div>
    );
};

const ProtectedRoutes = ({authenticated, ...rest}) => {
    if (authenticated) {
        return <Route {...rest} />
    }
    return <Redirect to='/login'/>
}
export default AppRoutes;