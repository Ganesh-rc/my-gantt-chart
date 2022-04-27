import React from "react";
import { Box, CircularProgress } from "@mui/material";

export const BufferComponent = (): React.ReactElement => {
  return (
    <Box
      display="flex"
      sx={{
        position: "absolute",
        top: "50%",
        left: "50%",
        marginRight: "-50%",
        transform: "translate(-50%, -50%)",
      }}
    >
      <CircularProgress />
    </Box>
  );
};
