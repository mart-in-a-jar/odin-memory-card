import { useState } from "react";
import "./App.css";
import GameBoard from "./components/GameBoard";
import ScoreBoard from "./components/ScoreBoard";
import AmountPicker from "./components/AmountPicker";

function App() {
    const [score, setScore] = useState(0);
    const [hiScore, setHiScore] = useState(0);
    const [gameOver, setGameOver] = useState(false);
    const [amount, setAmount] = useState(12);

    const incrementScore = () => {
        if (gameOver) setGameOver(false);
        setScore(score + 1);
    };

    const restartGame = () => {
        if (score > hiScore) {
            setHiScore(score);
        }
        setScore(0);
        setGameOver(true);
    };

    const changeAmount = (e) => {
        setAmount(e.target.value);
        restartGame();
    };

    return (
        <>
            <AmountPicker onChange={changeAmount} amount={amount} />
            <ScoreBoard score={score} hiScore={hiScore} />
            <GameBoard
                amount={amount}
                incrementScore={incrementScore}
                gameOver={gameOver}
                restart={restartGame}
            />
        </>
    );
}

export default App;
