import {
  ABOUT_POST_LOADING,
  ABOUT_POST_SUCCESS,
  ABOUT_POST_ERROR,
} from "../constants";

export const AboutPostReducer = (state = {}, action) => {
  switch (action.type) {
    case ABOUT_POST_LOADING:
      return {
        loading: true,
      };
    case ABOUT_POST_SUCCESS:
      return {
        loading: false,
        success: true,
        data: action.payload,
        message: action.payload.message,
      };
    case ABOUT_POST_ERROR:
      return { loading: false, error: action.payload };
    default:
      return state;
  }
};
