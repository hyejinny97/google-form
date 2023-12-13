import { useState } from "react";
import { Stack } from "@mui/material";
import {
  InputOption,
  InputAdditionOption,
  CheckBoxOutlineBlankIcon,
} from "@components";
import { useOption } from "@hooks";
import { OptionType } from "option";

interface SurveyEditPageCheckboxAnswerProps {
  options?: Array<OptionType>;
}

function SurveyEditPageCheckboxAnswer({
  options,
}: SurveyEditPageCheckboxAnswerProps) {
  const [choiceOptions, setChoiceOptions] = useState(options || ["옵션 1"]);
  const { handleOptionChange, handleOptionDelete, handleOptionAdd } = useOption(
    { choiceOptions, setChoiceOptions }
  );

  return (
    <Stack spacing={1}>
      {choiceOptions.map((option, idx) => {
        return (
          <div key={idx}>
            <InputOption
              startIcon={<CheckBoxOutlineBlankIcon color="disabled" />}
              order={idx}
              option={option}
              handleOptionChange={handleOptionChange}
              handleOptionDelete={handleOptionDelete}
            />
          </div>
        );
      })}
      <InputAdditionOption
        startIcon={<CheckBoxOutlineBlankIcon color="disabled" />}
        handleOptionAdd={handleOptionAdd}
      />
    </Stack>
  );
}

export default SurveyEditPageCheckboxAnswer;
