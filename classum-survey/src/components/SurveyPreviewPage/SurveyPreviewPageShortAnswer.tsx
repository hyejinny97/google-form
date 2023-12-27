import { useState } from "react";
import { ShortAnswer } from "@components";

interface SurveyPreviewPageShortAnswerProps {
  disabled?: boolean;
}

function SurveyPreviewPageShortAnswer({
  disabled,
}: SurveyPreviewPageShortAnswerProps) {
  const [text, setText] = useState("");

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setText(e.target.value);
  };

  return (
    <ShortAnswer
      value={text}
      onChange={handleInputChange}
      disabled={disabled}
    />
  );
}

export default SurveyPreviewPageShortAnswer;
