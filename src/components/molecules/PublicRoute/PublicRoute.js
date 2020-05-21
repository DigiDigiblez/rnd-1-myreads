import * as React from "react";
import {Route} from "react-router-dom";

const PublicRoute = ({ exact, path, component }) => {
    return <Route exact={exact} path={path} component={component} />;
};

export default PublicRoute;
