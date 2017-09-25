import React from 'react';
import ReactDOM from 'react-dom';
import App from './components/App';
import {BrowserRouter} from 'react-router-dom';
import registerServiceWorker from './registerServiceWorker';
import {Provider} from 'react-redux'
import configureStore from './components/cv/CV-component/store/configureStore'
import {fetchConsultants} from './components/cv/CV-component/actions/addProjectActions'
import {fetchOneConsultant} from './components/cv/CV-component/actions/addProjectActions'
import {fetchData} from './components/cv/CV-component/actions/fetchActions'

const store = configureStore()
store.dispatch(fetchConsultants())
store.dispatch(fetchOneConsultant())
store.dispatch(fetchData())


ReactDOM.render((
    <Provider store={store}>
        <BrowserRouter>
         <App/>
         </BrowserRouter>
    </Provider>
), document.getElementById('root'));
registerServiceWorker();

/*
import React from 'react';

import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import registerServiceWorker from './registerServiceWorker';


 ReactDOM.render(<App />, document.getElementById('root'));
 registerServiceWorker();
*/

