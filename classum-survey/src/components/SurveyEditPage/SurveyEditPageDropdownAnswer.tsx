import { Stack } from "@mui/material";
import { InputOption, InputAdditionOption } from "@components";
import { useOption } from "@hooks";
import type { OptionType } from "@stores";

interface SurveyEditPageDropdownAnswerProps {
  value: Array<OptionType>;
  onChange: (newOptions: Array<OptionType>) => void;
}

function SurveyEditPageDropdownAnswer({
  value: choiceOptions,
  onChange: setChoiceOptions,
}: SurveyEditPageDropdownAnswerProps) {
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
              value={option}
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
