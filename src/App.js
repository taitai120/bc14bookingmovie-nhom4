import "./App.css";
import { Route, Switch, withRouter } from "react-router-dom";
import { renderRoutesHome, renderRoutesAdmin } from "./routes";
import { actTryLogin } from "./containers/AdminTemplate/AuthPage/modules/actions";
import { useEffect, Suspense, lazy } from "react";
import { useDispatch } from "react-redux";
import Loader from "./components/Loader";

function App(props) {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(actTryLogin(props.history));
  }, []);

  return (
    <Suspense fallback={<Loader></Loader>}>
      <Switch>
        {renderRoutesHome()}

        {renderRoutesAdmin()}
        <Route
          path="/authpage"
          component={lazy(() => import("./containers/AdminTemplate/AuthPage"))}
        />

        <Route
          path="/login"
          component={lazy(() => import("./containers/HomeTemplate/LoginPage"))}
        />

        <Route
          path="/register"
          component={lazy(() =>
            import("./containers/HomeTemplate/RegisterPage")
          )}
        />

        <Route
          path=""
          component={lazy(() => import("./containers/PageNotFound"))}
        />
      </Switch>
    </Suspense>
  );
}

export default withRouter(App);
