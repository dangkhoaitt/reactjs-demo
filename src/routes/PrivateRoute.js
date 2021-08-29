import { Route } from "react-router-dom";

const PrivateRoute = (props) => {
  const { path, exact, component } = props;
  return <Route path={path} exact={exact} component={component} />;
};

export default PrivateRoute;
