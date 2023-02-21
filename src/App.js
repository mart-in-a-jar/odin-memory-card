import { useEffect, useState } from "react";
import "./App.css";
import GameBoard from "./components/GameBoard";
import PopUp from "./components/PopUp";
import Header from "./components/Header";

function App() {
    const [score, setScore] = useState(0);
    const [hiScore, setHiScore] = useState(0);
    const [gameOver, setGameOver] = useState(false);
    const [amount, setAmount] = useState(12);
    const [type, setType] = useState("rm");
    const [gameWon, setGameWon] = useState(false);

    const incrementScore = () => {
        if (gameOver) setGameOver(false);
        setScore(score + 1);
    };

    useEffect(() => {
        if (score >= amount) setGameWon(true);
    }, [score, amount]);

    const restartGame = (animation = "game-over") => {
        if (animation) {
            document.querySelector(".cards").classList.add(animation);
            setTimeout(() => {
                document.querySelector(".cards").classList.remove(animation);
            }, 1000);
        }
        if (score > hiScore) {
            setHiScore(score);
        }
        setScore(0);
        setGameOver(true);
        if (gameWon) setGameWon(false);
    };

    const changeAmount = (e) => {
        setAmount(+e.value);
        restartGame(null);
    };

    const changeType = () => {
        setType(() => {
            return type === "rm" ? "hp" : type === "hp" ? "poke" : "rm";
        });
        restartGame(null);
    };

    return (
        <>
            <PopUp text={"Click every character only once!"} />
            {gameWon && <PopUp text={"You won!"} action={restartGame} />}
            <Header
                changeAmount={changeAmount}
                amount={amount}
                score={score}
                hiScore={hiScore}
                switchAction={changeType}
                switchState={type}
            />
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
