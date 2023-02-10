import "./GameBoard.css";
import { useEffect, useState } from "react";
import Card from "./Card";

export default function GameBoard({
    amount,
    incrementScore,
    gameOver,
    restart,
}) {
    const [cards, setCards] = useState([]);

    const getCards = async (amount) => {
        const characters = await fetch(
            "https://rickandmortyapi.com/api/character"
        ).then((result) => result.json());
        const cards = characters.results.slice(0, amount).map((character) => {
            return {
                id: character.id,
                name: character.name,
                img: character.image,
            };
        });
        setCards(cards);
    };

    const randomizeCards = async () => {
        const cardsCopy = [...cards];
        let index = cardsCopy.length,
            randomIndex;
        while (index > 0) {
            randomIndex = Math.floor(Math.random() * index--);
            [cardsCopy[index], cardsCopy[randomIndex]] = [
                cardsCopy[randomIndex],
                cardsCopy[index],
            ];
        }
        setCards(cardsCopy);
    };

    useEffect(() => {
        getCards(amount);
    }, [amount]);

    return (
        <div className="cards">
            {cards.map((card) => {
                return (
                    <Card
                        key={card.id}
                        name={card.name}
                        image={card.img}
                        randomize={randomizeCards}
                        incrementScore={incrementScore}
                        restart={restart}
                        gameOver={gameOver}
                    />
                );
            })}
        </div>
    );
}
