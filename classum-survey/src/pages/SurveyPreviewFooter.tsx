import { Stack } from "@mui/material";
import { SurveySubmitButton } from "@components";

function SurveyPreviewFooter() {
  return (
    <Stack
      direction="row"
      justifyContent="space-between"
      alignItems="center"
      mt={2}
    >
      <SurveySubmitButton />
    </Stack>
  );
}

export default SurveyPreviewFooter;
