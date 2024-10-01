const TasksInfo = ({ icon, quantity, text }) => {
  return (
    <div className="flex w-[250px] flex-col items-center gap-1 rounded-xl bg-brand-white px-8 py-10">
      <div className="flex items-center gap-2">
        <div className="h-6 w-6">{icon}</div>
        <span className="text-3xl font-semibold text-brand-dark-blue">
          {quantity}
        </span>
      </div>
      <p className="text-base text-brand-dark-blue">{text}</p>
    </div>
  )
}

export default TasksInfo
