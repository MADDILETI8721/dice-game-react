import React from 'react'
import styled from 'styled-components'

const Rules = () => {
  return (
    <RulesContainer>
        <h2>How to Play Dice game</h2>
        <div className='text'>
        <p>Select any Number</p>
        <p>after click on dice if selected numbver is equal to the dice number you
            wil get same points as dice{""}
        </p>
        <p>if you get wrong guess then 2 points will be deducted</p>
        </div>
    </RulesContainer>
  )
}

export default Rules

const RulesContainer = styled.div `
max-width: 800px;
margin: 0 auto;
margin-top:40px;
background-color: #FBF1F1;
border-radius: 10px;
padding: 20px;
h2{
    font-size: 24px;
    font-weight: bold;
}
.text {
    margin-top: 24px;
}
`;