import React from 'react';
import './index.css';
import * as serviceWorker from './serviceWorker';
import ReactDOM from 'react-dom';
import SocialApp from "./App";

ReactDOM.render(
    <React.StrictMode>
        <SocialApp />
    </React.StrictMode>,
    document.getElementById('root')
);


serviceWorker.unregister();
