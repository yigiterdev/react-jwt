import "./_product-detail-information.scss";

import {calculateAverageScore} from "../../util/productUtils";
import {Rating} from "@mui/material";
import ProductDetailInformationItem from "./item/ProductDetailInformationItem";
import {Product} from "../../../core/api/apiTypes";
import useGetProductComment from "../../../core/util/hook/useGetProductComments";

interface ProductDetailInformationProps {
  product: Product;
}

function ProductDetailInformation({product}: ProductDetailInformationProps) {
  const {productComments} = useGetProductComment({product});

  return (
    <div>
      <h1 className="product-detail-information__title">{product.name}</h1>

      <p className="product-detail-information__description">{product.description}</p>

      <div className="product-detail-information__content">
        <ProductDetailInformationItem
          title="Price"
          description={`${product.price}${product.currency_symbol}`}
        />

        <ProductDetailInformationItem
          title="Arrival Date"
          description={product.arrival_date}
        />

        {productComments && (
          <>
            <ProductDetailInformationItem
              title="Total Comments"
              description={`${productComments?.comments.length} Comments`}
            />

            <ProductDetailInformationItem
              title="Score"
              description={
                <>
                  <span>{`${calculateAverageScore(productComments.comments)} / 5`}</span>

                  <Rating
                    name="read-only"
                    value={calculateAverageScore(productComments.comments)}
                    readOnly
                  />
                </>
              }
            />
          </>
        )}
      </div>
    </div>
  );
}

export default ProductDetailInformation;
