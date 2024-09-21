export const deleteAllTasks = async (taskId) => {
  const response = await fetch(`http://localhost:3000/tasks/${taskId}`, {
    method: "DELETE",
  })

  if (!response.ok) {
    throw new Error("Failed to delete tasks")
  }

  return response.json()
}
