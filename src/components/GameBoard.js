import "./GameBoard.css";
import { useEffect, useState } from "react";
import Card from "./Card";

export default function GameBoard({
    amount,
    incrementScore,
    gameOver,
    restart,
    type,
}) {
    const [cards, setCards] = useState([]);

    const getCards = async (type, amount) => {
        let characters, cards;
        if (type === "hp") {
            characters = await fetch(
                "https://hp-api.onrender.com/api/characters"
            ).then((result) => result.json());
            cards = characters.slice(0, amount).map((character) => {
                return {
                    id: character.id,
                    name: character.name,
                    img: character.image,
                };
            });
        } else if (type === "rm") {
            characters = await fetch(
                "https://rickandmortyapi.com/api/character"
            ).then((result) => result.json());
            cards = characters.results.slice(0, amount).map((character) => {
                return {
                    id: character.id,
                    name: character.name,
                    img: character.image,
                };
            });
        } else if (type === "poke") {
            characters = await fetch("https://pokeapi.co/api/v2/pokemon").then(
                (result) => result.json()
            );
            cards = [];
            for (let char of characters.results) {
                const character = await fetch(char.url).then((result) =>
                    result.json()
                );
                cards.push({
                    id: character.id,
                    name:
                        character.name.slice(0, 1).toUpperCase() +
                        character.name.slice(1),
                    img: character.sprites.front_default,
                });
            }
        }
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
        getCards(type, amount);
    }, [type, amount]);

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
