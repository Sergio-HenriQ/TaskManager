import { changesTheStatusType } from "./changesTheStatusType"

export const updateTaskStatus = async (
  taskId,
  task,
  allStatusArr,
  parameter
) => {
  const response = await fetch(`http://localhost:3000/${parameter}/${taskId}`, {
    method: "PATCH",
    body: JSON.stringify({
      status: changesTheStatusType(task.status, allStatusArr),
    }),
  })

  if (!response.ok) {
    throw new Error()
  }

  return await response.json()
}
