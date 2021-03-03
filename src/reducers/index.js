import { combineReducers } from 'redux';

import userReducer from './user';
import investmentsReducer from './investments';

const rootReducer = combineReducers({
  user: userReducer,
  investments: investmentsReducer,
});

export default rootReducer;
