import {
  GET_PRODUCT,
  TOGGLE_FAVORITES,
  TOGGLE_CARTS,
} from "../acrions/productAction";

export const getProductAC = () => ({ type: GET_PRODUCT });

export const toggleFavoriteAC = (id) => ({
  type: TOGGLE_FAVORITES,
  payload: id,
});

export const toggleCartAC = (id) => ({ type: TOGGLE_CARTS, payload: id });
