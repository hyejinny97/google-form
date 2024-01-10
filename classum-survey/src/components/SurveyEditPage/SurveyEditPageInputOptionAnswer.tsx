import { useRef } from "react";
import { Stack } from "@mui/material";
import {
  InputOption,
  InputAdditionOption,
  DragContainer,
  DragTarget,
  CheckBoxOutlineBlankIcon,
  PanoramaFishEyeIcon,
} from "@components";
import { useOption, useDragAndDropList } from "@hooks";
import type { OptionType } from "@stores";
import {
  Q_TYPE_MULTIPLE_CHOICE,
  Q_TYPE_CHECKBOX,
  Q_TYPE_DROPDOWN,
} from "@constants";

type DataType = {
  id: number;
};

interface SurveyEditPageInputOptionAnswerProp {
  type:
    | typeof Q_TYPE_CHECKBOX
    | typeof Q_TYPE_DROPDOWN
    | typeof Q_TYPE_MULTIPLE_CHOICE;
  value: Array<OptionType>;
  onChange: (newOptions: Array<OptionType>) => void;
}

function SurveyEditPageInputOptionAnswer({
  type,
  value: choiceOptions,
  onChange: setChoiceOptions,
}: SurveyEditPageInputOptionAnswerProp) {
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

  let startIcon: React.ReactNode;
  switch (type) {
    case Q_TYPE_CHECKBOX:
      startIcon = <CheckBoxOutlineBlankIcon color="disabled" />;
      break;
    case Q_TYPE_MULTIPLE_CHOICE:
      startIcon = <PanoramaFishEyeIcon color="disabled" />;
      break;
  }

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
                startIcon={startIcon || <span>{idx + 1}</span>}
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
        startIcon={startIcon || <span>{choiceOptions.length + 1}</span>}
        handleOptionAdd={handleOptionAdd}
      />
    </Stack>
  );
}

export default SurveyEditPageInputOptionAnswer;
