import React from 'react';

const Card = ({ icon, label, number }) => {
  return (
    <div className="card">
      <div className="icon">{icon}</div>
      <div className="label">{label}</div>
      <div className="number">{number}</div>
    </div>
  );
};

export default Card;
