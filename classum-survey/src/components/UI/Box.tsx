import { Paper } from "@mui/material";
import { BOX_BORDER_RADIUS, BOX_PADDING } from "@constants";

interface BoxProps {
  className?: string;
  children?: React.ReactNode | string;
  elevation?: number;
  sx?: object;
}

function Box({ className, children, elevation, sx }: BoxProps) {
  return (
    <Paper
      className={className}
      variant={elevation ? "elevation" : "outlined"}
      elevation={elevation || 0}
      sx={{ p: BOX_PADDING, borderRadius: BOX_BORDER_RADIUS, ...sx }}
    >
      {children}
    </Paper>
  );
}

export default Box;
