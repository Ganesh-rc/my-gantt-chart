import React from "react";
import { Box, CircularProgress, Typography } from "@mui/material";
import { styled } from "@mui/system";

const CenterBox = styled(Box)({
  display: "flex",
  flexDirection: "column",
  position: "absolute",
  justifyContent: "space-between",
  top: "50%",
  left: "50%",
  marginRight: "-50%",
  transform: "translate(-50%, -50%)",
});

export const BufferComponent = (): React.ReactElement => {
  return (
    <CenterBox>
      <Typography variant="h5" fontWeight="bold" color="lightgray">
        Getting your Data
      </Typography>
      <Box height="10px" />
      <CircularProgress sx={{ m: "auto" }} />
    </CenterBox>
  );
};
