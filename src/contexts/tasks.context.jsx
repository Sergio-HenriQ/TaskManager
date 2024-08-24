import { createContext } from "react"

import {
  amountOfWaterConsumed,
  dailyWaterConsumption,
} from "../constants/scripts"
import { useGetTasks } from "../hooks/data/use-get-tasks"

export const TasksContext = createContext({
  tasks: null,
  amountOfWaterConsumed: amountOfWaterConsumed,
  dailyWaterConsumption: dailyWaterConsumption,
})

const TasksContextProvider = ({ children }) => {
  const { data: tasks } = useGetTasks()

  return (
    <TasksContext.Provider
      value={{ tasks, amountOfWaterConsumed, dailyWaterConsumption }}
    >
      {children}
    </TasksContext.Provider>
  )
}

export default TasksContextProvider
