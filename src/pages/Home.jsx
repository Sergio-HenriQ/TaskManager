import { useContext } from "react"

import {
  GlassWaterIcon,
  LayoutListIcon,
  LoaderIcon,
  TasksIcon,
} from "../assets/icons"
import DailyWaterTarget from "../components/DailyWaterTarget"
import Header from "../components/Header"
import Sidebar from "../components/Sidebar"
import SummaryOfTasks from "../components/SummaryOfTasks"
import TasksInfo from "../components/TasksInfo"
import { TasksContext } from "../contexts/tasks.context"

const HomePage = () => {
  const { tasks, amountOfWaterConsumed, dailyWaterConsumption } =
    useContext(TasksContext)

  const completedTasks = tasks?.filter((task) => task.status === "done")
  const tasksInProgress = tasks?.filter((task) => task.status === "in_progress")

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
            dailyTarget={dailyWaterConsumption}
            proguess={amountOfWaterConsumed}
          />
        </div>
      </div>
    </div>
  )
}

export default HomePage
