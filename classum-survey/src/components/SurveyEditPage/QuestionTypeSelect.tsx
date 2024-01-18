import styled from "@emotion/styled";
import {
  Select,
  MenuItem,
  SelectChangeEvent,
  ShortTextIcon,
  NotesIcon,
  RadioButtonCheckedIcon,
  CheckBoxIcon,
  CheckCircleIcon,
} from "@components";
import {
  Q_TYPE_SHORT,
  Q_TYPE_LONG,
  Q_TYPE_MULTIPLE_CHOICE,
  Q_TYPE_CHECKBOX,
  Q_TYPE_DROPDOWN,
} from "@constants";
import { QuestionTypes } from "questionTypes";

interface QuestionTypeSelectProps {
  value: QuestionTypes | string;
  onChange: (e: SelectChangeEvent) => void;
}

const selectOptions = [
  { icon: <ShortTextIcon />, label: "단답형", value: Q_TYPE_SHORT },
  { icon: <NotesIcon />, label: "장문형", value: Q_TYPE_LONG },
  {
    icon: <RadioButtonCheckedIcon />,
    label: "객관식 질문",
    value: Q_TYPE_MULTIPLE_CHOICE,
  },
  { icon: <CheckBoxIcon />, label: "체크박스", value: Q_TYPE_CHECKBOX },
  { icon: <CheckCircleIcon />, label: "드롭다운", value: Q_TYPE_DROPDOWN },
];

const Option = styled(MenuItem)`
  display: flex;
  align-items: center;

  & svg {
    margin-right: 1rem;
  }
`;

const SelectedOption = Option.withComponent("div");

function QuestionTypeSelect({ value, onChange }: QuestionTypeSelectProps) {
  return (
    <Select
      value={value}
      onChange={onChange}
      renderValue={(value) => {
        const selectedOption = selectOptions.find((opt) => opt.value === value);

        if (!selectedOption) return;

        return (
          <SelectedOption>
            {selectedOption.icon}
            {selectedOption.label}
          </SelectedOption>
        );
      }}
      sx={{ width: 1 }}
    >
      {selectOptions.map((option) => {
        return (
          <Option key={option.label} value={option.value}>
            {option.icon}
            {option.label}
          </Option>
        );
      })}
    </Select>
  );
}

export default QuestionTypeSelect;
