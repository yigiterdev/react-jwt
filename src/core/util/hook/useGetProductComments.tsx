import {useEffect, useState} from "react";

import {
  Comment,
  ProductComments
} from "../../../product/dummy-data/productDummyDataTypes";
import {Product} from "../../api/apiTypes";
import {useCommentContext} from "../../context/comment/CommentContext";

function useGetProductComment({product}: {product: Product}) {
  const {comments, setComments} = useCommentContext();
  const [productComments, setProductComments] = useState<ProductComments | null>(null);

  useEffect(() => {
    const productComments = comments.find(
      (productComment) => productComment.product_id === product.id
    );

    if (productComments) {
      setProductComments(productComments);
    }
  }, [product.id, productComments, comments]);

  function addNewComment(productID: number, newComment: Comment) {
    const dummyData = comments;

    const productComments = dummyData.find(
      (productComment) => productComment.product_id === productID
    );

    if (productComments) {
      const updatedComments = [...productComments.comments, newComment];

      const updatedProductComments = {
        product_id: productComments.product_id,
        comments: updatedComments
      };

      const updatedAllComments = dummyData.map((productComment) => {
        if (productComment.product_id === productID) {
          return updatedProductComments;
        }

        return productComment;
      });

      setComments(updatedAllComments);
    }
  }

  return {addNewComment, productComments};
}

export default useGetProductComment;
