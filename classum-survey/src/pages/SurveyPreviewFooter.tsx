import { Stack } from "@mui/material";
import { SurveySubmitButton, SurveyClearButton } from "@components";

function SurveyPreviewFooter() {
  return (
    <Stack
      direction="row"
      justifyContent="space-between"
      alignItems="center"
      mt={2}
    >
      <SurveySubmitButton />
      <SurveyClearButton />
    </Stack>
  );
}

export default SurveyPreviewFooter;
