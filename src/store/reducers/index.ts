import { combineReducers } from 'redux';
import { connectRouter } from 'connected-react-router';
import { History } from 'history';

import authReducer from './auth';
import usersReducer from './users';

export default function createRootReducer(history: History) {
	return combineReducers({
		auth: authReducer,
		users: usersReducer,
		router: connectRouter(history),
	});
}
