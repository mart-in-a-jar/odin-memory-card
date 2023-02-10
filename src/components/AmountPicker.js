import { useId } from "react";

export default function AmountPicker({ onChange, amount }) {
    const options = [];
    for (let i = 8; i < 21; i++) {
        options.push(i);
    }
    const formId = useId();
    return (
        <div className="amount">
            <label htmlFor={formId}>Number of images </label>
            <select
                name="amount"
                id={formId}
                onChange={onChange}
                value={amount}
            >
                {options.map((i) => {
                    return (
                        <option value={i} key={i}>
                            {i}
                        </option>
                    );
                })}
            </select>
        </div>
    );
}
