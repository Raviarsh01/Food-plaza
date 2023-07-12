const initialState = {
    user: null,
    loading: false,
    error: null,
  };
  
  export const user1Reducer = (state = initialState, action) => {
    switch (action.type) {
      case 'FETCH_USER_REQUEST':
        return {
          ...state,
          loading: true,
          error: null,
        };
      case 'FETCH_USER_SUCCESS':
        return {
          ...state,
          loading: false,
          user: action.payload,
        };
      case 'FETCH_USER_FAILURE':
        return {
          ...state,
          loading: false,
          error: action.payload,
        };
      default:
        return state;
    }
  };
  const initialState2=0
  export const user2Reducer = (state = initialState2, action) => {
    switch (action.type) {
      case 'INC2':
        return { ...state, counter2: state.counter2 + 2 };
      case 'DEC2':
        return { ...state, counter2: state.counter2 - 2 };
      default:
        return state;
    }
  };
