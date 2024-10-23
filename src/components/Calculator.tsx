import { useState } from 'react';
import styled from 'styled-components';

// Styled button component for calculator operations
const Buttons = styled.button`
    margin: 1%;               // Add space around buttons
    display: flex;             // Display button as a flex container
    gap: 1%;                   // Space between buttons (if needed)
`;

// Styled input component for number inputs
const Inputs = styled.input`
    margin: 1%;               // Add space around input fields
    display: flex;             // Display input as a flex container
    flex-direction: row;       // Align input fields in a row
    gap: 1%;                   // Space between input fields
`;

// Container for the input fields, centered on the page
const InputContainer = styled.div`
    display: flex;             // Display input fields in a flex layout
    justify-content: center;   // Center the input fields horizontally
    margin-bottom: 2%;         // Space below the input container
`;

// Container for the buttons, also centered
const ButtonContainer = styled.div`
    display: flex;             // Display buttons in a flex layout
    justify-content: center;   // Center the buttons horizontally
    gap: 1%;                   // Space between buttons
`;

// Styled div for displaying the calculation result
const OutputDisplay = styled.div`
    background-color: white;   // Set background color for the result display
    margin: 3% 0;              // Space above and below the result display
    padding: 3% 5%;            // Internal padding for the result display
    border: 2px solid gray;    // Border around the result display
    color: black;              // Default text color
`;

// Calculator component to perform basic arithmetic and display results
export default function Calculator() {
    const [firstNumber, setFirstNumber] = useState<string>('');  // State for the first number input
    const [secondNumber, setSecondNumber] = useState<string>(''); // State for the second number input
    const [result, setResult] = useState<number | null>(null);    // State for the calculation result

    // Function to handle different calculation operations
    const handleCalculation = (operation: string) => {
        const first = Number(firstNumber);   // Convert first input to a number
        const second = Number(secondNumber); // Convert second input to a number
        let answer = 0;

        // Perform the calculation based on the selected operation
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
            case 'pow':   // Calculate power (first raised to the second)
                answer = 1;
                for (let i = 0; i < second; i++) {
                    answer *= first;
                }
                break;
            case 'clear': // Clear the inputs and reset result
                setFirstNumber('');
                setSecondNumber('');
                answer = 0;
                break;
            default:
                answer = 0;
        }
        setResult(answer);  // Update the result state with the calculated value
    };

    return (
        <>
            {/* Input fields for first and second numbers */}
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

            {/* Buttons for different calculator operations */}
            <ButtonContainer>
                <Buttons onClick={() => handleCalculation('add')}>+</Buttons>
                <Buttons onClick={() => handleCalculation('subtract')}>-</Buttons>
                <Buttons onClick={() => handleCalculation('multiply')}>*</Buttons>
                <Buttons onClick={() => handleCalculation('divide')}>/</Buttons>
                <Buttons onClick={() => handleCalculation('pow')}>Power</Buttons>
                <Buttons onClick={() => handleCalculation('clear')}>Clear</Buttons>
            </ButtonContainer>

            {/* Display the result, changing text color if the result is negative */}
            {result !== null && (
                <OutputDisplay style={{ color: result < 0 ? 'red' : 'black' }}>
                    {result}
                </OutputDisplay>
            )}
        </>
    );
}
