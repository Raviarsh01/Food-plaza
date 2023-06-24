// export const increment = () => ({
//   type: "INCREMENT",
//   payload:1
// });

// export const decrement = () => ({
//   type: "DECREMENT",
//   payload:1
// });

// export const inc = () => ({
//   type: "INC",
//   payload:5
// });

// export const dec = () => ({
//   type: "DEC",
//   payload:3
// });

// export const addToCart = (id) => ({
//     type:'ADD_TO_CART',
//     payload:id
// });
export const addToCart = (id) => ({
    type: 'ADD_TO_CART',
    payload: id
});
export const removeToCart = (id) => ({
    type: 'REMOVE_TO_CART',
    payload: id
});
export const clearCart = (id) => ({
    type: 'CLEAR_CART',
    payload: id
});