import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';
import reportWebVitals from './reportWebVitals';
//npm install reactstrap ve npm install bootstrap yaptıktan sonra import ile bootstrap'de ekleniyor, ikisinide kullanabiliriz
import  'bootstrap/dist/css/bootstrap.min.css'
import 'alertifyjs/build/css/alertify.min.css'
import { BrowserRouter } from 'react-router-dom';
const root = ReactDOM.createRoot(document.getElementById('root'));
//index.js ana js dosyasıdır.  <App /> ile ana componentin ne olduğu belirtilir.
root.render(
  <React.StrictMode>
    <BrowserRouter><App /></BrowserRouter>
    
  </React.StrictMode>
);
reportWebVitals();
