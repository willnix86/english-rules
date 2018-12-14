import React from 'react';
import ReactDOM from 'react-dom';
import {Provider} from 'react-redux';
import store from './store';
import App from './components/@App/App';
import * as serviceWorker from './serviceWorker';
import Modal from 'react-modal';
import {userLogin} from './actions/userActions';
import './index.css';


Modal.setAppElement('#root');

const token = localStorage.getItem('authToken');
const userId = localStorage.getItem('userId');

(async function() {
    if (token !== null) {
        await store.dispatch(userLogin(userId, token))
    }

    ReactDOM.render(
        <Provider store={store}>
            <App />
        </Provider>, 
        document.getElementById('root')
    );
})()


    
// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: http://bit.ly/CRA-PWA
serviceWorker.unregister();