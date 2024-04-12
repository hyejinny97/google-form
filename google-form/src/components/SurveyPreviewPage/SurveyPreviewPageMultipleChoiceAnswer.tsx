import { MultipleChoiceAnswer } from "@components";
import type { OptionType } from "@stores";

interface SurveyPreviewPageMultipleChoiceAnswerProps {
  options: Array<OptionType>;
  value: number; // 선택된 questionId
  onChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
  disabled?: boolean;
}

function SurveyPreviewPageMultipleChoiceAnswer({
  options,
  value,
  onChange,
  disabled,
}: SurveyPreviewPageMultipleChoiceAnswerProps) {
  return (
    <MultipleChoiceAnswer
      options={options}
      value={value}
      onChange={onChange}
      disabled={disabled}
    />
  );
}

export default SurveyPreviewPageMultipleChoiceAnswer;
