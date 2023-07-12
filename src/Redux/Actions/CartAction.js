import axios from "axios";
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

export const fetchUser = () => {
  return (dispatch) => {
    dispatch(fetchUserRequest());
    axios
      .get("https://jsonplaceholder.typicode.com/posts")
      .then((response) => {
        dispatch(fetchUserSuccess(response.data));
      })
      .catch((error) => {
        dispatch(fetchUserFailure(error.message));
      });
    // Simulating API call with setTimeout
    //   setTimeout(() => {
    //     // Fetching user data
    //     fetch('https://jsonplaceholder.typicode.com/albums')
    //       .then((response) => response.json())
    //       .then((data) => {
    //         dispatch(fetchUserSuccess(data));
    //       })
    //       .catch((error) => {
    //         dispatch(fetchUserFailure(error.message));
    //       });
    //   }, 1000);
  };
};
