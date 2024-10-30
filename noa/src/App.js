import React, { useState, useEffect } from 'react';
import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom';
import Pricing from './Pricing';
import './App.css';

function Home({ offset }) {
  return (
    <div className="landing-page">
      <nav>
        <Link to="/pricing">Pricing</Link>
      </nav>
      <div className="blob-container">
        <h1
          className="logo"
          style={{
            transform: `translate(${offset.x}px, ${offset.y}px) scale(1.05)`,
          }}
        >
          LetsCode
        </h1>
      </div>
    </div>
  );
}

function App() {
  const [offset, setOffset] = useState({ x: 0, y: 0 });

  const handleMouseMove = (e) => {
    const screenCenterX = window.innerWidth / 2;
    const screenCenterY = window.innerHeight / 2;
    const offsetX = (e.clientX - screenCenterX) * 0.04;
    const offsetY = (e.clientY - screenCenterY) * 0.04;
    setOffset({ x: offsetX, y: offsetY });
  };

  useEffect(() => {
    window.addEventListener('mousemove', handleMouseMove);
    return () => {
      window.removeEventListener('mousemove', handleMouseMove);
    };
  }, []);

  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home offset={offset} />} />
        <Route path="/pricing" element={<Pricing />} />
      </Routes>
    </Router>
  );
}

export default App;
