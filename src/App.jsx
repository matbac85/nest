import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Home from './pages/Home';
import Destinations from './pages/Destinations';
import Header from './components/Header';

const App = () => (
    <BrowserRouter>
      <Header />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/destinations" element={<Destinations />} />
      </Routes>
    </BrowserRouter>
);

export default App;
