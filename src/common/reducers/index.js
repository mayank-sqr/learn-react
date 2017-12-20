import { combineReducers } from 'redux';
import applyFetchMenus from './applyFetchMenus';
import applyGetShowcaseInfo from './applyGetShowcaseInfo';
import applyFetchEntitledBrands from './applyFetchEntitledBrands';

const commonReducer = combineReducers({
	applyFetchMenus,
	showcaseInfo: applyGetShowcaseInfo,
	entitledBrands: applyFetchEntitledBrands	
});

export default commonReducer;