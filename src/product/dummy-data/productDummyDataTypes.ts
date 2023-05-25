export interface ProductComments {
  product_id: number;
  comments: Comment[];
}

export interface Comment {
  comment_id: string;
  comment_title: string;
  comment: string;
  score: number;
}
