import React from 'react';
import './index.css';
import * as serviceWorker from './serviceWorker';
import store from "./redux/redux-store";
import ReactDOM from 'react-dom';
import App from './App';

let rerenderEntireTree = (store) => {
    ReactDOM.render(
        <React.StrictMode>
            <App store={store}/>
        </React.StrictMode>,
        document.getElementById('root')
    );
};

rerenderEntireTree(store);

store.subscribe(() => {
    //let state = store.getState();
    rerenderEntireTree(store);
});

serviceWorker.unregister();
