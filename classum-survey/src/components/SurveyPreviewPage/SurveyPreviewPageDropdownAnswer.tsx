import { useState } from "react";
import { SelectChangeEvent } from "@mui/material";
import { DropdownAnswer } from "@components";
import type { OptionType } from "@stores";

interface SurveyPreviewPageDropdownAnswerProps {
  options: Array<OptionType>;
}

function SurveyPreviewPageDropdownAnswer({
  options,
}: SurveyPreviewPageDropdownAnswerProps) {
  const [selected, setSelected] = useState<number>(-1);

  const handleSelectChange = (e: SelectChangeEvent) => {
    setSelected(Number(e.target.value));
  };

  return (
    <DropdownAnswer
      options={options}
      value={selected}
      onChange={handleSelectChange}
    />
  );
}

export default SurveyPreviewPageDropdownAnswer;
