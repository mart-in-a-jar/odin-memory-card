import "./GameBoard.css";
import { useEffect, useState } from "react";
import Card from "./Card";

export default function GameBoard({ amount }) {
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
        return cards;
    };

    const randomizeCards = async () => {
        const cards = await getCards(amount);
        setCards(cards);
    };

    useEffect(() => {
        randomizeCards();
    }, []);

    return (
        <div className="cards">
            {cards.map((card) => {
                return <Card key={card.id} name={card.name} image={card.img} />;
            })}
        </div>
    );
}
