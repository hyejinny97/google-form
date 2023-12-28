import { FormGroup, FormControlLabel, Checkbox } from "@mui/material";
import type { OptionType } from "@stores";

interface CheckboxAnswerProps {
  options: Array<OptionType>;
  value?: Array<number>; // 체크된 옵션들의 order
  onChange?: (e: React.ChangeEvent<HTMLInputElement>) => void;
  disabled?: boolean;
}

function CheckboxAnswer({
  options,
  value,
  onChange,
  disabled,
}: CheckboxAnswerProps) {
  return (
    <FormGroup onChange={onChange}>
      {options.map((option: OptionType) => {
        return (
          <FormControlLabel
            key={option.order}
            label={option.option}
            control={
              <Checkbox
                checked={value && value.includes(option.order)}
                name={String(option.order)}
              />
            }
            disabled={disabled}
          />
        );
      })}
    </FormGroup>
  );
}

export default CheckboxAnswer;
