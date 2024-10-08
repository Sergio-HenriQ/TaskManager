import { useQueryClient } from "@tanstack/react-query"

import {
  GlassWaterIcon,
  LayoutListIcon,
  LoaderIcon,
  TasksIcon,
} from "../assets/icons"
import DailyWaterTarget from "../components/DailyWaterTarget/DailyWaterTarget"
import Header from "../components/Header/Header"
import Sidebar from "../components/Sidebar"
import SummaryOfTasks from "../components/SummaryOfTasks"
import TasksInfo from "../components/TasksInfo/TasksInfo"
import { calculateTotalWaterConsumption } from "../helpers/calculateTotalWaterConsumption"
import { changeTaskStatus } from "../helpers/changeTaskStatus"
import { updateTaskStatus } from "../helpers/updateTaskStatus"
import { useGetTasks } from "../hooks/data/use-get-tasks"
import { useGetWaterConsumption } from "../hooks/data/use-get-water-consumption"

const HomePage = () => {
  const queryClient = useQueryClient()
  const { data: tasks } = useGetTasks()

  const { data: waterConsumption } = useGetWaterConsumption()

  let amountOfWaterConsumed

  if (waterConsumption?.length > 0) {
    amountOfWaterConsumed = calculateTotalWaterConsumption(waterConsumption)
  }

  const completedTasks = tasks?.filter((task) => task.status === "done")
  const tasksInProgress = tasks?.filter((task) => task.status === "in_progress")

  const allStatus = ["not_started", "in_progress", "done"]

  const handleTaskCheckboxClick = (taskId, task) => {
    changeTaskStatus(taskId, waterConsumption, queryClient, "waterConsumption")
    updateTaskStatus(taskId, task, allStatus, "dailyWaterConsumption")
  }

  return (
    <div className="flex">
      <Sidebar />
      <div className="flex w-full flex-col gap-6 px-8 py-16">
        <Header>Início</Header>

        <div className="flex w-full justify-between">
          <TasksInfo
            icon={<LayoutListIcon />}
            quantity={tasks?.length}
            text="Tarefas disponíveis"
          />
          <TasksInfo
            icon={<TasksIcon className="text-brand-primary" />}
            quantity={completedTasks?.length}
            text="Tarefas Concluídas"
          />
          <TasksInfo
            icon={<LoaderIcon className="h-6 w-6 text-brand-primary" />}
            quantity={tasksInProgress?.length}
            text="Em andamento"
          />
          <TasksInfo
            icon={<GlassWaterIcon />}
            quantity={`${amountOfWaterConsumed?.percentage}%`}
            text="Água"
          />
        </div>
        <div className="flex w-full justify-between gap-8">
          <SummaryOfTasks tasks={tasks} />
          <DailyWaterTarget
            dailyTarget={waterConsumption}
            proguess={amountOfWaterConsumed}
            handleTaskCheckboxClick={handleTaskCheckboxClick}
          />
        </div>
      </div>
    </div>
  )
}

export default HomePage
