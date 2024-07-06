import { useState } from "react"
import { toast } from "sonner"

import {
  AddIcon,
  CloudSunIcon,
  MoonIcon,
  SunIcon,
  TrashIcon,
} from "../assets/icons"
import TASKS from "../constants/tasks"
import Button from "./Button"
import TaskItem from "./TaskItem"
import TasksSeparator from "./TasksSeparator"

const Tasks = () => {
  const [tasks, setTasks] = useState(TASKS)

  const morningTasks = tasks.filter((task) => task.time === "morning")

  const afternoonTasks = tasks.filter((task) => task.time === "afternoon")

  const eveningTasks = tasks.filter((task) => task.time === "evening")

  const handleDeleteTaskClick = (taskId) => {
    const newTasks = tasks.filter((task) => task.id != taskId)

    setTasks(newTasks)
    toast.success("Tarefa deletada com sucesso!")
  }

  const handleTaskCheckboxClick = (taskId) => {
    const newTasks = tasks.map((task) => {
      if (task.id != taskId) {
        return task
      }

      if (task.status === "not_started") {
        toast.success("Tarefa iniciada com sucesso!")
        return { ...task, status: "in_progress" }
      }

      if (task.status === "in_progress") {
        toast.success("Tarefa concluida com sucesso!")
        return { ...task, status: "done" }
      }

      if (task.status === "done") {
        toast.success("Tarefa reiniciada com sucesso!")
        return { ...task, status: "not_started" }
      }

      return task
    })
    setTasks(newTasks)
  }

  return (
    <div className="w-full space-y-6 px-8 py-16">
      <div className="flex w-full justify-between">
        <div className="flex flex-col gap-2">
          <span className="text-xs font-semibold text-[#00ADB5]">
            Minhas Tarefas
          </span>
          <h2 className="text-xl font-semibold">Minhas Tarefas</h2>
        </div>
        <div className="flex items-end gap-2">
          <Button variant="ghost">
            Limpar tarefas
            <TrashIcon />
          </Button>
          <Button variant="primary">
            Nova tarefa
            <AddIcon />
          </Button>
        </div>
      </div>

      <div className="flex w-full flex-col gap-6 rounded-lg bg-white p-6">
        <div className="flex flex-col gap-3">
          <TasksSeparator icon={<SunIcon />} title="Manhã" />
          {morningTasks.map((task) => (
            <TaskItem
              key={task.id}
              task={task}
              handleCheckboxClick={handleTaskCheckboxClick}
              handleDeleteClick={handleDeleteTaskClick}
            />
          ))}
        </div>

        <div className="flex flex-col gap-3">
          <TasksSeparator icon={<CloudSunIcon />} title="Tarde" />
          {afternoonTasks.map((task) => (
            <TaskItem
              key={task.id}
              task={task}
              handleCheckboxClick={handleTaskCheckboxClick}
              handleDeleteClick={handleDeleteTaskClick}
            />
          ))}
        </div>

        <div className="flex flex-col gap-3">
          <TasksSeparator icon={<MoonIcon />} title="Noite" />
          {eveningTasks.map((task) => (
            <TaskItem
              key={task.id}
              task={task}
              handleCheckboxClick={handleTaskCheckboxClick}
              handleDeleteClick={handleDeleteTaskClick}
            />
          ))}
        </div>
      </div>
    </div>
  )
}

export default Tasks
