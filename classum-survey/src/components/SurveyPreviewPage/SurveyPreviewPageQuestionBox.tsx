import { useDispatch } from "react-redux";
import styled from "@emotion/styled";
import { useTheme } from "@mui/material/styles";
import { Box, Stack } from "@mui/material";
import {
  SurveyQuestionBox,
  SurveyPreviewPageShortAnswer,
  SurveyPreviewPageLongAnswer,
  SurveyPreviewPageMultipleChoiceAnswer,
  SurveyPreviewPageCheckboxAnswer,
  SurveyPreviewPageDropdownAnswer,
  ErrorOutlineIcon,
} from "@components";
import { updateSurveyPreviewAnswer } from "@stores";
import type { QuestionType, OptionType, AnswerType } from "@stores";
import {
  Q_TYPE_SHORT,
  Q_TYPE_LONG,
  Q_TYPE_MULTIPLE_CHOICE,
  Q_TYPE_CHECKBOX,
  Q_TYPE_DROPDOWN,
  COLOR_ERROR,
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

  const handleTextAnswerChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    dispatch(
      updateSurveyPreviewAnswer({ questionId: id, answer: e.target.value })
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
    renderBody = <SurveyPreviewPageLongAnswer disabled={disabled} />;
  else if (type === Q_TYPE_MULTIPLE_CHOICE)
    renderBody = (
      <SurveyPreviewPageMultipleChoiceAnswer
        options={options as Array<OptionType>}
        disabled={disabled}
      />
    );
  else if (type === Q_TYPE_CHECKBOX)
    renderBody = (
      <SurveyPreviewPageCheckboxAnswer
        options={options as Array<OptionType>}
        disabled={disabled}
      />
    );
  else if (type === Q_TYPE_DROPDOWN)
    renderBody = (
      <SurveyPreviewPageDropdownAnswer
        options={options as Array<OptionType>}
        disabled={disabled}
      />
    );

  return (
    <SurveyQuestionBox
      borderColor={COLOR_ERROR}
      description={
        <Stack direction="row" alignItems="center" spacing={1}>
          <ErrorOutlineIcon />
          <p>필수 질문입니다.</p>
        </Stack>
      }
      descriptionColor={COLOR_ERROR}
    >
      <Stack direction="row" spacing={1}>
        <Box sx={{ fontSize: 20 }}>{title}</Box>
        {required && <Box sx={{ color: theme.palette.error.main }}>*</Box>}
      </Stack>
      <Body>{renderBody}</Body>
    </SurveyQuestionBox>
  );
}

export default SurveyPreviewPageQuestionBox;
