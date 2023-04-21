import React, { useState } from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import AuthContext from './contexts/AuthContext';
import Home from './pages/Home';
import Destinations from './pages/Destinations';
import Header from './components/Header';
import Footer from './components/Footer';
import Cabin from './pages/Cabin';
import Proposez from './pages/Proposez'
import User from './pages/User'

const App = () => {
  const [currentUser, setCurrentUser] = useState("")

  return (
      <AuthContext.Provider value={[currentUser, setCurrentUser]}>
        <BrowserRouter>
          <Header />
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/destinations" element={<Destinations />} />
            <Route path="/cabin/:id" element={<Cabin />} /> 
            <Route path="/proposez" element={<Proposez />} /> 
            <Route path="/utilisateur" element={<User />} />
          </Routes>
        </BrowserRouter>
        <Footer />
      </AuthContext.Provider>
  );
}

export default App;