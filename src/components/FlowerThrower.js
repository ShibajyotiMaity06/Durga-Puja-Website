import React, { useEffect, useState } from 'react';

const FLOWERS_PER_SIDE = 5;
const THROW_INTERVAL_MS = 4000;

const FlowerThrower = () => {
  const [flowers, setFlowers] = useState([]);

  useEffect(() => {
    const interval = setInterval(() => {
      const baseTime = Date.now();
      const newFlowers = [];

      for (let i = 0; i < FLOWERS_PER_SIDE; i++) {
        const delay = i * 150; 
        newFlowers.push({ id: baseTime + "-left-" + i, from: 'left', delay });
        newFlowers.push({ id: baseTime + "-right-" + i, from: 'right', delay });
      }

      setFlowers((prev) => [...prev, ...newFlowers]);
      setTimeout(() => {
        setFlowers((prev) =>
          prev.filter(f => !newFlowers.some(nf => nf.id === f.id))
        );
      }, THROW_INTERVAL_MS + FLOWERS_PER_SIDE * 150 + 200);
    }, THROW_INTERVAL_MS);

    return () => clearInterval(interval);
  }, []);

  return (
    <>
      {flowers.map(({ id, from, delay }) => (
        <img
          key={id}
          src="/cursor.png"
          alt="flower"
          style={{
            position: 'fixed',
            bottom: 0,
            left: from === 'left' ? `${20 + delay / 10}px` : 'auto',  
            right: from === 'right' ? `${20 + delay / 10}px` : 'auto',
            width: 64,
            height: 64,
            pointerEvents: 'none',
            animation: `${from === 'left' ? 'throwFlowerLeft' : 'throwFlowerRight'} 4s forwards`,
            animationDelay: `${delay}ms`,
            zIndex: 9999,
            userSelect: 'none',
          }}
        />
      ))}
      <style>{`
        @keyframes throwFlowerLeft {
          0% { transform: translate(0, 0) rotate(0deg); opacity: 1; }
          100% { transform: translate(40vw, -40vh) rotate(360deg); opacity: 0; }
        }
        @keyframes throwFlowerRight {
          0% { transform: translate(0, 0) rotate(0deg); opacity: 1; }
          100% { transform: translate(-40vw, -40vh) rotate(-360deg); opacity: 0; }
        }
      `}</style>
    </>
  );
};

export default FlowerThrower;
