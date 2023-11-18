import { createStore,combineReducers ,applyMiddleware} from 'redux';
import thunk from 'redux-thunk';
import {
  pizzaReducer,
  BurgerReducer,
  cartReducer,
} from "./Reducer/CartReducer";

const rootReducer = combineReducers({
  root1: pizzaReducer,
  root2: BurgerReducer,
  root3: cartReducer,
});
export const Store = createStore(rootReducer , applyMiddleware(thunk));



