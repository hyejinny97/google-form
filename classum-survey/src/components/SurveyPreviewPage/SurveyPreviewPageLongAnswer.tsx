import { LongAnswer } from "@components";

interface SurveyPreviewPageLongAnswerProps {
  value: string;
  onChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
  disabled?: boolean;
}

function SurveyPreviewPageLongAnswer({
  value,
  onChange,
  disabled,
}: SurveyPreviewPageLongAnswerProps) {
  return <LongAnswer value={value} onChange={onChange} disabled={disabled} />;
}

export default SurveyPreviewPageLongAnswer;
