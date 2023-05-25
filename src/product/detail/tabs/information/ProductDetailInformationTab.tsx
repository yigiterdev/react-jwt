import "./_product-detail-information-tab.scss";

import {Product} from "../../../../core/api/apiTypes";

interface ProductDetailInformationTabProps {
  product: Product;
}

function ProductDetailInformationTab({product}: ProductDetailInformationTabProps) {
  return (
    <div>
      <h1 className="product-detail-information-tab__title">{product.name}</h1>

      <p className="product-detail-information-tab__description">
        {
          "Our state-of-the-art camera is designed to revolutionize your photography experience. Packed with cutting-edge technology and innovative features, it's the perfect companion for both amateur enthusiasts and professional photographers alike"
        }
      </p>

      <div className="product-detail-information-tab__item">
        <h3 className="product-detail-information-tab__item__title">
          Unmatched Image Quality
        </h3>

        <p className="product-detail-information-tab__item__description">
          Experience the true essence of stunning visuals with our camera's exceptional
          image quality. Equipped with a high-resolution sensor, advanced optics, and
          precise image processing, it delivers breathtaking clarity, vibrant colors, and
          impressive dynamic range. Whether you're capturing breathtaking landscapes or
          fast-paced action shots, our camera ensures every detail is preserved with
          utmost precision.
        </p>
      </div>

      <div className="product-detail-information-tab__item">
        <h3 className="product-detail-information-tab__item__title">
          Superior Performance
        </h3>

        <p className="product-detail-information-tab__item__description">
          With an ultra-fast autofocus system and rapid shooting capabilities, our camera
          lets you seize the moment without missing a beat. Its advanced tracking
          technology keeps your subject in sharp focus, even in challenging conditions.
          Say goodbye to blurred shots and hello to crisp, professional-grade imagery.
        </p>
      </div>
    </div>
  );
}

export default ProductDetailInformationTab;
