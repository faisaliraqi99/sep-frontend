import { combineReducers } from 'redux';

import goodsReducer from './goods';
import orderReducer from './order';
import categoryReducer from './category';
import adminReducer from './admin';

const rootReducer = combineReducers({
  goods: goodsReducer,
  order: orderReducer,
  orders: adminReducer,
  category: categoryReducer
});

export default rootReducer;