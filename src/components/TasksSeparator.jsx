const TasksSeparator = ({ title, icon }) => {
  return (
    <div className="flex w-full gap-2 border-b border-solid border-brand-border pb-1 font-semibold">
      {icon}
      <p className="text-sm text-brand-text-gray">{title}</p>
    </div>
  )
}

export default TasksSeparator
