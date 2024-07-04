const TasksSeparator = ({ title, icon }) => {
  return (
    <div className="flex w-full gap-2 border-b border-solid border-[#F4F4F5] pb-1 font-semibold">
      {icon}
      <p className="text-sm text-[#9A9C9F]">{title}</p>
    </div>
  )
}

export default TasksSeparator
