import React, { Component } from 'react';
import { Provider } from 'react-redux';
import { createStore, applyMiddleware } from 'redux';
import createSagaMiddleware from 'redux-saga';
import { BrowserRouter, Switch, Route } from 'react-router-dom';

import combinedStore from './reducers/';
import rootSaga from './sagas';

import './styles/index.css';

import Home from './screens/Home';

const sagaMiddleware: any = createSagaMiddleware();
const store: Store = createStore(combinedStore, applyMiddleware(sagaMiddleware));

sagaMiddleware.run(rootSaga);

class App extends Component {
    render() {
        return (
            <Provider store={store}>
                <BrowserRouter>
                    <Switch>
                        <Route exact path="/" component={Home} />
                    </Switch>
                </BrowserRouter>
            </Provider>
        );
    }
}

export default App;
