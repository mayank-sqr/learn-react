import { combineReducers } from 'redux';
import { routerReducer } from 'react-router-redux';

import commonReducer from './common/reducers';
import homeReducer from './home/reducers';

const rootReducer = combineReducers({
	commonReducer,
	homeReducer,
	router: routerReducer
});

export default rootReducer;