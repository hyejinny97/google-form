import { TextField } from "@mui/material";

interface ShortAnswerProps {
  value?: string;
  onChange?: (e: React.ChangeEvent<HTMLInputElement>) => void;
  disabled?: boolean;
  fullWidth?: boolean;
}

function ShortAnswer({
  value,
  onChange,
  disabled = false,
  fullWidth = false,
}: ShortAnswerProps) {
  return (
    <TextField
      value={value}
      onChange={onChange}
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
