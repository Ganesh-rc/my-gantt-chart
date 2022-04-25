import React, { ReactElement, useState } from "react";
import { Box } from "@mui/material";
import { Gantt, Task, ViewMode } from "gantt-task-react";
import { initTasks, getTimeDurationOfProject } from "./services/helperData";
import "gantt-task-react/dist/index.css";

const App = (): ReactElement => {
  const [view, setView] = useState<ViewMode>(ViewMode.Day);
  const [tasks, setTasks] = useState<Task[]>(initTasks());
  const columnWidth = 60;
  const ganttHeight = 800;

  return (
    <Box>
      <Gantt
        tasks={tasks}
        viewMode={view}
        listCellWidth="320px"
        columnWidth={columnWidth}
        ganttHeight={ganttHeight}
      />
    </Box>
  );
};

export default App;
