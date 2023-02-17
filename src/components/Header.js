import { useEffect } from "react";
import AmountPicker from "./AmountPicker";
import ScoreBoard from "./ScoreBoard";
import Switcher from "./Switcher";

export default function Header({
    changeAmount,
    amount,
    score,
    hiScore,
    switchAction,
    switchState,
}) {
    // Hide header when scrolling down
    useEffect(() => {
        const header = document.querySelector("header");
        const headerHeight = header.offsetHeight;
        let lastScrollPos = window.scrollY;
        let currentScrollPos, scrollDir;

        const scrollFunc = () => {
            currentScrollPos = window.scrollY;
            if (currentScrollPos > lastScrollPos) {
                scrollDir = "down";
            } else if (currentScrollPos < lastScrollPos) {
                scrollDir = "up";
            }

            toggleHeader(scrollDir, currentScrollPos);
            lastScrollPos = currentScrollPos;
        };

        const toggleHeader = (direction, scrollPos) => {
            if (direction === "down" && scrollPos > headerHeight) {
                if (!header.classList.contains("hide")) {
                    header.classList.add("hide");
                }
            } else if (direction === "up") {
                if (header.classList.contains("hide"))
                    header.classList.remove("hide");
            }
        };

        window.addEventListener("scroll", scrollFunc);

        return () => {
            window.removeEventListener("scroll", scrollFunc);
        };
    }, []);
    return (
        <header>
            <AmountPicker onChange={changeAmount} amount={amount} />
            <ScoreBoard score={score} hiScore={hiScore} />
            <Switcher action={switchAction} state={switchState} />
        </header>
    );
}
