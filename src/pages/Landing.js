import React from 'react';
import { useNavigate } from 'react-router-dom';
import './Landing.css';
import FlowerThrower from '../components/FlowerThrower';

const Landing = () => {
  const navigate = useNavigate();

  return (
    <div className="landing-root"
    style={{ cursor: "url('/cursor.png') 16 16, auto" }}
    >
      <FlowerThrower />
      <img src="/First.png" alt="Durga Puja" className="landing-bg" />
      <div className="landing-header">
        <span className="landing-title">One Town Bengali Association , Visakhapatnam</span>
        <span className="landing-year">Estd 1929</span>
      </div>
      <button className="glass-btn" onClick={() => navigate('/memory')}>
        In Loving Memory
      </button>
      <span className="dev-signature">Developed by Maity</span>
    </div>
  );
};

export default Landing;
