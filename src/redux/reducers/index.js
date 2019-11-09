import { combineReducers } from 'redux';

import goodsReducer from './goods';
import orderReducer from './order';
import categoryReducer from './category';

const rootReducer = combineReducers({
  goods: goodsReducer,
  order: orderReducer,
  category: categoryReducer
});

export default rootReducer;