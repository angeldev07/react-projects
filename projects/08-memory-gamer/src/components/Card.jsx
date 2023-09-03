import React from 'react'

export const Card = ({ option, isFlipped, onSeletedOption, isBlock, isMatch }) => {
    const className = isFlipped || isMatch ? 'card hidden' : 'card'

    return (
      <div className="card-container">
        <button onClick={onSeletedOption} className={className} disabled={isFlipped || isBlock}></button>
        <span className={`card-icon ${isMatch ? 'match' : ''}`}>{option}</span>
      </div>
    );
  };
