import { useState } from "react";
import { useSelector, useDispatch, shallowEqual } from "react-redux";
import { TextField, SurveyTitleBox } from "@components";
import { tryUpdateSurveyTitle, tryUpdateSurveyTitleDesc } from "@stores";
import type { RootState } from "@stores";
import { TITLE_BOX_TITLE_FONT_SIZE } from "@constants";

function SurveyEditPageTitleBox() {
  const [initialSurveyTitle, initialSurveyTitleDesc] = useSelector(
    (state: RootState) => [
      state.survey.surveyTitle,
      state.survey.surveyTitleDesc,
    ],
    shallowEqual
  );
  const [surveyTitleText, setSurveyTitleText] = useState(initialSurveyTitle);
  const [surveyTitleDescText, setSurveyTitleDescText] = useState(
    initialSurveyTitleDesc
  );
  const dispatch = useDispatch();

  const handleSurveyTitleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    dispatch(tryUpdateSurveyTitle(e.target.value));
    setSurveyTitleText(e.target.value);
  };

  const handleSurveyTitleDescChange = (
    e: React.ChangeEvent<HTMLInputElement>
  ) => {
    dispatch(tryUpdateSurveyTitleDesc(e.target.value));
    setSurveyTitleDescText(e.target.value);
  };

  return (
    <SurveyTitleBox>
      <TextField
        value={surveyTitleText}
        onChange={handleSurveyTitleChange}
        variant="standard"
        fullWidth
        InputProps={{ sx: { fontSize: TITLE_BOX_TITLE_FONT_SIZE } }}
      />
      <TextField
        value={surveyTitleDescText}
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
