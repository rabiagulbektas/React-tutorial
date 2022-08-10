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
// ReactDOM.render(<BrowserRouter><App/></BrowserRouter>,document.getElementById('root'))

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
