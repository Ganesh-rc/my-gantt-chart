import React, { useState, ReactElement } from "react";
import { Gantt, Task, ViewMode } from "gantt-task-react";
import { getTaskList, getStartAndEndDatesOfProject } from "./helperData";

interface GetUiDataProps {
  view: ViewMode;
  setView: Function;
  tasks: Task[];
  setTasks: Function;
  columnWidth: number;
  ganttHeight: number;
}

export const getUiData = (): GetUiDataProps => {
  const [view, setView] = useState<ViewMode>(ViewMode.Day);
  const [tasks, setTasks] = useState<Task[]>(getTaskList());
  const columnWidth = 60;
  const ganttHeight = 800;
  return { view, setView, tasks, setTasks, columnWidth, ganttHeight };
};
