import axios from "axios";
import {
  SIGNUP_USER_LOADING,
  SIGNUP_USER_SUCCESS,
  SIGNUP_USER_ERROR,
  LOGIN_USER_LOADING,
  LOGIN_USER_SUCCESS,
  LOGIN_USER_ERROR,
  LOGOUT_USER,
  PROFILE_GETDATA_LOADING,
  PROFILE_GETDATA_SUCCESS,
  PROFILE_GETDATA_ERROR,
} from "../Constants";

export const RegisterAction = (params) => async (dispatch) => {
  try {
    dispatch({
      type: SIGNUP_USER_LOADING,
    });

    const { data } = await axios.post(
      "http://127.0.0.1:5000/auth/signup",
      params,
      {
        headers: {
          "Content-Type": "application/json",
        },
      }
    );

    dispatch({
      type: SIGNUP_USER_SUCCESS,
      payload: data,
    });
  } catch (error) {
    dispatch({
      type: SIGNUP_USER_ERROR,
      payload: error,
    });
  }
};

export const LoginAction = (params) => async (dispatch) => {
  try {
    dispatch({
      type: LOGIN_USER_LOADING,
    });

    const { data } = await axios.post(
      "http://127.0.0.1:5000/auth/login",
      params,
      {
        headers: {
          // "Content-Type": "multipart/form-data",
          "Content-Type": "application/json",
        },
      }
    );

    dispatch({
      type: LOGIN_USER_SUCCESS,
      payload: data,
    });
  } catch (error) {
    dispatch({
      type: LOGIN_USER_ERROR,
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
      type: LOGOUT_USER,
    });
  } catch (error) {
    // dispatch({
    //   type: variable.LOGIN_USER_ERROR,
    //   payload: error,
    // });
  }
};

export const GetProfileData = (params) => async (dispatch) => {
  try {
    dispatch({
      type: PROFILE_GETDATA_LOADING,
    });
    const token = localStorage.getItem("Token");
    const { data } = await axios.get(
      "http://127.0.0.1:5000/auth/user-profile",
      {
        headers: {
          "Content-Type": "application/json",
          Authorization: `Bearer ${token}`,
        },
      }
    );

    dispatch({
      type: PROFILE_GETDATA_SUCCESS,
      payload: data,
    });
  } catch (error) {
    dispatch({
      type: PROFILE_GETDATA_ERROR,
      payload: error,
    });
  }
};
