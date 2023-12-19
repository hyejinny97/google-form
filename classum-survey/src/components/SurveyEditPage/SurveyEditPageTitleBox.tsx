import { useSelector, useDispatch, shallowEqual } from "react-redux";
import TextField from "@mui/material/TextField";
import { SurveyTitleBox } from "@components";
import { updateSurveyTitle, updateSurveyTitleDesc } from "@stores";
import type { RootState } from "@stores";

function SurveyEditPageTitleBox() {
  const [surveyTitle, surveyTitleDesc] = useSelector(
    (state: RootState) => [
      state.survey.surveyTitle,
      state.survey.surveyTitleDesc,
    ],
    shallowEqual
  );
  const dispatch = useDispatch();

  const handleSurveyTitleChange = (e: React.ChangeEvent<HTMLInputElement>) =>
    dispatch(updateSurveyTitle(e.target.value));

  const handleSurveyTitleDescChange = (
    e: React.ChangeEvent<HTMLInputElement>
  ) => dispatch(updateSurveyTitleDesc(e.target.value));

  return (
    <SurveyTitleBox>
      <TextField
        value={surveyTitle}
        onChange={handleSurveyTitleChange}
        variant="standard"
        fullWidth
        InputProps={{ sx: { fontSize: 30 } }}
      />
      <TextField
        value={surveyTitleDesc}
        onChange={handleSurveyTitleDescChange}
        variant="standard"
        placeholder="설문지 설명"
        margin="normal"
        fullWidth
      />
    </SurveyTitleBox>
  );
}

export default SurveyEditPageTitleBox;
