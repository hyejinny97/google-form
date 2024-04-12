import { TextField } from "@components";

interface LongAnswerProps {
  value?: string;
  onChange?: (e: React.ChangeEvent<HTMLInputElement>) => void;
  disabled?: boolean;
}

function LongAnswer({ value, onChange, disabled = false }: LongAnswerProps) {
  return (
    <TextField
      value={value}
      onChange={onChange}
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
