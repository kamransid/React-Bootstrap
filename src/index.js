import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
//import App from './App';
//import App from './AlertDismissable'
// import App from './Badges'
//import App from './Button'
// import App from './Breadcrumbs'
import App from './ButtonGroup'
import * as serviceWorker from './serviceWorker';

ReactDOM.render(<App />, document.getElementById('root'));

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: http://bit.ly/CRA-PWA
serviceWorker.unregister();
