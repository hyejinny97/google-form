import { useState } from "react";
import { CheckboxAnswer } from "@components";
import type { OptionType } from "@stores";

interface SurveyPreviewPageCheckboxAnswerProps {
  options: Array<OptionType>;
  disabled?: boolean;
}

function SurveyPreviewPageCheckboxAnswer({
  options,
  disabled,
}: SurveyPreviewPageCheckboxAnswerProps) {
  const [selected, setSelected] = useState<Array<number>>([-1]);

  const handleSelectChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const isChecked = e.target.checked;
    const value = Number(e.target.name);

    setSelected(
      isChecked ? [...selected, value] : selected.filter((sel) => sel !== value)
    );
  };

  return (
    <CheckboxAnswer
      options={options}
      value={selected}
      onChange={handleSelectChange}
      disabled={disabled}
    />
  );
}

export default SurveyPreviewPageCheckboxAnswer;
