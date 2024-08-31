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
} from "../Constants";

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
      const { itemId, name, price } = action.payload;
      const existingItem = state.cartData.find(
        (item) => item.itemId === itemId
      );
      if (!existingItem) {
        return {
          ...state,
          cartData: [...state.cartData, { itemId, name, price, quantity: 1 }],
        };
      }

    case REMOVE_FROM_CART:
      let updatedCart = state.cartData.filter(
        (item) => item.itemId !== action.payload
      );
      return {
        loading: false,
        cartData: updatedCart,
      };
    case INCREASE_QUANTITY:
      const itemId2 = action.payload;
      return {
        ...state,
        cartData: state.cartData.map((item) => {
          if (item.itemId === itemId2) {
            return { ...item, quantity: item.quantity + 1 };
          }
          return item;
        }),
      };
    case DECREASE_QUANTITY:
      const itemId1 = action.payload;
      return {
        ...state,
        cartData: state.cartData.map((item) => {
          if (item.itemId === itemId1) {
            return { ...item, quantity: item.quantity - 1 };
          }
          return item;
        }),
      };
    default:
      return state;
  }
};
