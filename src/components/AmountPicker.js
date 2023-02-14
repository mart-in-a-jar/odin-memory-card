import { useState } from "react";
import Select from "react-select";

export default function AmountPicker({ onChange, amount }) {
    const options = [];
    for (let i = 8; i < 21; i++) {
        options.push({ value: i, label: i });
    }
    const [value, setValue] = useState(
        options.filter((option) => {
            return option.value === amount;
        })
    );

    const style = {
        control: (prevStyle) => {
            return {
                ...prevStyle,
                boxShadow: "none",
                borderColor: "hsl(0, 0%, 80%)",
                "&:hover": {
                    borderColor: "hsl(0, 0%, 80%)",
                },
                cursor: "pointer",
                height: "50px",
            };
        },
    };

    const changeValue = (e) => {
        onChange(e);
        setValue(e);
    };

    return (
        <div className="amount">
            <Select
                styles={style}
                setValue={amount}
                onChange={changeValue}
                options={options}
                placeholder="Level"
                value={value}
            />
        </div>
    );
}
