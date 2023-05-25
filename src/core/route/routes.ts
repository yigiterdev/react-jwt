const BASE_ROOT = "/" as const;

const ROUTES = {
  PRODUCTS: "/",
  PRODUCT_DETAILS: `${BASE_ROOT}product/:id`,
  LOGIN: `${BASE_ROOT}login`
};

export {ROUTES};
