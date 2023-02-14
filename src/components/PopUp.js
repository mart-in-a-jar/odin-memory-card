import { useState } from "react";

export default function PopUp({ text, action }) {
    const [display, setDisplay] = useState(true);

    const handleClick = () => {
        action ? action("change-amount") : setDisplay(false);
    };

    let element = (
        <div className="backdrop" onClick={handleClick}>
            <p>{text}</p>
        </div>
    );

    if (!display) {
        element = null;
    }

    return element;
}
