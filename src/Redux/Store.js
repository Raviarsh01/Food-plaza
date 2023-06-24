import { createStore,combineReducers} from 'redux';

import {addReducer,countReducer} from './Reducer/CartReducer'

const rootReducer = combineReducers({
    add:addReducer,
    rem:countReducer
  });
export const Store = createStore(rootReducer);


