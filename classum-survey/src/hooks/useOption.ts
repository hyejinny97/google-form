import {
  OptionType,
  handleOptionChangeFuncType,
  handleOptionDeleteFuncType,
  handleOptionAddFuncType,
} from "option";

interface UseOptionProps {
  choiceOptions: Array<OptionType>;
  setChoiceOptions: (options: Array<OptionType>) => void;
}

function useOption({ choiceOptions, setChoiceOptions }: UseOptionProps) {
  const handleOptionChange: handleOptionChangeFuncType = (e, order) => {
    const newChoiceOptions = choiceOptions.map((option, idx) => {
      if (idx === order) return e.target.value;
      return option;
    });

    setChoiceOptions(newChoiceOptions);
  };

  const handleOptionDelete: handleOptionDeleteFuncType = (order) => {
    const newChoiceOptions = choiceOptions.filter((option, idx) => {
      if (idx === order) return;
      return option;
    });

    setChoiceOptions(newChoiceOptions);
  };

  const handleOptionAdd: handleOptionAddFuncType = () => {
    const newChoiceOptions = [
      ...choiceOptions,
      `옵션 ${choiceOptions.length + 1}`,
    ];

    setChoiceOptions(newChoiceOptions);
  };

  return { handleOptionChange, handleOptionDelete, handleOptionAdd };
}

export default useOption;
