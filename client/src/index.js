
import './scripts/app.css';
import './scripts/stripe.css';
import './scripts/starreview.css';
import './scripts/mobile-landscape.css';
import './scripts/mobile-portrait.css';

import React from 'react';
import { HelmetProvider } from 'react-helmet-async';
import { Provider } from 'react-redux';
import { createRoot } from 'react-dom/client';
import { legacy_createStore ,applyMiddleware} from 'redux';

import reduxThunk from 'redux-thunk';
import App from './components/App';
import reducers from './reducers';
import axios from 'axios'
window.axios= axios;
// in browser console
//const survey = {title: 'essay survey', subject: 'give us feedback', recipients: 'isa.bidou@gmail.com', body: 'did you like our essay?'}
//axios.post('/api/surveys', survey)
const store  = legacy_createStore(reducers,{},applyMiddleware(reduxThunk));
const container = document.getElementById('root');
const root = createRoot(container);
root.render(
    <HelmetProvider>
    <Provider store = {store}><App /></Provider>
    </HelmetProvider>
);
//console.log(process.env.REACT_APP_STRIPE_KEY);
