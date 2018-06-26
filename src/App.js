import React, { Component } from 'react';
import { Provider } from 'react-redux';
import { createStore, applyMiddleware } from 'redux';
import createSagaMiddleware from 'redux-saga';
import { BrowserRouter, Switch, Route } from 'react-router-dom';

import combinedStore from './reducers/';
import rootSaga from './sagas';

import Translations from './containers/Translations';

import './styles/index.css';

import Home from './screens/Home';
import Products from './screens/Products';
import Product from './screens/Product';
import Cart from './screens/Cart';

const sagaMiddleware: any = createSagaMiddleware();
const store: Store = createStore(combinedStore, applyMiddleware(sagaMiddleware));

sagaMiddleware.run(rootSaga);

class App extends Component {
    render() {
        return (
            <Provider store={store}>
                <Translations>
                    <BrowserRouter>
                        <Switch>
                            <Route exact path="/" component={Home} />
                            <Route exact path="/products" component={Products} />
                            <Route path="/products/:id" component={Product} />
                            <Route path="/cart" component={Cart} />
                        </Switch>
                    </BrowserRouter>
                </Translations>
            </Provider>
        );
    }
}

export default App;
