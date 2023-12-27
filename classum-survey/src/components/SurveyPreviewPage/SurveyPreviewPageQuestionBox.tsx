import styled from "@emotion/styled";
import { Box, Stack } from "@mui/material";
import { useTheme } from "@mui/material/styles";
import {
  SurveyQuestionBox,
  SurveyPreviewPageShortAnswer,
  SurveyPreviewPageLongAnswer,
  MultipleChoiceAnswer,
  CheckboxAnswer,
  DropdownAnswer,
} from "@components";
import type { QuestionType } from "@stores";
import {
  Q_TYPE_SHORT,
  Q_TYPE_LONG,
  Q_TYPE_MULTIPLE_CHOICE,
  Q_TYPE_CHECKBOX,
  Q_TYPE_DROPDOWN,
} from "@constants";
import type { OptionType } from "@stores";

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
  if (type === Q_TYPE_SHORT) renderBody = <SurveyPreviewPageShortAnswer />;
  else if (type === Q_TYPE_LONG) renderBody = <SurveyPreviewPageLongAnswer />;
  else if (type === Q_TYPE_MULTIPLE_CHOICE)
    renderBody = (
      <MultipleChoiceAnswer
        options={options as Array<OptionType>}
        value={1}
        onChange={(e) => console.log(e.target.value)}
      />
    );
  else if (type === Q_TYPE_CHECKBOX)
    renderBody = (
      <CheckboxAnswer
        options={options as Array<OptionType>}
        value={[]}
        onChange={(e) => console.log(Number(e.target.name), e.target.checked)}
      />
    );
  else if (type === Q_TYPE_DROPDOWN)
    renderBody = (
      <DropdownAnswer
        options={options as Array<OptionType>}
        value={""}
        onChange={(e) => console.log(e.target.value)}
      />
    );

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
