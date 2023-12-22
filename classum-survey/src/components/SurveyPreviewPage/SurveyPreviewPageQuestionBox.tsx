import styled from "@emotion/styled";
import { Box, Stack } from "@mui/material";
import { useTheme } from "@mui/material/styles";
import { SurveyQuestionBox, ShortAnswer, LongAnswer } from "@components";
import type { QuestionType } from "@stores";
import {
  Q_TYPE_SHORT,
  Q_TYPE_LONG,
  Q_TYPE_MULTIPLE_CHOICE,
  Q_TYPE_CHECKBOX,
  Q_TYPE_DROPDOWN,
} from "@constants";

interface SurveyPreviewPageQuestionBoxProps {
  data: QuestionType;
}

const Body = styled.div`
  margin-top: 1rem;
`;

function SurveyPreviewPageQuestionBox({
  data: { id, title, type, required, options },
}: SurveyPreviewPageQuestionBoxProps) {
  const theme = useTheme();

  let renderBody;
  if (type === Q_TYPE_SHORT) renderBody = <ShortAnswer />;
  else if (type === Q_TYPE_LONG) renderBody = <LongAnswer />;

  return (
    <SurveyQuestionBox>
      <Stack direction="row" spacing={1}>
        <Box sx={{ fontSize: 20 }}>{title}</Box>
        {required && <Box sx={{ color: theme.palette.error.main }}>*</Box>}
      </Stack>
      <Body>{renderBody}</Body>
    </SurveyQuestionBox>
  );
}

export default SurveyPreviewPageQuestionBox;
