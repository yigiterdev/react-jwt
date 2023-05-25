import {createContext, ReactNode, useContext, useState} from "react";
import {ProductComments} from "../../../product/dummy-data/productDummyDataTypes";
import {PRODUCT_COMMENTS} from "../../../product/dummy-data/productDummyData";

const CommentContext = createContext({
  comments: PRODUCT_COMMENTS as ProductComments[],
  setComments: (() => undefined) as React.Dispatch<
    React.SetStateAction<ProductComments[]>
  >
});

CommentContext.displayName = "CommentContext";

function CommentContextProvider({children}: {children: ReactNode}) {
  const [comments, setComments] = useState<ProductComments[]>(PRODUCT_COMMENTS);

  return (
    <CommentContext.Provider
      value={{
        comments,
        setComments
      }}>
      {children}
    </CommentContext.Provider>
  );
}

function useCommentContext() {
  const {comments, setComments} = useContext(CommentContext);

  return {comments, setComments};
}

export {CommentContext, CommentContextProvider, useCommentContext};
