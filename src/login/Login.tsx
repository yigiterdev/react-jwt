import {useEffect, useState} from "react";
import "./_login.scss";

import LoginForm from "./form/LoginForm";
import {REFRESH_TOKEN_COOKIE, cookies} from "../core/util/cookies";
import useRefreshToken from "../core/util/hook/useRefreshToken";
import {useNavigate} from "react-router-dom";
import {useAuthContext} from "../core/context/auth/AuthContext";
import {ROUTES} from "../core/route/routes";
import SimpleLoader from "../core/component/simple-loader/SimpleLoader";

function Login() {
  const {user, setUser} = useAuthContext();
  const refresh = useRefreshToken();
  const navigate = useNavigate();
  const [isLoading, setIsLoading] = useState<boolean>(false);

  useEffect(() => {
    if (!user?.accessToken) {
      const refreshToken: string = cookies.get(REFRESH_TOKEN_COOKIE);

      if (refreshToken) {
        (async () => {
          try {
            setIsLoading(true);
            const accessToken = await refresh(refreshToken);
            setUser({
              accessToken,
              refreshToken
            });
            navigate(ROUTES.PRODUCTS);
          } catch (error) {
            console.log(error);
          } finally {
            setIsLoading(false);
          }
        })();
      }
    }
  }, [refresh, user?.accessToken, navigate, setUser]);

  return (
    <div className="login">
      {isLoading ? (
        <SimpleLoader />
      ) : (
        <div className="login__card">
          <h1 className="login__card__title">Login</h1>

          <LoginForm />
        </div>
      )}
    </div>
  );
}

export default Login;
