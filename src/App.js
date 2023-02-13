import { useState } from "react";
import "./App.css";
import GameBoard from "./components/GameBoard";
import ScoreBoard from "./components/ScoreBoard";
import AmountPicker from "./components/AmountPicker";
import Rules from "./components/Rules";

function App() {
    const [score, setScore] = useState(0);
    const [hiScore, setHiScore] = useState(0);
    const [gameOver, setGameOver] = useState(false);
    const [amount, setAmount] = useState(12);
    const [type, setType] = useState("rm");

    const incrementScore = () => {
        if (gameOver) setGameOver(false);
        setScore(score + 1);
    };

    const restartGame = (animation = "game-over") => {
        document.querySelector(".cards").classList.add(animation);
        setTimeout(() => {
            document.querySelector(".cards").classList.remove(animation);
        }, 1000);
        if (score > hiScore) {
            setHiScore(score);
        }
        setScore(0);
        setGameOver(true);
    };

    const changeAmount = (e) => {
        setAmount(+e.target.value);
        restartGame(null);
    };

    const changeType = () => {
        setType(() => {
            return type === "hp" ? "rm" : "hp";
        });
        restartGame(null);
    };

    return (
        <>
            <Rules />
            <header>
                <AmountPicker onChange={changeAmount} amount={amount} />
                <ScoreBoard score={score} hiScore={hiScore} />
                <button onClick={changeType}>
                    {type === "rm" ? "Harry Potter" : "Rick and Morty"}
                </button>
            </header>
            <GameBoard
                amount={amount}
                incrementScore={incrementScore}
                gameOver={gameOver}
                restart={restartGame}
                type={type}
            />
        </>
    );
}

export default App;
