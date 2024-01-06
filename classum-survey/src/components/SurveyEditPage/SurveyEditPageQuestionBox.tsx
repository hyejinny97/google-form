import React, { useRef, useEffect } from "react";
import { useDispatch } from "react-redux";
import { QuestionTypes } from "questionTypes";
import styled from "@emotion/styled";
import {
  Grid,
  TextField,
  SelectChangeEvent,
  Divider,
  Stack,
  IconButton,
  Switch,
} from "@mui/material";
import {
  SurveyQuestionBox,
  QuestionTypeSelect,
  ShortAnswer,
  LongAnswer,
  SurveyEditPageMultipleChoiceAnswer,
  SurveyEditPageCheckboxAnswer,
  SurveyEditPageDropdownAnswer,
  ContentCopyIcon,
  DeleteIcon,
  HorizontalDragIndicatorIcon,
} from "@components";
import {
  Q_TYPE_SHORT,
  Q_TYPE_LONG,
  Q_TYPE_MULTIPLE_CHOICE,
  Q_TYPE_CHECKBOX,
  Q_TYPE_DROPDOWN,
  BOX_PADDING,
  CLASSNAME_HORIZONTAL_INDICATOR,
} from "@constants";
import {
  deleteQuestion,
  duplicateQuestion,
  updateQuestionTitle,
  updateQuestionType,
  updateQuestionRequired,
  updateQuestionOptions,
} from "@stores";
import type { QuestionType, OptionType } from "@stores";

interface SurveyEditPageQuestionBoxProps {
  data: QuestionType;
  onDragStart: (e: React.DragEvent) => void;
  onDrag: (e: React.DragEvent) => void;
  onDragOver: (e: React.DragEvent) => void;
  onDragEnd: (e: React.DragEvent) => void;
}

const DragTarget = styled.div`
  position: relative;
`;

const QuestionBox = styled(SurveyQuestionBox)`
  position: relative;

  &:hover .horizontal-indicator {
    display: block;
  }
`;

const Head = styled.div`
  margin-bottom: 1rem;
`;

const Body = styled.div`
  margin-bottom: 2rem;
`;

const Foot = styled.div`
  p {
    padding: 8px;
    padding-right: 0;
  }
`;

const HorizontalIndicator = styled(HorizontalDragIndicatorIcon)`
  display: none;
  position: absolute;
  top: ${BOX_PADDING / 2}px;
  left: 50%;
  transform: translate(-50%);
  cursor: pointer;
`;

function SurveyEditPageQuestionBox({
  data: { id, title, type, required, options },
  onDragStart,
  onDrag,
  onDragOver,
  onDragEnd,
}: SurveyEditPageQuestionBoxProps) {
  const isIndicatorClicked = useRef(false);
  const dragTarget = useRef<HTMLDivElement>(null);
  const dispatch = useDispatch();

  useEffect(() => {
    const dragTargetEl = dragTarget.current;
    const handleMouseDown = (e: MouseEvent) => {
      const target = e.target as HTMLElement;
      isIndicatorClicked.current = !!target.closest(
        `.${CLASSNAME_HORIZONTAL_INDICATOR}`
      );
    };
    dragTargetEl?.addEventListener("mousedown", handleMouseDown);

    return () =>
      dragTargetEl?.removeEventListener("mousedown", handleMouseDown);
  }, []);

  const executeOnlyDragIndicatorDragged = (
    handler: (e: React.DragEvent) => void
  ) => {
    return (e: React.DragEvent) => isIndicatorClicked.current && handler(e);
  };

  const handleTitleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    dispatch(updateQuestionTitle({ questionId: id, data: e.target.value }));
  };

  const handleSelectChange = (e: SelectChangeEvent) => {
    dispatch(
      updateQuestionType({
        questionId: id,
        data: e.target.value as QuestionTypes,
      })
    );
  };

  const handleRequiredSwitchChange = (
    e: React.ChangeEvent<HTMLInputElement>
  ) => {
    dispatch(
      updateQuestionRequired({ questionId: id, data: e.target.checked })
    );
  };

  const handleOptionsChange = (newOptions: Array<OptionType>) => {
    dispatch(updateQuestionOptions({ questionId: id, data: newOptions }));
  };

  let renderBody;
  if (type === Q_TYPE_SHORT) renderBody = <ShortAnswer disabled />;
  else if (type === Q_TYPE_LONG) renderBody = <LongAnswer disabled />;
  else if (type === Q_TYPE_MULTIPLE_CHOICE)
    renderBody = (
      <SurveyEditPageMultipleChoiceAnswer
        value={options as Array<OptionType>}
        onChange={handleOptionsChange}
      />
    );
  else if (type === Q_TYPE_CHECKBOX)
    renderBody = (
      <SurveyEditPageCheckboxAnswer
        value={options as Array<OptionType>}
        onChange={handleOptionsChange}
      />
    );
  else if (type === Q_TYPE_DROPDOWN)
    renderBody = (
      <SurveyEditPageDropdownAnswer
        value={options as Array<OptionType>}
        onChange={handleOptionsChange}
      />
    );

  return (
    <DragTarget
      className="draggable-item"
      ref={dragTarget}
      data-id={id}
      draggable
      onDragStart={executeOnlyDragIndicatorDragged(onDragStart)}
      onDrag={executeOnlyDragIndicatorDragged(onDrag)}
      onDragOver={onDragOver}
      onDragEnd={executeOnlyDragIndicatorDragged(onDragEnd)}
    >
      <QuestionBox>
        <HorizontalIndicator />
        <Head>
          <Grid container spacing={3}>
            <Grid item xs={8}>
              <TextField
                value={title}
                onChange={handleTitleChange}
                variant="filled"
                placeholder="질문"
                hiddenLabel
                fullWidth
              />
            </Grid>
            <Grid item xs={4}>
              <QuestionTypeSelect value={type} onChange={handleSelectChange} />
            </Grid>
          </Grid>
        </Head>
        <Body>{renderBody}</Body>
        <Foot>
          <Divider />
          <Stack
            direction="row"
            justifyContent="flex-end"
            alignItems="center"
            spacing={1}
            sx={{ p: 1, pb: 0 }}
          >
            <IconButton onClick={() => dispatch(duplicateQuestion(id))}>
              <ContentCopyIcon />
            </IconButton>
            <IconButton onClick={() => dispatch(deleteQuestion(id))}>
              <DeleteIcon />
            </IconButton>
            <Divider orientation="vertical" variant="middle" flexItem />
            <p>필수</p>
            <Switch
              color="secondary"
              checked={required}
              onChange={handleRequiredSwitchChange}
            />
          </Stack>
        </Foot>
      </QuestionBox>
    </DragTarget>
  );
}

export default SurveyEditPageQuestionBox;
