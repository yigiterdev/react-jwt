import {PRODUCT_COMMENTS} from "./productDummyData";
import {Comment} from "./productDummyDataTypes";

function updateDummyData(productID: number, newComment: Comment) {
  const dummyData = PRODUCT_COMMENTS;

  const product = dummyData.find((comments) => comments.product_id === productID);

  if (product) {
    product.comments.push(newComment);
  }
  return dummyData;
}

export {updateDummyData};
