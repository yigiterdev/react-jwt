import "./_product-detail.scss";

import {useLocation, useNavigate, useParams} from "react-router-dom";
import useAxiosPrivate from "../../core/util/hook/useAxiosPrivate";
import {Product} from "../../core/api/apiTypes";
import {useEffect, useState} from "react";
import SimpleLoader from "../../core/component/simple-loader/SimpleLoader";
import ProductDetailInformation from "./information/ProductDetailInformation";
import ProductDetailTabs from "./tabs/ProductDetailTabs";
import {ROUTES} from "../../core/route/routes";
import {PRODUCT_IMAGES} from "../dummy-data/productDummyData";

function ProductDetail() {
  const {id} = useParams<{id: string}>();
  const [productData, setProductData] = useState<Product | null>(null);
  const axiosPrivate = useAxiosPrivate();
  const [isRequestPending, setIsRequestPending] = useState<boolean>(true);
  const location = useLocation();
  const navigate = useNavigate();

  useEffect(() => {
    if (location.key === "default") {
      navigate(ROUTES.PRODUCTS);
    }
  }, [location, navigate]);

  useEffect(() => {
    if (id) {
      setIsRequestPending(true);
      axiosPrivate
        .get<Product>(`/products/${id}`)
        .then((res) => {
          setProductData(res.data);
        })
        .catch((error) => {
          console.log(error);
        });

      setIsRequestPending(false);
    }
  }, [axiosPrivate, id]);

  if (isRequestPending) {
    return <SimpleLoader />;
  }

  if (!productData) {
    return <h1>Product not found</h1>;
  }

  return (
    <div className="product-detail">
      <div className="product-detail__header">
        <img
          className="product-detail__header__image"
          src={PRODUCT_IMAGES[productData.id - 1]}
          alt={productData.name}
        />

        <ProductDetailInformation product={productData} />
      </div>

      <ProductDetailTabs product={productData} />
    </div>
  );
}

export default ProductDetail;
