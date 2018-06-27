import React, { Component } from 'react';
import { Provider } from 'react-redux';
import { createStore, applyMiddleware } from 'redux';
import createSagaMiddleware from 'redux-saga';

import combinedStore from './reducers/';
import rootSaga from './sagas';

import Translations from './containers/Translations';
import Router from './containers/Router';

import './styles/index.css';

const sagaMiddleware = createSagaMiddleware();
const store = createStore(combinedStore, applyMiddleware(sagaMiddleware));

sagaMiddleware.run(rootSaga);

class App extends Component {
    render() {
        return (
            <Provider store={store}>
                <Translations>
                    <Router />
                </Translations>
            </Provider>
        );
    }
}

export default App;
