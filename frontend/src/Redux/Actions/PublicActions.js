import axios from "axios";
import {
  ABOUT_POST_LOADING,
  ABOUT_POST_SUCCESS,
  ABOUT_POST_ERROR,
} from "../Constants";

export const aboutPostAction = (params) => async (dispatch) => {
  try {
    dispatch({
      type: ABOUT_POST_LOADING,
    });

    const { data } = await axios.post("http://127.0.0.1:5000", params, {
      headers: {
        "Content-Type": "application/json",
      },
    });

    dispatch({
      type: ABOUT_POST_SUCCESS,
      payload: data,
    });
  } catch (error) {
    dispatch({
      type: ABOUT_POST_ERROR,
      payload: error,
    });
  }
};
