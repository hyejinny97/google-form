import { Select, MenuItem, SelectChangeEvent } from "@mui/material";
import type { OptionType } from "@stores";

interface DropdownAnswerProps {
  options: Array<OptionType>;
  value: number; // option의 order
  onChange: (e: SelectChangeEvent) => void;
}

function DropdownAnswer({ options, value, onChange }: DropdownAnswerProps) {
  return (
    <Select
      value={value < 0 ? "" : String(value)}
      onChange={onChange}
      displayEmpty
      renderValue={(value) => {
        const selectedOption = options.find(
          (option) => option.order === Number(value)
        );

        if (!selectedOption) return <p>선택</p>;

        return <p>{selectedOption.option}</p>;
      }}
      sx={{ width: 0.5 }}
    >
      {options.map((option) => {
        return (
          <MenuItem key={option.order} value={option.order}>
            {option.option}
          </MenuItem>
        );
      })}
    </Select>
  );
}

export default DropdownAnswer;
