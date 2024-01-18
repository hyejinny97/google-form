import { RadioGroup, FormControlLabel, Radio } from "@components";
import type { OptionType } from "@stores";

interface MultipleChoiceAnswerProps {
  options: Array<OptionType>;
  value?: number; // option의 id
  onChange?: (e: React.ChangeEvent<HTMLInputElement>) => void;
  disabled?: boolean;
}

function MultipleChoiceAnswer({
  options,
  value,
  onChange,
  disabled,
}: MultipleChoiceAnswerProps) {
  return (
    <RadioGroup value={value} onChange={onChange}>
      {options.map((option: OptionType) => {
        return (
          <FormControlLabel
            key={option.id}
            value={option.id}
            control={<Radio />}
            label={option.text}
            disabled={disabled}
          />
        );
      })}
    </RadioGroup>
  );
}

export default MultipleChoiceAnswer;
