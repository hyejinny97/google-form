import styled from "@emotion/styled";
import { VerticalDragIndicatorIcon } from "@components";

function HorizontalDragIndicatorIcon() {
  const HorizontalDragIndicator = styled(VerticalDragIndicatorIcon)`
    transform: rotate(90deg);
  `;

  return <HorizontalDragIndicator />;
}

export default HorizontalDragIndicatorIcon;
