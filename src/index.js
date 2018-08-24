import React from 'react';
import {HashRouter} from 'react-router-dom';
import {Provider} from 'react-redux';
import ReactDOM from 'react-dom';
import store from './ducks/store';
import './index.css';
import App from './App';
import registerServiceWorker from './registerServiceWorker';

ReactDOM.render(
<Provider store={store} >
    <HashRouter >
        <App />
    </HashRouter>
</Provider>
, document.getElementById('root'));
registerServiceWorker();
