import styled from "@emotion/styled";
import { useState } from "react";
import { Grid, TextField, SelectChangeEvent } from "@mui/material";
import {
  SurveyQuestionBox,
  QuestionTypeSelect,
  ShortAnswer,
  LongAnswer,
  SurveyEditPageMultipleChoiceAnswer,
  SurveyEditPageCheckboxAnswer,
  SurveyEditPageDropdownAnswer,
} from "@components";
import {
  Q_TYPE_SHORT,
  Q_TYPE_LONG,
  Q_TYPE_MULTIPLE_CHOICE,
  Q_TYPE_CHECKBOX,
  Q_TYPE_DROPDOWN,
} from "@constants";

interface SurveyEditPageQuestionBoxProps {}

const Head = styled.div`
  margin-bottom: 1rem;
`;

const Body = Head.withComponent("div");

function SurveyEditPageQuestionBox() {
  const [selectedQType, setSelectedQType] = useState(Q_TYPE_MULTIPLE_CHOICE);

  const handleSelectChange = (e: SelectChangeEvent) => {
    setSelectedQType(e.target.value);
  };

  let renderBody;
  if (selectedQType === Q_TYPE_SHORT) renderBody = <ShortAnswer disabled />;
  else if (selectedQType === Q_TYPE_LONG) renderBody = <LongAnswer disabled />;
  else if (selectedQType === Q_TYPE_MULTIPLE_CHOICE)
    renderBody = <SurveyEditPageMultipleChoiceAnswer />;
  else if (selectedQType === Q_TYPE_CHECKBOX)
    renderBody = <SurveyEditPageCheckboxAnswer />;
  else if (selectedQType === Q_TYPE_DROPDOWN)
    renderBody = <SurveyEditPageDropdownAnswer />;

  return (
    <SurveyQuestionBox>
      <Head>
        <Grid container spacing={3}>
          <Grid item xs={8}>
            <TextField
              variant="filled"
              placeholder="질문"
              hiddenLabel
              fullWidth
            />
          </Grid>
          <Grid item xs={4}>
            <QuestionTypeSelect
              selected={selectedQType}
              handleSelectChange={handleSelectChange}
            />
          </Grid>
        </Grid>
      </Head>
      <Body>{renderBody}</Body>
    </SurveyQuestionBox>
  );
}

export default SurveyEditPageQuestionBox;
