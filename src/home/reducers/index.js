import { combineReducers } from 'redux';
import applyFetchCallouts from './applyFetchCallouts'

const homeReducer = combineReducers({
	applyFetchCallouts
});

export default homeReducer;