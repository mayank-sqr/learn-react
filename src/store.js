import { createStore, applyMiddleware } from 'redux'
import { createEpicMiddleware } from 'redux-observable';
import createHistory from 'history/createHashHistory'
import { routerMiddleware } from 'react-router-redux'

// import the root reducer
import rootEpic from './rootEpic';
import rootReducer from './rootReducer';
import queryString from 'query-string'


// export `history` to use in index.js, we using `HashHistory`
export const history = createHistory()


const epicMiddleware = createEpicMiddleware(rootEpic, {
	dependencies: {
		queryString
	}
});

// Build the middleware for intercepting and dispatching navigation actions
const navMiddleware = routerMiddleware(history)

const store = createStore(
	rootReducer,
	applyMiddleware(epicMiddleware),
	applyMiddleware(navMiddleware)
);

export default store;