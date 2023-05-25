import "./_product-detail-comments-tab.scss";

import {Rating} from "@mui/material";
import {Product} from "../../../../core/api/apiTypes";
import useGetProductComment from "../../../../core/util/hook/useGetProductComments";
import ProductDetailCommentsTabForm from "./form/ProductDetailCommentsTabForm";

interface ProductDetailCommentsTabProps {
  product: Product;
}

function ProductDetailCommentsTab({product}: ProductDetailCommentsTabProps) {
  const {productComments} = useGetProductComment({product});

  return (
    <div>
      <h1 className="product-detail-comments-tab__title">Comments</h1>

      <ProductDetailCommentsTabForm product={product} />

      {productComments &&
        productComments.comments.map((comment) => {
          return (
            <div key={comment.comment_id} className="product-detail-comments-tab__item">
              <div className="product-detail-comments-tab__item__header">
                <h2 className="product-detail-comments-tab__item__title">
                  {comment.comment_title}
                </h2>

                <Rating name="read-only" value={comment.score} readOnly />
              </div>

              <p className="product-detail-comments-tab__item__description">
                {comment.comment}
              </p>
            </div>
          );
        })}
    </div>
  );
}

export default ProductDetailCommentsTab;
