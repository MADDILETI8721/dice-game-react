import { useState } from 'react';
import TotalScore from './TotalScore';
import NumberSelector from './NumberSelector';
import styled from 'styled-components';
import RoleDice from './RoleDice';
import { Button, OutlineButton } from './styled/Button';
import Rules from './Rules';

const GamePlay = () => {
  const [score, setScore] = useState(0); // Initialize score to 0
  const [selectedNumber, setSelectedNumber] = useState();
  const [currentDice, setCurrentDice] = useState(1); 
  const [error, setError] = useState("");
  const [showRules, setShowRules] = useState(false); // State to toggle rules visibility

  const generateRandomNumber = (Min, Max) => {
    return Math.floor(Math.random() * (Max - Min) + Min); 
  };

  const rollDice = () => {
    if (!selectedNumber) {
      setError("You have not selected any number");
      return;
    }

    const randomNumber = generateRandomNumber(1, 7); 
    setCurrentDice(randomNumber);   

    if (selectedNumber === randomNumber) {
      setScore((prev) => prev + randomNumber); 
    } else {
      setScore((prev) => prev - 2); 
    }
    setSelectedNumber(undefined); // Reset selected number after rolling
    setError(""); // Reset error message after rolling
  };

  const resetScore = () => {
    setScore(0);
  };

  const toggleRules = () => {
    setShowRules(!showRules); // Toggle the visibility of the Rules component
  };

  return (
    <MainContainer>
      <div className="top_section">
        <TotalScore score={score} />  
        <NumberSelector error={error} setError={setError} selectedNumber={selectedNumber} setSelectedNumber={setSelectedNumber} />
      </div>
      
      <RoleDice currentDice={currentDice} rollDice={rollDice} /> 

      <div className="btns">
        <OutlineButton onClick={resetScore}>Reset</OutlineButton>      
        <Button onClick={() =>setShowRules((prev) =>!prev)}>{showRules? "Hide" : "Show"} Rules</Button>
      </div>

      {showRules && <Rules />} 
    </MainContainer>
  );
};

export default GamePlay;

const MainContainer = styled.main`
  .top_section {
    display: flex;
    justify-content: space-around;
    align-items: center;
    padding-top: 70px;
  }

  .btns {
    margin-top: 40px;
    display: flex;
    flex-direction: column;
    justify-content: center;    
    align-items: center;
    gap: 10px;
  }
`;
