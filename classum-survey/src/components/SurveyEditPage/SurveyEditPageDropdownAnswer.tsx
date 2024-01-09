import { useRef } from "react";
import { Stack } from "@mui/material";
import {
  InputOption,
  InputAdditionOption,
  DragContainer,
  DragTarget,
} from "@components";
import { useOption, useDragAndDropList } from "@hooks";
import type { OptionType } from "@stores";

type DataType = {
  id: number;
};

interface SurveyEditPageDropdownAnswerProps {
  value: Array<OptionType>;
  onChange: (newOptions: Array<OptionType>) => void;
}

function SurveyEditPageDropdownAnswer({
  value: choiceOptions,
  onChange: setChoiceOptions,
}: SurveyEditPageDropdownAnswerProps) {
  const container = useRef<HTMLDivElement>(null);
  const { handleOptionChange, handleOptionDelete, handleOptionAdd } = useOption(
    { choiceOptions, setChoiceOptions }
  );
  const {
    handleGoDrag,
    handleDragStart,
    handleDrag,
    handleDragOver,
    handleDragEnd,
  } = useDragAndDropList({
    containerRef: container,
    data: choiceOptions,
    handleDataChange: (newData: Array<DataType>) => {
      setChoiceOptions(newData as Array<OptionType>);
    },
  });

  return (
    <Stack spacing={1}>
      <DragContainer ref={container}>
        {choiceOptions.map((option, idx) => {
          return (
            <DragTarget
              key={option.id}
              targetId={option.id}
              handleDragStart={handleDragStart}
              handleDrag={handleDrag}
              handleDragOver={handleDragOver}
              handleDragEnd={handleDragEnd}
            >
              <InputOption
                startIcon={<span>{idx + 1}</span>}
                value={option}
                handleOptionChange={handleOptionChange}
                handleOptionDelete={handleOptionDelete}
                onGoDrag={handleGoDrag}
              />
            </DragTarget>
          );
        })}
      </DragContainer>
      <InputAdditionOption
        startIcon={<span>{choiceOptions.length + 1}</span>}
        handleOptionAdd={handleOptionAdd}
      />
    </Stack>
  );
}

export default SurveyEditPageDropdownAnswer;
