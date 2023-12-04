import axios from "axios";
import * as variable from "../Constants";

export const RegisterAction = (params) => async (dispatch) => {
  try {
    dispatch({
      type: variable.SIGNUP_USER_LOADING,
    });

    const { data } = await axios.post(
      "http://127.0.0.1:5000/auth/signup",
      params
    );

    dispatch({
      type: variable.SIGNUP_USER_SUCCESS,
      payload: data,
    });
  } catch (error) {
    dispatch({
      type: variable.SIGNUP_USER_ERROR,
      payload: error,
    });
  }
};

export const LoginAction = (params) => async (dispatch) => {
  try {
    dispatch({
      type: variable.LOGIN_USER_LOADING,
    });

    const { data } = await axios.post(
      "http://127.0.0.1:5000/auth/login",
      params
    );

    dispatch({
      type: variable.LOGIN_USER_SUCCESS,
      payload: data,
    });
  } catch (error) {
    dispatch({
      type: variable.LOGIN_USER_ERROR,
      payload: error,
    });
  }
};

export const LogoutAction = (params) => async (dispatch) => {
  try {
    // dispatch({
    //   type: variable.LOGIN_USER_LOADING,
    // });

    // const { data } = await axios.post(
    //   "http://127.0.0.1:5000/auth/login",
    //   params
    // );

    dispatch({
      type: variable.LOGOUT_USER,
    });
  } catch (error) {
    // dispatch({
    //   type: variable.LOGIN_USER_ERROR,
    //   payload: error,
    // });
  }
};
