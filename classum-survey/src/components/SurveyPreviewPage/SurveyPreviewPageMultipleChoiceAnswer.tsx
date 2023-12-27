import { useState } from "react";
import { MultipleChoiceAnswer } from "@components";
import type { OptionType } from "@stores";

interface SurveyPreviewPageMultipleChoiceAnswerProps {
  options: Array<OptionType>;
}

function SurveyPreviewPageMultipleChoiceAnswer({
  options,
}: SurveyPreviewPageMultipleChoiceAnswerProps) {
  const [selected, setSelected] = useState<number>(-1);

  const handleSelectChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setSelected(Number(e.target.value));
  };

  return (
    <MultipleChoiceAnswer
      options={options}
      value={selected}
      onChange={handleSelectChange}
    />
  );
}

export default SurveyPreviewPageMultipleChoiceAnswer;
