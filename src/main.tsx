import React from 'react';
import ReactDOM from 'react-dom/client';
import { Home } from './components/Home/index.tsx'
import './styles/global.css'
import{BrowserRouter, Routes, Route} from 'react-router-dom'
import { Salas } from './components/Salas/index.tsx';
import { Menu } from './components/Menu/index.tsx';

ReactDOM.createRoot(document.getElementById('root') as HTMLElement).render(
  <React.StrictMode>
    <BrowserRouter>
    <Menu />
      <Routes>
        <Route path="/" element={<Home />}  />
        <Route path="/salas" element={<Salas />}  />
      </Routes>
    </BrowserRouter>
  </React.StrictMode>,
)
