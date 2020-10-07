import { Store, createStore, applyMiddleware } from 'redux';
import createSagaMiddleware from 'redux-saga';
// `react-router-redux` is deprecated, so we use `connected-react-router`.
// This provides a Redux middleware which connects to our `react-router` instance.
import { routerMiddleware } from 'connected-react-router';
// We'll be using Redux Devtools. We can use the `composeWithDevTools()`
// directive so we can pass our middleware along with it
import { composeWithDevTools } from 'redux-devtools-extension';
import { History } from 'history';

import rootSaga from './sagas';
import createRootReducer from './reducers';

import ApplicationState from '../types/ApplicationState';

export default function configureStore(history: History): Store<ApplicationState> {
	const composeEnhancers = composeWithDevTools({});
	const sagaMiddleware = createSagaMiddleware();

	const store = createStore(createRootReducer(history), composeEnhancers(applyMiddleware(routerMiddleware(history), sagaMiddleware)));
	sagaMiddleware.run(rootSaga);

	return store;
}
