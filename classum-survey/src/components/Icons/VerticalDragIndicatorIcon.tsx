import { DragIndicatorIcon } from "@components";
import { CLASSNAME_VERTICAL_INDICATOR } from "@constants";

interface VerticalDragIndicatorIconProp {
  className?: string;
}

function VerticalDragIndicatorIcon({
  className,
}: VerticalDragIndicatorIconProp) {
  return (
    <span className={`${CLASSNAME_VERTICAL_INDICATOR} ${className}`}>
      <DragIndicatorIcon color="disabled" />
    </span>
  );
}

export default VerticalDragIndicatorIcon;
