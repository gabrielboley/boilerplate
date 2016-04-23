import React from 'react';
import App from './js/App.js';
import { render } from 'react-dom';
import { Provider } from 'react-redux';
import configureStore from './js/store/configureStore';

const store = configureStore();
const root = document.getElementById('root');


render(
    <Provider store={store}>
        <App />
    </Provider>,
    root
);
