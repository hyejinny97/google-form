import { Select, MenuItem, SelectChangeEvent } from "@mui/material";
import type { OptionType } from "@stores";

interface DropdownAnswerProps {
  options: Array<OptionType>;
  value: number; // option의 id
  onChange: (e: SelectChangeEvent) => void;
  disabled?: boolean;
}

function DropdownAnswer({
  options,
  value,
  onChange,
  disabled,
}: DropdownAnswerProps) {
  return (
    <Select
      value={value < 0 ? "" : String(value)}
      onChange={onChange}
      displayEmpty
      renderValue={(value) => {
        const selectedOption = options.find(
          (option) => option.id === Number(value)
        );

        if (!selectedOption) return <p>선택</p>;

        return <p>{selectedOption.text}</p>;
      }}
      sx={{ width: 0.5 }}
      disabled={disabled}
    >
      {options.map((option) => {
        return (
          <MenuItem key={option.id} value={option.id}>
            {option.text}
          </MenuItem>
        );
      })}
    </Select>
  );
}

export default DropdownAnswer;
