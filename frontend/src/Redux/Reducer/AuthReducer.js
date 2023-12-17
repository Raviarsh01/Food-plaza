import * as variable from "../Constants";

export const RegisterReducer = (state = {}, action) => {
  switch (action.type) {
    case variable.SIGNUP_USER_LOADING:
      return {
        loading: true,
      };
    case variable.SIGNUP_USER_SUCCESS:
      return {
        loading: false,
        success: true,
        userData: action.payload,
        message: action.payload.message,
      };
    case variable.SIGNUP_USER_ERROR:
      return { loading: false, error: action.payload };
    default:
      return state;
  }
};

export const LoginReducer = (state = {}, action) => {
  switch (action.type) {
    case variable.LOGIN_USER_LOADING:
      return { loading: true };

    case variable.LOGIN_USER_SUCCESS:
      return {
        loading: false,
        success: true,
        userData: action.payload,
        message: action.payload.message,
      };

    case variable.LOGIN_USER_ERROR:
      return { loading: false, error: action.payload };

    case variable.LOGOUT_USER:
      return { userData: {} };

    default:
      return { userData: {} };
  }
};
