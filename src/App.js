import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import styled from 'styled-components';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import Home from './pages/Home';
import Schedule from './pages/Schedule';
import Travel from './pages/Travel';
import Registry from './pages/Registry';
import Gallery from './pages/Gallery';
import RSVP from './pages/RSVP';
import './App.css';

const AppContainer = styled.div`
  font-family: 'Cormorant Garamond', serif;
  color: #333;
`;

function App() {
  return (
    <Router>
      <AppContainer>
        <Navbar />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/schedule" element={<Schedule />} />
          <Route path="/travel" element={<Travel />} />
          <Route path="/registry" element={<Registry />} />
          <Route path="/gallery" element={<Gallery />} />
          <Route path="/rsvp" element={<RSVP />} />
        </Routes>
        <Footer />
      </AppContainer>
    </Router>
  );
}

export default App; 