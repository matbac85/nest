import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Home from './pages/Home';
import Destinations from './pages/Destinations';
import Header from './components/Header';
import Footer from './components/Footer';
import Cabin from './pages/Cabin';
import Proposez from './pages/Proposez'

const App = () => (
  <>
    <BrowserRouter>
      <Header />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/destinations" element={<Destinations />} />
        <Route path="/cabin/:id" element={<Cabin />} /> 
        <Route path="/proposez" element={<Proposez />} /> 
        
      </Routes>
    </BrowserRouter>
    <Footer />
  </>
);

export default App;
