// @flow
import React from 'react';
import { render } from 'react-dom';
import { Provider } from '@seracio/rx-connect';
import App from './components/App';
import * as store from './store';

render(
    <Provider store={store}>
        <App />
    </Provider>,
    document.querySelector('#root')
);
