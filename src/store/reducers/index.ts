import { combineReducers } from 'redux';
import { connectRouter } from 'connected-react-router';
import { History } from 'history';

import usersReducer from './users';

export default function createRootReducer(history: History) {
	return combineReducers({
		users: usersReducer,
		router: connectRouter(history),
	});
}
