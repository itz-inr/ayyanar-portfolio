import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import './index.css';

// Importing Sections
import Home from './pages/Home';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import BackgroundElements from './components/BackgroundElements';

function App() {
  return (
    <BrowserRouter>
      <div className="app-container">
        <BackgroundElements />
        <Navbar />
        <main>
          <Routes>
            <Route path="/" element={<Home />} />
          </Routes>
        </main>
        <Footer />
      </div>
    </BrowserRouter>
  );
}

export default App;
