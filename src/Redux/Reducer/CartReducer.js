const initialState = {
  user: null,
  loading: false,
  error: null,
};

export const user1Reducer = (state = initialState, action) => {
  switch (action.type) {
    case "FETCH_USER_REQUEST":
      return {
        ...state,
        loading: true,
        error: null,
      };
    case "FETCH_USER_SUCCESS":
      return {
        ...state,
        loading: false,
        user: action.payload,
      };
    case "FETCH_USER_FAILURE":
      return {
        ...state,
        loading: false,
        error: action.payload,
      };
    default:
      return state;
  }
};
const initialState2 = {
  user2: null,
  loading: false,
  error: null,
};

export const user2Reducer = (state = initialState2, action) => {
  switch (action.type) {
    case "FETCH_USER_REQUEST2":
      return {
        ...state,
        loading: true,
        error: null,
      };
    case "FETCH_USER_SUCCESS2":
      return {
        ...state,
        loading: false,
        user2: action.payload,
      };
    case "FETCH_USER_FAILURE2":
      return {
        ...state,
        loading: false,
        error: action.payload,
      };
    default:
      return state;
  }
};

const cart = [];
export const cartReducer = (state = cart, action) => {
  switch (action.type) {

    case "ADD_TO_CART":
      // const { id, name, price } = action.payload;
      // return [...state, { id, name, price, quantity: 1 }];
      const { id, name, price } = action.payload;
      const existingItem = state.find(item => item.id === id);
      if (existingItem) {
        return state.map(item =>
          item.id === id ? { ...item, quantity: item.quantity + 1 } : item
        );
      } else {
        return [...state, { id, name, price, quantity: 1 }];
      }

    case "REMOVE_FROM_CART":      
      let updatedCart = state.filter((item) => item.id !== action.payload);
      return updatedCart;

    case "INCREASE_QUANTITY":
      const itemId = action.payload;
      return state.map(item => {
        if (item.id === itemId) {
          return { ...item, quantity: item.quantity + 1 };
        }
        return item;
      })

      case "DECREASE_QUANTITY":
      const itemId1 = action.payload;
      return state.map(item => {
        if (item.id === itemId1) {
          return { ...item, quantity: item.quantity - 1 };
        }
        return item;
      });

    default:
      return state;
  }
};
