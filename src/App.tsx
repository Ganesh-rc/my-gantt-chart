import React, { ReactElement, useState } from "react";
import { Box } from "@mui/material";
import { Gantt, Task, ViewMode } from "gantt-task-react";

const App = (): React.ReactElement => {
  const [view, setView] = useState<ViewMode>(ViewMode.Month);
  const [tasks, setTasks] = useState<Task[]>();
  const columnWidth = 300;

  return <Box>hello</Box>;
};

export default App;
