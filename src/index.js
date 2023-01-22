import React from 'react';
import ReactDOM from 'react-dom/client';
import { Provider } from 'react-redux';
import { BrowserRouter } from 'react-router-dom';
import store from './app/store';


import App from './App';
import 'antd/dist/reset.css';
// const root = ReactDOM.createRoot(document.getElementById('root'));
// root.render(
//       <App />
//   );

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <Provider store={store}>
<BrowserRouter>
<App />

</BrowserRouter>

    </Provider>
  </React.StrictMode>
  );