import {useAuthContext} from "../../context/auth/AuthContext";
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
    localStorage.removeItem("refreshToken");
  }
}

export default Header;
