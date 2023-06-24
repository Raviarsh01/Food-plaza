// export const counterReducer = (state = 0, action) => {
//   switch (action.type) {
//     case 'INCREMENT':
//       return state+action.payload;
//     case 'DECREMENT':
//       return state-action.payload ;
//     default:
//       return state;
//   }
// };

// export const counterRed = (state = 10, action) => {
//   switch (action.type) {
//     case 'INC':
//       return state+action.payload;
//     case 'DEC':
//       return state-action.payload;
//     default:
//       return state;
//   }
// };
import burger from "../../Data/Burger.json";
import pizza from "../../Data/Pizza.json";

const initialState = {
  data: [],
};
let count = 0;
export const addReducer = (state = initialState, action) => {
  switch (action.type) {
    case "ADD_TO_CART":
      if (action.payload >= 1 && action.payload <= 10) {
        const newItem = pizza.find((i) => i.id === action.payload);
        if (newItem) {
          return {
            ...state,
            data: [
              ...state.data,
              { id: newItem.id, name: newItem.name, price: newItem.price },
            ],
          };
        }
      } else {
        const newItem = burger.find((i) => i.id === action.payload);
        if (newItem) {
          return {
            ...state,
            data: [
              ...state.data,
              { id: newItem.id, name: newItem.name, price: newItem.price },
            ],
          };
        }
      }

      break;
    case "REMOVE_TO_CART":
      if (action.payload >= 1 && action.payload <= 10) {
          const updatedData = state.data.filter((item) => item.id !== action.payload);
          console.log("in reducer ", updatedData)
          return {
            ...state,
            data: updatedData,
        }
      } else {
        const updatedData = state.data.filter((item) => item.id !== action.payload);
        return {
          ...state,
          data: updatedData,
      }
      };
      break;
    default:
      return state;
  }
};
export const countReducer = (state = count, action) => {
  switch (action.type) {
    case "ADD_TO_CART":
      return state + 1;
     case "REMOVE_TO_CART":
      return state - 1; 
    default:
      return state;
  }
};
