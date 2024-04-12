import { FormGroup, FormControlLabel, Checkbox } from "@components";
import type { OptionType } from "@stores";

interface CheckboxAnswerProps {
  options: Array<OptionType>;
  value?: Array<number>; // 체크된 옵션들의 id
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
            key={option.id}
            label={option.text}
            control={
              <Checkbox
                checked={value && value.includes(option.id)}
                name={String(option.id)}
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
