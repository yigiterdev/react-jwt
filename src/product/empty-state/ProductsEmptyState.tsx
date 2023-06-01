import "./_products-empty-state.scss";

import cameraPlaceholderImgSrc from "../../core/ui/asset/images/camera-placeholder.png";

function ProductsEmptyState() {
  return (
    <div className="products-empty-state">
      <img
        className="products-empty-state__image"
        src={cameraPlaceholderImgSrc}
        alt="camera-placeholder"
      />
      <h1>No results found!</h1>
    </div>
  );
}

export default ProductsEmptyState;
