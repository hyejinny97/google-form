import { Stack } from "@mui/material";
import {
  InputOption,
  InputAdditionOption,
  PanoramaFishEyeIcon,
} from "@components";
import { useOption } from "@hooks";
import type { OptionType } from "@stores";

interface SurveyEditPageMultipleChoiceAnswerProps {
  value: Array<OptionType>;
  onChange: (newOptions: Array<OptionType>) => void;
}

function SurveyEditPageMultipleChoiceAnswer({
  value: choiceOptions,
  onChange: setChoiceOptions,
}: SurveyEditPageMultipleChoiceAnswerProps) {
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
              value={option}
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
