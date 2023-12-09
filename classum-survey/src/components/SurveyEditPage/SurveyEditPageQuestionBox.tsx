import styled from "@emotion/styled";
import { useState } from "react";
import { Grid, TextField, SelectChangeEvent } from "@mui/material";
import { SurveyQuestionBox, QuestionTypeSelect } from "@components";
import { Q_TYPE_MULTIPLE_CHOICE } from "@constants";

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
      <Body></Body>
    </SurveyQuestionBox>
  );
}

export default SurveyEditPageQuestionBox;
