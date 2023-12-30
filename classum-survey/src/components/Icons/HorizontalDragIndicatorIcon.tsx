import styled from "@emotion/styled";
import { DragIndicatorIcon } from "@components";

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
    <span className={className}>
      <HorizontalDragIndicator color="disabled" />
    </span>
  );
}

export default HorizontalDragIndicatorIcon;
