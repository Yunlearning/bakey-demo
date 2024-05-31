
import { inter } from "../../fonts";
import "./style.css"

interface NumberInputProps {
    className?: string;
    value: number;
    set: (value: number) => void;
    min?: number;
    max?: number;
    step?: number;
}

export const NumberInput: React.FC<NumberInputProps> = ({ className, value, set, min = 1, max = 99, step = 1 }) => {
    return (
        <input
            className={className}
            type="number"
            value={value}
            // defaultValue={value}
            onChange={(e) => {
                console.log(e.target.value)
                const value = parseInt(e.target.value)
                if (value >= min && value <= max) {
                    set(value)
                }
            }}
            min={min}
            max={max}
            step={step}
        />
    )
}

interface RadioInputProps {
    label: string;
    htmlFor: string;
    name: string;
    value?: string;
    defaultChecked?: boolean;
    checked?: boolean;
    disabled?: boolean;
    set?: (value: string) => void;
}

export const RadioInput: React.FC<RadioInputProps> = ({ label, htmlFor, name, value, defaultChecked, checked, disabled, set }) => {
    return (
        <div className="flex items-center">
            <input
                id={htmlFor}
                className="hidden"
                type="radio"
                name={name}
                value={value}
                defaultChecked={defaultChecked}
                disabled={disabled}
            // checked={checked}
            // onChange={(e) => set(e.target.value)}
            />
            <label htmlFor={htmlFor} className="flex items-center cursor-pointer">
                <span className="w-4 h-4 inline-block mr-2 rounded-full border border-gray-500">
                </span>
                {label}
            </label>
        </div>
    )
}