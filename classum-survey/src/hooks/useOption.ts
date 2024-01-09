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
  const handleOptionChange: handleOptionChangeFuncType = (e, id) => {
    const newChoiceOptions = choiceOptions.map((option) => {
      if (option.id === id) return { id, text: e.target.value };
      return option;
    });

    setChoiceOptions(newChoiceOptions);
  };

  const handleOptionDelete: handleOptionDeleteFuncType = (id) => {
    const newChoiceOptions = choiceOptions.filter((option) => {
      if (option.id !== id) return option;
    });

    setChoiceOptions(newChoiceOptions);
  };

  const handleOptionAdd: handleOptionAddFuncType = () => {
    const newId = choiceOptions[choiceOptions.length - 1].id + 1;
    const newChoiceOptions = [
      ...choiceOptions,
      {
        id: newId,
        text: `옵션 ${newId}`,
      },
    ];

    setChoiceOptions(newChoiceOptions);
  };

  return { handleOptionChange, handleOptionDelete, handleOptionAdd };
}

export default useOption;
