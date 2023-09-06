import axios from "axios";
import burger from "../../json Data/burger.json";
import pizza from "../../json Data/pizza.json";
export const fetchUserRequest = () => ({
  type: "FETCH_USER_REQUEST",
});

export const fetchUserSuccess = (user) => ({
  type: "FETCH_USER_SUCCESS",
  payload: user,
});

export const fetchUserFailure = (error) => ({
  type: "FETCH_USER_FAILURE",
  payload: error,
});

export const fetchdata = () => {
  return (dispatch) => {
    // dispatch(fetchUserRequest());
    // axios
    //   .get("http://localhost:3006/pizza")
    //   .then((response) => {
    //     dispatch(fetchUserSuccess(response.data));
    //   })
    //   .catch((error) => {
    //     dispatch(fetchUserFailure(error.message));
    //   });
    if(pizza){
      dispatch(fetchUserSuccess(pizza));
    }
    else{
      dispatch(fetchUserRequest());
    }
  };
};
export const fetchUserRequest2 = () => ({
  type: "FETCH_USER_REQUEST2",
});

export const fetchUserSuccess2 = (user) => ({
  type: "FETCH_USER_SUCCESS2",
  payload: user,
});

export const fetchUserFailure2 = (error) => ({
  type: "FETCH_USER_FAILURE2",
  payload: error,
});

export const fetchdata2 = () => {
  return (dispatch) => {
    if (burger) {
      dispatch(fetchUserSuccess2(burger));
    } else {
      dispatch(fetchUserRequest2());
    }
  };
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
  payload:id
  });
export const quantityDec = (id) => ({
  type: "DECREASE_QUANTITY",
  payload:id,
});