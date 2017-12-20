import { combineEpics } from 'redux-observable';
// import epics
import epicFetchMenus from './epicFetchMenus';
import epicGetShowcaseInfo from './epicGetShowcaseInfo';
import epicFetchEntitledBrands from './epicFetchEntitledBrands';

const commonEpic = combineEpics(
  epicFetchMenus,
  epicGetShowcaseInfo,
  epicFetchEntitledBrands
);

export default commonEpic