import { Stack, TextField, IconButton } from "@mui/material";
import { CloseIcon } from "@components";
import { handleOptionChangeFuncType, handleOptionDeleteFuncType } from "option";
import type { OptionType } from "@stores";

interface InputOptionProps {
  startIcon?: React.ReactNode;
  value: OptionType;
  order: number;
  handleOptionChange: handleOptionChangeFuncType;
  handleOptionDelete: handleOptionDeleteFuncType;
}

function InputOption({
  startIcon,
  value,
  order,
  handleOptionChange,
  handleOptionDelete,
}: InputOptionProps) {
  return (
    <Stack spacing={1} direction="row" alignItems="center">
      {startIcon}
      <TextField
        hiddenLabel
        variant="standard"
        fullWidth
        value={value.option}
        onChange={(e) => handleOptionChange(e, order)}
      />
      <IconButton onClick={() => handleOptionDelete(order)}>
        <CloseIcon />
      </IconButton>
    </Stack>
  );
}

export default InputOption;
