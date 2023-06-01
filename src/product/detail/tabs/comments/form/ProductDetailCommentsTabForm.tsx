import "./_product-detail-comments-tab-form.scss";

import {v4 as uuidv4} from "uuid";
import {Rating} from "@mui/material";
import Input from "../../../../../core/component/input/Input";
import useGetProductComment from "../../../../../core/util/hook/useGetProductComments";
import {Product} from "../../../../../core/api/apiTypes";
import {useState} from "react";
import Button from "../../../../../core/component/button/Button";

interface ProductDetailCommentsTabFormProps {
  product: Product;
}

function ProductDetailCommentsTabForm({product}: ProductDetailCommentsTabFormProps) {
  const [commentTitle, setCommentTitle] = useState<string>("");
  const [comment, setComment] = useState<string>("");
  const [score, setScore] = useState<number>(5);
  const {addNewComment} = useGetProductComment({product});

  return (
    <div className="product-detail-comments-tab-form">
      <h1 className="product-detail-comments-tab-form__title">Add new comment</h1>

      <div className="product-detail-comments-tab-form__item">
        <label
          className="product-detail-comments-tab-form__item__label"
          htmlFor="comment-title">
          Title
        </label>
        <Input name="comment-title" value={commentTitle} onChange={handleInputChange} />
      </div>

      <div className="product-detail-comments-tab-form__item">
        <label
          className="product-detail-comments-tab-form__item__label"
          htmlFor="comment">
          Comment
        </label>
        <Input name="comment" value={comment} onChange={handleInputChange} />
      </div>

      <div className="product-detail-comments-tab-form__item">
        <label className="product-detail-comments-tab-form__item__label" htmlFor="score">
          Score
        </label>

        <Rating
          value={score}
          onChange={(_event, newScore) => {
            if (newScore) {
              setScore(newScore);
            }
          }}
        />
      </div>

      <Button
        isDisabled={commentTitle.length === 0 || comment.length === 0}
        onClick={handleAddComment}>
        Add New Comment
      </Button>
    </div>
  );

  function handleInputChange(event: React.SyntheticEvent<HTMLInputElement>) {
    if (event.currentTarget.name === "comment-title") {
      setCommentTitle(event.currentTarget.value);
    } else if (event.currentTarget.name === "comment") {
      setComment(event.currentTarget.value);
    }
  }

  function handleAddComment() {
    addNewComment(product.id, {
      comment_id: uuidv4(),
      comment_title: commentTitle,
      comment: comment,
      score
    });

    setCommentTitle("");
    setComment("");
  }
}

export default ProductDetailCommentsTabForm;
