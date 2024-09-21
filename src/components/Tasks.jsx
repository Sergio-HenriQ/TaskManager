import { useQueryClient } from "@tanstack/react-query"

import {
  CloudSunIcon,
  GroupIcon,
  MoonIcon,
  SunIcon,
  TrashIcon,
} from "../assets/icons"
import { changeTaskStatus } from "../helpers/changeTaskStatus"
import { updateTaskStatus } from "../helpers/updateTaskStatus"
import { useGetTasks } from "../hooks/data/use-get-tasks"
import Header from "./Header"
import TaskItem from "./TaskItem"
import TasksSeparator from "./TasksSeparator"

const Tasks = () => {
  const queryClient = useQueryClient()
  const { data: tasks } = useGetTasks()

  const morningTasks = tasks?.filter((task) => task.time === "morning")

  const afternoonTasks = tasks?.filter((task) => task.time === "afternoon")

  const eveningTasks = tasks?.filter((task) => task.time === "evening")

  const allStatus = ["not_started", "in_progress", "done"]

  const handleTaskCheckboxClick = (taskId, task) => {
    changeTaskStatus(taskId, tasks, queryClient, "tasks")
    updateTaskStatus(taskId, task, allStatus, "tasks")
  }

  return (
    <div className="w-full space-y-6 px-8 py-16">
      <Header>Minhas Tarefas</Header>

      <div className="flex w-full flex-col gap-6 rounded-lg bg-white p-6">
        <div className="flex flex-col gap-3">
          <TasksSeparator icon={<SunIcon />} title="Manhã" />
          {morningTasks?.length == 0 && (
            <p className="text-sm text-brand-text-gray">
              Nenhuma tarefa cadastrada para período da manhã.
            </p>
          )}
          {morningTasks?.map((task) => (
            <TaskItem
              key={task.id}
              task={task}
              handleCheckboxClick={handleTaskCheckboxClick}
              TrashIcon={<TrashIcon />}
              groupIcon={<GroupIcon />}
            />
          ))}
        </div>

        <div className="flex flex-col gap-3">
          <TasksSeparator icon={<CloudSunIcon />} title="Tarde" />
          {afternoonTasks?.length == 0 && (
            <p className="text-sm text-brand-text-gray">
              Nenhuma tarefa cadastrada para período da tarde.
            </p>
          )}
          {afternoonTasks?.map((task) => (
            <TaskItem
              key={task.id}
              task={task}
              handleCheckboxClick={handleTaskCheckboxClick}
              TrashIcon={<TrashIcon />}
              groupIcon={<GroupIcon />}
            />
          ))}
        </div>

        <div className="flex flex-col gap-3">
          <TasksSeparator icon={<MoonIcon />} title="Noite" />
          {eveningTasks?.length == 0 && (
            <p className="text-sm text-brand-text-gray">
              Nenhuma tarefa cadastrada para período da noite.
            </p>
          )}

          {eveningTasks?.map((task) => (
            <TaskItem
              key={task.id}
              task={task}
              handleCheckboxClick={handleTaskCheckboxClick}
              TrashIcon={<TrashIcon />}
              groupIcon={<GroupIcon />}
            />
          ))}
        </div>
      </div>
    </div>
  )
}

export default Tasks
