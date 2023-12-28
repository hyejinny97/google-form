import { RadioGroup, FormControlLabel, Radio } from "@mui/material";
import type { OptionType } from "@stores";

interface MultipleChoiceAnswerProps {
  options: Array<OptionType>;
  value?: number; // option의 order
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
            key={option.order}
            value={option.order}
            control={<Radio />}
            label={option.option}
            disabled={disabled}
          />
        );
      })}
    </RadioGroup>
  );
}

export default MultipleChoiceAnswer;
