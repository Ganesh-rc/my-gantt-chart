import { Task } from "gantt-task-react";

export class GanttTask {
  start: Date;

  end: Date;

  name: string;

  id: string;

  progress: number;

  type: "task" | "milestone" | "project";

  project?: string;

  dependencies?: string[];

  constructor({
    start,
    end,
    name,
    id,
    progress,
    type,
    project,
    dependencies,
  }: GanttTask) {
    this.start = start;
    this.end = end;
    this.name = name;
    this.id = id;
    this.progress = progress;
    this.type = type;
    this.project = project;
    this.dependencies = dependencies;
  }
}

const getMonthDate = (index: number): { month: number; date: number } => {
  return {
    month: Math.floor(index / 25),
    date: Math.floor((index % 25) + 1),
  };
};

const getTaskType = (
  index: number,
  type: "task" | "subtask"
): "task" | "milestone" | "project" => {
  if (type === "task") {
    return index !== 299 ? "project" : "milestone";
  }
  return index !== 4 ? "task" : "milestone";
};

export const getTaskList = () => {
  let taskList: Task[] = [];
  const projectTrackTask = new GanttTask({
    start: new Date(2022, 0, 1),
    end: new Date(2022, 11, 24, 9, 0),
    name: "Sample Project",
    id: "ProjectSample",
    progress: 25,
    type: "project",
  });
  taskList.push(projectTrackTask);
  for (let taskIndex = 0; taskIndex < 300; taskIndex++) {
    const { month, date } = getMonthDate(taskIndex);
    let task = new GanttTask({
      start: new Date(2022, month, date),
      end: new Date(2022, month, date + 3, 9, 0),
      name: `Task ${taskIndex}`,
      id: `Task ${taskIndex}`,
      progress: 40,
      type: getTaskType(taskIndex, "task"),
      dependencies: taskIndex === 0 ? [] : [taskList[taskList.length - 1].id],
      project: "ProjectSample",
    });
    taskList.push(task);
    for (let subTaskIndex = 0; subTaskIndex < 5; subTaskIndex++) {
      let subTask = new GanttTask({
        start: task.start,
        end: task.end,
        name: `Subtask ${taskIndex}.${subTaskIndex}`,
        id: `Task ${taskIndex}.${subTaskIndex}`,
        progress: 40,
        type: getTaskType(subTaskIndex, "subtask"),
        dependencies: [taskList[taskList.length - 1].id],
        project: task.id,
      });
      taskList.push(subTask);
    }
  }

  return taskList;
};
