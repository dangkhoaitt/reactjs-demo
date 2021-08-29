import { Route, Switch } from "react-router-dom";
import { privateRoutes, publicRoutes } from "./routesData";

let PublicRouteKey = 0;
let PrivateRouteKey = 0;
const Routes = (
  <div>
    <Switch>
      {publicRoutes.map((route) => {
        const { path, component } = route;
        return (
          <Route
            key={(PublicRouteKey += 1)}
            path={path}
            component={component}
            exact
          />
        );
      })}

      {privateRoutes.map((route) => {
        const { path, component } = route;
        return (
          <privateRoutes
            key={(PrivateRouteKey += 1)}
            path={path}
            component={component}
            exact
          />
        );
      })}
    </Switch>
  </div>
);

export default Routes;
