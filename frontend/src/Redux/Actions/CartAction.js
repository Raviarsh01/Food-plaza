import axios from "axios";
import * as variable from "../Constants";

export const MenuDataAction = (params) => async (dispatch) => {
  try {
    dispatch({
      type: variable.MENU_GETDATA_LOADING,
    });

    const { data } = await axios.get(
      "http://127.0.0.1:5000/menu/all-items",
      params
    );

    dispatch({
      type: variable.MENU_GETDATA_SUCCESS,
      payload: data,
    });
  } catch (error) {
    dispatch({
      type: variable.MENU_GETDATA_ERROR,
      payload: error,
    });
  }
};

export const addCart = (data) => ({
  type: "ADD_TO_CART",
  payload: data,
});
export const removeCart = (id) => ({
  type: "REMOVE_FROM_CART",
  payload: id,
});
export const quantityInc = (id) => ({
  type: "INCREASE_QUANTITY",
  payload: id,
});
export const quantityDec = (id) => ({
  type: "DECREASE_QUANTITY",
  payload: id,
});

export const HomepageGetData = (params) => async (dispatch) => {
  try {
    dispatch({
      type: variable.HOMEPAGE_GETDATA_LOADING,
    });

    const { data } = await axios.get("http://127.0.0.1:5000/home/");

    dispatch({
      type: variable.HOMEPAGE_GETDATA_SUCCESS,
      payload: data,
    });
  } catch (error) {
    dispatch({
      type: variable.HOMEPAGE_GETDATA_ERROR,
      payload: error,
    });
  }
};
