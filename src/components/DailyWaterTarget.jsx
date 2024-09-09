import { SquarePenIcon } from "../assets/icons"
import TaskItem from "./TaskItem"

const DailyWaterTarget = ({
  dailyTarget,
  proguess,
  handleTaskCheckboxClick,
}) => {
  return (
    <div className="flex min-w-[420px] max-w-[420px] flex-col gap-6 rounded-xl bg-brand-white p-6">
      <div className="flex justify-between">
        <div>
          <h1 className="text-xl font-semibold text-brand-dark-blue">Água</h1>
          <p className="text-sm text-brand-text-gray">
            Beba sua meta diária de água
          </p>
        </div>
        {/* icone de editar */}
        <div>
          <span className="flex gap-1 text-xs font-semibold text-brand-primary">
            Editar <SquarePenIcon />
          </span>
        </div>
      </div>

      <div className="flex w-full items-end justify-between gap-3 text-xs">
        <div className="flex flex-col gap-3">
          {dailyTarget?.map((task) => (
            <TaskItem
              key={task.id}
              task={task}
              handleCheckboxClick={handleTaskCheckboxClick}
            />
          ))}
        </div>
        <p className="text-xl font-semibold text-brand-primary">
          {proguess?.title}{" "}
          <span className="text-xs text-brand-dark-blue">/2.5L</span>
        </p>
      </div>
    </div>
  )
}

export default DailyWaterTarget
