import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import {createRoot} from 'react-dom/client';
import './index.css';
import App from './App';
import { Home } from './pages/Home';


const rootElement = document.getElementById('root');
const root = createRoot(rootElement!);

root.render(

  <BrowserRouter>
    <Routes>
      <Route path="/" element={<App/>}>
        <Route index element={<Home/>} />
      </Route>
    </Routes>
  </BrowserRouter>
);

