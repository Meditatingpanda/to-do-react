import React from 'react';
import ReactDOM from 'react-dom';
import './index.scss';
import App from './App';
import {Helmet} from 'react-helmet';


ReactDOM.render(
  <React.StrictMode>
    <Helmet>
      <meta name="google-site-verification" content="7_9zevZVj3YaFrHmH7-q-0IkPKnXP6c7ZOhlXg0byIg" />
      
     <title>Confession Page</title>
    </Helmet>
    <App />
  </React.StrictMode>,
  document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals

