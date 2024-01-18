import { Stack, SurveyGoBackButton } from "@components";

function SurveySubmitFooter() {
  return (
    <Stack
      direction="row"
      justifyContent="space-between"
      alignItems="center"
      mt={2}
    >
      <SurveyGoBackButton />
    </Stack>
  );
}

export default SurveySubmitFooter;
