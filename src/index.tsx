import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import { Provider } from 'react-redux';
import { store } from './store/configReducer';

const app = () => {
  return (
    <Provider store={store()}>
      <App />
    </Provider>
    // <App />
  );
};
const root = ReactDOM.createRoot(document.getElementById('app') as HTMLElement);

root.render(app());
