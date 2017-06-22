import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import registerServiceWorker from './registerServiceWorker';
import './index.css';


var dish = React.createElement("h1", null, "Baked Salmon");
ReactDOM.render(dish, document.getElementById('react-container'));
registerServiceWorker();
