import { useState } from 'react';
import styled from 'styled-components';

const Buttons = styled.button`
    margin: 1%;
    display: flex;
    gap: 1%;
`;

const Inputs = styled.input`
    margin: 1%;
    display: flex;
    flex-direction: row;
    gap: 1%;
`;

const InputContainer = styled.div`
    display: flex;
    justify-content: center;
    margin-bottom: 2%;
`;

const ButtonContainer = styled.div`
    display: flex;
    justify-content: center;
    gap: 1%;
`;
const OutputDisplay = styled.div`
    background-color: white;
    margin: 3% 0;
    padding: 3% 5%;
    border: 2px solid gray;
    color: black;
`;

export default function Calculator() {
    const [firstNumber, setFirstNumber] = useState<string>('');
    const [secondNumber, setSecondNumber] = useState<string>('');
    const [result, setResult] = useState<number | null>(null);

    const handleCalculation = (operation: string) => {
        const first = Number(firstNumber);
        const second = Number(secondNumber);
        let answer = 0;


        switch (operation) {
            case 'add':
                answer = first + second;
                break;
            case 'subtract':
                answer = first - second;
                break;
            case 'multiply':
                answer = first * second;
                break;
            case 'divide':
                answer = first / second;
                break;
            case 'pow':
                answer = 1;
                for (let i = 0; i< second; i++) {
                    answer *= first;
                }
                    break;
            case 'clear':
                setFirstNumber('');
                setSecondNumber('');
                answer = 0;
                break;
            default:
                answer=0;
        }
        setResult(answer);
    };

    return (
        <>
            <InputContainer>
            <Inputs
                type="number"
                value={firstNumber}
                onChange={(e) => setFirstNumber(e.target.value)}
                placeholder="First Number"
            />
            <Inputs
                type="number"
                value={secondNumber}
                onChange={(e) => setSecondNumber(e.target.value)}
                placeholder="Second Number"

            />
            </InputContainer>
            <ButtonContainer>
            <Buttons onClick={() => handleCalculation('add')}>+</Buttons>
            <Buttons onClick={() => handleCalculation('subtract')}>-</Buttons>
            <Buttons onClick={() => handleCalculation('multiply')}>*</Buttons>
            <Buttons onClick={() => handleCalculation('divide')}>/</Buttons>
            <Buttons onClick={() => handleCalculation('pow')}>Power</Buttons>
            <Buttons onClick={() => handleCalculation('clear')}>Clear</Buttons>
            </ButtonContainer>
            {/* Conditionally set color if the result is negative */}
            {result !== null && (
                <OutputDisplay style={{ color: result < 0 ? 'red' : 'black' }}>
                    {result}
                </OutputDisplay>
            )}
        </>
    );
}