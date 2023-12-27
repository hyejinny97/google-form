import { RadioGroup, FormControlLabel, Radio } from "@mui/material";
import type { OptionType } from "@stores";

interface MultipleChoiceAnswerProps {
  options: Array<OptionType>;
  value?: number; // option의 order
  onChange?: (e: React.ChangeEvent<HTMLInputElement>) => void;
}

function MultipleChoiceAnswer({
  options,
  value,
  onChange,
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
          />
        );
      })}
    </RadioGroup>
  );
}

export default MultipleChoiceAnswer;
