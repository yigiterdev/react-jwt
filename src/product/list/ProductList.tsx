import "./_product-list.scss";

import {Product} from "../../core/api/apiTypes";
import ProductCard from "../card/ProductCard";

interface ProductListProps {
  productsData: Product[];
}

function ProductList({productsData}: ProductListProps) {
  return (
    <div className="product-list">
      {productsData.map((product) => {
        return <ProductCard key={product.id} product={product} />;
      })}
    </div>
  );
}

export default ProductList;
