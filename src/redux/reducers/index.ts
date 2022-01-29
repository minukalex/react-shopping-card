import { combineReducers } from 'redux';
import productsReducer from './productsReducer'; // eslint-disable-line
import cartReducer from './cartReducer'; // eslint-disable-line

// CombineReducers
const rootReducer = combineReducers({
  products: productsReducer,
  cart: cartReducer,
});

export default rootReducer;
