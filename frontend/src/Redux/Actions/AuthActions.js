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
import { url } from "../../App";

export const RegisterAction = (params) => async (dispatch) => {
  try {
    dispatch({
      type: SIGNUP_USER_LOADING,
    });

    const { data } = await axios.post(`${url}auth/signup`, params, {
      headers: {
        "Content-Type": "application/json",
      },
    });

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

    const { data } = await axios.post(`${url}auth/login`, params, {
      headers: {
        "Content-Type": "application/json",
      },
    });

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

export const LogoutAction = () => async (dispatch) => {
  try {
    dispatch({
      type: LOGOUT_USER,
    });
  } catch (e) {}
};

export const GetProfileData = () => async (dispatch, getState) => {
  const { auth } = getState();
  try {
    dispatch({
      type: PROFILE_GETDATA_LOADING,
    });

    const { data } = await axios.get(`${url}auth/user-profile`, {
      headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer ${auth?.user?.token}`,
      },
    });

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
