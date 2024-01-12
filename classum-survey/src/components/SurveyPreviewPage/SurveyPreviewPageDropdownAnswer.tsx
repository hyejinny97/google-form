import { SelectChangeEvent } from "@mui/material";
import { DropdownAnswer } from "@components";
import type { OptionType } from "@stores";

interface SurveyPreviewPageDropdownAnswerProps {
  options: Array<OptionType>;
  value: number; // 선택된 questionId
  onChange: (e: SelectChangeEvent) => void;
  disabled?: boolean;
}

function SurveyPreviewPageDropdownAnswer({
  options,
  value,
  onChange,
  disabled,
}: SurveyPreviewPageDropdownAnswerProps) {
  return (
    <DropdownAnswer
      options={options}
      value={value}
      onChange={onChange}
      disabled={disabled}
    />
  );
}

export default SurveyPreviewPageDropdownAnswer;
