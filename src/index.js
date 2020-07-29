import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import Root from 'client/Root';
import * as serviceWorker from './serviceWorker';
import 'scss/airbnb.scss';
import {Provider} from "react-redux";
import {store} from "./redux/store";

ReactDOM.render(
  <Provider store={store}>
    <Root />
  </Provider>,
  document.getElementById('root')
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
