import { Stack, Link } from "@components";
import { handleOptionAddFuncType } from "option";

interface InputAdditionOptionProps {
  startIcon?: React.ReactNode;
  handleOptionAdd: handleOptionAddFuncType;
}

function InputAdditionOption({
  startIcon,
  handleOptionAdd,
}: InputAdditionOptionProps) {
  return (
    <Stack spacing={1} direction="row" alignItems="center">
      {startIcon}
      <Link
        component="button"
        underline="hover"
        color="#9e9e9e"
        onClick={handleOptionAdd}
      >
        옵션 추가
      </Link>
    </Stack>
  );
}

export default InputAdditionOption;
