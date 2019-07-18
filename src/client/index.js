import React from 'react';
import {hydrate} from 'react-dom';
import {Provider} from 'react-redux';

import {configureStore} from '../shared/store';
import App from '../shared/App';

const store = configureStore();

hydrate(
  <Provider store={store}>
    <App />
  </Provider>,
  document.getElementById('root')
);

if (process.env.NODE_ENV === 'development') {
  if (module.hot) {
    module.hot.accept();
  }
}
