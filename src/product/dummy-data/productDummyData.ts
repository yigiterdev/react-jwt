import camera1ImageSrc from "./asset/camera_1.png";
import camera2ImageSrc from "./asset/camera_2.png";
import camera3ImageSrc from "./asset/camera_3.png";
import camera4ImageSrc from "./asset/camera_4.png";
import camera5ImageSrc from "./asset/camera_5.png";
import camera6ImageSrc from "./asset/camera_6.png";
import {ProductComments} from "./productDummyDataTypes";

export const PRODUCT_COMMENTS: ProductComments[] = [
  {
    product_id: 1,
    comments: [
      {
        comment_id: "1",
        comment_title: "Comment 1",
        comment: "This is a comment",
        score: 3
      },

      {
        comment_id: "2",
        comment_title: "Comment 2",
        comment: "This is another comment",
        score: 4
      }
    ]
  },

  {
    product_id: 2,
    comments: [
      {
        comment_id: "3",
        comment_title: "Comment 1",
        comment: "This is a comment",
        score: 2
      },

      {
        comment_id: "4",
        comment_title: "Comment 2",
        comment: "This is another comment",
        score: 4
      }
    ]
  },

  {
    product_id: 3,
    comments: [
      {
        comment_id: "5",
        comment_title: "Comment 1",
        comment: "This is a comment",
        score: 1
      },

      {
        comment_id: "6",
        comment_title: "Comment 2",
        comment: "This is another comment",
        score: 4
      }
    ]
  },

  {
    product_id: 4,
    comments: [
      {
        comment_id: "7",
        comment_title: "Comment 1",
        comment: "This is a comment",
        score: 0
      },

      {
        comment_id: "8",
        comment_title: "Comment 2",
        comment: "This is another comment",
        score: 4
      }
    ]
  },

  {
    product_id: 5,
    comments: [
      {
        comment_id: "9",
        comment_title: "Comment 1",
        comment: "This is a comment",
        score: 1
      },

      {
        comment_id: "10",
        comment_title: "Comment 2",
        comment: "This is another comment",
        score: 4
      }
    ]
  },

  {
    product_id: 6,
    comments: [
      {
        comment_id: "11",
        comment_title: "Comment 1",
        comment: "This is a comment",
        score: 3
      },

      {
        comment_id: "12",
        comment_title: "Comment 2",
        comment: "This is another comment",
        score: 4
      }
    ]
  }
];

export const PRODUCT_IMAGES = [
  camera1ImageSrc,
  camera2ImageSrc,
  camera3ImageSrc,
  camera4ImageSrc,
  camera5ImageSrc,
  camera6ImageSrc
];
