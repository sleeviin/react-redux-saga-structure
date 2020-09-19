import React from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';

import CssBaseline from '@material-ui/core/CssBaseline';
import WithoutRedux from './WithoutRedux';
import WithRedux from './WithRedux';

export interface AppProps {}
const App: React.SFC<AppProps> = () => {
    return (
        <Router>
            <CssBaseline />
            <Switch>
                <Route exact path='/' component={WithoutRedux} />
                <Route exact path='/redux' component={WithRedux} />
            </Switch>
        </Router>
    );
};

export default App;
