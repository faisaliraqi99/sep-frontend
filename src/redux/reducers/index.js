import { combineReducers } from 'redux';

import goodsReducer from './goods';
import orderReducer from './order';
import ordersReduser from './orders'
import categoryReducer from './category';

const rootReducer = combineReducers({
  goods: goodsReducer,
  order: orderReducer,
  orders: ordersReduser,
  category: categoryReducer
});

export default rootReducer;