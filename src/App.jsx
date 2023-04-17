import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Home from './pages/Home'
import Destinations from './pages/Destinations';

const App = () => (
  <BrowserRouter>
    <Routes>
      <Route path="/" element={<Home />} />
    </Routes>
    <Routes>
      <Route path="/destinations" element={<Destinations />} />
    </Routes>
  </BrowserRouter>
);

export default App;
