import {Fragment} from "react";
import {Navigate, RouteProps} from "react-router";
import {useAuthContext} from "../../context/auth/AuthContext";
import {ROUTES} from "../routes";

type RequireUserProps = RouteProps & {
  children: React.ReactNode;
  redirectTo?: string;
  fallback?: React.ReactNode;
};

function RequireUser({redirectTo, fallback, children}: RequireUserProps) {
  const {user} = useAuthContext();

  if (user) {
    return <Fragment>{children}</Fragment>;
  }

  return fallback ? (
    <Fragment>{fallback}</Fragment>
  ) : (
    <Navigate to={redirectTo || ROUTES.LOGIN} replace={true} />
  );
}

export default RequireUser;
