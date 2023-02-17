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
    return (
        <header>
            <AmountPicker onChange={changeAmount} amount={amount} />
            <ScoreBoard score={score} hiScore={hiScore} />
            <Switcher action={switchAction} state={switchState} />
        </header>
    );
}
