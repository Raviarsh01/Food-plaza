import { createStore,combineReducers ,applyMiddleware} from 'redux';
import thunk from 'redux-thunk';
import {user1Reducer,user2Reducer ,cartReducer} from './Reducer/CartReducer'

const rootReducer = combineReducers({
    root1:user1Reducer,
    root2:user2Reducer,
    root3: cartReducer
  });
export const Store = createStore(rootReducer , applyMiddleware(thunk));



