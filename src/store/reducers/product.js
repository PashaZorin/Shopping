import {
  GET_PRODUCT,
  TOGGLE_FAVORITES,
  TOGGLE_CARTS,
} from "../acrions/productAction";

const initialState = {
  data: [
    {
      name: "Nokia",
      price: 30,
      id: 1,
      url: "https://klike.net/uploads/posts/2020-07/1594277952_8.jpg",
      color: "red",
      isInCart: false,
      isInFavorite: false,
    },
    {
      name: "Meizu",
      price: 40,
      id: 2,
      url: "https://klike.net/uploads/posts/2020-07/1594277956_4.jpg",
      color: "blue",
      isInCart: false,
      isInFavorite: false,
    },
    {
      name: "Samsung",
      price: 50,
      id: 3,
      url: "https://klike.net/uploads/posts/2020-07/1594278037_7.jpg",
      color: "black",
      isInCart: false,
      isInFavorite: false,
    },
    {
      name: "Redmi",
      price: 60,
      id: 4,
      url: "https://klike.net/uploads/posts/2020-07/1594277980_16.jpg",
      color: "black",
      isInCart: false,
      isInFavorite: false,
    },
    {
      name: "Apple",
      price: 70,
      id: 5,
      url: "https://klike.net/uploads/posts/2020-07/1594277998_15.jpg",
      color: "yellow",
      isInCart: false,
      isInFavorite: false,
    },
    {
      name: "Redmi",
      price: 80,
      id: 6,
      url: "https://klike.net/uploads/posts/2020-07/1594278042_14.jpg",
      color: "red",
      isInCart: false,
      isInFavorite: false,
    },
    {
      name: "HUAWEI",
      price: 90,
      id: 7,
      url: "https://klike.net/uploads/posts/2020-07/1594278051_10.jpg",
      color: "green",
      isInCart: false,
      isInFavorite: false,
    },
    {
      name: "Nokia",
      price: 100,
      id: 8,
      url: "https://klike.net/uploads/posts/2020-07/1594278033_11.jpg",
      color: "orange",
      isInCart: false,
      isInFavorite: false,
    },
    {
      name: "Redmi",
      price: 100,
      id: 9,
      url: "https://klike.net/uploads/posts/2020-07/1594278003_13.jpg",
      color: "red",
      isInCart: false,
      isInFavorite: false,
    },
    {
      name: "Nokia",
      price: 20,
      id: 10,
      url: "https://klike.net/uploads/posts/2020-07/1594277952_8.jpg",
      color: "red",
      isInCart: false,
      isInFavorite: false,
    },
  ],
};

const product = (state = initialState, action) => {
  switch (action.type) {
    case GET_PRODUCT:
      const favoritesId =
        JSON.parse(localStorage.getItem("isInFavorites")) || [];
      const cartsId = JSON.parse(localStorage.getItem("isInCarts")) || [];

      const product = state.data.map((e) => {
        if (favoritesId.includes(e.id)) {
          e.isInFavorite = !e.isInFavorite;
          return e;
        }
        if (cartsId.includes(e.id)) {
          e.isInCart = !e.isInCart;
          return e;
        }
        return e;
      });
      return { ...state, data: product };

    case TOGGLE_FAVORITES:
      const res = [...state.data];
      const indexFavorites = res.findIndex((e) => e.id === action.payload);
      res[indexFavorites].isInFavorite = !res[indexFavorites].isInFavorite;

      const storageFavoritesId =
        JSON.parse(localStorage.getItem("isInFavorites")) || [];
      if (storageFavoritesId.includes(action.payload)) {
        const newId = storageFavoritesId.filter((e) => e !== action.payload);
        localStorage.setItem("isInFavorites", JSON.stringify(newId));
      } else {
        storageFavoritesId.push(action.payload);
        localStorage.setItem(
          "isInFavorites",
          JSON.stringify(storageFavoritesId)
        );
      }

      return { ...state, data: res };

    case TOGGLE_CARTS:
      const newDate = [...state.data];
      const indexCarts = newDate.findIndex((e) => e.id === action.payload);
      newDate[indexCarts].isInCart = !newDate[indexCarts].isInCart;

      const storageCartsId =
        JSON.parse(localStorage.getItem("isInCarts")) || [];
      if (storageCartsId.includes(action.payload)) {
        const newId = storageCartsId.filter((e) => e !== action.payload);
        localStorage.setItem("isInCarts", JSON.stringify(newId));
      } else {
        storageCartsId.push(action.payload);
        localStorage.setItem("isInCarts", JSON.stringify(storageCartsId));
      }

      return { ...state, data: newDate };

    default:
      return state;
  }
};

export default product;
