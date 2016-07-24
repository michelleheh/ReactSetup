import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import { createStore, applyMiddleware } from 'redux';
import ReduxPromise from 'redux-promise';

import appReducer from './reducers/appReducer.jsx';
import App from './components/app.jsx';

const createStoreWithMiddleware = applyMiddleware(ReduxPromise)(createStore);
let store = createStoreWithMiddleware(appReducer);

ReactDOM.render(
  <Provider store={store}>
    <App />
  </Provider>,
  document.getElementById('app')
);