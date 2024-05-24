import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';
import Success from './success';
import Fail from './fail';
import{BrowserRouter, Route, Routes}from "react-router-dom"

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <>
  <BrowserRouter>
  <Routes>
    <Route path='/' element={<App/>} ></Route>
    <Route path='/success' element={<Success/>}></Route>
    <Route path='/fail' element={<Fail/>}></Route>
  </Routes>
  </BrowserRouter>
 </>
);


