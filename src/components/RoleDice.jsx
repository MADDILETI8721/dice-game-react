import React, { useState } from 'react';
import styled from 'styled-components';

const RoleDice = ({currentDice, rollDice}) => {

  return (
    <DiceContainer>
      <div className='dice' onClick={rollDice}>        
        <img
          src={`/images/dice/Dices_${currentDice}.png`}
          alt={`dice ${currentDice}`}
          style={{ width: '200px' }}
        />
      </div>
      <p>Click on the dice to roll</p>
    </DiceContainer>
  );
};

export default RoleDice;

const DiceContainer = styled.div`
  margin-top: 48px;
  display: flex;
  flex-direction: column;
  align-items: center;

  p {
    font-size: 24px;
  }

  .dice {
    cursor: pointer; /* Added cursor style for better UX */
  }
`;
