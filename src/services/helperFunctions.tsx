import React, { useState, ReactElement, useEffect } from "react";
import { Gantt, Task, ViewMode } from "gantt-task-react";
import { getTaskList } from "./helperData";

const getProject = (task: Task, taskList: Task[]): Task => {
  return taskList[taskList.findIndex((t) => t.id === task.project)];
};

export const getStartAndEndDatesOfProject = (
  tasks: Task[],
  projectId: string
): [start: Date, end: Date] => {
  const projectTasks = tasks.filter((t) => t.project === projectId);
  let start = projectTasks[0].start;
  let end = projectTasks[0].end;

  for (let taskIndex = 0; taskIndex < projectTasks.length; taskIndex++) {
    const task = projectTasks[taskIndex];
    if (start.getTime() > task.start.getTime()) {
      start = task.start;
    }
    if (end.getTime() < task.end.getTime()) {
      end = task.end;
    }
  }
  return [start, end];
};

interface UseUiDataType {
  view: ViewMode;
  setView: Function;
  tasks: Task[];
  setTasks: Function;
  loading: Boolean;
  setLoading: Function;
  columnWidth: number;
  ganttHeight: number;
}

export const useUiData = (): UseUiDataType => {
  const [view, setView] = useState<ViewMode>(ViewMode.Day);
  const [tasks, setTasks] = useState<Task[]>(getTaskList());
  const [loading, setLoading] = useState<Boolean>(true);
  const columnWidth = 60;
  const ganttHeight = window.innerHeight - 100;

  useEffect(() => {
    const timer = setTimeout(() => {
      setLoading(false);
    }, 2000);
  }, []);

  return {
    view,
    setView,
    tasks,
    setTasks,
    loading,
    setLoading,
    columnWidth,
    ganttHeight,
  };
};

export const handleTaskChange = (
  modifiedTask: Task,
  tasks: Task[],
  setTasks: Function
): void => {
  let updatedTaskList = tasks.map((task) =>
    task.id === modifiedTask.id ? modifiedTask : task
  );
  if (modifiedTask.project) {
    const [start, end] = getStartAndEndDatesOfProject(
      updatedTaskList,
      modifiedTask.project
    );
    const project = getProject(modifiedTask, updatedTaskList);
    if (project.start.getTime() !== end.getTime() || project.end.getTime()) {
      const newProject = { ...project, start, end };
      updatedTaskList = updatedTaskList.map((task) =>
        task.id === modifiedTask.project ? newProject : task
      );
    }
  }
  setTasks(updatedTaskList);
};

export const handleTaskProgressChange = (
  modifiedTask: Task,
  taskList: Task[],
  setTasks: Function
): void => {
  setTasks(
    taskList.map((task) => (task.id === modifiedTask.id ? modifiedTask : task))
  );
};

export const handleExpanderClick = (
  modifiedTask: Task,
  taskList: Task[],
  setTasks: Function
): void => {
  setTasks(taskList.map((t) => (t.id === modifiedTask.id ? modifiedTask : t)));
};
