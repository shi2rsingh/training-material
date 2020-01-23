import React from 'react';
import ReactDOM from 'react-dom';
import App from './src/App';
import { Provider } from 'react-redux';
import store from './src/store';

console.log('Hello There');

ReactDOM.render(<Provider store={store}><App /></Provider>, document.getElementById("root"));
