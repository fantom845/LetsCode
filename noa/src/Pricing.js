import React, { useEffect } from 'react';
import { Link } from 'react-router-dom';
import './Pricing.css';

function Pricing() {
  useEffect(() => {
    const interval = setInterval(() => {
      const pyramid = document.querySelector('.pyramid');
      pyramid.style.transform = `rotateX(${Date.now() * 0.02}deg) rotateY(${Date.now() * 0.02}deg)`; // Increased speed
    }, 16);

    return () => clearInterval(interval);
  }, []);

  return (
    <div className="pricing-page">
        <nav>
        <Link to="/">landing page</Link>
      </nav>
      <h1>Pricing</h1>
      <p>Choose a plan that works for you!</p>
      <div className="pyramid-container">
        <div className="pyramid">
          {[...Array(20)].map((_, i) => (
            <div className="dot" key={i} />
          ))}
        </div>
      </div>
    </div>
  );
}

export default Pricing;
