import "./_product-detail-information-item.scss";

interface ProductDetailInformationItemProps {
  title: string;
  description: React.ReactNode;
}

function ProductDetailInformationItem({
  title,
  description
}: ProductDetailInformationItemProps) {
  return (
    <div className="product-detail-information-item">
      <h1 className="product-detail-information-item__title">{title}</h1>

      <p className="product-detail-information-item__description">{description}</p>
    </div>
  );
}

export default ProductDetailInformationItem;
