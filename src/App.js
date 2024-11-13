import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import { HeaderComponent } from './components/HeaderComponent';
import { FooterComponent } from './components/FooterComponent';
import HomePage from './components/HomePage';  
import { ListClientesComponent } from './components/ListClientesComponent';
import { AddClienteComponent } from './components/AddClienteComponent';
import { ListProductosComponent } from './components/ListProductosComponent';
import { AddProductoComponent } from './components/AddProductoComponent';

import './App.css';
import './Home.css';

function App() {
  return (
    <Router>
      <div className="app-container">
        <HeaderComponent />
        <main className="main-content">
          <div className="container">
            <Routes>
              <Route path="/" element={<HomePage />} />
              <Route path="/clientes" element={<ListClientesComponent />} />
              <Route path="/add-cliente" element={<AddClienteComponent />} />
              <Route path="/edit-cliente/:id" element={<AddClienteComponent />} />
              <Route path="/productos" element={<ListProductosComponent />} />
              <Route path="/add-producto" element={<AddProductoComponent />} />
              <Route path="/edit-producto/:id" element={<AddProductoComponent />} />
            </Routes>
          </div>
        </main>
        <FooterComponent />
      </div>
    </Router>
  );
}

export default App;