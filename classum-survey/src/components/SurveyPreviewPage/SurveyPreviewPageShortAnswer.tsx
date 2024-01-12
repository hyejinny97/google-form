import { ShortAnswer } from "@components";

interface SurveyPreviewPageShortAnswerProps {
  value: string;
  onChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
  disabled?: boolean;
}

function SurveyPreviewPageShortAnswer({
  value,
  onChange,
  disabled,
}: SurveyPreviewPageShortAnswerProps) {
  return <ShortAnswer value={value} onChange={onChange} disabled={disabled} />;
}

export default SurveyPreviewPageShortAnswer;
