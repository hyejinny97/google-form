import { TextField } from "@mui/material";

interface ShortAnswerProps {
  disabled?: boolean;
  fullWidth?: boolean;
}

function ShortAnswer({
  disabled = false,
  fullWidth = false,
}: ShortAnswerProps) {
  return (
    <TextField
      hiddenLabel
      placeholder="단답형 텍스트"
      variant="standard"
      disabled={disabled}
      fullWidth={fullWidth}
      sx={fullWidth ? undefined : { width: 0.5 }}
    />
  );
}

export default ShortAnswer;
