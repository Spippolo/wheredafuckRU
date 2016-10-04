import 'babel-polyfill';
import React from 'react';
import { render } from 'react-dom';
// import { Provider } from 'react-redux';
// import { createStore, applyMiddleware } from 'redux';
// import thunkMiddleware from 'redux-thunk';
// import createLogger from 'redux-logger';
import App from './containers/app.jsx';

// const loggerMiddleware = createLogger();
// const store = createStore(
//   lurchApp,
//   initialState,
//   applyMiddleware(
//     thunkMiddleware,
//     loggerMiddleware
//   ));

// fetchInitialStates(store);
// render(
//   <Provider store={store}>
//     <App />
//   </Provider>,
//   document.getElementById('app'));
render(
  <App />,
  document.getElementById('app')
);
