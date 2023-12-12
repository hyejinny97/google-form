import { useState } from "react";
import { Stack } from "@mui/material";
import {
  InputOption,
  InputAdditionOption,
  PanoramaFishEyeIcon,
} from "@components";
import { useOption } from "@hooks";
import { OptionType } from "option";

interface SurveyEditPageMultipleChoiceAnswerProps {
  options?: Array<OptionType>;
}

function SurveyEditPageMultipleChoiceAnswer({
  options,
}: SurveyEditPageMultipleChoiceAnswerProps) {
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
              startIcon={<PanoramaFishEyeIcon color="disabled" />}
              order={idx}
              option={option}
              handleOptionChange={handleOptionChange}
              handleOptionDelete={handleOptionDelete}
            />
          </div>
        );
      })}
      <InputAdditionOption
        startIcon={<PanoramaFishEyeIcon color="disabled" />}
        handleOptionAdd={handleOptionAdd}
      />
    </Stack>
  );
}

export default SurveyEditPageMultipleChoiceAnswer;
