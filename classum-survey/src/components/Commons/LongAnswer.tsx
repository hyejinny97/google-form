import { TextField } from "@mui/material";

interface LongAnswerProps {
  disabled?: boolean;
}

function LongAnswer({ disabled = false }: LongAnswerProps) {
  return (
    <TextField
      hiddenLabel
      placeholder="장문형 텍스트"
      variant="standard"
      disabled={disabled}
      fullWidth
      multiline
    />
  );
}

export default LongAnswer;
