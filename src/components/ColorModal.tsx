import React, { ReactElement } from "react";
import { Modal, Box, Button, Typography } from "@mui/material";
import { styled } from "@mui/system";
import { Task } from "gantt-task-react";

const CenterBox = styled(Box)({
  background: "white",
  borderRadius: "8px",
  padding: "30px 60px",
  position: "absolute",
  top: "50%",
  left: "50%",
  transform: "translate(-50%, -50%)",
  textAlign: "center",
  whiteSpace: "pre-line",
  display: "flex",
  flexDirection: "column",
  justifyContent: "center",
});

const CustomButton = styled(Button)({
  color: "white",
  borderRadius: "4px",
  fontWeight: "bold",
  marginInline: 4,
  ":hover": {
    filter: "brightness(85%)",
  },
});

interface ColorModalProps {
  open: boolean;
  onClose: Function;
  setColor: Function;
}

export const ColorModal = ({
  open,
  onClose,
  setColor,
}: ColorModalProps): ReactElement => {
  return (
    <Modal
      open={open}
      onClose={() => {
        onClose();
      }}
    >
      <CenterBox>
        <Typography variant="h5" sx={{ mb: 2 }}>
          Pick a colour
        </Typography>
        <Box
          sx={{
            display: "flex",
            flexDirection: "row",
            justifyContent: "space-evenly",
            p: 1,
          }}
        >
          <CustomButton
            sx={{
              backgroundColor: "red",
              ":hover": {
                backgroundColor: "red",
                filter: "brightness(50%)",
              },
            }}
            onClick={() => {
              setColor("red");
            }}
          >
            Red
          </CustomButton>
          <CustomButton
            sx={{
              backgroundColor: "green",
              ":hover": {
                backgroundColor: "green",
                filter: "brightness(50%)",
              },
            }}
            onClick={() => {
              setColor("green");
            }}
          >
            Green
          </CustomButton>
          <CustomButton
            sx={{
              backgroundColor: "blue",
              ":hover": {
                backgroundColor: "blue",
                filter: "brightness(50%)",
              },
            }}
            onClick={() => {
              setColor("blue");
            }}
          >
            Blue
          </CustomButton>
          <CustomButton
            sx={{
              backgroundColor: "yellow",
              ":hover": {
                backgroundColor: "yellow",
                filter: "brightness(50%)",
              },
            }}
            onClick={() => {
              setColor("yellow");
            }}
          >
            Yellow
          </CustomButton>
        </Box>
      </CenterBox>
    </Modal>
  );
};
