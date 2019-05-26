import React from 'react';
import ReactDOM from 'react-dom';
import creatStore from 'redux';
import { Provider } from 'react-redux';
import './index.css';
import App from './App';
import reducer from './reducers/rootReducer';
import * as serviceWorker from './serviceWorker';

const store = creatStore(reducer)

ReactDOM.render(<Provider store={store}><App /></Provider>, document.getElementById('root'));


serviceWorker.unregister();
