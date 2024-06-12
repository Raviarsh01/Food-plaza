import axios from "axios";
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
import { url } from "../../App";

export const MenuDataAction = (params) => async (dispatch) => {
  try {
    dispatch({
      type: MENU_GETDATA_LOADING,
    });

    const { data } = await axios.get(`${url}menu/all-items`, params);

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

export const GetSingleItemAction = (params) => async (dispatch) => {
  try {
    dispatch({
      type: SINGLE_ITEM_GET_LOADING,
    });

    const { data } = await axios.get(`${url}menu/single-item/${params}`);

    dispatch({
      type: SINGLE_ITEM_GET_SUCCESS,
      payload: data,
    });
  } catch (error) {
    dispatch({
      type: SINGLE_ITEM_GET_ERROR,
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
