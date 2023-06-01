import {Suspense} from "react";
import {Route, Routes} from "react-router-dom";
import {ROUTES} from "../route/routes";
import Products from "../../product/Products";
import RequireUser from "../route/require-user/RequireUser";
import ProductDetail from "../../product/detail/ProductDetail";
import Login from "../../login/Login";
import Layout from "../component/layout/Layout";
import NotFound from "../../not-found/NotFound";

function App() {
  return (
    <Suspense fallback={<></>}>
      <Routes>
        <Route element={<Layout />}>
          <Route
            path={ROUTES.PRODUCTS}
            element={
              <RequireUser>
                <Products />
              </RequireUser>
            }
          />

          <Route
            path={ROUTES.PRODUCT_DETAILS}
            element={
              <RequireUser>
                <ProductDetail />
              </RequireUser>
            }
          />

          <Route
            path={"*"}
            element={
              <RequireUser>
                <NotFound />
              </RequireUser>
            }
          />
        </Route>

        <Route path={ROUTES.LOGIN} element={<Login />} />
      </Routes>
    </Suspense>
  );
}

export default App;
