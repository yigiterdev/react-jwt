import "./_login.scss";

import LoginForm from "./form/LoginForm";

function Login() {
  return (
    <div className="login">
      <div className="login__card">
        <h1 className="login__card__title">Login</h1>

        <LoginForm />
      </div>
    </div>
  );
}

export default Login;
