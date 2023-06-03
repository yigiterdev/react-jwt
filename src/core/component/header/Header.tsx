import {useAuthContext} from "../../context/auth/AuthContext";
import {REFRESH_TOKEN_COOKIE, cookies} from "../../util/cookies";
import Button from "../button/Button";
import "./_header.scss";

function Header() {
  const {setUser} = useAuthContext();
  return (
    <header className="header">
      <Button onClick={handleLogout}>Logout</Button>
    </header>
  );

  function handleLogout() {
    setUser(null);
    cookies.remove(REFRESH_TOKEN_COOKIE);
  }
}

export default Header;
