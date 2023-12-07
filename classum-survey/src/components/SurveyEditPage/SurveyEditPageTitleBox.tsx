import TextField from "@mui/material/TextField";
import { SurveyTitleBox } from "@components";

function SurveyEditPageTitleBox() {
  return (
    <SurveyTitleBox>
      <TextField
        variant="standard"
        defaultValue="제목 없는 설문지"
        fullWidth
        InputProps={{ sx: { fontSize: 30 } }}
      />
      <TextField
        variant="standard"
        placeholder="설문지 설명"
        margin="normal"
        fullWidth
      />
    </SurveyTitleBox>
  );
}

export default SurveyEditPageTitleBox;
