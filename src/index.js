import React from 'react';
import { Provider } from 'react-redux';

import store from '~/config/store';

import Router from './routes';

function App() {
  return (
    <Provider store={store}>
      <Router />
    </Provider>
  );
}

export default App;
