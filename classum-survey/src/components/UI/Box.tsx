import { forwardRef } from "react";
import { Paper } from "@mui/material";
import { BOX_BORDER_RADIUS, BOX_PADDING } from "@constants";

interface BoxProps {
  className?: string;
  children?: React.ReactNode | string;
  elevation?: number;
  sx?: object;
}

const Box = forwardRef(
  ({ className, children, elevation, sx }: BoxProps, ref) => {
    return (
      <Paper
        className={className}
        ref={ref as React.RefObject<HTMLDivElement>}
        variant={elevation ? "elevation" : "outlined"}
        elevation={elevation || 0}
        sx={{ p: BOX_PADDING, borderRadius: BOX_BORDER_RADIUS, ...sx }}
      >
        {children}
      </Paper>
    );
  }
);

export default Box;
