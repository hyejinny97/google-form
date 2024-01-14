import { useActionData } from "react-router-dom";
import { useDispatch } from "react-redux";
import styled from "@emotion/styled";
import { useTheme } from "@mui/material/styles";
import { Box, Stack, SelectChangeEvent } from "@mui/material";
import {
  SurveyQuestionBox,
  RequiredSurveyQuestionBox,
  SurveyPreviewPageShortAnswer,
  SurveyPreviewPageLongAnswer,
  SurveyPreviewPageMultipleChoiceAnswer,
  SurveyPreviewPageCheckboxAnswer,
  SurveyPreviewPageDropdownAnswer,
} from "@components";
import type { SurveyPreviewPageActionDataType } from "@pages";
import { updateSurveyPreviewAnswer } from "@stores";
import type { QuestionType, OptionType, AnswerType } from "@stores";
import {
  Q_TYPE_SHORT,
  Q_TYPE_LONG,
  Q_TYPE_MULTIPLE_CHOICE,
  Q_TYPE_CHECKBOX,
  Q_TYPE_DROPDOWN,
} from "@constants";
import { useIsMounted } from "@hooks";

interface SurveyPreviewPageQuestionBoxProps {
  questionData: QuestionType;
  answerData?: AnswerType;
  disabled?: boolean;
}

const Body = styled.div`
  margin-top: 1rem;
`;

function SurveyPreviewPageQuestionBox({
  questionData: { id, title, type, required, options },
  answerData,
  disabled,
}: SurveyPreviewPageQuestionBoxProps) {
  const theme = useTheme();
  const dispatch = useDispatch();
  const isMounted = useIsMounted();
  const actionData = useActionData() as SurveyPreviewPageActionDataType;

  const showRequireMessage =
    (isMounted || actionData?.showRequiredQuestions) &&
    required &&
    (Array.isArray(answerData) ? !answerData.length : !answerData);

  const handleTextAnswerChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    dispatch(
      updateSurveyPreviewAnswer({ questionId: id, answer: e.target.value })
    );
  };

  const handleMultipleChoiceAnswerChange = (
    e: React.ChangeEvent<HTMLInputElement>
  ) => {
    dispatch(
      updateSurveyPreviewAnswer({
        questionId: id,
        answer: Number(e.target.value),
      })
    );
  };

  const handleCheckboxAnswerChange = (
    e: React.ChangeEvent<HTMLInputElement>
  ) => {
    const isChecked = e.target.checked;
    const value = Number(e.target.name);
    const prevAnswerData = (answerData as Array<number>) || [];

    dispatch(
      updateSurveyPreviewAnswer({
        questionId: id,
        answer: isChecked
          ? [...prevAnswerData, value]
          : prevAnswerData.filter((sel) => sel !== value),
      })
    );
  };

  const handleDropdownAnswerChange = (e: SelectChangeEvent) => {
    dispatch(
      updateSurveyPreviewAnswer({
        questionId: id,
        answer: Number(e.target.value),
      })
    );
  };

  let renderBody;
  if (type === Q_TYPE_SHORT)
    renderBody = (
      <SurveyPreviewPageShortAnswer
        value={(answerData as string) || ""}
        onChange={handleTextAnswerChange}
        disabled={disabled}
      />
    );
  else if (type === Q_TYPE_LONG)
    renderBody = (
      <SurveyPreviewPageLongAnswer
        value={(answerData as string) || ""}
        onChange={handleTextAnswerChange}
        disabled={disabled}
      />
    );
  else if (type === Q_TYPE_MULTIPLE_CHOICE)
    renderBody = (
      <SurveyPreviewPageMultipleChoiceAnswer
        options={options as Array<OptionType>}
        value={(answerData as number) || -1}
        onChange={handleMultipleChoiceAnswerChange}
        disabled={disabled}
      />
    );
  else if (type === Q_TYPE_CHECKBOX)
    renderBody = (
      <SurveyPreviewPageCheckboxAnswer
        options={options as Array<OptionType>}
        value={(answerData as Array<number>) || [-1]}
        onChange={handleCheckboxAnswerChange}
        disabled={disabled}
      />
    );
  else if (type === Q_TYPE_DROPDOWN)
    renderBody = (
      <SurveyPreviewPageDropdownAnswer
        options={options as Array<OptionType>}
        value={(answerData as number) || -1}
        onChange={handleDropdownAnswerChange}
        disabled={disabled}
      />
    );

  const QuestionBox = showRequireMessage
    ? RequiredSurveyQuestionBox
    : SurveyQuestionBox;

  return (
    <QuestionBox>
      <Stack direction="row" spacing={1}>
        <Box sx={{ fontSize: 20 }}>{title}</Box>
        {required && <Box sx={{ color: theme.palette.error.main }}>*</Box>}
      </Stack>
      <Body>{renderBody}</Body>
    </QuestionBox>
  );
}

export default SurveyPreviewPageQuestionBox;
