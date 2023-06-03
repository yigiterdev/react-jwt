import "./_product-card.scss";

import {Link, generatePath} from "react-router-dom";
import {Product} from "../../core/api/apiTypes";
import {calculateAverageScore} from "../util/productUtils";
import {ROUTES} from "../../core/route/routes";
import {Rating} from "@mui/material";
import useGetProductComment from "../../core/util/hook/useGetProductComments";
import {PRODUCT_IMAGES} from "../dummy-data/productDummyData";

interface ProductCardProps {
  product: Product;
}

function ProductCard({product}: ProductCardProps) {
  const {productComments} = useGetProductComment({product});

  return (
    <Link
      to={generatePath(ROUTES.PRODUCT_DETAILS, {
        id: product.id
      })}
      state={product}
      className="product-card">
      <img
        className="product-card__image"
        src={PRODUCT_IMAGES[product.id - 1]}
        alt={product.name}
      />

      <div className="product-card__content">
        <h1 className="product-card__content__title">{product.name}</h1>

        <p className="product-card__content__price">{`Price: ${product.price}$`}</p>

        {productComments && (
          <div className="product-card__content__score">
            <p>{`Score:`}</p>

            <Rating
              name="read-only"
              value={calculateAverageScore(productComments.comments)}
              readOnly
            />
          </div>
        )}
      </div>
    </Link>
  );
}

export default ProductCard;
