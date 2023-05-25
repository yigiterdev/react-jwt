import {Comment} from "../dummy-data/productDummyDataTypes";

function calculateAverageScore(comments: Comment[]) {
  const totalScore = comments.reduce((acc, comment) => {
    return acc + comment.score;
  }, 0);

  return totalScore / comments.length;
}

export {calculateAverageScore};
