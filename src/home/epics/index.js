/*
	Need to study regarding epic and combineEpics
	What is redux-observable?
*/

import { combineEpics } from 'redux-observable';
// import epics
import epicFetchCallouts from './epicFetchCallouts';

const homeEpic = combineEpics(
  epicFetchCallouts
);

export default homeEpic