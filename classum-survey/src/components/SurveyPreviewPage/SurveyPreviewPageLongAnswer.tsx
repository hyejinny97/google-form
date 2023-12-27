import { useState } from "react";
import { LongAnswer } from "@components";

interface SurveyPreviewPageLongAnswerProps {
  disabled?: boolean;
}

function SurveyPreviewPageLongAnswer({
  disabled,
}: SurveyPreviewPageLongAnswerProps) {
  const [text, setText] = useState("");

  const handleTextChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setText(e.target.value);
  };

  return (
    <LongAnswer value={text} onChange={handleTextChange} disabled={disabled} />
  );
}

export default SurveyPreviewPageLongAnswer;
