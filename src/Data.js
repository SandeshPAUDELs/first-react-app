// Rock Papers Scissors app with react js
import React, {useState} from 'react';

const RockPaperScissors = () => {
    const[playerChoice, setPlayerChoice] = useState('');
    const[computerChoice, setComputerChoice] = useState('');
    const[result, setResult] = useState('');
    const choices = ['rock', 'paper', 'scisssors'];
    const handleChoice = (choices) => {
        const computerRandomChoice = choices[Math.floor(Math.random()*choices.length)];
        setPlayerChoice(choices);
        setComputerChoice(computerRandomChoice);
    };
    const calculateResult = (playerChoice, computerChoice) => {
        if (playerChoice === computerChoice) {
            setResult('Its a tie!');
        }
        else if(
            (playerChoice === 'rock' &&
            computerChoice === 'scissors') ||
            (playerChoice === 'paper' && computerChoice === 'rock') ||
            (playerChoice === 'scissors' && computerChoice === 'paper')){
                setResult("YOU win!");
            }else{
                setResult("Computer wins");
            };
    };
    const resetGame = () => {
        setPlayerChoice('');
        setComputerChoice('');
        setResult('');
    };
    return (
        <div className = "rock-paper-scissors">
            <h1>Rock Paper Scissors</h1>
            <div className = "choices">
                {choices.map((choices) => (
                    <button key = {choices}  onClick = {() => handleChoice(choices)}>
                    {choices}
                </button>
                ))}
            </div>
            {playerChoice && computerChoice && (
                <div className = "result">
                    <p>Your Choice: {playerChoice}</p>
                    <p>Computer Choice: {computerChoice}</p>
                    <p>{result}</p>
                    <button onClick = {resetGame}>Play Again</button>
                </div>
            )}
        </div>
    )
}
export default RockPaperScissors;