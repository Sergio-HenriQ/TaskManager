import { GroupIcon } from "../assets/icons"
import TaskItem from "./TaskItem"

const SummaryOfTasks = ({ tasks }) => {
  return (
    <div className="flex w-full flex-col gap-6 rounded-xl bg-brand-white p-6">
      {/* Titulos */}
      <div>
        <h1 className="text-xl font-semibold text-brand-dark-blue">Tarefas</h1>
        <p className="text-sm text-brand-text-gray">
          Resumo das tarefas disponíveis
        </p>
      </div>

      <div className="flex flex-col gap-3">
        {tasks?.map((task) => (
          <TaskItem key={task.id} task={task} groupIcon={<GroupIcon />} />
        ))}
      </div>
    </div>
  )
}

export default SummaryOfTasks
