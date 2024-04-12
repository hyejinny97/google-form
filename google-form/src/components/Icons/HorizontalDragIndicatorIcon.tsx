import styled from "@emotion/styled";
import { DragIndicatorIcon } from "@components";
import { CLASSNAME_HORIZONTAL_INDICATOR } from "@constants";

interface HorizontalDragIndicatorIconProps {
  className?: string;
}

function HorizontalDragIndicatorIcon({
  className,
}: HorizontalDragIndicatorIconProps) {
  const HorizontalDragIndicator = styled(DragIndicatorIcon)`
    transform: rotate(90deg);
  `;

  return (
    <span className={`${CLASSNAME_HORIZONTAL_INDICATOR} ${className}`}>
      <HorizontalDragIndicator color="disabled" />
    </span>
  );
}

export default HorizontalDragIndicatorIcon;
