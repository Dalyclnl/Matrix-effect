
import React, { useState, useEffect } from 'react';
import './MatrixEffect.css'; 

const MatrixEffect = () => {
  const [matrixText, setMatrixText] = useState('');

  useEffect(() => {
    const intervalId = setInterval(() => {
      const randomChar = String.fromCharCode(Math.floor(Math.random() * 94) + 33);
      setMatrixText(prevText => prevText + randomChar);
    }, 12); 

    return () => {
      clearInterval(intervalId); 
    };
  }, []);

  return (
    <div className="matrix-container">
      <span className="matrix-text">{matrixText}</span>
    </div>
  );
};

export default MatrixEffect;
