import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import { ApolloProvider } from '@apollo/client';

import { ContinentProvider } from './contexts/ContinentProvider';
import client from './apollo';

import './bootstrap.min.css';


ReactDOM.render(
  <React.StrictMode>
    <ApolloProvider client={client}>
      <ContinentProvider>
        <App />
      </ContinentProvider>
    </ApolloProvider>
  </React.StrictMode>,
  document.getElementById('root')
);