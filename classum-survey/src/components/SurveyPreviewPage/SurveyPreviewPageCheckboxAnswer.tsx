import { CheckboxAnswer } from "@components";
import type { OptionType } from "@stores";

interface SurveyPreviewPageCheckboxAnswerProps {
  options: Array<OptionType>;
  value: Array<number>; // Array<체크된 questionId>
  onChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
  disabled?: boolean;
}

function SurveyPreviewPageCheckboxAnswer({
  options,
  value,
  onChange,
  disabled,
}: SurveyPreviewPageCheckboxAnswerProps) {
  return (
    <CheckboxAnswer
      options={options}
      value={value}
      onChange={onChange}
      disabled={disabled}
    />
  );
}

export default SurveyPreviewPageCheckboxAnswer;
