import React from 'react';
import ReactDOM from 'react-dom/client';
import { IconContext } from 'react-icons';
import { Provider } from 'react-redux';
import { BrowserRouter } from 'react-router-dom';
import App from './App';
import store from './Components/REDUX/STORE/store';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <BrowserRouter>
    <IconContext.Provider value={{size:'3rem'}}>
     <Provider store = {store}>
       <App />
     </Provider>
    </IconContext.Provider>
    </BrowserRouter>
  </React.StrictMode>
);

