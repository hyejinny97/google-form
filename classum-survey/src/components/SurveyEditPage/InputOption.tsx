import { Stack, TextField, IconButton } from "@mui/material";
import { CloseIcon } from "@components";
import { handleOptionChangeFuncType, handleOptionDeleteFuncType } from "option";
import type { OptionType } from "@stores";

interface InputOptionProps {
  startIcon?: React.ReactNode;
  value: OptionType;
  handleOptionChange: handleOptionChangeFuncType;
  handleOptionDelete: handleOptionDeleteFuncType;
}

function InputOption({
  startIcon,
  value,
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
        value={value.text}
        onChange={(e) => handleOptionChange(e, value.id)}
      />
      <IconButton onClick={() => handleOptionDelete(value.id)}>
        <CloseIcon />
      </IconButton>
    </Stack>
  );
}

export default InputOption;
