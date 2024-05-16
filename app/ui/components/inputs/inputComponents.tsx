
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
            onChange={(e) => {
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