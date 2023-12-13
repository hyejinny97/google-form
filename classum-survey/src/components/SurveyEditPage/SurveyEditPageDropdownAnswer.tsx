import { useState } from "react";
import { Stack } from "@mui/material";
import { InputOption, InputAdditionOption } from "@components";
import { useOption } from "@hooks";
import { OptionType } from "option";

interface SurveyEditPageDropdownAnswerProps {
  options?: Array<OptionType>;
}

function SurveyEditPageDropdownAnswer({
  options,
}: SurveyEditPageDropdownAnswerProps) {
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
              startIcon={<span>{idx + 1}</span>}
              order={idx}
              option={option}
              handleOptionChange={handleOptionChange}
              handleOptionDelete={handleOptionDelete}
            />
          </div>
        );
      })}
      <InputAdditionOption
        startIcon={<span>{choiceOptions.length + 1}</span>}
        handleOptionAdd={handleOptionAdd}
      />
    </Stack>
  );
}

export default SurveyEditPageDropdownAnswer;
