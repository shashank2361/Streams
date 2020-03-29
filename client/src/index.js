import React from 'react';
import ReactDom from 'react-dom';
import {Provider} from 'react-redux';
import {createStore , applyMiddleware , compose} from 'redux';

import reduxThunk from 'redux-thunk';


import App from './components/App';
import reducers from './reducers';

const composeEnhancers = (typeof window !== 'undefined' && window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__) || compose;

//const composeEnhancers = window.__Redux_DevTOOLS_EXTENSION_COMPOSE__ || compose;
const store = createStore(
    reducers , composeEnhancers (applyMiddleware(reduxThunk)));

ReactDom.render(
<Provider store={store}>
<App/>
</Provider>
,document.querySelector('#root')

);