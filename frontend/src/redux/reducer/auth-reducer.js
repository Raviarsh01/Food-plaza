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
} from "../constants";

export const RegisterReducer = (state = {}, action) => {
  switch (action.type) {
    case SIGNUP_USER_LOADING:
      return {
        loading: true,
      };
    case SIGNUP_USER_SUCCESS:
      return {
        loading: false,
        success: true,
        userData: action.payload,
        message: action.payload.message,
      };
    case SIGNUP_USER_ERROR:
      return { loading: false, error: action.payload };
    default:
      return state;
  }
};

export const LoginReducer = (state = {}, action) => {
  switch (action.type) {
    case LOGIN_USER_LOADING:
      return { loading: true };

    case LOGIN_USER_SUCCESS:
      const data = {
        token: action.payload.token,
        key: "",
      };
      return {
        loading: false,
        success: true,
        user: data,
        message: action.payload.message,
      };

    case LOGIN_USER_ERROR:
      return { loading: false, error: action.payload };

    case LOGOUT_USER:
      return { user: {} };

    default:
      return state;
  }
};

export const ProfileGetData = (state = {}, action) => {
  switch (action.type) {
    case PROFILE_GETDATA_LOADING:
      return {
        loading: true,
      };
    case PROFILE_GETDATA_SUCCESS:
      return {
        loading: false,
        success: true,
        data: action.payload.UserData,
        message: action.payload.message,
      };
    case PROFILE_GETDATA_ERROR:
      return { loading: false, error: action.payload };
    default:
      return state;
  }
};
