import React from 'react';
import { Provider } from 'react-redux';
import { Switch, Route } from 'react-router-dom';
import { ConnectedRouter } from 'connected-react-router';
import { createBrowserHistory } from 'history';

import configureStore from '../store';

import WithoutRedux from './WithoutRedux';
import WithRedux from './WithRedux';


export const history = createBrowserHistory();

export interface AppProps {}

const store = configureStore(history);
const App: React.FC<AppProps> = () => {
	return (
		<Provider store={store}>
			<ConnectedRouter history={history}>
				<Switch>
					<Route exact path='/' component={WithoutRedux} />
					<Route exact path='/redux' component={WithRedux} />
				</Switch>
			</ConnectedRouter>
		</Provider>
	);
};

export default App;
