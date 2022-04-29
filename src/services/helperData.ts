import { Task } from "gantt-task-react";
import { getTaskList1 } from "./ganttData/ganttTasks01";

export const getTaskList = (): Task[] => {
  const tasks = getTaskList1();

  return tasks;
};
