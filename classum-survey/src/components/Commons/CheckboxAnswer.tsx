import { FormGroup, FormControlLabel, Checkbox } from "@mui/material";
import type { OptionType } from "@stores";

interface CheckboxAnswerProps {
  options: Array<OptionType>;
  value: Array<number>; // 체크된 옵션들의 order
  onChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
}

function CheckboxAnswer({ options, value, onChange }: CheckboxAnswerProps) {
  return (
    <FormGroup onChange={onChange}>
      {options.map((option: OptionType) => {
        return (
          <FormControlLabel
            key={option.order}
            label={option.option}
            control={
              <Checkbox
                checked={value.includes(option.order)}
                name={String(option.order)}
              />
            }
          />
        );
      })}
    </FormGroup>
  );
}

export default CheckboxAnswer;
