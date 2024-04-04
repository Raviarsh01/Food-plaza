import axios from "axios";
import {
  MENU_GETDATA_LOADING,
  MENU_GETDATA_SUCCESS,
  MENU_GETDATA_ERROR,
  ADD_TO_CART,
  REMOVE_FROM_CART,
  INCREASE_QUANTITY,
  DECREASE_QUANTITY,
} from "../Constants";

export const MenuDataAction = (params) => async (dispatch) => {
  try {
    dispatch({
      type: MENU_GETDATA_LOADING,
    });

    const { data } = await axios.get(
      "http://127.0.0.1:5000/menu/all-items",
      params
    );

    dispatch({
      type: MENU_GETDATA_SUCCESS,
      payload: data,
    });
  } catch (error) {
    dispatch({
      type: MENU_GETDATA_ERROR,
      payload: error,
    });
  }
};

export const addCart = (data) => ({
  type: ADD_TO_CART,
  payload: data,
});
export const removeCart = (id) => ({
  type: REMOVE_FROM_CART,
  payload: id,
});
export const quantityInc = (id) => ({
  type: INCREASE_QUANTITY,
  payload: id,
});
export const quantityDec = (id) => ({
  type: DECREASE_QUANTITY,
  payload: id,
});
