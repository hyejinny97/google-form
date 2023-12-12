import { Stack, TextField, IconButton } from "@mui/material";
import { CloseIcon } from "@components";
import {
  OptionType,
  handleOptionChangeFuncType,
  handleOptionDeleteFuncType,
} from "option";

interface InputOptionProps {
  startIcon?: React.ReactNode;
  option: OptionType;
  order: number;
  handleOptionChange: handleOptionChangeFuncType;
  handleOptionDelete: handleOptionDeleteFuncType;
}

function InputOption({
  startIcon,
  option,
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
        value={option}
        onChange={(e) => handleOptionChange(e, order)}
      />
      <IconButton onClick={() => handleOptionDelete(order)}>
        <CloseIcon />
      </IconButton>
    </Stack>
  );
}

export default InputOption;
