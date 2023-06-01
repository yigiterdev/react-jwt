import "./_products.scss";

import {useEffect, useState} from "react";

import useAxiosPrivate from "../core/util/hook/useAxiosPrivate";
import {Product} from "../core/api/apiTypes";
import ProductList from "./list/ProductList";
import SimpleLoader from "../core/component/simple-loader/SimpleLoader";
import ProductsEmptyState from "./empty-state/ProductsEmptyState";

function Products() {
  const [productsData, setProductData] = useState<Product[]>([]);
  const {axiosAPIPrivate, isRequestPending} = useAxiosPrivate();

  useEffect(() => {
    axiosAPIPrivate
      .get<Product[]>("/products")
      .then((res) => {
        setProductData(res.data);
      })
      .catch((error) => {
        console.log(error);
      });
  }, [axiosAPIPrivate]);

  if (isRequestPending) return <SimpleLoader />;

  if (productsData) {
    return (
      <div className="products">
        <h1 className="products__title">Products</h1>

        <ProductList productsData={productsData} />
      </div>
    );
  }

  return <ProductsEmptyState />;
}

export default Products;
