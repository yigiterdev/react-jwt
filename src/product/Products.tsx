import "./_products.scss";

import {useEffect, useState} from "react";

import useAxiosPrivate from "../core/util/hook/useAxiosPrivate";
import {Product} from "../core/api/apiTypes";
import ProductList from "./list/ProductList";
import SimpleLoader from "../core/component/simple-loader/SimpleLoader";

function Products() {
  const [productsData, setProductData] = useState<Product[]>([]);
  const axiosPrivate = useAxiosPrivate();
  const [isRequestPending, setIsRequestPending] = useState<boolean>(true);

  useEffect(() => {
    axiosPrivate
      .get<Product[]>("/products")
      .then((res) => {
        setProductData(res.data);
      })
      .catch((error) => {
        console.log(error);
      });
    setIsRequestPending(false);
  }, [axiosPrivate]);

  if (isRequestPending) return <SimpleLoader />;

  if (productsData.length === 0) return <h1>No products found</h1>;

  return (
    <div className="products">
      <h1 className="products__title">Products</h1>

      <ProductList productsData={productsData} />
    </div>
  );
}

export default Products;
