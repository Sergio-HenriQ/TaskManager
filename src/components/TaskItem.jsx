import CheckIcon from "../assets/icons/check.svg?react"
import LoaderIcon from "../assets/icons/loader-circle.svg?react"
import GroupIcon from "../assets/icons/Group.svg?react"

const TaskItem = ({ status, children }) => {
  const getStatusClasses = () => {
    if (status === "done") {
      return "bg-[#00ADB5] text-[#00ADB5]"
    }

    if (status === "not_started") {
      return "bg-[#35383E] bg-opacity-10 text-[#35383E]"
    }

    if (status === "in_progress") {
      return "bg-[#FFAA04] text-[#FFAA04]"
    }
  }
  return (
    <div
      className={`flex items-center justify-between gap-2 rounded-lg bg-opacity-10 px-4 py-3 text-sm transition ${getStatusClasses()}`}
    >
      <div className="flex items-center gap-2">
        <label
          className={`relative flex h-7 w-7 cursor-pointer items-center justify-center rounded-lg ${getStatusClasses()}`}
        >
          <input
            type="checkbox"
            checked={status === "done"}
            readOnly
            className="absolute h-full w-full cursor-pointer opacity-0"
          />
          {status === "done" && <CheckIcon />}
          {status === "in_progress" && <LoaderIcon className="animate-spin" />}
        </label>
        {children}
      </div>

      <a href="#" className="transition hover:opacity-75">
        <GroupIcon />
      </a>
    </div>
  )
}

export default TaskItem
