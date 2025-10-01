import React from 'react';
import { useNavigate } from 'react-router-dom';
import './Memory.css';

const Memory = () => {
  const navigate = useNavigate();

  return (
    <div className="memory-root">
      <img src="/Second1.png" alt="In Loving Memory Collage" className="memory-bg" />
      <button
        className="memory-title-btn"
        onClick={() => navigate('/past-members')}
      >
        In Loving Memory
      </button>
      <div className="memory-content-btn">
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
