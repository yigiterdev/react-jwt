import "./_layout.scss";

import {Outlet} from "react-router-dom";
import Header from "../header/Header";

function Layout() {
  return (
    <div className="layout">
      <Header />

      <div className="layout-content">
        <Outlet />
      </div>
    </div>
  );
}

export default Layout;
