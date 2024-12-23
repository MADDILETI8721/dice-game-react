import styled from 'styled-components';

const NumberSelector = ({ seterror,error, selectedNumber, setSelectedNumber}) => {
    const ArrayNumber = [1, 2, 3, 4, 5, 6];  

    const NumberSelectorHandler = (value) => {
        setSelectedNumber(value);
        seterror("");
    }

    return (
        <NumberSelectorContainer>
            <p className='error'>{error}</p>
            <div className='flex'>
            {ArrayNumber.map((value, i) => (
                <Box
                    isSelected={value === selectedNumber}
                    key={i}
                    onClick={() => NumberSelectorHandler(value)}
                >
                    {value}
                </Box>
            ))}
            </div>
            <p>Select Number</p>
        </NumberSelectorContainer>
    );
};

export default NumberSelector;

const NumberSelectorContainer = styled.div `
display: flex;
flex-direction: column;
align-items: end;
.flex {
    display: flex;
    gap: 24px;
    align-items: end;
}
p {
    font-size: 24px;
    font-weight: 700px;
}
.error {
    color: red;
}
`;

const Box = styled.div`
    width: 72px;
    height: 72px;
    border: 1px solid black;
    display: grid;
    place-items: center;
    font-size: 24px;
    font-weight: 700;
    background-color: ${(props) => (props.isSelected ? 'black' : 'white')};
    color: ${(props) => (props.isSelected ? 'white' : 'black')};
`;
