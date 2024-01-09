import { useRef } from "react";
import { Stack } from "@mui/material";
import {
  InputOption,
  InputAdditionOption,
  PanoramaFishEyeIcon,
  DragContainer,
  DragTarget,
} from "@components";
import { useOption, useDragAndDropList } from "@hooks";
import type { OptionType } from "@stores";

type DataType = {
  id: number;
};

interface SurveyEditPageMultipleChoiceAnswerProps {
  value: Array<OptionType>;
  onChange: (newOptions: Array<OptionType>) => void;
}

function SurveyEditPageMultipleChoiceAnswer({
  value: choiceOptions,
  onChange: setChoiceOptions,
}: SurveyEditPageMultipleChoiceAnswerProps) {
  const dragItems = useRef<Array<HTMLDivElement>>([]);
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
    dragItemsRef: dragItems,
    data: choiceOptions,
    handleDataChange: (newData: Array<DataType>) => {
      setChoiceOptions(newData as Array<OptionType>);
    },
  });

  return (
    <Stack spacing={1}>
      <DragContainer>
        {choiceOptions.map((option, idx) => {
          return (
            <DragTarget
              key={option.id}
              ref={(el: HTMLDivElement) => (dragItems.current[idx] = el)}
              targetId={option.id}
              handleDragStart={handleDragStart}
              handleDrag={handleDrag}
              handleDragOver={handleDragOver}
              handleDragEnd={handleDragEnd}
            >
              <InputOption
                startIcon={<PanoramaFishEyeIcon color="disabled" />}
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
        startIcon={<PanoramaFishEyeIcon color="disabled" />}
        handleOptionAdd={handleOptionAdd}
      />
    </Stack>
  );
}

export default SurveyEditPageMultipleChoiceAnswer;
