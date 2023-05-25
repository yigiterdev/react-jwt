import "./_product-detail-tabs.scss";

import Tab, {TabItem} from "../../../core/component/tab/Tab";
import {Product} from "../../../core/api/apiTypes";
import ProductDetailInformationTab from "./information/ProductDetailInformationTab";
import ProductDetailCommentsTab from "./comments/ProductDetailCommentsTab";

const PRODUCT_DETAIL_TABS: TabItem[] = [
  {
    id: "product-information",
    content: "Product Information"
  },
  {
    id: "comments",
    content: "Comments"
  }
];

interface ProductDetailTabsProps {
  product: Product;
}

function ProductDetailTabs({product}: ProductDetailTabsProps) {
  return (
    <Tab
      customClassName={"product-detail-tabs"}
      items={PRODUCT_DETAIL_TABS}
      initialActiveTabIndex={0}>
      {[
        <ProductDetailInformationTab product={product} />,
        <ProductDetailCommentsTab product={product} />
      ]}
    </Tab>
  );
}

export default ProductDetailTabs;
