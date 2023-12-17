import { Stack } from "@mui/material";
import {
  InputOption,
  InputAdditionOption,
  CheckBoxOutlineBlankIcon,
} from "@components";
import { useOption } from "@hooks";
import type { OptionType } from "@stores";

interface SurveyEditPageCheckboxAnswerProps {
  value: Array<OptionType>;
  onChange: (newOptions: Array<OptionType>) => void;
}

function SurveyEditPageCheckboxAnswer({
  value: choiceOptions,
  onChange: setChoiceOptions,
}: SurveyEditPageCheckboxAnswerProps) {
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
              value={option}
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
