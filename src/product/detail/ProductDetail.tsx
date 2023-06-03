import "./_product-detail.scss";

import {useLocation, useNavigate} from "react-router-dom";
import {Product} from "../../core/api/apiTypes";
import {useEffect} from "react";
import ProductDetailInformation from "./information/ProductDetailInformation";
import ProductDetailTabs from "./tabs/ProductDetailTabs";
import {ROUTES} from "../../core/route/routes";
import {PRODUCT_IMAGES} from "../dummy-data/productDummyData";
import ProductsEmptyState from "../empty-state/ProductsEmptyState";

function ProductDetail() {
  const location = useLocation();
  const productData = location.state as Product;
  const navigate = useNavigate();

  useEffect(() => {
    if (!productData) {
      navigate(ROUTES.PRODUCTS);
    }
  }, [productData, navigate]);

  if (productData) {
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

  return <ProductsEmptyState />;
}

export default ProductDetail;
