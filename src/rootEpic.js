import { combineEpics } from 'redux-observable';

// Import feature wise epic
import commonEpic from './common/epics';
import homeEpic from './home/epics';

const rootEpic = combineEpics(
	commonEpic,
  homeEpic
);

export default rootEpic