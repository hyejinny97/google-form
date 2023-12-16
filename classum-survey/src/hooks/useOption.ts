import {
  handleOptionChangeFuncType,
  handleOptionDeleteFuncType,
  handleOptionAddFuncType,
} from "option";
import type { OptionType } from "@stores";

interface UseOptionProps {
  choiceOptions: Array<OptionType>;
  setChoiceOptions: (options: Array<OptionType>) => void;
}

function useOption({ choiceOptions, setChoiceOptions }: UseOptionProps) {
  const handleOptionChange: handleOptionChangeFuncType = (e, order) => {
    const newChoiceOptions = choiceOptions.map((option, idx) => {
      if (idx === order) return { order, option: e.target.value };
      return option;
    });

    setChoiceOptions(newChoiceOptions);
  };

  const handleOptionDelete: handleOptionDeleteFuncType = (order) => {
    const newChoiceOptions = choiceOptions.filter((option, idx) => {
      if (idx === order) return;
      return { ...option, order: idx < order ? idx : idx - 1 };
    });

    setChoiceOptions(newChoiceOptions);
  };

  const handleOptionAdd: handleOptionAddFuncType = () => {
    const newChoiceOptions = [
      ...choiceOptions,
      {
        order: choiceOptions.length + 1,
        option: `옵션 ${choiceOptions.length + 1}`,
      },
    ];

    setChoiceOptions(newChoiceOptions);
  };

  return { handleOptionChange, handleOptionDelete, handleOptionAdd };
}

export default useOption;
