import { useState } from "react";
import "./App.css";
import GameBoard from "./components/GameBoard";
import ScoreBoard from "./components/ScoreBoard";

function App() {
    const [score, setScore] = useState(0);
    const [hiScore, setHiScore] = useState(0);
    const [gameOver, setGameOver] = useState(false);

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

    return (
        <>
            <ScoreBoard score={score} hiScore={hiScore} />
            <GameBoard
                amount={12}
                incrementScore={incrementScore}
                gameOver={gameOver}
                restart={restartGame}
            />
        </>
    );
}

export default App;
