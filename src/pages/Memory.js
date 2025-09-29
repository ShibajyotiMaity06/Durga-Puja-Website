import React from 'react';
import { useNavigate } from 'react-router-dom';
import './Memory.css';

const Memory = () => {
  const navigate = useNavigate();
  return (
    <div className="memory-root">
      <img src="/Second.png" alt="In Loving Memory Collage" className="memory-bg" />
      <div className="memory-content">
        <div className="memory-title">In Loving Memory</div>
        <button
          className="glass-btn"
          onClick={() => navigate('/main/history')}
        >
          Go To Main Site
        </button>
      </div>
    </div>
  );
};

export default Memory;
