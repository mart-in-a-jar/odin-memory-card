import { useId } from "react";

export default function AmountPicker({ onChange, amount }) {
    const options = [];
    for (let i = 8; i < 21; i++) {
        options.push(i);
    }
    return (
        <select name="amount" id={useId()} onChange={onChange} value={amount}>
            {options.map((i) => {
                return (
                    <option value={i} key={i}>
                        {i}
                    </option>
                );
            })}
        </select>
    );
}