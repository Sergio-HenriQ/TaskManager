import { toast } from "sonner"

export const changeTaskStatus = (taskId, data, queryClient, queryName) => {
  const newTasks = data.map((task) => {
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
  queryClient.setQueryData(`${queryName}`, newTasks)
}
