import { useEffect, useState } from "react";
import "./Card.css";
const DEBUG = false;

export default function Card({
    name,
    image,
    randomize,
    incrementScore,
    restart,
    gameOver,
}) {
    const [isClicked, setIsClicked] = useState(false);
    const [isNew, setIsNew] = useState(" new-card");

    const handleClick = () => {
        if (isClicked) {
            restart();
        } else {
            setIsClicked(true);
            incrementScore();
        }
        randomize();
    };

    useEffect(() => {
        if (gameOver) {
            setIsClicked(false);
        }
    }, [gameOver]);

    useEffect(() => {
        return () => {
            setIsNew("");
        };
    });

    return (
        <div className={"card" + isNew} onClick={handleClick}>
            <img src={image} alt={name} />
            {DEBUG ? (
                <span className="debug">{isClicked ? "X" : ""}</span>
            ) : null}
            <p>{name}</p>
        </div>
    );
}
