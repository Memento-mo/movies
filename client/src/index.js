import React, { Fragment } from 'react';
import ReactDOM from 'react-dom';

import { Provider } from 'react-redux';
import { ThemeProvider } from 'styled-components'

import store from './store/store';
import theme from './utils/theme';
import GlobalStyles from './utils/globals';

import App from './containers/App';
import ErrorBoundry from './containers/ErrorBoundry';

ReactDOM.render(
  <Provider store={store}>
    <ErrorBoundry>
      <ThemeProvider theme={theme}>
        <Fragment>
          <App/>
          <GlobalStyles />
        </Fragment>
      </ThemeProvider>
    </ErrorBoundry>
  </Provider>,
  document.querySelector('#root')
)