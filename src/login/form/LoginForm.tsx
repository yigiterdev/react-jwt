import "./_login-form.scss";

import {useState} from "react";
import {useNavigate} from "react-router-dom";

import Button from "../../core/component/button/Button";
import Input from "../../core/component/input/Input";
import {useAuthContext} from "../../core/context/auth/AuthContext";
import {LoginRequestResponse} from "../../core/api/apiTypes";
import {ROUTES} from "../../core/route/routes";
import {axiosAPI} from "../../core/api/api";
import {REFRESH_TOKEN_COOKIE, cookies} from "../../core/util/cookies";

function LoginForm() {
  const {setUser} = useAuthContext();
  const [username, setUsername] = useState<string>("");
  const [password, setPassword] = useState<string>("");
  const navigate = useNavigate();

  return (
    <div className="login-form">
      <Input
        customClassName="login-form__input"
        value={username}
        name="username"
        type="text"
        placeholder="Username"
        onChange={handleInputChange}
      />

      <Input
        customClassName="login-form__input"
        value={password}
        name="password"
        type="password"
        placeholder="Password"
        onChange={handleInputChange}
      />

      <Button
        customClassName="login-form__cta"
        isDisabled={username.length === 0 || password.length === 0}
        onClick={handleSubmit}>
        {"Login"}
      </Button>
    </div>
  );

  function handleInputChange(event: React.SyntheticEvent<HTMLInputElement>) {
    if (event.currentTarget.name === "username") {
      setUsername(event.currentTarget.value);
    } else if (event.currentTarget.name === "password") {
      setPassword(event.currentTarget.value);
    }
  }

  async function handleSubmit() {
    try {
      const requestPayload = {
        username,
        password
      };
      const response = await axiosAPI.post<LoginRequestResponse>(
        "/login",
        requestPayload,
        {
          headers: {"Content-Type": "application/json"}
        }
      );

      cookies.set(REFRESH_TOKEN_COOKIE, response.data.refreshToken, {
        expires: new Date(Date.now() * 1000)
      });

      setUser({
        accessToken: response.data.accessToken,
        refreshToken: response.data.refreshToken
      });
      setUsername("");
      setPassword("");
      navigate({
        pathname: ROUTES.PRODUCTS
      });
    } catch (error) {
      console.log(error);
    }
  }
}

export default LoginForm;
