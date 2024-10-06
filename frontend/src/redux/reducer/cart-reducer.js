import {
  MENU_GETDATA_LOADING,
  MENU_GETDATA_SUCCESS,
  MENU_GETDATA_ERROR,
  ADD_TO_CART,
  REMOVE_FROM_CART,
  INCREASE_QUANTITY,
  DECREASE_QUANTITY,
  SINGLE_ITEM_GET_LOADING,
  SINGLE_ITEM_GET_SUCCESS,
  SINGLE_ITEM_GET_ERROR,
} from "../constants";

export const MenuReducer = (state = {}, action) => {
  switch (action.type) {
    case MENU_GETDATA_LOADING:
      return {
        loading: true,
      };
    case MENU_GETDATA_SUCCESS:
      return {
        loading: false,
        success: true,
        MenuData: action.payload,
        message: action.payload.message,
      };
    case MENU_GETDATA_ERROR:
      return { loading: false, error: action.payload };
    default:
      return state;
  }
};

export const SingleItemReducer = (state = {}, action) => {
  switch (action.type) {
    case SINGLE_ITEM_GET_LOADING:
      return {
        loading: true,
      };
    case SINGLE_ITEM_GET_SUCCESS:
      return {
        loading: false,
        success: true,
        ItemData: action.payload,
        message: action.payload.message,
      };
    case SINGLE_ITEM_GET_ERROR:
      return { loading: false, error: action.payload };
    default:
      return state;
  }
};

export const cartReducer = (state = { cartData: [] }, action) => {
  switch (action.type) {
    case ADD_TO_CART:
      const { _id, name, price } = action.payload;
      return {
        ...state,
        cartData: [...state.cartData, { _id, name, price, quantity: 1 }],
      };

    case REMOVE_FROM_CART:
      let updatedCart = state.cartData.filter(
        (item) => item._id !== action.payload
      );
      return {
        loading: false,
        cartData: updatedCart,
      };
    case INCREASE_QUANTITY:
      const _id2 = action.payload;
      return {
        ...state,
        cartData: state.cartData.map((item) => {
          if (item._id === _id2) {
            return { ...item, quantity: item.quantity + 1 };
          }
          return item;
        }),
      };
    case DECREASE_QUANTITY:
      const _id1 = action.payload;
      return {
        ...state,
        cartData: state.cartData.map((item) => {
          if (item._id === _id1) {
            return { ...item, quantity: item.quantity - 1 };
          }
          return item;
        }),
      };
    default:
      return state;
  }
};
