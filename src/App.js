import React, { Component } from 'react';
import { Provider } from 'react-redux';
import { createStore, applyMiddleware } from 'redux';
import createSagaMiddleware from 'redux-saga';
import { BrowserRouter, Switch, Route } from 'react-router-dom';
import { IntlProvider } from 'react-intl';

import combinedStore from './reducers/';
import rootSaga from './sagas';

import './styles/index.css';

import Home from './screens/Home';
import Products from './screens/Products';

const sagaMiddleware: any = createSagaMiddleware();
const store: Store = createStore(combinedStore, applyMiddleware(sagaMiddleware));

sagaMiddleware.run(rootSaga);

class App extends Component {
    render() {
        return (
            <Provider store={store}>
                <IntlProvider locale={window.navigator.language}>
                    <BrowserRouter>
                        <Switch>
                            <Route exact path="/" component={Home} />
                            <Route exact path="/products" component={Products} />
                        </Switch>
                    </BrowserRouter>
                </IntlProvider>
            </Provider>
        );
    }
}

export default App;
