import { useRef, useEffect } from "react";
import styled from "@emotion/styled";
import {
  Stack,
  TextField,
  IconButton,
  CloseIcon,
  VerticalDragIndicatorIcon,
} from "@components";
import { handleOptionChangeFuncType, handleOptionDeleteFuncType } from "option";
import type { OptionType } from "@stores";
import { CLASSNAME_VERTICAL_INDICATOR } from "@constants";

interface InputOptionProps {
  startIcon?: React.ReactNode;
  value: OptionType;
  handleOptionChange: handleOptionChangeFuncType;
  handleOptionDelete: handleOptionDeleteFuncType;
  onGoDrag: (go: boolean) => void;
}

const OptionContainer = styled.div`
  position: relative;

  &:hover .${CLASSNAME_VERTICAL_INDICATOR} {
    display: block;
  }
`;

const VerticalIndicator = styled(VerticalDragIndicatorIcon)`
  display: none;
  position: absolute;
  top: 50%;
  right: 100%;
  transform: translate(0px, -50%);
  cursor: pointer;
`;

function InputOption({
  startIcon,
  value,
  handleOptionChange,
  handleOptionDelete,
  onGoDrag,
}: InputOptionProps) {
  const optionContainer = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const optionContainerEl = optionContainer.current;
    const handleMouseDown = (e: MouseEvent) => {
      const target = e.target as HTMLElement;
      const isIndicatorClicked = !!target.closest(
        `.${CLASSNAME_VERTICAL_INDICATOR}`
      );
      onGoDrag(isIndicatorClicked);
    };
    const handleMouseUp = () => {
      onGoDrag(false);
    };

    optionContainerEl?.addEventListener("mousedown", handleMouseDown);
    optionContainerEl?.addEventListener("mouseup", handleMouseUp);

    return () => {
      optionContainerEl?.removeEventListener("mousedown", handleMouseDown);
      optionContainerEl?.removeEventListener("mouseup", handleMouseUp);
    };
  }, []);

  return (
    <OptionContainer ref={optionContainer}>
      <VerticalIndicator />
      <Stack spacing={1} direction="row" alignItems="center">
        {startIcon}
        <TextField
          hiddenLabel
          variant="standard"
          fullWidth
          value={value.text}
          onChange={(e) => handleOptionChange(e, value.id)}
        />
        <IconButton onClick={() => handleOptionDelete(value.id)}>
          <CloseIcon />
        </IconButton>
      </Stack>
    </OptionContainer>
  );
}

export default InputOption;
