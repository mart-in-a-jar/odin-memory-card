import { useState } from "react";

export default function Rules() {
    const [display, setDisplay] = useState(true);

    let element = (
        <div
            className="backdrop"
            onClick={() => {
                setDisplay(false);
            }}
        >
            <p>Click every character only once!</p>
        </div>
    );

    if (!display) {
        element = null;
    }

    return element;
}
