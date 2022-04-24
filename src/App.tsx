import React, { ReactElement, useState } from "react";
import { Box } from "@mui/material";
import { Gantt, Task, ViewMode } from "gantt-task-react";
import { initTasks, getTimeDurationOfProject } from "./helperData";
import "gantt-task-react/dist/index.css";

const App = (): ReactElement => {
  const [view, setView] = useState<ViewMode>(ViewMode.Day);
  const [tasks, setTasks] = useState<Task[]>(initTasks());
  const columnWidth = 60;

  return (
    <Box>
      <Gantt
        tasks={tasks}
        viewMode={view}
        listCellWidth="350px"
        columnWidth={columnWidth}
      />
    </Box>
  );
};

export default App;
